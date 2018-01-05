
module.exports = {
    callRequest: function (url, msg, func, target, err) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var response = xhr.responseText;
                    target == null ? func(response) : target[func](response);
                }
                else {
                    Utils.log("连接错误");
                    if (err) {
                        err();
                    }
                }
            }
        };
        xhr.timeout = 3000;
        xhr.ontimeout = function (e) {
            Utils.log("连接超时");
            if (err) {
                err();
            }
        };
        xhr.open("POST", url, true);
        xhr.send(msg);
    },
};