import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Boxes from "@components/Boxes";

import { Title } from '@mantine/core';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Wordle Clue Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title order={1} align="center">Wordle Clue Maker</Title>
        <p className="description" align="center">
          Make wordle clues and share them anywhere
        </p>
        <Boxes />
      </main>

      <Footer />
    </div>
  );
}
