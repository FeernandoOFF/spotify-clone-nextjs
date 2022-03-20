import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import 'antd/dist/antd.css';
import '@/styles/global.css';
import Sidebar from '@/components/Sidebar';
import { useStore } from 'utils/store';
import Player from '@/components/Player';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const isDark = useStore((state) => state.darkMode);
  return (
    <SessionProvider session={session}>
      <div
        className={`bg-backgroundColor font-medium text-textColor dark:bg-backgroundColor-darkMode h-screen overflow-hidden flex flex-nowrap ${
          isDark ? 'dark' : 'normal'
        }`}
      >
        <Sidebar />
        {/* {isDark ? "It's dark" : "It's not dark"} */}
        <main className="w-full overflow-y-scroll flex flex-nowrap dark:bg-backgroundColor-darkMode bg-backgroundColor text-textColor">
          <Component {...pageProps} />
          <Player />
        </main>
      </div>
    </SessionProvider>
  );
}
