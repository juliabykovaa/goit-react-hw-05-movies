import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, NavLinkList } from './Layout.styled';

function Layout() {
  return (
    <Container>
      <NavLinkList>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : 'black',
            fontFamily: 'Arial, sans-serif',
            fontSize: 28,
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : 'black',
            fontFamily: 'Arial, sans-serif',
            fontSize: 28,
          })}
        >
          Movies
        </NavLink>
      </NavLinkList>
      <Outlet />
    </Container>
  );
}

export default Layout;
