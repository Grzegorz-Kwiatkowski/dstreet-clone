import wallet from "../../../../assets/images/wallet.png"
import payu from "../../../../assets/images/payu.jpg"
import banks from "../../../../assets/images/banks.jpg"
import paypal from "../../../../assets/images/paypal.jpg"
import masterpass from "../../../../assets/images/masterpass.jpg"
import dpd from "../../../../assets/images/dpd.jpg"

const Payments = {
    render: ()=>{
        return `
            <div class="payments">
              <div class="payments__container">
                <section class="payments__header">
                    <h1>Metody płatności</h1>
                </section>

                <section class="payments__sending">
                    <section class="payments__sending-header">
                        <img src="${wallet}" />
                        <h2>Płatność przed wysyłką</h2>
                    </section>

                    <div class="payments__sending-content">
                    <div>
                        <section class="payments__sending-content-options">
                            <div>
                                <p>Płatność PayU</p>
                            </div>
                            <div>
                                <p>Płatność PayPal</p>
                            </div>
                            <div>
                                <p>Płatność Masterpass</p>
                            </div>
                        </section>
                        <section class="payments__sending-content-data">
                            <table>
                                <caption>Przelew tradycyjny</caption>
                                <tr>
                                    <td>Odbiorca : </td>
                                    <td>"D-TEX" Sp. z o.o.</td>
                                </tr>
                                <tr>
                                    <td>Adres : </td>
                                    <td>ul. Jana Długosza 5, 98-300 Wieluń</td>
                                </tr>
                                <tr>
                                    <td>Numer rachunku dla PLN:</td>
                                    <td>PL 69 1140 1889 0000 3253 0300 1003</td>
                                </tr>
                                <tr>
                                    <td>Numer rachunku dla EUR:</td>
                                    <td>PL 42 1140 1889 0000 3253 0300 1004</td>
                                </tr>
                                <tr>
                                    <td>Numer rachunku dla USD:</td>
                                    <td>PL 58 1140 1889 0000 3253 0300 1007</td>
                                </tr>
                                <tr>
                                    <td>SWIFT:</td>
                                    <td>BREXPLPWXXX</td>
                                </tr>
                                <tr>
                                    <td>Nazwa Banku:</td>
                                    <td>mBank S.A.</td>
                                </tr>
                            </table>
                            <p>W tytule przelewu należy wpisać swój login/nr zamówienia.s</p>
                        </section>
                        </div>
                        <section class="payments__payu">
                            <header>
                                <img src="${payu}" />
                                <h2>Płatność PayU</h2>
                            </header>
                            <p> Wybierz PayU jako sposób dokonania wpłaty, a na koniec procesu składania zamówienia wyświetli Ci się ekran, na którym zobaczysz listę banków. Wybierz na niej swój bank. Zostaniesz bezpośrednio przekierowany do strony banku. Po zalogowaniu do banku wystarczy zatwierdzić wyświetlony przelew. Realizacja Twojego zamówienia rozpocznie się, gdy tylko płatność zostanie u nas zaksięgowana - przeważnie trwa to zaledwie kilka minut. Po dokonaniu płatności w systemie PayU, otrzymasz od nas potwierdzenie złożenia zamówienia. Sporadycznie może dojść na stronach PayU do błędów, na które nie mamy wpływu. W razie dalszych pytań dotyczących płatności, skontaktuj się z naszym Biurem Obsługi Klienta. </p>
                            <img src="${banks}" />
                        </section>

                        <section class="payments__paypal">
                            <header>
                                <img src="${paypal}" />
                                <h2>Płatność PayPal</h2>
                            </header>
                            <p> Wybierz PayPal jako sposób dokonania wpłaty, a na koniec procesu składania zamówienia zostaniesz przekierowany bezpośrednio do systemu PayPal. Jeśli posiadasz konto w systemie PayPal, możesz się tam zalogować i potwierdzić płatność. Jeśli jesteś nowym klientem PayPal, możesz skorzystać z systemu jako gość lub utworzyć nowe konto PayPal, a następnie potwierdzić płatność. Realizacja Twojego zamówienia rozpocznie się, gdy tylko płatność zostanie u nas zaksięgowana - przeważnie trwa to zaledwie kilka minut. Po dokonaniu płatności w systemie PayPal, otrzymasz od nas potwierdzenie złożenia zamówienia. Sporadycznie może dojść na stronach PayPal do błędów, na które nie mamy wpływu. W razie dalszych pytań dotyczących płatności, skontaktuj się z naszym Biurem Obsługi Klienta. </p> 
                        </section>

                        <section class="payments__paypal">
                            <header>
                                <img src="${masterpass}" />
                                <h2>Płatność Masterpass</h2>
                            </header>
                            <p>Wybierz płatność Masterpass, a na koniec procesu składania zamówienia zostaniesz przekierowany bezpośrednio do systemu Masterpass. Najpierw zostaniesz poproszony o wybór portfela, następnie o zalogowanie. Realizacja Twojego zamówienia rozpocznie się, gdy tylko płatność zostanie u nas zaksięgowana - przeważnie trwa to jedynie kilka minut. Po dokonaniu płatności w systemie Masterpass, otrzymasz od nas potwierdzenie złożenia zamówienia. Zwróć jednak uwagę na to, że sporadycznie może dojść na stronach Masterpass do błędów, na które nie mamy wpływu. W razie dalszych pytań dotyczących płatności, skontaktuj się z naszym Biurem Obsługi Klienta. </p>
                        </section>
                        
                        <section class="payments__cashOnDelivery">
                            <img src="${wallet}" />
                            <h2>Płatność za pobraniem</h2>
                        </section>

                        <section class="payments__paypal">
                        <header>
                            <img src="${dpd}" />
                            <h2>(tylko na terenie Polski)</h2>
                        </header>
                        <p>Za zamówienie możesz zapłacić bezpośrednio przy odbiorze paczki od kuriera. Upewnij się, że podany adres jest prawidłowy i zawiera kompletne informacje potrzebne do doręczenia Ci paczki. Zwróć również uwagę na poprawność podanego numeru telefonu, gdyż ułatwi to firmie DPD kontakt z Tobą przed dostarczeniem paczki. Pamiętaj, aby przygotować wyliczoną kwotę płatności - kurier firmy DPD nie jest zobowiązany do wydawania reszty. Dodatkowo, warto przygotować kwotę nieco wcześniej - w wyniku intensywnej pracy naszego partnera logistycznego również w weekendy, może zdażyć się, że zamówienie składane pod koniec tygodnia dotrze do Ciebie już w poniedziałek. Kurier firmy DPD sprawi Ci wtedy miłą niespodziankę skracając czas oczekiwania na zamówienie. </p>
                        </section>
                    </div>
                    
                </section>
              </div>
            </div>
        `;
    }
}
export default Payments;