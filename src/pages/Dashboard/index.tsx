import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useEmblaCarousel } from 'embla-carousel/react';
import api from '../../services/api';
import BookImg from '../../assets/Hooked.png';

import { Container, Search, Greeting } from './styles';
import BookCard from '../../components/BookCard';
import EmblaCarousel from '../../components/EmblaCarousel/index.jsx';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
    pageCount: number;
    imageLinks: {
      smallThumbnail: string;
    };
  };
}

const Dashboard: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [newBooks, setNewBooks] = useState<Book[]>([]);

  const userName = 'Evert';

  useEffect(() => {
    api
      .get('https://www.googleapis.com/books/v1/volumes?q=Harry Potter')
      .then(response => {
        setNewBooks([...response.data.items]);
        setIsLoaded(true);
      });
  }, []);

  return (
    <Container>
      <Search>
        <input
          placeholder="Search Book"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </Search>
      <Greeting>
        Hi, <span>{userName}</span> 👋
      </Greeting>
      {isLoaded && <EmblaCarousel slides={newBooks} />}
    </Container>
  );
};

export default Dashboard;
