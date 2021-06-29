import React from 'react';
import PagesIcon from '../../assets/icons/pages.svg';

import { Container } from './styles';

interface BookProps {
  title: string;
  author: string;
  pageCount: number;
  thumbnail: string;
}

const BookCard: React.FC<BookProps> = ({
  title,
  author,
  pageCount,
  thumbnail,
}: BookProps) => {
  return (
    <Container>
      <div className="info">
        <div>
          <h1>{title}</h1>
          <h2>{author}</h2>
        </div>
        <span>
          <img src={PagesIcon} alt="" />
          <strong>{pageCount}</strong> pages
        </span>
      </div>
      <div className="picture">
        <img src={thumbnail} alt="" />
      </div>
    </Container>
  );
};

export default BookCard;
