'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'error'; message: string };

const initialForm: FormState = { name: '', email: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((previous) => ({
        ...previous,
        [field]: event.currentTarget.value,
      }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ kind: 'sending' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? 'Unable to send message.');
      }

      setStatus({ kind: 'sent' });
      setForm(initialForm);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unable to send message.';
      setStatus({ kind: 'error', message });
    }
  };

  const isSending = status.kind === 'sending';

  return (
    <main className='min-h-screen bg-slate-50'>
      <section className='mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-20 lg:px-12'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
            Contact
          </h1>
          <p className='max-w-2xl text-lg leading-relaxed text-slate-600'>
            Send us a message and we&apos;ll get back to you at the email you
            provide. You can also reach us directly at{' '}
            <a
              href='mailto:sacpigbaitco@gmail.com'
              className='font-medium text-slate-900 underline underline-offset-4'>
              sacpigbaitco@gmail.com
            </a>
            .
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100'>
          <label htmlFor='contact-name' className='flex flex-col gap-2'>
            <span className='text-sm font-semibold uppercase tracking-wide text-slate-500'>
              Name
            </span>
            <input
              id='contact-name'
              type='text'
              required
              value={form.name}
              onChange={handleChange('name')}
              className='w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition focus-visible:border-indigo-400 focus-visible:ring focus-visible:ring-indigo-200'
            />
          </label>

          <label htmlFor='contact-email' className='flex flex-col gap-2'>
            <span className='text-sm font-semibold uppercase tracking-wide text-slate-500'>
              Email
            </span>
            <input
              id='contact-email'
              type='email'
              required
              value={form.email}
              onChange={handleChange('email')}
              className='w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition focus-visible:border-indigo-400 focus-visible:ring focus-visible:ring-indigo-200'
            />
          </label>

          <label htmlFor='contact-message' className='flex flex-col gap-2'>
            <span className='text-sm font-semibold uppercase tracking-wide text-slate-500'>
              Message
            </span>
            <textarea
              id='contact-message'
              required
              rows={6}
              value={form.message}
              onChange={handleChange('message')}
              className='w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition focus-visible:border-indigo-400 focus-visible:ring focus-visible:ring-indigo-200'
            />
          </label>

          <button
            type='submit'
            disabled={isSending}
            className='self-start rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60'>
            {isSending ? 'Sending…' : 'Send Message'}
          </button>

          {status.kind === 'sent' && (
            <p
              role='status'
              className='rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800'>
              Thanks! Your message has been sent.
            </p>
          )}
          {status.kind === 'error' && (
            <p
              role='alert'
              className='rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-800'>
              {status.message}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
