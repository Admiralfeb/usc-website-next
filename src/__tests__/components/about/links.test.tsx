import { cleanup, render } from '@testing-library/react';
import { AboutLinks } from 'components/about/links';
import { uscLinksList } from 'data/about';

describe('Links', () => {
  afterEach(cleanup);

  it(`should render `, () => {
    render(
      <AboutLinks
        id="usc-links"
        key="usc-links"
        header="USC Links"
        buttons={uscLinksList}
      />
    );
  });
});
