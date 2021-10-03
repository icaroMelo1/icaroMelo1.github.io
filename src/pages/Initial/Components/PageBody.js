import React, { Component } from 'react'

export class PageBody extends Component {
  render() {
    return (
      <div>
        <div className="descricao">
          <p>
            -Tenho 20 anos, sou natural de Fortaleza-ce, sempre gostei muito de jogos e da tecnologia envolvida, hoje faço Eng.Mecatronica no IFCE e o curso da Trybe, além de uns freelancers aos finais de semana.
          </p>
        </div>
        <div className="final">
          <p> -Um canal que gosto e acompanho é o<a className="button"href="https://www.youtube.com/c/MWInform%C3%A1tica" target="blank"> MW informática.</a></p>
        </div>
    
        <div className="skills">
          <h2 className="titleSkills">Habilidades:</h2>
          <ul className="list-skill">
            <li>Desenvolvendo habilidades web full stack</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>React</li>
            <li>RTL</li>
            <li>Redux</li>
            <li>React</li>
            <li>ContextAPI</li>
            <li>ReactHooks</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PageBody
