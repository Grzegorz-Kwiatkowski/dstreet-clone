import './style.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomeScreen from './Main/components/HomeScreen';
import Delivery from './Header/components/Delivery';
import Complaints from './Header/components/Complaints'

const Router = async () => {
    const routes = {
        "/":HomeScreen,
        "/delivery":Delivery,
        "/returns-and-complaints":Complaints
    }

const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();

    const request = url.split('/');
    return {
        resource: request[1],
        id: request[2],
        action: request[3],
    };
};

const request = parseRequestUrl();
console.log(request)

const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');

const screen = routes[parseUrl] ? routes[parseUrl] : "Error";


const header = document.getElementById("header-container");
header.innerHTML = Header.render();
await Header.after_render();

const main = document.getElementById("main-container");
main.innerHTML = await screen.render();

const footer = document.getElementById("footer-container");
footer.innerHTML = Footer.render();

}

window.addEventListener("load",Router);
window.addEventListener('hashchange', Router);