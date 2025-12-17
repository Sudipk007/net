import React, { useState } from "react";
import "./contact.css";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    // simple email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) return "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10)
      return "Please enter a message (at least 10 characters).";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrorMsg(err);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");
  }

  return (
    <>
      <section className="contact-shell" aria-labelledby="contact-heading">
        <div className="blobs" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>

        <div className="contact-card">
          <header className="contact-header">
            <h2 id="contact-heading">Tell us what you like</h2>
            <p className="lead">Questions, feedback, or need IT solution? Drop a note — we reply quickly.</p>
          </header>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="row">
              <label className="field">
                <span className="label-text">Your name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                  aria-required="true"
                  aria-label="Your name"
                />
              </label>

              <label className="field">
                <span className="label-text">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  aria-required="true"
                  aria-label="Email address"
                />
              </label>
            </div>

            <label className="field">
              <span className="label-text">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or question..."
                rows="6"
                required
                aria-required="true"
                aria-label="Message"
              />
            </label>

            <div className="form-actions">
              <button
                type="submit"
                className={`btn-send ${status === "sending" ? "sending" : ""} ${
                  status === "success" ? "success" : ""
                }`}
                disabled={status === "sending"}
                aria-live="polite"
              >
                <span className="btn-content">
                  {status === "sending" ? (
                    <>
                      <svg className="icon spin" viewBox="0 0 24 24" width="18" height="18">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12A9 9 0 1 1 12 3"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <svg className="icon" viewBox="0 0 24 24" width="18" height="18">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 6L9 17l-5-5"
                        />
                      </svg>
                      Sent
                    </>
                  ) : (
                    <>
                      <svg className="icon" viewBox="0 0 24 24" width="18" height="18">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M22 2L11 13"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M22 2l-7 20-4-9-9-4 20-7z"
                        />
                      </svg>
                      Send message
                    </>
                  )}
                </span>
              </button>

              <div className="meta">
                <span className={`status ${status}`}>{status === "error" ? errorMsg || "Error" : ""}</span>
                <div className="alt-contact">
                  Or email us directly: <a href="mailto:hello@example.com">netnova@gmail.com</a>
                </div>
              </div>
            </div>
          </form>

          <footer className="contact-footer" aria-hidden="true">
            <div className="socials">
              <a href="#" className="s-circle" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M22 5.92c-.66.29-1.37.49-2.11.58a3.7 3.7 0 0 0 1.62-2.04 7.42 7.42 0 0 1-2.34.9 3.69 3.69 0 0 0-6.3 3.36A10.48 10.48 0 0 1 3.16 4.6a3.69 3.69 0 0 0 1.14 4.92 3.66 3.66 0 0 1-1.67-.46v.05a3.69 3.69 0 0 0 2.96 3.62 3.73 3.73 0 0 1-1.66.06 3.7 3.7 0 0 0 3.45 2.56A7.41 7.41 0 0 1 2 19.54a10.47 10.47 0 0 0 5.66 1.66c6.8 0 10.53-5.64 10.53-10.53 0-.16-.01-.32-.02-.48A7.53 7.53 0 0 0 22 5.92z" />
                </svg>
              </a>
              <a href="#" className="s-circle" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zM9 9h3.78v1.63h.05c.53-1 1.83-2.06 3.77-2.06C20.5 8.57 21 11.3 21 14.7V21h-4v-5.7c0-1.36-.02-3.11-1.9-3.11-1.9 0-2.19 1.48-2.19 3v5.81H9z" />
                </svg>
              </a>
              <a href="#" className="s-circle" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1C6.9 21.9 6.2 20.2 6.2 20.2c-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 2 .7 2.2.4.7 1 1 1.8.8a6.5 6.5 0 0 0 2-1.3c-.4-1.1-.8-1.9-1.1-2.2-3.9-.4-8-2-8-8.9 0-2 .7-3.7 2-5-.2-.4-.9-2 .2-4 0 0 1.6-.5 5.2 2 1.6-.5 3.3-.7 5-.7s3.4.2 5 .7c3.6-2.5 5.2-2 5.2-2 1.1 2 0 3.6.2 4-1.2 1.3-2 3-2 5 0 6.9-4.1 8.5-8 8.9.5.4.9 1.1.9 2.2v3.3c0 .2.2.7.9.6A12 12 0 0 0 12 .5z" />
                </svg>
              </a>
            </div>
            <small className="copyright">© {new Date().getFullYear()} NetNova IT Solution</small>
          </footer>
        </div>
      </section>
    </>
  );
}