import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { Box, Container, Typography } from '@material-ui/core';

const Home = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.bckImg}>
        <Container maxWidth='sm' sx={{ justifyContent: 'center' }}>
          <Box
            style={{ marginTop: '90px', marginBottom: '30px', color: 'white' }}
          >
            <Typography variant='h2'>Office Supplies Inc.</Typography>
          </Box>

          <Box
            style={{
              marginTop: '20px',
              marginBottom: '40px',
              color: 'white',
              // width: '110%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto fugit in provident! Eum, nesciunt fugiat soluta facilis
              magnam voluptate quos voluptates? Sint illo esse exercitationem.
            </Typography>
          </Box>

          <Box
            component={Link}
            to='/products'
            maxWidth='154px'
            style={{
              textDecoration: 'none',
              padding: '20px',
              color: 'white',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '50vw',
            }}
            className={classes.box}
          >
            <Typography
              component={Link}
              to='/products'
              variant='h4'
              color='inherit'
              style={{
                textDecoration: 'none',
                verticalAlign: 'middle',
              }}
            >
              Go to products
            </Typography>
          </Box>
        </Container>
      </div>
    </main>
  );
};

export default Home;
