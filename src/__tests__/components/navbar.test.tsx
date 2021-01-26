import { cleanup, render } from '@testing-library/react';
import { Navbar } from 'components';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: 'home',
    };
  },
}));

describe('Navbar', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Navbar />);
  });
});
