(function($) {
    aController = new MenuController("Mask", "Footer_mask");
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

    appcan.button("#nav-left", "btn-act", function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act", function() {
        
    });
    appcan.button("#Filter", "btn-act", function () {
        aController.showMask();
    });
    appcan.button("#show-more", "btn-act", function () {
        aController.showMore();
    });
    appcan.button("#addto-shopping-car", "btn-act", function () {
        aController.addtoShoppingCar();
    });
    appcan.button("#filter-btn", "btn-act", function () {
		aController.filterDishes();
        alert(1);
    });
    appcan.button("#sch-Dishes", "btn-act", function () {
        aController.searchDishes();
    });
    
    var lv = appcan.listview({
        selector : "#dish-listview",
        type : "thickLine",
        hasIcon : true,
        hasAngle : true,
        hasSubTitle : false,
        hasCheckbox : true,
        multiLine : 1,
    });
    lv.on("click",function(ele,obj,curEle){
    	var $curCheckbox = $(ele).find("input[type='checkbox']").first();
    	var preChecked = $curCheckbox.prop("checked");
    	$curCheckbox.prop("checked", !preChecked);
    	
    	aController.showDishDetail(obj.id);
    });
    lv.selectedNum = 0;
    aController.setDishMenu(lv, "#dish-listview");
    
    var lv1 = appcan.listview({
        selector : "#listview1",
        type : "thinLine",
        hasAngle : false,
        hasCheckbox : true,
        multiLine : 1,
    });
    lv1.on("click",function(ele,obj,curEle){
    	alert(obj.id);
    });
    
    var lv2 = appcan.listview({
        selector : "#listview2",
        type : "thinLine",
        hasAngle : false,
        hasCheckbox : true,
        multiLine : 1,
    });
    aController.setFilterMenu(lv1, "#listview1", lv2, "#listview2", "Menu-Selector");
    
    appcan.select(".select",function(ele,value){
        console.log(value);
    });
    
    $('.ck-all').find("input[type='checkbox']").on('change',function(evt){
        var checkedAll = $('.ck-all').find("input[type='checkbox']").is(':checked');
        $("#dish-listview").find("input[type='checkbox']").prop("checked", checkedAll);
    });
    
})($);
