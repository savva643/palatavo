'use client';
import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getNews } from '../../lib/strapi';
import NewsList from '../../components/NewsList';
import Loading from '../../components/Loading';
import CustomPagination from '../../components/Pagination';

export const dynamic = 'force-dynamic';

export default function NewsPage() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews(page, 10).then(data => {
      setNewsData(data);
      setLoading(false);
    });
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  const news = newsData?.data || [];
  const pagination = newsData?.meta?.pagination || {};
  const pageCount = pagination.pageCount || 1;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Новости
      </Typography>
      <NewsList news={news} />
      <CustomPagination
        pageCount={pageCount}
        currentPage={page}
        basePath="/news"
      />
    </Container>
  );
}
