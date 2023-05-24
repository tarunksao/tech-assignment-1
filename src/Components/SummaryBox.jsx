import React, { useEffect, useState } from 'react';
import styles from './Styles/SummaryBox.module.css';
import { Link } from 'react-router-dom';
import { expenses } from '../Data/db';

const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthDaysArr = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const leapYear = (year) => {
    if (year%4 !==0) return false;

    if (year%100 === 0 && year%400 !== 0) return false;

    return true;
}

const SummaryBox = ({state}) => {
    const [maxDays, setMaxDays] = useState(monthDaysArr[state.month-1]);
    const [expense, setExpense] = useState({});
    // const [debits, setDebits] = useState(0);

    useEffect(() => {
        setExpense(expenses.filter((el) => {
            let startDate = new Date(el.startDate);
            if (state.month-1 === startDate.getMonth() && state.year == startDate.getFullYear()){
                return el;
            } else {
                return null;
            }
        }))
        if (leapYear(state.year) && state.month==='2'){
            setMaxDays(29);
        } else {
            setMaxDays(monthDaysArr[state.month-1]);
        }
    },[state])

    const getDebitAmount = () => {
        let sum = 0;
        expense[0]?.transactions.forEach((el) => {
            sum+=el.amountPaid;
        });
        return sum.toFixed(2) || '0.00';
    }

    const getCashbackAmount = () => {
        let sum = 0;
        expense[0]?.transactions.forEach((el) => {
            sum+=el.cashback;
        });
        return sum.toFixed(2) || '0.00';
    }

  return (
    <div className={styles.summaryContainer}>
        <p>01 {monthArr[state.month-1]} - {maxDays} {monthArr[state.month-1]}</p>
        <p className={styles.boxHeading}>Summary</p>
        <div className={styles.summaryText}>
            <p>Opening Balance</p>
            <p>₹{expense[0]?.openingBal || '0.00'}</p>
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
            <p>₹{getDebitAmount()}</p>
        </div>
        <div className={styles.summaryText}>
            <p>Cashbacks</p>
            <p>₹{getCashbackAmount()}</p>
        </div>

        <hr />
        <div className={styles.dueAmounts}>
            <p className={styles.boxHeading}>TOTAL AMOUNT DUE</p>
            <p className={styles.boxHeading}>₹{getDebitAmount()}</p>
        </div>
        <div className={styles.dueAmounts}>
            <p className={styles.summaryText}>MIN. AMOUNT DUE</p>
            <p className={styles.summaryText}>₹200.00</p>
        </div>

        <Link 
            to={`/transactions/${monthArr[state.month-1]}-${state.year}`} 
            style={{
                color:'navy', 
                textDecoration:'none', 
                display:'flex', 
                alignItems:'center', 
                justifyContent:'flex-start', 
                gap:'10px',
                fontWeight:'500',
                marginTop:'15px'
            }}>
                View Statement Transactions 
                <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
    </div>
  )
}

export default SummaryBox