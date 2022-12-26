import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ href, text }) => {
  return (
    <li className="nav-list__item">
      <a href={href}>{text}</a>
    </li>
  );
};

NavItem.prototype = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;