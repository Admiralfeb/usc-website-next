import { render } from '@testing-library/react';
import { JoinFormAmbassador } from 'components/join';

describe('Ambassador Join Form', () => {
  it('should render', () => {
    render(<JoinFormAmbassador onSubmit={jest.fn()} />);
  });
});
