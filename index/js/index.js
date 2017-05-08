var show_page = new Array();
show_page[0] = false;
show_page[1] = false;
show_page[2] = false;
show_page[3] = false;
show_page[4] = false; 
var tabview;
var a = 0;

appcan.ready(function() {
    tabview = creat_tabview();
    OpenContent(0);
});

appcan.button(".nav-btn", "btn-act", function() {
    appcan.window.close(-1);
});

function creat_tabview () {
    tabview = appcan.tab({
        selector : "#tabview",
        hasIcon : true,
        hasAnim : false,
        hasLabel : true,
        hasBadge : true,
        index: 0,
        data : [{
            label : "首页",
            "icon":"fa-home"
        }, {
            label : "生活圈",
            "icon":"fa-list"
        }, {
            label : "社区服务",
            "icon":"fa-list"
        }, {
            label : "购物车",
            "icon":"fa-shopping-cart"
        }, {
            label : "用户",
            "icon":"fa-user"
            }]
    }); 
    tabview.on("click",function(obj, index){
        OpenContent(index);
    })
    return tabview;
}

function header_height () {
    var headerH = 0;
    appcan.window.evaluatePopoverScript({
        name: "",
        popName: "menu",
        scriptContent: "fadd_click_call_back(" + headerH + ")"
    });
}

function add_html_extension_to_end (p_name) {
    page_name_html = p_name + ".html";
    return page_name_html;
}

function PageInfo (index) {
    var PageNames = ["IndexMain", "", "", "IndexShoppingCart", "IndexUser"];
    return PageNames[index];
}

function OpenContent (index) {
    var p_name = PageInfo(index);
    if (p_name !== "") {
        titHeight = 0;
        if (!show_page[index]) {
            appcan.frame.open(p_name, add_html_extension_to_end(p_name), 0, titHeight);
            appcan.window.resizePopover(
                p_name, 
                0, 
                titHeight, 
                $("#content").offset().width, 
                $("#content").offset().height
            );
            window.onorientationchange = window.onresize = function() {
                appcan.frame.resize(p_name, 0, titHeight);
            };
            show_page[index] = true;
        }
        else{
            appcan.window.bringPopoverToFront(p_name);
            appcan.window.evaluatePopoverScript({
                name: '',
                popName: p_name,
                scriptContent: 'bringMyPopoverToFront()'
            });
        };
    };
}

function open_new_window(w_name){
    appcan.window.open({
        name: w_name,
        dataType: 0,
        data: w_name + ".html",
        width: 300,
        height: 200
    });
}
