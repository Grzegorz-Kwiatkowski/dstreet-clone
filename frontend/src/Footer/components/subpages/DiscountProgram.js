import discount_program from "../../../../assets/images/discount-program.jpg";

const DiscountProgram = {
    render:()=>{
        return `<div class="discountProgram">
            <div class="discountProgram__container">
                <section class="discountProgram__header">
                    <h1>Program rabatowy</h1>
                </section>

                <section class="discountProgram__wrapper">
                    <section class="discountProgram__wrapper-text">
                        <p>Sklep Dstreet przygotował dla Ciebie specjalną ofertę! Dzięki naszej propozycji dla stałych klientów będziesz mógł dokonywać zakupów i oszczędzać przy tym całkiem duże pieniądze. Jeśli nie jesteś jeszcze naszym klientem, czas to zmienić i już dziś skorzystać z naszej atrakcyjnej propozycji rabatowej. Poniżej przygotowaliśmy informacje na temat naszego programu rabatowego. Mamy nadzieje, że pomoże Ci to podjąć decyzję o zakupie i dołączysz do grona naszych stałych klientów. </p>
                        <p>Nasz program rabatowy skierowany jest do klientów, którzy posiadają swoje konto w sklepie Dstreet.pl. Jeśli jeszcze nie zarejestrowałeś się w naszym serwisie - zrób to już teraz. Wystarczy kilka chwil, by założyć konto i skorzystać z przysługujących Ci profitów. Dzięki rejestracji w naszym sklepie składanie zamówień stanie się proste i szybkie, poza tym na bieżąco będziesz mógł śledzić postępy w realizacji swoich zamówień.</p>
                        <p>Dzięki systemowi rabatowemu każdy klient zarejestrowany w naszym sklepie internetowym już po zrealizowaniu pierwszego zamówienia otrzymuje rabat na wszystkie oferowane przez nas produkty przy każdych kolejnych zakupach. Wysokosć rabatu uzależniona jest od łącznej kwoty wydanej na zrealizwane zamówienia (koszty przesyłki nie są wliczane do wartości zamówienia). </p>
                        <p>Serdecznie zapraszamy Cię do wzięcia udziału w naszym programie rabatowym. Pozwoli Ci on na szybką oszczędność w miarę kolejnych zamówień. Jeśli masz jakieś pytania, sugestie i pomysły, nasze biuro obsługi klienta jest do Twojej dyspozycji od poniedziałku do piątku w godzinach 08-15. Formularz oraz dane kontaktowe znajdziesz pod tym adresem</p>
                    </section>
                    <section class="discountProgram__wrapper-image">
                        <img src="${discount_program}" />
                    </section>
                </section>

                <section class="discountProgram__discount">
                <h2> | Po wydaniu określonej kwoty klient otrzymuje: </h2>
                    <ul>
                        <li>1% rabatu - po zrealizowaniu pierwszego zamówienia.</li>
                        <li>3% rabatu - po osiągnięciu sumy 1000 zł za zrealizowane zamówienia.</li>
                        <li>5% rabatu - po osiągnięciu sumy 1700 zł za zrealizowane zamówienia.</li>
                        <li>8% rabatu - po osiągnięciu sumy 2500 zł za zrealizowane zamówienia.</li>
                    </ul>
                </section>

                <section class="discountProgram__info">
                    <h2>| Ważne informacje: </h2>
                    <ul>
                        <li>W przypadku zwrotu towaru różnica odejmowana jest od sumy za zrealizowane zamówienia.</li>
                        <li>Wysokość aktualnego rabatu widoczna jest po zalogowaniu w panelu użytkownika.</li>
                        <li>Program Rabatowy nie łączy się z innymi promocjami.</li>
                        <li>Uruchomienie programu rabatowego nastąpiło 1 października 2014 roku, zakupy dokonane przed tą datą nie będą uwzględnianie przy rabacie.</li>
                    </ul>
                </section>

            </div>
        </div>`;
    }
}

export default DiscountProgram;