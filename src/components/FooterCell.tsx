import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { Header } from '../services';
import { MainContext } from './Main';

interface FooterCellProps {
  data: Header;
}

function FooterCell({ data }: FooterCellProps) {
  const { allowSearch } = data;
  const { searchText, setSearchText } = useContext(MainContext);
  const debounced = useDebounce(setSearchText, 300);
  const [value, setValue] = useState(allowSearch ? searchText : undefined);
  const handleChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const nextValue = evt.target.value;
      setValue(nextValue);
      console.log('handleChange', nextValue);
      debounced(nextValue);
    },
    [searchText, setSearchText],
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
