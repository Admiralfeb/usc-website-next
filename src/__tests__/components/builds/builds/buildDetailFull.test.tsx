import { cleanup, render } from '@testing-library/react';
import { BuildDetailFull } from 'components/builds/builds/buildDetailFull';
import { testBuildNoExtra } from 'data/builds/testBuilds/testBuildNoExtra';

import { getShipInfofromID } from 'functions/builds';

describe('BuildDetailFull', () => {
  afterEach(cleanup);

  it('should display a build', () => {
    render(
      <BuildDetailFull foundBuild={testBuildNoExtra} shipInfo={undefined} />
    );
  });

  it('should display a build and shipInfo', () => {
    const shipInfo = getShipInfofromID(testBuildNoExtra.shipId);

    render(
      <BuildDetailFull foundBuild={testBuildNoExtra} shipInfo={shipInfo} />
    );
  });
});
