import { STAR_WARS_API_PEOPLE_DATA } from '../../mocks/api.mocks';
import { getRelevantInformation } from './PersonCard.helper';

const selectedCategories = [
  { value: 'mass', label: 'mass' },
  { value: 'name', label: 'name' },
  { value: 'hair_color', label: 'hair color' },
];

describe('getRelevantInformation', () => {
  it('should return informations for categories which are selected', () => {
    expect(
      getRelevantInformation(STAR_WARS_API_PEOPLE_DATA, selectedCategories)
    ).toEqual({
      'hair color': 'blond',
      name: 'Luke Skywalker',
      mass: '77',
    });
  });
});
