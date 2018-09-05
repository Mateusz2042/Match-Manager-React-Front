import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

import './styles.css';
import NavTitle from '../navTitle';
import Polish from '../../assets/icons/flags/pl.png';
import English from '../../assets/icons/flags/gb.png';

const Sep = () => <span className="links"> | </span>;

const Navbar = props => (
  <nav>
    <div className="title">
      <Link to="/"><NavTitle id="MatchManager" title={props.t('navbar.match_manager_title')} htmlFor="MatchManager" /></Link>
    </div>
    <div className="div-links">
      <Link className="links" to="/players-list">{props.t('navbar.players')}</Link>
      {'  '}
      <Sep />
      <Link className="links" to="/teams-list">{props.t('navbar.teams')}</Link>
      {'  '}
      <Sep />
      <Link className="links" to="/matches-list">{props.t('navbar.matches')}</Link>
      {'  '}
    </div>
    <div className="div-languages">
      <img src={Polish} alt="Polish" className="languages" onClick={() => props.i18n.changeLanguage('pl')} />
      {'  '}
      <Sep />
      <img src={English} alt="English" className="languages" onClick={() => props.i18n.changeLanguage('en')} />
      {'  '}
    </div>
  </nav>
);

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.func.isRequired,
};

export default translate('common')(Navbar);
