import { map, pick, prop, values, zipObj } from 'ramda';

export const getRelevantInformation = (person, selectedCategories) => {
  const categoriesValues = map(prop('value'), selectedCategories);
  const categoriesLabels = map(prop('label'), selectedCategories);
  return zipObj(categoriesLabels, values(pick(categoriesValues, person)));
};
