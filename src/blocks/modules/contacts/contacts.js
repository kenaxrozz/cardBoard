//  yandex карты с логотипом ==============================================
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.705975, 20.506499],
            zoom: 15,
        }, {
            searchControlProvider: 'yandex#search'
        }),
        

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: '"Это компания CardBoard"'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/svg/logo-mobile.svg',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -30]
           
        });
        // отключаем scroll
        // 'scrollZoom' отключает скрол
        // 'drag' отключает мышь
        myMap.behaviors.disable(['scrollZoom', 'rightMouseButtonMagnifier']);
    myMap.geoObjects
        .add(myPlacemark);
});