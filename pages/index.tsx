import { GetStaticProps } from "next";
import { api } from "./lib/axios";

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
    <div>
      {projects.map((project) => (
        <h1 key={project.id} >{project.attributes.title}</h1>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/api/projects");

  const data = response.data.data;

  return {
    props: {
      projects: data,
    },
  };
};
