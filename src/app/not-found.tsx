'use client';
import { CSSProperties, useEffect } from 'react';
import { ErrorOutlineRounded } from '@mui/icons-material';
import { CircularProgress, SxProps, Theme, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { i18n } = useTranslation();
  const { push } = useRouter();

  useEffect(() => {
    const lang = i18n.language;
    const timeout = setTimeout(() => push(`/${lang}`), 3000);
    return () => clearTimeout(timeout);
  }, [push, i18n]);

  return (
    <main style={{ ...mainStyle }}>
      <ErrorOutlineRounded sx={iconSx} />
      <Typography variant='overline' fontSize={24}>
        <strong>404</strong> - Page not found
      </Typography>
      <Typography variant='overline' mb={2}>
        returning to home page
      </Typography>
      <CircularProgress />
    </main>
  );
}

const mainStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  fontSize: '2rem',
};

const iconSx: SxProps<Theme> = {
  fontSize: '8rem',
};
