import React, { useState } from 'react';

const Talents = () => {
  const [talents] = useState([
    { id: 1, name: 'Rahul Sharma', role: 'Full Stack Developer', skills: ['React', 'Node.js'], rating: '4.9/5' },
    { id: 2, name: 'Priya Patel', role: 'UI/UX Designer', skills: ['Figma', 'Illustrator'], rating: '5.0/5' },
    { id: 3, name: 'Aman Gupta', role: 'Video Editor', skills: ['Premiere Pro', 'DaVinci'], rating: '4.8/5' }
  ]);

  return (
    <section className="gigs-section" style={{ minHeight: '80vh', paddingTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '0 20px' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Top Campus Talent</h2>
        
        {/* Visual Filter Dropdown */}
        <select style={{ padding: '10px 15px', borderRadius: '8px', backgroundColor: 'rgba(0, 0, 0, 0.4)', color: '#e4e4e7', border: '1px solid rgba(255, 255, 255, 0.1)', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
          <option value="all">Filter by: All Talent</option>
          <option value="developer">Developers</option>
          <option value="designer">Designers</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <div className="gigs-grid">
        {talents.map((talent) => (
          <div className="gig-card" key={talent.id}>
            <div className="gig-header">
              <span className="gig-tag tag-design">Rating: {talent.rating}</span>
            </div>
            <h3>{talent.name}</h3>
            <p className="gig-location">Role: {talent.role}</p>
            <div className="gig-skills">
              <span>{talent.skills[0]}</span>
              <span>{talent.skills[1]}</span>
            </div>
            <button className="btn-outline" style={{ width: '100%', marginTop: '15px' }}>View Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Talents;