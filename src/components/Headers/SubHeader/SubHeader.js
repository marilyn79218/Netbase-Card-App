import React from 'react';
import { NavLink } from "react-router-dom";

// import Icon from '../../Common/Icon/Icon';
import SVGIcon from "../../Common/Icon/SVGIcon";

import './SubHeader.scss';

const NavItem = ({ to, children }) => (
  <div className="item">
    <NavLink to={to} exact className="navItem" activeClassName="itemChecked">
      { children }
    </NavLink>
  </div>
);

class SubHeader extends React.Component {
  state = {
    visible: true
  };

  hideHandler = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return visible && (
      <div className='root'>
        <div className='navContainer'>
          <NavItem to='/'>ALL</NavItem>
          <NavItem to='/page1'><SVGIcon className="icon" iconName="google_icon"/></NavItem>
          <NavItem to='/page2'><SVGIcon className="icon" iconName="iTunes_icon"/></NavItem>
        </div>
        <button className='hideBtn' onClick={this.hideHandler}>HIDE</button>
      </div>
    )
  }
};


export default SubHeader;
