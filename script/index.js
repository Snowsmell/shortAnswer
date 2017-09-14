/**
 * Created by mxd on 2016/12/8.
 */
    //页面弹出框
$(function () {
    //页面弹出框
    var vmg, sum_img;
    $(".analysisBox").on("click",".img li", function () {
        //第几张图片位置
        vmg = $(this).index();
        //图片集合数量
        sum_img = $(this).closest("ul").children("li").length;
        console.log(vmg);
        console.log(sum_img);
        var co = $(this).find("img").attr("src");
        $(".zewrap").show();
        $(".zewrap img").attr("src", co);
        // var potoh = $(".zewrap>section").height() / 2;
        // $(".zewrap>section").css({"margin-top": -potoh});
        $(".z-cha").click(function () {
            $(this).closest(".zewrap").hide();

        })
    })
    //上一题
    $('.analysisBox').on('click',".z-prev",function(){
        console.log(vmg);
        if (vmg > 0) {
            var co = $(".img li").eq(--vmg).find("img").attr("src");
            $(".zewrap img").attr("src", co);
            console.log('切换到prev')
        }
       
        // var potoh = $(".zewrap>section").height() / 2;
        // $(".zewrap>section").css({"margin-top": -potoh});        
    })
    // $(".z-prev").click(function () {
    //     console.log(vmg);
    //     if (vmg > 0) {
    //         var co = $(".img li").eq(--vmg).find("img").attr("src");
    //         $(".zewrap img").attr("src", co);
    //     }
    //     var potoh = $(".zewrap>section").height() / 2;
    //     $(".zewrap>section").css({"margin-top": -potoh});
    // })
    //下一题
    $('.analysisBox').on('click','.z-next',function(){
        console.log(vmg);
        console.log("点击了上一页！！");
        if (vmg < sum_img - 1) {
            var co = $(".img li").eq(++vmg).find("img").attr("src");
            $(".zewrap img").attr("src", co);
            console.log('切换到next')
        }
       
        // var potoh = $(".zewrap>section").height() / 2;
        // $(".zewrap>section").css({"margin-top": -potoh});        
    })
    // $(".z-next").click(function () {
    //     console.log(vmg);
    //     console.log("点击了上一页！！");
    //     if (vmg < sum_img - 1) {
    //         var co = $(".img li").eq(++vmg).find("img").attr("src");
    //         $(".zewrap img").attr("src", co);
    //     }
    //     var potoh = $(".zewrap>section").height() / 2;
    //     $(".zewrap>section").css({"margin-top": -potoh});
    // })
    //展示数据
    $(".ana-ar .kai").toggle(function () {
        $(".ana-ar").find("p").attr("style","max-height:100%");
        $(this).addClass("kai2");
    }, function () {
        $(".ana-ar").find("p").attr("style","max-height:190px");
        $(this).removeClass("kai2");
    })
    var ts;
    //填空题
    $(".tk-in dl").click(function () {
        $(".tk-bg").show();
        ts=$(this).index();
        $(".tk-input textarea").val($.trim($(this).find("dd").text()))
    })
    $(".cancel").click(function(){
        $(".tk-bg").hide();
    })
    $(".submit").click(function(){
        $(".tk-bg").hide();
        $(".tk-in dl").eq(ts).find("dd").text($(".tk-input textarea").val());
    })

    if($(".answer .queitem article.ana-ar p").height()>190){
        $(".ana-ar .kai").show();
    }
})
