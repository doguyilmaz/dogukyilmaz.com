import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>dogukyilmaz.com</title>
        <meta name='description' content='dogukyilmaz.com' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.dogukyilmaz}>dogukyilmaz.com!</span>
        </h1>
        <small className={styles.info}>
          wanna go to main site? then <a href='https://dogukaanyilmaz.com'>click</a>.
        </small>
      </main>
    </div>
  );
}
