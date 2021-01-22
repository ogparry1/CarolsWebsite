import React, { Component } from 'react';
import './App.css';
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Content } from 'react-mdl'

function App() {
  return (
      <div className="demo-big-content">
    <Layout>
        <Header waterfall hideTop>
            <HeaderRow title="Creighton">
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search3"
                    expandable
                    expandableIcon="search"
                />
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Creighton">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
  );
}

export default App;
