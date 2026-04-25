import Container from "@/components/Container";
import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  return (
    <Container>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 mt-2">{post.date}</p>

      <article className="prose prose-lg mt-6">
        <MDXRemote source={post.content} />
      </article>
    </Container>
  );
}