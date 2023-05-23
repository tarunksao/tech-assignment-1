import React from 'react'
import styles from './Styles/ExpensesCard.module.css';

const ExpensesCard = ({el}) => {
  return (
    <div className={styles.container}>
        <div>
            <div>
                <img src={el.logo} alt={el.name} />
            </div>
            <div>
                <p className={styles.heading}>{el.name}</p>
                <p className={styles.body}>29 Jul 2022</p>
            </div>
        </div>
        <p>-₹501.00</p>
    </div>
  )
}

export default ExpensesCard