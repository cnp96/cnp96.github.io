
import React from 'react';

const skillCategories = [
  {
    title: 'Backend',
    skills: ['NodeJS', 'Python', 'Golang', 'BullMQ', 'Kafka'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Postgresql', 'Redis', 'Bigquery'],
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    title: 'Frontend',
    skills: ['React', 'Redux', 'NextJS', 'React Queries', 'React Native'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'DevOps',
    skills: ['Git', 'Github Actions', 'Docker Swarm', 'Traefik', 'AWS', 'Prometheus', 'Grafana', 'Sidecar Patterns'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'AI',
    skills: ['Langchain', 'LLM Integrations', 'Prompt Engineering'],
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'System Design',
    skills: ['HLD/LLD', 'Microservices Pattern', 'Event-Driven Architecture', 'PubSub Model'],
    gradient: 'from-yellow-500 to-amber-500',
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
            Technical Arsenal
          </h1>
          <p className="max-w-[700px] text-zinc-400 text-lg text-center font-light">
            A comprehensive overview of the technologies and methodologies I leverage to build scalable, high-performance systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:bg-zinc-900/80 hover:border-white/20"
            >
              {/* Gradient glow effect on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br ${category.gradient}`}
              />

              <div className="relative z-10">
                <h2 className="mb-4 text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {category.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300 border border-white/5 transition-colors group-hover:bg-white/10 group-hover:text-zinc-100 group-hover:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
