import './App.css';
import AddBox from './views/AddBox';
import React from 'react';
import ListBoxes from './views/ListBoxes';
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/addbox" component={AddBox} />
          <Route path="/listboxes" component={ListBoxes}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
