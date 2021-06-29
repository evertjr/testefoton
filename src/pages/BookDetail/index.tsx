import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import api from '../../services/api';
import BookImg from '../../assets/BlankBook.png';

import OpenBookIcon from '../../assets/icons/book-open.svg';
import HeadphoneIcon from '../../assets/icons/headphones.svg';
import ShareIcon from '../../assets/icons/share.svg';
import BackIcon from '../../assets/icons/Back.svg';

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

  const history = useHistory();

  const location = useLocation<BookParams>();
  const { apiURL } = location.state;

  useEffect(() => {
    api.get(apiURL).then(response => {
      setBookDetails(response.data);
    });
  }, [apiURL]);

  return (
    <Container>
      <Description>
        <button type="button" onClick={history.goBack}>
          <img src={BackIcon} alt="" />
        </button>
        <img
          src={
            (BookDetails?.volumeInfo.imageLinks &&
              BookDetails?.volumeInfo.imageLinks.thumbnail) ||
            BookImg
          }
          alt={BookDetails?.volumeInfo.title}
        />
        <h1>{BookDetails?.volumeInfo.title}</h1>
        <h2>
          {BookDetails?.volumeInfo.authors &&
            BookDetails?.volumeInfo.authors[0]}
        </h2>
        <p>{ReactHtmlParser(BookDetails?.volumeInfo.description)}</p>
      </Description>
      <ActionMenu>
        <div>
          <button type="button">
            <img src={OpenBookIcon} alt="" />
            Read
          </button>
          <span className="vl" />
          <button type="button">
            <img src={HeadphoneIcon} alt="" />
            Listen
          </button>
          <span className="vl" />
          <button type="button">
            <img src={ShareIcon} alt="" />
            Share
          </button>
        </div>
      </ActionMenu>
    </Container>
  );
};

export default BookDetail;
