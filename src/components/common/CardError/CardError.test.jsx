import { render } from '@testing-library/react';

import { CardError } from './CardError';

describe('CardError', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CardError />);
    expect(asFragment()).toMatchSnapshot();
  });
});
