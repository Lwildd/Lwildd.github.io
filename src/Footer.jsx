import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer({ children }) {
  return (
    <Box component="footer" sx={{  textAlign: 'center', color: 'text.secondary' }}>
      <Typography variant="body2" sx={{ py: 2 }}>
        {children || `© ${new Date().getFullYear()} Lena Wild. All rights reserved.`}
      </Typography>
    </Box>
  );
}