import React from 'react';
import { CheckCircle, RotateCcw, ArrowLeft } from 'lucide-react';
import styles from './SuccessScreen.module.css';

interface SuccessScreenProps {
  onRestart: () => void;
  onBackToMenu: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onRestart, onBackToMenu }) => {
  return (
    <div className={styles.successScreen}>
      <div className={styles.successContent}>
        <div className={styles.successIcon}>
          <CheckCircle size={60} className={styles.checkIcon} />
        </div>
        
        <h2 className={styles.successTitle}>Simulation Complete!</h2>
        <p className={styles.successMessage}>
          You've successfully completed the UPI safety simulation. 
          Remember these key points for real-world safety.
        </p>

        <div className={styles.keyPoints}>
          <div className={styles.point}>
            <div className={styles.pointIcon}>✓</div>
            <div className={styles.pointContent}>
              <span>Always verify payment direction (Pay vs Receive)</span>
              <div className={styles.hindiPoint}>हमेशा भुगतान की दिशा सत्यापित करें (भुगतान बनाम प्राप्ति)</div>
            </div>
          </div>
          <div className={styles.point}>
            <div className={styles.pointIcon}>✓</div>
            <div className={styles.pointContent}>
              <span>Be suspicious of unexpected cashback messages</span>
              <div className={styles.hindiPoint}>अप्रत्याशित कैशबैक संदेशों पर संदेह करें</div>
            </div>
          </div>
          <div className={styles.point}>
            <div className={styles.pointIcon}>✓</div>
            <div className={styles.pointContent}>
              <span>Never click unknown payment links</span>
              <div className={styles.hindiPoint}>अज्ञात भुगतान लिंक पर कभी क्लिक न करें</div>
            </div>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.restartButton} onClick={onRestart}>
            <RotateCcw size={18} />
            Practice Again
          </button>
          <button className={styles.menuButton} onClick={onBackToMenu}>
            <ArrowLeft size={18} />
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;