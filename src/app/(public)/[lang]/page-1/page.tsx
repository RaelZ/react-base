'use client';
import { useTranslation } from 'react-i18next';

export default function Page1() {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('pages.home.welcome')}</h1>
      <p>{t('pages.home.description')}</p>
    </main>
  );
}
