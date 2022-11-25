import NewsletterForm from "./NewsletterForm";


const Newsletter = {
    render: () => {

        return `
        <div class="newsletter" id="newsletter">
           
            <section class="newsletter__discount">
                <span class="newsletter__discount--small">Zapisz się do</span><br />
                <span class="newsletter__discount--big">Newslettera</span><br />
                <span class="newsletter__discount--medium">i odbierz
            <span class="newsletter__discount--biggest">20
                <small class="newsletter__discount--smaller">zł</small>
                    </span>
                </span>
            </section>
            ${NewsletterForm.render()}
        </div >
    `;
    },
    after_render: ()=> {
        NewsletterForm.after_render();
    }
}

export default Newsletter;