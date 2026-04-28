import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Bohdan Chornopolskyi | Software Engineer',
  description: 'Professional Full Stack Developer Portfolio',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-slate-950 text-slate-300 font-sans antialiased selection:bg-blue-500/30 overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
