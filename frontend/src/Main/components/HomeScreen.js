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
                <h1>Dstreet.pl - Sklep odzie??owy z modn?? i tani?? odzie????</h1>
                <div>
                    <h3>Kurtki, bluzy, spodnie, koszule?</h3>
                    <p>Moda niejedno ma imi??. Od d??u??szego czasu nie czuje si?? w niej ??adnych ogranicze??. To ona pozwala wyra??a?? ludziom siebie. Swoje codzienne stylizacje cz??sto wybieramy si?? w zale??no??ci od nastroju, pogody czy ch??ci. Rzadko kiedy ocenia si?? jednak kogo?? po tym, jak jest ubrany. Raczej zastanawiamy si??, co dany styl mo??e powiedzie?? o tej konkretnej osobie, kt??ra przyci??gn????a nasz wzrok. Indywidualno???? to co??, co dzi?? si?? bardzo ceni i to w??a??nie w modzie jest magiczne - ka??dy mo??e by?? inny. Dlatego ta wolno???? wyboru ubioru jest wspania??a. Niezale??nie od tego co preferujesz w ubiorze - czy to b??d?? bluzy damskie czy m??skie, czy eleganckie marynarki, spodnie dresowe lub jeansy czy bluzki z kapturem, czy koszule we wzory - zawsze mo??esz czu?? si?? dobrze. </p>
                </div>
                <div>
                    <h3>Ale czym ona w zasadzie jest?</h3>
                    <p>To nie tylko ubrania takie jak kurtki przej??ciowe czy legginsy ale to te?? obuwie i dodatki - torebki czy bi??uteria. Wyczucie stylu to co??, za co mo??na pochwali?? niewiele os??b, bo dopasowanie wszystkiego ze sob?? nie zawsze jest takie proste, jak mo??e si?? wydawa??. Do wyboru jest w ko??cu masa r????nych ubra??. Nie warto jednak si?? zniech??ca??, bo moda ma by?? przede wszystkim zabaw?? i sprawia??, ??e to osoba, kt??ra nosi dane rzeczy, b??dzie si?? w nich dobrze czu??a.</p>
                </div>
                <div>
                    <h3>Damska garderoba</h3>
                    <p>Z pewno??ci?? nie jest ??atwa w skompletowaniu. Obejmuje takie rzeczy, jak:</p>
                    <ul>
                        <li>kurtki (przej??ciowe, sk??rzane, jeansowe, ramoneski, parki, bomberki czy zimowe);</li>
                        <li>p??aszcze (jedno- czy dwurz??dowe, kr??tkie i d??ugie);</li>
                        <li>kamizelki;</li>
                        <li>sukienki (g??adkie, we wzory, maxi czy mini);</li>
                        <li>sp??dnice (jeansowe, plisowane, klasyczne);</li>
                        <li>spodnie (od jeans??w, przez dresy i legginsy, a?? po te casualowe czy spodnie moro);</li>
                        <li>swetry (rozpinane, wk??adane przez g??ow?? czy golfy);</li>
                        <li>body;</li>
                        <li>bluzki (wzorzyste lub g??adkie);</li>
                        <li>T-shirty;</li>
                        <li>koszule;</li>
                        <li>obuwie (np. botki czy sneakersy);</li>
                        <li>akcesoria.</li>
                    </ul>
                    <p>Jak nie zwariowa?? z wyborem? Uzupe??niaj??c szaf??, warto postawi?? najpierw na klasyk??, kt??ra b??dzie uniwersalna i umo??liwi dobranie stylizacji niemal na ka??d?? okazj??. Kiedy garderoba zostanie ju?? od??wie??ona o rzeczy proste, mo??na spr??bowa?? czego?? bardziej szalonego, np. r????nych wzor??w, kt??re pozwol?? na wyra??anie siebie w bardziej nieformalnych sytuacjach.</p>
                </div>
                <div>
                    <h3>Garderoba m??ska</h3>
                    <p>Wbrew pozorom, jej uzupe??nienie r??wnie?? nie jest proste. Moda m??ska ma sporo do zaoferowania i wcale nie musi by?? nudna. Panowie r??wnie?? maj?? spory wyb??r, je??li chodzi o ubrania i tylko od nich zale??y, czy chc?? z niego skorzysta??. Poza eleganckimi spodniami i koszulami, warto zaopatrzy?? si?? w sweter i bluz?? na ch??odniejsze wieczory czy marynark?? na specjaln?? okazj??. Na co dzie?? warto postawi?? na koszulki, ale wyb??r jest ca??kiem spory - s?? te g??adkie i z nadrukiem, longsleevy, tank topy czy polo. W kwestii spodni, wyb??r znowu jest spory - eleganckie, jeansy, joggery, dresy... Z pewno??ci?? ka??dy m????czyzna, niezale??nie od tego, czy nosi si?? na elegancko czy na sportowo, znajdzie co?? dla siebie.</p>
                </div>
                <div>
                    <h3>Warto sprawi?? sobie prezent</h3>
                    <p>Od??wie??ona garderoba, w kt??rej znajduj?? si?? modne spodnie czy inne pi??kne ubrania to co??, co z pewno??ci?? poprawi humor ka??demu! Warto po??wi??ci?? troch?? czasu i obejrze?? proponowane przez sklep produkty, a potem sprawi?? sobie co?? nowego. Moda nie tylko sprawia, ??e czujemy si?? pi??kniejsi i bardziej atrakcyjni. Poprawia ona nasze samopoczucie, ale te?? du??o o nas m??wi. Warto zawsze wygl??da?? schludnie i zadbanie, dzi??ki czemu b??dziemy lepiej postrzegani przez inne osoby.</p>
                    <p>Moda m??ska to wbrew pozorom szeroka dziedzina - dzi?? m????czyzna spe??nia si?? w wielu rolach i potrzebuje bardzo zr????nicowanej garderoby. Moda to nie tylko ubrania - to styl ??ycia. Ubrania m??skie z naszej oferty spe??niaj?? wszystkie wymogi nawet najbardziej wymagaj??cych klient??w. Gwarantujemy wysok?? jako???? i szeroki wyb??r produkt??w, tak by ka??dy, bez wzgl??du na wiek i upodobania, m??g?? stworzy?? sw??j idealny outfit. Do niedawna w m??skich szafach dominowa??y nudne formy i kolory. Teraz panowie mog?? pozwoli?? sobie na wi??cej swobody, a nawet na odrobin?? szale??stwa. Nikogo ju?? nie dziwi t-shirt za??o??ony do garnituru czy trampki do eleganckiej marynarki. Na ulicach przesta??y dominowa?? smutne szaro??ci. Podstawowa odzie?? m??ska nie ogranicza si?? dzi?? do jeans??w, t-shirtu i jednego czarnego garnituru zak??adanego na specjalne okazje. Szafa wsp????czesnego m????czyzny to odzie?? sportowa, r????nokolorowe garnitury, marynarki, wzorzyste t-shirty i koszule, spodnie o r????norodnych krojach i fakturach, swetry, p??aszcze i oczywi??cie dodatki. Z tak?? baz?? mo??na pozwoli?? sobie na kreatywno????. </p>
                    <p>W doborze garderoby trzeba pami??ta??, ??e ubrania ju?? dawno przesta??y pe??ni?? jedynie funkcj?? u??ytkow??, a sta??y si?? narz??dziem autoekspresji. Pozornie wolno wszystko - mo??na pu??ci?? wodze fantazji, jednak z zachowaniem dobrego smaku. Moda to przecie?? spos??b na wyra??enie siebie, w??asnego, niepowtarzalnego stylu. Do modnej odzie??y m??skiej zaliczaj?? si?? nawet stroje sportowe, w tym dresy, kt??re niespodziewanie wysz??y z si??owni na ulice. Dot??d kojarzy??y si?? g????wnie z przedstawicielami subkultur, jednak dzi?? nikt nie wstydzi si?? za??o??y?? str??j w sportowym stylu na spotkanie z przyjaci????mi. Jak wi??c wygl??da modny m????czyzna? Panowie cz??sto boj?? si?? mody interpretuj??c j?? jako ??lepe pod????anie za dziwny trendami, wbrew w??asnym przekonaniom. A modny m????czyzna to przede wszystkim m????czyzna dobrze ubrany. Jego styl jest sp??jny z osobowo??ci??, a ubrania, kt??re ma na sobie s?? wysokiej jako??ci. </p>
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