const DeliveryTracking = {
    render:()=>{
        return `
            <div class="deliveryTracking">
                <div class="deliveryTracking__container">
                    <section class="deliveryTracking__header">
                        <h1>Śledzenie przesyłek</h1>
                    </section>
                    <section class="deliveryTracking__content">
                        <div>
                            <h2>| Przygotowanie przesyłki</h2>
                            <p>Kiedy złożysz zamówienie, produkty najpierw są kompletowane w magazynie, starannie pakowane, po czym trafiają do sortowni i czekają na odbiór przez firmę kurierską. Po opuszczeniu sortowni, uruchomiona zostaje funkcja śledzenia przesyłki. Wówczas firma kurierska wysyła do Ciebie wiadomość e-mail z numerem przesyłki, oraz linkiem, dzięki któremu dowiesz się, gdzie aktualnie znajduje się Twoja przesyłka. </p>
                            <p><strong>Ważne!</strong> Funkcja trackingu nie jest aktywna od razu. Zazwyczaj musi upłynąć kilka godzin (w wyjątkowych okolicznościach 48 godzin) od momentu wygenerowania linku, aby precyzyjne śledzenie przesyłki było możliwe. </p>
                        </div>
                        <div>
                            <h2>| Śledzenie przesyłki</h2>
                            <p><strong>GLS</strong> - dzień przed dostarczeniem paczki otrzymasz e-mail i/lub sms z powiadomieniem, że następnego dnia nastąpi dostarczenie. Przesyłkę dostarczaną przez firmę GLS możesz śledzić za pomocą linku - <a href="https://gls-group.eu/PL/pl/sledzenie-paczek">kliknij tutaj</a>. </p>
                            <p><strong>InPost</strong> - dzień przed dostarczeniem paczki otrzymasz e-mail i/lub z powiadomieniem, że następnego dnia nastąpi dostarczenie. W przypadku przesyłki Paczkomatowej, kod odbioru otrzymasz mailem i/lub smsem chwilę po tym, jak kurier dostarczy przesyłkę do wskazanego przez Ciebie paczkomatu. Przesyłkę dostarczaną przez firmę InPost możesz śledzić za pomocą linku - <a href="https://inpost.pl/sledzenie-przesylek">kliknij tutaj</a>. </p>
                            <p><strong>DPD</strong> - dzień przed dostarczeniem paczki otrzymasz e-mail i/lub sms z powiadomieniem, że następnego dnia nastąpi dostarczenie. Przesyłkę dostarczaną przez firmę DPD możesz śledzić za pomocą linku - <a href="https://www.dpd.com.pl/Zlokalizuj-paczke">kliknij tutaj</a>. </p>
                            <p><strong>Pocztex Kurier</strong> - dzień przed dostarczeniem paczki otrzymasz e-mail i/lub sms z powiadomieniem, że następnego dnia nastąpi dostarczenie. Przesyłkę dostarczaną przez Poczta Polska Pocztex Kurier możesz śledzić za pomocą linku - <a href="http://www.pocztex.pl/sledzenie-przesylek/">kliknij tutaj</a>.</p>
                        </div>
                    </section>
                </div>
            </div>
        `;
    }
}
export default DeliveryTracking;