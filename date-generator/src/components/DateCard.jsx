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
            <article id="datecard">
        <h2 id="date_title">{date.title}</h2>
        &nbsp;
        <button onClick={deleteCard} id="deletebtn_datecard">X</button>
        <h3 id="date_address">{date.address}</h3>
        <h3 id="date_description">{date.description}</h3>
        <h3 id="date_price">£{date.price_estimation}</h3>
            </article>
        </>
    )
    }
