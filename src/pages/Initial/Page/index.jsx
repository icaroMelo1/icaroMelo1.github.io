import React, { Component } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import PageBody from '../Components/PageBody';
import './App.css';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <PageBody />
        <Footer />
      </div>
    )
  }
}

export default Home;
