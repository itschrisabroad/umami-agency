import React, { Component } from 'react';
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'

const IndexWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`

const SectionScroll = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-flow: column nowrap;
  scroll-snap-type: y mandatory;
`

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex-flow: column nowrap;
  scroll-snap-align: start;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  padding: 96px 24px;
  box-sizing: border-box;
`

const Hero = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
`

const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: #fff;
  text-align: left;
  margin: 0;
  margin-bottom: 24px;
  padding: 0;

  @media all and (max-width: 880px) {
    font-size: 3.5rem;
  }

  @media all and (max-width: 600px) {
    font-size: 2.5rem;
  }
`

const HeroButton = styled.a`
  width: 100%;
  border: none;
  border-radius: 0;
  background: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  cursor: pointer;
  transition: 0.4s linear all;

  &:hover {
    color: #fff;
    background: #000;
  }

  @media all and (max-width: 880px) {
    font-size: 1.5rem;
  }

  @media all and (max-width: 600px) {
    font-size: 1.25rem;
  }
`

const ServicesTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
  margin-bottom: 48px;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 8px;
    position: absolute;
    bottom: -8px;
    background: #fff;
    left: 0;
    right: 0;
  }

    @media all and (max-width: 1000px) {
      margin-bottom: 16px;
    }
`;

const ServicesCards = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 16px 48px 0;
  box-sizing: border-box;

  @media all and (max-width: 1200px) {
    padding: 16px 0;
  }

  @media all and (max-width: 1000px) {
    flex-flow: column nowrap;
  }
`;

const ServicesCard = styled.article`
  width: calc(33vw - 96px);
  height: calc(33vw - 96px);
  display: inline-flex;
  flex: 1;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-right: 48px;
  box-shadow: 0 2px 8px -2px rgba(0,0,0,0.32);
  position: relative;
  cursor: pointer;
  transition: 0.4s ease-in-out all;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  padding: 24px;
  box-sizing: border-box;

  @media all and (max-width: 1200px) {
    margin-right: 16px;
    width: calc(33vw - 32px);
    height: calc(33vw - 32px);
  }

  @media all and (max-width: 1000px) {
    height: calc(33vh - 96px);
    width: 50vw;
    margin-right: 0;
    margin-bottom: 16px;
  }

  @media all and (max-width: 750px) {
    width: 100%;

    &:hover .servicesCard--content {
      opacity: 1;
    }

    &:hover .servicesCard--title {
      opacity: 0;
      transform: none !important;
    }
  }

  &:hover {
    box-shadow: 0 2px 12px 0px rgba(0,0,0,0.48);
    transform: scale(1.05);
  }

  &:hover .servicesCard--content {
    opacity: 1;
  }

  &:hover .servicesCard--title {
    transform: translateY(-64px);
  }

  &::last-of-type {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const ServicesCardTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
  transform: translateY(0);
  transition: 0.4s ease all;
`;

const ServicesCardContent = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: #fff;
  margin: 0;
  padding: 0 24px;
  opacity: 0;
  text-align: left;
  width: 100%;
  transition: 0.4s ease all;
  position: absolute;
  box-sizing: border-box;
`;

class Index extends Component {

  render() {
    return (
      <IndexWrapper className="index">
        <Head>
          <title>Umami Agency | Creating Tasteful Presences</title>
        </Head>
        <Nav page="/" theme="white"/>
        <SectionScroll>
          <Section className="hero" align="center" justify="center" image="https://images.unsplash.com/photo-1520284888530-ac9a909a1b62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eee52f9814cf480701fd59930a46da35&auto=format&fit=crop&w=1650&q=80">
            <Hero>
              <HeroTitle>
                Spend your time
                <br/>
                pouring latte art, not
                <br/>
                pouring over reviews.
              </HeroTitle>
              <Link href="/services">
                <HeroButton className="hero--button">
                  See how we can handle that
                </HeroButton>
              </Link>

            </Hero>
          </Section>
          <Section className="about" align="center" justify="center" image="https://images.unsplash.com/photo-1531318994313-daaafadd83e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef372d012c328c24677cb7357e8888b6&auto=format&fit=crop&w=1568&q=80">
            <Hero>
              <HeroTitle>
              We’re a full-service consulting agency
              <br/>
              based in Halifax, Nova Scotia,
              <br/>
              specializing in presence management.
              </HeroTitle>
            </Hero>
          </Section>
          <Section className="services" align="center" justify="center" image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0444373dd059057834eff6e6a3e5eaa7&auto=format&fit=crop&w=800&q=60">
            <ServicesTitle>
              What we do best
            </ServicesTitle>
            <ServicesCards>
              <Link href="/services">
                <ServicesCard image="https://images.unsplash.com/photo-1512221684154-3a1f36dac982?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d397039338e0d94b24298ba19fdb0fa4&auto=format&fit=crop&w=1650&q=80">
                  <ServicesCardTitle className="servicesCard--title">
                    Presence Management
                  </ServicesCardTitle>
                  <ServicesCardContent className="servicesCard--content">
                    Your brand is present everywhere, from your website to the minds of your customers. See how we can make that a good thing.
                  </ServicesCardContent>
                </ServicesCard>
              </Link>
              <ServicesCard image="https://images.unsplash.com/photo-1510130146128-7a7b6afb6f9d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2897dbd1e879eadfb722d90401aa275f&auto=format&fit=crop&w=800&q=60">
                <ServicesCardTitle className="servicesCard--title">
                  Customer Retention
                </ServicesCardTitle>
                <ServicesCardContent className="servicesCard--content">
                  Your brand is present everywhere, from your website to the minds of your customers. See how we can make that a good thing.
                </ServicesCardContent>
              </ServicesCard>
              <ServicesCard image="https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4b56a65f308795dadf3d7e6062e6fce&auto=format&fit=crop&w=800&q=60">
                <ServicesCardTitle className="servicesCard--title">
                  Content Creation
                </ServicesCardTitle>
                <ServicesCardContent className="servicesCard--content">
                  Your brand is present everywhere, from your website to the minds of your customers. See how we can make that a good thing.
                </ServicesCardContent>
              </ServicesCard>
            </ServicesCards>
          </Section>
        </SectionScroll>
      </IndexWrapper>
    );
  }

}

export default Index;
