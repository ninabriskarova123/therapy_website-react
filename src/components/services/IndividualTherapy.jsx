import "../../css/services/ConsultationService.css"
import { Link } from "react-router-dom"

function IndividualTherapy(){

    return(

        <section className="service service-therapy">

            <h2 className="service-title">INDIVIDUÁLNA TERAPIA</h2>

            <p className="service-text">
                Pre človeka, ktorý chce ísť hlbšie a pracovať na konkrétnych vzorcoch, 
                presvedčenia, programoch, blokoch, strachpch a traumách. Dovoľ si opäť sa cítiť v bezpečí.
            </p>

            <p className="service-meta">Osobne / online</p>

            <Link to="/reservation" className="service-btn">CHCEM ÍSŤ HLBŠIE</Link>

        </section>

    )

}

export default IndividualTherapy
