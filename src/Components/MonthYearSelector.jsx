import React, { useReducer, useState } from 'react'
import styles from './Styles/MonthYearSelector.module.css';
import { dateReducer } from '../Reducer/dateReducer';
import { changeMonth, changeYear } from '../Reducer/dateActions';

const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let time = new Date();
const initState = {
    month:monthArr[time.getMonth() -1],
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
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">April</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </select>
        </div>
        <button className={styles.summaryBtn}>View Statement Summary</button>
    </div>
  )
}

export default MonthYearSelector