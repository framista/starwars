import React from 'react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';
import Select from 'react-select';

import { MIN_ID } from '../../constants/id';

import { Button } from '../common';
import { CATEGORIES } from '../../constants/categories';

const Settings = (props) => {
  const { handlersForId, id, selectedCategories, setSelectedCategories } =
    props;
  return (
    <div className="flex">
      <Button
        text="Prev"
        onClick={handlersForId.decrement}
        disabled={equals(id, MIN_ID)}
      />
      <div className="w-[500px] px-2">
        <Select
          defaultValue={selectedCategories}
          closeMenuOnSelect={false}
          onChange={setSelectedCategories}
          options={CATEGORIES}
          isMulti
        />
      </div>
      <Button text="Next" onClick={handlersForId.increment} />
    </div>
  );
};

Settings.propTypes = {
  handlersForId: PropTypes.shape({
    increment: PropTypes.func,
    decrement: PropTypes.func,
    id: PropTypes.number,
    setSelectedCategories: PropTypes.func,
    selectedCategories: PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
    ),
  }),
};

export default Settings;
