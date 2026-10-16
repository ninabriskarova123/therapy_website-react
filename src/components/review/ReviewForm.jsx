import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../../css/review/ReviewForm.css'

function ReviewForm(){

    const [text, setText] = useState('');
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    function handleSubmit(event){

        //don't refresh screen
        event.preventDefault()

        emailjs.send(

            //where to sent email
            'service_u8le3an',
            'template_78it3hv',
            { message: text },
            '2llwuU-v6SDrwFrqF'

        )

        .then(() => {

                setSent(true)
                setText('')

            })

        .catch((err) => {

            console.log(err)
            setError(true)

        })
        

    }

    let message = null;

    if(sent == true){

        message = <p className='review-success'>Ďakujeme, vaša recenzia bola odoslaná.❤️</p>

    }
    else if(error == true){

        message = <p className="review-error">Mrzí nás to, recenziu sa nepodarilo odoslať. Skúste to prosím znova.😇</p>

    }


    return(

        <>
        
        <section className="review-section" id="review-section">
        
            <h2>Napíšte svoju recenziu</h2>

            <p>Vaša skúsenosť môže povzbudiť niekoho ďalšieho urobiť prvý krok.</p>


            {message}

            <form className="review-form" onSubmit={handleSubmit}>

                <textarea value={text} onChange={(e) => setText(e.target.value)}
                 
                    placeholder="Napíšte svoju recenziu..." rows="6" required>

                </textarea>

                <button type="submit">Odoslať recenziu</button>
            
            </form>
        
        </section>

        </>

    )

}

export default ReviewForm