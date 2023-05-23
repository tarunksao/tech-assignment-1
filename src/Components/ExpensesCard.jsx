import React from 'react'
import styles from './Styles/ExpensesCard.module.css';

const ExpensesCard = ({el}) => {
  return (
    <>
        <div className={styles.container}>
            <div>
              
                <img src={el.logo} alt={el.paidTo} />
            </div> 
            <div>
                <p className={styles.heading}>{el.paidTo}</p>
                <p className={styles.body}>{el.transactionDate}</p>
            </div>
        </div>
        <p>-₹{el.amountPaid}</p>
    </>
  )
}

export default ExpensesCard