


const NavigationFooter = {
    render: ()=>{
        return `
        <div class="navigationFooter">
        <dl>
            <dt>Informacje</dt>
            <dd><a href="/#/about-us">O Dstreet</a></dd>
            <dd><a href="/#/contact">Kontakt</a></dd>
            <dd><a href="/#/privacy-policy">Polityka Prywatności</a></dd>
            <dd><a href="/#/discount-program">Program Rabatowy</a></dd>
        </dl>
        <dl>
            <dt>Obsługa klienta</dt>
            <dd><a href="/#/returns-and-complaints">Zwroty i reklamacje</a></dd>
            <dd><a href="/#/sizing">Jak dobrać rozmiar</a></dd>
            <dd><a href="/#/how-to-buy">Jak kupować</a></dd>
            <dd><a href="/#/photos-and-colors">Zdjęcia i kolory</a></dd>
        </dl>
        <dl>
            <dt>Dostawa i płatność</dt>
            <dd><a href="/#/payment-methods">Metody płatności</a></dd>
            <dd><a href="/#/delivery-time">Koszty i czas dostawy</a></dd>
            <dd><a href="/#/delivery-tracking">Śledzenie przesyłek</a></dd>
        </dl>
        <dl>
            <dt>Moje konto</dt>
            <dd>Zarejestruj się</dd>
            <dd>Moje zamówienia</dd>
            <dd>Koszyk</dd>
            <dd>Ulubione</dd>
        </dl>
        <dl>
            <dt>Infolinia</dt>
            <dd class="navigationFooter__phone">42 278 44 44</dd>
        </dl>
        </div>
        `;
    }

}

export default NavigationFooter;