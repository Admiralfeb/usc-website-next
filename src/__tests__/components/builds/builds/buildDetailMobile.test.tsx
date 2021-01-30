import { cleanup, render } from '@testing-library/react';
import { BuildDetailMobile } from 'components/builds/builds/buildDetailMobile';
import { testBuildNoExtra } from 'data/builds/testBuilds/testBuildNoExtra';
import { getShipInfofromID } from 'functions/builds';

describe('BuildDetailMobile', () => {
  afterEach(cleanup);

  it('should display a build', () => {
    render(
      <BuildDetailMobile foundBuild={testBuildNoExtra} shipInfo={undefined} />
    );
  });

  it('should display a build and shipInfo', () => {
    const shipInfo = getShipInfofromID(testBuildNoExtra.shipId);

    render(
      <BuildDetailMobile foundBuild={testBuildNoExtra} shipInfo={shipInfo} />
    );
  });
});
