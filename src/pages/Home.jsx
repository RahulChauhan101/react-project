import React from 'react';
import Count from './Count';
import './Home.css';

const Home = () => {
  return (
    <div className="Home-cards">
      <div className="Home-card">
        <Count />
        <Count />
        <Count />
        <Count />
      </div>
    </div>
  );
};

export default Home;
