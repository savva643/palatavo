'use client';
import { Box, Container, Typography, Tabs, Tab, Button } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const tabContent = [
    {
      label: 'Общая информация',
      content: (
        <Box sx={{ py: 4 }}>
          <Typography variant="body1" paragraph>
            Общественная палата Владимирской области — это совещательный орган, 
            обеспечивающий взаимодействие граждан Российской Федерации, общественных 
            объединений и органов государственной власти Владимирской области для 
            решения важнейших вопросов экономического и социального развития области, 
            повышения качества жизни граждан.
          </Typography>
          <Typography variant="body1" paragraph>
            Палата осуществляет общественный контроль за деятельностью органов 
            исполнительной власти Владимирской области и органов местного самоуправления, 
            участвует в формировании и реализации государственной политики области, 
            проводит общественную экспертизу проектов нормативных правовых актов.
          </Typography>
        </Box>
      ),
    },
    {
      label: 'Структура',
      content: (
        <Box sx={{ py: 4 }}>
          <Typography variant="body1" paragraph>
            Структура Общественной палаты включает в себя Совет палаты, комиссии 
            по различным направлениям деятельности, а также рабочих групп по 
            рассмотрению конкретных вопросов.
          </Typography>
          <Typography variant="body1" paragraph>
            Совет палаты является коллегиальным органом управления палатой и 
            осуществляет общее руководство ее деятельностью в период между 
            заседаниями палаты.
          </Typography>
        </Box>
      ),
    },
    {
      label: 'Состав',
      content: (
        <Box sx={{ py: 4 }}>
          <Typography variant="body1" paragraph>
            В состав Общественной палаты Владимирской области входят представители 
            общественных объединений, научных и образовательных учреждений, 
            средств массовой информации, а также другие граждане, имеющие 
            значимый опыт общественной деятельности.
          </Typography>
          <Typography variant="body1" paragraph>
            Члены палаты избираются на срок 3 года. Количество членов палаты 
            определяется в соответствии с законодательством Владимирской области.
          </Typography>
        </Box>
      ),
    },
    {
      label: 'Совет',
      content: (
        <Box sx={{ py: 4 }}>
          <Typography variant="body1" paragraph>
            Совет Общественной палаты формируется из числа членов палаты. 
            В состав Совета входят председатель палаты, его заместители и 
            руководители комиссий.
          </Typography>
          <Typography variant="body1" paragraph>
            Совет палаты организует работу палаты, готовит повестку заседаний, 
            координирует деятельность комиссий и обеспечивает выполнение 
            решений палаты.
          </Typography>
        </Box>
      ),
    },
    {
      label: 'Комиссии',
      content: (
        <Box sx={{ py: 4 }}>
          <Typography variant="body1" paragraph>
            Комиссии Общественной палаты создаются по основным направлениям 
            деятельности палаты. Каждая комиссия занимается конкретными 
            вопросами в своей сфере компетенции.
          </Typography>
          <Typography variant="body1" paragraph>
            Комиссии проводят общественные слушания, экспертизу проектов 
            нормативных актов, готовят рекомендации по улучшению работы 
            органов власти.
          </Typography>
        </Box>
      ),
    },
    {
      label: 'Документы',
      content: (
        <Box sx={{ py: 4 }}>
          <Typography variant="body1" paragraph>
            В этом разделе представлены основные документы, регламентирующие 
            деятельность Общественной палаты Владимирской области.
          </Typography>
          <Typography variant="body1" paragraph>
            Документы включают устав палаты, регламенты комиссий, отчеты 
            о деятельности, а также другие нормативные и справочные материалы.
          </Typography>
          <Button
            component={Link}
            href="/documents"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Перейти к документам
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        О палате
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
