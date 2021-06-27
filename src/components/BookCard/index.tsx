import React, { useState, useEffect, FormEvent } from 'react';
import BookImg from '../../assets/Hooked.png';

import { Container } from './styles';

interface BookProps {
  title: string;
  author: string;
  pageCount: number;
  thumbnail: string;
  selflink: string;
}

const BookCard: React.FC<BookProps> = ({
  title,
  author,
  pageCount,
  thumbnail,
}: any) => {
  return (
    <Container>
      <div className="info">
        <div>
          <h1>{title}</h1>
          <h2>{author}</h2>
        </div>
        <span>
          🎉 <strong>{pageCount}</strong> Read Now
        </span>
      </div>
      <div className="picture">
        <img src={thumbnail} alt="" />
      </div>
    </Container>
  );
};

export default BookCard;
