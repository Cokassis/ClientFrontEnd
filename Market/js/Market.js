var mask_Mask = $("#Mask");
(function($) {
    appcan.button("#nav-left", "btn-act", function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
    appcan.select(".select",function(ele,value){
        console.log(value);
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
    });

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
        300);
    });
    mask_Mask.show = function() {
        var self = this;
        self.addClass("active");
        $("#Footer_mask").removeClass('uhide');
        setTimeout(function() {
            self.addClass("show");
        },
        1);
    };
})($);

(function($){
    var lv = appcan.listview({
        selector : "#listview",
        type : "thickLine",
        hasIcon : true,
        hasAngle : true,
        hasSubTitle : false,
        multiLine : 1,
    });
    lv.set(get_materials(0));
    lv.on("click",function(ele,obj,curEle){
        mask_Mask.show();
    });
        
    var arrData = getTastes();
    var listData = [];
    for (var i = 0,
        len = arrData.length; i < len; i++) {
        var list = {
            title : arrData[i].sort
        };
        listData.push(list);
    };
    
    var lv1 = appcan.listview({
        selector : "#listview1",
        type : "thinLine",
        hasAngle : false,
        hasCheckbox : true,
        multiLine : 1,
    });
    
    lv1.set(listData);
    
    lv1.on('click', function(ele, context, obj, subobj) {

    });
    
    var arrData = getCookingStyle();
    var listData = [];
    for (var i = 0,
        len = arrData.length; i < len; i++) {
        var list = {
            title : arrData[i].sort
        };
        listData.push(list);

    };
    var lv2 = appcan.listview({
        selector : "#listview2",
        type : "thinLine",
        hasAngle : false,
        hasCheckbox : true,
        multiLine : 1,
    });
    lv2.set(listData);
    lv2.on('click', function(ele, context, obj, subobj) {

    });
})($);

function get_materials (index) {
    var listData;
    switch (index) {
        case 0:
            listData = show_vendors();
            break;
        case 1:
            listData = show_materials();
            break;
        default:
            listData = show_vendors();
    }
    return listData;
}

function show_vendors() {
    var arrData = getVendors();

    var listData = [];
    for (var i = 0,
        len = arrData.length; i < len; i++) {
        var list = {
            title : arrData[i].synopsis,
            icon : arrData[i].goods,
            describe : '<div class="ub ub-ae"><div class="sc-text-warn ">' + arrData[i].price + '</div><div class="t-a2 ulev-4 umar-l tdlt">' + arrData[i].price2 + '</div></div>',
            note : '<div class="t-a2 ulev-1">好评率：<span class="umar-l">' + arrData[i].popularity + '</span></div>'
        };
        listData.push(list);
    }
    return listData;
}

function show_materials () {
    var arrData = getMaterials();

    var listData = [];
    for (var i = 0,
        len = arrData.length; i < len; i++) {
        var list = {
            title : arrData[i].synopsis,
            icon : arrData[i].goods,
            describe : '<div class="ub ub-ae"><div class="sc-text-warn ">' + arrData[i].price + '</div><div class="t-a2 ulev-4 umar-l tdlt">' + arrData[i].price2 + '</div></div>',
            note : '<div class="t-a2 ulev-1">人气<span class="umar-l">' + arrData[i].popularity + '</span></div>'
        };
        listData.push(list);
    }
    return listData;
}