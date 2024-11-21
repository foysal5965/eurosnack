'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'blue',
        padding: '10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
        animate={{
          x: ['100%', '-100%'], // Moves from right to left
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 80,
          ease: 'linear',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            marginRight: '2rem',
            fontSize: {
              xs: '16px', // Small screens
              sm: '18px', // Medium screens
              md: '20px', // Large screens
            },
          }}
        >
          🚚 Free shipping on orders over €75! | 🏬 Visit our stores in Vila Real and Porto | ⏳ Deliveries within 24 hours in mainland Portugal | 🛍️ In-store pickup available
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Marquee;
