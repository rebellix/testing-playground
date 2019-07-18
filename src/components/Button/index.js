import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SharedButton extends Component {
  submitEvent = () => {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  };

  render = () => {
    const { btnText } = this.props;
    return (
      <button data-test="buttonComponent" onClick={this.submitEvent}>
        {btnText}
      </button>
    );
  };
}

SharedButton.propTypes = {
  btnText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default SharedButton;
