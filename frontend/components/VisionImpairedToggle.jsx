'use client';
import { useVisionImpaired } from './VisionImpairedProvider';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function VisionImpairedToggle() {
  const { enabled, toggle } = useVisionImpaired();
  return (
    <Button
      onClick={toggle}
      startIcon={<VisibilityIcon />}
      variant={enabled ? 'contained' : 'outlined'}
      aria-label={enabled ? 'Переключить на обычную версию' : 'Переключить на версию для слабовидящих'}
    >
      {enabled ? 'Версия для слабовидящих' : 'Обычная версия'}
    </Button>
  );
}
