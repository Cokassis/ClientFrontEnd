function DataController () {
  
}

DataController.prototype.getSliderData = function() {
	var slider_data = [{
        img : "IndexMain/css/myImg/elec-ad1.png",
        label:""
    }, {
        img : "IndexMain/css/myImg/elec-ad1.png",
        label:""
    }, {
        img : "IndexMain/css/myImg/elec-ad1.png",
        label:""
    }];
    return slider_data;
};

DataController.prototype.getRecDishes = function(first_argument) {
    var recDishes = [{
        title : "番茄炒蛋",
        describe:"暂估价：￥8.5",
        note:"来自：我的菜谱，最近下单：2016/11/20",
        icon:"./css/res/appcan_s.png",
        id:"1"
    }, {
        title : "酸辣土豆丝",
        describe:"暂估价：￥3.5",
        note:"来自：我的菜谱，最近下单：2016/11/20",
        icon:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4219958171,3292178758&fm=116&gp=0.jpg",
        id:"2"
    }, {
        title : "糖醋排骨",
        describe:"暂估价：￥21",
        note:"来自：我的菜谱，最近下单：2016/11/20",
        icon:"./css/res/appcan_s.png",
        id:"2"
    }];
    return recDishes;
};