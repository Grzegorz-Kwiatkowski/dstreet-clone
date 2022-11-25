import jpg from "../../../assets/images/jpg.png"
import pdf from "../../../assets/images/pdf.png"

const Complaints = {
    render: () => {
        return `
        <div class="complaints">

        <h2>Zwroty i reklamacje</h2>

        <section class="complaints__info">
            <h4>Drogi Kliencie</h4>
            <p>
                Jeśli zamówiony produkt źle na Tobie leży, zmieniłeś zdanie, lub z jakiegoś
                innego powodu chcesz go zwrócić - odeślij go do nas z dowodem zakupu, oraz
                wypełnionym formularzem. Jeśli nie masz możliwości wydruku możesz dołączyć
                odręcznie wypisany formularz podając w nim:
            </p>

            <ul>
                <li>Swój login ze sklepu i numer zamówienia.</li>
                <li>Imię, nazwisko oraz nr telefonu kontaktowego.</li>
                <li>Pełny adres do wysyłki zwrotnej.</li>
                <li>Model, rozmiar oraz kolor odsyłanego towaru.</li>
            </ul>

            <div>
                <span class="complaints__info-data">DANE DO WYSYŁKI: "D-TEX" Sp. z o.o., ul. Jana Długosza 5, 98-300 Wieluń, Polska </span>
                <span class="complaints__info-warning"> UWAGA: Towar należy starannie zapakować aby uniknąć uszkodzenia w trakcie transportu. </span>
            </div>

            </section>
           
                <section class="complaints__returns">
                <h2>Zwroty</h2>

               

                        <p>
                        Usługobiorca/Klient będący jednocześnie konsumentem, który zawarł umowę na 
                        odległość, może od niej odstąpić bez podania przyczyn, składając stosowne 
                        oświadczenie na piśmie w terminie czternastu dni. Do zachowania tego terminu
                         wystarczy wysłanie oświadczenia przed jego upływem. Oświadczenie można 
                         wysyłać w szczególności za pośrednictwem poczty elektronicznej na adres: 
                         sklep@dstreet.pl lub też pisemnie na adres: "D-TEX" Sp. z o.o., ul. 
                         Długosza 5, 98-300 Wieluń. 
                        </p>

                        <ol>
                            <li>
                                W razie odstąpienia od umowy, umowa jest uważana za niezawartą,
                                a konsument jest zwolniony z wszelkich zobowiązań. To, co strony
                                świadczyły, ulega zwrotowi w stanie niezmienionym, chyba że zmiana
                                była konieczna w granicach zwykłego zarządu. Zwrot powinien nastąpić
                                nie później niż w terminie czternastu dni. Jeżeli konsument dokonał
                                jakichkolwiek przedpłat, należą się od nich odsetki ustawowe od daty
                                dokonania przedpłaty.
                            </li>
                            <li>
                                Usługodawca/Sprzedawca dokona zwrotu na wskazany przez
                                konsumenta numer rachunku bankowego. <strong>Informujemy, że nie
                                przyjmujemy paczek za pobraniem.</strong>
                            </li>
                            <li>
                            Termin czternastodniowy, w którym konsument może odstąpić od umowy, liczy się 
                            w przypadku Umowy Sprzedaży od dnia wydania Produktu, a gdy umowa dotyczy 
                            świadczenia Usługi Elektronicznej od dnia jej zawarcia. 
                            </li>
                            <li>
                            Prawo do odstąpienia od umowy zawartej na odległość nie przysługuje konsumentowi w wypadkach: 
                            <ul>
                                <li>Świadczenia usług rozpoczętego, za zgodą konsumenta, przed upływem terminu, o którym mowa powyżej w pkt. 3</li>
                                <li>Dotyczących nagrań audialnych i wizualnych oraz zapisanych na informatycznych nośnikach danych po usunięciu przez konsumenta ich oryginalnego opakowania.</li>
                                <li>Umów dotyczących świadczeń, za które cena lub wynagrodzenie zależy wyłącznie od ruchu cen na rynku finansowym.</li>
                                <li>Świadczeń o właściwościach określonych przez konsumenta w złożonym przez niego zamówieniu lub ściśle związanych z jego osobą.</li>
                                <li>Świadczeń, które z uwagi na ich charakter nie mogą zostać zwrócone lub których przedmiot ulega szybkiemu zepsuciu.</li>
                                <li>Dostarczania prasy.</li>
                                <li>Usług w zakresie gier hazardowych.</li>
                            </ul>
                            </li>
                            <div class="complaints__returns-remember">
                            <h3>Pamietaj</h3>
                            <ul>
                            <li>Zwrotu dokonujesz na własny koszt. Koszt ten nie podlega zwrotowi</li>
                            <li>Nie mamy technicznej możliwości odbioru przesyłek wysłanych "Za Pobraniem".</li>
                            </ul>
                            </div>
                        </ol>

                    </section>

                    <div class="complaints__icons">
                        <a href="https://dstreet.pl/data/include/cms/dokumenty/formularze/Dstreet-formularz_zwrotu.jpg">
                            <section class="complaints__icons-jpg">
                                <img src="${jpg}" />
                                <span>formularz JPG</span>
                            </section>
                        </a>
                        <a href="https://dstreet.pl/data/include/cms/dokumenty/formularze/Dstreet-formularz_zwrotu.pdf">
                            <section class="complaints__icons-pdf">
                                <img src="${pdf}" />
                                <span>formularz PDF</span>
                            </section>
                        </a>
                </div>

                    <section class="complaints__complaints">
                        <h2>Reklamacje</h2>

                    <div class="complaints__complaints-content open">
                    <p>Reklamacje z tytułu niezgodności Produktu z Umową Sprzedaży:</p>
                        <ol>
                            <li>
                                Podstawa i zakres odpowiedzialności Sprzedawcy wobec Klienta będącego osobą
                                fizyczną, który nabywa Produkt w celu niezwiązanym z działalnością zawodową
                                lub gospodarczą, z tytułu niezgodności Produktu z Umową Sprzedaży są określone
                                w szczególności ustawą o szczególnych warunkach sprzedaży konsumenckiej oraz
                                o zmianie Kodeksu cywilnego z dnia 27 lipca 2002 r. (Dz. U. Nr 141, poz. 1176
                                ze zm.)
                            </li>
                            <li>
                            Zawiadomienia o niezgodności Produktu z Umową Sprzedaży oraz 
                            zgłoszenia odpowiedniego żądania można dokonać w szczególności za 
                            pośrednictwem poczty elektronicznej na adres: sklep@dstreet.pl lub 
                            też pisemnie na adres: "D-TEX" Sp. z o.o., ul. Długosza 5, 98-300 
                            Wieluń. Gdy jest to możliwe i niezbędne dla oceny niezgodności 
                            Produktu z umową należy go również dostarczyć na powyższy adres. \
                            Informujemy, że nie przyjmujemy paczek za pobraniem. 
                            </li>
                            <li>
                            Sprzedawca ustosunkuje się do żądania Klienta nie później niż w 
                            terminie 14 dni. Odpowiedź w sprawie reklamacji jest wysyłana na 
                            podany przez Klienta adres, chyba że Klient poda inny sposób. 
                            </li>
                            <li>
                                W przypadku Produktów objętych również gwarancją Sprzedawca informuje,
                                iż gwarancja na sprzedany towar konsumpcyjny nie wyłącza, nie ogranicza
                                ani nie zawiesza uprawnień kupującego wynikających z niezgodności towaru
                                z umową.
                            </li>
                        </ol>

                        <p>Reklamacje związane ze świadczeniem Usług Elektronicznych przez Usługodawcę oraz pozostałe reklamacje związane z działaniem Sklepu Internetowego: </p>
                        <ol>
                        <li>
                            Reklamacje związane ze świadczeniem Usług Elektronicznych za pośrednictwem
                            Sklepu Internetowego oraz pozostałe reklamacje związane z działaniem 
                            Sklepu Internetowego Usługobiorca może składać w szczególności za 
                            pośrednictwem poczty elektronicznej na adres: sklep@dstreet.pl lub też 
                            pisemnie na adres: "D-TEX" Sp. z o.o., ul. Długosza 5, 98-300 Wieluń
                        </li>
                        <li>
                            Zaleca się podanie w opisie reklamacji jak najwięcej informacji i 
                            okoliczności dotyczących przedmiotu reklamacji, w szczególności 
                            rodzaju i daty wystąpienia nieprawidłowości oraz danych kontaktowych 
                            – ułatwi to i przyspieszy rozpatrzenie reklamacji przez Usługodawcę.
                        </li>
                        <li>
                        Rozpatrzenie reklamacji przez Usługodawcę następuje nie później niż w terminie 14 dni.
                        </li>
                        <li>
                        Odpowiedź Usługodawcy w sprawie reklamacji jest wysyłana na podany przez 
                        Usługobiorcę adres, chyba że Usługobiorca poda inny sposób.
                        </li>
                        </ol>

                    
                    </div>
                </section>
               
                <div class="complaints__another">
                    <span>Zwroty i reklamacje - najczęściej zadawane pytania - 
                    <a href="/#/">(czytaj więcej...)</a></span>
                    <span>Zachęcamy również do kontaktu z naszym Działem Obsługi Klienta. Chętnie pomożemy! </span>
                </div>
               
                <div class="complaints__icons">
                    <a href="https://dstreet.pl/data/include/cms/dokumenty/formularze/Dstreet-formularz_reklamacji.jpg">
                        <section class="complaints__icons-jpg">
                                <img src="${jpg}" />
                                <span>formularz JPG</span>
                            </section>

                            <a href="https://dstreet.pl/data/include/cms/dokumenty/formularze/Dstreet-formularz_reklamacji.pdf">
                                <section class="complaints__icons-pdf">
                                    <img src="${pdf}" />
                                    <span>formularz PDF</span>
                                </section>
                            </a>
                            
                    </a>
                    
                </div>

            </section>

        </section>
    </div >`;
    }
}

export default Complaints;