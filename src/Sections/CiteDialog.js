// components/CiteDialog.js
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from '@mui/material';

export default function CiteDialog({ open, onClose, bibtex }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
  };

 

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Cite</DialogTitle>
      <DialogContent>
        <Box
          component="pre"
          sx={{
            backgroundColor: '#f5f5f5',
            padding: 2,
            borderRadius: 1,
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
          }}
        >
          {bibtex}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCopy} variant="outlined">Copy</Button>
      </DialogActions>
    </Dialog>
  );
}