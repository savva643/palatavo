'use client';
import Link from 'next/link';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { useTheme } from '../app/AppLayout';

const VKIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.244 10.854 4.7 8.753 4.7 8.312c0-.254.102-.491.593-.491h1.761c.44 0 .61.203.78.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.777c.373 0 .508.203.508.643v3.473c0 .373.17.508.271.508.22 0 .407-.135.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
  </svg>
);

const MaxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 1000 1000" fill="currentColor">
    <defs>
      <linearGradient id="maxGradient">
        <stop offset="0" stopColor="#4cf"/>
        <stop offset=".662" stopColor="#53e"/>
        <stop offset="1" stopColor="#93d"/>
      </linearGradient>
    </defs>
    <rect width="1000" height="1000" fill="url(#maxGradient)" ry="249.681"/>
    <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
  </svg>
);

export default function Footer() {
  const { theme } = useTheme();

  return (
    <Box component="footer" sx={{ backgroundColor: theme.primary, color: 'white', py: { xs: 2, md: 3 }, mt: 'auto', transition: 'background-color 0.3s ease' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
              Общественная палата Владимирской области
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
              г. Владимир, ул. Большая Московская, д. 44
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
              Тел: (4922) 32-12-34
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
              Email: info@palatavo.ru
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 1 }}>
            <IconButton color="inherit" aria-label="ВКонтакте" size="small" href="https://vk.com" target="_blank" rel="noopener noreferrer">
              <VKIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Макс" size="small" href="https://max.ru" target="_blank" rel="noopener noreferrer">
              <MaxIcon />
            </IconButton>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: { xs: 2, md: 3 }, pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Typography variant="body2" align="center" sx={{ fontSize: { xs: '0.75rem', md: '0.8rem' } }}>
            © {new Date().getFullYear()} Общественная палата Владимирской области. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
