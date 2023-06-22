import React from 'react'
import './App.css';
import Navbar from './Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newaletter from './components/Newsletter';
import Card from './components/Card';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newaletter />
      <Card />
      <Footer />
    </div>
  )
}

export default App