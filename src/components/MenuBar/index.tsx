import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/icons/home.svg';
import BookIcon from '../../assets/icons/book.svg';
import UserIcon from '../../assets/icons/user.svg';

import { Container, Menu } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Menu>
        <Link to="/">
          <button type="button">
            <img src={HomeIcon} alt="" />
            <span>Home</span>
          </button>
        </Link>
        <Link to="/">
          <button type="button">
            <img src={BookIcon} alt="" />
            <span>Libraries</span>
          </button>
        </Link>
        <Link to="/">
          <button type="button">
            <img src={UserIcon} alt="" />
            <span>Profile</span>
          </button>
        </Link>
      </Menu>
    </Container>
  );
};

export default MenuBar;
