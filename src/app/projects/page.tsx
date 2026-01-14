type Project = {
  name: string;
  period: string;
  organization: string;
  type: string;
  description: string;
  contributions: string[];
  tech: string[];
};

const projects: Project[] = [
  {
    name: "Trading Rate Server",
    period: "2022",
    organization: "Freelancing",
    type: "A custom rate-server for a stock broker",
    description: "A custom rate-server for a stock broker to fetch real-time rates from multiple providers.",
    contributions: [
      "Integrated multiple tick providers for real-time rates and high service availability with proper handling of rate caching, and scrip expiries.",
      "Processed rates via Redis pubsub and stream using websockets to connected clients.",
      "Built a lot of complex flows for dynamic margin calculations, order placement, and order management.",
    ],
    tech: ["NodeJS", "Flutter", "MongoDB", "Redis", "EC2", "API Integrations"]
  },
  {
    name: "Upraised Preppa",
    period: "2022-2023",
    organization: "Upraised (acq by kello.ai)",
    type: "Mock Interviews Platform",
    description: "A mock interview platform to connect candidates with interviewers.",
    contributions: [
      "Built the booking engine with support for custom availability across timezones and slot creation",
      "Multiple 3rd party integrations- google calender, gmail, checkout and payment gateway",
      "Created a meeting interface with multiple video service providers (100ms, Dyte, Zoom)",
      "Implemented auto-detect interview conduct and completion",
      "Download & process interview recordings for evaluation and detailed feedback"
    ],
    tech: ["React", "WebRTC", "Python Django + Celery", "PostgreSQL", "Redis", "AWS", "Razorpay"]
  },
  {
    name: "Upraised Embark",
    period: "2021-2023",
    organization: "Upraised (acq by kello.ai)",
    type: "Online Testing Web Application",
    description: "An online testing platform for Upraised.",
    contributions: [
      "An online test platform optimized for very large scale testing (500k concurrent users)",
      "Added various cheat-prrofing features e.g. screen share, webcam access (laptop and mobile), mouse movement and devtools access detection",
      "Built an AI powered evaluation engine for soft skills assessment e.g. pronunciation, intonation, and fluency",
      "Implemented a custom AJAX queue in the frontend with data persistence and retry logic to handle poor network conditions",
    ],
    tech: ["React", "WebRTC", "Python Django + Celery", "PostgreSQL", "Redis", "AWS"]
  },
  {
    name: "Upraised Web Platform",
    period: "2021-2022",
    organization: "Upraised",
    type: "EdTech Web Application",
    description: "A self-paced learning and interview preparation platform.",
    contributions: [
      "Founding engineer building the platform from scratch",
      "Built interactive onboarding to improve learner activation",
      "Developed learner dashboards for progress, coaching, and content",
      "Implemented mock interview flows with video recordings",
      "Collaborated closely with product and design teams"
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "WebRTC"]
  },
  {
    name: "Social9 Platform",
    period: "2020",
    organization: "LoginRadius",
    type: "Growth and Analytics Tools",
    description: "A suite of growth and engagement tools for social media-driven websites.",
    contributions: [
      "Implemented self-hosted MongoDB and migrated data from live clusters",
      "Built embeddable web integrations for likes, comments, and shares",
      "Developed a post scheduling system with Instagram integration",
      "Added features like best-time-to-post suggestions"
    ],
    tech: ["React", "Redux", "Golang", "MongoDB", "Redis", "AWS SQS"]
  },
  {
    name: "LoginRadius Console",
    period: "2018-2019",
    organization: "LoginRadius",
    type: "Web Platform",
    description: "The primary admin console for managing identity, authentication, and analytics for LoginRadius customers.",
    contributions: [
      "Led migration from AngularJS to React with ~3x performance improvement",
      "Built complex data-heavy interfaces for querying ElasticSearch",
      "Developed analytics dashboards for user demographics and behavior",
      "Helped build Kafka-based data pipelines and service layers",
      "Improved reliability through multi-cloud orchestration using Kubernetes and Consul"
    ],
    tech: ["Node.js", "React", "Redux", "Golang", "ElasticSearch", "MongoDB", "Redis", "PostgreSQL", "Kafka", "AWS", "Azure", "Kubernetes"]
  },
  {
    name: "Data Export Service",
    period: "2018",
    organization: "LoginRadius",
    type: "Backend Service",
    description: "A high-volume backend service for exporting user identity data enriched with analytics and insights.",
    contributions: [
      "Built a Node.js service exporting millions of user identities",
      "Integrated ElasticSearch and MongoDB for enriched data exports",
      "Optimized service to run in cluster mode for higher throughput",
      "Implemented streaming-based processing to reduce memory usage"
    ],
    tech: ["Node.js", "ElasticSearch", "MongoDB"]
  },
  {
    name: "Amway App (Korea Region)",
    period: "2017-2018",
    organization: "Kony",
    type: "Hybrid Mobile Application",
    description: "An e-commerce mobile app for Amway Business Associates to demo products, manage carts, and send payment requests during live demos.",
    contributions: [
      "Built a hybrid mobile application using the Kony platform for iOS and Android",
      "Implemented product browsing, cart management, and payment request flows",
      "Added online video playback with offline download and caching based on geo-location",
      "Applied internationalization best practices for multi-locale support",
      "Introduced component-driven architecture and tooling to speed up iOS builds"
    ],
    tech: ["JavaScript", "REST APIs", "Kony Platform"]
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
            Selected Work
          </h1>
          <p className="max-w-[700px] text-zinc-400 text-lg font-light">
            A deep dive into the systems and products I've engineered.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 md:p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-zinc-900/60"
            >
              <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-zinc-500 font-mono">
                      <span>{project.period}</span>
                      <span>•</span>
                      <span className="text-zinc-400 font-semibold">{project.organization}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
                      {project.type}
                    </p>
                  </div>

                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative border-t border-white/10 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                  <h3 className="mb-4 text-lg font-semibold text-zinc-200 flex items-center gap-2">
                    Key Contributions
                  </h3>
                  <ul className="space-y-3">
                    {project.contributions.map((contribution, i) => (
                      <li key={i} className="flex gap-3 text-zinc-400">
                        <span className="mt-2 block h-1.5 w-1.5 min-w-[6px] rounded-full bg-blue-500/50" />
                        <span className="leading-relaxed">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
