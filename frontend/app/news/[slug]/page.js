'use client';
import { Box, Container, Typography, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getNewsBySlug } from '../../../lib/strapi';
import Loading from '../../../components/Loading';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NewsDetailPage() {
  const params = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      getNewsBySlug(params.slug).then(data => {
        setNewsItem(data?.data?.[0] || null);
        setLoading(false);
      });
    }
  }, [params.slug]);

  if (loading) {
    return <Loading />;
  }

  if (!newsItem) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4">Новость не найдена</Typography>
        <Link href="/news">
          <Button startIcon={<ArrowBackIcon />}>Вернуться к новостям</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Link href="/news">
        <Button startIcon={<ArrowBackIcon />} sx={{ mb: 2 }}>
          Вернуться к новостям
        </Button>
      </Link>

      <Card>
        {newsItem.image && (
          <CardMedia
            component="img"
            height="400"
            image={newsItem.image.url}
            alt={newsItem.image.alt || newsItem.title}
          />
        )}
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CalendarTodayIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {new Date(newsItem.date).toLocaleDateString('ru-RU')}
            </Typography>
          </Box>
          
          <Typography variant="h4" component="h1" gutterBottom>
            {newsItem.title}
          </Typography>
          
          {newsItem.tags && Array.isArray(newsItem.tags) && newsItem.tags.length > 0 && (
            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {newsItem.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" variant="outlined" />
              ))}
            </Box>
          )}
          
          <Typography variant="body1" paragraph sx={{ mb: 2 }}>
            {newsItem.description}
          </Typography>
          
          <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
        </CardContent>
      </Card>
    </Container>
  );
}
