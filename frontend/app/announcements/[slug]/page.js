'use client';
import { Box, Container, Typography, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getAnnouncementBySlug } from '../../../lib/strapi';
import Loading from '../../../components/Loading';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function AnnouncementDetailPage() {
  const params = useParams();
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      getAnnouncementBySlug(params.slug).then(data => {
        setAnnouncement(data?.data?.[0] || null);
        setLoading(false);
      });
    }
  }, [params.slug]);

  if (loading) {
    return <Loading />;
  }

  if (!announcement) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4">Анонс не найден</Typography>
        <Link href="/announcements">
          <Button startIcon={<ArrowBackIcon />}>Вернуться к анонсам</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Link href="/announcements">
        <Button startIcon={<ArrowBackIcon />} sx={{ mb: 2 }}>
          Вернуться к анонсам
        </Button>
      </Link>

      <Card>
        {announcement.image && (
          <CardMedia
            component="img"
            height="400"
            image={announcement.image.url}
            alt={announcement.image.alt || announcement.title}
          />
        )}
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarTodayIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                Дата публикации: {new Date(announcement.date).toLocaleDateString('ru-RU')}
              </Typography>
            </Box>
            {announcement.eventDate && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarTodayIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Дата мероприятия: {new Date(announcement.eventDate).toLocaleDateString('ru-RU')}
                </Typography>
              </Box>
            )}
          </Box>
          
          {announcement.location && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {announcement.location}
              </Typography>
            </Box>
          )}
          
          <Typography variant="h4" component="h1" gutterBottom>
            {announcement.title}
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ mb: 2 }}>
            {announcement.description}
          </Typography>
          
          <div dangerouslySetInnerHTML={{ __html: announcement.content }} />
        </CardContent>
      </Card>
    </Container>
  );
}
