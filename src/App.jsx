import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import "../src/App.css"


function App() {

  return(
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<App />}/>
      
     </Routes>
     
     </BrowserRouter>
      
    </>
  )
}

export default App