import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <h1 id='title'>Paleta de Cores</h1>
        <button id ='reload'>Criar mais cores aleatórias</button>
        <p>selecione uma cor</p>
      </div>
    )
  }
}

export default Header;
