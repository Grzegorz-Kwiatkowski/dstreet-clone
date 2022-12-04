import step_1 from "../../../../assets/images/step-1.jpg"
import step_2 from "../../../../assets/images/step-2.jpg"
import step_3 from "../../../../assets/images/step-3.jpg"
import step_4 from "../../../../assets/images/step-4.jpg"
import step_5 from "../../../../assets/images/step-5.jpg"
import step_6 from "../../../../assets/images/step-6.jpg"
import step_7 from "../../../../assets/images/step-7.jpg"

const HowToBuy = {
    render:()=>{
        return `<div class="howToBuy">
            <div class="howToBuy__container">
                <section class="howToBuy__header">
                    <h1>Jak kupować?</h1>
                </section>
                <section class="howToBuy__info">
                    <p>Zespół Dstreet troszczy się, aby proces zakupowy trwał jak najkrócej, a radość z niego była jak największa. </p>
                </section>
                <div class="howToBuy__steps">
                    <section>
                        <h2>| Krok Pierwszy </h2>
                        <p>Wybierz wariant kolorystyczny produktu (A), rozmiar (B) oraz ilość produktów jaką chcesz zamówić (C). Kiedy wszystko zgadza się z Twoimi potrzebami, kliknij w przycisk 'DODAJ DO KOSZYKA' (D), który zabierze Cię do Kroku Drugiego. </p>
                        <img src="${step_1}" />
                    </section>
                    <section>
                        <h2>| Krok Drugi </h2>
                        <p>Upewnij się, że ilość sztuk jest zgodna z Twoimi potrzebami (A). Jeśli planujesz w przyszłości zamówić jeszcze dany produkt, lub chcesz go pokazać znajomym, dodaj go do ulubionych za pomocą przycisku (B). Jeśli zmieniłeś zdanie, możesz usunąć produkt z koszyka za pomocą przycisku (C). Jeśli posiadasz kod rabatowy (przykładowo za subskrypcję Newslettera Dstreet) możesz go wykorzystać w odpowiednim polu (D). Wszystko gotowe? Teraz pozostało tylko sfinalizować zamówienie, wciśnij przycisk 'FINALIZACJA ZAMÓWIENIA' (E), który zabierze Cię do Kroku Trzeciego. </p>
                        <img src="${step_2}" />
                    </section>
                    <section>
                        <h2>| Krok Trzeci </h2>
                        <p>Teraz pozostało Ci już tylko podanie swoich danych. Jeśli jesteś nowym klientem, możesz założyć konto w sklepie Dstreet, lub złożyć zamówienie bez rejestracji (A). Jeśli już jesteś naszym klientem - Miło widzieć Cię ponownie - zaloguj się w odpowiedniej sekcji (B), a Twoje dane zostaną automatycznie wpisane do forumlarza. </p>
                        <img src="${step_3}" />
                    </section>
                    <section>
                        <h2>| Krok Czwarty </h2>
                        <p>Jeśli w Kroku Trzecim wybrałeś opcję 'ZAŁÓŻ KONTO' lub 'ZAMÓW BEZ REJESTRACJI' zostaniesz przeniesiony do formularza w którym zostaniesz poproszony o podanie adresu dostawy wraz z danymi osobowymi (A) oraz danych kontaktowych (B) celem realizacji zamówienia i ewentualnego założenia konta. Jeśli już posiadasz konto i zalogowałeś się w Kroku Trzecim, zostaniesz przeniesiony do Kroku Piątego. </p>
                        <img src="${step_4}" />
                    </section>
                    <section>
                        <h2>| Krok Piąty </h2>
                        <p>Na tym etapie zostaniesz poproszony o wybór sposobu dostawy (A) oraz sposobu płatności (B). Pamiętaj, że w przypadku Płatności Przy Odbiorze koszty dostawy i próg Darmowej Dostawy są większe. Kliknięcie w przycisk 'DALEJ' (C) przeniesie Cię do przedostatniego kroku. </p>
                        <img src="${step_5}" />
                    </section>
                    <section>
                        <h2>| Krok Szósty </h2>
                        <p>Świetna robota! Zamówienie jest już prawie złożone. Zebraliśmy wszystkie informacje o zamówieniu w jednym miejscu, abyś mógł sprawdzić czy wszystko się zgadza. Mamy nadzieję, że tak jest. Udowodnij że nie jesteś robotem ;-) akceptując regulamin sklepu (A) i kliknij 'ZAMAWIAM I PŁACĘ' (B). Zamówienie złożone! </p>
                        <img src="${step_6}" />
                    </section>
                    <section>
                        <h2>| Krok Siódmy </h2>
                        <p>Jakoś przebrnęliśmy. Chyba nie było tak źle, co? Zamówienie już jest u nas, właśnie leci na magazyn. Klikając w przycisk 'PŁATNOŚĆ' zostaniesz przekierowany do systemu płatności, w zależności od sposobu płatności jaki wybrałeś. Pamiętaj rzucić okiem czy nie wkradł się jakiś drobny błąd i w razie czego - dzwoń! </p>
                        <img src="${step_7}" />
                    </section>
                </div>
            </div>
        </div>`;
    }
}
export default HowToBuy;