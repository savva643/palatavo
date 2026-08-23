'use client';
import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAnnouncements } from '../../lib/strapi';
import NewsList from '../../components/NewsList';
import Loading from '../../components/Loading';
import CustomPagination from '../../components/Pagination';

export const dynamic = 'force-dynamic';

export default function AnnouncementsPage() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;
  const [announcementsData, setAnnouncementsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnnouncements(page, 10).then(data => {
      setAnnouncementsData(data);
      setLoading(false);
    });
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  const announcements = announcementsData?.data || [];
  const pagination = announcementsData?.meta?.pagination || {};
  const pageCount = pagination.pageCount || 1;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Анонсы мероприятий
      </Typography>
      <NewsList news={announcements} />
      <CustomPagination
        pageCount={pageCount}
        currentPage={page}
        basePath="/announcements"
      />
    </Container>
  );
}
