import React, { useState } from 'react';
import './LandingPage.css';
import Gigs from './Gigs';
import Talents from './Talents';
import Societies from './Societies';
import About from './About';
import PostGig from './PostGig';

const LandingPage = ({ onLogout }) => {
  const [activeView, setActiveView] = useState('home');

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      onLogout();
    }
  };

  const handleNavClick = (e, view) => {
    e.preventDefault();
    setActiveView(view);
  };
  
  return (
    <div className="app-container">
      {/* --- NAVIGATION BAR --- */}
      <nav className="navbar">
        <div className="logo" onClick={() => setActiveView('home')} style={{ cursor: 'pointer' }}>
          Campus<span>Lancer</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, 'gigs')} className={activeView === 'gigs' ? 'active-link' : ''}>
              Explore Gigs
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, 'talent')} className={activeView === 'talent' ? 'active-link' : ''}>
              Find Talent
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, 'societies')} className={activeView === 'societies' ? 'active-link' : ''}>
              Societies
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, 'post-gig')} className={activeView === 'post-gig' ? 'active-link' : ''}>
              Post a Gig
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, 'about')} className={activeView === 'about' ? 'active-link' : ''}>
              About Us
            </a>
          </li>
        </ul>
        
        <div className="nav-actions">
          <button className="btn-outline" onClick={handleLogout}>Log Out</button>
        </div>
      </nav>

      {/* --- CONDITIONAL RENDERING --- */}
      
      {activeView === 'home' && (
        <>
          <header className="hero-section">
            <div className="hero-content">
              <div className="badge">The #1 Peer-to-Peer Student Marketplace</div>
              <h1 className="hero-title">
                Fueling Campus <span className="text-gradient">Innovation.</span>
              </h1>
              <p className="hero-subtitle">
                Turn your coding, design, and technical skills into real income. Hire verified students from your campus for your next big project or society fest.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary btn-large" onClick={(e) => handleNavClick(e, 'gigs')}>Find a Gig</button>
                {/* Wired up this button to go to the new form */}
                <button className="btn-outline btn-large" onClick={(e) => handleNavClick(e, 'post-gig')}>Post a Project</button>
              </div>
              <div className="hero-stats">
                <span><strong>12+</strong> Partner Campuses</span>
                <span className="dot">•</span>
                <span><strong>5,000+</strong> Verified Students</span>
                <span className="dot">•</span>
                <span><strong>₹10L+</strong> Earned by Lancers</span>
              </div>
            </div>
          </header>

          <section className="features-section">
            <h2 className="section-title">Built for Students. <br/>Not Global Corporations.</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Hyper-Local</h3>
                <p>Work directly with students in your department. Meet in the library or cafeteria to discuss briefs in person.</p>
              </div>
              <div className="feature-card">
                <h3>Campus Verified</h3>
                <p>No fake profiles. Every user is verified using their official university .edu email address.</p>
              </div>
              <div className="feature-card">
                <h3>Zero Gatekeeping</h3>
                <p>No paying for "connects" to apply. Showcase your lab assignments or GitHub and start earning.</p>
              </div>
            </div>
          </section>
        </>
      )}

      {activeView === 'gigs' && <Gigs />}
      {activeView === 'talent' && <Talents />}
      {activeView === 'societies' && <Societies />}
      {activeView === 'post-gig' && <PostGig />}
      {activeView === 'about' && <About />}

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="logo">Campus<span>Lancer</span></div>
          <p>© 2026 Campus Lancer. Made by students, for students.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;