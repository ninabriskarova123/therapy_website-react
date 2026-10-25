import { useEffect } from "react"
import WorkProcess from "../components/services/WorkProcess.jsx"
import ConsultationService from "../components/services/ConsultationService.jsx"
import CoachingConversation from "../components/services/CoachingConversation.jsx"
import IndividualTherapy from "../components/services/IndividualTherapy.jsx"
import ApproachService from "../components/services/ApproachService.jsx"

function Services(){

    useEffect(() => {

        document.title = "Služby: konzultácia, koučovací rozhovor, terapia | SILA VNÚTRA"

    }, [])

    return(

        <>

            <WorkProcess/>
            <ConsultationService/>
            <CoachingConversation/>
            <IndividualTherapy/>
            <ApproachService/>

        </>

    )

}

export default Services
