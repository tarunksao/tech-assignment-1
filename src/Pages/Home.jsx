import React, { useReducer } from 'react'
import MonthYearSelector from '../Components/MonthYearSelector'
import SummaryBox from '../Components/SummaryBox'
import { dateReducer } from '../Reducer/dateReducer';

const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthDaysArr = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let time = new Date();
const initState = {
    month:time.getMonth()+1,
    year:time.getFullYear(),
}

const Home = () => {
    const [state, dispatch] = useReducer(dateReducer, initState);

  return (
    <>
        <MonthYearSelector state={state} dispatch={dispatch} />
        <SummaryBox state={state} />
    </>
  )
}

export default Home