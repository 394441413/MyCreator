"use strict";
cc._RF.push(module, 'bd025vtFTxKEYuiq+1UMy6k', 'const');
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