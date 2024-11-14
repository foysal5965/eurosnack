'use client';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { motion } from 'framer-motion';
import { TextField } from '@mui/material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setMobileOpen(!mobileOpen);
    if (mobileOpen) setCategoryDropdownOpen(false);
  };

  const handleCategoryClick = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setMobileOpen(false);
    setCategoryDropdownOpen(false);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Products', link: '/products' },
    { text: 'Category', link: '#', onClick: handleCategoryClick },
    { text: 'Login', link: '/login' },
  ];

  const categoryItems = ['Snacks', 'Chocolate', 'Candy'];

  return (
    <AppBar  sx={{ zIndex: 1201, backgroundColor: '#333333', m: 0, }}>
      <Toolbar sx={{ m: 0, px: 2 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FragFuel
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          sx={{ display: { xs: 'none', md: 'flex' }, m: 0 }}
        >
          {menuItems.map((item) => (
            <motion.div key={item.text} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {item.text === 'Category' ? (
                <Box sx={{ position: 'relative', m: 0 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      color: 'inherit',
                      m: 0,
                    }}
                    onClick={handleCategoryClick}
                  >
                    {item.text}
                    <ArrowDropDownIcon sx={{ fontSize: 20, verticalAlign: 'middle', ml: 1 }} />
                  </Typography>
                  {categoryDropdownOpen && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: 'white',
                        boxShadow: 3,
                        zIndex: 1301,
                        py: 1,
                        minWidth: '150px',
                        borderRadius: 1,
                        border: '1px solid #ddd',
                        m: 0,
                      }}
                    >
                      {categoryItems.map((category) => (
                        <Typography
                          key={category}
                          sx={{
                            fontWeight: 600,
                            color: 'black',
                            cursor: 'pointer',
                            px: 2,
                            py: 1,
                            '&:hover': { backgroundColor: '#f0f0f0' },
                          }}
                          onClick={() => setCategoryDropdownOpen(false)}
                        >
                          {category}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              ) : (
                <Typography
                  sx={{ fontWeight: 700, textDecoration: 'none', color: 'inherit', m: 0 }}
                  component={Link}
                  href={item.link}
                  onClick={handleMenuItemClick}
                >
                  {item.text}
                </Typography>
              )}
            </motion.div>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, m: 0 }}>
          <IconButton color="inherit" onClick={handleSearchClick} sx={{ m: 0 }}>
            <SearchIcon />
          </IconButton>
          {searchOpen && (
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{ backgroundColor: 'white', borderRadius: 1, m: 0 }}
            />
          )}
          <IconButton color="inherit" sx={{ m: 0 }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ m: 0 }}>
            <ShoppingCartIcon />
          </IconButton>
        </Stack>

        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { md: 'none' }, m: 0 }}
          onClick={toggleMobileDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleMobileDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 2,
            m: 0,
          },
        }}
      >
        <Box sx={{ textAlign: 'center', m: 0 }}>
          <Stack direction="column" justifyContent="center" alignItems="center" gap={2} sx={{ m: 0 }}>
            {menuItems.map((item) => (
              <motion.div key={item.text} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {item.text === 'Category' ? (
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        textDecoration: 'none',
                        cursor: 'pointer',
                        color: 'inherit',
                        m: 0,
                      }}
                      onClick={handleCategoryClick}
                    >
                      {item.text}
                      <ArrowDropDownIcon sx={{ fontSize: 20, verticalAlign: 'middle', ml: 1 }} />
                    </Typography>
                    {categoryDropdownOpen && (
                      <Box sx={{ mt: 1, pl: 2, m: 0 }}>
                        {categoryItems.map((category) => (
                          <Typography
                            key={category}
                            sx={{
                              fontWeight: 600,
                              color: 'black',
                              cursor: 'pointer',
                              m: 0,
                            }}
                            onClick={handleMenuItemClick}
                          >
                            {category}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Box>
                ) : (
                  <Typography
                    sx={{ fontWeight: 700, textDecoration: 'none', color: 'inherit', m: 0 }}
                    component={Link}
                    href={item.link}
                    onClick={handleMenuItemClick}
                  >
                    {item.text}
                  </Typography>
                )}
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
