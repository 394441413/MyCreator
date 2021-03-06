(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/template/rootNode/audioManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c2583L/vUVCgpwF0ZL70e2l', 'audioManager', __filename);
// scripts/tools/audioManager.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        mute: false, //是否静音   有声音 false   没有 true
        audioList: [cc.AudioClip],
        effectList: [cc.AudioClip]
    },

    // use this for initialization
    onLoad: function onLoad() {
        var tmp = Utils.loadUserData("UserDataMute");
        if (tmp == null || tmp == false) {
            this.mute = false;
            this.setMute(false);
        } else {
            this.mute = true;
            this.setMute(true);
        }
        AudioManager = this;
    },

    playBgMusic: function playBgMusic(clip) {
        cc.audioEngine.playMusic(this.audioList[clip], true, this.mute ? 0 : 1);
    },

    playExMusic: function playExMusic(clip) {
        cc.audioEngine.playEffect(this.effectList[clip], false, this.mute ? 0 : 1);
    },

    setMute: function setMute(bool) {
        if (bool) {
            this.mute = true;
            cc.audioEngine.setMusicVolume(0);
            cc.audioEngine.setEffectsVolume(0);
            Utils.setUserData("UserDataMute", true);
        } else {
            this.mute = false;
            cc.audioEngine.setMusicVolume(1);
            cc.audioEngine.setEffectsVolume(1);
            Utils.setUserData("UserDataMute", false);
        }
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
        //# sourceMappingURL=audioManager.js.map
        