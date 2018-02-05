"use strict";
cc._RF.push(module, '8983dHdr11BYYxqQ7IOw11s', 'pomeloManager');
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
    }
});

cc._RF.pop();