import '../css/ReviewList.css'

function ReviewList(){

    return(


        <>
        
        <section className="reviews">

            <p className="section-label">Hodnotenia</p>

            <h1>Spätná väzba od klientov</h1>

            <p className="reviews-intro">
                Skúsenosti ľudí, ktorí si dovolili pozrieť sa na svoje témy jemne, bezpečne a vlastným tempom.
            </p>

            <button className="review-btn" onClick={() => document.getElementById('review-section').scrollIntoView({behavior: 'smooth'})}>Podeľ sa aj ty s nami o tvoju skúsenosť!</button>

            <div className="reviews-citation">

                <p>
                    „Terapia bola super. Rýchlo sme sa vedeli dostať k hlavnému problému a aj ho 
                    spracovať. Bolo zaujímavé vidieť, ako negatívne situácie z detstva ovplyvňujú 
                    naše vzťahy v dospelosti, a taktiež, ako rýchlo sa dá tento vzorec zmeniť na pozitívny. 
                    Mne to pomohlo vyriešiť traumu a zmeniť na ňu pohľad. Ďakujem, Ivanka❤️.“
                </p>

                <p>
                    „Pred terapiou som mala zmiešané pocity. Počas terapie som sa uvoľnila a veľa vecí sa vyriešilo.
                    Určite by som ju odporučila každému, kto nad tým premýšľa.“
                </p>

                <p>
                    „Ivi, úprimne? Vyrazila si mi dych. Keď som si pýtala rozbor môjho kódu duše, mala som zimomriavky 🙏🏻. Normálne nechápem, ako sa v tých pár číslach môže skrývať celý môj život. Mala som pocit, že mi čítaš denník.
                    Trafila si presne to, čo žijem – moje silné stránky, slabiny, ale aj rodové záťaže a veci z rodiny, ktoré ma doteraz brzdili. Všetko to do seba zapadlo ako puzzle.
                    Pre mňa je tvoja sila v tom, že nie si len numerologička, ale aj terapeutka, ktorá mi pomáha to pochopiť. To spojenie čísel a liečenia starých rán z minulosti je brutálna kombinácia.
                    Ďakujem ti a odporúčam ťa všetkým, ktorí chcú konečne pochopiť sami seba a pohnúť sa z miesta 🩷.“

                </p>

                <p>
                    „Terapia u Ivany bola pre mňa obrovským krokom vpred. Išla som tam s malou dušičkou, ale už po prvých minútach som cítila, že som v bezpečí. Ivana má úžasnú schopnosť vytvoriť atmosféru dôvery 
                    a pokoja – nič nenúti, len jemne vedie tam, kam práve človek potrebuje ísť. Počas sedenia som sa dotkla tém z detstva, ktorým som sa roky vyhýbala, a zrazu to šlo ľahšie, ako som si myslela. Je vidieť, že Ivana robí túto prácu zo srdca, nie ako „robotu“, ale ako svoje poslanie. Po terapii som začala cítiť viac ľahkosti v živote a menej napätia v bežných situáciách.
                    Páči sa mi, že Ivana nepoužíva žiadne „prázdne frázy“, ale pracuje citlivo, autenticky a s rešpektom. Odporúčam ju každému, kto cíti, že ho ešte niečo z minulosti ťahá späť. “
                </p>

                <p>
                    „Ďakujem, pani Ivana, za sedenie, ktoré som u vás absolvovala. Pomohlo mi nájsť problém, o ktorom som ani len netušila, že trvá tak dlho. Výsledky sa už ukazujú v tom dobrom svetle.
                    Sedenie lieči nielen dušu, ale aj telo. Vrelo to odporúčam každému 👍🏻😇. Ďakujem. “
                </p>
            </div>

         </section>

        </>

    )

}

export default ReviewList