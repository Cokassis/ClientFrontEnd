function CokListView (lv, lvSelector) {
    this.listView = lv;
    this.lvSelector = lvSelector;
}

CokListView.prototype.set = function(dishes) {
    this.listView.set(dishes);
};


function Mask (maskId, footerMaskId) {
    this.setFooterMask(footerMaskId);
    this.setMaskPanel(maskId);
}

Mask.prototype.setMaskPanel = function(maskId) {
    this.maskPanel = $("#" + maskId);
    this.maskPanel.on("touchstart", function(e) {
        e.preventDefault();
    });
    ftMask = this.footerMask;
    this.maskPanel.on("tap", function(e) {
        $(e.target).removeClass("show");
        ftMask.addClass('uhide');
        setTimeout(function() {
            $(e.target).removeClass("active");
        },
        300);
    });
    this.maskPanel.on("touchstart", function(e) {
        e.preventDefault();
    });
};

Mask.prototype.setFooterMask = function(footerMaskId) {
    this.footerMask = $("#" + footerMaskId);
};

Mask.prototype._showpannel_ = function() {
    self = this.maskPanel;
    self.addClass("active");
    this.footerMask.removeClass('uhide');
    setTimeout(function() {
        self.addClass("show");
    },
    1);
};

function Controller (maskId, footerMaskId) {
    this.mask = new Mask(maskId, footerMaskId);
}

Controller.prototype.showMask = function() {
    this.mask._showpannel_();
};

function MenuController (maskId, footerMaskId) {
    Controller.call(this, maskId, footerMaskId);
    this.dataController = new DataController();
    this.tastes = [];
    this.cookingStyles = [];
    this.dishes = [];
    this.dishFilter = {
        dishesCounter : 10,
        increment : 10,
    };
}

MenuController.prototype = new Controller();

MenuController.prototype.addTaste = function(tasteId) {
    this.tastes.push(tasteId);
};

MenuController.prototype.removeTaste = function(tasteId) {
  
};

MenuController.prototype.setDishMenu = function(dishMenu, dishMenuSelector) {
    this.dishMenu = new CokListView(dishMenu, dishMenuSelector);
    this.refreshDishMenu();
};

MenuController.prototype.refreshDishMenu = function() {
    this.dishMenu.set(this._getMenu());
};

MenuController.prototype.setFilterMenu = function(
    tasteMenu, 
    tasteMenuSelector, 
    cookingStyleMenu,
    cookingStyleMenuSelector,
    MenuSelector
    ) 
{
    this.tasteMenu = new CokListView(tasteMenu, tasteMenuSelector);//tasteMenu;
    this.cookingStyleMenu = new CokListView(cookingStyleMenu, cookingStyleMenuSelector);
    this.menuSelector = $("#" + MenuSelector);
    this.refreshFilter();
};

MenuController.prototype.refreshFilter = function() {
    var arrData = this.dataController.getTastes();
    for (var i = 0, len = arrData.length; i < len; i++) {
        var list = {
            id : arrData[i].id,
            title : arrData[i].sort,
            checked : false,
        };
        this.tastes.push(list);

    };
    this.tasteMenu.set(this.tastes);
    
    var arrData = this.dataController.getCookingStyle();
    for (var i = 0, len = arrData.length; i < len; i++) {
        var list = {
            id : arrData[i].id,
            title : arrData[i].sort,
            checked : false,
        };
        this.cookingStyles.push(list);
    };
    this.cookingStyleMenu.set(this.cookingStyles);
    
    this.menuTypes = this.dataController.getMenuType();
    for (var i = 0, len = this.menuTypes.length; i < len; i++) {
        var htmlStr = "<option value=" + i + ">" + this.menuTypes[i].sort + "</option>";
        this.menuSelector.append(htmlStr);
    };
};

MenuController.prototype.showMore = function() {
    this.dishFilter.dishesCounter = this.dishFilter.dishesCounter + this.dishFilter.increment;
    this.refreshDishMenu();
};

MenuController.prototype.addtoShoppingCar = function() {
    var self = this;
    var slt = this.dishMenu.lvSelector;
    var checkedIds = [];
    var $ckbox = $(slt).find("input[type='checkbox']");
    $ckbox.each(function(index, element) {
        if ($(element).prop("checked") == true) {
            var checkedId = {id: self.dishes[index].id};
            checkedIds.push(checkedId);
        };
    });
    appcan.ajax({
        url : '',
        type : 'POST',
        data : checkedIds,
        dataType : "json",
        success : function(data) {
            alert("添加成功，在购物车等亲!")
        },
        error : function(e) {
            alert("亲，添加失败了!");
        }
    });
};

MenuController.prototype.filterDishes = function() {
    var self = this;
    var sltIndex = this.menuSelector.val();
    if (sltIndex == "") {sltIndex = 0};
    var selectedId = this.menuTypes[sltIndex].id;
    var slt = this.tasteMenu.lvSelector;
    var tasteCkIds = [];
    var $ckbox = $(slt).find("input[type='checkbox']");
    $ckbox.each(function(index, element) {
        if ($(element).prop("checked") == true) {
            var checkedId = {id: self.tastes[index].id};
            tasteCkIds.push(checkedId);
        };
    });
    
    var slt = this.cookingStyleMenu.lvSelector;
    var cookingStyleCkIds = [];
    var $ckbox = $(slt).find("input[type='checkbox']");
    $ckbox.each(function(index, element) {
        if ($(element).prop("checked") == true) {
            var checkedId = {id: self.cookingStyles[index].id};
            cookingStyleCkIds.push(checkedId);
        };
    });
    
    this.dishFilter = {
        menuId : selectedId,
        tasteIds : tasteCkIds,
        cookingStyleIds : cookingStyleCkIds,
        dishesCounter : 10,
    };
    
    this.refreshDishMenu();
};

MenuController.prototype.searchDishes = function(searchText) {
    this.dishFilter = {
        searchText : searchText,
    };
    
    this.refreshDishMenu();
};


MenuController.prototype.showDishDetail = function(dishId) {
    var inputID = {dishID: dishId};
    appcan.ajax({
        url : '',
        type : 'POST',
        data : inputID,
        dataType : "json",
        success : function(data) {
            appcan.window.open({
                name:'dish_detail',
                dataType:0,
                data:'dish_detail.html'
            });
        },
        error : function(e) {
            alert("亲，查看失败了!");
        }
    });
};

MenuController.prototype._getMenu = function () {
    this.dishes = [];
    var arrData = this.dataController.getDishes(this.dishFilter);
    for (var i = 0, len = arrData.length; i < len; i++) {
        var list = {
            id : arrData[i].id,
            title : arrData[i].synopsis,
            icon : arrData[i].goods,
            describe : '<div class="ub ub-ac"><div class="sc-text-warn">' + arrData[i].price + '</div></div>',
            note : '<div class="t-a2 ulev-1">人气<span class="umar-l">' + arrData[i].popularity + '</span></div>'
        };
        this.dishes.push(list);
    };
    return this.dishes;
};
