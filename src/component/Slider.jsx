'use client';
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import image1 from '../assets/banner-desktop.webp';
import image2 from '../assets/koala-desktop.webp';

const slideStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const ResponsiveCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          opacity: 0.8,
          cursor: 'pointer',
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 768, // Small screens (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Medium screens (tablet)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // Large screens (desktop)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        <Box sx={{ ...slideStyles, backgroundImage: `url(${image1.src})` }}></Box>
        <Box sx={{ ...slideStyles, backgroundImage: `url(${image2.src})` }}>
          <Typography variant="h5" color="white" sx={{ background: 'rgba(0, 0, 0, 0.5)', padding: 1 }}>
            
          </Typography>
        </Box>
      </Slider>
    </Box>
  );
};

export default ResponsiveCarousel;
