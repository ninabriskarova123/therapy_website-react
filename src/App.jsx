import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar.jsx'
import ScrollTopButton from './components/common/ScrollTopButton.jsx'
import Footer from './components/common/Footer.jsx'
import CookieBanner from './components/common/CookieBanner.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Reservation from './pages/Reservation.jsx'
import Services from './pages/Services.jsx'
import Review from './pages/Review.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'

function App() {
  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/reservation' element= {<Reservation/>}/>
        <Route path='/services' element= {<Services/>}/>
        <Route path='/review' element = {<Review/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/privacy' element = {<Privacy/>}/>
      </Routes>
      <Footer/>
      <ScrollTopButton/>
      <CookieBanner/>
    </>
  )
}

export default App
