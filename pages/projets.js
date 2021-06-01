import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import ProjectList from "../components/project-list";

import { getAllFilesData } from "../lib/folder";

export default function Projets({ projects }){
  return (
    <Layout>
      <PageHeader>
        <h1>Projets</h1>
        <p>Quelques projets</p>
      </PageHeader>

      <ProjectList 
        items={projects} 
        limit={1000}
      />

    </Layout>
  )
}

export async function getStaticProps(){
  const allProjects = await getAllFilesData("projects");
  return {
    props: {
      projects: allProjects
    }
  }
}