const TopNav = {
    render: () => {
        return `
        <div class="top-nav">
        <nav class="top-nav__nav">

            <section class="top-nav__section">
                <span  class="top-nav__link top-nav__link--border active__link " id="help__link">
                    Pomoc
                </span>
                <span  class="top-nav__link top-nav__link--border active__link " id="newsletter__link">
                    Newsletter
                </span>
                <span  class="top-nav__link">
                    Infolinia 00 000 00 00
                </span>
            </section>

            <section class="top-nav__section">
                <a href="/#/delivery" class="top-nav__link" id="delivery__link">Przesyłka gratis</a>
            </section>

            <section class="top-nav__section">
                <a href="/#/returns-and-complaints" class="top-nav__link">14-dniowe prawo zwrotu</a>
            </section>

        </nav>
    </div >
        `;
    }
}

export default TopNav;