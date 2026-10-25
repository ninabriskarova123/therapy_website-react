import "../../css/home/About-therapist.css"

function Therapist(){

    return(

        <section className="about-therapist">

            <div className="therapist-photo">
                <img src="/about-therapist.jpeg" alt="Ivana Majdová, terapeutka a kouč" />
            </div>

            <div className="about-text">

                <h1 className="about-title">NIEČO O MNE</h1>

                <h3 className="about-subtitle">Som Ivana.</h3>

                <p className="therapist-biography">
                    <p className="therapist-biography-roles">Žena, mama, manželka a sprievodkyňa. <br /> </p>

                    Mám rada ticho, slnko, more, leto, cestovanie, smiech a chvíle,
                    keď nemusím nič riešiť. Verím v silu obyčajného úsmevu, úprimného pohľadu, 
                    milého slova a láskavého dotyku. Možno aj preto ma celý život priťahujú 
                    ľudia – ich príbehy, vzťahy, ich vnútorný svet a to, čo sa často ukrýva pod tým, čo nevidíme navonok. 
                    V živote sú pre mňa dôležité harmónia, ľahkosť, radosť, sloboda a predovšetkým vzťah človeka k sebe samému.
                </p>

                <p className="therapist-highlight">
                    Preto nechcem byť človekom, ktorý ti povie, ako máš žiť.
                    Chcem byť človekom, ktorý ti pomôže znovu počuť to, čo už
                    v sebe dávno máš.
                </p>

            </div>

        </section>

    )

}

export default Therapist