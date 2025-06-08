'use client';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/configs';
import { darkTheme, lightTheme } from '@/themes';
import { Providers } from '@/providers';
import { ReduxInitializer } from '@/initializers';
import { ThemeProvider } from '@mui/material';
import { AuthProvider } from '@/contexts';

export const ClientSide: FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const currentTheme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ReduxInitializer>
      <Providers
        providers={[
          { component: ThemeProvider, props: { theme: currentTheme } },
          { component: AuthProvider },
        ]}
      >
        {children}
      </Providers>
    </ReduxInitializer>
  );
};
