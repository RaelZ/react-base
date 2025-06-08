'use client';
import { store } from '@/configs';
import { Initializers, LanguageInitializer, ThemeInitializer } from '@/initializers';
import { ClientSide } from '@/providers';
import '@/styles/global.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="br">
      <body className={inter.className}>
        <Provider store={store}>
          <Initializers initializers={[LanguageInitializer, ThemeInitializer]}>
            <ClientSide>{children}</ClientSide>
          </Initializers>
        </Provider>
      </body>
    </html>
  );
}
