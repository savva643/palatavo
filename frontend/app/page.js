'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getNews, getAnnouncements } from '../lib/strapi';
import NewsList from '../components/NewsList';
import Loading from '../components/Loading';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const dynamic = 'force-dynamic';

export default function Home() {
  const [newsData, setNewsData] = useState(null);
  const [announcementsData, setAnnouncementsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const news = await getNews({ pagination: { pageSize: 3 } });
        const announcements = await getAnnouncements({ pagination: { pageSize: 3 } });
        setNewsData(news);
        setAnnouncementsData(announcements);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Добро пожаловать в Общественную палату Владимирской области
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Новости
              </Typography>
              <NewsList items={newsData?.data || []} />
              <Box sx={{ mt: 2 }}>
                <Button
                  component={Link}
                  href="/news"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                >
                  Все новости
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Анонсы
              </Typography>
              <NewsList items={announcementsData?.data || []} />
              <Box sx={{ mt: 2 }}>
                <Button
                  component={Link}
                  href="/announcements"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                >
                  Все анонсы
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
