import React, { useState } from "react";
import "./LoginPage.css";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    if (!email || !pw) return setErr("Please enter your email and password.");
    setLoading(true);
    // TODO: call auth API here
    setTimeout(() => setLoading(false), 800); // mock
  }

  return (
    <div className="login-container">
      <div className="login-box" role="region" aria-label="Sign in">
        <div className="login-brand">
          <img src="/bsulogo.png" alt="Ball State logo" />
          <h1>Sign in</h1>
          <p className="sub">Use your BSU credentials</p>
        </div>

        {err && (
          <div className="alert" aria-live="polite">
            {err}
          </div>
        )}

        <form onSubmit={onSubmit} noValidate>
          <label htmlFor="email">Email / Username</label>
          <input
            id="email"
            type="email"
            placeholder="username@bsu.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />

          <label htmlFor="password">Password</label>
          <div className="pw-wrap">
            <input
              id="password"
              type={showPw ? "text" : "password"}
              placeholder="Password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="pw-toggle"
              onClick={() => setShowPw((s) => !s)}
              aria-label={showPw ? "Hide password" : "Show password"}
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>

          <div className="row">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>

            <a className="link" href="#forgot">Forgot password?</a>
          </div>

          <button className="primary" type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;