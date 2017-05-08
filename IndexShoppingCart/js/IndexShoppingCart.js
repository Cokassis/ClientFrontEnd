(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {});
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
    });

	    var mask_Mask = $("#Mask");
    appcan.ready(function() {      
        // setTimeout(function(){
            // mask_Mask.show();
        // },2000)
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
	    }
    );
    mask_Mask.show = function() {
        var self = this;
        self.addClass("active");
        $("#Footer_mask").removeClass('uhide');
        setTimeout(function() {
            self.addClass("show");
        },
        1);
    };
    
    var lv = appcan.listview({
        selector : "#listview",
        type : "thickLine",
        hasIcon : true,
        hasAngle : true,
        hasSubTitle : true,
        hasCheckbox : true,
        multiLine : 1,
    });
    lv.set(getOrders());
    lv.on("click",function(ele,obj,curEle){
        //mask_Mask.show();
    });
    var lv_recommended = appcan.listview({
        selector : "#lv_recommended",
        type : "thickLine",
        hasIcon : true,
        hasAngle : true,
        hasSubTitle : true,
        multiLine : 1,
    });
    lv_recommended.set(getRecommends());
    lv_recommended.on("click",function(ele,obj,curEle){
        if (add_to_dish_click) {
            add_to_dish_click = false;
        } else{
            alert("调用菜品界面");
        };
    });
})($);