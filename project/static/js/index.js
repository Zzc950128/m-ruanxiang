var homeService = {
    api: {},
}
var homeHandler = {
    args: {},
    init: function() {
        console.log("homeHandlerInit")
        var homeModeSwiper = new Swiper('.home-mode-swiper-container', {
            loop: true,
            pagination: {
                el: '.home-mode-swiper-pagination',
            },
            navigation: {
                nextEl: '.home-mode-swiper-button-next',
                prevEl: '.home-mode-swiper-button-prev',
            },
        })        
    },
    initAction: function() {},
}
$(function() {
    homeHandler.init();
})