import "../../css/home/About-therapist.css"

function Therapist(){

    return(

        <section className="about-therapist">

            <div className="therapist-photo">
                <img src="/section-aboutme.jpeg" alt="Ivana" />
            </div>

            <div className="about-text">

                <h1 className="about-title">NIEČO O MNE</h1>

                <h3 className="about-subtitle">Som Ivana.</h3>

                <p className="therapist-biography">
                    Dlho som premýšľala nad tým, čo človeka skutočne mení.<br />
                    Či stačí pochopiť, prečo sa správame určitým spôsobom.<br />
                    Či stačí vedieť, čo máme robiť.<br />
                    A čím viac spoznávam ľudí aj seba, tým viac vidím, že zmena
                    často začína oveľa hlbšie.<br />
                    V mieste, kde sa stretáva náš príbeh, naše prežívanie, telo,
                    vzťahy a spôsob, akým sami seba vnímame.
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