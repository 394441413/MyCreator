(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/network/httpManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '22e5eiNE15Cy76XaPFUKP3y', 'httpManager', __filename);
// scripts/network/httpManager.js

"use strict";

module.exports = {
    callRequest: function callRequest(url, msg, func, target, err) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var response = xhr.responseText;
                    target == null ? func(response) : target[func](response);
                } else {
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
    }
};

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=httpManager.js.map
        