function set_buy_function () {
    appcan.button(".click_buy", "btn-act", function(){
        alert(1);
    })
}
        
function get_list_view (view_type) {  //view_type 可为商店列表，也可为推荐家庭菜品
    var index_list;
    switch (view_type){
        case 0:
            index_list = vendor_view();
            break;
        default:
            index_list = vendor_view();
    };
    return index_list;
}

function vendor_view () {
    var vendor_list = [{
        title : "番茄",
        describe:"80户下单",
        note:'8元/千克',
        icon:"shop_content/css/myImg/goods3.png",
        id:"1"
    }, {
        title : "前腿瘦肉",
        describe:"79户下单",
        note:"25元/千克",
        icon:"shop_content/css/myImg/goods2.png",
        id:"2"
    }, {
        title : "猪手",
        describe:"75户下单",
        note:"21元/千克",
        icon:"shop_content/css/myImg/goods4.png",
        id:"2"
    }, {
        title : "清远鸡",
        describe:"65户下单",
        note:"36元/千克",
        icon:"shop_content/css/myImg/goods1.png",
        id:"2"
    }, {
        title : "菜心",
        describe:"65户下单",
        note:"8元/千克",
        icon:"shop_content/css/myImg/goods5.png",
        id:"2"
    }];
    
    var listData = [];
    for (var i = 0,
        len = vendor_list.length; i < len; i++) {
        var list = {
            title : vendor_list[i].title,
            icon : vendor_list[i].icon,
            describe : '<div class="ub ub-ae"><div class="">龙光当月：</div><div class="t-a2 umar-l umar-r sc-text-warn tdlt">' + vendor_list[i].describe + '</div><div class="umar-l click_buy uba uc-a uinn1">立即购买</div></div>',
            note : '<div class="t-a2 ulev-5">价格：<span class="umar-l">' + vendor_list[i].note + '</span></div>'
        }
        listData.push(list);
    }
    return listData;
    
    return vendor_list;
}


