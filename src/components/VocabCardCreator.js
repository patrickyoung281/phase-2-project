import React from "react";

function VocabCardCreator ({ germanWord, englishWord, id, type }) {

return (
        <div className="vocabCard" id={id} key={type}>
            <div><strong>Word #{id}</strong></div>
            <br></br>
            <div className="germanWord"><strong>German:</strong> {germanWord}</div>
            <div className="englishWord"><strong>English:</strong> {englishWord}</div>
            <hr></hr>
        </div>
)

}

export default VocabCardCreator;