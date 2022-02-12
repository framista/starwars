import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { text, onClick, disabled } = props;
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 bg-gray-200 border-gray-200 rounded-lg hover:bg-gray-800 hover:text-gray-400 disabled:hover:bg-gray-200 disabled:hover:text-gray-800 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
