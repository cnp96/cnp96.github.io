const experiences = [
  {
    company: "Growfit",
    role: "Co-Founder and Full-Stack Engineer",
    period: "June 2024 – Present",
    sectors: ["HealthTech", "FoodTech", "AI"],
    points: [
      "Built and scaled a multi-brand food subscription and delivery platform serving B2C and B2B customers.",
      "Sole engineer owning the entire system end to end including product architecture, frontend, backend, mobile apps, infrastructure, and automation.",
      "Developed customer-facing mobile app for subscriptions, meal tracking, menu customization, and ad-hoc orders.",
      "Built internal dashboards for meal planning, delivery routing, inventory tracking, and operational control.",
      "Implemented AI-powered menu planning with allergen and preference based personalization.",
      "Created workflow automations for daily, weekly, and monthly inventory usage reporting to improve unit economics and reduce waste.",
      "Bootstrapped the platform from $0 to $390k+ ARR. Achieved 82% customer retention with superior unit economics, customer experience and support."
    ],
    technologies: "Node.js, TypeScript, React, React Native, PostgreSQL, Redis, AWS, Docker, BullMQ, n8n, LLM APIs",
    links: [
      { label: "growfit.pro", url: "https://growfit.pro?utm_source=portfolio" },
      { label: "dailytiffin.co", url: "https://dailytiffin.co?utm_source=portfolio" },
      { label: "houseoffresh.in", url: "https://houseoffresh.in?utm_source=portfolio" }
    ]
  },
  {
    company: "Upraised (acquired by Kello)",
    role: "Senior Software Engineer",
    period: "March 2021 – May 2024",
    sectors: ["EdTech", "AI"],
    points: [
      "Built multiple products from scratch as part of the founding engineering team.",
      "Interview Prep: Developed an interview preparation platform with scheduling workflows, video conferencing, and interview recordings.",
      "Virtual Interview: Built an AI powered evaluation engine to conduct virtual interviews at scale, categorize candidates, and provide insights.",
      "Online Testing: Built a secure online testing platform with system checks, fraud detection, and proctoring logic. Optimized for very poor network conditions.",
      "Learner Dashboards: Created learner dashboards for coaching sessions, mentoring, content access, and payments.",
      "Recruitment CRM: Designed and built a recruitment CRM to manage placement lifecycles, job pipelines, and automated updates.",
      "Worked closely with product and design teams to translate early stage ideas into production systems used by thousands of learners.",
      "Improved system scalability, reliability, and delivery velocity across multiple product lines."
    ],
    technologies: "Python Django + Celery, Golang, React + Redux + Queries, NextJS, LLM Agents(Guidance + OpenAI/Azure Speech), PostgreSQL, Redis, AWS, WebRTC, K8s, New Relic",
    links: [
      { label: "kello.ai", url: "https://kello.ai/" },
      { label: "upraised.co", url: "https://www.linkedin.com/school/upraised/" }
    ]
  },
  {
    company: "LoginRadius",
    role: "Software Engineer",
    period: "September 2018 – February 2021",
    sectors: ["CIAM", "SaaS"],
    points: [
      "Rebuilt the admin console from Angular to React, resulting in a 300% performance improvement and better user experience.",
      "Migrated legacy monolithic services to a microservices architecture to improve maintainability and release speed.",
      "Built an AWS based notification system using Lambda and SQS for high volume event processing.",
      "Optimized Node.js services processing millions of data export records, improving throughput and stability.",
      "Built analytics dashboards and engagement tools used by thousands of customer applications."
    ],
    technologies: "Node.js, Golang, React, MongoDB, Redis, AWS S3/Lambda/SQS/SES/EC2, Kafka, Datadog, Microservices, K8s, Docker",
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
