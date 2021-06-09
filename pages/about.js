import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { getFile } from "../lib/file";
import settings from "../config.json";

export default function About({ pageData }) {
  return (
    <Layout 
      url="/about" 
      title={`${pageData.title} | ${settings.site_name}`}
    >
      <PageHeader>
        <h1 className="mb-2">{pageData.heading}</h1>
        <p className="text-lg">{pageData.subheading}</p>        
      </PageHeader>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const pageData = await getFile("pages", "about", locale);

  return {
    props: {
      pageData,
    },
  };
}
