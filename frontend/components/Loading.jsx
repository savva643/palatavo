'use client';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: 2
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="body1" color="text.secondary">
        Загрузка...
      </Typography>
    </Box>
  );
}
