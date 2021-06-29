import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Search } from './styles';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const history = useHistory();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (query) {
      history.push({
        pathname: '/search',
        state: { query },
      });
    } else {
      alert('Invalid Search');
    }
  }

  return (
    <Container>
      <Search onSubmit={handleSubmit}>
        <input
          placeholder="Search Book"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </Search>
    </Container>
  );
};

export default SearchBar;
