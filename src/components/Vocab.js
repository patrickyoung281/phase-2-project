import React, { useState, useEffect } from "react";
import VocabCardCreator from "./VocabCardCreator";

function Vocab () {

const [vocab, setVocab] = useState([]);

useEffect(()=>{
    fetch("http://localhost:3001/vocabulary")
    .then((resp)=>resp.json())
    .then((data)=>setVocab(data));
},[]) 

const displayWords = vocab.map((word)=>{
    return <VocabCardCreator germanWord={word.GermanWord} englishWord={word.EnglishWord} id={word.id} type={word.Type}/>
})

    return (
        <div>
        <h2>Useful vocab here!</h2>
        <div>{displayWords}</div>
        </div>
    )
}

export default Vocab;