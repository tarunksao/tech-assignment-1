import React, { useEffect, useState } from 'react';
import styles from './Styles/TransactionSummary.module.css';
import ExpensesCard from '../Components/ExpensesCard';
import { expenses } from '../Data/db';
import { useParams } from 'react-router-dom';

const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthDaysArr = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const leapYear = (year) => {
    if (year%4 !==0) return false;

    if (year%100 === 0 && year%400 !== 0) return false;

    return true;
}

const TransactionSummary = () => {
  const {date} = useParams();
  const [month, year] = date.trim().split('-');
  const [expense, setExpense] = useState({});

  const index = monthArr.indexOf(month);

  const [maxDays, setMaxDays] = useState(monthDaysArr[index]);

  useEffect(() => {
    setExpense(expenses.filter((el) => {
      let startDate = new Date(el.startDate);
      if (month === monthArr[startDate.getMonth()] && year == startDate.getFullYear()){
        return el;
      } else {
        return null;
      }
    }))

    if (leapYear(Number(year)) && month ==='Feb'){
            setMaxDays(29);
        } else {
            setMaxDays(monthDaysArr[index]);
        }
  }, [month, year, index])

  // console.table(expense);

  return (
    <div className={styles.transactionContainer}>
        <p>01 {month} - {maxDays} {month}</p>
        <div>
        { expense[0]?.transactions?.map((el) => ( 
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