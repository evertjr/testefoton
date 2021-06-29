import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import VideoFrame from '../../assets/videoFrame.png';
import OriginalsBook from '../../assets/originalsBook.png';

import { Container, Greeting, Title, Featured, Reviews } from './styles';
import EmblaCarousel from '../../components/EmblaCarousel/index.jsx';
import SearchBar from '../../components/SearchBar';
import MenuBar from '../../components/MenuBar';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [newBooks, setNewBooks] = useState<Book[]>([]);

  const userName = 'Evert';

  useEffect(() => {
    api
      .get('https://www.googleapis.com/books/v1/volumes?q=Game of Thrones', {
        params: {
          maxResults: 5,
        },
      })
      .then(response => {
        setNewBooks([...response.data.items]);
        setIsLoaded(true);
      });
  }, []);

  return (
    <Container>
      <SearchBar />
      <Greeting>
        Hi, <span>{userName}</span> 👋
      </Greeting>
      <Title>
        <h2>Discover new books</h2>
        <button type="button">More</button>
      </Title>
      {isLoaded && <EmblaCarousel slides={newBooks} />}
      <Title>
        <h2>Currently Reading</h2>
        <button type="button">All</button>
      </Title>
      <Featured>
        <img src={OriginalsBook} alt="" />

        <div>
          <h1>Originals</h1>
          <h3>by Adam Grant</h3>
          <span>
            📖 Chapter <strong>2</strong> from 9
          </span>
        </div>
      </Featured>
      <Title>
        <h2>Review of the day</h2>
        <button type="button">All Videos</button>
      </Title>
      <Reviews>
        <img src={VideoFrame} alt="" />
      </Reviews>
      <MenuBar />
    </Container>
  );
};

export default Dashboard;
