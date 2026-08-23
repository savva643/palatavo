'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Alert,
  Paper,
  Container,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        consent: false,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="success" sx={{ mt: 2 }}>
          Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.
        </Alert>
        <Button
          variant="outlined"
          onClick={() => setSubmitted(false)}
          sx={{ mt: 2 }}
        >
          Отправить еще одно сообщение
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Интернет-приемная
        </Typography>
        <Typography variant="body1" paragraph>
          Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="ФИО"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            margin="normal"
            autoComplete="name"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
            autoComplete="email"
          />
          <TextField
            fullWidth
            label="Тема сообщения"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Сообщение"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            margin="normal"
            multiline
            rows={6}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
            }
            label={
              <Typography variant="body2">
                Я согласен на обработку персональных данных в соответствии с 
                <Link href="/privacy" style={{ marginLeft: '4px' }}>
                  политикой конфиденциальности
                </Link>
              </Typography>
            }
            sx={{ mt: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            disabled={loading}
            endIcon={<SendIcon />}
          >
            {loading ? 'Отправка...' : 'Отправить сообщение'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
