import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Button extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    const {
      id, value, style,
    } = this.props;

    return (
      <button style={style} type="button" id={id} value={value} />
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  style: PropTypes.shape(),
};

Button.defaultProps = {
  value: '',
  style: null,
};

export default Button;
