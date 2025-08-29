import React from 'react';
import { Shield, FileText, Eye, ArrowLeft, Lock } from 'lucide-react';
import './MainMenu.css';

interface MainMenuProps {
  onStartUPI: () => void;
  onBackToLanding: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onStartUPI, onBackToLanding }) => {
  return (
    <div className="main-menu">
      <div className="menu-header">
        <button className="back-button" onClick={onBackToLanding}>
          <ArrowLeft size={20} />
          Back to Home
        </button>
        <h1 className="menu-title">SKILL PILOT</h1>
        <p className="menu-subtitle">Choose your learning module</p>
      </div>

      <div className="menu-content">
        <div className="menu-section">
          <h2 className="section-header">
            <Shield size={24} />
            Threat Detection
          </h2>
          <div className="module-grid">
            <div className="module-card active" onClick={onStartUPI}>
              <div className="module-icon">
                <Shield size={32} />
              </div>
              <div className="module-info">
                <h3>Practice Safe UPI</h3>
                <p>Learn to identify and avoid UPI payment scams in a safe environment</p>
                <span className="status-badge">Ready to Start</span>
              </div>
            </div>
            
            <div className="module-card disabled">
              <div className="module-icon">
                <Eye size={32} />
              </div>
              <div className="module-info">
                <h3>Spot Fake News</h3>
                <p>Develop skills to identify misinformation and verify news sources</p>
                <span className="coming-soon">Coming Soon</span>
              </div>
              <Lock className="lock-icon" size={20} />
            </div>
          </div>
        </div>

        <div className="menu-section">
          <h2 className="section-header">
            <FileText size={24} />
            Basic Digital Tasks
          </h2>
          <div className="module-grid">
            <div className="module-card disabled">
              <div className="module-icon">
                <FileText size={32} />
              </div>
              <div className="module-info">
                <h3>Fill Aadhaar Form</h3>
                <p>Learn to complete government forms safely and accurately</p>
                <span className="coming-soon">Coming Soon</span>
              </div>
              <Lock className="lock-icon" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;