'use client';

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';

const promotions = [
  {
    title: 'Snack Sale!',
    description: 'Get 20% off all snacks this week only!',
    image: 'https://source.unsplash.com/300x200/?snacks',
  },
  {
    title: 'Chocolate Bonanza',
    description: 'Buy 1 get 1 free on select chocolate bars.',
    image: 'https://source.unsplash.com/300x200/?chocolate',
  },
  {
    title: 'Candy Carnival',
    description: 'Enjoy discounts on your favorite candies.',
    image: 'https://source.unsplash.com/300x200/?candy',
  },
];

const PromotionsPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        p: { xs: 2, md: 4 },
      }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 4,
            color: '#333',
          }}
        >
          🎉 Exciting Promotions Just for You! 🎉
        </Typography>
      </motion.div>

      {/* Promotion Cards */}
      <Grid container spacing={4}>
        {promotions.map((promo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={promo.image}
                  alt={promo.title}
                  sx={{
                    borderRadius: '8px 8px 0 0',
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >
                    {promo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {promo.description}
                  </Typography>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2, textTransform: 'none' }}
                      fullWidth
                    >
                      Shop Now
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

export default PromotionsPage;
