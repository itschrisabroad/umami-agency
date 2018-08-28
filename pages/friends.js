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

const ClientCards = styled.section`
  width: 100%;
  padding: 0 16px 16px;
  box-sizing: border-box;
`;

const ClientCard = styled.article`
  width: 100%;
  height: 50vh;
  background: #f0f0f0;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 16px;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media all and (max-width: 600px) {
    flex-flow: column nowrap;
  }
`

const ClientCardImage = styled.div`
  width: 67%;
  height: 100%;
  display: inline-flex;
  background: #9b9b9b;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  @media all and (max-width: 1000px) {
    width: 50%;
  }

  @media all and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`;

const ClientCardContent = styled.div`
  flex: 1;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  background: #000;
  color: #fff;

  @media all and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`;

const ClientCardTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin: 0 0 16px 0;

  @media all and (max-width: 880px) {
    font-size: 1.5rem;
  }

  @media all and (max-width: 600px) {
    font-size: 1.25rem;
  }
`

const ClientCardCopy = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: #fff;
  padding: 0;
  margin: 0;
`;

class Friends extends Component {

  render() {
    return (
      <PageWrapper>
        <Head>
          <title>Friends & Clients | Umami Agency</title>
        </Head>
        <Nav theme="black"/>
        <PageTitle>
          Friends
        </PageTitle>
        <ClientCards className="friends__clientCards">
          <ClientCard className="friends__clientCard">
            <ClientCardImage className="friends__clientCardImage" />
            <ClientCardContent className="friends__clientCardContent">
              <ClientCardTitle className="friends__clientCardTitle">
                See Abu Dhabi
              </ClientCardTitle>
              <ClientCardCopy className="friends__clientCardCopy">
                Check out how we worked with Abu Dhabi's leading tour guide to create a brand-new job description just for her.
              </ClientCardCopy>
            </ClientCardContent>
          </ClientCard>
          <ClientCard className="friends__clientCard">
            <ClientCardContent className="friends__clientCardContent">
              <ClientCardTitle className="friends__clientCardTitle">
                Phoenix Media & Publications
              </ClientCardTitle>
            </ClientCardContent>
            <ClientCardImage className="friends__clientCardImage" image="/static/friends-client-phoenix-media.png"/>
          </ClientCard>
        </ClientCards>
      </PageWrapper>
    );
  }

}

export default Friends;
