import '../css/ReservationHero.css'

function ReservationHero(){

    return(

         <>

        <section className="reservation-hero">

            <div className="reservation-content">

                <p className="section-label">Rezervácie</p>

                <h1>Doprajte si priestor, kde sa môžete vrátiť k sebe.</h1>

                <p className="reservation-intro">
                    Vyberte si termín online a urobte prvý pokojný krok k stretnutiu.
                    Rezervácia prebieha cez SimplyBook v novom okne.
                </p>

                <div className="reservation-actions">

                    <a href="https://sonatest.simplybook.me"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="reservation-booking-btn">
                       Rezervovať termín
                    </a>

                    <span className="reservation-note">Online rezervácia je rýchla a nezáväzná.</span>

                </div>

                <div className="reservation-steps">

                    <div className="reservation-step">
                        <span>01</span>
                        <p>Vyberiete si službu, ktorá je vám najbližšia.</p>
                    </div>

                    <div className="reservation-step">
                        <span>02</span>
                        <p>Zvolíte si voľný termín podľa svojho času.</p>
                    </div>

                    <div className="reservation-step">
                        <span>03</span>
                        <p>Dostanete potvrdenie a všetky potrebné informácie.</p>
                    </div>

                </div>

            </div>

            <div className="reservation-visual">

                <img src="/thetahealing-session.jpeg" alt="" />

                <div className="reservation-card">
                
                    <p>Najbližší krok</p>
                    <strong>Rezervovať konzultáciu</strong>
                    <span>cez SimplyBook</span>
                
                </div>

            </div>

        </section>



        </>

    )
}

export default ReservationHero