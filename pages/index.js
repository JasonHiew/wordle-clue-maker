import Head from "next/head";
import Footer from "@components/Footer";
import Boxes from "@components/Boxes";

import { Title, Center, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Center>
        <div>
          <Head>
            <title>Wordle Clue Maker</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="google-site-verification" content="9z7hnEJBi7Tl3MMIFxkxRAuT7pdy-AU3i9zkI-iHdzc" />
            <meta property="og:type" content="website" />
            <meta
              name="description"
              content="Make wordle clues by clicking boxes and share them anywhere as emojis."
            />
            <meta property="og:title" content="Wordle Clue Maker" />
            <meta
              property="og:description"
              content="Make wordle clues by clicking boxes and share them anywhere as emojis."
            />
            <meta
              property="og:url"
              content="https://wordle-clue-maker.netlify.app"
            />
            <link
              rel="canonical"
              href="https://wordle-clue-maker.netlify.app"
            />
            <meta property="og:image" content="/wordle_clue_maker_logo.png" />
          </Head>

          <main>
            <Title order={1} align="center">
              Wordle Clue Maker
            </Title>
            <Text weight={500}>
              Tired of having to write out clues to your wordle? <br />
              Make wordle clues without giving away the word <br />
              and share them anywhere as emojis.
            </Text>
            <Boxes />
            {/* <Checkboxes /> */}
          </main>
        </div>
      </Center>
      <Footer />
    </>
  );
}
