"use client";

import { FormEvent, useEffect, useState } from "react";

type State = { type: "idle" | "loading" | "success" | "error"; message: string };

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<State>({ type: "idle", message: "" });
  const [interest, setInterest] = useState("");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("interest");
    if (requested) setInterest(requested);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ type: "loading", message: "Transmitting inquiry securely…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to send your message.");
      form.reset();
      setState({
        type: "success",
        message: result.message || "Message received. We’ll respond as soon as possible.",
      });
    } catch (error) {
      setState({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message.",
      });
    }
  }

  return (
    <form className={`contact-form ${compact ? "compact" : ""}`} onSubmit={submit}>
      <div className="honeypot" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="form-row">
        <label>
          <span>Name *</span>
          <input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" required maxLength={160} autoComplete="email" placeholder="you@company.com" />
        </label>
      </div>
      {!compact && (
        <div className="form-row">
          <label>
            <span>Company / organization</span>
            <input name="company" maxLength={120} autoComplete="organization" placeholder="Optional" />
          </label>
          <label>
            <span>Conversation type *</span>
            <select name="interest" required value={interest} onChange={(event) => setInterest(event.target.value)}>
              <option value="" disabled>Select one</option>
              <option value="GNS3 Agent early access">GNS3 Agent early access</option>
              <option value="Research collaboration">Research collaboration</option>
              <option value="Product partnership">Product partnership</option>
              <option value="Technical discussion">Technical discussion</option>
              <option value="Speaking or media">Speaking or media</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
      )}
      {compact && <input type="hidden" name="interest" value="General inquiry" />}
      <label>
        <span>Message *</span>
        <textarea name="message" required minLength={20} maxLength={4000} rows={compact ? 5 : 7} placeholder="Describe the problem, idea, or opportunity with enough context to make the first reply useful." />
      </label>
      <label className="consent-field">
        <input name="consent" type="checkbox" value="true" required />
        <span>I agree that Omnia may use these details to respond to this inquiry.</span>
      </label>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={state.type === "loading"}>
          {state.type === "loading" ? "Sending…" : "Send secure inquiry"} <span aria-hidden="true">↗</span>
        </button>
        <small>No mailing list. No inquiry database.</small>
      </div>
      <div className={`form-status ${state.type}`} role="status" aria-live="polite">
        {state.message}
      </div>
    </form>
  );
}
