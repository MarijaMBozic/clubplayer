import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './page/Home'
import Navigation from './containers/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      {<BrowserRouter>
        <Route exact path="/"
          component={Home} />
        <Route path="/navigation"
          component={Navigation} />
      </BrowserRouter>}
    </div>
  );
}

export default App;
