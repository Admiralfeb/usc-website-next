import { render } from '@testing-library/react';
import { JoinFormMember } from 'components/join';

describe('Member Join Form', () => {
  it('should render', () => {
    render(<JoinFormMember onSubmit={jest.fn()} />);
  });
});
