const defaultData = {
  user: {
    name: 'Ali',
    level: 'diamond'
  },
  products: [
    {
      name: 'Kone',
      price: '3488.99',
      currency: 'RM',
      discount: [
        {
          user_level: 'diamond', // associate, diamond, other
          discount_type: 'after_minimum_purchase_fix_discount_price',
          minimum_items: 3,
          discount_price_per_item: '2588.99'
        },
      ]
    },
    {
      name: 'Ironhide Cartridge',
      price: '529.99',
      currency: 'RM',
      discount: [
        {
          user_level: 'diamond', // associate, diamond, other
          discount_type: 'free_item_with_item',
          to_purchase: 2,
          free_products: 1
        },
      ]
    }
  ]
};

export { defaultData };

/*
products: [
  {
    name: '',
    price: '',
    discount: [
      {
        user_type: '' // associate, diamond, other
        discount_type: 'free_item_with_item'
        to_purchase: 2,
        free_products: 1
      },
      {
        user_type: '' // associate, diamond, other
        discount_type: 'after_minimum_purchase_fix_discount_price'
        minimum_items: 3
        discount_price_per_item:
      },
      {
        user_type: '' // associate, diamond, other
        discount_type: 'after_minimum_purchase_percentage_discount_price'
        minimum_items: 3
        discount_percentage:
      }
    ]
  }
]
*/
