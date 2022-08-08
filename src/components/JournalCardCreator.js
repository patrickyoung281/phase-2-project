import React, { useEffect, useState } from "react";

function JournalCardCreator ( {title, date, journal} ) {

    return  <div class="journalCards">
                <h2><strong>Journal Title:</strong> {title} </h2>
                <h2><strong>Journal Date:</strong> {date} </h2>
                <h2><strong>Journal Entry:</strong><br></br> {journal}</h2>
            </div>
}

export default JournalCardCreator;