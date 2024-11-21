'use client';

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const features = [
  {
    icon: <LocalShippingIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    title: "Free shipping!",
    description: "From €75 in purchases!",
  },
  {
    icon: <StoreIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    title: "Physical Stores",
    description: "Vila Real and Porto",
  },
  {
    icon: <AccessTimeIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    title: "Deliveries within 24 hours",
    description: "in mainland Portugal. Check our Shipping Policy",
  },
  {
    icon: <ShoppingBagIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    title: "In-store pickup available",
    description: "Usually ready in 2 hours",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={3}
    component={motion.div}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f5f5f5",
        height: "100%",
      }}
    >
      <Box sx={{ mb: 2 }}>{icon}</Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
        {description}
      </Typography>
    </Box>
  </Grid>
);

const ResponsiveFeaturePage = () => {
  return (
    <Box sx={{ py: 5, px: 2, backgroundColor: "#ffffff" }}>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ResponsiveFeaturePage;
