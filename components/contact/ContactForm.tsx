"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // NOTE: This is a front-end-only placeholder submit handler. Before going live,
  // wire this up to a real endpoint — e.g. an API route using Resend/SendGrid,
  // or a form backend like Formspree — and replace the setTimeout below.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-royal-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-royal-600" />
        <h3 className="mt-4 font-display text-lg font-semibold text-royal-950">Message sent</h3>
        <p className="mt-2 text-sm text-slate">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-royal-950">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-mid-gray px-4 py-2.5 text-sm outline-none focus:border-royal-400"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-royal-950">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-mid-gray px-4 py-2.5 text-sm outline-none focus:border-royal-400"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-royal-950">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-mid-gray px-4 py-2.5 text-sm outline-none focus:border-royal-400"
        />
      </div>
      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-royal-950">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full rounded-lg border border-mid-gray px-4 py-2.5 text-sm outline-none focus:border-royal-400"
        >
          <option>Cisco CCNA</option>
          <option>Cisco CCNP</option>
          <option>Cisco CCIE</option>
          <option>CompTIA A+</option>
          <option>CompTIA Network+</option>
          <option>IT Services</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-royal-950">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-mid-gray px-4 py-2.5 text-sm outline-none focus:border-royal-400"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-royal-600 to-royal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-royal-900/20 transition-all hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
