'use client';

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';

const ShippingPolicy = () => {
  return (
    <Box
      sx={{
        padding: '3rem',
        backgroundColor: '#f4f6f8',
        minHeight: '100vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" align="center" sx={{ marginBottom: '2rem' }}>
          Shipping Policy
        </Typography>
      </motion.div>

      {/* Shipping Information Sections */}
      <Grid container spacing={4} justifyContent="center">
        {/* Free Shipping Section */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Card sx={{ boxShadow: 3, borderRadius: '16px', padding: '1rem' }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <LocalShippingIcon sx={{ fontSize: '2rem', color: '#D32F2F' }} />
                </Box>
                <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                  Free Shipping on Orders Over €75
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary">
                  Enjoy free shipping on all orders over €75. No promo code needed!
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Physical Stores Section */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Card sx={{ boxShadow: 3, borderRadius: '16px', padding: '1rem' }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <StorefrontIcon sx={{ fontSize: '2rem', color: '#1976D2' }} />
                </Box>
                <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                  Physical Stores in Vila Real and Porto
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary">
                  Visit us in person at our physical stores located in Vila Real and Porto.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Delivery Within 24 Hours Section */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Card sx={{ boxShadow: 3, borderRadius: '16px', padding: '1rem' }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: '2rem', color: '#388E3C' }} />
                </Box>
                <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                  Deliveries Within 24 Hours in Mainland Portugal
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary">
                  We offer fast delivery within 24 hours for all orders in mainland Portugal.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* In-store Pickup Section */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Card sx={{ boxShadow: 3, borderRadius: '16px', padding: '1rem' }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <InfoIcon sx={{ fontSize: '2rem', color: '#FBC02D' }} />
                </Box>
                <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                  In-store Pickup Available
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary">
                  Pickup your order in-store. Usually ready within 2 hours.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Animated Button for More Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ textAlign: 'center', marginTop: '2rem' }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: '50px',
            padding: '12px 24px',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          Check Our Full Shipping Policy
        </Button>
      </motion.div>
    </Box>
  );
};

export default ShippingPolicy;
