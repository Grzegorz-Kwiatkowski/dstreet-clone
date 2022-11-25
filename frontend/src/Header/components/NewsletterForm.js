
let permissions = [
    {
        id: 0,
        checked: false,
        disabled: false,
        content: "Wyrażam zgodę na przekazywanie przez sklep internetowy dstreet.pl, Newslettera na podany adres e-mail lub numer telefonu za pośrednictwem moich urządzeń telekomunikacyjnych, w szczególności takich jak laptop, telefon, smartfon zgodnie z art. 172 ust. 1 ustawy z dnia 16 lipca 2004 r. Prawo telekomunikacyjne;"
    },
    {
        id: 1,
        checked: false,
        disabled: false,
        content: "Wyrażam zgodę na otrzymywanie od sklep dstreet.pl, informacji handlowych zgodnie z art. 10 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną."
    },
    {
        id: 2,
        checked: false,
        disabled: true,
        content: "Wyrażam zgodę na przetwarzanie moich danych osobowych, w celu otrzymywania na podany adres e-mail Newslettera sklepu internetowego dstreet.pl*"
    },
    {
        id: 3,
        checked: false,
        disabled: true,
        content: "Wyrażam zgodę na przetwarzanie moich danych osobowych, w celu otrzymywania na podany numer telefonu Newslettera SMS sklepu internetowego dstreet.pl*"

    }
];

const NewsletterForm = {
    render : ()=> {
        return `       
        <section class="newsletterForm">
                <p class="newsletterForm__text">
                    Interesujesz się modą? Śledzisz światowe trendy?<br />
                    Z newsletterem Dstreet zawsze będziesz na bieżąco w tym co modne, a dodatkowo<br />
                    dowiesz się o najnowszych promocjach, rabatach, wyprzedażach i zniżkach!
                </p>

                <form onSubmit={handleSubmit} class="newsletterForm__formWrapper" >
                    <div class="newsletterForm__form-inputs">
                    
                        <label htmlFor="email"></label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            placeholder="Twój adres email" />

                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            placeholder="Twóje imię" />

                    </div>

                    <button type="submit" class="newsletterForm__submit-button">
                        Zapisz się
                    </button>

                    <small class="newsletterForm__small-text">
                        *Kupon rabatowy jest jednorazowego użytku i ważny przy zakupie za łączną kwotę min. 200zł.
                        Kupon rabatowy nie może być wykorzystany przy zakupie kart upominkowych oraz łączony z innymi rabatami.
                    </small>

        <button onClick={selectAll} class="newsletterForm__select-button">
            Zaznacz wszystko
        </button>

        ${permissions.map((permission) => `
                    <section class="newsletterForm__checkbox-wrapper">
                    <label htmlFor="${permission.id}"></label>
                    <input
                        type="checkbox"
                        name="permission"
                        id="permission_${permission.id}"
                        value="${permission.id}"
                        
                    />
                    <span class="newsletterForm__checkbox-content" id="content_${permission.id}">
                        ${permission.content}
                    </span>
                </section>
                `
        ).join("")}
        </form >

        <section class="newsletterForm__laws">
            <p>
                Informujemy, że Administratorem Państwa danych osobowych jest
                D-TEX sp. z o.o. z siedzibą w Wieluniu (98-300) przy ul. Jana
                Długosza 5. Administrator przetwarza dane osobowe zgodnie z
                Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z
                dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                związku z przetwarzaniem danych osobowych i w sprawie swobodnego
                przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
                rozporządzenie o ochronie danych, RODO). Mają Państwo prawo do
                wglądu do swoich danych osobowych, w tym uzyskania ich kopii, prawo
                do sprostowania, przenoszenia, żądania usunięcia lub ograniczenia ich
                przetwarzania, a także prawo do wniesienia sprzeciwu wobec
                przetwarzania danych przez Współadministratorów i prawo do
                wniesienia skargi organu nadzorczego - Prezesa Urzędu Ochrony Danych
                Osobowych.
            </p >
    </section >
    
        </section >

        
        `;
    },
    after_render:()=>{
        

        document.getElementById(`permission_2`).setAttribute('disabled', 'disabled');
        document.getElementById(`permission_3`).setAttribute('disabled', 'disabled');

        const checkboxes = document.getElementsByName("permission");
        
        checkboxes.forEach((checkbox, id) => {

            checkbox.addEventListener('change', (e) => {

                const index = permissions.find(item => item.id == checkbox.value);
            
                const my_checkbox = document.getElementById(`permission_${checkbox.value}`);
               
                if (permissions[0].checked && permissions[1].checked) {
                    console.log('You checked 2 checkboxes')
                    permissions[2].disabled = false;
                    permissions[3].disabled = false;
                    document.getElementById(`permission_2`).removeAttribute('disabled');
                    document.getElementById(`permission_3`).removeAttribute('disabled');
                    
                } else if (!permissions[0].checked || !permissions[1].checked) {
                    document.getElementById(`permission_2`).checked = false;
                    document.getElementById(`permission_3`).checked = false;
                    document.getElementById(`permission_2`).setAttribute('disabled', 'disabled');
                    document.getElementById(`permission_3`).setAttribute('disabled', 'disabled');
                    permissions[2].disabled = true;
                    permissions[3].disabled = true;   
                }

                const my_text =  document.getElementById(`content_${checkbox.value}`);

                if (e.target.checked) {
                    permissions[index.id].checked = true;
                    //black font color after checking checkbox
                    my_text.style.color = "black";
                } else {
                    permissions[index.id].checked = false;

                    // red font color after unchecking checkbox
                    my_text.style.color="red";
                }
                my_checkbox.disabled = permissions[index.id].disabled;
            })
        })
    }
}

export default NewsletterForm;