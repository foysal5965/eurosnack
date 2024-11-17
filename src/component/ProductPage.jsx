'use client';

import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import image2 from '../assets/banner-desktop.webp'; // Replace with your actual image

const products = [
  { id: 1, name: 'Product 1', price: 25.99, image: image2 },
  { id: 2, name: 'Product 2', price: 35.99, image: image2 },
  { id: 3, name: 'Product 3', price: 15.99, image: image2 },
  { id: 4, name: 'Product 4', price: 45.99, image: image2 },
  { id: 5, name: 'Product 5', price: 29.99, image: image2 },
  { id: 6, name: 'Product 6', price: 19.99, image: image2 },
];

const ProductPage = () => {
  return (
    <Box
      sx={{
        padding: '2rem',
        backgroundColor: '#f4f6f8',
        marginTop: '120px',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Our Products
      </Typography>

      {/* Product Cards Grid */}
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            {/* Motion Card for Animation */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              style={{ borderRadius: '16px', overflow: 'hidden' }}
            >
              <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                {/* Image Section */}
                <CardMedia
                  component="div"
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 200,
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </CardMedia>

                {/* Content Section */}
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                    ${product.price.toFixed(2)}
                  </Typography>

                  {/* Animated Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      fullWidth
                      sx={{
                        background: 'linear-gradient(45deg, #FF69B4, #D32F2F)',
                        backgroundSize: '200% 200%',
                        color: 'white',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        padding: '12px 24px',
                        borderRadius: '50px',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.5s ease-in-out',
                        ':hover': {
                          backgroundPosition: '200% 200%',
                        },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;