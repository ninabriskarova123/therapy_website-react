import '../css/ScrollTopButton.css'

import { useState, useEffect } from "react";

function Button(){

    const[ show, setShow] = useState(false);
    
    useEffect( () => {

        function handleScroll(){

            setShow(window.scrollY > 100) 

        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    let arrow;

    if(show){

        arrow = 'floating-btn show'

    }
    else{

        arrow = 'floating-btn'

    }

    return(

        <button className = {arrow} onClick={() => window.scrollTo({  top:0, behavior: 'smooth'})}>  ↑</button>

    )

}

export default Button