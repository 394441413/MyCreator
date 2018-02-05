
cc.Class({
    extends: cc.Component,

    onLoad () {
        this.host = "";
        this.port = "";
        PomeloManager = this;
    },

    start () {
        var uuid = Utils.loadUserData("uuid");
        if (!uuid) {
            uuid = Utils.generateUUID();
            Utils.setUserData("uuid", uuid);
        }
        this.connectGate(uuid);
    },

    update (dt) {},

    connectGate (uid) {
        pomelo.init({
            host : NETPATH,
            port : NETPORT
        }, function () {
            var route = 'gate.gateHandler.queryEntry';
            pomelo.request(route, {
                uid: uid
            }, function (data) {
                pomelo.disconnect();
                if(data.code === 500) {
                    //报错
                    return ;
                }
                PomeloManager.host = data.host;
                PomeloManager.port = data.port;
            })
        });
    },

});
