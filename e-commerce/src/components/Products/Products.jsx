import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/CD.jpg'; 
import robin from '../../assets/robin.jpg'; 
import sauvage from '../../assets/sauvage.jpg'; 
import gucci from '../../assets/gucci.png';
import forher from '../../assets/for her.jpg';
import chai1 from '../../assets/chai1.jpg';
import chai2 from '../../assets/chai2.jpg';
import Product from './Product/Product';
import useStyles from './styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  const firstProducts = products.slice(0, 8); // Get the first 4 products
  const restProducts = products.slice(8); // Get the remaining products

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <img src={logo} alt="Logo" className={classes.logoImage} />     
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid black', borderTop: '1px solid black', paddingBottom: '2px', marginBottom: '20px' }}>
            <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>FRAGRANCES</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={4}>
          {/* Left content div */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '140px' }}>
            <p style={{ textAlign: 'center', fontSize:'22px', fontFamily: 'Playfair Display, serif' }}>DIOR HOMME</p>
            <p style={{ textAlign: 'center', paddingLeft: '10px', paddingRight: '50px'}}>
              Dior Homme is a signature Dior fragrance for men with a spicy and woody composition. Its olfactory identity is expressed through various inspirations, such as Dior Homme Sport or Dior Homme Intense. In all of its interpretations, it leaves a distinguishing mark, carefree, like a fragrance of freedom.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={9} lg={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {/* Robin div */}
          <div style={{ width: '100%' }}>
            <img src={robin} alt="Logo" className={classes.logoImage} style={{ width: '100%' }} />
          </div>
        </Grid>
        {firstProducts.map((product, index) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} style={{ marginBottom: index % 2 === 1 ? '30px' : 0 }}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
        <Grid item xs={12}> 
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid black', paddingBottom: '2px', marginBottom: '20px' }}>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={4}>
          {/* Left content div */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '140px' }}>
            <p style={{ textAlign: 'center', fontSize:'22px', fontFamily: 'Playfair Display, serif' }}>SAUVAGE</p>
            <p style={{ textAlign: 'center', paddingLeft: '10px', paddingRight: '50px'}}>
            Sauvage is an act of creation inspired by wide-open spaces. A composition marked by a raw freshness, powerful and noble all at once.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={9} lg={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {/* sauvage div */}
          <div style={{ width: '100%' }}>
            <img src={sauvage} alt="Logo" className={classes.logoImage} style={{ width: '100%' }} />
          </div>
        </Grid>
        {restProducts.map((product, index) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} style={{ marginBottom: index % 2 === 1 ? '30px' : 0 }}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
        <Grid item xs={12} style={{ margin: 0, padding: 0 }}>
          {/* Gucci div */}
          <div style={{ width: '100%', margin: 0, padding: 0 }}>
            <img src={gucci} alt="gucci" className={classes.logoImage} style={{ width: '100%' }} />
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default Products;