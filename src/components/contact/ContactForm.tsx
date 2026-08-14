'use client';

import { useState } from 'react';

/**
 * Contact form for /contact (#9).
 *
 * The point of this component is what it does NOT render: no address, anywhere.
 * If a future edit adds a `mailto:` fallback here "just in case", the page stops
 * solving the problem it was built for.
 */
export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // honeypot
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [mountedAt] = useState(() => Date.now());

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    if (form.website) {
      setStatus('success');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _t: Date.now() - mountedAt }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
        return;
      }

      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-white/10 bg-navy-800/50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-400/20">
          <svg
            className="h-7 w-7 text-primary-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-display text-xl font-semibold text-white">
          Message sent
        </h2>
        <p className="mt-2 text-gray-400">
          We&apos;ll reply to <span className="text-white">{form.email}</span>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-white/10 bg-navy-800/50 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ct-name" className="block text-sm font-medium text-gray-300">
            Name <span className="text-primary-400">*</span>
          </label>
          <input
            id="ct-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-white/10 bg-navy-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="ct-email" className="block text-sm font-medium text-gray-300">
            Email <span className="text-primary-400">*</span>
          </label>
          <input
            id="ct-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-white/10 bg-navy-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
            placeholder="you@organization.org"
          />
        </div>
      </div>

      <div>
        <label htmlFor="ct-subject" className="block text-sm font-medium text-gray-300">
          What&apos;s this about?
        </label>
        <input
          id="ct-subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-white/10 bg-navy-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
          placeholder="Beta agreement, privacy request, a question..."
        />
      </div>

      <div>
        <label htmlFor="ct-message" className="block text-sm font-medium text-gray-300">
          Message <span className="text-primary-400">*</span>
        </label>
        <textarea
          id="ct-message"
          name="message"
          rows={6}
          required
          minLength={20}
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full resize-none rounded-lg border border-white/10 bg-navy-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
          placeholder="Tell us what you need."
        />
      </div>

      {/* Honeypot — off-screen for real users, irresistible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="ct-website">Website</label>
        <input
          id="ct-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg bg-primary-400 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-300 active:bg-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>

      {/*
        Notice at the point of collection, same reasoning as the early-access
        modal: this is where personal data is handed over, so the policy has to
        be reachable here. A footer link alone isn't notice.
      */}
      <p className="text-center text-xs text-gray-500">
        We use your details only to answer you. See our{' '}
        <a
          href="/privacy"
          className="text-primary-400 underline underline-offset-2 transition-colors hover:text-primary-300"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
