'use client';

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
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
