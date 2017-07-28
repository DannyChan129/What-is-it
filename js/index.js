window.onload = function () {
    home();
}

function Rem() {
    var docEl = document.documentElement,
        oSize = docEl.clientWidth / 7.5;

    if (oSize > 100) {
        oSize = 100; // 限制rem值 640 / 6.4 =100
    }
    docEl.style.fontSize = oSize + 'px';
}

window.addEventListener('resize', Rem, false);
Rem();

//audio
var audio1 = document.getElementById("audio1");

function audio1Play() {
    audio1.play();
}

function audio1Pause() {
    audio1.pause();
}

// homePage
function home() {
    $("#btn-start").click(function () {
        $(".homePage").hide();
        $(".rule").show();
        $("#btn-go").click(function () {
            $(".rule").hide();
            page0();
        })
    });
}

// page
var page1SpanValue;

function page1Span() {
    if (page1SpanValue == "cong") {
        $("#audio1").attr("src", "audio/a1cong.mp3");
        audio1Play();
    } else if (page1SpanValue == "jiang") {
        $("#audio1").attr("src", "audio/a5jiang.mp3");
        audio1Play();
    } else if (page1SpanValue == "suan") {
        $("#audio1").attr("src", "audio/a6suan.mp3");
        audio1Play();
    } else if (page1SpanValue == "cu") {
        $("#audio1").attr("src", "audio/a7cu.mp3");
        audio1Play();
    }
}

// page0
function page0() {
    $(".page0").show();
    $(".page0 span").click(function () {
        var spanValue = $(this).attr("spanValue");
        page1SpanValue = spanValue;
        page1Span();
        if (page1SpanValue == "cong") {
            $(".page0 span").removeClass("fruit-animate");
            $(".page0 span:nth-child(1)").addClass("fruit-animate");
            $(".page0 span:nth-child(1)").attr({id: "1"});
        } else if (page1SpanValue == "jiang") {
            $(".page0 span").removeClass("fruit-animate");
            $(".page0 span:nth-child(2)").addClass("fruit-animate");
            $(".page0 span:nth-child(2)").attr({id: "2"});
        } else if (page1SpanValue == "suan") {
            $(".page0 span").removeClass("fruit-animate");
            $(".page0 span:nth-child(3)").addClass("fruit-animate");
            $(".page0 span:nth-child(3)").attr({id: "3"});
        } else if (page1SpanValue == "cu") {
            $(".page0 span").removeClass("fruit-animate");
            $(".page0 span:nth-child(4)").addClass("fruit-animate");
            $(".page0 span:nth-child(4)").attr({id: "4"});
        }
        wanquan();
    });

}

function wanquan() {
    var id1 = $(".page0 span:nth-child(1)").attr("id");
    var id2 = $(".page0 span:nth-child(2)").attr("id");
    var id3 = $(".page0 span:nth-child(3)").attr("id");
    var id4 = $(".page0 span:nth-child(4)").attr("id");

    if (id1 == "1" && id2 == "2" && id3 == "3" && id4 == "4") {
        setTimeout(function () {
            $(".page0").hide();
            page1();
        }, 1600)
    }
}

// page1
function page1() {
    $("#audio1").attr("src", "audio/a1cong.mp3");
    audio1Play();
    $(".page1 h2:nth-child(6)").click(function () {
        $("#audio1").attr("src", "audio/a1cong.mp3");
        audio1Play();
    });
    $(".right").hide();
    $(".page1").show();
    setTimeout(function () {
        $(".page1 p em").hide();
        $(".page1 p").css("background-image", "url(images/back.png)");
        $(".page1 span").bind("click", function () {
            var spanValue = $(this).attr("spanValue");
            page1SpanValue = spanValue;
            if (spanValue == "cong") {
                $("#audio1").attr("src", "audio/a1cong.mp3");
                audio1Play();
                $(".page1 p:nth-child(4)").css("background-image", "url(images/card.png)");
                $(".page1 p:nth-child(4) em").show();
                $(".page1 span").unbind("click");
                setTimeout(function () {
                    right();
                    $('.page1 h6').show();
                    $('.page1 h6').click(function () {
                        $(".page1").hide();
                        page2();
                    });
                }, 2000);
            } else {
                wrong();
            }
        });
    }, 3000);
}

