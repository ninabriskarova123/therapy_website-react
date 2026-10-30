import { useEffect } from "react"
import PrivacyPolicy from "../components/privacy/PrivacyPolicy.jsx"

function Privacy(){

    useEffect(() => {

        document.title = "Ochrana osobných údajov | SILA VNÚTRA"

    }, [])

    return(

        <PrivacyPolicy/>

    )

}

export default Privacy
