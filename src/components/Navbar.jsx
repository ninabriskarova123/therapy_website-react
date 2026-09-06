import "../css/Navbar.css"
import { useState, useEffect } from "react"

function Navbar() {

  const[ scrolled, setScrolled] = useState(false);

  useEffect (() => {

    function handleScroll(){

      setScrolled(window.scrollY > 100)

    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [])

  let headerClass;

  if(scrolled){

    headerClass = 'navbar navbar-scrolled'

  }else{

    headerClass = 'navbar'

  }

  return (
    <header className= {headerClass}>
      <nav>
        <a href="index.html">DOMOV</a>
        <a href="reservation.html">REZERVÁCIE</a>
        <a href="reviews.html">HODNOTENIA</a>
        <a href="contact.html">KONTAKT</a>
      </nav>
    </header>
  )
}

export default Navbar
