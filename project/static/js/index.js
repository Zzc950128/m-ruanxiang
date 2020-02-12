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
        })    
        var homeAdvantageSwiper = new Swiper('.home-advantage-swiper-container', {
            loop: true,
            pagination: {
                el: '.home-advantage-swiper-pagination',
            },
        })       
    },
    initAction: function() {},
}
$(function() {
    homeHandler.init();
})