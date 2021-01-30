import { cleanup, render, RenderResult } from '@testing-library/react';
import { Merch } from 'components/merch';

let componentBody: RenderResult;

describe('Merch', () => {
  beforeEach(() => {
    componentBody = render(<Merch />);
  });

  afterEach(cleanup);

  it(`should render 'USC Merch Store' in a H3`, () => {
    const tag = componentBody.getByText('USC Merch Store').tagName;
    expect(tag).toBe('H3');
  });
});
