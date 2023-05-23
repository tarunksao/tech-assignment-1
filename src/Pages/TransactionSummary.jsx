import React from 'react';
import styles from './Styles/TransactionSummary.module.css';
import ExpensesCard from '../Components/ExpensesCard';
import { expenseReport } from '../Data/db';

const TransactionSummary = () => {
  return (
    <div className={styles.transactionContainer}>
        <p>15 Jan - 14 Feb</p>
        <hr />
        <div>
        { expenseReport?.map((el) => ( 
          <>
            <ExpensesCard key={el.id} el={el} />
            <hr />
          </>
        ))}
        </div>
    </div>
  )
}

export default TransactionSummary