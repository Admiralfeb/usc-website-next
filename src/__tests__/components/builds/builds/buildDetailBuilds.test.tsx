import { cleanup, render } from '@testing-library/react';
import { BuildDetailBuilds } from 'components/builds/builds/buildDetailBuilds';
import React from 'react';
import * as shipHooks from 'hooks/builds/useShipBuilds';
import { testBuildNoExtra } from 'data/builds/testBuilds/testBuildNoExtra';

describe('BuildDetailBuilds', () => {
  afterEach(cleanup);

  it('renders when loading', () => {
    const spy = jest.spyOn(shipHooks, 'useShipBuilds');
    spy.mockReturnValue({
      loading: true,
      shipBuilds: [],
      error: null,
      addBuild: jest.fn(),
      addRelated: jest.fn(),
      addVariant: jest.fn(),
    });
    const { getByText } = render(
      <BuildDetailBuilds title="title" buildIDs={[]} />
    );
    expect(getByText('Loading')).toBeDefined();
  });

  it('renders when loading', () => {
    const spy = jest.spyOn(shipHooks, 'useShipBuilds');
    spy.mockReturnValue({
      loading: false,
      shipBuilds: [testBuildNoExtra],
      addBuild: jest.fn(),
      addRelated: jest.fn(),
      addVariant: jest.fn(),
      error: null,
    });
    const { getByText } = render(
      <BuildDetailBuilds title="title" buildIDs={['1234']} />
    );
    expect(getByText('title')).toBeDefined();
  });
});
