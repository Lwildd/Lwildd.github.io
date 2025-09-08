import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer({ children }) {
  return (
    <Box component="footer" sx={{ mt: 8, textAlign: 'center', color: 'text.secondary' }}>
      <Typography variant="body2" sx={{ pb: 2 }}>
        {children || `© ${new Date().getFullYear()} Lena Wild. All rights reserved.`}
      </Typography>
    </Box>
  );
}