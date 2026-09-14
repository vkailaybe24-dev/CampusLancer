import React from 'react';

const About = () => {
  return (
    <section className="gigs-section" style={{ minHeight: '80vh', paddingTop: '40px' }}>
      <h2 className="section-title">About Campus Lancer</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto', color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'center', padding: '0 20px' }}>
        <p style={{ marginBottom: '20px' }}>
          Campus Lancer was built with a simple mission: to empower students to turn their technical and creative skills into real-world experience and income, right here on campus.
        </p>
        <p style={{ marginBottom: '20px' }}>
          We believe that the best talent is often sitting right next to you in the lecture hall. Whether you are a student looking for freelance work, or a campus society needing a project completed, we provide a secure, hyper-local platform to connect and collaborate.
        </p>
        <p>
          Built by students, for students. No global corporations, no hidden fees, just pure peer-to-peer innovation.
        </p>
      </div>
    </section>
  );
};

export default About;