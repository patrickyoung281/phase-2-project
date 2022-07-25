import React, {useState} from "react";
import DisplayJournals from "./DisplayJournals";

function CreateJournal ( {setDisplayJournal} ) {

const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [journal, setJournal] = useState("");
const [newEntry, setNewEntry] = useState([]);

function handleTitleChange (e) {
    setTitle(e.target.value)
}

function handleDateChange (e) {
    setDate(e.target.value);
}

function handleJournalChange (e) {
    setJournal(e.target.value);
}

function handleSubmit (e) {
    e.preventDefault();
    const newEntry = {
        GermanWord: "",
        EnglishWord: "",
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
    .then((data)=>setDisplayJournal(data));

    setTitle("");
    setDate("");
    setJournal("");
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
                    name="journal">
                    </input>
                </label>
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