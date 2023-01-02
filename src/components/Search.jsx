import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchBar = styled.form`
  input[type='search'] {
    margin-right: 0.2rem;
  }

  input::placeholder {
    color: var(--on-surface-low-emphasis);
  }
`;

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const performSearch = () => {
    navigate(`/search?q=${query}`);
  };

  return (
    <SearchBar
      onSubmit={(e) => {
        e.preventDefault();
        if (query) {
          performSearch();
        }
      }}
    >
      <input
        type='search'
        placeholder='Search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </SearchBar>
  );
}

export default Search;
