import Head from 'next/head';
import Image from 'next/image';

import styles from '@/pages/index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome</h1>
      </main>
    </>
  );
}
