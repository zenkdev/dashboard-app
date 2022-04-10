export interface Header {
  caption: string;
  propertyName: keyof Row;
  sortable?: boolean;
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

export enum RowFiler {
  Even,
  Odd,
  All,
}
