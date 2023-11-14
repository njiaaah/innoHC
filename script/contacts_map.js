document.addEventListener('DOMContentLoaded', ()=>{
    if (document.querySelector('#contacts-map')) {

        let center_contacts = [55.684827,37.489750]

        function init() {
            let map = new ymaps.Map('contacts-map', {
              center: center_contacts,
              zoom: 18,
              controls: ['zoomControl']
            }, {
              zoomControlPosition: { left: 100, top: 150 },
              zoomControlSize: 'auto'
            });

            let placemark_contacts = new ymaps.Placemark(center_contacts, {
                hintContent: 'Офис продаж',
                balloonContent: 'Москва, ЗАО, Удальцова 50к1'
              }, {
                iconLayout: "default#image",
                iconImageHref: "./img/icons/contacts.svg",
                iconImageSize: [32, 32],
              });

              map.geoObjects.add(placemark_contacts);


        }

        ymaps.ready(init);
        }
    })