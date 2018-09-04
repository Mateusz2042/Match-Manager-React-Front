import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import NavTitle from '../navTitle';
import Polish from '../../assets/icons/flags/pl.png';
import English from '../../assets/icons/flags/gb.png';

const Sep = () => <span className="links"> | </span>;

class Navbar extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <nav>
        <div className="title">
          <Link to="/"><NavTitle id="MatchManager" title="MatchManager" htmlFor="MatchManager" /></Link>
        </div>
        <div className="div-links">
          <Link className="links" to="/players-list">Players</Link>
          {'  '}
          <Sep />
          <Link className="links" to="/teams-list">Teams</Link>
          {'  '}
          <Sep />
          <Link className="links" to="/matches-list">Matches</Link>
          {'  '}
        </div>
        <div className="div-languages">
          <img src={Polish} alt="Polish" className="languages" onClick={() => console.log('')} />
          {'  '}
          <Sep />
          <img src={English} alt="English" className="languages" />
          {'  '}
        </div>
      </nav>
    );
  }
}

export default Navbar;
