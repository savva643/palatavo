'use client';
import { Box, Container, Typography, Tabs, Tab, Button } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function ActivitiesPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const tabContent = [
    {
      label: 'Общественный контроль',
      content: (
        <Box sx={{ py: 4 }}>
          <Typography variant="body1" paragraph>
            Общественный контроль — это деятельность граждан, общественных 
            объединений и иных негосударственных организаций по наблюдению 
            за деятельностью органов государственной власти и местного 
            самоуправления.
          </Typography>
          <Typography variant="body1" paragraph>
            Общественная палата осуществляет общественный контроль за:
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <Typography component="li" variant="body1" paragraph>
              Реализацией государственных программ в области
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Деятельностью органов исполнительной власти
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Работой органов местного самоуправления
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Соблюдением прав и свобод граждан
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Проекты',
      content: (
        <Box sx={{ py: 4 }}>
          <Typography variant="body1" paragraph>
            Общественная палата реализует различные проекты, направленные 
            на развитие гражданского общества и улучшение качества жизни 
            жителей Владимирской области.
          </Typography>
          <Typography variant="body1" paragraph>
            Основные направления проектной деятельности:
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <Typography component="li" variant="body1" paragraph>
              Поддержка общественных инициатив
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Развитие волонтерства
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Обучение гражданским навыкам
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Информационно-просветительская деятельность
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/projects"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Посмотреть проекты
          </Button>
        </Box>
      ),
    },
    {
      label: 'Доклады',
      content: (
        <Box sx={{ py: 4 }}>
          <Typography variant="body1" paragraph>
            Общественная палата регулярно готовит и публикует доклады о 
            состоянии гражданского общества в Владимирской области, о 
            результатах общественного контроля и других аспектах своей 
            деятельности.
          </Typography>
          <Typography variant="body1" paragraph>
            Доклады основываются на результатах мониторингов, общественных 
            слушаний, анализе обращений граждан и других формах сбора 
            информации.
          </Typography>
          <Button
            component={Link}
            href="/documents?category=reports"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Посмотреть доклады
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Деятельность
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabContent.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Box>

      {tabContent[tabValue].content}
    </Container>
  );
}
