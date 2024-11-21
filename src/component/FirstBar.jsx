'use client';

import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TikTokIcon from "@mui/icons-material/MusicNote";

const navItems = [
  // { text: "Feed your passions!", link: "#" },
  { text: "About Us", link: "#" },
  { text: "Contact Us", link: "#" },
  { text: "Shipping Policy", link: "/shipping-policy" },
  { text: "Giveaway Terms & Conditions", link: "#" },
];

const socialIcons = [
  { icon: <FacebookIcon />, link: "https://facebook.com" },
  { icon: <InstagramIcon />, link: "https://instagram.com" },
  { icon: <WhatsAppIcon />, link: "https://whatsapp.com" },
  { icon: <TikTokIcon />, link: "https://tiktok.com" },
];

const FirstBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        zIndex: 1201,
        backgroundColor: "#333333",
        m: 0,
        p: 0,
        width: "100vw",
        overflow: "hidden",
        display: { xs: "none", md: "flex" },
      }}
    >
      <Toolbar
        component={motion.div}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          p: 0,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Feed your passions!
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          {navItems.map((item, index) => (
            <Typography
              key={index}
              component="a"
              href={item.link}
              sx={{
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item.text}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          {socialIcons.map((social, index) => (
            <IconButton
              key={index}
              component="a"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#ffffff" }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FirstBar;
