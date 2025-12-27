'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const brand = pathname === '/' ? 'Portfolio' : 'Chinmaya Pati';

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            {brand}
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/experience" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            Experience
          </Link>
          <Link href="/projects" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            Projects
          </Link>
          <Link href="/skills" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            Skills
          </Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
