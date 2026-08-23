'use client';
import Link from 'next/link';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#1976d2', color: 'white', py: { xs: 3, md: 4 }, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Общественная палата Владимирской области
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
              Официальный сайт Общественной палаты Владимирской области
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Навигация
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Link href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                О палате
              </Link>
              <Link href="/activities" style={{ color: 'white', textDecoration: 'none', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                Деятельность
              </Link>
              <Link href="/news" style={{ color: 'white', textDecoration: 'none', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                Новости
              </Link>
              <Link href="/contacts" style={{ color: 'white', textDecoration: 'none', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                Контакты
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Контакты
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
              г. Владимир, ул. Большая Московская, д. 44
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
              Тел: (4922) 32-12-34
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
              Email: info@palatavo.ru
            </Typography>
            
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook" size="small">
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter" size="small">
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="YouTube" size="small">
                <YouTubeIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram" size="small">
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: { xs: 2, md: 4 }, pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Typography variant="body2" align="center" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
            © {new Date().getFullYear()} Общественная палата Владимирской области. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
