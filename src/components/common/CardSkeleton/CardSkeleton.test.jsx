import { render } from '@testing-library/react';

import { CardSkeleton } from './CardSkeleton';

describe('CardSkeleton', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CardSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
