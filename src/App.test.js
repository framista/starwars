import {
  render,
  screen,
  waitForElementToBeRemoved,
  cleanup,
} from '@testing-library/react';
import { prop, map } from 'ramda';

import App from './App';
import { CATEGORIES } from './constants/categories';
import { server } from './mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Loading component', () => {
  it('should be removed loading after fetching', async () => {
    render(<App />);
    expect(screen.getByTestId('cardSkeletonId')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId('cardSkeletonId'));
  });
});

describe('App layout - successfully fetching', () => {
  beforeEach(async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByTestId('cardSkeletonId'));
  });
  afterEach(() => cleanup());
  it('should be prev button', () => {
    const prevButton = screen.getByRole('button', { name: 'Prev' });
    expect(prevButton).toBeInTheDocument();
  });
  it('should be next button', () => {
    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeInTheDocument();
  });
  it('should be multi select', () => {
    const multiSelect = screen.getByRole('combobox');
    expect(multiSelect).toBeInTheDocument();
  });
  it.each(map(prop('label'), CATEGORIES))(
    'should be category',
    async (categoryLabel) => {
      expect(await screen.findByText(categoryLabel)).toBeInTheDocument();
    }
  );
  it('should be text Star Wars - person', () => {
    const titleText = screen.getByText('Star Wars - person');
    expect(titleText).toBeInTheDocument();
  });
});
