import sizing_1 from "../../../../assets/images/sizing-1.jpg"
import sizing_2 from "../../../../assets/images/sizing-2.jpg"

const Sizing = {
    render : ()=> {
        return `
        <div class="sizing">
            <div class="sizing__container">
                <section class="sizing__header">
                <h1>Jak dobrać rozmiar?</h1>
                </section>

                <section class="sizing__wrapper">
                    <section class="sizing__wrapper-text">
                        <p>Sklep Dstreet oferuje Państwu ubrania wielu producentów, dlatego nie należy sugerować się tylko rozmiarem z metki, który podawany jest w opisie towaru. Większość produktów posiada swoją własną rozmiarówkę. </p>
                        <p>Posiadamy własny standard mierzenia odzieży. Każdy produkt jest starannie mierzony przez wykfalifikowanych pracowników według naszych instrukcji mierzenia i notowany w tabeli rozmiarów zawsze dostępnej na karcie produktu. Wszystkie produkty w naszym sklepie są mierzone:</p>
                            <ul>
                                <li>na płasko,</li>
                                <li>bez rozciągania,</li>
                                <li>zgodnie z instrukcją mierzenia.</li>
                            </ul>
                        <p>W celu idealnego doboru rozmiaru proponujemy zmierzyć swoje dotychczas noszone ubrania, w których czujecie się najwygodniej. Jest to zdecydowanie lepsze rozwiązanie od „mierzenia się”. Na tej stronie, mogą Państwo zapoznać się z przykładowymi instrukcjami mierzenia, oraz tabelą rozmiarów. </p>
                        <p>Przy kupowaniu odzieży należy zawsze sugerować się tabelą umieszczoną w opisie produktu! </p>
                    </section>
                    <section class="sizing__wrapper-image">
                        <img src="${sizing_1}" />
                    </section>
                </section>

                <section class="sizing__image">
                    <img src=${sizing_2} />
                    <p>Przykładowa tabela rozmiarów znajdująca się na karcie produktu </p>
                </section>

                <section class="sizing__info">
                    <h2>Zasady mierzenia:</h2>
                    <ul>
                        <li>Ubrania mierzymy od przodu, zapięte na guziki / suwak (jeśli takowe posiadają).</li>
                        <li>Ważne! Aby otrzymać obwód podane wymiary mnożymy x2.</li>
                        <li>Każdy produkt staramy się mierzyć jak najdokładniej. Mierzona jest tylko jedna sztuka z danego modelu oraz rozmiaru, dlatego mogą wystąpić minimalne różnice w wymiarach podanych w tabeli (tolerancja do +/- 2 cm).</li>
                        <li>Ponieważ nie gwarantujemy, że każda kupiona rzecz w takim samym rozmiarze z tego samego modelu, posiada identyczne wymiary, większe różnice w wymiarach są rozpatrywane przez nas w formie reklamacji.</li>
                    </ul>
                </section>
            </div>
        </div>`;
    }
}

export default Sizing;