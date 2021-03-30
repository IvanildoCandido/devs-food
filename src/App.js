import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Menu, PageBody } from './AppStyled';
import Cart from './components/Cart/Cart';
import MenuItem from './components/MenuItem/MenuItem';

import Routes from './routes';

export default () => {
  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem icon="/assets/store.png" link="/" />
          <MenuItem icon="/assets/order.png" link="/orders" />
          <MenuItem icon="/assets/profile.png" link="/profile" />
        </Menu>
        <PageBody>
          <Routes />
        </PageBody>
        <Cart />
      </Container>
    </BrowserRouter>
  );
};
