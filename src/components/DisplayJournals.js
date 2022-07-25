import React from "react";

function DisplayJournals ( {displayJournal} ) {

    const test = displayJournal.journalEntry;

    return (

        <h2>You can view your journals here! {test}</h2>
    )
}
export default DisplayJournals;