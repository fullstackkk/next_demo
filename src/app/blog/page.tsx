import Link from "next/link";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function Blog() {
  const posts:IPost[] = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="h2">Blog</h2>
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`blog/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
