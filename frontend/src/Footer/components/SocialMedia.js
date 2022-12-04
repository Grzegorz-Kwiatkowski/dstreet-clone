import { apiUrl } from "../../config";

const SocialMedia = {
    render: ()=>{
        return `
        <div class="socialMedia">
            <a href="https://www.facebook.com/dstreetpl/">
                <img src="${apiUrl}/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/dstreetpl/">
                <img src="${apiUrl}/images/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@dstreet.pl">
                <img src="${apiUrl}/images/tiktok.png" alt="TikTok" />
            </a>
            <a href="https://dstreet.pl/blog-pol.phtml">
                <img src="${apiUrl}/images/blog.png" alt="Blog" />
            </a>
        </div>
        `;
    }
}

export default SocialMedia;