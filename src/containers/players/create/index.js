import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

import './styles.css';
import Input from '../../../components/input';

class CreatePlayer extends Component {
  state = {
    firstName: '',
    lastName: '',
    nickName: '',
    age: '',
    sex: '',
  }

  componentDidMount() {
    console.log('');
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  }

  renderRegularInput = (name, value, placeholder) => (
    <Input
      id={value}
      name={value}
      value={value}
      type="text"
      onChange={e => this.handleChange(name, e.target.value)}
      placeholder={this.props.t(placeholder)}
    />
  )

  render() {
    const {
      firstName, lastName, nickName, age, sex,
    } = this.state;

    return (
      <div className="container">
        {this.renderRegularInput('firstName', firstName, 'player_data.first_name')}
        {this.renderRegularInput('lastName', lastName, 'player_data.last_name')}
        {this.renderRegularInput('nickName', nickName, 'player_data.nick_name')}
        {this.renderRegularInput('age', age, 'player_data.age')}
        {this.renderRegularInput('sex', sex, 'player_data.sex')}
      </div>
    );
  }
}

CreatePlayer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('common')(CreatePlayer);
