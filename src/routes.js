import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route path="/tela2/:nome">
        <Tela2Screen />
      </Route>
      <PrivateRoute path="/orders">
        <h1>Tela de Pedidos</h1>
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <h1>Tela de Perfil</h1>
      </PrivateRoute>
    </Switch>
  );
};
export default Routes;
