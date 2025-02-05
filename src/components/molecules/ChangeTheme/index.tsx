'use client';
import { themeModeAtom } from '@/store';
import { LightMode, DarkMode } from '@mui/icons-material';
import { IconButton, SxProps, Theme } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

export const ChangeTheme: React.FC = () => {
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);

  const toggleTheme = () => setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <IconButton onClick={toggleTheme} sx={iconButtonSx}>
      {themeMode === 'light' ? <LightMode sx={iconSx} /> : <DarkMode sx={iconSx} />}
    </IconButton>
  );
};

const iconButtonSx: SxProps<Theme> = {
  maxHeight: 24,
  maxWidth: 24,
};
const iconSx: SxProps<Theme> = {
  maxHeight: 16,
  maxWidth: 16,
};
