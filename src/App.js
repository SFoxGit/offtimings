import './App.css';
import Header from './components/Header/header';
import AttacksTable from './components/Table/table';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from 'react'

function App() {
  const [archtype, setArchtype] = useState()
  const [primary, setPrimary] = useState()
  const [secondary, setSecondary] = useState()
  const [epic, setEpic] = useState()

  return (
    <Router>
      <Header archtype={archtype} primary={primary} secondary={secondary} epic={epic}/>
      <Switch>
        <Route exact path="/instructions">

        </Route>
        <Route path="/">
          <AttacksTable 
          archtype={archtype}
          setArchtype={setArchtype}
          primary={primary}
          setPrimary={setPrimary}
          secondary={secondary}
          setSecondary={setSecondary}
          epic={epic}
          setEpic={setEpic}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
