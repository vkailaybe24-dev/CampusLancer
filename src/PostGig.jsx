import React from 'react';

const PostGig = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful backend submission
    alert("Success! Your project has been posted to the marketplace.");
    e.target.reset(); // Clears the form after submission
  };

  // Reusable inline styles for the form to match the light theme
  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    color: '#1f2937',
    boxSizing: 'border-box',
    marginBottom: '15px',
    backgroundColor: '#ffffff'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '600',
    color: '#4b5563',
    fontSize: '0.95rem'
  };

  return (
    <section className="gigs-section" style={{ minHeight: '80vh', paddingTop: '40px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#ffffff', padding: '40px', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <h2 className="section-title" style={{ marginBottom: '10px', fontSize: '1.8rem' }}>Post a New Project</h2>
        <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '30px' }}>Fill out the details below to hire campus talent.</p>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle}>Project Title</label>
            <input type="text" placeholder="e.g., Frontend React Developer Needed" style={inputStyle} required />
          </div>

          <div>
            <label style={labelStyle}>Budget</label>
            <input type="text" placeholder="e.g., Rs. 2000 or Trade/Certificate" style={inputStyle} required />
          </div>

          <div>
            <label style={labelStyle}>Location</label>
            <input type="text" placeholder="e.g., Main Campus, Library, or Remote" style={inputStyle} required />
          </div>

          <div>
            <label style={labelStyle}>Required Skills (Comma separated)</label>
            <input type="text" placeholder="e.g., React, Node.js, Python" style={inputStyle} required />
          </div>

          <div>
            <label style={labelStyle}>Project Description</label>
            <textarea rows="4" placeholder="Describe the project requirements..." style={{...inputStyle, resize: 'vertical'}} required></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem', marginTop: '10px' }}>
            Publish Gig
          </button>
        </form>
      </div>
    </section>
  );
};

export default PostGig;