function get_user_type () {
    var user_type = 0; // 0:logined user, 1:anonymous user
    return user_type;
}

function get_data (input_data) {
    try {
        if (!check_data_format(input_data)) {
            throw "输入不合法";
        }
        else {
            var resp = send_request(input_data);
        }
    }
    catch(err){
        alert(err);
    }
}

function check_data_format (input_data) {
    var check_passed = true;
    return check_passed;
}

function send_request (input_data) {
    indata= input_data;
    appcan.request.ajax(
        {
            url : indata.url,
            type : indata.type,
            data : indata.data,
            offline : true,
            offlineDataPath : 'wgt://aaa/',
            success : indata.func
        }
    );    
}