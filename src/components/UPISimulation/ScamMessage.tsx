import React from 'react';
import { MessageCircle, Phone, Camera, MoreHorizontal } from 'lucide-react';
import styles from './ScamMessage.module.css';

interface ScamMessageProps {
  message: string;
  onLinkClick: () => void;
}

const ScamMessage: React.FC<ScamMessageProps> = ({ message, onLinkClick }) => {
  const renderMessageContent = () => {
    const lines = message.split('\n').filter(line => line.trim());
    
    return lines.map((line, index) => {
      if (line.includes('fake-upi-link.com') || line.includes('click here') || line.includes('यहां क्लिक करें')) {
        return (
          <div key={index} className={index === 0 ? styles.messageEnglish : styles.messageHindi}>
            {line.split(/(fake-upi-link\.com|click here|यहां क्लिक करें)/g).map((part, partIndex) => {
              if (part === 'fake-upi-link.com' || part === 'click here' || part === 'यहां क्लिक करें') {
                return (
                  <span 
                    key={partIndex}
                    className={styles.scamLink} 
                    onClick={onLinkClick}
                  >
                    {part}
                  </span>
                );
              }
              return part;
            })}
          </div>
        );
      }
      return (
        <div key={index} className={index === 0 ? styles.messageEnglish : styles.messageHindi}>
          {line}
        </div>
      );
    });
  };

  return (
    <div className={styles.messagesApp}>
      <div className={styles.statusBar}>
        <div className={styles.timeDisplay}>9:41</div>
        <div className={styles.statusIcons}>
          <div className={styles.signalBars}>
            <span></span><span></span><span></span><span></span>
          </div>
          <div className={styles.wifiIcon}>📶</div>
          <div className={styles.batteryIcon}>🔋</div>
        </div>
      </div>

      <div className={styles.appHeader}>
        <div className={styles.headerLeft}>
          <MessageCircle size={24} className={styles.headerIcon} />
          <span className={styles.appTitle}>Messages</span>
        </div>
        <div className={styles.headerRight}>
          <Camera size={20} className={styles.headerAction} />
          <MoreHorizontal size={20} className={styles.headerAction} />
        </div>
      </div>

      <div className={styles.messagesContent}>
        <div className={styles.messageThread}>
          <div className={styles.senderInfo}>
            <div className={styles.senderAvatar}>
              <span>UPI</span>
            </div>
            <div className={styles.senderDetails}>
              <div className={styles.senderName}>UPI-BANK</div>
              <div className={styles.messageTime}>Just now</div>
            </div>
            <div className={styles.messageStatus}>
              <div className={styles.unreadBadge}>1</div>
            </div>
          </div>
          
          <div className={styles.messageBubble}>
            {renderMessageContent()}
          </div>
        </div>
      </div>

      <div className={styles.inputArea}>
        <div className={styles.inputField}>
          <span className={styles.inputPlaceholder}>Type a message...</span>
        </div>
        <div className={styles.sendButton}>
          <span>→</span>
        </div>
      </div>
    </div>
  );
};

export default ScamMessage;