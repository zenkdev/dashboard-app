import { useMemo } from 'react';
import { data as originalData, headers, RowFiler } from '../services';

export const useData = (rowFilter: RowFiler) => {
  const data = useMemo(() => {
    return originalData.filter((_, rowIndex) => {
      switch (rowFilter) {
        case RowFiler.Even:
          return rowIndex % 2 === 1; // index starts with 0
        case RowFiler.Odd:
          return rowIndex % 2 === 0;
        case RowFiler.All:
          return true;
      }
      return false;
    });
  }, [rowFilter]);

  return { headers, data };
};
