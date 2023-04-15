import Head from "next/head";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { BackgroundImage } from "../components/BackgroundImage";

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

      <Header />

      <Intro />

      <BackgroundImage />

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
