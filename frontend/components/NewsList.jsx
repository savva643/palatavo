'use client';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import Link from 'next/link';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function NewsList({ news }) {
  if (!news || news.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body1">Нет новостей</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
      {news.map((item) => (
        <Card key={item.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {item.image && (
            <CardMedia
              component="img"
              height="200"
              image={item.image.url}
              alt={item.image.alt || item.title}
            />
          )}
          <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <CalendarTodayIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="caption" color="text.secondary">
                {new Date(item.date).toLocaleDateString('ru-RU')}
              </Typography>
            </Box>
            <Typography variant="h6" component={Link} href={`/news/${item.slug}`} sx={{ 
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { color: 'primary.main' }
            }}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {item.description}
            </Typography>
            {item.tags && Array.isArray(item.tags) && item.tags.length > 0 && (
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {item.tags.map((tag, index) => (
                  <Chip key={index} label={tag} size="small" variant="outlined" />
                ))}
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
