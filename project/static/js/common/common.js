var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?a13011faf0a28bb07ae3b4b10e3e52ad";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

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
            $(".header").removeClass("is-menu-flod")
            $(".header-reverse").removeClass("is-menu-flod")
            $(".price-fixed").removeClass("is-menu-flod")
            $(".document-category").removeClass("is-menu-flod")
            $(".cover").removeClass("is-menu-flod")
            startX = 0
            endX = 0
        }
    });
}

function loadPage(ele, href, callback) {
    ele.load(href, callback);
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

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

// 载入header
loadPage($("#header"), window.headerReverseFlag?"/component/headerReverse.html":"/component/header.html", function() {
    $(".header-icon").click(function() {
        window.location.href = window.location.origin+"/index"
    })
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
        if($(".header").hasClass("is-menu-flod")) {
            $(".header").removeClass("is-menu-flod")
        }else {
            $(".header").addClass("is-menu-flod")
        }
        // 价格种类
        if($(".price-fixed").hasClass("is-menu-flod")) {
            $(".price-fixed").removeClass("is-menu-flod")
        }else {
            $(".price-fixed").addClass("is-menu-flod")
        }
        if($(".document-category").hasClass("is-menu-flod")) {
            $(".document-category").removeClass("is-menu-flod")
        }else {
            $(".document-category").addClass("is-menu-flod")
        }
        if($(".cover").hasClass("is-menu-flod")) {
            $(".cover").removeClass("is-menu-flod")
        }else {
            $(".cover").addClass("is-menu-flod")
        }
    })
});

// 载入footer
loadPage($("#footer"), "/component/footer.html", function() {
    $(".footer-btn-free").click(function() {
        if ($('#nb_icon_wrap').length > 0) {
            $('#nb_icon_wrap').click();
        }
    })
    $(".send-message").click(function() {
        if ($('#nb_icon_wrap').length > 0) {
            $('#nb_icon_wrap').click();
        }
    })
});

// 百度商桥
$(".shangqiao").click(function(event) {
    if ($('#nb_icon_wrap').length > 0) {
        $('#nb_icon_wrap').click();
    }
});