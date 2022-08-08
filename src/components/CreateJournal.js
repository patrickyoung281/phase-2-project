import React, {useState} from "react";

function CreateJournal ( {handleAddJournal} ) {

const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [journal, setJournal] = useState("");
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
        journalEntry: journal,
        date: date,
        title: title
    };
    
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
        <h2 className="headerText">Create your Journal here!</h2>
        <form className="headerText" onSubmit={handleSubmit}>
            <label className="journalDate">
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
                    <h3>Vocabulary to Remember</h3>
                    <ul className="vocabDirections">
                        <li>After you write your journal, select a German word that you used in your journal. It should be a word that was new or interesting to you.</li>
                        <li>Write the German word with the English translation below.</li>
                        <li>This word will be saved under the "Useful Vocabulary tab, so that you can reference it and use it again in the future.</li>
                    </ul>
                </div>
                <div>
                <label>
                    German Word 
                    <input
                    className="germanWordBox"
                    type="text"
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
                <br></br>
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