const db = {
  discount: [
    {
      id: Math.random().toString(36).substring(2, 11),
      url: 'dis_dress_shirt.png',
      price: 3000,
      price_discount: 1700,
      title: 'Рубашка',
    },
    {
      id: Math.random().toString(36).substring(2, 11),
      url: 'dis_jacket.png',
      price: 4000,
      price_discount: 2700,
      title: 'Жакет',
    },
    {
      id: Math.random().toString(36).substring(2, 11),
      url: 'dis_polo.jpg',
      price: 2000,
      price_discount: 700,
      title: 'Футболка поло',
    },
    {
      id: Math.random().toString(36).substring(2, 11),
      url: 'dis_sneakers.png',
      price: 2500,
      price_discount: 1100,
      title: 'Красовки',
    },
  ],
  collection: {
    man: [
      {
        id: Math.random().toString(36).substring(2, 11),
        url: 'col_man_polo1.jpg',
        price: 4000,
        price_discount: '',
        title: 'Футболка поло 1',
      },
      {
        id: Math.random().toString(36).substring(2, 11),
        url: 'col_man_polo2.png',
        price: 3000,
        price_discount: 500,
        title: 'Футболка поло 2',
      },
      {
        id: Math.random().toString(36).substring(2, 11),
        url: 'col_man_polo3.png',
        price: 4200,
        price_discount: 3200,
        title: 'Футболка поло 3',
      },
      {
        id: Math.random().toString(36).substring(2, 11),
        url: 'col_man_polo4.png',
        price: 2800,
        price_discount: '',
        title: 'Футболка поло 4',
      },
    ],
    woman: [
      {
        id: Math.random().toString(36).substring(2, 11),
        url: 'col_woman_dress1.png',
        price: 8000,
        price_discount: '',
        title: 'Платье 1',
      },
      {
        id: Math.random().toString(36).substring(2, 11),
        url: 'col_woman_dress2.png',
        price: 7000,
        price_discount: 3000,
        title: 'Платье 2',
      },
      {
        id: Math.random().toString(36).substring(2, 11),
        url: 'col_woman_dress3.jpg',
        price: 5000,
        price_discount: '',
        title: 'Платье 3',
      },
      {
        id: Math.random().toString(36).substring(2, 11),
        url: 'col_woman_dress4.png',
        price: 4000,
        price_discount: 2000,
        title: 'Платье 4',
      },
    ],
  },
};

export function findAll(arr: string) {
  return db[arr];
}

export function findId(id: string) {
  let result: any = '';
  db.collection.man.forEach((item) => {
    if (item.id === id) {
      result = item;
    }
  });
  db.collection.woman.forEach((item) => {
    if (item.id === id) {
      result = item;
    }
  });
  return result;
}
