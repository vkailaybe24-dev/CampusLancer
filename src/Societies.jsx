import React, { useState } from 'react';

const Societies = () => {
  const [societies] = useState([
    { id: 1, name: 'IEEE Student Branch', lookingFor: 'Web Developers for Tech Fest', stipend: 'Paid Gig' },
    { id: 2, name: 'ACM Chapter', lookingFor: 'Graphic Designers for Posters', stipend: 'Certificate' },
    { id: 3, name: 'E-Cell', lookingFor: 'Content Writers for Newsletter', stipend: 'Paid Gig' }
  ]);

  return (
    <section className="gigs-section" style={{ minHeight: '80vh', paddingTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '0 20px' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Societies Hiring Now</h2>
        
        {/* Visual Filter Dropdown (Updated for Light Theme) */}
        <select style={{ padding: '10px 15px', borderRadius: '8px', backgroundColor: '#ffffff', color: '#1f2937', border: '1px solid #d1d5db', outline: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '500' }}>
          <option value="all">Filter by: All Societies</option>
          <option value="paid">Paid Opportunities</option>
          <option value="certificate">Certificate Only</option>
        </select>
      </div>

      <div className="gigs-grid">
        {societies.map((society) => (
          <div className="gig-card" key={society.id}>
            <div className="gig-header">
              <span className="gig-tag tag-urgent">Society</span>
              <span className="gig-price" style={{ fontSize: '0.9rem' }}>{society.stipend}</span>
            </div>
            <h3>{society.name}</h3>
            <p className="gig-desc" style={{ marginBottom: '15px' }}>Seeking: {society.lookingFor}</p>
            <button className="btn-primary" style={{ width: '100%' }}>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Societies;