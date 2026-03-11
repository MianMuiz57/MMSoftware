import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Process from './components/Process';
import Services from './components/Services';
import RecentWorks from './components/RecentWorks';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Process />
        <Services />
        <RecentWorks />
        <Reviews />
        <FAQ />
      </main>
    </div>
  );
}

export default App;