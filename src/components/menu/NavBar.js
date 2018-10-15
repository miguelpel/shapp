import React, { Component } from 'react';

import Logo from './logo';
import UserName from './username';
import NavLinks from './NavLink';

class NavBar extends Component {
    render() {
      return (
        <div>
            <Logo />
            <UserName />
            <NavLinks />        
        </div>
      );
    }
  }

  export default NavBar ;