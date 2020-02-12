// rem
(function (doc, win) {
    var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if (clientWidth >= 750) {
                    docEl.style.fontSize = '100px';
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
            };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc()
})(document, window);

// 载入header
loadPage($("#header"), "../component/header.html", function() {
    $(".menu-btn").click(function() {
        console.log("menuClick")
        if($(".menu").hasClass("active")) {
            $(".menu").removeClass("active")
       }else {
            $(".menu").addClass("active")
       }
       if($(".main-wrap").hasClass("is-menu-flod")) {
            $(".main-wrap").removeClass("is-menu-flod")
       }else {
            $(".main-wrap").addClass("is-menu-flod")
       }
    })
});

// 载入footer
loadPage($("#footer"), "../component/footer.html", function() {

});

// 载入menu
loadPage($("#menu"), "../component/menu.html", function() {

});

var isMenuFold = false

