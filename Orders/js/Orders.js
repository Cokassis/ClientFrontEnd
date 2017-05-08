(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});

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

	appcan.ready(function() {
        })
        var lv1 = appcan.listview({
            selector : "#listview",
            type : "thickLine",
            hasIcon : true,
            hasAngle : true,
            hasSubTitle : true,
            multiLine : 1
        });
        lv1.set([{
            icon : 'Orders/css/myImg/img1.png',
            title : '番茄炒蛋',
            note : '番茄2个，鸡蛋4个',
            subTitle : '￥19.5',
            subNote : 'x1'
        }]);
        appcan.button(".btn", "ani-act", function() {
        })
})($);