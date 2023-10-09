//sanity.js
//Next.js app router
import {sanityClient} from '@sanity/client';
//***import {createClient} from '@sanity/client';
//const {create Client} = require('@sanity/client')

const client = sanityClient({
//export const client = createClient({
//***const client = createClient({
  projectId: 'x8mqp2yq',
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: true, //This enables CDN caching
});

export default client;
/*export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}
export async function createPost(post: Post) {
  const result = client.create(post)
  return result
}
export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({title})
  return result
}*/
//OR
/*client
  .fetch(`count(*)`)
  .then((data) => console.log(`Number of documents: @{data}`))
  .catch(console.error) */
  //OR next.js
  /*export default async function ReactServerComponent() {
  const data = await client.fetch<number>(
    `count(*[_type == "page"])`,
    {},
    {
      // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
      cache: 'force-cache',
      next: {tags: ['pages']},
    },
  )

  return <h1>Number of pages: {data}</h1>
}*/