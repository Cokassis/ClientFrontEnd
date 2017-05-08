function MainController (vdLvSelector, advSelector) {
    this._Init(vdLvSelector, advSelector);
}

MainController.prototype._Init = function(vdLvSelector, advSelector) {
    this.dtController = new DataController();
    this.vdListveiw = appcan.listview({
        selector : "#" + vdLvSelector,
        type : "thickLine",
        hasIcon : true,
        hasAngle : true,
        hasSubTitle : true,
        multiLine : 1,
    });
    this.vdListveiw.set(this.dtController.getRecDishes());
    this.vdListveiw.on("click",function(ele,obj,curEle){
        appcan.window.open({
            name:'shop',
            dataType:0,
            data:'shop.html'
        });
    });
    
    this.advSlider = appcan.slider({
      selector : '#' + advSelector,
      aspectRatio:6/16,
      hasLabel:false,
      index:0
    });
    
    this.advSlider.set(this.dtController.getSliderData());
    
    
    this.advSlider.on("clickItem",function(index,data){
        
    });
    
    this._setButtonClickFunction();
    
    $("#FoodsSearcher").focus( function () {
        appcan.window.open({
            name: "SearchFoods",
            data: "SearchFoods.html",
            dataType: 0,
        });
    });
};

MainController.prototype._setButtonClickFunction = function() {
    var self = this;
    var button_list = Array(
        "#Menu",
        "#OnSale",
        "#Market",
        "#Orders"
    );
    for (var i=0; i < button_list.length; i++) {
        appcan.button(button_list[i], "btn-act", function() {
           self._onClickFunction(this.id);
        });
    };
};

MainController.prototype._onClickFunction = function(btnId) {
    appcan.window.open({
        name: btnId,
        data: btnId + ".html",
        dataType: 0,
    });
};
