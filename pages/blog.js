import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import PostList from "../components/post-list";

import {getAllFilesData} from "../lib/folder";

export default function Blog({posts}){
  return (
    <Layout url="/blog" title="Blog">
      <PageHeader>
        <h1>Blog</h1>
        <p>Some articles</p>
      </PageHeader>

      <PostList 
        items={posts} 
        limit={1000}
      />
    </Layout>
  )
}

export async function getStaticProps(){
  const posts = await getAllFilesData("posts");

  return {
    props: {
      posts
    }
  }
}