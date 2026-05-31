import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Bohdan Chornopolskyi | Full-stack Developer',
  description:
    'Full-stack developer in Warsaw, Poland. React, Next.js, Payload CMS, Docker, CI/CD, and VPS ops. Open to remote and hybrid roles.',
};

export default function FrontendLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-slate-950 text-slate-300 font-sans antialiased selection:bg-blue-500/30 overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
