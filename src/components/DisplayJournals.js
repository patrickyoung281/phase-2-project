import React, { useEffect, useState } from "react";
import JournalCardCreator from "./JournalCardCreator";

function DisplayJournals () {

const [displayjournals, setDisplayJournals] = useState([]);

useEffect (()=>{
    fetch("http://localhost:3001/vocabulary")
    .then((resp)=>resp.json())
    .then((data)=>setDisplayJournals(data))
},[])

    const allJournals = displayjournals.map((entry)=> {
        if (entry.id >= 3)
        return <JournalCardCreator key = {entry.id} date={entry.date} title={entry.title} journal={entry.journalEntry} />
    })

    return (

        <div className="headerText">
            <h1>You can view your journals here!</h1> 
            <div>{allJournals}</div>
        </div>
    )
}
export default DisplayJournals;