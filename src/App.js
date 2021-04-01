import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { Container, Menu, PageBody } from './AppStyled';
import Cart from './components/Cart/Cart';
import MenuItem from './components/MenuItem/MenuItem';

import Routes from './routes';

export default () => {
  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem title="Loja" icon="/assets/store.png" link="/" />
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
          <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
        </Menu>
        <PageBody>
          <Routes />
        </PageBody>
        <Cart />
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  );
};
