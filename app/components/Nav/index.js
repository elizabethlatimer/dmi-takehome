/**
 *
 * Nav
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: #f9dc93;
  height: 45px;
`;

const Link = styled(NavLink)`
  color: #ef6351;
  font-size: 22px;
  &.active {
    font-weight: bold;
  }
  text-decoration: none;
`;

const NavDiv = styled.div`
  width: 50%;
  text-align: center;
  display: inline-block;
  background-color: ${props => props.color};
  &:hover {
    background-color: ${props => props.hoverColor};
  }
  padding-top: 10px;
`;

function Nav() {
  return (
    <NavBar>
      <NavDiv color="#f9dc93" hoverColor="#f2c078">
        <Link exact to="/">
          Quotes
        </Link>
      </NavDiv>
      <NavDiv color="#f9dc93" hoverColor="#f2c078">
        <Link exact to="/new">
          Add a Quote
        </Link>
      </NavDiv>
    </NavBar>
  );
}

export default Nav;
