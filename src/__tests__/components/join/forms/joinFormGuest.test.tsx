import { render } from '@testing-library/react';
import { JoinFormGuest } from 'components/join';

describe('Guest Join Form', () => {
  it('should render', () => {
    render(<JoinFormGuest onSubmit={jest.fn()} />);
  });
});
