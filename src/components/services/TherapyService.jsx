import "../../css/services/ConsultationService.css"
import { Link } from "react-router-dom"

function TherapyService(){

    return(

        <section className="service service-therapy">

            <h2 className="service-title">TERAPEUTICKÁ PRÁCA</h2>

            <p className="service-text">
                Keď nepotrebuješ terapiu, ale potrebuješ nájsť smer.<br />
                Niekedy človek nepotrebuje riešiť minulosť. Potrebuje sa zastaviť,
                uvidieť svoju situáciu z iného uhla a objaviť vlastné odpovede.
            </p>

            <p className="service-meta">Osobne / online</p>

            <Link to="/reservation" className="service-btn">CHCEM ÍSŤ HLBŠIE</Link>

        </section>

    )

}

export default TherapyService
