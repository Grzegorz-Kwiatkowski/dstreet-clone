import axios from 'axios'
import flag_pl from "../../../../assets/images/flags/flag-pl.jpg"
import flag_globe from "../../../../assets/images/flags/flag-globe.jpg"

const DeliveryTime = {
    render:async ()=>{
        const response = await axios({
            url: 'http://localhost:5000/api/delivery',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response || response.statusText !== 'OK') {
            return `<div>Error in getting data</div>`;
          }
          const delivery_items = response.data;

          const response2 = await axios({
            url: 'http://localhost:5000/api/international_shipments',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response2 || response2.statusText !== 'OK') {
            return `<div>Error in getting data</div>`;
          }
          const international_shipments = response2.data;
          
        return`
            <div class="deliveryTime">
               <div class="deliveryTime__container">
                <section class="deliveryTime__header">
                    <h1>Koszty i czas dostawy</h1>
                </section>
                <section class="deliveryTime__info">
                        <img src="${flag_pl}" />
                        <p>Przesyłki krajowe</p>
                </section>
                <section class="deliveryTime__table">
                    <table>
                        <thead>
                            <tr>
                                <th>Forma dostawy</th>
                                <th>Czas dostawy</th>
                                <th>Kwota zamówienia</th>
                                <th>Przedpłata</th>
                                <th>Pobranie</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${delivery_items.map((item)=> `
                                <tr>
                                    <td><img src="http://localhost:5000/${item.image}" alt="${item.name}" /></td>
                                    <td><p>${item.delivery_time}</p></td>
                                    <td><p>${item.order_amount}</p></td>
                                    <td><p>${item.prepayment}</p></td>
                                    <td><p>${item.download}</p></td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </section>
                <section class="deliveryTime__infoGlobal">
                    <img src="${flag_globe}" /> 
                    <p>Przesyłki Międzynarodowe</p>
                </section>
                <section class="deliveryTime__international_shipments">
                    <table>
                        <thead>
                            <th>Państwo</th>
                            <th>Czas dostawy</th>
                            <th>Koszt wysyłki</th>
                        </thead>
                        <tbody>
                            ${international_shipments.map((item)=>`
                                <tr>
                                    <td>
                                        <div>
                                            <img src="http://localhost:5000/${item.image}" alt="${item.country_name}"/>
                                            <p>${item.country_name}</p>
                                        </div>   
                                    </td>
                                    <td>${item.delivery_time}</td>
                                    <td>${item.shipping_cost}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </section>
               </div>
            </div>
        `;
    }
}
export default DeliveryTime;