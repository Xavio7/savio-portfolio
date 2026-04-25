import Container from "@/components/Container";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts().slice(0, 3); // latest 3 posts

  return (
    <Container>
      <h1 className="text-3xl font-bold">Savio Bajpai</h1>

      <p className="mt-4 text-gray-600">
        Engineering | Systems | GenAI | Google Cloud
      </p>

      {/* Latest Posts */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Latest Posts</h2>

        <ul className="mt-4 space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-lg font-medium hover:underline">
                  {post.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-500">{post.date}</p>
            </li>
          ))}
        </ul>

        <Link href="/blog" className="inline-block mt-4 text-sm underline">
          View all posts →
        </Link>
      </section>
    </Container>
  );
}