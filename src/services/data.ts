import { Data, Headers } from './types';

export const headers: Headers = [
  { caption: 'Data', propertyName: 'data', sortable: true, searchPlaceholder: 'Search...' },
  { caption: 'Summary1', propertyName: 'summary1' },
  { caption: 'Summary2', propertyName: 'summary2' },
  { caption: 'Summary3', propertyName: 'summary3' },
  { caption: 'Summary4', propertyName: 'summary4' },
  { caption: 'Summary5', propertyName: 'summary5' },
];

export const data: Data = [
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
