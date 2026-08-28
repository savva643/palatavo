'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from '../lib/theme';
import VisionImpairedProvider from '../components/VisionImpairedProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/material';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const CustomThemeProvider = ({ children }) => {
  const [isRedTheme, setIsRedTheme] = useState(false);

  const toggleTheme = () => {
    setIsRedTheme(!isRedTheme);
  };

  const theme = {
    primary: isRedTheme ? '#d32f2f' : '#1976d2',
    isRedTheme
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isRedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function AppContent({ children }) {
  const { theme } = useTheme();
  const muiTheme = getTheme(theme.primary);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <VisionImpairedProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1, backgroundColor: '#f5f5f5' }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </VisionImpairedProvider>
    </ThemeProvider>
  );
}

export default function AppLayout({ children }) {
  return (
    <CustomThemeProvider>
      <AppContent>{children}</AppContent>
    </CustomThemeProvider>
  );
}
