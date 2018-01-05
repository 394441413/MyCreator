(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/const.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bd025vtFTxKEYuiq+1UMy6k', 'const', __filename);
// scripts/const.js

"use strict";

//用于保存所有全局变量  
//window. + 大写变量名

window.LANG = "EN";
window.NETPATH = "127.0.0.1";
window.NETPORT = 3014;
window.Utils = require("scripts/tools/utils");
window.HttpManager = require("scripts/network/httpManager");
window.BoardManager = null;
window.AudioManager = null;
window.EventManager = null;
window.PomeloManager = null;

//添加数据引用
//window. + xxxData

window.LANGDATA = LANG == "CN" ? require("scripts/language/cn") : require("scripts/language/en");
window.NAMEDATA = require("scripts/gameData/nameData");

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
        //# sourceMappingURL=const.js.map
        