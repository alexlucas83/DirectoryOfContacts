import React from 'react';
import './App.css';
import Header from "./Components/Header"
import List from './Components/contact/List';
import { Provider } from './Context';
import AddContact from './Components/contact/AddContact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutUs from './Components/AboutUs';
import Error from './Components/Error';

function App() {
  return (
    <Provider>
      <Router>
    <div className="App">
      <Header/>
      <div className="container">
        {/* <AddContact/> */}
        <Switch>
        <Route exact path="/Àpropos" component={AboutUs} />
        <Route exact path="/Ajouter" component={AddContact} />
        <Route exact path="/list" component={List} />
        <Route exact path="/" component={List} />
        <Route component={Error}/>
        </Switch>

      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
