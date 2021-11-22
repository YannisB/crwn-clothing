import React from 'react'
import './App.css';
import { Route } from 'react-router';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div> This is the hat page</div>
)

function App() {
  return (
    <div>
      <Route path="/" component={HomePage}/>
      <Route exact path="/hats" component={HatsPage}/>
    </div>
  );
}

export default App;
