import Head from "next/head";
import { useState } from "react";

import Banner from "../components/Banner/Banner.jsx";

import Projects from "../components/Portfolio/Projects.jsx";
import Contact from "../components/contact/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Olamide Agboola Portfolio</title>
        <meta
          name="description"
          content="Olamide Agboola Portfolio, frontend developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden">
        <Banner mode={darkMode} setMode={setDarkMode} />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
