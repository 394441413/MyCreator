var rockerType = cc.Enum({
    Four_Orientation  : 0,
    Eight_Orientation : 1,
    All_Orientation   : 2,
});

cc.Class({
    extends: cc.Component,

    properties: {
        orientationType: {
            type: rockerType,
            default: 0,
            displayName: "模式选择",
        },
        front : {
            type: cc.Sprite,
            default: null,
            displayName: "摇杆内圈",
        },
        background : {
            type: cc.Sprite,
            default: null,
            displayName: "摇杆外圈",
        },
        panel: {
            type: cc.Layout,
            default: null,
            displayName: "触摸层",
        },
        speed: {
            type: cc.Float,
            default : 0,
            displayName: "移动速度",
        },
        bodyObj: {                         
            type: cc.Node,
            default: null,
            displayName: "控制的物体",
        },
    },

    onLoad () {
        this.angle = 0;
        this.panelNode = this.panel.node;
        this.frontNode = this.front.node;
        this.backgroundNode = this.background.node;
        
        this.panelNode.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.panelNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onEnd, this);
        this.panelNode.on(cc.Node.EventType.TOUCH_END, this.onEnd, this);
    },

    onMove : function(event) {
        //摇杆跟随逻辑
        let pos = this.panelNode.convertToNodeSpaceAR(event.getLocation()); 
        let radius = Math.sqrt(Math.pow(pos.x,2) + Math.pow(pos.y,2));
        if(radius <= this.backgroundNode.width/2) {
            this.frontNode.setPosition(pos);
        } else {
            let posX = Math.cos(Math.atan2(pos.y,pos.x)) * (this.backgroundNode.width/2); 
            let posY = Math.sin(Math.atan2(pos.y,pos.x)) * (this.backgroundNode.width/2); 
            this.frontNode.setPosition(posX,posY);
        }
        //方向计算逻辑
        this.angle = Math.atan2(pos.y,pos.x) * (180 / Math.PI);
    },

    onEnd : function (event) {
        this.frontNode.setPosition(0,0);
        this.angle = 0;
    },

    update () {
        switch(this.orientationType) {
            case 0:
                this.fourOrientationExcute(this.angle);
                break;
            case 1:
                this.eightOrientationExcute(this.angle);
                break;
            case 2:
                this.allOrientationExcute(this.angle);
                break;
            default:
                break;
        }
    },

    fourOrientationExcute : function ()
    {
        if (this.angle > 45 && this.angle < 135) {                                              //上
            this.bodyObj.y += this.speed;
        } else if (this.angle > -135 && this.angle < -45) {                                     //下
            this.bodyObj.y -= this.speed;
        } else if (this.angle < -135 && this.angle > -180 || this.angle > 135 && this.angle < 180) {      //左
            this.bodyObj.x -= this.speed;
        } else if (this.angle < 0 && this.angle > -45 || this.angle > 0 && this.angle < 45) {             //右
            this.bodyObj.x += this.speed;
        }  
    },

    allOrientationExcute: function () {  
        if(this.angle === 0) { return; }
        this.bodyObj.x += Math.cos(this.angle * (Math.PI / 180)) * this.speed;  
        this.bodyObj.y += Math.sin(this.angle * (Math.PI / 180)) * this.speed;  
    }, 

    eightOrientationExcute: function () { 
        if (this.angle > 67.5 && this.angle < 112.5) {  
            this.bodyObj.y += this.speed;  
        } else if (this.angle > -112.5 && this.angle < -67.5) {  
            this.bodyObj.y -= this.speed;  
        } else if (this.angle < -157.5 && this.angle > -180 || this.angle > 157.5 && this.angle < 180) {  
            this.bodyObj.x -= this.speed;  
        } else if (this.angle < 0 && this.angle > -22.5 || this.angle > 0 && this.angle < 22.5) {  
            this.bodyObj.x += this.speed;  
        } else if (this.angle > 112.5 && this.angle < 157.5) {  
            this.bodyObj.x -= this.speed / 1.414;  
            this.bodyObj.y += this.speed / 1.414;  
        } else if (this.angle > 22.5 && this.angle < 67.5) {  
            this.bodyObj.x += this.speed / 1.414;  
            this.bodyObj.y += this.speed / 1.414;  
        } else if (this.angle > -157.5 && this.angle < -112.5) {  
            this.bodyObj.x -= this.speed / 1.414;  
            this.bodyObj.y -= this.speed / 1.414;  
        } else if (this.angle > -67.5 && this.angle < -22.5) {  
            this.bodyObj.x += this.speed / 1.414;  
            this.bodyObj.y -= this.speed / 1.414;  
        }  
    },
});
