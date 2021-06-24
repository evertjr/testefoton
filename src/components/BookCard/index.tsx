import React, { useState, useEffect, FormEvent } from 'react';
import BookImg from '../../assets/Hooked.png';

import { Container } from './styles';

const BookCard: React.FC = () => {
  return (
    <Container>
      <div className="info">
        <div>
          <h1>Hookedss</h1>
          <h2>Nir Eyal</h2>
        </div>
        <span>
          🎉 <strong>120+</strong> Read Now
        </span>
      </div>
      <div className="picture">
        <img src={BookImg} alt="" />
      </div>
    </Container>
  );
};

export default BookCard;
