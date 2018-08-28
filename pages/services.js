import React, { Component } from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';
import Head from 'next/head'
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

const ServicesList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: auto;
  padding: 0 16px;
  box-sizing: border-box;

  .Collapsible {
    background: #fff;
    width: 100%;
    margin-bottom: 16px;
  }

  .Collapsible__trigger {
    display: block;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    position: relative;
    padding: 24px;
    background: #000;
    box-sizing: border-box;
    cursor: pointer;

    @media all and (max-width: 880px) {
      font-size: 1.5rem;
    }

    @media all and (max-width: 600px) {
      font-size: 1.25rem;
    }

    &.is-open {
      background: #000;
    }

    &.is-disabled {
      opacity: 0.5;
      background-color: grey;
    }
  }

  .Collapsible__contentInner {
    padding: 24px 24px 8px;
    display: block;
    text-decoration: none;
    position: relative;

    & p {
      font-size: 1.25rem;
      line-height: 20px;
      color: #000;
      margin: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const ServicesListContent = styled.p`
  width: 100%;
  padding: 0;
  background: #fff;
  color: #000;
  transition: 0.4s linear all;
  display: ${props => props.expanded ? 'flex' : 'none'};
`;

class Services extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSection: "",
    }
  }

  render() {
    return (
      <PageWrapper className="servicesWrapper">
        <Head>
          <title>Services | Umami Agency</title>
        </Head>
        <Nav theme="black"/>
        <PageTitle className="servicesTitle">
          Services
        </PageTitle>
        <ServicesList>
          <Collapsible trigger="Presence Management">
            <p>sdfsdfsdfsdf</p>
          </Collapsible>
          <Collapsible trigger="Customer Retention">
            <p>sdfsdfsdfsdf</p>
          </Collapsible>
          <Collapsible trigger="Content Creation">
            <p>sdfsdfsdfsdf</p>
          </Collapsible>
          <Collapsible trigger="Detail Consulting">
            <p>sdfsdfsdfsdf</p>
          </Collapsible>
        </ServicesList>
      </PageWrapper>
    );
  }

}

export default Services;
