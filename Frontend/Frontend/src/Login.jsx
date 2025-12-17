import React, { useState, useRef } from "react";
import "./Login.css";
import { Link, redirect } from "react-router-dom";
import { Navigate } from 'react-router-dom';
/**
 * Login component
 *
 * Props:
 * - onLogin: function({ email, token }) called on successful login
 * - submitUrl: optional URL to post login credentials to (defaults to /api/login)
 *
 * Example usage:
 * <Login onLogin={(data) => console.log("Logged in", data)} />
 */
export default function Login({ onLogin, submitUrl = "/api/login" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);

  const resetErrors = () => {
    setErrors({});
    setServerError("");
  };

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email is required.";
    else {
      // basic email regex; good enough for client-side validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) e.email = "Enter a valid email address.";
    }

    if (!password) e.password = "Password is required.";
    else if (password.length < 6)
      e.password = "Password must be at least 6 characters.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    resetErrors();
    if (!validate()) {
      // focus the first invalid field
      if (errors.email) emailRef.current?.focus();
      return;
    }

    setLoading(true);
    setServerError("");

    try {
      // Example fetch - adjust to your backend or replace with your auth logic.
      const resp = await fetch(submitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
      });

      if (!resp.ok) {
        // attempt to read json error
        let payload;
        try {
          payload = await resp.json();
        } catch {
          payload = { message: resp.statusText || "Login failed." };
        }
        throw new Error(payload.message || "Login failed.");
      }

      const data = await resp.json();

      // Example: data is expected to contain token and maybe user info
      if (onLogin) onLogin(data);

      // optionally store token if remember me
      if (remember && data.token) {
        localStorage.setItem("authToken", data.token);
      }

    } catch (err) {
      setServerError(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper" aria-live="polite">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <h1 className="login-title">Sign in</h1>

        {serverError && <div className="login-error" role="alert">{serverError}</div>}

        <label className="login-label" htmlFor="email">
          Email
          <input
            id="email"
            ref={emailRef}
            className={`login-input ${errors.email ? "invalid" : ""}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={loading}
          />
        </label>
        {errors.email && (
          <div id="email-error" className="field-error">
            {errors.email}
          </div>
        )}

        <label className="login-label" htmlFor="password">
          Password
          <div className="password-row">
            <input
              id="password"
              className={`login-input ${errors.password ? "invalid" : ""}`}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              autoComplete="current-password"
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={errors.password ? "password-error" : undefined}
              disabled={loading}
            />
            <button
              type="button"
              className="show-password-btn"
              onClick={() => setShowPassword((s) => !s)}
              aria-pressed={showPassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
              disabled={loading}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </label>
        {errors.password && (
          <div id="password-error" className="field-error">
            {errors.password}
          </div>
        )}

        <div className="login-row">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              disabled={loading}
            />
            Remember me
          </label>

          <a className="forgot-link" href="#forgot" onClick={(e) => e.preventDefault()}>
            Forgot?
          </a>
        </div>

        <button
          type="submit"
          className="login-btn"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <div className="signup-note">
          Don't have an account? <a href='/Signup' onClick={()=>{
            return <Navigate to='/Signup'/>

          }}>Sign up</a>
        </div>
      </form>
    </div>
  );
}