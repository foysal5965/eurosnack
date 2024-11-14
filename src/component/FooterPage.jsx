'use client';
import { Box, Grid, Link, Typography } from '@mui/material';
import { Instagram, Facebook, WhatsApp, Tiktok } from '@mui/icons-material';

const FooterPage = () => {
  return (
    <Box sx={{ backgroundColor: '#212121', color: 'white', padding: '2rem 0' }}>
      <Grid container spacing={4} justifyContent="center">

        {/* Company Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Company</Typography>
          <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
            Tel: +351 965835359<br />
            Email: geral@company.com<br />
            Address: 123 Company St., City, Country
          </Typography>
        </Grid>


        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Quick Links</Typography>
          <Link href="/about" color="inherit" underline="hover">About Us</Link><br />
          <Link href="/contact" color="inherit" underline="hover">Contact</Link><br />
          <Link href="/privacy" color="inherit" underline="hover">Privacy Policy</Link><br />
          <Link href="/terms" color="inherit" underline="hover">Terms & Conditions</Link>
        </Grid>


           {/* Social Media Icons */}
           <Grid item xs={12} sm={6} md={3}>
           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Follow Us</Typography>
           <Grid container spacing={1}>
           <Grid item>
              <Link href="https://www.instagram.com" color="inherit" target="_blank">
                <Instagram />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.facebook.com" color="inherit" target="_blank">
                <Facebook />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://wa.me/965835359" color="inherit" target="_blank">
                <WhatsApp />
              </Link>
            </Grid>
            
           </Grid>
            </Grid>
             {/* Copyright Section */}
        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
            <Typography variant="body2">© 2024 Company - All Rights Reserved</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
};

export default FooterPage;
