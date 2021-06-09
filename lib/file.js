import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "/content");

export async function getFile(folderName, fileName, locale) {
  const filePath = path.join(contentDir, folderName, locale, `${fileName}.md`);
  const frontmatter = matter.read(filePath);
  const processedContent = await remark()
    .use(html)
    .process(frontmatter.content);
  const htmlContent = processedContent.toString();

  return {
    ...frontmatter.data,
    htmlContent,
  };
}
