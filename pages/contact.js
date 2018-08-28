import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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

const TabsWrapper = styled.div`
  & .contact__tabs {
    width: 100%;
    padding: 0 16px 16px;
    box-sizing: border-box;
  }

  & .contact__tabsTabList {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    padding: 0;
  }

  & .contact__tabsTab {
    flex: 1;
    list-style: none;
    display: inline-flex;
    text-align: center;
    background: #fff;
    color: #000;
    align-items: center;
    justify-content: center;
    padding: 24px;
    box-sizing: border-box;
    transition: 0.4s ease all;
    cursor: pointer;

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  & .contact__tabsTab.contact__tabsTab--selected {
    background: #000;
    color: #fff;
  }
`;


class Contact extends Component {

  render() {
    return (
      <PageWrapper className="contact">
        <Nav page="/contact" theme="black"/>
        <PageTitle className="contact__pageTitle">
          Contact
        </PageTitle>
        <TabsWrapper>
          <Tabs selectedTabClassName="contact__tabsTab--selected" className="contact__tabs">
            <TabList className="contact__tabsTabList">
              <Tab  className="contact__tabsTab">
                Beer
              </Tab>
              <Tab  className="contact__tabsTab">
                Coffee
              </Tab>
              <Tab  className="contact__tabsTab">
                In Person
              </Tab>
              <Tab  className="contact__tabsTab">
                Phone
              </Tab>
              <Tab  className="contact__tabsTab">
                Email
              </Tab>
            </TabList>

            <TabPanel>
              Beer
            </TabPanel>
            <TabPanel>
              Coffee
            </TabPanel>
            <TabPanel>
              In Person
            </TabPanel>
            <TabPanel>
              Phone
            </TabPanel>
            <TabPanel>
              Email
            </TabPanel>
          </Tabs>
        </TabsWrapper>
      </PageWrapper>
    );
  }

}

export default Contact;
