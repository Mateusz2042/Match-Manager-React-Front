import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Input extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    const {
      id, name, type, placeholder, value, onChange,
    } = this.props;

    return (
      <input
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
