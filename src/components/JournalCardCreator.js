import React, { useEffect, useState } from "react";

function JournalCardCreator ( {title, date, journal} ) {

    return  <div>
                <h2><strong>Journal Title:</strong></h2><h3>{title}</h3>
                <h2><strong>Journal Date:</strong></h2><h3>{date}</h3>
                <h2><strong>Journal Entry:</strong></h2><h3>{journal}</h3>
                <hr></hr>
            </div>
}

export default JournalCardCreator;