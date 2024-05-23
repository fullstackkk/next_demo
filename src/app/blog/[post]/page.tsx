async function getPost(id:string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}

export async function generateMetadata({ params }: { params: { post: string } }) {
    return {
      title: `Post: ${params.post}`,
    }
  }
export default async function Post({ params }: { params: { post: string } }) {
  const post = await getPost(params.post)

    return (
      <main >
        <h2> {post.title}</h2>
        <p>{post.body}</p>
      </main>
    );
  }
  