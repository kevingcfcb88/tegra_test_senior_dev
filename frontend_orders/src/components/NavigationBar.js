import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ active }) => {
  const activeItem = 'active item';
  const item = 'item';
  return (
    <div className="ui pointing menu">
      <Link to="/" className={active === '/' ? activeItem : item}>
        Orders
      </Link>
      <Link
        to="/uploadOrders"
        className={active === 'upload' ? activeItem : item}
      >
        Upload Orders
      </Link>
    </div>
  );
};

export default NavigationBar;
