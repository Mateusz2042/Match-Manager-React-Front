import React, { Component } from 'react';
import BallImage from '../../assets/images/football.png';

import './styles.css';

class HomeComponent extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <div className="container">
        <div className="football-animation">
          <img src={BallImage} alt="football" className="image-football" />
        </div>
      </div>
    );
  }
}

export default HomeComponent;
