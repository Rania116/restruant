$(document).ready(function() {
    $('#menu-bar').click(function() {
        $(this).toggleClass('fa-times');
        $('.navber').toggleClass('nav-toggle')
    });
    $(window).on('scroll load', function() {
        $('#menu-bar').removeClass('fa-times');
        $('.navber').removeClass('nav-toggle');


        $('section').each(function() {
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let height = $(this).height();
            let id = $(this).attr('id');
            if (top > offset && top < offset + height) {
                $('.navber ul li a').removeClass('active');
                $('.navber').find(`[href="#${id}"]`).addClass('active');
            }
        })

    });



    $('.menu .list .btn').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('#menu-img').attr('src', src);
    });
    const themeButton = document.getElementById('theme-button');
    const darktheme = 'dark-theme';
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darktheme)
    })

    const colorButton = document.getElementById('color-theme');
    const colortheme = 'color-theme';
    colorButton.addEventListener('click', () => {
        document.body.classList.toggle(colortheme)
    })




});