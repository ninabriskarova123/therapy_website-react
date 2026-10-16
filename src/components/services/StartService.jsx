import "../../css/services/ConsultationService.css"
import { Link } from "react-router-dom"

function StartService(){

    return(

        <section className="service service-start">

            <h2 className="service-title">TERAPEUTICKÁ PRÁCA</h2>

            <p className="service-text">
                Nevieš, ktorá cesta je pre teba?<br />
                Nemusíš sa rozhodnúť sama.<br />
                Začni konzultáciou a spoločne zistíme, čo potrebuješ.
            </p>

            <p className="service-meta">Osobne / online</p>

            <Link to="/contact" className="service-btn">NAPÍSAŤ IVANE</Link>

        </section>

    )

}

export default StartService
