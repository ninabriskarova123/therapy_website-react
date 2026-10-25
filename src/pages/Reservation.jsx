import { useEffect } from 'react'
import ReservationHero from '../components/reservation/ReservationHero.jsx'

function Reservation(){

    useEffect(() => {

        document.title = "Rezervácia termínu | SILA VNÚTRA"

    }, [])

    return(

        <>

            <ReservationHero/>

        </>

    )


}

export default Reservation