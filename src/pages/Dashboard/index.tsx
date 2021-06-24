import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import { Search, Greeting } from './styles';
import BookCard from '../../components/BookCard';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [query, setQuery] = useState('');
  const [inputError, setInputError] = useState('');

  const userName = 'Evert';

  return (
    <>
      <Search onSubmit={() => {}}>
        <input
          placeholder="Search Book"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </Search>
      <Greeting>
        Hi, <span>{userName}</span> 👋
      </Greeting>
      <BookCard />
    </>
  );
};

export default Dashboard;
