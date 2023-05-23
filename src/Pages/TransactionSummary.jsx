import React from 'react';
import styles from './Styles/TransactionSummary.module.css';
import ExpensesCard from '../Components/ExpensesCard';
import { expenseReport } from '../Data/db';

const TransactionSummary = () => {
  return (
    <div className={styles.transactionContainer}>
        <p>15 Jan - 14 Feb</p>
        <div>
        { expenseReport?.map((el) => ( 
          <div key={el.id}>
            <hr />
            <ExpensesCard el={el} />
          </div>
        ))}
        </div>
    </div>
  )
}

export default TransactionSummary