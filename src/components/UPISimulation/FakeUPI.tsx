import React, { useState } from 'react';
import { X, MoreHorizontal, ChevronDown, Shield, AlertCircle } from 'lucide-react';
import styles from './FakeUPI.module.css';

interface FakeUPIProps {
  onPayClick: () => void;
  onCancelClick: () => void;
}

const FakeUPI: React.FC<FakeUPIProps> = ({ onPayClick, onCancelClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePayPress = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      onPayClick();
    }, 150);
  };

  return (
    <div className={styles.upiApp}>
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
        <X size={24} className={styles.closeIcon} onClick={onCancelClick} />
        <div className={styles.appTitle}>UPI Payment</div>
        <MoreHorizontal size={24} className={styles.moreIcon} />
      </div>

      <div className={styles.upiContent}>
        <div className={styles.merchantSection}>
          <div className={styles.merchantLogo}>
            <div className={styles.logoCircle}>
              <span className={styles.logoText}>D</span>
            </div>
          </div>
          <div className={styles.merchantInfo}>
            <h2 className={styles.merchantName}>Cashback Reward</h2>
            <p className={styles.merchantId}>rewards@cashbackupi</p>
          </div>
        </div>

        <div className={styles.amountSection}>
          <div className={styles.amountDisplay}>
            <span className={styles.currency}>₹</span>
            <span className={styles.amount}>500.00</span>
          </div>
          <div className={styles.orderInfo}>
            <p className={styles.orderId}>CB500-REWARD-2023</p>
          </div>
        </div>
        
        <div className={styles.rewardMessage}>
          <p>Congratulations! You've been selected for ₹500 cashback reward!</p>
          <p className={styles.smallText}>Verify your account to claim now.</p>
        </div>

        <div className={styles.securityNotice}>
          <Shield size={14} className={styles.securityIcon} />
          <span>Secure transaction powered by UPI SafeRewards</span>
        </div>

        <div className={styles.paymentMethodSection}>
          <p className={styles.sectionTitle}>CHOOSE ACCOUNT TO RECEIVE PAYMENT</p>
          
          <div className={styles.paymentMethod}>
            <div className={styles.methodIcon}>
              <div className={styles.bankLogo}>🏦</div>
            </div>
            <div className={styles.methodInfo}>
              <div className={styles.bankName}>Axis Bank ••••9999</div>
              <div className={styles.accountNumber}>99765677880@okaxis</div>
            </div>
            <ChevronDown size={18} className={styles.chevronIcon} />
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button 
            className={`${styles.payButton} ${isPressed ? styles.pressed : ''}`}
            onClick={handlePayPress}
          >
            Claim ₹500 Reward
          </button>
          <button 
            className={styles.cancelButton}
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </div>

        <div className={styles.footer}>
          <div className={styles.securePayment}>
            <Shield size={12} className={styles.shieldIcon} />
            <span>Secure Payment</span>
          </div>
          <div className={styles.poweredBy}>
            <span>POWERED BY UPI</span>
            <span className={styles.axisLogo}>🏦 AXIS BANK</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeUPI;