var internationService = {
    api: {},
}
var internationHandler = {
    args: {},
    init: function() {
        console.log("internationHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(5).addClass("active")
            menuTouch()
        });
        // 达到按钮组切换固定
        $(window).scroll(function() {
            if($(this).scrollTop() == 0) {
                $(".header").css("background", "transparent")
                $(".header-icon img").attr("src", "../static/images/header/icon.png")
                $(".header-menu img").attr("src", "../static/images/header/menu.png")
            }else {
                $(".header").css("background", "#ffffff")
                $(".header-icon img").attr("src", "../static/images/header/icon-reverse.png")
                $(".header-menu img").attr("src", "../static/images/header/menu-reverse.png")
            }
        });
    },
    initAction: function() {
    },
}
$(function() {
    internationHandler.init();
    internationHandler.initAction();
})