import React, { useEffect, useState } from 'react';
import styles from './Styles/TransactionSummary.module.css';
import ExpensesCard from '../Components/ExpensesCard';
import { expenses } from '../Data/db';
import { useParams } from 'react-router-dom';

const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const TransactionSummary = () => {
  const {month} = useParams();
  const [expense, setExpense] = useState({});

  useEffect(() => {
    setExpense(expenses.filter((el) => {
      let startDate = new Date(el.startDate);
      if (month === monthArr[startDate.getMonth()]){
        console.log(month, monthArr[startDate.getMonth()]);
        return el;
      } else {
        return null;
      }
    }))
  }, [month])

  console.table(expense);

  return (
    <div className={styles.transactionContainer}>
        <p>15 Jan - 14 Feb</p>
        <div>
        { expense?.transactions?.map((el) => ( 
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