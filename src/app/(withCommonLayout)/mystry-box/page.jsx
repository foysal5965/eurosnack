'use client';

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';

const mysteryBoxes = [
  {
    title: 'Golden Mystery Box',
    description: 'Unbox exclusive luxury items worth $200+!',
    image: 'https://source.unsplash.com/300x200/?gold',
    price: '$99.99',
  },
  {
    title: 'Silver Mystery Box',
    description: 'Discover surprises worth $100+ for less!',
    image: 'https://source.unsplash.com/300x200/?silver',
    price: '$49.99',
  },
  {
    title: 'Bronze Mystery Box',
    description: 'Affordable surprises starting at $50!',
    image: 'https://source.unsplash.com/300x200/?bronze',
    price: '$29.99',
  },
];

const MysteryBoxPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f0f8ff',
        py: 4,
        px: { xs: 2, sm: 4 },
      }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 4,
            color: '#333',
          }}
        >
          🎁 Mystery Boxes Await! 🎁
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            mb: 4,
            color: '#666',
          }}
        >
          Choose your box and unveil the surprises inside!
        </Typography>
      </motion.div>

      {/* Mystery Box Cards */}
      <Grid container spacing={4}>
        {mysteryBoxes.map((box, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  mx: 'auto',
                  boxShadow: 3,
                  borderRadius: 3,
                  backgroundColor: '#fff',
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={box.image}
                  alt={box.title}
                  sx={{
                    borderRadius: '8px 8px 0 0',
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      textAlign: 'center',
                      mb: 1,
                      color: '#000',
                    }}
                  >
                    {box.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: 'center', color: '#666', mb: 2 }}
                  >
                    {box.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: 'center', fontWeight: 700, color: '#007BFF' }}
                  >
                    {box.price}
                  </Typography>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2, textTransform: 'none', borderRadius: 2 }}
                    >
                      Get It Now
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

export default MysteryBoxPage;
