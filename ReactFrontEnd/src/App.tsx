import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Header } from './components/Header';
import axios from 'axios';
import { Product } from './model/Product';
import { ProductBox } from './components/ProductBox';
import { AddProductModal } from './components/AddProductModal';
import { API_ROOT, PRODUCTS_ENDPOINT } from './constants';
import { InfoNotification } from './components/InfoNotification';

const imgArr = [
  "https://image.shutterstock.com/image-vector/various-meds-pills-capsules-blisters-600w-1409823341.jpg",
  "https://image.shutterstock.com/image-photo/equipment-medical-devices-modern-operating-600w-1011970336.jpg",
  "https://image.shutterstock.com/image-photo/biochemist-lab-technologist-holds-blood-600w-1932118088.jpg",
  "https://image.shutterstock.com/image-photo/pharmaceuticals-antibiotics-pills-medicine-colorful-600w-1061962874.jpg",
  "https://image.shutterstock.com/image-photo/order-medicines-online-delivery-pack-600w-1734756374.jpg",
  "https://image.shutterstock.com/image-photo/set-flu-treatment-pills-thermometer-600w-265725584.jpg",
]


function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get<Product[]>(API_ROOT + PRODUCTS_ENDPOINT)
        setProducts(response.data);
      } catch (e) {
        setShowError(true);
      }
    }
    getAllProducts();
  }, [])
  return (
    <div className="App">
      <Box sx={{ bgcolor: 'primary.dark', width: '100vw', height: '100vh', spacing: 0 }}>

        <Header />

        <Grid container direction={'column'} sx={{ p: "2rem" }} rowSpacing={2}>
          <Grid item>
            <AddProductModal products={products} setProducts={setProducts} />
          </Grid>

          <Grid item>
            <Grid container rowSpacing={2} columnSpacing={2}>
              {products.map(product => (
                <Grid item>
                  <ProductBox product={product} products={products} setProducts={setProducts} image={imgArr[Math.floor(Math.random() * imgArr.length)]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
        <InfoNotification message="Cannot fetch data" open={showError} setOpen={setShowError} />
      </Box>


    </div >
  );
}

export default App;
