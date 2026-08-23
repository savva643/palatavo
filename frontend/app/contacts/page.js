'use client';
import { Container, Typography, Card, CardContent, Grid, Box, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getContacts } from '../../lib/strapi';
import Loading from '../../components/Loading';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const dynamic = 'force-dynamic';

export default function ContactsPage() {
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContacts().then(data => {
      setContacts(data?.data?.[0] || null);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const contactData = contacts || {
    title: 'Общественная палата Владимирской области',
    address: 'г. Владимир, ул. Большая Московская, д. 44',
    phone: '(4922) 32-12-34',
    email: 'info@palatavo.ru',
    workingHours: 'Пн-Пт: 9:00 - 18:00',
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Контакты
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {contactData.title}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1, mt: 0.5 }} />
                <Typography variant="body1">
                  {contactData.address}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  {contactData.phone}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 1 }} />
                <MuiLink href={`mailto:${contactData.email}`} color="inherit">
                  {contactData.email}
                </MuiLink>
              </Box>

              {contactData.workingHours && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    {contactData.workingHours}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Карта проезда
              </Typography>
              <Box sx={{ height: 300, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Карта будет добавлена позже
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {contactData.socialLinks && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Мы в социальных сетях
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {Object.entries(contactData.socialLinks).map(([platform, url]) => (
                    <MuiLink
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                    >
                      {platform}
                    </MuiLink>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
