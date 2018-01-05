cc.Class({
    extends: cc.Component,

    properties: {
        diffX: -1,
        diffY: 1,
    },

    // use this for initialization
    start: function () {
        if(cc.sys.isBrowser)
        {
            return;
        }
        var lblBool = this.getComponent(cc.Label);
        var richBool = this.getComponent(cc.RichText);
        var cloneNode = new cc.Node();
        var type;
        if (lblBool) {
            type = cc.Label;
        }
        else if (richBool) {
            type = cc.RichText;   
        }
        if (cloneNode) {
            cloneNode.addComponent(type);
            cloneNode.getComponent(type).string = this.getComponent(type).string;
            cloneNode.getComponent(type).fontSize = this.getComponent(type).fontSize;

            cloneNode.parent = this.node.parent;
            cloneNode.color = cc.Color.BLACK;
            cloneNode.zIndex = this.node.zIndex - 1;
            cloneNode.setAnchorPoint(this.node.anchorX,this.node.anchorY);
            cloneNode.setPosition(this.node.x + this.diffX,this.node.y + this.diffY);
        }
    },
});
