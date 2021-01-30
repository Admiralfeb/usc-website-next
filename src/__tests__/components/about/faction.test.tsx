import { render } from '@testing-library/react';
import { AboutFaction } from 'components/about';
import * as hooks from 'hooks/about/useFactionSystems';
import testData from 'data/about/factionSystems.json';
import { cleanup } from '@testing-library/react-hooks';
import { SnackbarProvider } from 'notistack';

describe('Faction', () => {
  afterEach(cleanup);

  it('renders when loading', (cb) => {
    const spy = jest.spyOn(hooks, 'useFactionSystems');
    spy.mockReturnValue({
      loading: true,
      error: null,
      factionSystems: [],
    });
    const { getByText } = render(
      <SnackbarProvider>
        <AboutFaction />
      </SnackbarProvider>
    );

    expect(getByText('Loading')).toBeDefined();
    cb();
  });

  it('renders Faction Info', () => {
    const spy = jest.spyOn(hooks, 'useFactionSystems');
    spy.mockReturnValue({
      loading: false,
      error: null,
      factionSystems: testData,
    });
    const { getByText } = render(
      <SnackbarProvider>
        <AboutFaction />
      </SnackbarProvider>
    );

    expect(getByText('Arugbal - Home')).toBeDefined();
    expect(getByText('Bibaridji')).toBeDefined();
  });
});
