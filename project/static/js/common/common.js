// var _hmt = _hmt || [];
// (function() {
//     var hm = document.createElement("script");
//     hm.src = "https://hm.baidu.com/hm.js?a13011faf0a28bb07ae3b4b10e3e52ad";
//     var s = document.getElementsByTagName("script")[0];
//     s.parentNode.insertBefore(hm, s);
// })();
// $('#nb_icon_wrap').css("height", "2%");
// $('#nb_icon_wrap').css("width", "2%");
// $(".shangqiao").click(function(event) {
//     if ($('#nb_icon_wrap').length > 0) {
//         $('#nb_icon_wrap').click();
//     }
// });
// var vConsole = new VConsole();
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
loadPage($("#header"), window.headerReverseFlag?"../component/headerReverse.html":"../component/header.html", function() {
    $(".header-menu, .header-menu-reverse").click(function() {
        console.log("menuClick")
        // menu展开标识
        if($(".menu").hasClass("active")) {
            $(".menu").removeClass("active")
        }else {
            $(".menu").addClass("active")
        }
        // 移动main
        if($(".main-wrap").hasClass("is-menu-flod")) {
            $(".main-wrap").removeClass("is-menu-flod")
        }else {
            $(".main-wrap").addClass("is-menu-flod")
        }
        // 固定header
        if($(".header-reverse").hasClass("is-menu-flod")) {
            $(".header-reverse").removeClass("is-menu-flod")
        }else {
            $(".header-reverse").addClass("is-menu-flod")
        }
        // 价格种类
        if($(".price-fixed").hasClass("is-menu-flod")) {
            $(".price-fixed").removeClass("is-menu-flod")
        }else {
            $(".price-fixed").addClass("is-menu-flod")
        }
    })
});

// 载入footer
loadPage($("#footer"), "../component/footer.html", function() {

});

function menuTouch() {
    var startX = 0
    var endX = 0
    $(".menu").on('touchstart',function(e) {
        var _touch = e.originalEvent.targetTouches[0];
        startX = _touch.pageX;
    });
    $(".menu").on('touchend',function(e) {
        var _touch = e.originalEvent.changedTouches[0];
        endX = _touch.pageX;
        if(endX - startX > 100) {
            $(".menu").removeClass("active")
            $(".main-wrap").removeClass("is-menu-flod")
            $(".header-reverse").removeClass("is-menu-flod")
            $(".price-fixed").removeClass("is-menu-flod")
            startX = 0
            endX = 0
        }
    });
}

function ajaxGet(url, data, successfn, errorfn) {
    $.ajax({
        url: url,
        type: 'get',
        data: data,
        dataType: 'json',
        success: function(d){
            successfn(d);
        },
        error: function(e){
            errorfn(e);
        }
    })
}
function ajaxPost(url, data, successfn, errorfn) {
    $.ajax({
        url: url,
        type: 'post',
        data: data,
        contentType: "json",
        dataType:'json',
        success: function(d){
            successfn(d);
        },
        error: function(e){
            errorfn(e);
        }
    })
}