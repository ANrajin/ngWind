export interface IProduct {
  id: number;
  name: string;
  color: string;
  category: string;
  price: number;
}

export class TableData {
  public static readonly products: IProduct[] = [
    {
      id: 1,
      name: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      price: 29999,
    },
  ];
}
