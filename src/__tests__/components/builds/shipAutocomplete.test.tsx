import { fireEvent, render } from '@testing-library/react';
import { ShipAutocomplete } from 'components/builds/shipAutocomplete';

describe('ShipAutocomplete', () => {
  it('should render', () => {
    render(<ShipAutocomplete shipType={null} handleShipChange={jest.fn()} />);
  });

  it('should display Imperial Clipper', () => {
    const result = render(
      <ShipAutocomplete
        shipType="imperial_clipper"
        handleShipChange={jest.fn()}
      />
    );

    expect(
      (result.getByLabelText('Ship Type') as HTMLInputElement).value
    ).toEqual('Imperial Clipper');
  });

  it('should allow Keelback', () => {
    const result = render(
      <ShipAutocomplete shipType={null} handleShipChange={jest.fn()} />
    );

    const input = result.getByLabelText('Ship Type') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Keel' } });

    fireEvent.keyDown(result.getByTestId('autocomplete'), { key: 'Enter' });

    expect(input.value).toEqual('Keelback');
  });
});
