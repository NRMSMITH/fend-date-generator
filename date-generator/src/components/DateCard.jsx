import { deleteDate } from "../utils/api"
import { LoadingSpinner } from "./LoadingSpinner"
import { useState } from "react"

export const DateCard = ({date}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const deleteCard = () => {
        setIsLoading(true)
        return deleteDate(date.id)
        .then((deleted) => {
            setIsLoading(false)
            setIsDeleted(true)
        })
    }

    if(isLoading) {
        return <LoadingSpinner/>
    }

    if(isDeleted) {
        return <p>Your date has been deleted!</p> 
    }

    return (
            <>
            <article id="datecard" className="bg-purple-800 rounded-lg">
        <h2 id="date_title" className="text-pink-300">{date.title}</h2>
        <button onClick={deleteCard} id="deletebtn_datecard" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-1 py-1 text-center mr-2 mb-2">Delete</button>
        <h3 id="date_address">{date.address}</h3>
        <h3 id="date_description">{date.description}</h3>
        <h3 id="date_price">£{date.price_estimation}</h3>
            </article>
        </>
    )
    }
