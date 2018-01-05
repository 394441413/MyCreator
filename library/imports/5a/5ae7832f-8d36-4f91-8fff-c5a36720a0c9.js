"use strict";
cc._RF.push(module, '5ae78MvjTZPkY//xaNnIKDJ', 'localizeTool');
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