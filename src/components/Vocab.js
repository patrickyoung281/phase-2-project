import React, { useState, useEffect } from "react";
import VocabCardCreator from "./VocabCardCreator";

function Vocab () {

const [vocab, setVocab] = useState([]);

useEffect(()=>{
    fetch("http://localhost:3001/journals")
    .then((resp)=>resp.json())
    .then((data)=>setVocab(data));
},[vocab]) 

const displayWords = vocab.map((word)=>{
    return <VocabCardCreator germanWord={word.germanWord} englishWord={word.englishWord} key={word.id} type={word.Type} id={word.id}/>
})

    return (
        <div className="headerText">
        <h2>Wichtiges Wortschatz<br></br>Important Vocabulary</h2>
        <div>{displayWords}</div>
        </div>
    )
}
export default Vocab;