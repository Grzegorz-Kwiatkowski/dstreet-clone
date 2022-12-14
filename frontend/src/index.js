import '@fortawesome/fontawesome-free/js/fontawesome'


import './style.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomeScreen from './Main/components/HomeScreen';
import Delivery from './Header/components/Delivery';
import Complaints from './Header/components/Complaints'

/*Footer*/
import AboutUs from "./Footer/components/subpages/AboutUs";
import Contact from './Footer/components/subpages/Contact';
import DiscountProgram from './Footer/components/subpages/DiscountProgram';
import Sizing from './Footer/components/subpages/Sizing';
import PrivacyPolicy from './Footer/components/subpages/PrivacyPolicy';
import HowToBuy from './Footer/components/subpages/HowToBuy';
import PhotosAndColors from './Footer/components/subpages/Photos_And_Colors'
import Payments from "./Footer/components/subpages/Payments"
import DeliveryTime from "./Footer/components/subpages/DeliveryTime"
import DeliveryTracking from './Footer/components/subpages/DeliveryTracking';


const Router = async () => {
    const routes = {
        "/":HomeScreen,
        "/delivery":Delivery,
        "/returns-and-complaints":Complaints,
        "/about-us":AboutUs,
        "/contact":Contact,
        "/discount-program":DiscountProgram,
        "/sizing":Sizing,
        "/privacy-policy":PrivacyPolicy,
        "/how-to-buy":HowToBuy,
        "/photos-and-colors":PhotosAndColors,
        "/payment-methods":Payments,
        "/delivery-time":DeliveryTime,
        "/delivery-tracking":DeliveryTracking
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
HomeScreen.after_render();

const footer = document.getElementById("footer-container");
footer.innerHTML = Footer.render();

}

window.addEventListener("load",Router);
window.addEventListener('hashchange', Router);