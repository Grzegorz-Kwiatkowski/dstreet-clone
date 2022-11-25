import phone_black_icon from "../../../assets/images/icons/phone_black_24dp.svg"
import grid_view_black from "../../../assets/images/icons/grid_view_black_24dp.svg"

const Help = {
    render: () => {
       
        return `
            <div class="help" id="help">                                                                                                                                                                                                                                                                                                                 
                <section class="help__contact">
                    <h3>Potrzebujesz pomocy?</h3>
                    <p>
                        Nasza infolinia jest do Twojej dyspozycji od pon. do pt. w godz. 9:00-15:00
                    </p>
                    <span class="help__contact-icon">
                    
                    </span>
                    <a href="tel:+48713333222">42 090 09 09</a>
                    <small>Koszt połaczenia według taryfy operatora</small>
                </section>

                <section class="help__contact-info">
                <p>
                    Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w godzinach 9:00 - 16:00.
                    <br />
                    Na wiadomości otrzymane w soboty, niedziele oraz święta odpowiadamy najszybciej
                    jak to możliwe.
                </p>
                <p>
                    Biuro Obsługi Klienta:
                    <br />
                    <a href="mailto:sklep@dstreet.pl" class="help__contact-info-email">
                        sklep@dstreetstore.pl
                     </a>
                </p>
                <br />
                <p>
                    Jeśli potrzebujesz szybkiej informacji skorzystaj z poniższych linków:
                </p>
                <br />
                <ul>
                    <li><a href="/#/sledzenie-przesylek"> <span class="gridIcon"></span> Śledzenie przesyłek</a></li>
                    <li><a href="/#/koszty-i-czas-dostawy"><span class="gridIcon"></span> Koszty i czas dostawy</a></li>
                    <li><a href="/#/wymiany-zwroty-i-reklamacje"><span class="gridIcon"></span> Wymiany, zwroty i reklamacje</a></li>
                    <li><a href="/#/regulamin-sklepu"><span class="gridIcon"></span> Regulamin sklepu</a></li>
                    <li><a href="/#/faq"><span class="gridIcon"></span> Faq</a></li>
                    <li><a href="/#/polityka-prywatnosci"><span class="gridIcon"></span> Polityka prywatności</a></li>
                </ul>

                </section>

            </div>
        `;
    }
}

export default Help;