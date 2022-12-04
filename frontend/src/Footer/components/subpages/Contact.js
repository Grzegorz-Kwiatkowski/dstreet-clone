const Contact = {
    render:()=>{
      
        return `
            <div class="contact">
                <div class="contact__container">
                    <section class="contact__header">
                        <h1>Biuro Obsługi Klienta</h1>
                    </section>
                    
                    <div class="contact__options">

                        <section class="contact__options-form">
                            <h2>Napisz do Nas</h2>
                            <form  method="post" id="contact_form">
                                <ul>
                                    <li>
                                        <label>Twój email : </label>
                                        <input type="email" name="user_email" />
                                    </li>
                                    <li>
                                        <label>Temat : </label>
                                        <select>
                                            <option value="Pytanie o produkty">Pytanie o produkty</option>
                                            <option value="Wymiana produktów">Wymiana produktów</option>
                                            <option value="Reklamacja produktów">Reklamacja produktów</option>
                                            <option value="Zwrot produktów">Zwrot produktów</option>
                                            <option value="Współpraca z Dstreet.pl">Współpraca z Dstreet.pl</option>
                                            <option value="Inny temat">Inny temat</option>
                                        </select>
                                    </li>
                                    <li>
                                        <label>Treść listu : </label>
                                        <textarea name="user_message"></textarea>
                                    </li>
                                    <li>
                                        <button type="submit" value="Submit">Submit</button>
                                    </li>
                                </ul>
                                
                            </form>
                        </section>

                        <section class="contact__options-address">
                            <aside>
                                <header>
                                    <h2>Kontakt</h2>
                                </header>
                                <table>
                                    <tr>
                                        <td>tel : </td>
                                        <td>42 278 44 44</td>
                                    </tr>
                                    <tr>
                                        <td>e-mail : </td>
                                        <td> sklep@dstreetonline.pl</td>
                                    </tr>
                                    <tr>
                                        <td>pon. - pt. w godz.</td>
                                        <td>08:00-15:00</td>
                                    </tr>
                                </table>
                            </aside>
                            <aside>
                                <header>
                                    <h2>Adres</h2>
                                </header>
                                <address>
                                    <p>"D-TEX" Sp. z o.o. <br/>
                                    ul. Jana Długosza 5 <br/>
                                    98-300 Wieluń </p>
                                </address>
                            </aside>
                        </section>

                        <section class="contact__options-data">
                        <table>
                            <caption>Dane księgowe</caption>
                            <tr>
                                <td>NIP.</td>
                                <td>PL8322080434</td>
                            </tr>
                            <tr>
                                <td>REGON: </td>
                                <td>367847166</td>
                            </tr>
                            <tr>
                                <td>KRS:</td>
                                <td>0000687728</td>
                            </tr>
                            <tr>
                                <td>Numer konta do wpłat:</td>
                                <td>69 1140 1889 0000 3253 0300 1003</td>
                            </tr>
                            <tr>
                                <td>SWIFT: </td>
                                <td>BREXPLPWXXX</td>
                            </tr>
                            <tr>
                                <td>Nasz bank: </td>
                                <td>mBank</td>
                            </tr>
                        </table>
                        </section>
                        
                        <section class="contact__options-email">
                            <div>
                                <header>Kontakt dla blogerów, influencerów</header>
                                <aside>
                                    <p>Email:</p>
                                    <p>socialmedia@dstreet.pl</p>
                                </aside>
                            </div>
                            <div>
                                <header>Marketing, reklama, promocja</header>
                                <aside>
                                    <p>Email:</p>
                                    <p> marketing@dstreet.pl</p>
                                </aside>
                            </div>
                            <div>
                                <header>KSprzedaż hurtowa / oferty współpracy</header>
                                <aside>
                                    <p>Email:</p>
                                    <p> hurt@dstreet.pl</p>
                                </aside>
                            </div>
                           
                        </section>
                    </div>
                
                    <section
                    </div>
            </div>
        `;
    },
    after_render: () => {

        const form = document.getElementById("contact_form");
        form.addEventListener("submit",function(event) {
            event.preventDefault();
            console.log("Hello")
        })
    }
}

export default Contact;