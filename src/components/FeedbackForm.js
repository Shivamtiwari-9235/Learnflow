"use client";

import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function FeedbackForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus({ type: "", message: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedName = form.name.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || !trimmedMessage) {
      setStatus({ type: "error", message: "Please add your name and feedback." });
      return;
    }

    if (!form.email.includes("@")) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({ type: "success", message: "Thanks! Your feedback was submitted." });
    setForm(initialForm);
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        </label>
      </div>
      <label>
        What did you think?
        <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Share one thing you learned..." />
      </label>
      {status.message && (
        <p className={`form-status ${status.type}`} role="status">{status.message}</p>
      )}
      <button className="button button-primary" type="submit">Send feedback</button>
    </form>
  );
}
