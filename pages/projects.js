import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import ProjectList from "../components/project-list";

import { getAllFilesData } from "../lib/folder";
import { getFile } from "../lib/file";

export default function Projets({ projects, pageData }){
  return (
    <Layout>
      <PageHeader>
        <h1 className="mb-2">{pageData.heading}</h1>
        <p className="text-lg">{pageData.subheading}</p>
      </PageHeader>

      <ProjectList 
        items={projects} 
        limit={1000}
      />

    </Layout>
  )
}

export async function getStaticProps({ locale }){
  const allProjects = await getAllFilesData("projects", locale);
  const pageData = await getFile("pages", "projects", locale);
  return {
    props: {
      projects: allProjects,
      pageData
    }
  }
}