import React from 'react';
import useStyles from './styles';
import { Typography, Container } from '@material-ui/core';
import Image from '../assets/background.jpg';

const Products = () => {
  const classes = useStyles();

  return (
    <main
      className={classes.content}
      style={{
        position: 'absolute',
        top: '50px',
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url(${Image})`,
        backgroundSize: 'cover',
      }}
    >
      <Container
        style={{ justifyContent: 'center', marginTop: '40px', width: '50vw' }}
      >
        <Typography
          variant='h4'
          style={{ color: 'white', marginBottom: '20px' }}
        >
          About us
        </Typography>
        <Typography variant='body1' style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas,
          cupiditate quia nulla fugiat, quis maiores mollitia voluptas possimus
          fuga libero corrupti cumque veniam quod, magnam officia voluptatem
          aperiam. Minima nobis error soluta ipsum quasi placeat, amet deserunt
          nihil quam.
        </Typography>
      </Container>
    </main>
  );
};

export default Products;
