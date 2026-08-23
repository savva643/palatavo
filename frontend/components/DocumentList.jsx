'use client';
import { Box, List, ListItem, ListItemText, ListItemIcon, Chip, Typography } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from 'next/link';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const getIconForCategory = (category) => {
  switch (category) {
    case 'reports':
      return <DescriptionIcon />;
    case 'regulations':
      return <InsertDriveFileIcon />;
    case 'materials':
      return <PictureAsPdfIcon />;
    default:
      return <InsertDriveFileIcon />;
  }
};

const getCategoryLabel = (category) => {
  switch (category) {
    case 'reports':
      return 'Отчеты';
    case 'regulations':
      return 'Нормативные документы';
    case 'materials':
      return 'Материалы';
    default:
      return 'Другое';
  }
};

export default function DocumentList({ documents }) {
  if (!documents || documents.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body1">Нет документов</Typography>
      </Box>
    );
  }

  return (
    <List>
      {documents.map((doc) => (
        <ListItem
          key={doc.id}
          component={Link}
          href={doc.file.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            border: '1px solid #e0e0e0',
            borderRadius: 1,
            mb: 1,
            textDecoration: 'none',
            '&:hover': { backgroundColor: '#f5f5f5' },
          }}
        >
          <ListItemIcon>
            {getIconForCategory(doc.category)}
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {doc.title}
                </Typography>
                <Chip
                  label={getCategoryLabel(doc.category)}
                  size="small"
                  variant="outlined"
                />
              </Box>
            }
            secondary={
              <Box sx={{ mt: 0.5 }}>
                {doc.description && (
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {doc.description}
                  </Typography>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CalendarTodayIcon fontSize="small" />
                  <Typography variant="caption" color="text.secondary">
                    {new Date(doc.date).toLocaleDateString('ru-RU')}
                  </Typography>
                </Box>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
