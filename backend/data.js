
module.exports = {
    products: [
        {
            id: 1,
            name: "Kurier dpd",
            prepayment: 150,
            cash_on_delivery: '-',
            image: '/images/logo-dpd.jpg'
        },
        {
            id: 2,
            name: "Kurier InPost",
            prepayment: 150,
            cash_on_delivery: '-',
            image: '/images/logo-inpost-kur.jpg'
        },
        {
            id: 3,
            name: "Paczkomaty InPost",
            prepayment: 150,
            cash_on_delivery: '-',
            image: '/images/logo-inpost-p.jpg'
        },
        {
            id: 4,
            name: "Kurier Poczty Polskiej",
            prepayment: 150,
            cash_on_delivery: '-',
            image: '/images/logo-pp-k.jpg'
        },
        {
            id: 5,
            name: "Poczta Polska odbiór w punkcie",
            prepayment: 150,
            cash_on_delivery: '-',
            image: '/images/logo-pp-p.jpg'
        }
    ],
    delivery: [
        {
            id: 1,
            name: "gls",
            delivery_time:"wysyłka 1-3 dni + 1 dzień na dostawę" ,
            order_amount:299,
            prepayment:13,
            download:20,
            image: '/images/logo-gls.jpg'
        },
        {
            id: 2,
            name: "inpost",
            delivery_time:"wysyłka 1-3 dni + 1 dzień na dostawę" ,
            order_amount:299,
            prepayment:14,
            download:20,
            image: '/images/logo-inpost.jpg'
        },
        {
            id: 3,
            name: "dpd",
            delivery_time:"wysyłka 1-3 dni + 1 dzień na dostawę" ,
            order_amount:299,
            prepayment:16,
            download:23,
            image: '/images/logo-dpd.jpg'
        },
        {
            id: 4,
            name: "paczkomat",
            delivery_time:"wysyłka 1-3 dni + 1 dzień na dostawę" ,
            order_amount:299,
            prepayment:14,
            download:0,
            image: '/images/logo-inpost-p.jpg'
        },
        {
            id: 5,
            name: "poczta polska",
            delivery_time:"wysyłka 1-3 dni + 1 dzień na dostawę" ,
            order_amount:299,
            prepayment:14,
            download:0,
            image: '/images/logo-pp-p.jpg'
        }
    ],
    international_shipments: [
        {
            id:1,
            country_name:"Austria",
            delivery_time:"wysyłka 1-3 dni + do 3 dni roboczych na dostawę",
            shipping_cost:55,
            image:"/images/flags/flag-aut.jpg"
        },
        {
            id:2,
            country_name:"Belgia",
            delivery_time:"wysyłka 1-3 dni + do 2 dni roboczych na dostawę",
            shipping_cost:65,
            image:"/images/flags/flag-bel.jpg"
        },
        {
            id:3,
            country_name:"Bułgaria",
            delivery_time:"wysyłka 1-3 dni + do 4 dni roboczych na dostawę",
            shipping_cost:75,
            image:"/images/flags/flag-bgr.jpg"
        },
        {
            id:4,
            country_name:"Czechy",
            delivery_time:"wysyłka 1-3 dni + do 2 dni roboczych na dostawę",
            shipping_cost:40,
            image:"/images/flags/flag-cze.jpg"
        },
        {
            id:5,
            country_name:"Dania",
            delivery_time:"wysyłka 1-3 dni + do 3 dni roboczych na dostawę",
            shipping_cost:65,
            image:"/images/flags/flag-deu.jpg"
        },
        {
            id:6,
            country_name:"Estonia",
            delivery_time:"wysyłka 1-3 dni + do 2 dni roboczych na dostawę",
            shipping_cost:65,
            image:"/images/flags/flag-est.jpg"
        },
        {
            id:7,
            country_name:"Finlandia",
            delivery_time:"wysyłka 1-3 dni + do 4 dni roboczych na dostawę",
            shipping_cost:75,
            image:"/images/flags/flag-fin.jpg"
        },
        {
            id:8,
            country_name:"Francja",
            delivery_time:"wysyłka 1-3 dni + do 3 dni roboczych na dostawę",
            shipping_cost:75,
            image:"/images/flags/flag-fra.jpg"
        },
        {
            id:9,
            country_name:"Grecja",
            delivery_time:"wysyłka 1-3 dni + do 5 dni roboczych na dostawę",
            shipping_cost:299,
            image:"/images/flags/flag-grc.jpg"
        },
        {
            id:10,
            country_name:"Hiszpania",
            delivery_time:"wysyłka 1-3 dni + do 4 dni roboczych na dostawę",
            shipping_cost:95,
            image:"/images/flags/flag-esp.jpg"
        },
        {
            id:11,
            country_name:"Holandia",
            delivery_time:"wysyłka 1-3 dni + do 2 dni roboczych na dostawę",
            shipping_cost:65,
            image:"/images/flags/flag-bel.jpg"
        },
        {
            id:12   ,
            country_name:"Irlandia",
            delivery_time:"wysyłka 1-3 dni + do 4 dni roboczych na dostawę",
            shipping_cost:65,
            image:"/images/flags/flag-irl.jpg"
        },
        {
            id:13,
            country_name:"Litwa",
            delivery_time:"wysyłka 1-3 dni + do 2 dni roboczych na dostawę",
            shipping_cost:40,
            image:"/images/flags/flag-ltu.jpg"
        },
        {
            id:14,
            country_name:"Luksemburg",
            delivery_time:"wysyłka 1-3 dni + do 2 dni roboczych na dostawę",
            shipping_cost:75,
            image:"/images/flags/flag-lux.jpg"
        },
        {
            id:15,
            country_name:"Łotwa",
            delivery_time:"wysyłka 1-3 dni + do 2 dni roboczych na dostawę",
            shipping_cost:65,
            image:"/images/flags/flag-lva.jpg"
        },
        {
            id:16,
            country_name:"Niemcy",
            delivery_time:"wysyłka 1-3 dni + do 2 dni roboczych na dostawę",
            shipping_cost:25,
            image:"/images/flags/flag-deu.jpg"
        },
        {
            id:17,
            country_name:"Portugalia",
            delivery_time:"wysyłka 1-3 dni + do 4 dni roboczych na dostawę",
            shipping_cost:95,
            image:"/images/flags/flag-prt.jpg"
        },
        {
            id:18,
            country_name:"Rumunia",
            delivery_time:"wysyłka 1-3 dni + do 3 dni roboczych na dostawę",
            shipping_cost:75,
            image:"/images/flags/flag-rou.jpg"
        },
        {
            id:19,
            country_name:"Słowacja",
            delivery_time:"wysyłka 1-3 dni + do 2 dni roboczych na dostawę",
            shipping_cost:40,
            image:"/images/flags/flag-svk.jpg"
        },
        {
            id:20,
            country_name:"Słowenia",
            delivery_time:"wysyłka 1-3 dni + do 4 dni roboczych na dostawę",
            shipping_cost:65,
            image:"/images/flags/flag-svn.jpg"
        },
        {
            id:21,
            country_name:"Szwecja",
            delivery_time:"wysyłka 1-3 dni + do 3 dni roboczych na dostawę",
            shipping_cost:75,
            image:"/images/flags/flag-swe.jpg"
        },
        {
            id:22,
            country_name:"Węgry",
            delivery_time:"wysyłka 1-3 dni + do 2 dni roboczych na dostawę",
            shipping_cost:55,
            image:"/images/flags/flag-hun.jpg"
        },
        
    ]
};

