import { Injectable } from '@angular/core';
import { getItem, removeItem, setItem, StorageItem } from '@app/@core/utils';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(!!getItem(StorageItem.Auth));

  constructor() {}

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  currentUser() {
    if(this.isLoggedIn$.getValue()) {
      return getItem(StorageItem.User);
    }
    return;
  }

  setUser(user:any) {
    return setItem(StorageItem.User, user);
  }

  signIn(): void {
    const token = Array(4)
      .fill(0)
      .map(() => Math.random() * 99)
      .join('-');

    setItem(StorageItem.Auth, token);
    this.isLoggedIn$.next(true);
  }

  signOut(): void {
    removeItem(StorageItem.Auth);
    this.isLoggedIn$.next(false);
  }
}
