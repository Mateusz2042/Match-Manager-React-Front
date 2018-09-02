import React, { Component } from 'react';

import './styles.css';
import Input from '../../../components/input';

class CreateMember extends Component {
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

  renderRegularInput = (name, value) => (
    <Input
      id={value}
      name={value}
      value={value}
      type="text"
      onChange={e => this.handleChange(name, e.target.value)}
      placeholder={name}
    />
  )

  render() {
    const {
      firstName, lastName, nickName, age, sex,
    } = this.state;

    return (
      <div className="container">
        {this.renderRegularInput('firstName', firstName)}
        {this.renderRegularInput('lastName', lastName)}
        {this.renderRegularInput('nickName', nickName)}
        {this.renderRegularInput('age', age)}
        {this.renderRegularInput('sex', sex)}
      </div>
    );
  }
}

export default CreateMember;
