import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.mdx`
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-sm text-gray-500 mt-2">{data.date}</p>
      <article className="prose prose-lg mt-6">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}