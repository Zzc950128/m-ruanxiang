var documentService = {
    api: {},
}
var documentHandler = {
    args: {},
    init: function() {
        console.log("documentHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(9).addClass("active")
        });
    },
    initAction: function() {},
}
$(function() {
    documentHandler.init();
})