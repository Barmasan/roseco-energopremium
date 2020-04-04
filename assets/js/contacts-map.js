
{
    let myMap;

    // Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);

    function init() {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map-piter', {
                // При инициализации карты обязательно нужно указать
                // её центр и коэффициент масштабирования.
                center: [59.87743856423345, 30.362580500000007], // Надежные инструменты
                zoom: 16,
                controls: ['zoomControl']
            }),
            myPlacemark = new ymaps.Placemark([59.87743856423345, 30.362580500000007], {
                // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                balloonContentHeader: "ЭнергоПремиум: Санкт-Петербург",
                balloonContentBody: 'ул. Фучика, д.4 лит.К <br>' +
                    'Тел: 8 (812) 309-94-98 <br>' +
                    'Email: info@enprem.com',
                balloonContentFooter: "Мы всегда рады видеть Вас!",
                hintContent: "Энергопремиум - Комплексные услуги электроснабжения"
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6'
            });

        myMap.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
        myMap.behaviors.disable('scrollZoom');



    }
};
