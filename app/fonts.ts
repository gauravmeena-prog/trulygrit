import { Inter, Sora } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400','500','600','700'],
});

export const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400','500','600','700'],
});
