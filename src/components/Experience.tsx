const experiences = [
  {
    company: "Growfit",
    role: "Tech Co-Founder",
    period: "June 2024 – Present",
    sectors: ["D2C", "FoodTech", "AI", "SaaS"],
    points: [
      "Sole engineer leading all products, services, AI systems & infrastructure.",
      "Scaled a multi-brand D2C food delivery and subscription system to $390k ARR with 82% customer retention by owning the architecture, backend, frontend, and infrastructure.",
      "Engineered the core customer app features, including subscriptions, meal tracking, food customisation, and ad-hoc ordering for a user base of 500 daily active users.",
      "Architected and implemented the delivery planner and routing engine, optimising logistics and supporting complex subscription flows (skips, pauses, recurring payments).",
      "Developed a RAG-based WhatsApp support agent (LangChain) to automate user queries, resulting in a 95% reduction in manual support load.",
      "Engineered an AI-assisted menu planner leveraging embeddings and vector search (pgvector) to handle food customisation at scale, leading to a 25% increase in meal personalisation adoption.",
      "Implemented robust background jobs and event-driven workflows using BullMQ for critical systems (order processing, inventory updates), ensuring >99.9% uptime.",
      "Automated daily, weekly, and monthly reporting pipelines for inventory and unit economics, saving operations 10+ hours per week."
    ],
    technologies: "Node.js, React, React Native, PostgreSQL, pgvector, Redis, AWS, Docker Swarm, BullMQ, LangChain, LLM APIs",
    links: [
      { label: "growfit.pro", url: "https://growfit.pro" },
      { label: "dailytiffin.co", url: "https://dailytiffin.co" }
    ]
  },
  {
    company: "Upraised (acquired by Kello)",
    role: "Senior Software Engineer",
    period: "Mar 2021 – May 2024",
    sectors: ["EdTech", "AI"],
    points: [
      "Designed and launched the core interview prep platform with scheduling flows and integrated Dyte/Zoom; incorporated AI evaluations to generate feedback on verbal and non-verbal cues.",
      "Developed a secure online testing platform, incorporating real-time system checks and fraud detection, resulting in high exam integrity across 500k concurrent users.",
      "Contributed to the full-stack development of the learners' dashboard, streamlining access to coaching, content, and payment portals, improving feature engagement by 46%.",
      "Designed a recruitment CRM that automated the placement lifecycle, portfolio creation, and opportunity pipelines, improving time-to-placement by 70%."
    ],
    technologies: "Python, Django, Celery, Golang, React, Redux, Next.js, LLM Agents, PostgreSQL, Redis, AWS, WebRTC, Kubernetes",
    links: [
      { label: "kello.ai", url: "https://kello.ai/" },
      { label: "upraised.co", url: "https://upraised.co/" }
    ]
  },
  {
    company: "LoginRadius / Social9",
    role: "Software Engineer",
    period: "Sep 2018 – Feb 2021",
    sectors: ["CIAM", "SaaS"],
    points: [
      "Engineered a multi-cloud distributed Data Service Layer (DSL) for event sourcing and access control, designed to support scaling to over a billion user identities.",
      "Migrated the legacy admin console from Angular to React, achieving a 3x performance improvement for user operations and a 2x faster Software Development Life Cycle.",
      "Decoupled large monolithic services into a microservices architecture, reducing the average deployment time by 80% and improving system maintainability.",
      "Optimised a Node.js data export service, increasing throughput to process millions of records with a 40% reduction in execution time using a cluster running architecture."
    ],
    technologies: "Node.js, Golang, React, MongoDB, Redis, AWS, Kafka, Microservices, Kubernetes, Docker",
    links: [
      { label: "loginradius.com", url: "https://loginradius.com" },
      { label: "social9.com", url: "https://social9.com" }
    ]
  },
  {
    company: "Kony, Inc. (acquired by Temenos)",
    role: "Associate Trainee",
    period: "August 2017 – August 2018",
    sectors: ["E-Commerce"],
    points: [
      "Project Tooling: Developed project tooling that streamlined the process of automatically importing dependencies and implementing essential build changes in XCode. This innovation significantly reduced build times for iOS applications, enhancing development efficiency.",
      "Designed and implemented advanced features within mobile applications like authentication, theming, in-app downloads and saved collections.Leveraging in -memory databases and seamless post- sync with device storage, these enhancements led to a remarkable 25 % boost in app performance.",
      "Championed the adoption of component development best practices, resulting in a nearly 40 % reduction in development time for future projects.This proactive approach paved the way for faster and more efficient development cycles.",
      "Led the development of a mobile app for Amway Korea, which included features such as product catalog, offline demo, shopping cart, and checkout."
    ],
    technologies: "Kony Platform(omni-platform mobile apps), Java, Swift, XCode, iOS, Android",
    links: [
      { label: "temenos.com", url: "https://www.temenos.com/" },
    ]
  }
];

export default function Experience() {
  return (
    <section className="container mt-24 px-4 md:px-6">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white">Work Experience</h2>
      <div className="mx-auto max-w-3xl space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative border-l border-zinc-800 pl-8 transition-all hover:border-blue-500/50"
          >
            <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-zinc-800 transition-colors group-hover:bg-blue-400" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <div className="hidden sm:flex items-center gap-2">
                  {exp.sectors.map((sector, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-400/10 px-2 py-0.5 text-xs font-medium text-blue-400 border border-blue-400/20"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm font-medium text-zinc-500">{exp.period}</span>
            </div>

            <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-base font-medium text-blue-400">
              <span className="text-zinc-300">{exp.company}</span>
              <div className="flex gap-3">
                {exp.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-300 relative after:content-['•'] after:absolute after:-right-2 after:text-zinc-600 last:after:content-none mr-2 last:mr-0"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile sectors view */}
            <div className="mb-3 flex flex-wrap gap-2 sm:hidden">
              {exp.sectors.map((sector, i) => (
                <span
                  key={i}
                  className="rounded-full bg-blue-400/10 px-2 py-0.5 text-xs font-medium text-blue-400 border border-blue-400/20"
                >
                  {sector}
                </span>
              ))}
            </div>

            <ul className="mb-4 list-disc space-y-2 pl-4 text-zinc-400">
              {exp.points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.split(', ').map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/50 px-2 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
