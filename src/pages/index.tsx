import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Contact } from "../components/Contacts";
import Footer from "../components/Footer";
import { HeroComponent } from "../components/Herocomponent";
import { WhatWeDo } from "../components/WhatWeDo";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SkyWave</title>
        <meta name="description" content="SkyWave recruting" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HeroComponent />
      <WhatWeDo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
