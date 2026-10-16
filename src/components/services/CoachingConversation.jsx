import "../../css/services/ConsultationService.css"
import { Link } from "react-router-dom"

function CoachingConversation(){
 
    return(

        <section className="service service-coaching">

            <h2 className="service-title">KOUČOVACÍ ROZHOVOR</h2>

            <p className="service-text">
                Keď nepotrebuješ terapiu, ale potrebuješ nájsť smer.<br />
                Niekedy človek nepotrebuje riešiť minulosť. Potrebuje sa zastaviť,
                uvidieť svoju situáciu z iného uhla a objaviť vlastné odpovede.
            </p>

            <p className="service-meta">Osobne / online</p>

            <Link to="/reservation" className="service-btn">CHCEM NÁJSŤ SVOJU SILU</Link>

        </section>

    )


}

export default CoachingConversation