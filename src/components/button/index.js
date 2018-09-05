import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Button extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    const {
      id, style, children, onClick,
    } = this.props;

    return (
      <button onClick={onClick} style={style} type="button" id={id}>{children}</button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.shape(),
  style: PropTypes.shape(),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: null,
  style: null,
};

export default Button;
