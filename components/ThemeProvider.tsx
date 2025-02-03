'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" // Force default instead of system
      enableSystem={false} // Disable system preference detection
    >
      {children}
    </NextThemesProvider>
  );
}