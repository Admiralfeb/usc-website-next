import { render } from '@testing-library/react';
import { InfoSection } from 'components/information';
import { guidesList } from 'data/information';

describe('InfoSection', () => {
  it('should render', () => {
    render(
      <InfoSection
        id="guides"
        key="guides"
        header="Guides"
        buttons={guidesList}
      />
    );
  });
});
