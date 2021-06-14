import React from "react";
import {Switch , Route , Redirect} from "react-router-dom";
import './App.css';
import Greetings from "./pages/Greetings/thankyou";
import Homepage from "./pages/Homepage/homepage";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/thankyou" component={Greetings} />
        
      </Switch>
      
    </div>
  );
}

export default App;
