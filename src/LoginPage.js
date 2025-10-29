import React from 'react';
import './LoginPage.css'; // Make sure to create this CSS file too

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
