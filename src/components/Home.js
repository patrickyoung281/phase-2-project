import React from "react";

function Home () {

    return (
        <div>
            <h2 className="headerText">Welcome to your personal journal creator!</h2>
            <h3 className="headerText">You can use this website to keep an electronic journal in German.<br></br>Sie können diese Webseite verwenden, um ein Tagesbuch zu schreiben.</h3>
            <h2 className="headerText"><strong>Anweisungen</strong></h2>
            <div className="directions">
                <ol>
                    <li>Click "Create Journal" to write a journal entry.</li>
                    <li>You should also record important vocabulary words that are helpful for writing a journal entry.</li>
                    <li>Click "View Journals" to view all of the journals you have written.</li>
                    <li>Click "Useful Vocabulary" for ideas of vocabaulary to include in your journal writing.</li>
                </ol>
            </div>
        </div>
    )
}

export default Home;