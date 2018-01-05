cc.Class({
    extends: cc.Component,

    properties: {
        mute: false,                       //是否静音   有声音 false   没有 true
        audioList: [cc.AudioClip],
        effectList: [cc.AudioClip],
    },

    // use this for initialization
    onLoad: function () {
        let tmp = Utils.loadUserData("UserDataMute");
        if (tmp == null || tmp == false) {
            this.mute = false;
            this.setMute(false);
        }
        else {
            this.mute = true;
            this.setMute(true);
        }
        AudioManager = this;
    },

    playBgMusic: function (clip) {
        cc.audioEngine.playMusic(this.audioList[clip], true, this.mute ? 0 : 1);
    },

    playExMusic: function (clip) {
        cc.audioEngine.playEffect(this.effectList[clip], false, this.mute ? 0 : 1);
    },

    setMute: function (bool) {
        if (bool) {
            this.mute = true;
            cc.audioEngine.setMusicVolume(0);
            cc.audioEngine.setEffectsVolume(0);
            Utils.setUserData("UserDataMute", true);
        }
        else {
            this.mute = false;
            cc.audioEngine.setMusicVolume(1);
            cc.audioEngine.setEffectsVolume(1);
            Utils.setUserData("UserDataMute", false);
        }
    },
});

