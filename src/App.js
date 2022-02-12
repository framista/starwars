import React, { useState, useMemo } from 'react';
import Select from 'react-select';

import ButtonNavigation from './components/ButtonNavigation/ButtonNavigation';
import Content from './components/Content/Content';

import { INITIAL_ID, MIN_ID } from './constants/id';
import { STAR_WARS_PEOPLE_URL } from './constants/starWarsApi';
import { CATEGORIES } from './constants/categories';

import { useFetch, useCounter } from './hooks';

const App = () => {
  const [id, handlersForId] = useCounter(INITIAL_ID, {
    minValue: MIN_ID,
  });
  const [selectedCategories, setSelectedCategories] = useState(CATEGORIES);
  const response = useFetch(`${STAR_WARS_PEOPLE_URL}/${id}`);

  const content = useMemo(
    () => Content({ ...response, selectedCategories, id }),
    [response, selectedCategories, id]
  );

  const multiSelect = useMemo(
    () => (
      <div className="min-w-[100%] py-4">
        <Select
          defaultValue={selectedCategories}
          closeMenuOnSelect={false}
          onChange={setSelectedCategories}
          options={CATEGORIES}
          isMulti
        />
      </div>
    ),
    [selectedCategories]
  );

  return (
    <div className="flex items-center flex-col w-[650px] max-w-[90%] mx-auto mt-[10%]">
      <ButtonNavigation
        handlersForId={handlersForId}
        id={id}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      {multiSelect}
      {content}
    </div>
  );
};

export default App;
