"use client";
import { useState } from 'react';
import Reveal from './Reveal';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:hello@creativedisplayname.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-16 scroll-mt-28">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-400 mb-8">
          Ready to take the next step? Fill out the form below and we'll be in touch.
        </p>
      </Reveal>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-brandCyan focus:ring-brandCyan"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-brandCyan focus:ring-brandCyan"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-brandCyan focus:ring-brandCyan"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all shadow-glow"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
