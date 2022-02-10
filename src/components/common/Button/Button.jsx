import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { text, onClick, disabled } = props;
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:hover:bg-gray-800 disabled:hover:text-gray-400 disabled:cursor-not-allowed"
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
