import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from '../lib/theme';
import VisionImpairedProvider from '../components/VisionImpairedProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

export default function AppLayout({ children }) {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VisionImpairedProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </VisionImpairedProvider>
    </ThemeProvider>
  );
}
