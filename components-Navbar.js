import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-secondary text-white p-4 flex justify-between items-center">
      <Link href="/">
        <span className="text-xl font-bold cursor-pointer">ID Ledger</span>
      </Link>
      <div className="space-x-4">
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <Link href="/register" className="hover:underline">
          Register
        </Link>
      </div>
    </nav>
  );
}