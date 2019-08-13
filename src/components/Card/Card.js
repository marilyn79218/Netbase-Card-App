import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Home from '../Home/Home';
import EmptyPage from '../EmptyPage/EmptyPage';
import MastHeader from '../Headers/MastHeader/MastHeader';
import SubHeader from '../Headers/SubHeader/SubHeader';
import Footer from '../Footer/Footer';

import './Card.scss';


const CardContent = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/page1" component={EmptyPage} />
      <Route exact path="/page2" component={EmptyPage} />
    </Switch>
  </React.Fragment>
);

class Card extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="card">
          <MastHeader />
          <SubHeader />
          <CardContent />
          <Footer />
        </div>
      </div>
    );
  }
};

const history = createBrowserHistory();
const CardRoutes = () => (
  <Router history={history}>
    <Card/>
  </Router>
);

export default CardRoutes;
