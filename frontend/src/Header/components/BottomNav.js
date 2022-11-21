
const BottomNav = {
    
    render:()=>{
        return `
        <div class="bottom-nav">
            <ol class="bottom-nav__category-list-wrapper">
                <li class="bottom-nav__category" >Nowości <span id="news_bg_hover"></span>
                </li>

                <li class="bottom-nav__category">Odzież męska <span id="man_bg_hover"></span>
                </li>

                <li class="bottom-nav__category">Odzież damska <span id="woman_bg_hover"></span>
                </li>

                <li class="bottom-nav__category">Obuwie <span id="shoes_bg_hover"></span>
                </li>
                <li class="bottom-nav__category">Autumn Sale -80% <span id="items_bg_hover"></span></li>
                <li class="bottom-nav__category">Bestsellery <span id="end_coll_bg_hover"></span></li>
            </ol>
        </div>
        `;
    },
}

export default BottomNav;