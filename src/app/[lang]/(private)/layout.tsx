'use client';
import '@/styles/global.css';
import { MainLayout } from '@/components';
import { useAuth } from '@/contexts';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const { token } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (!token) {
      push(`/${i18n.language}/login`);
    }
  }, [token, push, i18n]);

  return token ? <MainLayout>{children}</MainLayout> : null;
}
