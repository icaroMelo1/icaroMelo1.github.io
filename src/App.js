import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Initial/Page/index';
import PixelArt from './pages/PixelArt/pages';
import WalletProject from './pages/Wallet/src/App';
import MovieCardsLibrary from './pages/MovieCardsLibrary/src/App';
import MovieCardsCrud from './pages/MovieCardsCrud/src/App';
import MovieCardsStateful from './pages/MovieCardsStateful/src/App';
// import OnlineStore from './pages/OnlineStore/src/App';
import RTL from './pages/ReactTestLibrary/src/App';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component= { Home } />
          <Route exact path="/pixel-art" component= { PixelArt } />
          <Route exact path="/movie-cards-library" component= { MovieCardsLibrary } />
          <Route exact path="/movie-cards-crud" component= { MovieCardsCrud } />
          <Route exact path="/movie-cards-stateful" component= { MovieCardsStateful } />
          {/* <Route exact path="/online-store" component= { OnlineStore } /> */}
          <Route exact path="/react-tests" component= { RTL } />
          <Route exact path="/wallet" component= { WalletProject } />
        </Switch>
      </BrowserRouter>
      {/* <BrowserRouter>\
        <Switch>

        </Switch>
      </BrowserRouter> */}
    </>
  );
}

export default App;
