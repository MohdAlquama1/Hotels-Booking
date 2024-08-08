import React from "react";
import Header from './header';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from "react";
import {  DateRangePicker } from 'react-date-range';

function Romes() {

    const [openDatePicker, setopenDatePicker]=useState(false);
    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    return (
        <div>
            <Header />
            <h1>Romes</h1>
            <span className=" flex justify-center " onClick={()=>{setopenDatePicker(!openDatePicker)}}>open</span>
            {openDatePicker &&
            <DateRangePicker className="container flex  justify-center sm:container" ranges={[date]} onChange={(r) => { setDate(r.selection) }} minDate={new Date} />
            }
        </div>
    );
}

export default Romes;

{/* <div className="flex justify-center bg-neutral-500 h-12  shadow-lg">
                <form className="flex">
                    <div className=" gap-10 flex">

                        <input type="Date" className=" top-10  relative" />
                        <input type="Date" className=" top-10  relative" />
                        <input type="text" className=" top-10  relative" />

                    </div>

                </form>
            </div> */}