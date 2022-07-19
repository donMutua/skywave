import type { NextPage } from "next";
import Head from "next/head";
import { Contact } from "../components/Contacts";
import Footer from "../components/Footer";
import { HeroComponent } from "../components/Herocomponent";
import { WhatWeDo } from "../components/WhatWeDo";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SkyWave</title>
        <meta name="description" content="" />
      </Head>
      <HeroComponent />
      <WhatWeDo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
