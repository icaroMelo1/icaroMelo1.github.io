import React, { Component } from 'react'

export class Menu extends Component {
  render() {
    return (
      <div>
        <section id='buttons'>
          <p>escolha o tamanho do quadro</p>
          <button id='clear-board' >Limpar quadro</button>

          <input id='board-size' type='number' max='39' min='5'/>

          <button id='generate-board'>OK</button>
        </section>
      </div>
    )
  }
}

export default Menu
