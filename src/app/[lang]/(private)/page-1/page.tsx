'use client';
import { CustomPage } from '@/components';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Page1() {
  const { t } = useTranslation();

  return (
    <CustomPage>
      <Typography variant="h1">{t('pages.page-1.title')}</Typography>
      <Typography variant="subtitle2">{t('pages.page-1.description')}</Typography>
    </CustomPage>
  );
}
