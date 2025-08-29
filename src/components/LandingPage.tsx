import React, { useEffect, useRef } from 'react';
import { ChevronDown, Shield, Users, Zap, ArrowRight } from 'lucide-react';
import './LandingPage.css';

interface LandingPageProps {
  onStartLearning: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartLearning }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const sections = [problemRef, solutionRef, ctaRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    if (problemRef.current) {
      problemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <section ref={heroRef} className="hero-section">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Confidence is the key to the
              <span className="hero-highlight"> digital world</span>
            </h1>
            <p className="hero-subtitle">
              SKILL PILOT is a safe place to practice, make mistakes, and build the courage to connect
            </p>
            <button 
              className="hero-button btn-hover"
              onClick={onStartLearning}
            >
              Start Learning
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <button className="scroll-indicator" onClick={scrollToNext}>
          <ChevronDown size={24} />
        </button>
      </section>

      <section ref={problemRef} className="problem-section scroll-reveal">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">The Digital Divide</h2>
            <p className="section-subtitle">
              Millions avoid digital services due to fear and lack of practice
            </p>
          </div>
          <div className="problem-grid">
            <div className="problem-card slide-in-left">
              <div className="problem-icon">
                <Shield size={32} />
              </div>
              <h3>Fear of Scams</h3>
              <p>Users avoid online transactions due to security concerns</p>
            </div>
            <div className="problem-card slide-in-left">
              <div className="problem-icon">
                <Users size={32} />
              </div>
              <h3>Lack of Practice</h3>
              <p>No safe environment to learn digital skills without risk</p>
            </div>
            <div className="problem-card slide-in-left">
              <div className="problem-icon">
                <Zap size={32} />
              </div>
              <h3>Technology Anxiety</h3>
              <p>Fear of making mistakes or breaking something</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={solutionRef} className="solution-section scroll-reveal">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">The Solution</h2>
            <p className="section-subtitle">
              A safe environment to practice and build confidence
            </p>
          </div>
          <div className="solution-grid">
            <div className="solution-card slide-in-right">
              <div className="solution-icon">
                <Shield size={32} />
              </div>
              <h3>Safe Practice</h3>
              <p>Learn digital skills without real-world consequences</p>
            </div>
            <div className="solution-card slide-in-right">
              <div className="solution-icon">
                <Users size={32} />
              </div>
              <h3>Real Scenarios</h3>
              <p>Practice with realistic simulations and challenges</p>
            </div>
            <div className="solution-card slide-in-right">
              <div className="solution-icon">
                <Zap size={32} />
              </div>
              <h3>Build Confidence</h3>
              <p>Gain the courage to use digital services safely</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="cta-section scroll-reveal">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build Your Digital Confidence?</h2>
            <p className="cta-subtitle">
              Join thousands of users who have already mastered digital safety
            </p>
            <button 
              className="cta-button btn-hover"
              onClick={onStartLearning}
            >
              Start Your Journey
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;