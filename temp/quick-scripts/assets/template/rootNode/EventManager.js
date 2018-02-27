(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/template/rootNode/EventManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '731baJNoa9Gq4SOs8ocJpeS', 'EventManager', __filename);
// template/rootNode/EventManager.js

"use strict";

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
            tooltip: '是否不在update执行事件'
        }
    },

    onLoad: function onLoad() {
        EventManager = this;
    },


    update: function update(dt) {
        this._excuteEvent();
    },

    _excuteEvent: function _excuteEvent() {
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
    eventOn: function eventOn(eventName, func, target) {
        if (typeof eventName !== "string" || typeof func !== "function" || typeof target === "undefined") {
            cc.error("EventManager.js method eventOn param error!");
            return;
        }
        eventList[eventName] = [func, target, true];
    },

    //eventOnce("event","callbackFunc",this);
    eventOnce: function eventOnce(eventName, func, target) {
        if (typeof eventName !== "string" || typeof func !== "function" || typeof target === "undefined") {
            cc.error("EventManager.js method eventOnce param error!");
            return;
        }
        eventList[eventName] = [func, target, false];
    },

    //eventOff("eventName");
    eventOff: function eventOff(eventName) {
        if (typeof type !== "string") {
            cc.error("EventManager.js method eventOff param error!");
            return;
        }
        if (eventList[eventName]) {
            delete eventList[eventName];
        }
    },

    eventTrigger: function eventTrigger(eventName, args) {
        if (typeof eventName !== "string") {
            cc.error("EventManager.js method eventTrigger param error!");
            return;
        }
        handlerList[countNum] = [eventName, args];
        countNum++;
        if (frameEvent) {
            this._excuteEvent();
        }
    },

    closeEvent: function closeEvent() {
        eventOpen = false;
    },

    startEvent: function startEvent() {
        eventOpen = true;
    },

    clearEvent: function clearEvent() {
        countNum = 0;
        eventList = {};
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
        //# sourceMappingURL=EventManager.js.map
        