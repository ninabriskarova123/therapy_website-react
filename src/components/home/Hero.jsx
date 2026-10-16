import "../../css/home/Hero.css"
import { Link } from "react-router-dom"

function Hero(){

    return(

        <section className="hero">

            <div className="hero-title">

                <h1 className="hero-heading">SILA VNÚTRA</h1>

                <p className="hero-subtitle">IVANA MAJDOVÁ</p>

                <Link to="/services" className="hero-button">Preskúmaj naše služby</Link>

                <h2 className="hero-tagline">
                    Individuálne konzultácie a koučovací rozhovor osobne aj online.
                </h2>

            </div>

            <div className="hero-photo">
                <img src="/hero-photo.jpeg" alt="Ivana Majdová" />
            </div>

        </section>

    )
}

export default Hero