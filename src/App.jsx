import { useState } from 'react'
import reactLogo from './assets/react.svg'
import InheritanceExample from './components/InheritanceExample';
import StateExample from './components/StateExample'

import ConditionalRenderExample from './components/ConditionalRenderExample';

import './App.css'

function App() {

  let myName = "Ethan";
  let skyIsBlue = false;
  return (
    <>
      <h1>I am above the conditional render</h1>
      
      {
        skyIsBlue ? 
        <StateExample/> 
        :
        <ConditionalRenderExample/>
      }
    </>
  )
}

export default App
