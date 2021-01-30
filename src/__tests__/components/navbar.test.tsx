import { cleanup, render, screen } from '@testing-library/react';
import { Navbar } from 'components';
import { NavbarMobile } from 'components/navbar.mobile';
import { navItems } from 'data/navItems';
import { act } from 'react-dom/test-utils';

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

  /** Can't get this test to work as jest-dom does not do resizing */
  xit('renders mobile', async () => {
    await act(() => {
      window = Object.assign(window, { innerWidth: 400 });
      window.dispatchEvent(new Event('resize'));
    });

    const { getByTestId } = render(<Navbar />);

    const element = getByTestId('mobile');

    expect(element).toBeInTheDocument();
  });

  it('renders full', () => {
    const { getByTestId } = render(<Navbar />);

    const element = getByTestId('full');

    expect(element).toBeInTheDocument();
  });
});

describe('Mobile Navbar', () => {
  beforeEach(() => {
    render(<NavbarMobile title="Home" navItems={navItems} />);
  });

  afterEach(cleanup);

  it('should render', () => {
    const homeElement = screen.getByText('Home');

    expect(homeElement.tagName).toEqual('H6');
    expect(homeElement).toBeInTheDocument();
  });
});
