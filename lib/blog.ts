import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const blogDir = path.join(process.cwd(), "content/blog");

// LIST ALL POSTS (for /blog page)
export function getAllPosts() {
  const files = fs.readdirSync(blogDir);

  return files
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const { data } = matter(fileContent);

      return {
        slug: file.replace(".mdx", ""),
        title: data.title,
        date: data.date,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

// GET SINGLE POST (for /blog/[slug])
export function getPostBySlug(slug: string) {
  try {
    const filePath = path.join(blogDir, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { content, data } = matter(fileContent);

    return {
      content,
      ...data,
    };
  } catch {
    notFound();
  }
}