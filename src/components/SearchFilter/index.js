import ThemeToggle from 'components/ThemeToggle';
import React, { useEffect, useState } from 'react';
import SearchFilterStyles, { StyledInput, StyledSelect } from './styles';

const types = [
  { label: 'All', value: null },
  { label: 'Movies', value: 'movie' },
  { label: 'Series', value: 'series' },
  { label: 'Episodes', value: 'episode' },
];

const years = Array(30)
  .fill()
  .map((item, i) => ({ value: 2020 - i, label: `${2020 - i}` }));

const SearchFilter = ({ params, setParams }) => {
  const [localParams, setLocalParams] = useState(params);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setParams(localParams);
    }, 300);

    return () => clearTimeout(timeout);
  }, [localParams]);

  return (
    <SearchFilterStyles>
      <StyledInput
        placeholder="Metropolis"
        size="large"
        bordered={false}
        value={localParams?.search}
        onChange={(e) => setLocalParams({ ...params, search: e.target.value })}
      />

      <StyledSelect
        options={types}
        size="large"
        bordered={false}
        placeholder="Movies"
        value={localParams?.type}
        onChange={(type) => setLocalParams({ ...params, type })}
      />
      <StyledSelect
        options={years}
        size="large"
        bordered={false}
        placeholder="2020"
        value={localParams?.year}
        onChange={(year) => setLocalParams({ ...params, year })}
        allowClear
      />

      <ThemeToggle />
    </SearchFilterStyles>
  );
};

export default SearchFilter;
