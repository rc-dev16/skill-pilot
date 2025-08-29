import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import MainMenu from './components/MainMenu';
import UPISimulation from './components/UPISimulation';
import './App.css';

export type AppState = 'landing' | 'menu' | 'upi-simulation';

function App() {
  const [currentView, setCurrentView] = useState<AppState>('landing');
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (view: AppState) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      setIsLoading(false);
    }, 300);
  };

  const handleStartLearning = () => {
    handleNavigation('menu');
  };

  const handleStartUPI = () => {
    handleNavigation('upi-simulation');
  };

  const handleBackToMenu = () => {
    handleNavigation('menu');
  };

  const handleBackToLanding = () => {
    handleNavigation('landing');
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="App">
      {currentView === 'landing' && (
        <LandingPage onStartLearning={handleStartLearning} />
      )}
      {currentView === 'menu' && (
        <MainMenu 
          onStartUPI={handleStartUPI}
          onBackToLanding={handleBackToLanding}
        />
      )}
      {currentView === 'upi-simulation' && (
        <UPISimulation onBackToMenu={handleBackToMenu} />
      )}
    </div>
  );
}

export default App;