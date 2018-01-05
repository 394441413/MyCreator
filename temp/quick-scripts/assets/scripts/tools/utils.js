(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/tools/utils.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8e901Y4I/1LxZdP6W944Zru', 'utils', __filename);
// scripts/tools/utils.js

'use strict';

var encrypt = require('scripts/tools/encryptjs/encryptjs');
var secretkey = 'GameXX123';

//通用方法
module.exports = {

    //打印log
    log: function log(value, param) {
        param ? cc.log(value, param) : cc.log(value);
    },

    //读取存档
    loadUserData: function loadUserData(key) {
        var cipherText = cc.sys.localStorage.getItem(key);
        return cipherText == null ? null : JSON.parse(encrypt.decrypt(cipherText, secretkey, 256));
    },

    //设置存档
    setUserData: function setUserData(key, value) {
        var dataString = JSON.stringify(value);
        var encrypted = encrypt.encrypt(dataString, secretkey, 256);
        cc.sys.localStorage.setItem(key, encrypted);
    },

    //检查存档值数据
    checkUserData: function checkUserData(key, value) {
        return Utils.loadUserData(key) == value ? true : false;
    },

    //获取当前时间戳
    getTimestamp: function getTimestamp() {
        return Date.parse(new Date()) / 1000;
    },

    //添加简单阴影效果 网页版不可用
    addShadow: function addShadow(preNode) {
        var diffX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        var diffY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        if (cc.sys.isBrowser) {
            return null;
        }
        var lblBool = preNode.getComponent(cc.Label);
        var richBool = preNode.getComponent(cc.RichText);
        var cloneNode = new cc.Node();
        var type;
        if (lblBool) {
            type = cc.Label;
        } else if (richBool) {
            type = cc.RichText;
        }
        if (cloneNode) {
            cloneNode.addComponent(type);
            cloneNode.getComponent(type).string = preNode.getComponent(type).string;
            cloneNode.getComponent(type).fontSize = preNode.getComponent(type).fontSize;

            cloneNode.parent = preNode.node.parent;
            cloneNode.color = cc.Color.BLACK;
            cloneNode.zIndex = preNode.node.zIndex - 1;
            cloneNode.setAnchorPoint(preNode.node.anchorX, preNode.node.anchorY);
            cloneNode.setPosition(preNode.node.x + preNode.diffX, preNode.node.y + preNode.diffY);
            return cloneNode;
        }
    },

    generateUUID: function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return uuid;
    },

    captureScreen: function captureScreen(width, height, node) {
        //注意，EditBox，VideoPlayer，Webview 等控件无法被包含在截图里面
        //因为这是 OpenGL 的渲染到纹理的功能，上面提到的控件不是由引擎绘制的

        if (CC_JSB) {
            //如果待截图的场景中含有 mask，请使用下面注释的语句来创建 renderTexture
            // var renderTexture = cc.RenderTexture.create(1280,640, cc.Texture2D.PIXEL_FORMAT_RGBA8888, gl.DEPTH24_STENCIL8_OES);
            var renderTexture = cc.RenderTexture.create(width, height);

            //实际截屏的代码
            renderTexture.begin();
            //this.richText.node 是我们要截图的节点，如果要截整个屏幕，可以把 this.richText 换成 Canvas 切点即可
            node._sgNode.visit();
            renderTexture.end();
            renderTexture.saveToFile("demo.png", cc.ImageFormat.PNG, true, function () {
                cc.log("capture screen successfully!");
            });
            //打印截图路径
            //cc.log(jsb.fileUtils.getWritablePath());
        }
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
        //# sourceMappingURL=utils.js.map
        