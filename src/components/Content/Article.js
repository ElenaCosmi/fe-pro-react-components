import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text }) => {
  return (
    <li className="list__item">
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};

Article.prototype = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;