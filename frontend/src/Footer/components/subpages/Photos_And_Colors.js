import photos_and_colors from "../../../../assets/images/photos-and-colors.jpg"

const PhotosAndColors = {
    render: ()=> {
        return `
        <div class="photos-and-colors">
            <div class="photos-and-colors__container">

                <section class="photos-and-colors__header">
                    <h1>Zdjęcia i kolory</h1>
                </section>

                <div class="photos-and-colors__content">
                    <section class="photos-and-colors__text">
                        <p>Nasz sklep i marka Dstreet dokłada wszelkich starań by odzwierciedlać naturalne kolory sprzedawanych towarów, jednak niektóre kolory na zdjęciach mogą przybierać inne odcienie niż w rzeczywistości - w zależności od rodzaju oświetlenia (światło dzienne lub sztuczne). W opisie towaru zawsze podajemy właściwy kolor towaru. Który jest taki jaki jest w rzeczywistości. </p>
                        <p>W trosce o bardzo dokładne zaprezentowanie towaru, wszystkie nasze zdjęcia mogą być powiększane, aby Klient mógł dokładnie obejrzeć jakość wykończenia oraz detale. Minimalne różnice kolorystyczne mogą wynikać z indywidualnych ustawień i kalibracji monitora używanego przez Klienta. </p>
                        <p>Wszystkie zdjęcia produktów znajdujące się w naszym sklepie robione są profesjonalnym sprzętem fotograficznym z użyciem lamp studyjnych. Zdjęcia prezentowane zdjęcia w ofercie przedstawiają rzeczywisty stan towaru. </p>
                        <p> Zdjęcia widoczne na stronie przedstawiają przykładową różnicę pomiędzy monitorami, kolorem rzeczywistym, a tym który może widzieć klient. </p>
                    </section>
                    <section class="photos-and-colors__image">
                        <img src="${photos_and_colors}" />
                    </section>
                </div>

                <section class="photos-and-colors__copyright">
                    <h1>| Prawa Autorskie: </h1>
                    <p> Dstreet jest właścicielem wszystkich zdjęć produktowych, grafik, logotypów oraz posiada do nich pełne prawa autorskie. Dstreet posiada również odpowiednie licencje do używania zdjęć wykorzystanych do tworzenia bannerów reklamowych. Ich kopiowanie, przerabianie, udostępnianie i publikowanie oraz wykorzystywanie w celach sprzedażowych jest zabronione i grozi sankcjami karnymi. Dstreet nie zezwala na ich używanie, rozpowszechnianie i dystrybuowanie bez wiedzy i zgody pisemnej pod rygorem roszczeń z tytułu łamania praw autorskich i dopuszczania się kradzieży własności intelektualnej. </p>
                </section>
            </div>
        </div>`;
    }
}
export default PhotosAndColors;