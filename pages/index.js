import {useRouter} from "next/router";

import { getAllFilesData } from "../lib/folder";
import { getFile } from "../lib/file";
import Layout from "../components/layout";
import Hero from "../components/hero";
import PostList from "../components/post-list";
import ServiceList from "../components/service-list" ;
import ProjectList from "../components/project-list" ;

export default function Home({ allPostsData, pageData, allProjectsData, tags }) {
  const {locale} = useRouter();
  console.log(locale);

  return (
    <Layout url="/" title={pageData.title}>
      <div>
        <Hero image={pageData.image}>
          <h1 className="mb-2">{pageData.heading}</h1>
          <p className="text-lg">{pageData.subheading}</p>
        </Hero>

        <ServiceList 
          items={pageData.services}
        >
          <h2>Services</h2>
        </ServiceList>

        <PostList 
          items={allPostsData} 
          limit={2}
        >
          <h2>
            {locale == "fr" ? "Derniers récents" : "Latest posts"}
          </h2>
        </PostList>

        <ProjectList 
          items={allProjectsData}
          limit={4}
        >
          <h2>
            {locale == "fr" ? "Derniers projets" : "Latest projects"}
          </h2>
        </ProjectList>

      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const allPostsData = await getAllFilesData("posts", locale);
  const allProjectsData = await getAllFilesData("projects", locale);
  const pageData = await getFile("pages", "home", locale);

  return {
    props: {
      allPostsData,
      pageData,
      allProjectsData
    },
  };
}
