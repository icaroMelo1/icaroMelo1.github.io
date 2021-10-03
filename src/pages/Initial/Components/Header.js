import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
          <header id="retorno" className="header">
          <h1 className="myName">
            Icaro Melo
          </h1> 
        <div className="image">
          <img className="image" id="retorno" src="../fotominha.jpeg" alt="Foto do Icaro" />
        </div>
      </header>
      </div>
    )
  }
}

export default Header
