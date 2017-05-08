(function($) {
    appcan.button("#Icon", "btn-act",
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

	var tabview = appcan.tab({
    selector : "#tabview",
    hasIcon : false,
    hasAnim : true,
    hasLabel : true,
    hasBadge : false,
    data : [{
        label : "全部",
    }, {
        label : '好评<span class="t-org-f1 ufm1">999+</span>',
    }, {
        label : '中评<span class="t-org-f1 ufm1">999+</span>',
    }, {
        label : '差评<span class="t-org-f1 ufm1">45</span>',
    }]
});
tabview.on("click", function(obj, index) {
})
/*mvvm*/
var Service = new MVVM.Service({
    pretreatment: function(data, option) {
        return data;
    },
    dosuccess: function(data, option) {
        return data;
    },
    doerror: function(e, err, option) {
        return err;
    },
    validate: function(data, option) {
        return 0;
    },
    ajaxCall: function(data, option) {
        var self = this;
        var data = [{
            "avator" : "\'IndexServices/css/myImg/userImg.png\'",
            "username" : "用户名",
            "comment" : "味道还不错，物流一般。。。散装包装，生产日期见合格证，但我没看到合格证，所...",
            "goodsImg" : [{
                "gsimg" : "\'IndexServices/css/myImg/img1.png\'",
            }, {
                "gsimg" : "\'IndexServices/css/myImg/img2.png\'",
            }, {
                "gsimg" : "\'IndexServices/css/myImg/img3.png\'",
            }, {
                "gsimg" : "\'IndexServices/css/myImg/img4.png\'",
            }, {
                "gsimg" : "\'IndexServices/css/myImg/img5.png\'",
            }],
            "time" : "2014.02.25",
            "addTo" : "4天后追加，质量可好了，下次还来",
        }, {
            "avator" : "\'IndexServices/css/myImg/userImg.png\'",
            "username" : "小枫",
            "comment" : "味道还不错，物流一般。。。散装包装，生产日期见合格证，但我没看到合格证，所...",
            "goodsImg" : [],
            "time" : "2014.02.25",
            "addTo" : "[掌柜解释]谢谢！",
        }];
        option.success(self.dosuccess(data, option));
        /*appcan.request.ajax({
                url: "",
                type: "GET",
                data: this.pretreatment(data, option),
                dataType: "",
                contentType: "application/x-www-form-urlencoded",
                success: function(data) {
                    var res = self.validate(data, option);
                    if (!res) option.success(self.dosuccess(data, option));
                    else option.error(self.doerror(data, res, option));
                },
                error: function(e, err) {
                    option.error(self.doerror(e, err, option));
                }
            });*/
    }
});
var Model_Collection = MVVM.Model.extend({
    defaults: {},
    computeds: {},
    sync: function(method, model, options) {
        switch (method) {
        case "create":

            break;
        case "update":

            break;
        case "patch":

            break;
        case "delete":

            break;
        default:
            break;
        }
    }
})
var Collection = new(MVVM.Collection.extend({
    initialize: function() {
        return;
    },
    parse: function(data) {
        return data;
    },
    model: Model_Collection,
    sync: function(method, collection, options) {
        switch (method) {
        case "read":
            Service.request({}, options);
            break;
        default:
            break;
        }
    }
}))();
var ViewModel = new(MVVM.ViewModel.extend({
    el: "#ele_comment",
    initialize: function() {
        this.collection.fetch({})
        return;
    },
    collection: Collection

}))();
})($);