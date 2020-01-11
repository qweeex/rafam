$(document).ready(() => {


    // Выбор города
    $('.header-city__btn').on('click', (e) => {
        e.preventDefault();
        $('.header-city').toggleClass('header-city_active');
    });

    // Меню
    $('.navbar-mobile__btn').on('click', (e) => {
        e.preventDefault();
        $('.navbar-mobile__btn').toggleClass('navbar-mobile__btn-active');
        $('.navbar-mob').toggleClass('navbar-mob_active');
    });

    // Выбор опций
    $('.mob-filter').on('click', (e) => {
       e.preventDefault();
       $('.mob-filter').toggleClass('btn-sort_active');
       $('.catalog-option').toggleClass('sort-show');
    });

    // Сортировка
    $('.mob-sort').on('click', (e) => {
        e.preventDefault();
        $('.mob-sort').toggleClass('btn-sort_active');
        $('.catalog-filter__sort').toggleClass('sort-show');
    });

    // Слайдер
    var $input = $(".aroma-size__num");
    $(".aroma-range").ionRangeSlider({
        min: 0,
        max: 15,
        from: 5,
        skin: "big",
        hide_min_max: true,
        hide_from_to: true,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });



});
