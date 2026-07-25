'use client';

import { Fragment, useState } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { X } from 'lucide-react';

interface EarlyAccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function EarlyAccessModal({ open, onClose }: EarlyAccessModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
    website: '', // honeypot
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [openedAt] = useState(() => Date.now());

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    // Honeypot check (client-side)
    if (form.website) {
      setStatus('success');
      return;
    }

    // Timing check — form filled in under 3 seconds is suspicious
    const elapsed = Date.now() - openedAt;

    try {
      const res = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _t: elapsed }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
        return;
      }

      // Track conversion funnel step 2: form submitted
      if (typeof window !== 'undefined' && (window as any).usermaven) {
        (window as any).usermaven('track', 'early_access_submitted', {
          organization: form.organization,
          role: form.role || 'not provided',
        });
      }

      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  function handleClose() {
    onClose();
    // Reset after animation completes
    setTimeout(() => {
      setStatus('idle');
      setErrorMsg('');
      setForm({ name: '', email: '', organization: '', role: '', message: '', website: '' });
    }, 300);
  }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={handleClose} className="relative z-50">
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-navy-900 p-8 shadow-2xl">
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 text-gray-500 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {status === 'success' ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-400/20">
                    <svg className="h-7 w-7 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Request received!</h3>
                  <p className="mt-2 text-gray-400">
                    We&apos;ll follow up at <span className="text-white">{form.email}</span> to
                    schedule a conversation.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 rounded-lg bg-primary-400 px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-300 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-white">Get Early Access</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Tell us about your organization and we&apos;ll set up a conversation.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="ea-name" className="block text-sm font-medium text-gray-300">
                          Name <span className="text-primary-400">*</span>
                        </label>
                        <input
                          id="ea-name"
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
                        <label htmlFor="ea-email" className="block text-sm font-medium text-gray-300">
                          Email <span className="text-primary-400">*</span>
                        </label>
                        <input
                          id="ea-email"
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

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="ea-org" className="block text-sm font-medium text-gray-300">
                          Organization <span className="text-primary-400">*</span>
                        </label>
                        <input
                          id="ea-org"
                          name="organization"
                          type="text"
                          required
                          value={form.organization}
                          onChange={handleChange}
                          className="mt-1 w-full rounded-lg border border-white/10 bg-navy-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                          placeholder="Gallery, nonprofit, publication..."
                        />
                      </div>
                      <div>
                        <label htmlFor="ea-role" className="block text-sm font-medium text-gray-300">
                          Role
                        </label>
                        <input
                          id="ea-role"
                          name="role"
                          type="text"
                          value={form.role}
                          onChange={handleChange}
                          className="mt-1 w-full rounded-lg border border-white/10 bg-navy-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                          placeholder="Marketing director, curator..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="ea-message" className="block text-sm font-medium text-gray-300">
                        What piqued your interest? <span className="text-primary-400">*</span>
                      </label>
                      <textarea
                        id="ea-message"
                        name="message"
                        rows={3}
                        required
                        minLength={40}
                        value={form.message}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg border border-white/10 bg-navy-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 resize-none"
                        placeholder="Tell us about your organization's marketing challenges, which platforms you use, and what drew you to PolyWiz."
                      />
                      <p className="mt-1 text-xs text-gray-500">At least 40 characters</p>
                    </div>

                    {/* Honeypot — hidden from real users, filled by bots */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="ea-website">Website</label>
                      <input
                        id="ea-website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.website}
                        onChange={handleChange}
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-sm text-red-400">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full rounded-lg bg-primary-400 py-2.5 text-sm font-semibold text-white hover:bg-primary-300 active:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending...' : 'Request Early Access'}
                    </button>

                    {/*
                      Notice at the point of collection. This is where personal
                      data is actually handed over, so the policy has to be
                      reachable here — a footer link alone isn't notice.
                      Deliberately NOT a consent checkbox: this form requests
                      access, it doesn't form the agreement. Acceptance is the
                      clickwrap at registration (#409).
                    */}
                    <p className="text-center text-xs text-gray-500">
                      We use your details only to review your request. See our{' '}
                      <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 underline underline-offset-2 transition-colors hover:text-primary-300"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </>
              )}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
