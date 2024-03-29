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
        <title>SkyWays Global Services</title>
        <meta name="description" content="SkyWays recruting" />
        <meta
          name="description"
          content="Skyways Global Services Ltd is a human resource consultancy firm"
        />
        <meta
          property="og:description"
          content="Skyways Global Services Ltd is a human resource consultancy firm"
        />
        <meta property="og:url" content="https://skywaysglobal.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroComponent />
      <WhatWeDo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
