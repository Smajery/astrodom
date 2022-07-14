$(function () {
    $('.menu_open').click(function () {
        $('.menu').toggleClass('show-menu');
        $('.menu_open').toggleClass('menu_open_on');
    })
    $('.first').click(function () {
        $('.first + .hide-menu').toggleClass('show-hide-menu');
        $('.first  .arrow-down').toggleClass('down-hide');
        $('.first  .arrow-up').toggleClass('up-hide');
    })
    $('.second').click(function () {
        $('.second + .hide-menu').toggleClass('show-hide-menu');
        $('.second  .arrow-down').toggleClass('down-hide');
        $('.second  .arrow-up').toggleClass('up-hide');
    })
});