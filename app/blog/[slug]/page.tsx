import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ unwrap params (THIS is the fix)
  const { slug } = await params;

  console.log("Slug:", slug);

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.mdx`
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>

      <article className="mt-6 whitespace-pre-wrap">
        {content}
      </article>
    </main>
  );
}