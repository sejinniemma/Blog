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
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));

  if (!metadata) {
    throw new Error(`${fileName} can not be found`);
  }

  const content = await readFile(filePath, 'utf-8');
  return { ...metadata, content };
}
