(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/tools/localizeTool.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ae78MvjTZPkY//xaNnIKDJ', 'localizeTool', __filename);
// scripts/tools/localizeTool.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        lanuageNo: {
            default: "L10000"
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        var lbl = this.getComponent(cc.Label);
        lbl = lbl == null ? this.getComponent(cc.RichText) : lbl;
        if (lbl) {
            lbl.string = LANGDATA[this.lanuageNo];
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
        //# sourceMappingURL=localizeTool.js.map
        