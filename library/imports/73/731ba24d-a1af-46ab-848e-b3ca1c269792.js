"use strict";
cc._RF.push(module, '731baJNoa9Gq4SOs8ocJpeS', 'EventManager');
// scripts/tools/EventManager.js

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

    properties: {},

    onLoad: function onLoad() {
        EventManager = this;
    },


    update: function update(dt) {
        if (eventOpen) {
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
        eventList[eventName] = [func, target, true];
    },

    //eventOnce("event","callbackFunc",this);
    eventOnce: function eventOnce(eventName, func, target) {
        eventList[eventName] = [func, target, false];
    },

    //eventOff("eventName");
    eventOff: function eventOff(eventName) {
        if (eventList[eventName]) {
            delete eventList[eventName];
        }
    },

    eventTrigger: function eventTrigger(eventName, args) {
        handlerList[countNum] = [eventName, args];
        countNum++;
    },

    closeEvent: function closeEvent() {
        eventOpen = false;
    },

    startEvent: function startEvent() {
        eventOpen = true;
    }
});

cc._RF.pop();