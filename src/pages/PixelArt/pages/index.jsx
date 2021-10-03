import React, { Component } from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Pallete from '../Components/Pallete';
import '../Components/Script'
import Table from '../Components/Table';

export class HomePixelArt extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pallete />
        <Menu />
        <Table />
        {/* Arrumar logica para script */}
      </div>
    )
  }
}

export default HomePixelArt
