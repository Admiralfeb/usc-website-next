import { cleanup, render } from '@testing-library/react';
import { USCRules } from 'components/about';

describe('High Command', () => {
  afterEach(cleanup);

  it(`should render `, () => {
    render(<USCRules />);
  });
});
