import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-black to-black -z-10" />

      <div className="container px-4 text-center md:px-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">future</span>, <br className="hidden md:inline" />
            one line at a time.
          </h1>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I am a full-stack engineer with 7+ years of experience building scalable products, automation systems, and AI-powered features.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
          >
            View Work
          </a>
          <a
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-800 bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50"
          >
            Contact Me
          </a>
        </div>
      </div>

      <Experience />

      {/* Featured Projects Section Placeholder */}
      <section className="container mt-24 px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white">Featured Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-6 transition-all hover:border-white/20">
              <div className="mb-4 aspect-video w-full rounded-lg bg-zinc-800/50" />
              <h3 className="mb-2 text-xl font-bold text-white">Project {i}</h3>
              <p className="text-zinc-400">A brief description of this amazing project and the technologies used to build it.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
