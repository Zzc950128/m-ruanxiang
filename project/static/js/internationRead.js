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
    },
    initAction: function() {
    },
}
$(function() {
    internationHandler.init();
    internationHandler.initAction();
})