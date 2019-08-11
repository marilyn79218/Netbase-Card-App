import React from 'react';

import TermTable from '../TermTable/TermTable';
import terms from '../../fixtures/terms.json';

import './Home.scss';

const Home = () => (
  <React.Fragment>
    <div className="topTitle">Top Term</div>
    <TermTable terms={terms} />
  </React.Fragment>
);

export default Home;
