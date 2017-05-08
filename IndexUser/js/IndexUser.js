appcan.ready(function() {
    appcan.initBounce();
    set_button_click_function();
});

function set_button_click_function () {
    var button_list = get_button_list();
    for (var i=0; i < button_list.length; i++) {
        appcan.button(button_list[i], "btn-act", function() {
            on_click_function(this.id);
        });
    };
};

function on_click_function (button_id) {
    switch(button_id){
        case "portrait":
            alert(button_id);
            break;
        case "order":
            alert(button_id);
            break;
        case "coupon":
            alert(button_id);
            break;
        case "message":
            alert(button_id);
            break;
        case "profile":
            alert(button_id);
            break;
        case "security":
            alert(button_id);
            break;
    }
};

function get_button_list () {
    var button_list = Array(
        "#portrait",
        "#order",
        "#coupon",
        "#message",
        "#profile",
        "#security"
    );
    return button_list;
};