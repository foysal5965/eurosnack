import React from 'react';
import { Box, Button, TextField, Typography, Grid, Paper } from '@mui/material';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #f1f1f1, #ffffff)',
      }}
    >
      <Paper sx={{ padding: 3, width: { xs: '80%', sm: '400px' }, boxShadow: 3 }}>
        <Typography variant="h5" component="h1" sx={{ mb: 2, textAlign: 'center' }}>
          Login
        </Typography>

        <form>
          <Grid container spacing={2}>
            {/* Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                required
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                required
              />
            </Grid>

            {/* Login Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: 1 }}
              >
                Login
              </Button>
            </Grid>

            {/* Sign In Message */}
            <Grid item xs={12}>
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                Don't have an account? <Link href="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>Sign up</Link>
              </Typography>
            </Grid>

            {/* Forgot Password */}
            <Grid item xs={12}>
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                <a href="/forgot-password" style={{ textDecoration: 'none', color: '#1976d2' }}>
                  Forgot Password?
                </a>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
