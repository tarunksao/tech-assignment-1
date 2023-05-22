import React from 'react'
import styles from './Styles/ExpensesCard.module.css';

const ExpensesCard = () => {
  return (
    <div className={styles.container}>
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="" />
            </div>
            <div>
                <p className={styles.heading}>Swiggy</p>
                <p className={styles.body}>29 Jul 2022</p>
            </div>
        </div>
        <p>-₹501.00</p>
    </div>
  )
}

export default ExpensesCard