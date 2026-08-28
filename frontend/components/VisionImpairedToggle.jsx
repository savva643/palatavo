'use client';
import { useVisionImpaired } from './VisionImpairedProvider';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';

export default function VisionImpairedToggle() {
  const { enabled, toggle } = useVisionImpaired();
  return (
    <Tooltip title={enabled ? 'Обычная версия' : 'Версия для слабовидящих'}>
      <IconButton
        onClick={toggle}
        color="inherit"
        aria-label={enabled ? 'Переключить на обычную версию' : 'Переключить на версию для слабовидящих'}
        sx={{ 
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 1,
          px: 1,
          fontSize: '0.75rem'
        }}
      >
        <VisibilityIcon />
      </IconButton>
    </Tooltip>
  );
}
