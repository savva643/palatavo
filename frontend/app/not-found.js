import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';

export default function NotFound() {
  return (
    <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Страница не найдена
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        К сожалению, запрашиваемая страница не существует или была перемещена.
      </Typography>
      <Button
        component={Link}
        href="/"
        variant="contained"
        startIcon={<HomeIcon />}
      >
        Вернуться на главную
      </Button>
    </Container>
  );
}
