'use client';
import { Box, Pagination } from '@mui/material';
import { useState } from 'react';

export default function CustomPagination({ pageCount, currentPage, basePath }) {
  const [page, setPage] = useState(currentPage);

  const handleChange = (event, value) => {
    setPage(value);
    window.location.href = `${basePath}?page=${value}`;
  };

  if (pageCount <= 1) return null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChange}
        color="primary"
        size="medium"
        showFirstButton
        showLastButton
      />
    </Box>
  );
}
