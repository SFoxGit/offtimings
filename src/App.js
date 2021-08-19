import './App.css';
import Header from './components/Header/header';
import AttacksTable from './components/Table/table';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/instructions">

        </Route>
        <Route path="/">
          <AttacksTable />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
