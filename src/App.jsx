import { useState } from 'react'
import './App.css'
import InputSpace from './components/InputSpace'

function App() {

  return (
    < >
    <div className="bg-amber-50">
     <center className="font-bold text-3xl">I'm Creating Components</center>
     <InputSpace type="number" placeholder="00.00" text="Number"></InputSpace>
     <InputSpace type="text" placeholder="Enter Text"text="Text Box"></InputSpace>
     <InputSpace type="email" placeholder="example@gmail.com"text="Email Box"></InputSpace>
     <InputSpace type="checkbox" text="Check Box" ></InputSpace>
     <InputSpace type="radio"text="Radio Box"></InputSpace>
     <InputSpace type="date" text="Date Box"></InputSpace>
     <InputSpace type="date and time" placeholder="Enter Text"></InputSpace>
     <InputSpace type="time" text="Time Box"></InputSpace>
     <InputSpace type="file" text="File Box"></InputSpace>
     <InputSpace type="password" placeholder="Enter Password" text="Security Box"></InputSpace>
     <InputSpace type="search" placeholder="Search here" text="Search Box"></InputSpace>
     <InputSpace type="tel" placeholder="123-45-678" text="Telephone Box"></InputSpace>
     <InputSpace type="url" placeholder="Enter Text"text="URL Box"></InputSpace>
     <InputSpace type="submit" ></InputSpace>
     </div>
    </>
    
  )
}

export default App
