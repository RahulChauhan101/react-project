import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Count from "./pages/Count";
import Gallery from "./pages/Gallery";
import MusicPlayer from "./pages/MusicPlayer ";
import MovieApp from "./pages/MovieApp";


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
        <Route path="/music" element={<MusicPlayer/>}/>
        <Route path="/movieapp" element={<MovieApp/>}/>
      </Routes>
    </div>
  )
}

export default App