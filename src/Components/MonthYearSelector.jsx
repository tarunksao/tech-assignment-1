import React, { useReducer, useState } from 'react'
import styles from './Styles/MonthYearSelector.module.css';
import { dateReducer } from '../Reducer/dateReducer';
import { changeMonth, changeYear } from '../Reducer/dateActions';

let time = new Date();
const initState = {
    month:time.getMonth(),
    year:time.getFullYear(),
}

const MonthYearSelector = () => {
    const [state, dispatch] = useReducer(dateReducer, initState);

    console.log(state.month, state.year);

  return (
    <div className={styles.selectorContainer}>
        <div className={styles.selectorBox}>
            <select name="year" id="year-select" onChange={(e) => dispatch(changeYear(e.target.value))}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
            <select name="year" id="year-select" onChange={(e) => dispatch(changeMonth(e.target.value))}>
                <option value="January">Jan</option>
                <option value="February">Feb</option>
                <option value="March">Mar</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">Jun</option>
                <option value="July">Jul</option>
                <option value="August">Aug</option>
                <option value="September">Sep</option>
                <option value="October">Oct</option>
                <option value="November">Nov</option>
                <option value="December">Dec</option>
            </select>
        </div>
        <button className={styles.summaryBtn}>View Statement Summary</button>
    </div>
  )
}

export default MonthYearSelector