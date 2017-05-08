(function($) {
    appcan.button("#Icon", "btn-act", function() {
        appcan.window.close(-1);
    });
    appcan.ready(function() {
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

    var lv = appcan.listview({
        selector : "#listview",
        type : "thickLine",
        hasIcon : true,
        hasAngle : true,
        hasSubTitle : false
    });
    lv.set([{
        icon : "SearchFoods/css/myImg/img.png",
        title : "小猪红烧肉",
        describe : '暂估价：11.5元',
        note : '龙光预订：15'
    }, {
        icon : "SearchFoods/css/myImg/img.png",
        title : "酸辣土豆丝",
        describe : '暂估价：5.5元',
        note : '龙光预订：15'
    }]);
    lv.on('click', function(ele, context, obj, subobj) {
        //appcan.window.open(context.pagename,context.pageurl,10);
    })
    
    var lv_result = appcan.listview({
        selector : "#lv-result",
        type : "thickLine",
        hasIcon : true,
        hasAngle : true,
        hasSubTitle : false
    });
    lv_result.set([{
        icon : "SearchFoods/css/myImg/img.png",
        title : "小猪红烧肉",
        describe : '暂估价：11.5元',
        note : '来自：我的菜谱'
    }, {
        icon : "SearchFoods/css/myImg/img.png",
        title : "酸辣土豆丝",
        describe : '暂估价：5.5元',
        note : '来自：公共菜谱'
    }, {
        icon : "SearchFoods/css/myImg/img.png",
        title : "酸辣土豆丝",
        describe : '暂估价：5.5元',
        note : '来自：sysuye'
    }]);
    lv_result.on('click', function(ele, context, obj, subobj) {
        //appcan.window.open(context.pagename,context.pageurl,10);
    })
})($);