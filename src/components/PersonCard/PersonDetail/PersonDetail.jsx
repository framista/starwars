import React from 'react';
import PropTypes from 'prop-types';

const PersonDetail = ({ detail }) => {
  const [label, value] = detail;
  return (
    <div className="capitalize">
      {label} - {value}
    </div>
  );
};

PersonDetail.propTypes = {
  detail: PropTypes.arrayOf(PropTypes.string),
};

export default React.memo(PersonDetail);
