import "../../css/home/CTA.css"
import { Link } from "react-router-dom"

function Cta(){

    return(

        <section className="cta-section">

            <div className="cta-text">

                <h1 className="cta-title">SILA VNÚTRA</h1>

                <h2 className="cta-subtitle">Vysielač svojho života máš v sebe.</h2>

                <p className="cta-body">
                    Možno celý život hľadáme odpovede vonku.<br />
                    V radách.<br />
                    V ľuďoch.<br />
                    V tom, čo by sme mali robiť.<br />
                    V tom, čo od nás očakávajú ostatní.<br />
                    A pritom v nás existuje miesto, ktoré veľmi často vie, čo cítime,
                    čo potrebujeme a čo už s nami nie je v súlade.<br />
                    Len sme sa niekedy naučili jeho hlas nepočúvať.
                </p>

                <p className="cta-highlight">
                    Nechcem ti hovoriť, aký život máš žiť. Chcem ti pomôcť znovu
                    počuť seba, aby si ho mohla začať tvoriť sama.
                </p>

            </div>

            <div className="cta-side">

                <div className="cta-image">
                    <img src="/section-invite.jpeg" alt="Dve ruky natiahnuté k sebe v lese" />
                </div>

                <Link to="/reservation" className="cta-button">Začať konzultáciu</Link>

            </div>

        </section>

    )

}

export default Cta