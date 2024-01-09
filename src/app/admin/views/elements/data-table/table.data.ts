export interface IProduct {
  id: number;
  name: string;
  color: string;
  category: string;
  price: number;
  width?: number;
}

export interface IColumn {
  field: string;
  headerName: string;
  width?: number | null | undefined;
  isEditable?: boolean;
  isSortable?: boolean;
  type?: string | number | boolean;
}

export class TableData {
  public static readonly products: IProduct[] = [
    {
      id: 1,
      name: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      price: 29999,
      width: 100,
    },
    
  ];
  public static readonly columnData: IColumn[] = [
    {
      field: 'productname',
      headerName: 'product name',
      width: 100,
      isEditable: true,
      isSortable: false,
      
    },
    {
      field: 'color',
      headerName: 'Color',
      width: 100,
      isEditable: true,
      isSortable: false,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 100,
      isEditable: true,
      isSortable: false,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 100,
      isEditable: true,
      isSortable: false,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      isEditable: true,
      isSortable: false,
    },
  ];

  public static readonly pageNumber: number[] = [1, 2, 3, 4, 5];
}
