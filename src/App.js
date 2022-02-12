import './App.css';
import React, { useState, useMemo } from 'react';

import Settings from './components/Settings/Settings';
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

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <Settings
        handlersForId={handlersForId}
        id={id}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      {content}
    </div>
  );
};

export default App;
