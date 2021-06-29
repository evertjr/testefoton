import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../../services/api';
import BookImg from '../../assets/BlankBook.png';

import { Container, Results } from './styles';
import SearchBar from '../../components/SearchBar';
import MenuBar from '../../components/MenuBar';

interface Book {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
    pageCount: number;
    imageLinks: {
      smallThumbnail: string;
    };
  };
}

interface QueryParams {
  query: string;
}

const SearchResult: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchedBooks, setSearchedBooks] = useState<Book[]>([]);

  const location = useLocation<QueryParams>();
  const { query } = location.state;

  useEffect(() => {
    try {
      api
        .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
          params: {
            maxResults: 12,
          },
        })
        .then(response => {
          setSearchedBooks([...response.data.items]);
          setIsLoaded(true);
        });
    } catch (error) {
      alert('Sorry could not find');
    }
  }, [query]);

  async function loadMore() {
    try {
      api
        .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
          params: {
            maxResults: 40,
          },
        })
        .then(response => {
          setSearchedBooks([...response.data.items]);
          setIsLoaded(true);
        });
    } catch (error) {
      alert('Sorry could not find');
    }
  }

  return (
    <Container>
      <SearchBar />
      <Results>
        {isLoaded ? (
          searchedBooks.map(i => (
            <Link
              key={i.id}
              to={{
                pathname: `/books/${i.volumeInfo.title}`,
                state: { apiURL: i.selfLink },
              }}
            >
              <div>
                <img
                  src={
                    (i.volumeInfo.imageLinks &&
                      i.volumeInfo.imageLinks.smallThumbnail) ||
                    BookImg
                  }
                  alt=""
                />
                <h2>{i.volumeInfo.title}</h2>
                <h3>{i.volumeInfo.authors && i.volumeInfo.authors[0]}</h3>
              </div>
            </Link>
          ))
        ) : (
          <span className="loadMsg">One sec...</span>
        )}
      </Results>
      <button className="loadBtn" type="button" onClick={loadMore}>
        Load more
      </button>
      <MenuBar />
    </Container>
  );
};

export default SearchResult;
