import React, { useState } from 'react'
import styles from './Styles/MonthYearSelector.module.css';

const MonthYearSelector = () => {
    const [summaryMonth, setSummaryMonth] = useState("May");
    const [summaryYear, setSummaryYear] = useState("2023");

    console.log(summaryMonth, summaryYear);

  return (
    <div className={styles.selectorContainer}>
        <div className={styles.selectorBox}>
            <select name="year" id="year-select" onChange={(e) => setSummaryYear(e.target.value)}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
            <select name="year" id="year-select" onChange={(e) => setSummaryMonth(e.target.value)}>
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