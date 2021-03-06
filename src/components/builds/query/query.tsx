import { useEffect, useReducer } from 'react';
import { IQuery, OtherFilters } from 'models/builds';

import { makeStyles, Paper } from '@material-ui/core';
import { QuerySpecialization } from './querySpecialities';
import { QueryShip } from './queryShip';
import { QueryEngineering } from './queryEngineering';
import { QueryOther } from './queryOther';
import { QueryActions } from './queryActions';
import qs from 'query-string';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    rowGap: '2px',
    gridTemplateAreas: `
    'specializations'
    'engineering'
    'ship'
    'other'
    'buttons'`,
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      gridTemplateAreas: `
        'specializations    engineering'
        'ship   other'
        'buttons    buttons'`,
      gridTemplateRows: '1fr 1fr 0.1fr',
      rowGap: '5px',
      columnGap: '5px',
    },
  },
}));

export const Query = (props: { updateQuery: (query: IQuery) => void }) => {
  const router = useRouter();
  const queryParams = router.asPath.substring(router.asPath.indexOf('?'));
  const { updateQuery } = props;
  const classes = useStyles();

  type action = {
    type:
      | 'ship'
      | 'size'
      | 'specialties'
      | 'engLevel'
      | 'other'
      | 'guardian'
      | 'powerplay'
      | 'beginner'
      | 'showVariants'
      | 'query'
      | 'reset';
    value: IQuery | OtherFilters | string | string[] | boolean | number | null;
  };
  const queryReducer = (prevState: IQuery, action: action): IQuery => {
    let newQuery: IQuery;
    switch (action.type) {
      case 'ship':
        const ship = typeof action.value === 'string' ? action.value : null;
        newQuery = { ...prevState, ship };
        break;
      case 'size':
        const size = typeof action.value === 'number' ? action.value : null;
        newQuery = { ...prevState, size };
        break;
      case 'specialties':
        const specialties = Array.isArray(action.value) ? action.value : [];
        newQuery = { ...prevState, specialties };
        break;
      case 'other':
        console.log(action.value);

        const other: OtherFilters =
          typeof action.value === 'object' && !Array.isArray(action.value)
            ? action.value
            : null;
        console.log({ other });
        newQuery = other ? { ...prevState, ...other } : prevState;
        break;
      case 'engLevel':
        const engLevel = typeof action.value === 'number' ? action.value : null;
        newQuery = { ...prevState, engLevel };
        break;
      case 'guardian':
        const guardian = typeof action.value === 'number' ? action.value : null;
        newQuery = { ...prevState, guardian };
        break;
      case 'powerplay':
        const powerplay =
          typeof action.value === 'number' ? action.value : null;
        newQuery = { ...prevState, powerplay };
        break;
      case 'beginner':
        const beginner = typeof action.value === 'number' ? action.value : null;
        newQuery = { ...prevState, beginner };
        break;
      case 'showVariants':
        const showVariants =
          typeof action.value === 'boolean' ? action.value : null;
        newQuery = { ...prevState, showVariants };
        break;
      case 'query':
        newQuery =
          typeof action.value === 'object' && !Array.isArray(action.value)
            ? (action.value as IQuery)
            : prevState;
        break;
      case 'reset':
        newQuery = {
          ship: null,
          size: null,
          specialties: [],
          engLevel: null,
          guardian: null,
          powerplay: null,
          beginner: null,
          showVariants: null,
        };
        break;
      default:
        newQuery = prevState;
    }

    console.log({ newQuery });
    const queryString = qs.stringify(newQuery);
    console.log({ queryString });
    router.push({ pathname: '/builds', query: queryString }, undefined, {
      shallow: true,
    });

    updateQuery(newQuery);

    return newQuery;
  };

  const [query, dispatch] = useReducer(queryReducer, {
    ship: null,
    size: null,
    specialties: [],
    engLevel: null,
    guardian: null,
    powerplay: null,
    beginner: null,
    showVariants: null,
  });

  useEffect(() => {
    const params = qs.parse(queryParams);
    const shipParam = params['ship'];
    const ship = shipParam && !Array.isArray(shipParam) ? shipParam : null;

    const sizeParam = params['size'];
    const size =
      sizeParam && !Array.isArray(sizeParam) ? parseInt(sizeParam) : null;

    const engParam = params['engLevel'];
    const engLevel =
      engParam && !Array.isArray(engParam) ? parseInt(engParam) : null;

    const specialtiesParam = params['specialties'];
    const specialties =
      specialtiesParam &&
      Array.isArray(specialtiesParam) &&
      specialtiesParam.length > 0
        ? specialtiesParam
        : [];

    const guardianParam = params['guardian'];
    const guardian =
      guardianParam === '1' ? 1 : guardianParam === '0' ? 0 : null;

    const powerplayParam = params['powerplay'];
    const powerplay =
      powerplayParam === '1' ? 1 : powerplayParam === '0' ? 0 : null;

    const beginnerParam = params['beginner'];
    const beginner =
      beginnerParam === '1' ? 1 : beginnerParam === '0' ? 0 : null;

    const variantsParam = params['showVariants'];
    const showVariants = variantsParam === 'true' ? true : false;

    const query: IQuery = {
      ship,
      size,
      engLevel,
      specialties,
      guardian,
      powerplay,
      beginner,
      showVariants,
    };
    dispatch({ type: 'query', value: query });

    // Disable as I only want this on initial load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetQueries = () => {
    dispatch({ type: 'reset', value: null });
  };

  return (
    <Paper className={classes.root}>
      <QuerySpecialization
        selectedSpecialties={query.specialties}
        setSpecialties={(value: string[]) =>
          dispatch({ type: 'specialties', value })
        }
      />
      <QueryShip
        shipType={query.ship}
        setShipType={(value: string) => dispatch({ type: 'ship', value })}
        shipSize={query.size}
        setShipSize={(value: number) => dispatch({ type: 'size', value })}
      />
      <QueryEngineering
        engLevel={query.engLevel}
        setEngLevel={(value: number) => dispatch({ type: 'engLevel', value })}
      />
      <QueryOther
        other={{ ...query }}
        setOther={(value: OtherFilters) => dispatch({ type: 'other', value })}
      />
      <QueryActions resetQueries={resetQueries} />
    </Paper>
  );
};
