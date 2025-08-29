import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import ScamMessage from './ScamMessage';
import FakeUPI from './FakeUPI';
import FeedbackModal from './FeedbackModal';
import SuccessScreen from './SuccessScreen';
import { generateScamMessage, generateFeedback } from '../../services/geminiService';
import { speakText, stopSpeech } from '../../services/speechService';
import styles from './UPISimulation.module.css';

interface UPISimulationProps {
  onBackToMenu: () => void;
}

type SimulationState = 'loading' | 'message' | 'upi-screen' | 'intervention' | 'success';

const UPISimulation: React.FC<UPISimulationProps> = ({ onBackToMenu }) => {
  const [currentState, setCurrentState] = useState<SimulationState>('loading');
  const [scamMessage, setScamMessage] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [isCorrectResponse, setIsCorrectResponse] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    initializeSimulation();
    return () => stopSpeech();
  }, []);

  const initializeSimulation = async () => {
    try {
      const message = await generateScamMessage();
      setScamMessage(message);
      setTimeout(() => {
        setCurrentState('message');
      }, 1500);
    } catch (error) {
      console.error('Error initializing simulation:', error);
      setScamMessage("URGENT: You have received a cashback of ₹500! To get the money in your account instantly, click here: fake-upi-link.com\n\nआपको ₹500 का कैशबैक मिला है! तुरंत पैसे पाने के लिए, यहां क्लिक करें: fake-upi-link.com");
      setTimeout(() => {
        setCurrentState('message');
      }, 1500);
    }
  };

  const handleLinkClick = () => {
    setCurrentState('upi-screen');
  };

  const handlePayClick = async () => {
    try {
      const feedback = await generateFeedback();
      setFeedbackText(feedback);
      setIsCorrectResponse(false);
      setShowModal(true);
      
      setTimeout(() => {
        speakText(feedback, 'warning');
      }, 800);
    } catch (error) {
      console.error('Error generating feedback:', error);
      const fallbackFeedback = "This seems unsafe. Never click on unknown payment links. सावधान रहें, यह स्कैम हो सकता है।\n\nThe message promised money but asked you to pay. Always verify before making payments.";
      setFeedbackText(fallbackFeedback);
      setIsCorrectResponse(false);
      setShowModal(true);
      
      setTimeout(() => {
        speakText(fallbackFeedback, 'warning');
      }, 800);
    }
  };

  const handleCancelClick = () => {
    const successFeedback = "Excellent choice! You correctly identified this as suspicious. Well done!\n\nबहुत बढ़िया! आपने सही तरीके से इसे संदिग्ध पहचाना।";
    setFeedbackText(successFeedback);
    setIsCorrectResponse(true);
    setShowModal(true);
    
    setTimeout(() => {
      speakText(successFeedback, 'success');
    }, 800);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setCurrentState('success');
    }, 300);
  };

  const handleRestart = () => {
    setCurrentState('loading');
    setShowModal(false);
    stopSpeech();
    initializeSimulation();
  };

  const handleBackToMenu = () => {
    stopSpeech();
    onBackToMenu();
  };

  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  const renderPhoneContent = () => {
    switch (currentState) {
      case 'loading':
        return (
          <div className={styles.phoneLoading}>
            <div className={styles.loadingSpinner}></div>
            <p>Loading simulation...</p>
          </div>
        );

      case 'message':
        return (
          <ScamMessage 
            message={scamMessage} 
            onLinkClick={handleLinkClick} 
          />
        );

      case 'upi-screen':
        return (
          <FakeUPI 
            onPayClick={handlePayClick}
            onCancelClick={handleCancelClick}
          />
        );

      case 'success':
        return (
          <SuccessScreen 
            onRestart={handleRestart}
            onBackToMenu={onBackToMenu}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.upiSimulation}>
      <div className={styles.topSection}>
        <div className={styles.headerRow}>
          <button className={styles.backButton} onClick={handleBackToMenu}>
            <ArrowLeft size={20} />
            Back to Menu
          </button>
          <div className={styles.headerContent}>
            <h1 className={styles.simulationTitle}>Practice Safe UPI</h1>
            <p className={styles.simulationSubtitle}>Learn to identify scams in a safe environment</p>
          </div>
        </div>
      </div>

      <div className={styles.simulationContent}>
        <div className={styles.phoneContainer}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneScreen}>
              {renderPhoneContent()}
            </div>
            <div className={styles.homeIndicator}></div>
          </div>
        </div>

        {currentState === 'message' && (
          <div className={styles.instructionPanel}>
            <h3>📱 You received a new message</h3>
            <p>Read the message carefully. Does anything seem suspicious? Click on any links you see.</p>
          </div>
        )}

        {currentState === 'upi-screen' && (
          <div className={`${styles.instructionPanel} ${styles.warning}`}>
            <h3>⚠️ Think carefully!</h3>
            <p>You're about to make a payment. Does this match what the message promised? Look at the button text carefully.</p>
            <p className={styles.hindiInstruction}>⚠️ सावधान रहें! आप भुगतान करने वाले हैं। क्या यह संदेश में वादा किए गए से मेल खाता है? बटन के टेक्स्ट को ध्यान से देखें।</p>
          </div>
        )}
      </div>

      <FeedbackModal
        isOpen={showModal}
        feedbackText={feedbackText}
        isCorrectResponse={isCorrectResponse}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default UPISimulation;