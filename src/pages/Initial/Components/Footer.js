import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
      <div>
        <section>
          <h3>
            Projetos:
          </h3>
          <div>
            <Link to="/pixel-art">Pixel Art</Link>
            <br/>
            <Link to="/movie-cards-library">Movie Cards Library</Link>
            <br/>
            <Link to="/movie-cards-crud">Movie Cards Crud</Link>
            <br />
            <Link to="/movie-cards-stateful">Movie Cards Stateful</Link>
            <br />
            <Link to="/wallet">Wallet</Link>
            <br />
            <Link to="/react-tests">React Tests Librarty</Link>
            <br />
          </div>
        </section>
      </div>
    );
  }
}

export default Footer
