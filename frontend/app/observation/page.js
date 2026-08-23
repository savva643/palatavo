import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const dynamic = 'force-dynamic';

export default function ObservationPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Link href="/">
        <Button startIcon={<ArrowBackIcon />} sx={{ mb: 2 }}>
          Вернуться на главную
        </Button>
      </Link>
      <Typography variant="h4" component="h1" gutterBottom>
        Штаб общественного наблюдения
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Штаб общественного наблюдения создан для организации и координации 
        деятельности общественных наблюдателей при проведении выборов и 
        референдумов на территории Владимирской области.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Задачи штаба
              </Typography>
              <Typography variant="body2" paragraph>
                • Обучение общественных наблюдателей
              </Typography>
              <Typography variant="body2" paragraph>
                • Координация работы наблюдателей на избирательных участках
              </Typography>
              <Typography variant="body2" paragraph>
                • Сбор и анализ информации о ходе выборов
              </Typography>
              <Typography variant="body2">
                • Взаимодействие с избирательными комиссиями
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Как стать наблюдателем
              </Typography>
              <Typography variant="body2" paragraph>
                Для того чтобы стать общественным наблюдателем, необходимо:
              </Typography>
              <Typography variant="body2" paragraph>
                • Быть гражданином Российской Федерации
              </Typography>
              <Typography variant="body2" paragraph>
                • Достичь возраста 18 лет
              </Typography>
              <Typography variant="body2" paragraph>
                • Пройти обучение в штабе наблюдения
              </Typography>
              <Typography variant="body2">
                • Получить направление от политической партии или 
                общественной организации
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Контакты штаба
              </Typography>
              <Typography variant="body2" paragraph>
                Телефон: (4922) 32-12-34
              </Typography>
              <Typography variant="body2" paragraph>
                Email: observation@palatavo.ru
              </Typography>
              <Typography variant="body2">
                Адрес: г. Владимир, ул. Большая Московская, д. 44
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
