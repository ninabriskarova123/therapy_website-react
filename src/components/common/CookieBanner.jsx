import "../../css/common/CookieBanner.css"
import { useState } from "react"
import { Link } from "react-router-dom"

function CookieBanner(){

    const [visible, setVisible] = useState(localStorage.getItem("cookies-ok") !== "yes")

    function accept(){

        localStorage.setItem("cookies-ok", "yes")
        setVisible(false)

    }

    if(visible == false){

        return null

    }

    return(

        <div className="cookie-banner">

            <p className="cookie-text">
                Táto stránka sama nepoužíva sledovacie ani reklamné cookies.
                Na zobrazenie písma využíva službu Google Fonts a na odosielanie
                recenzií službu EmailJS. Rezervácia prebieha na stránke SimplyBook.
                Viac v <Link to="/privacy" className="cookie-link">zásadách ochrany osobných údajov</Link>.
            </p>

            <button className="cookie-btn" onClick={accept}>ROZUMIEM</button>

        </div>

    )

}

export default CookieBanner
