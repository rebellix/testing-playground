import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render = () => {
    const { title, content } = this.props;

  if(!title) return null;

    return (
      <div data-test="listItemComponent">
        <h3 data-test="componentTitle">{title}</h3>
        <p data-test="componentContent">{content}</p>
      </div>
    );
  };
}

ListItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default ListItem;
