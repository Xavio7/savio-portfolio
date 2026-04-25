import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-2xl mx-auto p-6 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}