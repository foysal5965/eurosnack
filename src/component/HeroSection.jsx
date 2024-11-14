'use client'
import React from 'react';
import { Typography, Container, Stack, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import image2 from '../assets/banner-desktop.webp';

const HeroSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 , mt:8, mb:8}}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', maxWidth: '500px' }}
        >
          <Image
            src={image2}
            alt="Hero"
            width={500}
            height={300} // Adjust dimensions as needed
            style={{
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              width: '100%',
              height: 'auto',
            }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Welcome to Our Service
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
              Discover the best products, personalized for you. We bring quality and variety right to your fingertips.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Join our community and explore a wide range of items designed to meet your unique needs.
            </Typography>
          </Box>
        </motion.div>
      </Stack>
    </Container>
  );
};

export default HeroSection;
