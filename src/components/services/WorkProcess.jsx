import "../../css/services/WorkProcess.css"

function WorkProcess(){

    return(

        <section className="process">

            <div className="process-intro">

                <h2 className="process-title">AKO PRACUJEM</h2>

                <p className="process-text">
                    Nemusíš prísť s odpoveďou,<br />
                    stačí prísť s tým, čo ťa trápi.
                </p>

            </div>

            <div className="process-grid">

                <div className="process-card process-card-01">

                    <div className="process-card-head">
                        <span className="process-number">01</span>
                        <h3 className="process-card-title">POROZUMIEŤ</h3>
                    </div>

                    <p className="process-card-text">
                        Pozrieme sa na to, čo sa v tvojom živote deje, čo prežívaš a čo ťa privádza.
                    </p>

                </div>

                <div className="process-card process-card-02">

                    <div className="process-card-head">
                        <span className="process-number">02</span>
                        <h3 className="process-card-title">OBJAVIŤ SÚVISLOSTI</h3>
                    </div>

                    <p className="process-card-text">
                        Hľadáme, čo sa opakuje, čo ťa spúšťa a čo môže byť za tým.
                    </p>

                </div>

                <div className="process-card process-card-03">

                    <div className="process-card-head">
                        <span className="process-number">03</span>
                        <h3 className="process-card-title">PRECÍTIŤ</h3>
                    </div>

                    <p className="process-card-text">
                        Pretože niektoré veci nestačí pochopiť hlavou. Potrebujeme ich bezpečne prežiť a spracovať.
                    </p>

                </div>

                <div className="process-card process-card-04">

                    <div className="process-card-head">
                        <span className="process-number">04</span>
                        <h3 className="process-card-title">NÁJSŤ NOVÝ SPÔSOB</h3>
                    </div>

                    <p className="process-card-text">
                        Postupne objavovať nové možnosti, rozhodnutia a spôsoby, ako byť viac v kontakte so sebou.
                    </p>

                </div>

            </div>

        </section>

    )

}

export default WorkProcess
