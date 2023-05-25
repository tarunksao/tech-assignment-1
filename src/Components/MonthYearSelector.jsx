import React from 'react'
import { changeMonth, changeYear } from '../Reducer/dateActions';
import styles from './Styles/MonthYearSelector.module.css';

// const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let time = new Date();

const MonthYearSelector = ({state, dispatch}) => {
    // const [state, dispatch] = useReducer(dateReducer, initState);

    const handleMonthChange = (e) => {
        let d1 = e.target.value;
        let d2 = time.getMonth()+1;

        if (state.year === time.getFullYear() && d1 <= d2){
            dispatch(changeMonth(e.target.value));
        } else if (state.year < time.getFullYear()){
            dispatch(changeMonth(e.target.value));
        }
    }

    const handleYearChange = (e) => {
        dispatch(changeYear(e.target.value));
    }

  return (
    <div className={styles.selectorContainer}>
        <div className={styles.selectorBox}>
            <select name="year" id="year-select" value={state.year} onChange={(e) => handleYearChange(e)}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
            <select name="month" id="month-select" value={state.month} onChange={(e) => handleMonthChange(e)}>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
            </select>
        </div>
        <button className={styles.summaryBtn}>View Statement Summary</button>
    </div>
  )
}

export default MonthYearSelector