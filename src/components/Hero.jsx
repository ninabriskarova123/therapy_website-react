import "../css/Hero.css"

function Hero() {

    return(

        <nav className="hero">

            <div className="hero-title">

                <h1>NÁVRAT K SEBE</h1>
                <p className="hero-subtitle">Terapie</p>
                <a href="work.html">PRESKÚMAJ NAŠE SLUŽBY</a>

            </div>

            <div className="hero-photo">
                <img src="/hero-photo.jpeg" alt="" />
            </div>

        </nav>

    )
}

export default Hero