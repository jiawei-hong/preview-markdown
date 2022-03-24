import React, { useCallback, useState } from 'react'
import Editor from './Components/Editor'
import Preview from './Components/Preview'
import './App.css'

function App() {
  const [doc, setDoc] = useState(`# Hello World.
  
  * Apple
  * Banana
  
  1. Bird
  1. McHale
  1. Parish
  
  | a    | b     |  c    |  d     |
  | -    | :-    |  -:   | :-:    |
  | Test | Test  |  Test |  Test  |  
`)

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc.target.value)
  }, [])

  return (
    <div className="app">
      <Editor onChange={handleDocChange} doc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
