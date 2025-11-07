import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
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

    // Simulate successful login
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard"); // redirect
    }, 800);
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/bsulogo.png" alt="Ball State logo" />
        <h1>Sign in</h1>

        {err && <div className="alert">{err}</div>}

        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email / Username</label>
          <input
            id="email"
            type="email"
            placeholder="username@bsu.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <div className="pw-wrap">
            <input
              id="password"
              type={showPw ? "text" : "password"}
              placeholder="Password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="pw-toggle"
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
            <a href="#forgot" className="link">Forgot password?</a>
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