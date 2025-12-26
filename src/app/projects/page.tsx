export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured shopping experience tailored for digital products.",
      tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      id: 2,
      title: "Portfolio V1",
      description: "My first portfolio website built with vanilla HTML/CSS.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productivity tool for small teams to manage daily tasks.",
      tags: ["React", "Redux", "Firebase"],
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather data visualization using generic APIs.",
      tags: ["Vue.js", "Chart.js"],
    },
  ];

  return (
    <div className="container mx-auto min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Selected Work</h1>
        <p className="max-w-[700px] text-zinc-400">
          A collection of projects exploring different technologies and design patterns.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/50 p-6 transition-all hover:border-white/20 hover:bg-zinc-900/80"
          >
            <div>
              <div className="mb-4 aspect-video w-full rounded-lg bg-zinc-800/50" />
              <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-zinc-400">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
