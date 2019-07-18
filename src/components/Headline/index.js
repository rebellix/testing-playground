import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Headline extends Component {
  render() {
    const { header, description } = this.props;

    if (!header) return null;

    return (
      <div data-test="headline">
        <h1 data-test="header">{header}</h1>
        <p data-test="description">{description}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      oStatus: PropTypes.bool,
    })
  ),
};

export default Headline;
