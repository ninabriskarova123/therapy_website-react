import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollTopButton from './components/ScrollTopButton.jsx'
import Home from './pages/Home.jsx'
import Reservation from './pages/Reservation.jsx'
import Review from './pages/Review.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/reservation' element= {<Reservation/>}/>
        <Route path='/review' element = {<Review/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      <ScrollTopButton/>
    </>
  )
}

export default App
