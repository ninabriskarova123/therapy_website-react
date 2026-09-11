import '../css/ContactHero.css'
import { Link } from 'react-router-dom'

function Contact(){

    return(

        <>
        
            <section className="contact-container">

            <div className="contact-heading">

                <p className="section-label">Kontakt</p>

                <h1>Ozvite sa, keď budete cítiť, že je čas.</h1>

                <p>Napíšte mi alebo zavolajte. Spoločne nájdeme najvhodnejší spôsob stretnutia či rezervácie.</p>

                <Link to="/reservation" className="contact-booking-btn">Rezervovať termín</Link>

            </div>

            <div className="contact-cards">
                
                <div className="contact-card">
                    
                    <i className="fa-solid fa-envelope"></i>
                    <div>
                        <h2>EMAIL</h2>
                        <a href="mailto:ivana.terapiesrdcom@gmail.com">ivana.terapiesrdcom@gmail.com</a>
                    </div>

                </div>

                <div className="contact-card">
                    <i className="fa-solid fa-phone"></i>
                    <div>
                        <h2>TELEFÓN</h2>
                        <a href="tel:+421910223443">+421 910 223 443</a>
                    </div>

                </div>

                <div className="contact-card">
                    
                    <i className="fa-brands fa-instagram"></i>
                    <div>
                        <h2>INSTAGRAM</h2>
                        <a href="https://www.instagram.com/cesta_tvojej_duse" target="_blank" rel="noopener noreferrer">@cesta_tvojej_duse</a>
                    </div>

                </div>

            </div>

        </section>

        </>

    )

}

export default Contact