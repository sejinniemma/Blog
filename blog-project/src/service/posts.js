import { readFile } from 'fs/promises';
import path from 'path';

export async function getFeaterdPosts() {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaterdPosts() {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts() {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8') // promise를 리턴
    .then(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.data ? -1 : 1)));
}

export async function getPostData(fileName) {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getAllPosts(); //
  const post = posts.find((post) => post.path === fileName);

  if (!post) {
    throw new Error(`${fileName} can not be found`);
  }

  const index = posts.indexOf(post);
  const next = index >= 0 || index < post.length - 1 ? posts[index + 1] : null;
  const prev =
    index > 0 || index === posts.length - 1 ? posts[index - 1] : null;
  const content = await readFile(filePath, 'utf-8');

  return { ...post, content, next, prev };
}
