import { apiUrl } from "../../../config";

const AboutUs =  {
    render:()=> {
        return `
        <div class="aboutUs">
            <div class="aboutUs__container">

                <section class="aboutUs__header">
                    <h1>O Nas</h1>
                </section>

                <section class="aboutUs__content">
                    <div class="aboutUs__content-description">
                        <img src="${apiUrl}/images/dstreet_logo.jpg" />
                        <p>
                            Dstreet to ogólnokrajowy portal z odzieżą męską. Od kilku lat sukcesywnie spełniamy niebanalne wymagania ludzi aktywnych, ceniących wygodę, jakosć i styl. Kierując się uczciwością, lojalnością oraz profesjonalizmem udało nam się zdobyć szerokie grono zadowolonych Klientów. Jesteśmy obecni w świadmości setek tysięcy klientów z całej Polski, którzy wybrali już nasze produkty. 
                        </p>
                        <p>
                            W naszym sklepie znajdziecie Państwo produkty pochodzące wyłącznie od europejskich dostawców, które są produkowane głównie w Europie. Dokonujemy wszelkich starań, aby ceny za oferowaną przez nas odzież były przystępne, gwarantując jednocześnie ich dobrą jakość. Podążamy za najnowszymi trendami mody i na bieżąco pragniemy dostarczać najnowsze dostępne kolekcje, sprzyjające współczesnym trendom obowiązującym w świecie mody. 
                        </p>
                        <p>
                            Zespół wyszkolonych pracowników tworzy mocny fundament firmy, na który składa się wiele kreatywnych pomysłów i solidnych rozwiązań. Funkcjonujemy w oparciu o najwyższe standardy sprzedaży gwarantujące efektywne działanie. Nasz zespół intensywnie pracuje nad tym, aby zakupione towary docierały do Państwa szybko i w nienaruszonym stanie. 
                        </p>
                    </div>
                    <div class="aboutUs__content-image">
                        <img src="${apiUrl}/images/about-us.jpg" />
                    </div>
                </section>

                <section class="aboutUs__content-benefits">
                    <h1>Dlaczego warto robić zakupy w Dstreet?</h1>
                    <aside>
                        <h2>| Niskie ceny towarów</h2>
                        <p>Oferujemy towary w najkorzystniejszych cenach na rynku. Negocjujemy najniższe stawki zakupu towarów bezpośrednio od producentów. Codziennie oferujemy setki produktów w najatrakcyjniejszych cenach w internecie. </p>
                    </aside>
                    <aside>
                        <h2>| Okazje, rabaty i zniżki</h2>
                        <p>Klienci Dstreet nieustannie otrzymują szereg zniżek oraz rabatów w rozmaitych promocjach i akcjach sezonowych. Informacje o wszystkich tego typu eventach wysyłane są drogą mailową oraz poprzez powiadomienia push. W związku z tym, mocno zachęcamy do subskrypcji Newslettera Dstreet. </p>
                    </aside>
                    <aside>
                        <h2>| Zaufanie i komfort</h2>
                        <p>Wygodne zakupy w internecie i bezpieczeństwo transakcji stanowią dla nas najwyższy priorytet. Gwarantujemy najwyższej jakości usługi takie jak: </p>
                        <ul>
                            <li>ekspresowa wysyłka każdego dnia roboczego</li>
                            <li>możliwość śledzenia przesyłki w firmie kurierskiej</li>
                            <li>wygodne i szybkie sposoby płatności</li>
                            <li>darmowa wysyłka przy zakupach powyżej 299 zł</li>
                        </ul>
                    </aside>
                    <aside>
                        <h2>| Gwarancja bezpieczeństwa zakupów</h2>
                        <p>Ogromny nacisk kładziemy na ochronę danych osobowych, dlatego wszystkie transakcje są w 100% bezpieczne. Każda sprzedaż jest ubezpieczona na 10 000 zł. </p>
                    </aside>
                    <aside>
                        <h2>| Profesjonalna obsługa klienta</h2>
                        <p>Nasi specjaliści udzielą Państwu szczegółowych informacji na temat produktów, pomogą dobrać rozmiar oraz krój i odpowiedzą na wszelkie pytania związane z naszym asortymenem, procesem zakupowym i kwestiami technicznymi. Zapraszamy do kontaktu telefonicznego lub e-mailowego. </p>
                    </aside>
                    <aside>
                        <h2>| Moda przystępna jak nigdy!</h2>
                        <p>Zakupy można zrobić w naszym sklepie zaledwie w kilka minut. System jest intuicyjny i prosty w obsłudze. Formularz danych osobowych przy realizacji zawiera tylko niezbędne dane i nie zabiera Państwa cennego czasu. Zachęcamy również do zapoznania się z naszymi wskazówkami dotyczącymi dobierania rozmiaru oraz procedury zamawiania towarów.   </p>
                    </aside>
                    
                </section>
               
            </div>
        </div>`;
    }
}

export default AboutUs;