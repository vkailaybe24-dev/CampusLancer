import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoginPage from './Loginpage';

const App = () => {
  // We set the initial state to show the 'login' screen first
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div>
      {/* If currentPage is 'login', show LoginPage. Otherwise, show LandingPage. */}
      {currentPage === 'login' ? (
        <LoginPage onLoginSuccess={() => setCurrentPage('landing')} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default App;