import React, { useState } from "react";
import VocabCardCreator from "./VocabCardCreator";

function Vocab () {

const [vocab, setVocab] = useState([]);

fetch("http://localhost:3001/vocabulary")
    .then((resp)=>resp.json())
    .then((data)=>setVocab(data))

const displayWords = vocab.map((word)=>{
    return <VocabCardCreator germanWord={word.germanWord} englishWord={word.englishWord} id={word.id} type={word.Type}/>
})

    return (
        <div>
        <h2>Useful vocab here! {displayWords}</h2>
        <VocabCardCreator />
        </div>
    )
}

export default Vocab;