import React from 'react';
import Count from './Count';
import './Home.css';
import TodoApp from './TodoApp';
import DigitalClock from './DigitalClock ';
import ColorPicker from './ColorPicker';
import Gallery from './Gallery';
import MusicPlayer from './MusicPlayer ';
import MovieApp from './MovieApp';

const Home = () => {
  return (
    <div className="Home-cards">
      <div className="Home-card">
        <Count />
       <TodoApp/>
       <DigitalClock/>
       <ColorPicker/>
       <Gallery/>
       <MusicPlayer/>
       <MovieApp/>
      
      </div>
    </div>
  );
};

export default Home;
