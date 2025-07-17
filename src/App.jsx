import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Count from "./pages/Count";
import Gallery from "./pages/Gallery";


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contect" element={<Contect/>}/>
        <Route path="/count" element={<Count/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </div>
  )
}

export default App