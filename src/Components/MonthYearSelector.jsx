import React from 'react'
import { changeMonth, changeYear } from '../Reducer/dateActions';
import styles from './Styles/MonthYearSelector.module.css';

const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
    <div className={styles['selector-container']}>
        <div className={styles['selector-box']}>
            <select name="year" id="year-select" value={state.year} onChange={(e) => handleYearChange(e)}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
            <select name="month" id="month-select" value={state.month} onChange={(e) => handleMonthChange(e)}>
                {
                    monthArr.map((el, i) => <option value={i+1}>{el}</option>)
                }
            </select>
        </div>
        <button className={styles['summary-btn']}>View Statement Summary</button>
    </div>
  )
}

export default MonthYearSelector