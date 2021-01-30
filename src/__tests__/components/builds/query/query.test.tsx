import { render } from '@testing-library/react';
import { Query } from 'components/builds/query/query';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '',
      push: jest.fn(),
    };
  },
}));

describe('Query', () => {
  it('should render', () => {
    render(<Query updateQuery={jest.fn()} />);
  });
});
