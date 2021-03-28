import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
    </Switch>
  );
};
export default Routes;
