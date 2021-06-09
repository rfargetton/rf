import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import PostList from "../components/post-list";

import {getFile} from "../lib/file";
import {getAllFilesData} from "../lib/folder";
import settings from "../config.json";

export default function Blog({posts, pageData}){
  return (
    <Layout 
      url="/blog" 
      title={`${pageData.title} | ${settings.site_name}`}
    >
      <PageHeader>
        <h1>{pageData.heading}</h1>
        <p>{pageData.subheading}</p>
      </PageHeader>

      <PostList 
        items={posts} 
        limit={1000}
      />
    </Layout>
  )
}

export async function getStaticProps({ locale }){
  const pageData = await getFile("pages", "blog", locale)
  const posts = await getAllFilesData("posts", locale);

  return {
    props: {
      posts,
      pageData
    }
  }
}