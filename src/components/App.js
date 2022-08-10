import React, { useState, useEffect } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import CreateJournal from "./CreateJournal";
import DisplayJournals from "./DisplayJournals";
import Vocab from "./Vocab";
import { Route } from "react-router-dom";

function App() {

return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/createjournal">
        <CreateJournal />
      </Route>
      <Route exact path="/displayjournals">
        <DisplayJournals/>
      </Route>
      <Route exact path="/vocabulary">
        <Vocab/>
      </Route>
    </div>
  );
}

export default App;
