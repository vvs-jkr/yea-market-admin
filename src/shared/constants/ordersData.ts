// TO-DO временные данные пока не подключен бэкенд

interface IOrdersData {
  id: number;
  title: string;
  date: string;
  price: number;
  status: 'Delivered' | 'To Process' | 'Canceled' | 'Archive';
  isCompleted: boolean;
}

export const ordersData: IOrdersData[] = [
  {
    id: 100194,
    title: 'Warrick White Vase 14',
    date: '21 May 2024',
    price: 49,
    status: 'Delivered',
    isCompleted: true
  },
  {
    id: 103429,
    title: 'Porcelain Dinner Plate',
    date: '21 May 2024',
    price: 52,
    status: 'To Process',
    isCompleted: false
  },
  {
    id: 105372,
    title: 'Warrick White Vase 20',
    date: '21 May 2024',
    price: 49,
    status: 'Canceled',
    isCompleted: false
  },
  {
    id: 105874,
    title: 'Luana Bowl',
    date: '20 May 2024',
    price: 72,
    status: 'Archive',
    isCompleted: true
  },
  {
    id: 106702,
    title: 'Rounded Dual Handled Vase',
    date: '20 May 2024',
    price: 99,
    status: 'To Process',
    isCompleted: false
  },
  {
    id: 108443,
    title: 'Marin White Dinner Plate',
    date: '20 May 2024',
    price: 72,
    status: 'Canceled',
    isCompleted: false
  }
]