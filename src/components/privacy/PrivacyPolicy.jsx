import "../../css/privacy/PrivacyPolicy.css"

function PrivacyPolicy(){

    return(

        <section className="privacy">

            <p className="section-label">Ochrana osobných údajov</p>

            <h1>Zásady ochrany osobných údajov</h1>

            <p className="privacy-updated">Posledná aktualizácia: október 2026</p>

            <h2>1. Kto je prevádzkovateľ</h2>

            <p>
                Prevádzkovateľom webu silavnutra.sk a osobných údajov je
                Ivana Majdová, Tročany 120, Bardejov,
                e-mail: imsilavnutra@gmail.com.
            </p>

            <h2>2. Aké údaje spracúvame a prečo</h2>

            <h3>Rezervácia termínu</h3>
            <p>
                Rezervácia prebieha cez službu SimplyBook.me. Pri rezervácii zadávate
                meno, e-mail, telefónne číslo a údaje, ktoré uvediete vo formulári.
                Údaje používame na dohodnutie termínu, potvrdenie a pripomenutie stretnutia a komunikáciu s vami.
                Právnym základom je plnenie zmluvy alebo opatrenia pred jej uzavretím.
                Ak by ste do formulára napísali aj citlivé informácie,
                spracúvame ich len na základe vášho súhlasu. Nie je to potrebné,
                uveďte ich len vtedy, ak chcete.
                Rezervačný systém SimplyBook sa otvára v novom okne a má vlastné zásady
                ochrany údajov aj vlastné cookies.
            </p>

            <h3>Kontaktovanie</h3>
            <p>
                Ak mi napíšete e-mail, zavoláte alebo napíšete cez Instagram či Facebook,
                spracúvame údaje, ktoré mi pošlete, aby sme vám mohli odpovedať.
                Právnym základom je oprávnený záujem na vybavení vašej požiadavky.
                Pri komunikácii cez Instagram alebo Facebook platia aj zásady ich prevádzkovateľa (Meta).
            </p>

            <h3>Recenzie</h3>
            <p>
                Text recenzie sa po odoslaní prepošle e-mailom cez službu EmailJS.
                Na webe sa neukladá. Ak do recenzie napíšete meno alebo iné osobné údaje,
                spracúvame ich na základe vášho súhlasu, ktorý vyjadrujete odoslaním formulára.
                Ak by som recenziu chcela zverejniť na webe, urobím to len s vaším súhlasom.
            </p>

            <h3>Technické údaje</h3>
            <p>
                Pri návšteve webu sa vaša IP adresa prenáša poskytovateľovi hostingu a službám,
                z ktorých sa načítava písmo a ikony (Google Fonts, Font Awesome cez cdnjs).
                Je to nevyhnutné na zobrazenie stránky.
            </p>

            <h2>3. Cookies</h2>

            <p>
                Web nepoužíva sledovacie ani reklamné cookies a nepoužíva analytické nástroje.
                Vo vašom prehliadači sa ukladá iba jeden záznam o tom, že ste potvrdili
                informačnú lištu, aby sa vám nezobrazovala opakovane.
            </p>

            <h2>4. Komu údaje sprístupňujeme</h2>

            <p>
                Údaje spracúvajú tieto služby, ktoré pre mňa fungujú ako sprostredkovatelia:
            </p>

            <ul>
                <li>SimplyBook.me – rezervačný systém,</li>
                <li>EmailJS – odosielanie recenzií e-mailom,</li>
                <li>Google (Gmail) – e-mailová komunikácia a prijímanie recenzií,</li>
                <li>Google (Google Fonts) – zobrazenie písma,</li>
                <li>[DOPLNIŤ: poskytovateľ hostingu, napr. Netlify alebo Cloudflare] – prevádzka webu.</li>
            </ul>

            <p>
                Niektorí z týchto poskytovateľov môžu údaje prenášať aj mimo Európskej únie.
                Robia to spravidla na základe záruk podľa GDPR (napríklad štandardných zmluvných doložiek).
                Údaje nepredávame a nepoužívame na reklamu.
            </p>

            <h2>5. Ako dlho údaje uchovávame</h2>

            <p>
                Údaje z rezervácií a komunikácie uchovávame po dobu nevyhnutnú na poskytnutie
                služby a potom najviac [3 mesiace], alebo dlhšie, ak to vyžaduje zákon.
                Údaje, ktoré spracúvame na základe súhlasu, uchovávame, kým súhlas neodvoláte.
            </p>

            <h2>6. Vaše práva</h2>

            <p>
                Môžete ma požiadať o prístup k svojim údajom, ich opravu, vymazanie, obmedzenie
                spracúvania alebo prenos. Môžete namietať proti spracúvaniu a kedykoľvek odvolať
                súhlas. Stačí napísať na e-mail uvedený vyššie.
            </p>

            <p>
                Ak sa domnievate, že s údajmi nenakladáme správne, máte právo podať sťažnosť
                na Úrad na ochranu osobných údajov Slovenskej republiky (dataprotection.gov.sk).
            </p>

        </section>

    )

}

export default PrivacyPolicy
