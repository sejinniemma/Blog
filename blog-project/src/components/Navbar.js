'use client';

import { Stack, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu'; // Import hamburger icon
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:1200px)'); // Check if screen width is xs

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  return (
    <Stack
      width='100%'
      height='100px'
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        pt: { xs: 2, md: 5 },
        pr: { xs: 2, md: 10 },
        pl: { xs: 2, md: 10 },
      }}
    >
      <Link href={`/`}>
        {' '}
        <Typography
          sx={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 'bold',
            color: 'white',
            fontSize: { xs: '30px', md: '50px' },
          }}
        >
          {"꿀's 먹방 Blog"}
        </Typography>
      </Link>

      {isMobile ? (
        <IconButton onClick={handleClick} sx={{ color: 'white' }}>
          <MenuIcon sx={{ fontSize: { xs: '25px', md: '40px' } }} />
        </IconButton>
      ) : (
        <Stack
          display='flex'
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          sx={{ p: 3 }}
        >
          {['Home', 'About', 'Posts', 'Contact'].map((li, index) => {
            return (
              <Link key={index} href={`/${li.toLowerCase()}`}>
                <Typography
                  sx={{
                    position: 'relative',
                    ml: '20px',
                    color: 'white',
                    fontFamily: 'Pretendard, sans-serif',
                    fontSize: '40px',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: 'salmon', // Change text color on hover
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -5,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'salmon',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease-out',
                    },
                    '&:hover:after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom left',
                    },
                  }}
                >
                  {li}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      )}

      {/* Menu for mobile */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {['Home', 'About', 'Posts', 'Contact'].map((li, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <Link
              href={`/${li.toLowerCase()}`}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              {li}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
}
