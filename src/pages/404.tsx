import {
  Container,
  Link,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { PrimaryLayout } from 'components/layouts/primary';
import Head from 'next/head';
import NextLink from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

export const NotFound = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>United Systems Cooperative</title>
        <meta
          name='description'
          content='Web site of the United Systems Cooperative'
        />
      </Head>
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
    </>
  );
};

export default NotFound;
