const loader = document.querySelector('.box-loader');

function init() {
   let map = new ymaps.Map("map", {
      center: [56.759350, 37.130200],
      zoom: 17
   });

   map.controls.remove('searchControl'); // удаляем поиск
   map.controls.remove('trafficControl'); // удаляем контроль трафика
   map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим

   let placemark = new ymaps.Placemark([56.759350, 37.130200], {
      balloonContentHeader: 'Дом',
   }, {
   });

   map.geoObjects.add(placemark);
}

ymaps.ready(init);

ymaps.ready(() => {
   loader.classList.add('hide');
});