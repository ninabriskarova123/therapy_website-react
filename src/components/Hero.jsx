import "../css/Hero.css"
import { Link } from "react-router-dom"

function Hero() {

    return(

        <nav className="hero">

            <div className="hero-title">

                <h1>NÁVRAT K SEBE</h1>
                <p className="hero-subtitle">Terapie</p>
                <Link to = '/reservation'>Preskúmaj naše služby</Link>

            </div>

            <div className="hero-photo">
                <img src="/hero-photo.jpeg" alt="" />
            </div>

        </nav>

    )
}

export default Hero