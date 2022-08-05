import React, {useEffect, useState} from "react";

function CreateJournal ( {handleAddJournal} ) {

const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [journal, setJournal] = useState("");
const [newEntry, setNewEntry] = useState([]);
const [germanWord, setGermanWord] = useState("");
const [englishWord, setEnglishWord] = useState("");

function handleTitleChange (e) {
    setTitle(e.target.value)
}

function handleDateChange (e) {
    setDate(e.target.value);
}

function handleJournalChange (e) {
    setJournal(e.target.value);
}

function handleGermanChange (e) {
    setGermanWord(e.target.value);
}

function handleEnglishChange (e) {
    setEnglishWord(e.target.value);
}

function handleSubmit (e) {
    e.preventDefault();
    const newEntry = {
        GermanWord: germanWord,
        EnglishWord: englishWord,
        Type: "",
        journalEntry: journal,
        date: date,
        title: title
    };

    setNewEntry(newEntry);
    
    fetch("http://localhost:3001/vocabulary", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newEntry),
    })
    .then((resp)=>resp.json())
    .then((data)=>handleAddJournal(data))

    setTitle("");
    setDate("");
    setJournal("");
    setGermanWord("");
    setEnglishWord("");
}


    return (
    <div>
        <h2>Create your Journal here!</h2>
        <form className="journalDate" onSubmit={handleSubmit}>
            <label>
                Date:
                <input type = "text"
                onChange={handleDateChange}
                name="date"
                value={date} 
                placeholder="Date">
                </input>
            </label>
            
            <label>
                Journal Title:
                <input type="text"
                onChange={handleTitleChange}
                name="title"
                value={title}
                placeholder="Title">
                </input>
            </label>
            <div>
                <label>
                    Journal:
                    <input type="text"
                    onChange={handleJournalChange}
                    value={journal}
                    placeholder="Write your journal entry here!"
                    name="journal"
                    id="journalEntryBox">
                    </input>
                </label>
                <div>
                <label>
                    German Word 
                    <input type="text"
                    onChange={handleGermanChange}
                    name="GermanWord"
                    value={germanWord}
                    placeholder="Write the German word here!">
                    </input>
                </label>
                <label>
                    English word
                    <input type="text"
                    onChange={handleEnglishChange}
                    name="EnglishWord"
                    value={englishWord}
                    placeholder="Write the English translation here!">
                    </input>
                </label>
                </div>
            <div>
                <input 
                    type="submit"
                    name="submit"
                    value="Create Journal Entry"
                    />
            </div>
            </div>
        </form>
    </div>
    )

}

export default CreateJournal;