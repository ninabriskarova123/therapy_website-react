import "../../css/common/Footer.css"
import { Link } from "react-router-dom"

function Footer(){

    return(

        <footer className="footer">

            <div className="footer-top">

                <div className="footer-column">

                    <h3 className="footer-title">IVANA MAJDOVÁ</h3>

                    <p className="footer-text">
                        Konzultácie, koučovací rozhovor a terapeutická práca.<br />
                        Osobne aj online.
                    </p>

                </div>

                <div className="footer-column">

                    <h3 className="footer-title">MENU</h3>

                    <Link to="/" className="footer-link">Domov</Link>
                    <Link to="/services" className="footer-link">Služby</Link>
                    <Link to="/reservation" className="footer-link">Rezervácie</Link>
                    <Link to="/review" className="footer-link">Recenzie</Link>
                    <Link to="/contact" className="footer-link">Kontakt</Link>

                </div>

                <div className="footer-column">

                    <h3 className="footer-title">KONTAKT</h3>

                    <a href="mailto:ivana.terapiesrdcom@gmail.com" className="footer-link">ivana.terapiesrdcom@gmail.com</a>
                    <a href="tel:+421910223443" className="footer-link">+421 910 223 443</a>
                    <a href="https://www.instagram.com/cesta_tvojej_duse" target="_blank" rel="noopener noreferrer" className="footer-link">@cesta_tvojej_duse</a>

                </div>

            </div>

            <p className="footer-bottom">© 2026 Ivana Majdová. Všetky práva vyhradené.</p>

        </footer>

    )

}

export default Footer
