/*window.onload = function(){
  hengshuping();
}*/

//屏幕方向监测
function hengshuping() {
    if (window.orientation == 180 || window.orientation == 0) {
        // alert("please hengping");
    }
    if (window.orientation == 90 || window.orientation == -90) {
        // alert("hengping");
    }
}

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
var v_h = null,
    direction = 1,
    e, e1, e2,
    pageno = 0,
    out,
    newM = null;
var isok = true;

function init_pageH() {
    var fn_h = function () {
        if (document.compatMode == "BackCompat")
            var Node = document.body;
        else
            var Node = document.documentElement;
        return Math.max(Node.scrollHeight, Node.clientHeight);
    }
    var page_h = fn_h();
    var m_h = $(".m-page").height();
    page_h <= m_h ? v_h = page_h : v_h = m_h;
    $(".m-page").height(v_h);
    $(".p-index").height(v_h);
}

init_pageH();
// baidu监测
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d0cd92c255608fda0928e81faae0d26d";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


//再来一次
$("#onceMore").click(function () {
    window.location.href = window.location.href + "?id=" + 10000 * Math.random();
})

//图片预加载	
var num = 0;
var the_images = [
    "images/again.png",
    "images/backImg.jpg",
    "images/btn_start.png",
    "images/btn_go.png",
    "images/card.png",
    "images/cong.png",
    "images/cong2.png",
    "images/conglaba.png",
    "images/cu.png",
    "images/cu2.png",
    "images/fail.png",
    "images/jiang.png",
    "images/jiang.png",
    "images/jiang.png",
    "images/loading.gif",
    "images/music.png",
    "images/next.png",
    "images/rule.jpg",
    "images/suan.png",
    "images/suan2.png",
    "images/success.png",
    "images/suanlaba.png",
    "images/text.png",
    "audio/a1cong.mp3",
    "audio/a5jiang.mp3",
    "audio/a6suan.mp3",
    "audio/a7cu.mp3"];
//console.log(the_images);

jQuery.imgpreload(the_images,
    {
        each: function () {
            var status = $(this).data('loaded') ? 'success' : 'error';
            if (status == "success") {
                ++num;
                $("#lodingnum").html((num / the_images.length * 100).toFixed(0) + "%");
            }
        },
        all: function () {
            $("#lodingnum").html("100%");
            setTimeout(function () {
                document.getElementById('loading').style.display = "none";
                //$(".swiper-container").css("display","block");
            }, 300)
        }
    });