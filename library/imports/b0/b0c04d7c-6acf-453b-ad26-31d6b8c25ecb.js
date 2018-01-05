"use strict";
cc._RF.push(module, 'b0c0418as9FO60mMda4wl7L', 'boardManager');
// scripts/tools/boardManager.js

"use strict";

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node);
        BoardManager = this;
        this.args = null;
    },

    openBoard: function openBoard(boardName, args) {
        this.args = args;
        cc.loader.loadRes("prefab/" + boardName, function (err, prefab) {
            if (err) {
                Utils.log(err);
            } else {
                var newNode = cc.instantiate(prefab);
                var parent = cc.find("Canvas/Board Node");
                if (parent != null) {
                    parent.addChild(newNode);
                } else {
                    parent = new cc.Node();
                    parent.name = "Board Node";
                    cc.find("Canvas").addChild(parent);
                    parent.addChild(newNode);
                }
                BoardManager.args = null;
            }
        });
    },

    removeAllBoard: function removeAllBoard() {
        var parent = cc.find("Canvas/Board Node");
        if (parent) {
            parent.removeAllChildren();
        }
    },

    removeBoardByName: function removeBoardByName(boardName) {
        var parent = cc.find("Canvas/Board Node/" + boardName);
        if (parent) {
            parent.removeFromParent();
        }
    }
});

cc._RF.pop();