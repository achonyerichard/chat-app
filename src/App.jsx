import { Routes, Route } from "react-router-dom";
import Home from "./pages";


function App() {


  return (
    <Routes>
      <Route element={<Home />} path="/" />
    
    </Routes>
  )
}

export default App
