import './globals.css';
import AppLayout from './AppLayout';

export const metadata = {
  title: 'Общественная палата Владимирской области',
  description: 'Официальный сайт Общественной палаты Владимирской области',
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
