import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found" id="top">
      <div className="error-code">404 / ROUTE NOT FOUND</div>
      <h1>This node does not exist in the Omnia system.</h1>
      <p>The route may have moved, or the system you are looking for has not been released yet.</p>
      <Link className="button button-primary" href="/">Return to command center ↗</Link>
    </section>
  );
}
