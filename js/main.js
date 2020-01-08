$(document).ready(() => {

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