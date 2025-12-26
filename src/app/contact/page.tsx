export default function ContactPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Get in Touch</h1>
          <p className="mt-4 text-zinc-400">
            Have a project in mind or just want to say hi? Send me a message!
          </p>
        </div>

        <form className="space-y-6 rounded-xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
            <input
              id="name"
              type="text"
              className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
            <input
              id="email"
              type="email"
              className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="name@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
            <textarea
              id="message"
              className="flex min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
