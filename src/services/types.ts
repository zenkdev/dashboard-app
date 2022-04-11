export interface Header {
  caption: string;
  propertyName: keyof Row;
  allowSort?: boolean;
  allowSearch?: boolean;
  searchPlaceholder?: string;
}

export type Headers = Header[];

export interface Row {
  data: string;
  summary1: number;
  summary2: number;
  summary3: number;
  summary4: number;
  summary5: number;
}

export type Data = Row[];

export enum RowFilter {
  Even,
  Odd,
  All,
}

export enum SortOrder {
  None = 'none',
  Ascending = 'ascending',
  Descending = 'descending',
}
