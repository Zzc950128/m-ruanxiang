var freeService = {
    api: {},
}
var freeHandler = {
    args: {},
    init: function() {
        console.log("payfreeHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(3).addClass("active")
            menuTouch()
        });
        var freeSystemSwiper = new Swiper('.free-system-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.free-system-swiper-pagination',
            },
        })
    },
    initAction: function() {
    },
}
$(function() {
    freeHandler.init();
    freeHandler.initAction();
})