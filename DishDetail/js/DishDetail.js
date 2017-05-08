(function($) {
    appcan.button("#nav-left", "btn-act", function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});

    appcan.ready(function() {
        goodsImg();
        $.scrollbox($("body")).on("releaseToReload",
        function() { //After Release or call reload function,we reset the bounce
            $("#ScrollContent").trigger("reload", this);
        }).on("onReloading",
        function(a) { //if onreloading status, drag will trigger this event
        }).on("dragToReload",
        function() { //drag over 30% of bounce height,will trigger this event
        }).on("draging",
        function(status) { //on draging, this event will be triggered.
        }).on("release",
        function() { //on draging, this event will be triggered.
        }).on("scrollbottom",
        function() { //on scroll bottom,this event will be triggered.you should get data from server
            $("#ScrollContent").trigger("more", this);
        }).hide();
    })

    var mask_Mask = $("#Mask");

    mask_Mask.on("touchstart",
    function(e) {
        e.preventDefault();
    });
    mask_Mask.on("touchmove",
    function(e) {
        e.stopPropagation();
    });
    mask_Mask.on("tap",
    function(e) {
        $(e.target).removeClass("show");
        $("#Footer_mask").addClass('uhide');
        setTimeout(function() {
            $(e.target).removeClass("active");
        },
        300)
    });
    mask_Mask.show = function() {
        var self = this;
        self.addClass("active");
        $("#Footer_mask").removeClass('uhide');
        setTimeout(function() {
            self.addClass("show");
        },
        1);
    }
    
    function goodsImg() {
        //商品详情图片轮播
        var slider = appcan.slider({
            selector : '#slider',
            aspectRatio : 9 / 16,
            hasLabel : false,
            index : 0
        });
        slider.set([{
            img : "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2307858631,2683636875&fm=58"
        }, {
            img : "css/images/add-pic.png"
        }])
        slider.on("clickItem", function(index, data) {
            console.log(index, data);
        })
    }


    appcan.button(".btn", "ani-act", function() {

    })  
    
    var lv = appcan.listview({
        selector : "#listview",
        type : "thickLine",
        hasIcon : true,
        hasAngle : true,
        hasSubTitle : true,
        multiLine : 1,
    });
    lv.set([{
        title : "番茄（大红番茄）",
        describe:'<div class="sc-text-warn">约0.7千克，2个，小</div>',
        note:"当前供应商：连贵-蔬菜档",
        icon:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4060739535,73436139&fm=116&gp=0.jpg",
        id:"1"
    }, {
        title : "鸡蛋（农家蛋）",
        describe:'<div class="sc-text-warn">约1.2千克，4个</div>',
        note:"当前供应商：品泰贸易有限公司",
        icon:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3555834019,2289277352&fm=116&gp=0.jpg",
        id:"2"
    }])
    lv.on("click",function(ele,obj,curEle){
        mask_Mask.show();
    })
})($);