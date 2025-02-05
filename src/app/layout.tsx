'use client';
import '@/styles/global.css';
import { useEffect, useState } from 'react';
import { Provider as JotaiProvider, createStore, useAtom } from 'jotai';
import { Inter } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeConsumer } from '@/components';
import i18n, { languages } from '@/translations';
import { languageAtom } from '@/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [jotaiStore] = useState(() => createStore());
  const [hydrated, setHydrated] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useAtom(languageAtom);

  useEffect(() => {
    setHydrated(true);

    if (!pathname) return;

    const lang = pathname.split('/')[1];

    if (lang && languages.some(({ code }) => code === lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
        localStorage.setItem('language', lang);
      }
    } else {
      const storedLang = localStorage.getItem('language') || 'pt';
      setSelectedLanguage(storedLang);
      i18n.changeLanguage(storedLang);
      router.replace(`/${storedLang}`);
    }
  }, [pathname, router, setSelectedLanguage]);

  if (!hydrated) return <></>;

  return (
    <html lang={selectedLanguage} cz-shortcut-listen='true'>
      <body className={inter.className}>
        <JotaiProvider store={jotaiStore}>
          <ThemeConsumer>{children}</ThemeConsumer>
        </JotaiProvider>
      </body>
    </html>
  );
}
