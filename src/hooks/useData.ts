import { useContext, useMemo } from 'react';
import { MainContext } from '../components/Main';
import { data as originalData, headers, Row, RowFiler, SortOrder } from '../services';

const compareAsc = (a: Row, b: Row) => a.data.localeCompare(b.data);
const compareDesc = (a: Row, b: Row) => b.data.localeCompare(a.data);

export const useData = () => {
  const { rowFilter, sortOrder, searchText } = useContext(MainContext);
  const data = useMemo(() => {
    let filteredData = [...originalData]; // sorts the elements of an array in place
    if (rowFilter !== RowFiler.All) {
      filteredData = filteredData.filter((_, rowIndex) => {
        switch (rowFilter) {
          case RowFiler.Even:
            return rowIndex % 2 === 1; // index starts with 0
          case RowFiler.Odd:
            return rowIndex % 2 === 0;
        }
        return false;
      });
    }
    if (searchText) {
      filteredData = filteredData.filter(row => row.data.indexOf(searchText) > -1);
    }
    if (sortOrder === SortOrder.None) {
      return filteredData;
    }
    return filteredData.sort(sortOrder === SortOrder.Ascending ? compareAsc : compareDesc);
  }, [rowFilter, sortOrder, searchText]);

  return { headers, data };
};
