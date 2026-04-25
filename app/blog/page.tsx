import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Blog</h1>

      <ul className="mt-6 space-y-4">
        {posts.map((post) => (
          console.log("Post:", post),
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-lg font-medium">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}