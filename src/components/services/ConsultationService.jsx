import "../../css/services/ConsultationService.css"
import { Link } from "react-router-dom"

function ConsultationService(){

    return(

        <section className="service service-consultation">

            <h2 className="service-title">KONZULTÁCIA</h2>

            <p className="service-text">
                Keď potrebuješ najprv pochopiť, čo sa s tebou deje.<br />
                Pri prvom stretnutí si vytvoríme priestor na rozhovor o tom, čo ťa trápi,
                čo prežívaš a čo by si potrebovala. Spoločne sa pozrieme na to, či a akým
                spôsobom ti môžem pomôcť.
            </p>

            <p className="service-meta">Osobne / online</p>

            <Link to="/reservation" className="service-btn">CHCEM KONZULTÁCIU</Link>

        </section>

    )

}

export default ConsultationService