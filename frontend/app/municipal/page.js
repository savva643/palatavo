'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { getMunicipalChambers } from '../../lib/strapi';
import Loading from '../../components/Loading';

export const dynamic = 'force-dynamic';

export default function MunicipalPage() {
  const [chambers, setChambers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMunicipalChambers().then(data => {
      setChambers(data?.data || []);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Муниципальные палаты
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Муниципальные общественные палаты создаются в муниципальных 
        образованиях Владимирской области для обеспечения взаимодействия 
        граждан с органами местного самоуправления.
      </Typography>

      {chambers.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="body1">Информация о муниципальных палатах будет добавлена позже</Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {chambers.map((chamber) => (
            <Grid item xs={12} md={6} key={chamber.id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {chamber.name}
                  </Typography>
                  <Chip 
                    label={chamber.district} 
                    size="small" 
                    color="primary" 
                    sx={{ mb: 2 }}
                  />
                  {chamber.description && (
                    <Typography variant="body2" paragraph>
                      {chamber.description}
                    </Typography>
                  )}
                  {chamber.address && (
                    <Typography variant="body2" color="text.secondary" paragraph>
                      <strong>Адрес:</strong> {chamber.address}
                    </Typography>
                  )}
                  {chamber.chairman && (
                    <Typography variant="body2" color="text.secondary" paragraph>
                      <strong>Председатель:</strong> {chamber.chairman}
                    </Typography>
                  )}
                  {chamber.phone && (
                    <Typography variant="body2" color="text.secondary" paragraph>
                      <strong>Телефон:</strong> {chamber.phone}
                    </Typography>
                  )}
                  {chamber.email && (
                    <Typography variant="body2" color="text.secondary">
                      <strong>Email:</strong> {chamber.email}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
