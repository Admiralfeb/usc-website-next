import { cleanup, render } from '@testing-library/react';
import { AboutHC } from 'components/about';

describe('High Command', () => {
  afterEach(cleanup);

  it(`should render `, () => {
    render(<AboutHC />);
  });
});
