import './App.css'
import Footer from './components/Footer'
import { Home } from './components/Home'
import Navbar from './components/Navbar'
import { useState } from "react";

function App() {

  const [category, setCategory] = useState('general')

  return (
    <>
     <Navbar setCategory={setCategory}/>
     <Home category={category}/>
     <Footer/>
    </>
  )
}

export default App
