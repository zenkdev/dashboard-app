import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { updateSearchText } from '../reducer';
import { Header } from '../services';
import { AppContext, AppDispatchContext } from './AppContext';

interface FooterCellProps {
  data: Header;
}

function FooterCell({ data }: FooterCellProps) {
  const { allowSearch, propertyName } = data;
  const { searchText } = useContext(AppContext);
  const dispatch = useContext(AppDispatchContext);
  const debounced = useDebounce((searchText: string) => dispatch(updateSearchText(propertyName, searchText)), 300);
  const [value, setValue] = useState(searchText[propertyName]);
  const handleChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const nextValue = evt.target.value;
      setValue(nextValue);
      debounced(nextValue);
    },
    [debounced],
  );
  return (
    <td className="footer-cell">
      <input
        className="footer-cell__search"
        type="text"
        size={5}
        value={value}
        onChange={handleChange}
        placeholder={allowSearch ? 'Search...' : undefined}
        disabled={!allowSearch}
      />
    </td>
  );
}

export default FooterCell;
