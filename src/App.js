import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Menu, PageBody } from './AppStyled';
import MenuItem from './components/MenuItem/MenuItem';

import Routes from './routes';

export default () => {
  const name = useSelector((state) => state.user.name);

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem icon="/assets/store.png" link="/"/>
          <MenuItem icon="/assets/order.png" link="/orders"/>
          <MenuItem icon="/assets/profile.png" link="/profile"/>
        </Menu>
        <PageBody>
          <Routes />
        </PageBody>
      </Container>
      <h1>Oi, {name}</h1>
    </BrowserRouter>
  );
};
