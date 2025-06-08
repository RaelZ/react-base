'use client';
import '@/styles/global.css';
import { useAuth } from '@/contexts';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { CustomPage } from '@/components';

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const { token } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (token) {
      push(`/${i18n.language}/`);
    }
  }, [token, push, i18n]);

  return (
    <CustomPage
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        p: 0,
      }}
    >
      {children}
    </CustomPage>
  );
}
