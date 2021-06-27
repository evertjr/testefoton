import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import api from '../../services/api';
import BookImg from '../../assets/Hooked.png';

import { Container, Description, ActionMenu } from './styles';

interface BookParams {
  apiURL: string;
}

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
    description: string | any;
    pageCount: number;
    imageLinks: {
      thumbnail: string;
    };
  };
}

const BookDetail: React.FC = () => {
  const [BookDetails, setBookDetails] = useState<Book>();

  const location = useLocation<BookParams>();
  const { apiURL } = location.state;

  useEffect(() => {
    api.get(apiURL).then(response => {
      setBookDetails(response.data);
    });
  }, []);

  return (
    <Container>
      <Description>
        <Link to="/">Voltar</Link>
        <img
          src={
            BookDetails?.volumeInfo.imageLinks.thumbnail
              ? BookDetails?.volumeInfo.imageLinks.thumbnail
              : BookImg
          }
          alt={BookDetails?.volumeInfo.title}
        />
        <h1>{BookDetails?.volumeInfo.title}</h1>
        <h2>{BookDetails?.volumeInfo.authors[0]}</h2>
        <p>{ReactHtmlParser(BookDetails?.volumeInfo.description)}</p>
      </Description>
      <ActionMenu>
        <div>
          <button type="button">Read</button>
          <span className="vl" />
          <button type="button">Listen</button>
          <span className="vl" />
          <button type="button">Share</button>
        </div>
      </ActionMenu>
    </Container>
  );
};

export default BookDetail;
