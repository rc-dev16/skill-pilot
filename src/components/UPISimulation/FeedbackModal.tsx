import React, { useEffect } from 'react';
import { AlertTriangle, CheckCircle, X } from 'lucide-react';
import styles from './FeedbackModal.module.css';

interface FeedbackModalProps {
  isOpen: boolean;
  feedbackText: string;
  isCorrectResponse: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ 
  isOpen, 
  feedbackText, 
  isCorrectResponse, 
  onClose 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const lines = feedbackText.split('\n').filter(line => line.trim());

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button>
        
        <div className={styles.modalHeader}>
          <div className={styles.iconContainer}>
            {isCorrectResponse ? (
              <CheckCircle size={48} className={styles.successIcon} />
            ) : (
              <AlertTriangle size={48} className={styles.warningIcon} />
            )}
          </div>
          <h3 className={styles.modalTitle}>
            {isCorrectResponse ? 'Well Done!' : 'Let\'s Learn Together'}
          </h3>
        </div>

        <div className={styles.modalBody}>
          {lines.map((line, index) => (
            <p key={index} className={index === 0 ? styles.feedbackEnglish : styles.feedbackHindi}>
              {line}
            </p>
          ))}
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.continueButton} onClick={onClose}>
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;