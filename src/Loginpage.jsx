import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState('freelancer');

  const handleMockSubmit = (e) => {
    e.preventDefault();
    alert(`Success! Logged in as ${isSignUp ? 'New ' + role : 'User'}`);
    onLoginSuccess();
  };

  return (
    <div className="login-wrapper">
      {/* Background glowing blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="glass-panel">
        {/* Left Side: Branding */}
        <div className="glass-left">
          <div className="brand-showcase">
            <h1>Campus<span className="text-highlight">Lancer</span> 🎓</h1>
            <p>Fueling Campus Innovation.</p>
            <div className="feature-list">
              <span> Hyper-Local Network</span>
              <span> Verified Student Peers</span>
              <span> Zero Platform Fees</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass-right">
          <h2 className="auth-title">{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
          <p className="auth-subtitle">
            {isSignUp ? 'Join the top student freelance network.' : 'Log in to your dashboard.'}
          </p>

          <form onSubmit={handleMockSubmit} className="auth-form">
            {isSignUp && (
              <div className="role-toggle-container">
                <div 
                  className={`role-tab ${role === 'freelancer' ? 'active' : ''}`}
                  onClick={() => setRole('freelancer')}
                >
                  Freelancer
                </div>
                <div 
                  className={`role-tab ${role === 'client' ? 'active' : ''}`}
                  onClick={() => setRole('client')}
                >
                  Hire Talent
                </div>
              </div>
            )}

            <div className="input-group">
              <input type="email" placeholder="University Email (.edu)" required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" required />
            </div>

            <button type="submit" className="glow-btn">
              {isSignUp ? 'Sign Up Now' : 'Access Dashboard'}
            </button>
          </form>

          <p className="auth-switch">
            {isSignUp ? 'Already a member? ' : "New here? "}
            <span onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Log In' : 'Create an Account'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;