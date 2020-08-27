// $(document).ready(function () {

    $('.nav nav a').click(function () {
        var element = $(this).attr('href');
        var dist = $(element).offset().top - 54;

        $('html, body').animate({
            'scrollTop': dist
        }, 1000);

        return false;
    });

    $(window).scroll(function () {

        $('section[id], header[id]').each(function () {
            var id = $(this).attr('id');
            if ($(this).offset().top - 100 < $(window).scrollTop()) {
                $('.nav nav a[href="#' + id + '"]').addClass('active').siblings().removeClass('active');
            }
            if ($(window).scrollTop() < 500) {
                $('.nav nav a').removeClass('active');
            }
        });
    });


        // переменная чтобы бургер сворачивался
        var link = $('.nav__burger');
        // переменная чтобы меню выскакивало
            var menu = $('.nav-menu');
        // переменная для удаления меню после клика и сворачивает крестик
            var navLink = $('a');
        
        
            link.click(function () {
                link.toggleClass('active');
                menu.toggleClass('active');
                 //  запрет скрола при открытом меню
                $('body').toggleClass('lock');
            });
            navLink.click(function () {
                // удаляет крестик
                link.toggleClass('active');
                // удаляет меню
                menu.toggleClass('active');
                // отмена запрета скрола
                $('body').toggleClass('lock');
            });

// });