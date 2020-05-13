/**
 *
 * Nav
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: #faedca;
  height: 35px;
`;

const Link = styled(NavLink)`
  color: #ef6351;
  &.active {
    font-weight: bold;
  }
  text-decoration: none;
  margin-top: 8px;
`;

function Nav() {
  return (
    <NavBar>
      <Link exact to="/">
        Quotes
      </Link>
      <Link exact to="/new">
        Add a Quote
      </Link>
    </NavBar>
  );
}

export default Nav;
