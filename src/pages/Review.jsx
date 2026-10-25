import { useEffect } from "react"
import ReviewList from "../components/review/ReviewList.jsx"
import ReviewForm from "../components/review/ReviewForm.jsx"

function Review(){

    useEffect(() => {

        document.title = "Recenzie klientov | SILA VNÚTRA"

    }, [])

    return(

        <>

            <ReviewList/>
            <ReviewForm/>
            
        </>

    )

}

export default Review