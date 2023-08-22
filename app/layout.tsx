import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/Navbar/ClientOnly';
import RegisterModal from './components/Modals/RegisterModal';
import ToasterProvider from './Providers/ToastProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
