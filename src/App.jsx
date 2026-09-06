import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollTopButton from './components/ScrollTopButton.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollTopButton/>
    </>
  )
}

export default App
