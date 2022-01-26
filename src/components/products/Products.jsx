import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';
import Image from '../../assets/background.jpg';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

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
      <div className={classes.toolbar} />
      <Grid container justify='left' spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
