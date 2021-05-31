import { getAllFilesData } from "./folder";

export async function getAllTagsId(){
  const posts = await getAllFilesData("posts");
  const allTags = posts.map((post) => post.tags).flat();
  
  const uniqTags = allTags.filter(function(item, index){
    return allTags.indexOf(item) == index;
  })

  return uniqTags.map(function(tag){
    return {
      params: {
        id: tag
      }
    }
  });
}