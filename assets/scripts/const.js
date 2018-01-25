//用于保存所有全局变量  
//window. + 大写变量名

window.LANG          = "EN";
window.NETPATH       = "127.0.0.1";
window.NETPORT       = 3014;
window.Utils         = require("./tools/utils");
window.HttpManager   = require("./network/httpManager");
window.BoardManager  = null;
window.AudioManager  = null;
window.EventManager  = null;
window.PomeloManager = null;

//添加数据引用
//window. + xxxData

window.LANGDATA     = (LANG == "CN") ? require("./language/cn") : require("./language/en");
window.NAMEDATA     = require("./gameData/nameData");

