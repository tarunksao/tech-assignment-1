import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import TransactionSummary from "../Pages/TransactionSummary";

export default function AllRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/transactions/:month" element={<TransactionSummary />}></Route>
            <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
    )
};
