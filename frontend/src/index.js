import './style.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomeScreen from './Main/components/HomeScreen';


const header = document.getElementById("header-container");
header.innerHTML = Header.render();

const main = document.getElementById("main-container");
main.innerHTML = HomeScreen.render();

const footer = document.getElementById("footer-container");
footer.innerHTML = Footer.render();