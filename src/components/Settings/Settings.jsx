import React from 'react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';

import Button from '../common/Button/Button';
import { MIN_ID } from '../../constants/id';

const Settings = (props) => {
  const { handlersForId, id } = props;
  return (
    <div>
      <Button
        text="Prev"
        onClick={handlersForId.decrement}
        disabled={equals(id, MIN_ID)}
      />
      <Button text="Next" onClick={handlersForId.increment} />
    </div>
  );
};

Settings.propTypes = {
  handlersForId: PropTypes.shape({
    increment: PropTypes.func,
    decrement: PropTypes.func,
    id: PropTypes.number,
  }),
};

export default Settings;
