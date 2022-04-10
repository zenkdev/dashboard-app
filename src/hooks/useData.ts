interface Header {
  caption: string;
  sortable?: boolean;
  searchPlaceholder?: string;
}
type Headers = Header[];

const headers: Headers = [
  { caption: 'Data', sortable: true, searchPlaceholder: 'Search...' },
  { caption: 'Summary1' },
  { caption: 'Summary2' },
  { caption: 'Summary3' },
  { caption: 'Summary4' },
  { caption: 'Summary5' },
];

interface Row {
  data: string;
  summary1: number;
  summary2: number;
  summary3: number;
  summary4: number;
  summary5: number;
}

type Data = Row[];

const data: Data = [
  {
    data: 'Data1',
    summary1: 186,
    summary2: 186,
    summary3: 92,
    summary4: 8,
    summary5: 1,
  },
  {
    data: 'Data2',
    summary1: 95,
    summary2: 95,
    summary3: 31,
    summary4: 11,
    summary5: 0,
  },
  {
    data: 'Data3',
    summary1: 329,
    summary2: 329,
    summary3: 256,
    summary4: 32,
    summary5: 4,
  },
  {
    data: 'Data4',
    summary1: 804,
    summary2: 804,
    summary3: 697,
    summary4: 40,
    summary5: 22,
  },
];

export const useData = () => {
  return { headers, data };
};
