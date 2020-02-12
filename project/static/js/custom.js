var customService = {
    api: {},
}
var customHandler = {
    args: {},
    init: function() {
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(7).addClass("active")
        });
        console.log("customHandlerInit")
    },
    initAction: function() {},
}
$(function() {
    customHandler.init();
})