import logo from "../logo_dstreet.png"
import favourite from "../../../assets/images/favourite.png"
import shopping_cart from "../../../assets/images/shopping-cart.png"
import user from "../../../assets/images/user.png"

const MenuNav = {
    render: () => {
        return `
        <div class="menu-nav">

           <section class="menu-nav__logo">
           <a href="/">
           <img src="${logo}" alt="logo_dstreet" />

           </a>
            </section>

            <section class="menu-nav__search-bar">
                <div class="menu-nav__search-bar-input-wrapper">
                    <div class="menu-nav__search-bar-input">
                        <input type="text" placeholder="Wyszukiwanie" />
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </section>

            <section class="menu-nav__actions">
                <div class="menu-nav__actions-login">
                    <img src="${user}" alt="login"/>
                    <span>Zaloguj</span>
                </div>
                <div class="menu-nav__actions-favourite">
                    <img src="${favourite}" alt="favourite"/>
                    <span>Ulubione</span>
                </div>
                <div class="menu-nav__actions-basket">
                    <img src="${shopping_cart}" alt="shopping cart" />
                    <span>Koszyk</span>
                </div>
            </section>
            
        </div>
        `;
    }
}

export default MenuNav;