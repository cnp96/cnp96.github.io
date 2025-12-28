'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Sent from chinmaya.cp+bio@gmail.com
      const templateParams = {
        sender_name: 'My Portfolio',
        to_email: 'chinmaya.cp@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.whatsapp,
        message: formData.message,
      };

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration not found');
      }
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', whatsapp: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Get in Touch</h1>
          <p className="mt-4 text-zinc-400">
            Have a project in mind or just want to say hi? Send me a message!
          </p>
        </div>

        {status === 'success' ? (
          <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-8 text-center text-green-400 backdrop-blur-sm transition-all animate-in fade-in zoom-in">
            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
            <p className="text-green-400/80">
              Thanks for reaching out showing interest. I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-medium hover:text-white underline underline-offset-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="name@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-sm font-medium text-zinc-300">WhatsApp <span className="text-zinc-500 font-normal">(Optional)</span></label>
                <input
                  id="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="+1 234 567 890"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="flex min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-md bg-white px-4 py-2 text-sm font-bold text-black transition-all hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
