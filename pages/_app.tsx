import Sidebar from '@/components/Sidebar';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      className={`bg-backgroundColor font-medium text-textColor dark:bg-backgroundColor-darkMode h-screen overflow-hidden flex flex-nowrap ${
        isDark ? 'dark' : 'normal'
      }`}
    >
      <Sidebar />

      <main className="w-full overflow-y-scroll dark:bg-backgroundColor-darkMode bg-backgroundColor">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
