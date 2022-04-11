import { useContext, useMemo } from 'react';
import { AppContext } from '../components/AppContext';
import { data as originalData, headers, RowFilter, SortOrder } from '../services';

const addFilter = (fn1: Function, fn2?: Function): Function =>
  typeof fn2 === 'undefined' ? fn1 : (...args: any[]) => fn1(...args) && fn2(...args);

export const useData = () => {
  const { rowFilter, sortOrder, searchText } = useContext(AppContext);
  const data = useMemo(() => {
    let filteredData = [...originalData]; // sorts the elements of an array in place
    if (rowFilter !== RowFilter.All) {
      filteredData = filteredData.filter((_, rowIndex) => {
        switch (rowFilter) {
          case RowFilter.Even:
            return rowIndex % 2 === 1; // index starts with 0
          case RowFilter.Odd:
            return rowIndex % 2 === 0;
        }
        return false;
      });
    }
    let filterBy = Object.entries(searchText).reduce(
      (acc, [propertyName, search]) =>
        search ? addFilter((row: any) => row[propertyName].indexOf(search) > -1, acc) : acc,
      undefined as any,
    );
    if (filterBy) {
      filteredData = filteredData.filter(filterBy);
    }

    Object.entries(sortOrder).forEach(([propertyName, sortOrder]) => {
      if (sortOrder === SortOrder.Ascending) {
        filteredData.sort((a: any, b: any) => a[propertyName].localeCompare(b[propertyName]));
      }
      if (sortOrder === SortOrder.Descending) {
        filteredData.sort((a: any, b: any) => b[propertyName].localeCompare(a[propertyName]));
      }
    });

    return filteredData;
  }, [rowFilter, sortOrder, searchText]);

  return { headers, data };
};
