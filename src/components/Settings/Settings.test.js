import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Settings from './Settings';

describe('Layout', () => {
  let props;

  beforeEach(() => {
    props = {
      handlersForId: {
        increment: jest.fn(),
        decrement: jest.fn(),
      },
      id: 1,
    };
  });

  it('should be next button', () => {
    render(<Settings {...props} />);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeInTheDocument();
  });

  it('should be prev button', () => {
    render(<Settings {...props} />);
    const prevButton = screen.getByRole('button', { name: 'Prev' });
    expect(prevButton).toBeInTheDocument();
  });

  it('should be prev button initially disabled', () => {
    render(<Settings {...props} />);
    const prevButton = screen.getByRole('button', { name: 'Prev' });
    expect(prevButton).toBeDisabled();
  });
});

describe('Interactions', () => {
  let props;

  beforeEach(() => {
    props = {
      handlersForId: {
        increment: jest.fn(),
        decrement: jest.fn(),
      },
      id: 1,
    };
  });

  it('should be called increment function after clicking on next button', () => {
    render(<Settings {...props} />);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    userEvent.click(nextButton);
    expect(props.handlersForId.increment.mock.calls.length).toBe(1);
  });

  it('should be called decrement function after clicking on prev button', () => {
    render(<Settings {...props} id={2} />);
    const prevButton = screen.getByRole('button', { name: 'Prev' });
    userEvent.click(prevButton);
    expect(props.handlersForId.decrement.mock.calls.length).toBe(1);
  });
});
