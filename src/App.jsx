import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Heading from "./heading-component/Heading"
import Input from "./input-component/Input"
import Lists from "./lists-component/Lists"
import Buttons from "./buttons-component/Buttons"
import Mapping from './mapping-component/Mapping'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/headings" element={<Heading/>}/>
        <Route path="/input" element={<Input/>}/>
        <Route path="/lists" element={<Lists/>}/>
        <Route path="/buttons" element={<Buttons/>}/>
        <Route path="/mapping" element={<Mapping/>}/>
      </Routes>
    </>
  )
}

export default App