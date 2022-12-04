import NavigationFooter from "./components/NavigationFooter"
import SocialMedia from "./components/SocialMedia"


const Footer = {
    render : ()=> {
        return `
            <div id="footer">
                ${SocialMedia.render()}
                ${NavigationFooter.render()}
            </div>
        `;
    }
}

export default Footer;