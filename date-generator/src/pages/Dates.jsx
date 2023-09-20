import { DateCard } from '../components/DateCard.jsx';
import { LoadingSpinner } from '../components/LoadingSpinner.jsx';
import {getDates} from '../utils/api.js'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


export const Dates = () => {  
const [dates, setDates] = useState([]);
const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
    setIsLoading(true)
    getDates()
    .then((res) => {
        setDates(res)
        setIsLoading(false)
    })
}, [])

if(isLoading) {
    return <LoadingSpinner/>
}
return (
    <section>
        <Link to='/'>
        <h2> back </h2>
        </Link>
    <ul>
    {
        dates.map((date) => {
            return <DateCard key={date.id} date={date} />
        })
    }
    </ul> 
    </section>
)
}