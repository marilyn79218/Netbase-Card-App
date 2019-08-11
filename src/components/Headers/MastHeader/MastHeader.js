import React from 'react';

// import Icon from '../../Common/Icon/Icon';
import SVGIcon from "../../Common/Icon/SVGIcon";

import './MastHeader.scss';

const MastHeader = () => (
  <div className="mastheader">
    <span className="mastheadText">CARD</span>
    <div className="question">
      {/* <Icon iconName="question_mark_icon" className="questionMark"/> */}
      <SVGIcon iconName="question_mark_icon" className="questionMark"/>
    </div>
  </div>
)

export default MastHeader;
