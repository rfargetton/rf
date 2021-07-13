import Layout from "../../components/layout";
import { getAllTagsId } from "../../lib/tags";
import { getAllPostsByTag } from "../../lib/folder";
import PostList from "../../components/post-list";
import PageHeader from "../../components/page-header";
import {useRouter} from "next/router";

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

export async function getStaticPaths({ locales }){
  const allTags = await getAllTagsId();
  const paths = allTags.map((tag) => locales.map((locale) => ({params: {id: tag}, locale: locale}))).flat();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params, locale }){
  const posts = await getAllPostsByTag(params.id, locale);

  return {
    props: {
      tag: params.id.replace(/^\w/, (c) => c.toUpperCase()),
      posts
    }
  }
}