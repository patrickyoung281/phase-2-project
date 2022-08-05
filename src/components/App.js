import React, { useState } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import CreateJournal from "./CreateJournal";
import DisplayJournals from "./DisplayJournals";
import Vocab from "./Vocab";
import { Route } from "react-router-dom";
import "../"



function App() {
  
const [displayJournal, setDisplayJournal] = useState("[]"); 

function handleAddJournal (journal) {
  setDisplayJournal(journal);
}
  
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/createjournal">
        <CreateJournal 
        handleAddJournal={handleAddJournal}/>
      </Route>
      <Route exact path="/displayjournals">
        <DisplayJournals
          journal={displayJournal} />
      </Route>
      <Route exact path="/vocabulary">
        <Vocab />
      </Route>
    </div>
  );
}

export default App;
