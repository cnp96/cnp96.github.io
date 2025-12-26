export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-zinc-500 sm:text-left">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-zinc-500 transition-colors hover:text-white">
            Twitter
          </a>
          <a href="#" className="text-zinc-500 transition-colors hover:text-white">
            GitHub
          </a>
          <a href="#" className="text-zinc-500 transition-colors hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
