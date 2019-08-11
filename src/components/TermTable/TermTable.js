import React from 'react';

import './TermTable.scss';

const TOTAL_POST = 100;
const PercentageCell = ({ value }) => {
  const percentage = (value / TOTAL_POST) * 100;
  return (
    <span className="cell bar">
      <span className="barValue" style={{ width: `${percentage}%` }}/>
      <span className="barText">{`${percentage}%`}</span>
    </span>
  )
};

const TermRow = ({ term }) => (
  <div className="row">
    <span className="cell title">{term.name}</span>
    <PercentageCell value={term.count} />
    <span className="cell count">{term.count}</span>
  </div>
);

const TermTable = ({ terms }) => (
  <div className="tableContainer">
    <div className="row header">
      <span className="cell title">Terms</span>
      <span className="cell middle">% of total posts</span>
      <span className="cell count"># of posts</span>
    </div>
    {
      terms.map(term => (
        <TermRow key={term.name} term={term} />
      ))
    }
  </div>
);


export default TermTable;
