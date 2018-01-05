(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/network/pomeloManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8983dHdr11BYYxqQ7IOw11s', 'pomeloManager', __filename);
// scripts/network/pomeloManager.js

"use strict";

cc.Class({
    extends: cc.Component,

    onLoad: function onLoad() {
        this.host = "";
        this.port = "";
        PomeloManager = this;
    },
    start: function start() {
        var uuid = Utils.loadUserData("uuid");
        if (!uuid) {
            uuid = Utils.generateUUID();
            Utils.setUserData("uuid", uuid);
        }
        this.connectGate(uuid);
    },
    update: function update(dt) {},
    connectGate: function connectGate(uid) {
        pomelo.init({
            host: NETPATH,
            port: NETPORT
        }, function () {
            var route = 'gate.gateHandler.queryEntry';
            pomelo.request(route, {
                uid: uid
            }, function (data) {
                pomelo.disconnect();
                if (data.code === 500) {
                    //报错
                    return;
                }
                PomeloManager.host = data.host;
                PomeloManager.port = data.port;
            });
        });
    },
    onDestroy: function onDestroy() {}
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
        //# sourceMappingURL=pomeloManager.js.map
        