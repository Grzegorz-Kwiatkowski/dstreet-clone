import Carousel from "./Carousel";
import { apiUrl } from "../../config";

const HomeScreen = {
    render: ()=>{
       
        return `
        <div class="homeScreen">
            ${Carousel.render()}

            <section class="homeScreen__gallery">
                <div class="homeScreen__gallery-wrapper">
                    <div class="sweater-for-her">
                        <div class="bg-black"></div>
                        <img src="${apiUrl}/images/home-page/swetry-ona.jpg" />
                    </div>
                    <div class="jacket-for-her">
                        <div class="bg-black"></div>
                        <img src="${apiUrl}/images/home-page/kurtki-ona.jpg" />
                    </div>
                    <div class="tracksuit-for-her">
                        <div class="bg-black"></div>    
                        <img src="${apiUrl}/images/home-page/dresy-ona.jpg" />
                    </div>
                    <div class="jacket-for-him">
                        <div class="bg-black"></div>
                        <img src="${apiUrl}/images/home-page/kurtki-zimowe-on.jpg" />
                    </div>
                    <div class="blouse-for-him">
                        <div class="bg-black"></div>
                        <img src="${apiUrl}/images/home-page/bluzy-on.jpg" />
                    </div>
                    <div class="waistcoat-for-him">
                        <div class="bg-black"></div>
                        <img src="${apiUrl}/images/home-page/kamizelki-on.jpg" />
                    </div>
                    <div class="offer-image">
                        <div class="offer-image-links">
                            <a href="https://dstreet.pl/autumn-winter-sale-80"></a>
                            <a href="https://dstreet.pl/Bestseller-sbestseller-pol.html" ></a>
                        </div>
                        <img src="${apiUrl}/images/home-page/sale.jpg" />
                    </div>
                </div>
            </section>

            <section class="homeScreen__content">
                <div class="homeScreen__content-wrapper">
                <h1>Dstreet.pl - Sklep odzieżowy z modną i tanią odzieżą</h1>
                <div>
                    <h3>Kurtki, bluzy, spodnie, koszule?</h3>
                    <p>Moda niejedno ma imię. Od dłuższego czasu nie czuje się w niej żadnych ograniczeń. To ona pozwala wyrażać ludziom siebie. Swoje codzienne stylizacje często wybieramy się w zależności od nastroju, pogody czy chęci. Rzadko kiedy ocenia się jednak kogoś po tym, jak jest ubrany. Raczej zastanawiamy się, co dany styl może powiedzieć o tej konkretnej osobie, która przyciągnęła nasz wzrok. Indywidualność to coś, co dziś się bardzo ceni i to właśnie w modzie jest magiczne - każdy może być inny. Dlatego ta wolność wyboru ubioru jest wspaniała. Niezależnie od tego co preferujesz w ubiorze - czy to będą bluzy damskie czy męskie, czy eleganckie marynarki, spodnie dresowe lub jeansy czy bluzki z kapturem, czy koszule we wzory - zawsze możesz czuć się dobrze. </p>
                </div>
                <div>
                    <h3>Ale czym ona w zasadzie jest?</h3>
                    <p>To nie tylko ubrania takie jak kurtki przejściowe czy legginsy ale to też obuwie i dodatki - torebki czy biżuteria. Wyczucie stylu to coś, za co można pochwalić niewiele osób, bo dopasowanie wszystkiego ze sobą nie zawsze jest takie proste, jak może się wydawać. Do wyboru jest w końcu masa różnych ubrań. Nie warto jednak się zniechęcać, bo moda ma być przede wszystkim zabawą i sprawiać, że to osoba, która nosi dane rzeczy, będzie się w nich dobrze czuła.</p>
                </div>
                <div>
                    <h3>Damska garderoba</h3>
                    <p>Z pewnością nie jest łatwa w skompletowaniu. Obejmuje takie rzeczy, jak:</p>
                    <ul>
                        <li>kurtki (przejściowe, skórzane, jeansowe, ramoneski, parki, bomberki czy zimowe);</li>
                        <li>płaszcze (jedno- czy dwurzędowe, krótkie i długie);</li>
                        <li>kamizelki;</li>
                        <li>sukienki (gładkie, we wzory, maxi czy mini);</li>
                        <li>spódnice (jeansowe, plisowane, klasyczne);</li>
                        <li>spodnie (od jeansów, przez dresy i legginsy, aż po te casualowe czy spodnie moro);</li>
                        <li>swetry (rozpinane, wkładane przez głowę czy golfy);</li>
                        <li>body;</li>
                        <li>bluzki (wzorzyste lub gładkie);</li>
                        <li>T-shirty;</li>
                        <li>koszule;</li>
                        <li>obuwie (np. botki czy sneakersy);</li>
                        <li>akcesoria.</li>
                    </ul>
                    <p>Jak nie zwariować z wyborem? Uzupełniając szafę, warto postawić najpierw na klasykę, która będzie uniwersalna i umożliwi dobranie stylizacji niemal na każdą okazję. Kiedy garderoba zostanie już odświeżona o rzeczy proste, można spróbować czegoś bardziej szalonego, np. różnych wzorów, które pozwolą na wyrażanie siebie w bardziej nieformalnych sytuacjach.</p>
                </div>
                <div>
                    <h3>Garderoba męska</h3>
                    <p>Wbrew pozorom, jej uzupełnienie również nie jest proste. Moda męska ma sporo do zaoferowania i wcale nie musi być nudna. Panowie również mają spory wybór, jeśli chodzi o ubrania i tylko od nich zależy, czy chcą z niego skorzystać. Poza eleganckimi spodniami i koszulami, warto zaopatrzyć się w sweter i bluzę na chłodniejsze wieczory czy marynarkę na specjalną okazję. Na co dzień warto postawić na koszulki, ale wybór jest całkiem spory - są te gładkie i z nadrukiem, longsleevy, tank topy czy polo. W kwestii spodni, wybór znowu jest spory - eleganckie, jeansy, joggery, dresy... Z pewnością każdy mężczyzna, niezależnie od tego, czy nosi się na elegancko czy na sportowo, znajdzie coś dla siebie.</p>
                </div>
                <div>
                    <h3>Warto sprawić sobie prezent</h3>
                    <p>Odświeżona garderoba, w której znajdują się modne spodnie czy inne piękne ubrania to coś, co z pewnością poprawi humor każdemu! Warto poświęcić trochę czasu i obejrzeć proponowane przez sklep produkty, a potem sprawić sobie coś nowego. Moda nie tylko sprawia, że czujemy się piękniejsi i bardziej atrakcyjni. Poprawia ona nasze samopoczucie, ale też dużo o nas mówi. Warto zawsze wyglądać schludnie i zadbanie, dzięki czemu będziemy lepiej postrzegani przez inne osoby.</p>
                    <p>Moda męska to wbrew pozorom szeroka dziedzina - dziś mężczyzna spełnia się w wielu rolach i potrzebuje bardzo zróżnicowanej garderoby. Moda to nie tylko ubrania - to styl życia. Ubrania męskie z naszej oferty spełniają wszystkie wymogi nawet najbardziej wymagających klientów. Gwarantujemy wysoką jakość i szeroki wybór produktów, tak by każdy, bez względu na wiek i upodobania, mógł stworzyć swój idealny outfit. Do niedawna w męskich szafach dominowały nudne formy i kolory. Teraz panowie mogą pozwolić sobie na więcej swobody, a nawet na odrobinę szaleństwa. Nikogo już nie dziwi t-shirt założony do garnituru czy trampki do eleganckiej marynarki. Na ulicach przestały dominować smutne szarości. Podstawowa odzież męska nie ogranicza się dziś do jeansów, t-shirtu i jednego czarnego garnituru zakładanego na specjalne okazje. Szafa współczesnego mężczyzny to odzież sportowa, różnokolorowe garnitury, marynarki, wzorzyste t-shirty i koszule, spodnie o różnorodnych krojach i fakturach, swetry, płaszcze i oczywiście dodatki. Z taką bazą można pozwolić sobie na kreatywność. </p>
                    <p>W doborze garderoby trzeba pamiętać, że ubrania już dawno przestały pełnić jedynie funkcję użytkową, a stały się narzędziem autoekspresji. Pozornie wolno wszystko - można puścić wodze fantazji, jednak z zachowaniem dobrego smaku. Moda to przecież sposób na wyrażenie siebie, własnego, niepowtarzalnego stylu. Do modnej odzieży męskiej zaliczają się nawet stroje sportowe, w tym dresy, które niespodziewanie wyszły z siłowni na ulice. Dotąd kojarzyły się głównie z przedstawicielami subkultur, jednak dziś nikt nie wstydzi się założyć strój w sportowym stylu na spotkanie z przyjaciółmi. Jak więc wygląda modny mężczyzna? Panowie często boją się mody interpretując ją jako ślepe podążanie za dziwny trendami, wbrew własnym przekonaniom. A modny mężczyzna to przede wszystkim mężczyzna dobrze ubrany. Jego styl jest spójny z osobowością, a ubrania, które ma na sobie są wysokiej jakości. </p>
                </div>

                </div>
            </section>
        </div>`
    },
    after_render:()=>{
        Carousel.after_render();
    }
}

export default HomeScreen;