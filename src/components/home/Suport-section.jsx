import "../../css/home/Suport-section.css"

function Support(){

    return(

        <section className="support-section">

            <h1 className="support-title">„MOŽNO SA V TOM NÁJDEŠ“</h1>

            <div className="support-content">

                <div className="support-image">
                    <img src="/section-help.jpeg" alt="Žena v lese" />
                </div>

                <div className="support-text">

                    <ul className="support-list">
                        <li>Možno navonok všetko zvládaš.</li>
                        <li>Ale vo vnútri cítiš únavu.</li>
                        <li>Možno veľa premýšľaš, ale stále nevieš, čo vlastne cítiš.</li>
                        <li>Možno vieš, čo by si mala urobiť, ale nedokážeš to zmeniť.</li>
                        <li>Možno ťa niektoré situácie zasiahnu oveľa viac, než by si chcela.</li>
                        <li>Možno sa stále staráš o druhých a na seba ti zostáva čoraz menej miesta.</li>
                        <li>Možno cítiš, že niečo v tvojom živote potrebuje zmenu, ale nevieš, kde začať.</li>
                    </ul>

                    <p className="support-highlight">
                        A možno nepotrebuješ ďalšiu radu.<br />
                        Možno potrebuješ začať rozumieť sebe.
                    </p>

                </div>

            </div>

        </section>

    )

}

export default Support