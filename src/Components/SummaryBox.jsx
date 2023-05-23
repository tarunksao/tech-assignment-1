import React, { useEffect, useState } from 'react';
import styles from './Styles/SummaryBox.module.css';
import { Link } from 'react-router-dom';

const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthDaysArr = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const leapYear = (year) => {
    if (year%4 !==0) return false;

    if (year%100 === 0 && year%400 !== 0) return false;

    return true;
}

const SummaryBox = ({state}) => {
    const [maxDays, setMaxDays] = useState(monthDaysArr[state.month-1]);

    console.log(monthArr[state.month-1], state.year)

    useEffect(() => {
        if (leapYear(state.year) && state.month==2){
            setMaxDays(29);
        } else {
            setMaxDays(monthDaysArr[state.month-1]);
        }

    },[state])

  return (
    <div className={styles.summaryContainer}>
        <p>01 {monthArr[state.month-1]} - {maxDays} {monthArr[state.month-1]}</p>
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