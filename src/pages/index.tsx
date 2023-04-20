import Head from "next/head";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { BackgroundImage } from "../components/BackgroundImage";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Technologies";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Projects {
  projects: {
    id: number;
    attributes: {
      title: string;
      description: string;
    };
  }[];
}

export default function Home({ projects }: Projects) {
  return (
    <>
      <Head>
        <title>👷 Em construção... | Gabriel Dias</title>
      </Head>

      <ToastContainer />

      <Header />

      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <BackgroundImage sizeBackground="large" />
    </>
  );
}

/* export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/api/projects");

  const data = response.data.data;

  return {
    props: {
      projects: data,
    },
  };
};
 */
