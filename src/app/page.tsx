export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-black to-black -z-10" />

      <div className="container px-4 text-center md:px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Chinmaya Pati</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-zinc-400 md:text-xl font-light leading-relaxed">
            Full-stack engineer with 7+ years of experience.<br />Building scalable products, automation systems, and AI-powered features.
          </p>
          {/* <p className="mx-auto max-w-[700px] text-lg text-zinc-400 md:text-xl font-light leading-relaxed">
            I enjoy taking projects end-to-end. My approach is Eliminate (unnecessary), Simplify (complexity), Automate (accelerate).
          </p> */}

          <div className="flex justify-center gap-6 pt-2">
            <a href="https://github.com/cnp96" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/chinmayapati" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/cnp96" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/experience"
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
          >
            View Work
          </a>
          <a
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-800 bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
