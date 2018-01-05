(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/tools/labelShadow.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5a8993YvB5DYbY+lKl8zYyC', 'labelShadow', __filename);
// scripts/tools/labelShadow.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        diffX: -1,
        diffY: 1
    },

    // use this for initialization
    start: function start() {
        if (cc.sys.isBrowser) {
            return;
        }
        var lblBool = this.getComponent(cc.Label);
        var richBool = this.getComponent(cc.RichText);
        var cloneNode = new cc.Node();
        var type;
        if (lblBool) {
            type = cc.Label;
        } else if (richBool) {
            type = cc.RichText;
        }
        if (cloneNode) {
            cloneNode.addComponent(type);
            cloneNode.getComponent(type).string = this.getComponent(type).string;
            cloneNode.getComponent(type).fontSize = this.getComponent(type).fontSize;

            cloneNode.parent = this.node.parent;
            cloneNode.color = cc.Color.BLACK;
            cloneNode.zIndex = this.node.zIndex - 1;
            cloneNode.setAnchorPoint(this.node.anchorX, this.node.anchorY);
            cloneNode.setPosition(this.node.x + this.diffX, this.node.y + this.diffY);
        }
    }
});

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
        //# sourceMappingURL=labelShadow.js.map
        