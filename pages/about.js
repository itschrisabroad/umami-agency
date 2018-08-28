import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'

const PageWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 96px;
`;

const PageTitle = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: #000;
  position: relative;
  text-align: center;
  display: flex;
  width: calc(100% - 32px);
  margin: auto;
  margin-bottom: 24px;

  &::after {
    content: "";
    width: 100%;
    height: 8px;
    position: absolute;
    bottom: -8px;
    background: #000;
    left: 0;
    right: 0;
  }

  @media all and (max-width: 880px) {
    font-size: 3.5rem;
  }

  @media all and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

class About extends Component {

  render() {
    return (
      <PageWrapper className="about">
        <Nav page="/about" theme="black"/>
        <PageTitle className="about__pageTitle">
          About
        </PageTitle>
      </PageWrapper>
    );
  }

}

export default About;
