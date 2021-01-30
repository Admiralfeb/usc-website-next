import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { sortItems } from 'functions/sort';
import { IShipInfo } from 'models/builds';
import { useShipMap } from 'hooks/builds/useShipMap';

const findShipName = (ships: IShipInfo[], shipID: string | null) => {
  if (shipID === null) {
    return null;
  }
  const shipName = ships.find((x) => x.shipId === shipID);
  return shipName;
};

interface IShipAutocompleteProps {
  shipType: string | null;
  handleShipChange: (_, value: IShipInfo | null) => void;
}

export const ShipAutocomplete = (props: IShipAutocompleteProps) => {
  const { shipType, handleShipChange } = props;
  const ships = useShipMap();

  return (
    <Autocomplete
      id="shipType"
      options={sortItems(ships, 'name')}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <>
          <span>{option.name}</span>
        </>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Ship Type"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
      value={findShipName(ships, shipType)}
      onChange={handleShipChange}
      data-testid="autocomplete"
    />
  );
};
