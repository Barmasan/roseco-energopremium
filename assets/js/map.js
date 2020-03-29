ymaps.ready(init);
    
function init() {
    var clusterIcons = [{

    href: '../assets/img/enprem-logo.png',

    size: [100, 32],

    // задаем отступ, чтобы метка центрировалась

    offset: [-20, -20]

}]
    
    var coords = [ // кординаты для класстера
        [59.946356, 30.351190],
        [59.958476, 30.278633],
        [59.956998, 30.362320],
        [59.962435, 30.405062]
    ];
    var data = [
        {
            balloonContentBody: 
            '<b>МОНТАЖ КТП</b><br>' +
            '<a href="http://enprem.com/transformatornaya-podstantsiya/">Подробнее</a><br><br>' +
            '<b>ЭЛЕКТРОСНАБЖЕНИЕ СТОМАТОЛОГИЧЕСКОЙ ПОЛИКЛИНИКИ №9</b><br>' +
            '<a href="http://enprem.com/montazh-kabelnyh-linij-3/">Подробнее</a><br>',
            hintContent: 'МОНТАЖ КТП и ЭЛЕКТРОСНАБЖЕНИЕ СТОМАТОЛОГИЧЕСКОЙ ПОЛИКЛИНИКИ №9'
        },
        {
            balloonContentBody: 
            '<b>ЖИЛОЙ ДОМ ООО «ЭКО ИНВЕСТ»</b><br>' +
            '<a href="http://enprem.com/zhiloj-dom-ooo-eko-invest/">Подробнее</a><br><br>' +
            '<b>ЭЛЕКТРОСНАБЖЕНИЕ ЖИЛОГО ДОМА СО ВСТРОЕННЫМИ ПОМЕЩЕНИЯМИ</b><br>' +
            '<a href="http://enprem.com/montazh-kabelnyh-linij-zhilogo-doma/">Подробнее</a><br>',
            hintContent: 'ЖИЛОЙ ДОМ ООО «ЭКО ИНВЕСТ» и ЭЛЕКТРОСНАБЖЕНИЕ ЖИЛОГО ДОМА СО ВСТРОЕННЫМИ ПОМЕЩЕНИЯМИ'
        },
        {
            balloonContentBody: 
            '<b>ПАО «ХАНТЫ-МАНСИЙСКИЙ БАНК ОТКРЫТИЕ»</b><br>' +
            '<a href="http://enprem.com/pao-hanty-mansijskij-bank-otkrytie/">Подробнее</a><br><br>',
            hintContent: 'ПАО «ХАНТЫ-МАНСИЙСКИЙ БАНК ОТКРЫТИЕ»'
        },
        {
            balloonContentBody: 
            '<b>ЖИЛОЙ КОМПЛЕКС «ПОЛЮСТРОВО»</b><br>' +
            '<a href="http://enprem.com/zhiloj-kompleks-polyustrovo/">Подробнее</a><br><br>',
            hintContent: 'ЖИЛОЙ КОМПЛЕКС «ПОЛЮСТРОВО»'
        }
    ];

    getPointOptions = function () {
        return {
            iconLayout: 'default#image',
            iconImageHref: '../assets/img/enprem-logo.png',
            iconImageSize: [35, 35],
        };
    }
    var myGeoObjects = []; 
    
    for(var i = 0, len = coords.length; i < len; i++) {
        myGeoObjects[i] = new ymaps.Placemark(coords[i], data[i], getPointOptions());
    }
    /* for (var i = 0; i<coords.length; i++) { // перебираем и делаем настройки для элемента 
       // GeoObject([feature[, options]])
      myGeoObjects[i] = new ymaps.GeoObject(
          {//первый обязательный объект
        geometry: { 
          type: "Point",
          coordinates: coords[i]
        },
        hintContent: data[i]['hintContent']
      },
      
      { // второй объект с кастомной иконкой
            iconLayout: 'default#image',
            iconImageHref: 'assets/app/img/enprem-logo.png',
            iconImageSize: [35, 35],
            
        });
    } */
    
    var myClusterer = new ymaps.Clusterer();
    
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('spb', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [60.125621, 30.101796], // Надежные инструменты
            zoom: 9,
            controls: ['zoomControl']
        }),
        
        // ОБЪЕКТЫ //
        myPlacemark = new ymaps.Placemark([60.053036, 30.452861], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства. ЗАКОММЕНТИРОВАННО ЧТО БЫ ОСТАЛОСЬ ТОЛЬКО ИКОНКА
            //balloonContentHeader: "Автомобильное производство"
            balloonContentBody: "<b>МНОГОКВАРТИРНЫЙ ЖИЛОЙ ДОМ В ПОСЕЛКЕ МУРИНО</b><br>" + 
            '<a href="http://enprem.com/51330/">Подробнее</a>',
            hintContent: 'МНОГОКВАРТИРНЫЙ ЖИЛОЙ ДОМ В ПОСЕЛКЕ МУРИНО'
            
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/enprem-logo.png', //иконка росэко
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [0, 0]
        });
        
        myPlacemark2 = new ymaps.Placemark([59.946356, 30.351190], { // не используется, лежит в класстере
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства. ЗАКОММЕНТИРОВАННО ЧТО БЫ ОСТАЛОСЬ ТОЛЬКО ИКОНКА
            //balloonContentHeader: "Автомобильное производство",
            /* balloonContentBody: 
            '<b>МОНТАЖ КТП</b>' +
            '<a href="http://enprem.com/transformatornaya-podstantsiya/">Подробнее</a>' +
            '<b>ЭЛЕКТРОСНАБЖЕНИЕ СТОМАТОЛОГИЧЕСКОЙ ПОЛИКЛИНИКИ №9</b>' +
            '<a href="http://enprem.com/montazh-kabelnyh-linij-3/">Подробнее</a>', */
            balloonContentFooter: "Мы всегда рады видеть Вас!",
            hintContent: 'МОНТАЖ КТП и ЭЛЕКТРОСНАБЖЕНИЕ СТОМАТОЛОГИЧЕСКОЙ ПОЛИКЛИНИКИ №9'
            
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/enprem-logo.png', //иконка росэко
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [0, 0]
        });
        
        myPlacemark3 = new ymaps.Placemark([59.958476, 30.278633], { // не используется, лежит в класстере
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства. ЗАКОММЕНТИРОВАННО ЧТО БЫ ОСТАЛОСЬ ТОЛЬКО ИКОНКА
            //balloonContentHeader: "Автомобильное производство"
            hintContent: '3 ЖИЛОЙ ДОМ ООО «ЭКО ИНВЕСТ» + ЭЛЕКТРОСНАБЖЕНИЕ ЖИЛОГО ДОМА СО ВСТРОЕННЫМИ ПОМЕЩЕНИЯМИ'
            
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/enprem-logo.png', //иконка росэко
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [0, 0]
        });
        
        
        myPlacemark4 = new ymaps.Placemark([59.934921, 30.651335], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства. ЗАКОММЕНТИРОВАННО ЧТО БЫ ОСТАЛОСЬ ТОЛЬКО ИКОНКА
            //balloonContentHeader: "Автомобильное производство"
            balloonContentBody: "<b>ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА ВСЕВОЛОЖСКОГО РАЙОНА ЛО</b><br>" + 
            '<a href="http://enprem.com/obshheobrazovatelnaya-shkola-vsevolozhskogo-rajona-lo/">Подробнее</a>',
            hintContent: 'ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА ВСЕВОЛОЖСКОГО РАЙОНА ЛО'                    
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/enprem-logo.png', //иконка росэко
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [0, 0]
        });
        
        
        myPlacemark5 = new ymaps.Placemark([59.810844, 30.379316], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства. ЗАКОММЕНТИРОВАННО ЧТО БЫ ОСТАЛОСЬ ТОЛЬКО ИКОНКА
            //balloonContentHeader: "Автомобильное производство"
            balloonContentBody: "<b>ЖИЛОЙ ДОМ ЖСК «ТРИЛОГИЯ»</b><br>" + 
            '<a href="http://enprem.com/zhiloj-dom-zhsk-trilogiya/">Подробнее</a>',
            hintContent: 'ЖИЛОЙ ДОМ ЖСК «ТРИЛОГИЯ»'                          
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/enprem-logo.png', //иконка росэко
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [0, 0]
        });
        
        
        myPlacemark6 = new ymaps.Placemark([59.956998, 30.362320], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства. ЗАКОММЕНТИРОВАННО ЧТО БЫ ОСТАЛОСЬ ТОЛЬКО ИКОНКА
            //balloonContentHeader: "Автомобильное производство"
            hintContent: '6 ПАО «ХАНТЫ-МАНСИЙСКИЙ БАНК ОТКРЫТИЕ»'
            
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/enprem-logo.png', //иконка росэко
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [0, 0]
        });
        
        
        myPlacemark7 = new ymaps.Placemark([60.358302, 29.738133], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства. ЗАКОММЕНТИРОВАННО ЧТО БЫ ОСТАЛОСЬ ТОЛЬКО ИКОНКА
            //balloonContentHeader: "Автомобильное производство"
            balloonContentBody: "<b>АО «ПТИЦЕФАБРИКА «РОСКАР»</b><br>" + 
            '<a href="http://enprem.com/ao-ptitsefabrika-roskar/">Подробнее</a>',
            hintContent: 'АО «ПТИЦЕФАБРИКА «РОСКАР»' 
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/enprem-logo.png', //иконка росэко
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [0, 0]
        });

        myPlacemark8 = new ymaps.Placemark([59.929299, 29.691710], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства. ЗАКОММЕНТИРОВАННО ЧТО БЫ ОСТАЛОСЬ ТОЛЬКО ИКОНКА
            //balloonContentHeader: "Автомобильное производство"
            balloonContentBody: "<b>МНОГОФУНКЦИОНАЛЬНЫЙ МОРСКОЙ ПЕРЕГРУЗОЧНЫЙ КОМПЛЕКС «БРОНКА»»</b><br>" + 
            '<a href="http://enprem.com/mnogofunktsionalnyj-morskoj-peregruzochnyj-kompleks-bronka/">Подробнее</a>',
            hintContent: 'МНОГОФУНКЦИОНАЛЬНЫЙ МОРСКОЙ ПЕРЕГРУЗОЧНЫЙ КОМПЛЕКС «БРОНКА»'                     
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/enprem-logo.png', //иконка росэко
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [0, 0]
        });

        myPlacemark9 = new ymaps.Placemark([59.962435, 30.405062], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства. ЗАКОММЕНТИРОВАННО ЧТО БЫ ОСТАЛОСЬ ТОЛЬКО ИКОНКА
            //balloonContentHeader: "Автомобильное производство"
            hintContent: '9 ЖИЛОЙ КОМПЛЕКС «ПОЛЮСТРОВО»'
            
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/enprem-logo.png', //иконка росэко
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [0, 0]
        });

    // НАСТРОЙКИ
    $('#open-map-button').on('click', function(){
        $('.map #spb').css('filter', 'none');
        $('#open-map-button').fadeOut(1000, function(){
            $('#open-map-button').css('display', 'none');
        });
        

        myMap.geoObjects.add(myPlacemark); 
        myMap.geoObjects.add(myPlacemark4);
        myMap.geoObjects.add(myPlacemark5);
        myMap.geoObjects.add(myPlacemark7);
        myMap.geoObjects.add(myPlacemark8);
    
        console.log(myGeoObjects);
        
        myClusterer.add(myGeoObjects); 
        myMap.geoObjects.add(myClusterer); 
    });

    
    //myPlacemark.balloon.open(); // для изначального отображения balloon с описание (нам не нужно)
    myMap.behaviors.disable('scrollZoom');
    
    //добавление общего контейнера для выезжающих слайдов
    if($('.ymaps-2-1-75-inner-panes')){
         $('.ymaps-2-1-75-inner-panes').append('<div class="overlay_containerz"></div>')
    }
    var count = 0 // для добавления различных классов
    var arrCount = [] //в этот массив
    
    // КЛИКИ //
    // myPlacemark.events.add('click', function () { // событие по клику на иконку с опр. кординатами
    //     if(arrCount !=''){ //если до этого уже был нажат слайд, то удаляем его и чистим массив
    //         document.querySelector(arrCount[0]).remove()
    //         arrCount.splice(0,1)
    //     }
    //     else{//если нет, повышаем каунт для различия классов и пушим его в массив для последующего обращения к нему
    //         count++
    //         arrCount.push('.count'+count)
    //         console.log(count)
    //         console.log(arrCount)
    //         $('.overlay_containerz').append(function(){
    //             return '<div class="overlay text-center animated fadeInRight' + ' count'+count+'">' +'<span class="spanClose" style="background:rgba(255,255,255,0.75) url(assets/app/img/Close.svg) no-repeat 50% 50%;background-size:12px 12px;border-radius:50%;box-sizing:border-box;cursor:pointer;height:24px;position:absolute;left:15px;top:15px;width:24px;z-index:100;"></span>' + '<img src = "assets/app/img/stroitelstvo_proizvodstvenih_zdaniy.png">' + '<h3>Завод по производству автомобилей</h3>' +'<b>Выполненные работы:</b>' + '<li class="mt-3"><a href="https://roseco.net/stroitelstvo/proizvodstvennyix-zdanij">Монтаж производственного здания </a>для размещения оборудования</li>' + '<li class="mt-3">Комплекс работ по устройству системы охлаждения в цехе окраски. <em style="color:red;">Особо опасный объект.</em></li>' + '</div>'
    //         })
    //     }
        
    //     });
    
    // myGeoObjects[0].events.add('click', function () { // событие по клику на иконку с опр. кординатами
    //     if(arrCount !=''){
    //         document.querySelector(arrCount[0]).remove()
    //         arrCount.splice(0,1)
    //     }
    //     else{
    //         count++
    //         arrCount.push('.count'+count)
    //         console.log(count)
    //         console.log(arrCount)
    //         $('.overlay_containerz').append(function(){
    //             return '<div class="overlay text-center animated fadeInRight'+ ' count'+count+'">' +'<span class="spanClose" style="background:rgba(255,255,255,0.75) url(assets/app/img/Close.svg) no-repeat 50% 50%;background-size:12px 12px;border-radius:50%;box-sizing:border-box;cursor:pointer;height:24px;position:absolute;left:15px;top:15px;width:24px;z-index:100;"></span>' + '<img src = "assets/app/build/img/Perfetti-Van-Melle-main.jpg">' + '<h3>Perfetti Van Melle</h3>' +'<b>Выполненные работы:</b>' + '<li class="mt-3"><a href="https://roseco.net/stroitelstvo/futerovka-kolodczev">Футеровка колодцев</a></li>' + '<li class="mt-3"><a href="https://roseco.net/stroitelstvo/bestranshejnaya-zamena-kanalizaczionnyix-trub">Бестраншейная замена канализационных труб</a></li>'  + '</div>'
    //         })
    //     }
        
    //     });
        
    // myGeoObjects[1].events.add('click', function () { // событие по клику на иконку с опр. кординатами
    //     if(arrCount !=''){
    //         document.querySelector(arrCount[0]).remove()
    //         arrCount.splice(0,1)
    //     }
    //     else{
    //         count++
    //         arrCount.push('.count'+count)
    //         console.log(count)
    //         console.log(arrCount)
    //         $('.overlay_containerz').append(function(){
    //             return '<div class="overlay text-center animated fadeInRight'+ ' count'+count+'">' +'<span class="spanClose" style="background:rgba(255,255,255,0.75) url(assets/app/img/Close.svg) no-repeat 50% 50%;background-size:12px 12px;border-radius:50%;box-sizing:border-box;cursor:pointer;height:24px;position:absolute;left:15px;top:15px;width:24px;z-index:100;"></span>' + '<img src = "assets/app/build/img/Spartak.jpg">' + '<h3>Гребной клуб в Петроградском р-не</h3>' +'<b>Выполненные работы:</b>' + '<li class="mt-3"><a href="https://roseco.net/stroitelstvo/stroitelstvo-naruzhnoy-kanalizaczii">Монтаж сетей канализации;</a></li>' + '<li class="mt-3"><a href="https://roseco.net/stroitelstvo/montazh-vodoprovoda">Монтаж сетей водопровода;</a></li>' + '<li class="mt-3">Предъявление работ представителям ГУП "Водоконал Санкт-Петербурга";</li>' + '<li class="mt-3">Заключение договоров на водоснабжение и водоотведение;</li>' + '</div>'
    //         })
    //     }
        
    //     });
        
    //     myPlacemark4.events.add('click', function () { // событие по клику на иконку с опр. кординатами
    //     if(arrCount !=''){
    //         document.querySelector(arrCount[0]).remove()
    //         arrCount.splice(0,1)
    //     }
    //     else{
    //         count++
    //         arrCount.push('.count'+count)
    //         console.log(count)
    //         console.log(arrCount)
    //         $('.overlay_containerz').append(function(){
    //             return '<div class="overlay text-center animated fadeInRight'+ ' count'+count+'">' +'<span class="spanClose" style="background:rgba(255,255,255,0.75) url(assets/app/img/Close.svg) no-repeat 50% 50%;background-size:12px 12px;border-radius:50%;box-sizing:border-box;cursor:pointer;height:24px;position:absolute;left:15px;top:15px;width:24px;z-index:100;"></span>' + '<img src = "assets/app/build/img/Otradnoe-1.png">' + '<h3>Многофункциональный торговый комплекс</h3>' +'<b>Комплексное проектирование:</b>' + '<li class="mt-3">Разработана концепция.</li>' + '<li class="mt-3">Проектная документация.</li>' + '<li class="mt-3">Сметная документация.</li>' + '<li class="mt-3">Произведено согласование с МУП "Водоканал" г.Гатчина.</li>' + '</div>'
    //         })
    //     }
        
    //     });
        
        
    //     myPlacemark5.events.add('click', function () { // событие по клику на иконку с опр. кординатами
    //     if(arrCount !=''){
    //         document.querySelector(arrCount[0]).remove()
    //         arrCount.splice(0,1)
    //     }
    //     else{
    //         count++
    //         arrCount.push('.count'+count)
    //         console.log(count)
    //         console.log(arrCount)
    //         $('.overlay_containerz').append(function(){
    //             return '<div class="overlay text-center animated fadeInRight'+ ' count'+count+'">' +'<span class="spanClose" style="background:rgba(255,255,255,0.75) url(assets/app/img/Close.svg) no-repeat 50% 50%;background-size:12px 12px;border-radius:50%;box-sizing:border-box;cursor:pointer;height:24px;position:absolute;left:15px;top:15px;width:24px;z-index:100;"></span>' + '<img src = "assets/app/build/img/Gatchina-2.jpg" style="max-height:240px;">' + '<h3>Разработка проекта Локальных очистных сооружений ливневого стока.</h3>' +'<b>Выполненные работы:</b>' + '<li class="mt-3">Проектная документация.</li>' + '<li class="mt-3">Сметная документация.</li>' + '<li class="mt-3">Получено положительное заключение ГАУ «Леноблэкспертиза».</li>' + '</div>'
    //         })
    //     }
        
    //     });
        
    //     /* myPlacemark6.events.add('click', function () { // событие по клику на иконку с опр. кординатами
    //     if(arrCount !=''){
    //         document.querySelector(arrCount[0]).remove()
    //         arrCount.splice(0,1)
    //     }
    //     else{
    //         count++
    //         arrCount.push('.count'+count)
    //         console.log(count)
    //         console.log(arrCount)
    //         $('.overlay_containerz').append(function(){
    //             return '<div class="overlay text-center animated fadeInRight'+ ' count'+count+'">' +'<span class="spanClose" style="background:rgba(255,255,255,0.75) url(assets/app/img/Close.svg) no-repeat 50% 50%;background-size:12px 12px;border-radius:50%;box-sizing:border-box;cursor:pointer;height:24px;position:absolute;left:15px;top:15px;width:24px;z-index:100;"></span>' + '<img src = "assets/app/build/img/6.jpg" style="max-height:240px;">' + '<h3>Вагоностроительный завод</h3>' +'<b>Выполненные работы:</b>' + '<li class="mt-3"><a href="https://roseco.net/stroitelstvo/stroitelstvo-naruzhnoy-kanalizaczii">Монтаж сетей канализации</a></li>' + '<li class="mt-3"><a href="https://roseco.net/stroitelstvo/montazh-vodoprovoda">Монтаж водопровода</a></li>' + '<li class="mt-3">Уплотнение оснований фундамента.</li>' + '</div>'
    //         })
    //     }
        
    //     }); */
        
    //     myPlacemark7.events.add('click', function () { // событие по клику на иконку с опр. кординатами
    //     if(arrCount !=''){
    //         document.querySelector(arrCount[0]).remove()
    //         arrCount.splice(0,1)
    //     }
    //     else{
    //         count++
    //         arrCount.push('.count'+count)
    //         console.log(count)
    //         console.log(arrCount)
    //         $('.overlay_containerz').append(function(){
    //             return '<div class="overlay text-center animated fadeInRight'+ ' count'+count+'">' +'<span class="spanClose" style="background:rgba(255,255,255,0.75) url(assets/app/img/Close.svg) no-repeat 50% 50%;background-size:12px 12px;border-radius:50%;box-sizing:border-box;cursor:pointer;height:24px;position:absolute;left:15px;top:15px;width:24px;z-index:100;"></span>' + '<img src = "assets/app/build//img/Slanci5.jpg" style="max-height:240px;">' + '<h3>ЕВРОЦЕМЕНТ груп</h3>' +'<b>Выполненные работы:</b>' + '<li class="mt-3"><a href="https://roseco.net/stroitelstvo/stroitelstvo-naruzhnoy-kanalizaczii">Монтаж сетей канализации;</a></li>' + '<li class="mt-3"><a href="https://roseco.net/stroitelstvo/montazh-vodoprovoda">Монтаж сетей водопровода</a></li>' + '<li class="mt-3">Монтаж внутренних сетей;</li>' + '<li class="mt-3"><a href="https://roseco.net/stroitelstvo/stroitelstvo-ochistnyh-sooruzhenij">Монтаж очистных сооружений маслостоков;</a></li>' + '</div>'
    //         })
    //     }
        
    //     });
    // // УДАЛЕНИЕ ПО КРЕСТИКУ //
    // document.body.onclick = function(e){
    //     console.log(e.target);
    //     if(e.target == document.querySelector('.spanClose') && arrCount.length>0 ){ //удаление по крестику
    //         document.querySelector(arrCount[0]).remove();
    //         arrCount.splice(0,1)
          
    //     }
    // };

}
