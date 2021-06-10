import settings from "../../config.json";
import Date from "../../components/date";
import Layout from "../../components/layout";
import PostHeader from "../../components/post-header";
import PostContent from "../../components/post-content";
import TagList from "../../components/tag-list";
import { getAllFilesId, getFileData } from "../../lib/folder";

export default function Post({ postData }) {
  return (
    <Layout
      url={`/posts/${postData.id}`}
      title={`${postData.title} | ${settings.site_name}`}
      image={postData.img}
      description="Some description text"
    >
      <article>
        <PostHeader
          image={postData.featured_image}
        >
          <p className="text-purple">publié le <Date dateString={postData.date} /></p>
          <h1>{postData.title}</h1>
          <TagList tags={postData.tags} />
        </PostHeader>

        <PostContent htmlContent={postData.htmlContent} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllFilesId("posts");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const postData = await getFileData("posts", params.id, locale);

  return {
    props: {
      postData,
    },
  };
}
