import Layout from "../../components/layout";
import { getAllTagsId } from "../../lib/tags";
import { getAllPostsByTag } from "../../lib/folder";
import PostList from "../../components/post-list";
import PageHeader from "../../components/page-header";

export default function Tag({ tag, posts }){
  console.log(posts);
  return (
    <Layout>

      <PageHeader>
        <h1>{tag}</h1>
        <p>{`${posts.length} article${posts.length > 1 ? "s" : ""} trouvé${posts.length > 1 ? "s" : ""} dans cette catégorie`}</p>
      </PageHeader>

      <PostList 
        items={posts} 
        limit={1000}
      />

    </Layout>
  )
}

export async function getStaticPaths(){
  const paths = await getAllTagsId();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }){
  const posts = await getAllPostsByTag(params.id);

  return {
    props: {
      tag: params.id.replace(/^\w/, (c) => c.toUpperCase()),
      posts
    }
  }
}