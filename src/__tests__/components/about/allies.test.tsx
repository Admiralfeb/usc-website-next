import { cleanup, render } from '@testing-library/react';
import { AboutAllies } from 'components/about';

describe('Allies', () => {
  afterEach(cleanup);

  it(`should render `, () => {
    render(<AboutAllies />);
  });
});
