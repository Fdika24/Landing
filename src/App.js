import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Body from "./components/body/body"
import Navbar from "./components/Navbar/main";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


// Lifecycle



class App extends Component {
  render() {
    return (
    <div>
      <div>
        <Navbar />
      </div>
      <Router>
        <Switch>
          <Route path='/' exact component={Body}>
          </Route>
        </Switch>
      </Router>
    </div>
    );
  }
}
export default App;
