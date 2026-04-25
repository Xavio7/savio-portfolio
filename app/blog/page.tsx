import Container from "@/components/Container";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container>
      <h1 className="text-2xl font-semibold">Blog</h1>

      <ul className="mt-6 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-lg font-medium hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
    </ul>
    </Container>
  );
}