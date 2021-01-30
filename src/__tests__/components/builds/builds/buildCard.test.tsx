import { cleanup, render } from '@testing-library/react';
import { BuildCard } from 'components/builds/builds/buildCard';
import { testBuildNoExtra } from 'data/builds/testBuilds/testBuildNoExtra';
import { testBuildExtraBuilds } from 'data/builds/testBuilds/testBuildwExtraBuilds';

describe('BuildCard', () => {
  afterEach(cleanup);

  it('displays nothing when build is not provided', () => {
    const result = render(<BuildCard shipBuild={undefined} />);

    expect(result.container.firstChild).toBeNull();
  });

  it('displays a build card with a build provided', async () => {
    const result = render(<BuildCard shipBuild={testBuildNoExtra} />);

    expect(result.getByText('clipper')).toBeDefined();
  });

  it('displays a build card with a build provided and related/variant', () => {
    const result = render(<BuildCard shipBuild={testBuildExtraBuilds} />);

    expect(result.getByText('Has Variants')).toBeDefined();
    expect(result.getByText('Has Related Builds')).toBeDefined();
  });
});
