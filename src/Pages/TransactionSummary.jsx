import React from 'react';
import styles from './Styles/TransactionSummary.module.css';
import ExpensesCard from '../Components/ExpensesCard';

const TransactionSummary = () => {
  return (
    <div className={styles.transactionContainer}>
        <p>15 Jan - 14 Feb</p>
        <hr />
        <div>
            <ExpensesCard />
            <hr />
            <ExpensesCard />
            <hr />
            <ExpensesCard />
            <hr />
            <ExpensesCard />
            <hr />
            <ExpensesCard />
        </div>
    </div>
  )
}

export default TransactionSummary