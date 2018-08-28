import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 96px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 16px 0;
`;

const NavLinks = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row nowrap;

  & a {
    text-decoration: none;
    ${props => props.theme === "white" &&
      `color: #fff;`
    }
    ${props => props.theme === "black" &&
      `color: #000;`
    }
  }
`

const NavLink = styled.li`
  list-style: none;
  font-size: 1.25rem;
  font-weight: normal;
  margin-right: 16px;

  &:last-of-type {
    margin-right: 0;
  }
`

const NavBrand = styled.a`
  height: 100%;
  width: 72px;
  background-size: cover;
  background-position: center;
  margin: 0 16px;
  cursor: pointer;

  ${props => props.theme === "white" &&
    `background-image: url('/static/umami-agency-inverse.png');`
  }
  ${props => props.theme === "black" &&
    `background-image: url('/static/umami-agency.png');`
  }
`

const Nav = ({page, theme}) => (
  <NavWrapper>
    <NavLinks theme={theme}>
      <NavLink>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </NavLink>
      <NavLink>
        <Link href="/friends">
          <a>Friends</a>
        </Link>
      </NavLink>
    </NavLinks>
    <Link href="/">
      <NavBrand theme={theme}/>
    </Link>
    <NavLinks theme={theme}>
      <NavLink>
        <Link href="/about">
          <a>About</a>
        </Link>
      </NavLink>
      <NavLink>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </NavLink>
    </NavLinks>
  </NavWrapper>
);

export default Nav;
