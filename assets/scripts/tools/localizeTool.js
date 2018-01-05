cc.Class({
    extends: cc.Component,

    properties: {
        lanuageNo: {
            default: "L10000",
        },

    },

    // use this for initialization
    onLoad: function () {
        var lbl = this.getComponent(cc.Label);
        lbl = lbl == null ?  this.getComponent(cc.RichText) : lbl;
        if(lbl)
        {
            lbl.string = LANGDATA[this.lanuageNo];
        }
        
    },

});
