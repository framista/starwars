import { render, screen } from '@testing-library/react';

import PersonDetail from './PersonDetail';

const detail = ['name', 'Luke Skywalker'];

describe('PersonDetail', () => {
  it('should contain suitable text', () => {
    render(<PersonDetail detail={detail} />);
    expect(screen.getByText('name - Luke Skywalker')).toBeInTheDocument();
  });
  it('should render correctly', () => {
    const { asFragment } = render(<PersonDetail detail={detail} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
