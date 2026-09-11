import '../css/ReviewForm.css'

function ReviewForm(){

    return(

        <>
        
        <section className="review-section" id="review-section">
        
            <h2>Napíšte svoju recenziu</h2>

            <p>Vaša skúsenosť môže povzbudiť niekoho ďalšieho urobiť prvý krok.</p>

            <form className="review-form">
            
                <textarea placeholder="Napíšte svoju recenziu..." rows="6" required></textarea>

                <button type="submit">Odoslať recenziu</button>
            
            </form>
        
        </section>

        </>

    )

}

export default ReviewForm