import type { Metadata } from 'next';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyles from './components/GlobalStyles';

import '@fontsource/open-sans';
import '@fontsource/montserrat/600.css';
import '@fontsource/proza-libre/600.css';
import 'normalize.css';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Scotiabank Arena',
    default: 'Scotiabank Arena Online Menu',
  },
  description: 'Scotiabank Arena concession menu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