// page2
function page2() {
    $("#audio1").attr("src", "audio/a6suan.mp3");
    audio1Play();
    $(".page2 h2:nth-child(6)").click(function () {
        $("#audio1").attr("src", "audio/a6suan.mp3");
        audio1Play();
    });
    $(".right").hide();
    $(".page2").show();
    setTimeout(function () {
        $(".page2 p em").hide();
        $(".page2 p").css("background-image", "url(images/back.png)");
        $(".page2 span").bind("click", function () {
            var spanValue = $(this).attr("spanValue");
            page2SpanValue = spanValue;
            if (spanValue == "suan") {
                $("#audio1").attr("src", "audio/a6suan.mp3");
                audio1Play();
                $(".page2 p:nth-child(3)").css("background-image", "url(images/card.png)");
                $(".page2 p:nth-child(3) em").show();
                $(".page2 span").unbind("click");
                setTimeout(function () {
                    right();
                    $('.page2 h6').show();
                    $('.page2 h6').click(function () {
                        $(".page2").hide();
                        page3();
                    });
                }, 2000);
            } else {
                wrong();
            }
        });
    }, 3000);
}

// page3
function page3() {
    $("#audio1").attr("src", "audio/a5jiang.mp3");
    audio1Play();
    $(".page3 h2:nth-child(6)").click(function () {
        $("#audio1").attr("src", "audio/a5jiang.mp3");
        audio1Play();
    });
    $(".right").hide();
    $(".page3").show();
    setTimeout(function () {
        $(".page3 p em").hide();
        $(".page3 p").css("background-image", "url(images/back.png)");
        $(".page3 span").bind("click", function () {
            var spanValue = $(this).attr("spanValue");
            page3SpanValue = spanValue;
            if (spanValue == "jiang") {
                $("#audio1").attr("src", "audio/a5jiang.mp3");
                audio1Play();
                $(".page3 p:nth-child(3)").css("background-image", "url(images/card.png)");
                $(".page3 p:nth-child(3) em").show();
                $(".page3 span").unbind("click");
                setTimeout(function () {
                    right();
                    $('.page3 h6').show();
                    $('.page3 h6').click(function () {
                        $(".page3").hide();
                        page4();
                    });
                }, 2000);
            } else {
                wrong();
            }
        });
    }, 3000);
}

// page4
function page4() {
    $("#audio1").attr("src", "audio/a7cu.mp3");
    audio1Play();
    $(".page4 h2:nth-child(6)").click(function () {
        $("#audio1").attr("src", "audio/a7cu.mp3");
        audio1Play();
    });
    $(".right").hide();
    $(".page4").show();
    setTimeout(function () {
        $(".page4 p em").hide();
        $(".page4 p").css("background-image", "url(images/back.png)");
        $(".page4 span").bind("click", function () {
            var spanValue = $(this).attr("spanValue");
            page4SpanValue = spanValue;
            if (spanValue == "cu") {
                $("#audio1").attr("src", "audio/a7cu.mp3");
                audio1Play();
                $(".page4 p:nth-child(4)").css("background-image", "url(images/card.png)");
                $(".page4 p:nth-child(4) em").show();
                $(".page4 span").unbind("click");
                setTimeout(function () {
                    right();
                    $('.page4 h6').show();
                    $('.page4 h6').click(function () {
                        $(".page4").hide();
                        $('.right').hide();
                        setTimeout(function () {
                            end();
                        }, 200);
                    });
                }, 2000);
            } else {
                wrong();
            }
        });
    }, 3000);
}

// right
function right() {
    $(".wrong").hide();
    $("#audio1").attr("src", "http://live.babyfs.cn/web/H5/ck/2017/03/right.mp3");
    audio1Play();
    $(".right").show();
}

// wrong
function wrong() {
    $(".right").hide();
    $("#audio1").attr("src", "http://live.babyfs.cn/web/H5/common/audio/wrong1.mp3");
    audio1Play();
    $(".wrong").show();
    $('.page h7').show();
    again();
}
function again() {
    $('.page h7').click(function () {
        $(".wrong").hide();
        $('.page h7').hide();
    })
}
// end
function end() {
    $("#audio1").attr("src", "http://live.babyfs.cn/web/H5/common/audio/finish.mp3");
    audio1Play();
    $(".end").show();
}