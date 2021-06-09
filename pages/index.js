import { getAllFilesData } from "../lib/folder";
import { getFile } from "../lib/file";
import Layout from "../components/layout";
import Hero from "../components/hero";
import PostList from "../components/post-list";
import ServiceList from "../components/service-list" ;
import ProjectList from "../components/project-list" ;

export default function Home({ allPostsData, pageData, allProjectsData, tags }) {
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
          <h2>Recent Posts</h2>
        </PostList>

        <ProjectList 
          items={allProjectsData}
          limit={4}
        >
          <h2>Projects</h2>
        </ProjectList>

      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getAllFilesData("posts");
  const allProjectsData = await getAllFilesData("projects");
  const pageData = await getFile("pages", "home");

  return {
    props: {
      allPostsData,
      pageData,
      allProjectsData
    },
  };
}
