let center = [55.6901834133405,37.48737408782326];
let mark_shop1 = [55.71465035824926,37.47504157013882];
let mark_supermarket1 = [55.71164615017811,37.48637122101775];
let mark_park1 = [55.70312306539567,37.482227467759685];
let mark_park2 = [55.697888228069,37.463344716294856];
let mark_education1 = [55.69274964744536,37.47390189097747];
let mark_sport1 = [55.68319784185921,37.46385970042572];
let mark_cafe1 = [55.6841676751884,37.471756123765566];
let mark_sport2 = [55.68174304657761,37.47879424022063];
let mark_sport3 = [55.66952062050859,37.463688039048755];
let mark_park3 = [55.66835637991187,37.50059523509367];
let mark_culture1 = [55.68358577808929,37.49699034617767];
let mark_medicine1 = [55.701038908973516,37.5016252033554];
let mark_park4 = [55.69628855399038,37.5181046955429];
let mark_supermarket2 = [55.708502581144266,37.53595747874602];
let mark_spa1 = [55.6983244914075,37.55054869578703];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 12.5,
        controls: ['zoomControl']
	},{
        zoomControlPosition: { right: 50, top: 260 },
        zoomControlSize: 'auto'
    });

    let placemark_shop1 = new ymaps.Placemark(mark_shop1, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Shop_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-15, 0]

    });

    let placemark_supermarket1 = new ymaps.Placemark(mark_supermarket1, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Supermarket_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-15, -10]

    });

    let placemark_supermarket2 = new ymaps.Placemark(mark_supermarket2, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Supermarket_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-15, -10]

    });

    let placemark_park1 = new ymaps.Placemark(mark_park1, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Park_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-15, -10]

    });

    let placemark_park2 = new ymaps.Placemark(mark_park2, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Park_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -10]

    });

    let placemark_park4 = new ymaps.Placemark(mark_park4, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Park_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -10]

    });

    let placemark_education1 = new ymaps.Placemark(mark_education1, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Education_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -10]

    });

    let placemark_sport1 = new ymaps.Placemark(mark_sport1, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Sport_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -10]

    });

    let placemark_cafe1 = new ymaps.Placemark(mark_cafe1, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Cafe_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -10]

    });

    let placemark_sport2 = new ymaps.Placemark(mark_sport2, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Sport_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -10]

    });

    let placemark_sport3 = new ymaps.Placemark(mark_sport3, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Sport_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -10]

    });

    let placemark_park3 = new ymaps.Placemark(mark_park3, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Park_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -10]

    });

    let placemark_culture1 = new ymaps.Placemark(mark_culture1, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Culture_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -10]

    });

    let placemark_medicine1 = new ymaps.Placemark(mark_medicine1, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Medicine_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -15]

    });

    let placemark_spa1 = new ymaps.Placemark(mark_spa1, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/icons/map/Spa_map.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -15]

    });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты

  map.geoObjects.add(placemark_shop1);
  map.geoObjects.add(placemark_supermarket1);
  map.geoObjects.add(placemark_supermarket2);
  map.geoObjects.add(placemark_park1);
  map.geoObjects.add(placemark_park2);
  map.geoObjects.add(placemark_education1);
  map.geoObjects.add(placemark_sport1);
  map.geoObjects.add(placemark_cafe1);
  map.geoObjects.add(placemark_sport2);
  map.geoObjects.add(placemark_sport3);
  map.geoObjects.add(placemark_park3);
  map.geoObjects.add(placemark_park4);
  map.geoObjects.add(placemark_culture1);
  map.geoObjects.add(placemark_medicine1);
  map.geoObjects.add(placemark_spa1);
}

ymaps.ready(init);

const cat_education = document.querySelector('#category_education')
