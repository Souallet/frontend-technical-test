import type { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/lbc-logo.webp";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "../components/card";
import UserSelect from "../components/users/userSelect";

const Home: FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name="description"
          content="Frontend exercise for developpers who want to join us on leboncoin.fr"
        ></meta>
      </Head>

      <main className={styles.main}>
        <Image
          src={Logo}
          alt="Leboncoin Frontend Team"
          width={400}
          height={125}
        />
        <h1 className={styles.title}>Welcome !</h1>
        <p>Choose your User</p>
        <UserSelect />

        <Card>
          <Link href="/conversations">Access to user conversations</Link>
        </Card>
      </main>

      <footer className={styles.footer}>&copy; leboncoin - {year}</footer>
    </div>
  );
};

export default Home;
