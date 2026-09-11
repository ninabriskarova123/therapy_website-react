import "../css/Navbar.css"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

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
        
        <Link to= "/">DOMOV</Link>
        <Link to= "/reservation">REZERVÁCIE</Link>
        <Link to = "/review">RECENZIE</Link>
        <Link to= "/contact">KONTAKT</Link>
        
      </nav>
    </header>
  )
}

export default Navbar
