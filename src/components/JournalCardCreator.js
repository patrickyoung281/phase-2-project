import React, { useEffect, useState } from "react";

function JournalCardCreator ( {title, date, journal} ) {

    return  <h2>
                Journal Title: {title}
                Journal Date: {date}
                Journal Entry: {journal}
            </h2>
}

export default JournalCardCreator;