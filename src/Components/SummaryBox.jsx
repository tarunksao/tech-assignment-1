import React from 'react';
import styles from './Styles/SummaryBox.module.css';
import { Link } from 'react-router-dom';

const SummaryBox = () => {
  return (
    <div className={styles.summaryContainer}>
        <p>15 Jan - 14 Feb</p>
        <p className={styles.boxHeading}>Summary</p>
        <div className={styles.summaryText}>
            <p>Opening Balance</p>
            <p>₹0.00</p>
        </div>
        <div className={styles.summaryText}>
            <p>Payment</p>
            <p>₹0.00</p>
        </div>
        <div className={styles.summaryText}>
            <p>Refund/Credits</p>
            <p>₹0.00</p>
        </div>
        <div className={styles.summaryText}>
            <p>Purchase/Debits</p>
            <p>₹2830.00</p>
        </div>
        <div className={styles.summaryText}>
            <p>Cashbacks</p>
            <p>₹0.00</p>
        </div>

        <hr />
        <div>
            <p className={styles.boxHeading}>TOTAL AMOUNT DUE</p>
            <p className={styles.boxHeading}>₹2830.00</p>
        </div>
        <div>
            <p className={styles.summaryText}>MIN. AMOUNT DUE</p>
            <p className={styles.summaryText}>₹200.00</p>
        </div>

        <Link 
            to={'/transactions'} 
            style={{
                color:'navy', 
                textDecoration:'none', 
                display:'flex', 
                alignItems:'center', 
                justifyContent:'flex-start', 
                gap:'10px',
                fontWeight:'500'
            }}>
                View Statement Transactions 
                <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
    </div>
  )
}

export default SummaryBox