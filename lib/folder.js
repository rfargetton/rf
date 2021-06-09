import fs from "fs" ;
import path from "path" ;
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "/content");

export async function getAllFilesData(folderName, locale) {
  const fullDir = path.join(contentDir, folderName, locale);
  const fileNames = fs.readdirSync(fullDir);

  const folderData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");

    const filePath = path.join(fullDir, fileName);
    const frontmatter = matter.read(filePath); 

    return {
      id,
      ...frontmatter.data
    }
  })

  return folderData.sort((a, b) => {
    if(a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllPostsByTag(tag){
  const posts = await getAllFilesData("posts");

  return posts.filter((post) => post.tags.indexOf(tag) >= 0 );

}

export async function getAllFilesId(folderName){
  const fullDir = path.join(contentDir, folderName);
  const fileNames = fs.readdirSync(fullDir);

  return fileNames.map(fileName => {

    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    }
  })
}

export async function getFileData(folderName, id, locale) {
  const filePath = path.join(contentDir, folderName, locale, `${id}.md`)
  const frontmatter = matter.read(filePath);
  const processedContent = await remark()
    .use(html)
    .process(frontmatter.content)
  const htmlContent = processedContent.toString()

  return {
    id,
    ...frontmatter.data,
    htmlContent
  }
}