import {
  Container,
  Link,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { PrimaryLayout } from 'components/layouts/primary';
import NextLink from 'next/link';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
});

export const NotFound = () => {
  const classes = useStyles();
  return (
    <PrimaryLayout>
      <Container maxWidth='lg' className={classes.root}>
        <Paper>
          <Typography variant='h3'>Mistakes were made</Typography>
          <Typography variant='subtitle1'>
            You were hyperdicted... escape destruction by going{' '}
            <NextLink href='/home' passHref>
              <Link>home</Link>
            </NextLink>
            .
          </Typography>
          <img className={classes.img} alt='404 Error' src='/img/404.jpg' />
        </Paper>
      </Container>
    </PrimaryLayout>
  );
};

export default NotFound;
