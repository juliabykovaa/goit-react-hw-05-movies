import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, NavLinkList } from './Layout.styled';
import Loader from 'components/Loader/Loader';

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default Layout;
