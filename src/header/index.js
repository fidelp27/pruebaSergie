import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <Link to={'/table'}>Table </Link>
      <Link to={'/form'}>Form </Link>
    </header>
  );
};
export { Header };
