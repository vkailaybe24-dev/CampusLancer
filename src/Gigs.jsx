import React, { useState } from 'react';

const Gigs = () => {
  const [gigs] = useState([
    { id: 1, title: 'Inventory Management UI', budget: '₹1,500', location: 'COE Department', skills: ['React', 'Tailwind'] },
    { id: 2, title: 'Video Editing for Tech Fest', budget: '₹2,000', location: 'Main Campus', skills: ['Premiere', 'After Effects'] },
    { id: 3, title: 'Help with Database SQL', budget: 'Trade', location: 'Hostel 4', skills: ['SQL', 'Node.js'] }
  ]);

  return (
    <section className="gigs-section" style={{ minHeight: '80vh', paddingTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '0 20px' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Trending Campus Gigs</h2>
        
        {/* Visual Filter Dropdown */}
        <select style={{ padding: '10px 15px', borderRadius: '8px', backgroundColor: 'rgba(0, 0, 0, 0.4)', color: '#e4e4e7', border: '1px solid rgba(255, 255, 255, 0.1)', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
          <option value="all">Filter by: All Gigs</option>
          <option value="tech">Tech & Coding</option>
          <option value="design">Design & Media</option>
          <option value="budget">Highest Budget</option>
        </select>
      </div>

      <div className="gigs-grid">
        {gigs.map((gig) => (
          <div className="gig-card" key={gig.id}>
            <div className="gig-header">
              <span className="gig-tag tag-urgent">Active Gig</span>
              <span className="gig-price">{gig.budget}</span>
            </div>
            <h3>{gig.title}</h3>
            <p className="gig-location">Location: {gig.location}</p>
            <div className="gig-skills">
              <span>{gig.skills[0]}</span>
              <span>{gig.skills[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gigs;