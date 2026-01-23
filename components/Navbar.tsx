import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-white shadow-lg shadow-blue-200/50">
      <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">My Portfolio</div>
      <div className="flex items-center gap-6 text-zinc-700">
        <Link href="/" className="hover:text-pink-500 transition-colors font-semibold">Home</Link>
        <Link href="/about" className="hover:text-pink-500 transition-colors font-semibold">About</Link>
        <Link href="/projects" className="hover:text-pink-500 transition-colors font-semibold">Projects</Link>
        <Link href="/contact" className="hover:text-pink-500 transition-colors font-semibold">Contact</Link>
      </div>
    </nav>
  );
}
