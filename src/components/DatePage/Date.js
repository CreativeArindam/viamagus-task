//imports
import React,{useState} from 'react'
import moment from 'moment'

//Assets
import "./css/Date.css"

const Date = () => {

    const [fromDate, setFromDate] = useState(moment().unix()*1000)
    const onFromDateChange = (e) => {
        console.log(e.target.value)
        setFromDate(moment(e.target.value).unix()*1000)
        console.log("From: ",fromDate)
    }

    const [toDate, setToDate] = useState()
    const [duration, setDuration] = useState(0)
    const onDurationChange = (e) =>{
        setDuration(e.target.value)
        setToDate(fromDate + (duration*10000))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="date__page">
            <form className="date__form" onSubmit={handleSubmit}>
                <label htmlFor="dateFrom">Date From</label>
                <input id="dateFrom" type="datetime-local" name="dateFrom" value={moment(fromDate).format("YYYY-MM-DD\THH:mm:ss")} onChange={onFromDateChange}/>
                <label htmlFor="duration">Duration in seconds</label>
                <input type="number" name="duration" id="duration" placeholder="Duration in seconds" value={duration} onChange={onDurationChange}/>
                <label htmlFor="toDate">To Date</label>
                <input id="toDate" type="datetime-local" name="toDate" value={moment(toDate).format("YYYY-MM-DD\THH:mm:ss")} onChange={onFromDateChange}/>
            </form>
        </div>
    )
}

export default Date
