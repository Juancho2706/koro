import "./css/App.css"
import React from "react"
import Header from "./components/header/Header"
import Content from "./components/Body/Content"

function App() {
  return (
    <div className="grid grid-rows-[0.1fr_2fr]">
      <Header/>
      <Content/>
    </div>
  )
}

export default App
