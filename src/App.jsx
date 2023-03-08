import { useState } from 'react'
import reactLogo from './assets/react.svg'
import InheritanceExample from './components/InheritanceExample';
import StateExample from './components/StateExample'
import RefExample from './components/RefExample';
import ConditionalRenderExample from './components/ConditionalRenderExample';

import './App.css'

function App() {

  let myName = "";
  let skyIsBlue = true;
  return (
    <>

      {/* <h1>Hi my name is {myName}</h1>
      <h1>I am above the conditional render</h1>
      
      {
        skyIsBlue ? 
        <StateExample/> 
        :
        <ConditionalRenderExample/>
      } */}
      <RefExample/>
    </>
  )
}

export default App
