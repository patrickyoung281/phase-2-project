import React from "react";

function VocabCardCreator ({ germanWord, englishWord, id, type }) {

return (
    <div>
        <div className ={type} id={id} key={type}>
            <div className="germanWord">{germanWord}</div>
            <div className="englishWord">{englishWord}</div>
        </div>
    </div>
)

}

export default VocabCardCreator;