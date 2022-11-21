import TopNav from "./components/TopNav";
import MenuNav from "./components/MenuNav";
import BottomNav from "./components/BottomNav";

const Header = {
    render : ()=>{
        return `
        <div>
        <section class="header__top-nav">
            ${TopNav.render()}
        </section> 
        <section class="header__menu-nav">
            ${MenuNav.render()}
        </section>
        <section class="header__bottom-nav">
            ${BottomNav.render()}
        </section>
        </div>`
    }
}

export default Header;