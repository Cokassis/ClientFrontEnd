function DataController () {
  
}

DataController.prototype.getDishes = function(filter) {
    var arrData = [{
    	"id": 001,
        "goods" : "https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=25946309,3698281648&fm=85&s=FD029A1C52037753802E04E40300E029",
        "synopsis" : "番茄炒蛋",
        "price" : "明日估计：￥69",
        "price2" : "加入订单",
        "popularity" : "18，最近下单日期：2016/11/20",

    }, {
    	"id": 002,
        "goods" : "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1494816404,509099696&fm=58",
        "synopsis" : "酸辣土豆丝",
        "price" : "明日估计：￥69",
        "price2" : "加入订单",
        "popularity" : "18，最近下单日期：2016/11/20",
    }, {
    	"id": 003,
        "goods" : "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1120639856,2839107176&fm=58",
        "synopsis" : "糖醋排骨",
        "price" : "明日估计：￥69",
        "price2" : "加入订单",
        "popularity" : "18，最近下单日期：2016/11/20",
    }, {
    	"id": 004,
        "goods" : "https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=3506879568,2596659122&fm=85&s=86345685F049754F1201D5C103007033",
        "synopsis" : "头菜肉饼",
        "price" : "明日估计：￥69",
        "price2" : "加入订单",
        "popularity" : "18，最近下单日期：2016/11/20",
    }, {
    	"id": 005,
        "goods" : "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=595838497,744523892&fm=58",
        "synopsis" : "虾皮鸡蛋饼",
        "price" : "明日估计：￥69",
        "price2" : "加入订单",
        "popularity" : "18，最近下单日期：2016/11/20",
    }, {
    	"id": 006,
        "goods" : "https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=3838976742,1525240568&fm=85&s=D110349F081157F3CC0519EC0300F020",
        "synopsis" : "花生煲猪手",
        "price" : "明日估计：￥69",
        "price2" : "加入订单",
        "popularity" : "18，最近下单日期：2016/11/20",
    }];
    
    return arrData;
};

DataController.prototype.getMenuType = function() {
    var arrData = [{
        "id" : 001,
        "sort" : "家庭菜谱",
    }, {
        "id": 002,
        "sort" : "龙光菜谱",
    },{
        "id": 003,
        "sort" : "厨中君菜谱",
    }];
    return arrData;
};


DataController.prototype.getTastes = function() {
    var arrData = [{
    	"id" : 001,
        "sort" : "酸",
    }, {
    	"id": 002,
        "sort" : "甜",
    },{
    	"id": 003,
        "sort" : "苦",
    }, {
    	"id": 004,
        "sort" : "辣",
    },{
    	"id": 005,
        "sort" : "咸",
    }];
    return arrData;
};

DataController.prototype.getCookingStyle = function() {
    var arrData = [{
    	"id": 001,
        "sort" : "家常菜",
    }, {
    	"id": 002,
        "sort" : "川菜",
    }, {
    	"id": 003,
        "sort" : "湘菜",
    }, {
    	"id": 004,
        "sort" : "粤菜",
    }, {
    	"id": 005,
        "sort" : "客家菜",
    }, {
    	"id": 006,
        "sort" : "潮州菜",
    }];
    return arrData;
};

function show_neighbour_menu() {
    var arrData = [{
        "goods" : "menu_content/css/myImg/gs1.png",
        "synopsis" : "邻居的情人节礼物怡吻手工松露巧...",
        "price" : "￥69",
        "price2" : "加入订单",
        "popularity" : "18",

    }, {
        "goods" : "menu_content/css/myImg/gs2.png",
        "synopsis" : "香港OPPO女包2014新款包",
        "price" : "￥69",
        "price2" : "加入订单",
        "popularity" : "18",
    }, {
        "goods" : "menu_content/css/myImg/gs3.png",
        "synopsis" : "包邮零俊间厅柜 门厅玄关隔",
        "price" : "￥69",
        "price2" : "加入订单",
        "popularity" : "68",
    }, {
        "goods" : "menu_content/css/myImg/gs4.png",
        "synopsis" : "普耐尔S1学习机安卓系统7寸",
        "price" : "￥629",
        "price2" : "加入订单",
        "popularity" : "21",
    }, {
        "goods" : "menu_content/css/myImg/gs5.png",
        "synopsis" : "KINGBAND棒球服男 棒球衫",
        "price" : "￥69",
        "price2" : "加入订单",
        "popularity" : "233",
    }, {
        "goods" : "menu_content/css/myImg/gs6.png",
        "synopsis" : "奢谷SHEGU女士韩版上衣",
        "price" : "￥69",
        "price2" : "加入订单",
        "popularity" : "122",
    }];

    var listData = [];
    for (var i = 0,
        len = arrData.length; i < len; i++) {
        var list = {
            title : arrData[i].synopsis,
            icon : arrData[i].goods,
            describe : '<div class="ub ub-ac"><div class="sc-text-warn">' + arrData[i].price + '</div></div>',
            note : '<div class="t-a2 ulev-1">人气<span class="umar-l">' + arrData[i].popularity + '</span></div>'
        };
        listData.push(list);
    }
    return listData;
}


function show_common_menu() {
    var arrData = [{
        "goods" : "menu_content/css/myImg/gs1.png",
        "synopsis" : "厨中君的情人节礼物怡吻手工松露巧...",
        "price" : "￥69",
        "price2" : "加入订单",
        "popularity" : "18",

    }, {
        "goods" : "menu_content/css/myImg/gs2.png",
        "synopsis" : "香港OPPO女包2014新款包",
        "price" : "￥69",
        "price2" : "加入订单",
        "popularity" : "18",
    }, {
        "goods" : "menu_content/css/myImg/gs3.png",
        "synopsis" : "包邮零俊间厅柜 门厅玄关隔",
        "price" : "￥69",
        "price2" : "加入订单",
        "popularity" : "68",
    }, {
        "goods" : "menu_content/css/myImg/gs4.png",
        "synopsis" : "普耐尔S1学习机安卓系统7寸",
        "price" : "￥629",
        "price2" : "加入订单",
        "popularity" : "21",
    }, {
        "goods" : "menu_content/css/myImg/gs5.png",
        "synopsis" : "KINGBAND棒球服男 棒球衫",
        "price" : "￥69",
        "price2" : "加入订单",
        "popularity" : "233",
    }, {
        "goods" : "menu_content/css/myImg/gs6.png",
        "synopsis" : "奢谷SHEGU女士韩版上衣",
        "price" : "￥69",
        "price2" : "加入订单",
        "popularity" : "122",
    }];

    var listData = [];
    for (var i = 0,
        len = arrData.length; i < len; i++) {
        var list = {
            title : arrData[i].synopsis,
            icon : arrData[i].goods,
            describe : '<div class="ub ub-ac"><div class="sc-text-warn">' + arrData[i].price + '</div></div>',
            note : '<div class="t-a2 ulev-1">人气<span class="umar-l">' + arrData[i].popularity + '</span></div>'
        };
        listData.push(list);
    };
    return listData;
};