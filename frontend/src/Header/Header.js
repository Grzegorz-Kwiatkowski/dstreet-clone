import TopNav from "./components/TopNav";
import MenuNav from "./components/MenuNav";
import BottomNav from "./components/BottomNav";
import Help from "./components/Help";
import Newsletter from "./components/Newsletter";
import Complaints  from "./components/Complaints";


const Header = {
    render : ()=>{
        return `
        <div>
        
        <section class="header__top-nav">
            ${TopNav.render()}
            ${Help.render()}
            ${Newsletter.render()}
        </section> 
        <section class="header__menu-nav">
            ${MenuNav.render()}
        </section>
        <section class="header__bottom-nav">
            ${BottomNav.render()}
        </section>
        </div>`
    },
    after_render:()=>{
        
        document.getElementById("help__link").onclick = function() {
            document.getElementById("help").classList.toggle("active");
        }
        document.getElementById("newsletter__link").onclick = function() {
          document.getElementById("newsletter").classList.toggle("active");
        }
    }
}

export default Header;