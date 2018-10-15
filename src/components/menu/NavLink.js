import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import * as routes from '../../constants/routes';
import './navLink.css';

const NavBar = () => {
    return(
        <div className="myLinks">
           <ul>                   
                <li><img src="images/icons/learn-icon.png" width="30" id="icon"/><NavLink className="activeLink" to={routes.TRAININGS}>Training</NavLink></li>
                <li><img src="images/icons/Organisations-512.png" width="30" id="icon"/><NavLink className="activeLink" to={routes.ORGANISATIONS}>Organisations</NavLink></li>
                <li><img src="images/icons/user_512x512.png" width="30" id="icon"/><NavLink className="activeLink" to={routes.MEMBERS}>Members</NavLink></li>
                <li><img src="images/icons/manage_icon.png" width="30" id="icon"/><NavLink className="activeLink" to={routes.MANAGE} >Manage</NavLink></li>
                <li><img src="images/icons/off.png" width="30" id="icon"/>Logout</li>
            </ul> 

        </div>
    )
}

export default NavBar;