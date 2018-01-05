cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
        BoardManager = this;
        this.args = null;
    },

    openBoard: function (boardName, args) {
        this.args = args;
        cc.loader.loadRes("prefab/" + boardName, function (err, prefab) {
            if (err) {
                Utils.log(err);
            }
            else {
                var newNode = cc.instantiate(prefab);
                var parent = cc.find("Canvas/Board Node");
                if (parent != null) {
                    parent.addChild(newNode);
                }
                else {
                    parent = new cc.Node();
                    parent.name = "Board Node";
                    cc.find("Canvas").addChild(parent);
                    parent.addChild(newNode);

                }
                BoardManager.args = null;
            }
        });
    },

    removeAllBoard: function () {
        var parent = cc.find("Canvas/Board Node");
        if (parent) {
            parent.removeAllChildren();
        }
    },

    removeBoardByName: function (boardName) {
        var parent = cc.find("Canvas/Board Node/" + boardName);
        if (parent) {
            parent.removeFromParent();
        }
    },
});
