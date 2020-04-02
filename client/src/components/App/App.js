import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AppContainer } from './app.style';
import CarOwners from 'components/CarOwners';
import Filters from 'components/Filters';
import { GlobalStyle } from '../shared/GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <AppContainer>
          <Route exact path="/" component={Filters} />
          <Route path="/filter/:filterId" component={CarOwners} />
        </AppContainer>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
