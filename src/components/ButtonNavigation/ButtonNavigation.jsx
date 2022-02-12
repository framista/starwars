import React from 'react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';

import { MIN_ID } from '../../constants/id';

import { Button } from '../common';

const ButtonNavigation = (props) => {
  const { handlersForId, id } = props;
  return (
    <div className="flex items-center gap-x-2">
      <Button
        text="Prev"
        onClick={handlersForId.decrement}
        disabled={equals(id, MIN_ID)}
      />
      <Button text="Next" onClick={handlersForId.increment} />
    </div>
  );
};

ButtonNavigation.propTypes = {
  handlersForId: PropTypes.shape({
    increment: PropTypes.func,
    decrement: PropTypes.func,
    id: PropTypes.number,
  }),
};

export default React.memo(ButtonNavigation);
