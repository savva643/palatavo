'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export function useVisionImpaired() {
  return useContext(Context);
}

export default function VisionImpairedProvider({ children }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      document.body.classList.add('vision-impaired');
    } else {
      document.body.classList.remove('vision-impaired');
    }
  }, [enabled]);

  const toggle = () => setEnabled(!enabled);

  return (
    <Context.Provider value={{ enabled, toggle }}>
      {children}
    </Context.Provider>
  );
}
