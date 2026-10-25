import { useEffect } from 'react'
import ContactHero from '../components/contact/ContactHero.jsx'

function Contact(){

    useEffect(() => {

        document.title = "Kontakt | SILA VNÚTRA"

    }, [])

    return(

        <>

            <ContactHero/>

        </>

    )

}

export default Contact
