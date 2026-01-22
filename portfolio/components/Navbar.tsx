import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-white dark:bg-zinc-950 shadow">
      <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100">My Portfolio</div>
      <div className="flex gap-6 text-zinc-700 dark:text-zinc-200">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
        <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
        <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
}
