// looper
// ----------------
// |eventName|args|
// ----------------
var handlerList = {};

// ----------------------------------
// |eventName|func|target|bool(once)|
// ----------------------------------
var eventList = {};

var eventOpen = true;
var countNum = 0;


cc.Class({
    extends: cc.Component,

    properties: {
        frameEvent: {
            default: true,
            tooltip: '是否不在update执行事件',
        }
    },


    onLoad() {
        EventManager = this;
    },

    update: function (dt) {
        this._excuteEvent();
    },

    _excuteEvent: function () {
        if (eventOpen && !this.frameEvent) {
            for (var i = 0; i < countNum; i++) {
                for (var j in eventList) {
                    var eventName = handlerList[i][0];
                    if (eventName == j) {
                        var func = eventList[eventName][0];
                        var target = eventList[eventName][1];
                        var msg = handlerList[i][1];
                        target[func](msg);
                        if (!eventList[eventName][2]) {
                            this.eventOff(eventName);
                        }
                        break;
                    }
                }
            }
            countNum = 0;
            handlerList = {};
        }
    },

    //eventOn("event","callbackFunc",this);
    eventOn: function (eventName, func, target) {
        eventList[eventName] = [func, target, true];
    },

    //eventOnce("event","callbackFunc",this);
    eventOnce: function (eventName, func, target) {
        eventList[eventName] = [func, target, false];
    },

    //eventOff("eventName");
    eventOff: function (eventName) {
        if(eventList[eventName]){
            delete (eventList[eventName]);
        }
    },

    eventTrigger: function (eventName, args) {
        handlerList[countNum] = [eventName, args];
        countNum++;
        if(frameEvent) {
            this._excuteEvent();
        }
    },

    closeEvent: function () {
        eventOpen = false;
    },

    startEvent: function () {
        eventOpen = true;
    },

    clearEvent: function () {
        countNum = 0;
        eventList = {};
    }
});
