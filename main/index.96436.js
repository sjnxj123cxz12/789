window.__require = function t(e, o, n) {
function i(c, s) {
if (!o[c]) {
if (!e[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!e[a]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(a, !0);
if (r) return r(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var l = o[c] = {
exports: {}
};
e[c][0].call(l.exports, function(t) {
return i(e[c][1][t] || t);
}, l, l.exports, t, e, o, n);
}
return o[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
return i;
}({
AccountController: [ function(t, e) {
"use strict";
cc._RF.push(e, "b1e1aJaeN9NOab8DnF98P3r", "AccountController");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
e.prototype.setAccountView = function(t) {
return this.accountView = t;
};
e.prototype.setProfileView = function(t) {
return this.profileView = t;
};
e.prototype.setAppSafeSatus = function(t) {
return this.appSafeStatus = t;
};
e.prototype.getAppSafeSatus = function() {
return this.appSafeStatus;
};
e.prototype.refreshAvatar = function() {
return this.profileView.refreshAvatar();
};
e.prototype.activeTab = function(t) {
return this.accountView.activeTab(t);
};
e.prototype.getAvatarImage = function(t) {
if (this.avatarImages) return this.avatarImages.getAvatarImage(t);
};
e.prototype.setAvatarImages = function(t) {
return this.avatarImages = t;
};
e.prototype.getIcon = function(t) {
return this.vipIcons.getIcon(t);
};
e.prototype.setVIPIcons = function(t) {
return this.vipIcons = t;
};
e.prototype.getVipAssets = function() {
return this.vipIcons;
};
return e;
}();
cc.AccountController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
AlertDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ac2cfRsTjJAYIPa+qz3LTz+", "AlertDialog");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./Dialog"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t, e, o) {
this.msg = t;
this.doneTitle = e;
this.onDismissed = o;
}, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblMessage = null;
e.lblDone = null;
e.onDismissed = null;
e.queue = new Array();
return e;
}
e.prototype.showMsg = function(t) {
this.show4(t, null, null, !1);
};
e.prototype.showMsgWithOnDismissed = function(t, e) {
this.show4(t, null, e);
};
e.prototype.show3 = function(t, e, o) {
void 0 === o && (o = !1);
this.show4(t, null, e, o);
};
e.prototype.show4 = function(e, o, n, i, r) {
void 0 === i && (i = !1);
void 0 === r && (r = !0);
if (i) {
this.queue.push(new l(e, o, n));
if (1 == this.queue.length) {
this.lblDone.string = o || "Đóng";
this.onDismissed = n;
this.lblMessage.string = e;
t.prototype.show.call(this);
}
} else if (this.queue.length > 0 && r) this.queue.push(new l(e, o, n)); else {
this.lblDone.string = o || "Đóng";
this.onDismissed = n;
this.lblMessage.string = e;
t.prototype.show.call(this);
}
};
e.prototype._onShowed = function() {
t.prototype._onShowed.call(this);
};
e.prototype._onDismissed = function() {
t.prototype._onDismissed.call(this);
"function" == typeof this.onDismissed && this.onDismissed();
if (this.queue.length > 0) {
this.queue.splice(0, 1);
this.queue.length > 0 && this.show4(this.queue[0].msg, this.queue[0].doneTitle, this.queue[0].onDismissed, !1, !1);
}
};
e.prototype.dismiss = function() {
this.isAnimated && t.prototype.dismiss.call(this);
};
r([ u(cc.Label) ], e.prototype, "lblMessage", void 0);
r([ u(cc.Label) ], e.prototype, "lblDone", void 0);
return r([ a ], e);
}(c.default);
o.default = p;
cc._RF.pop();
}, {
"./Dialog": "Dialog"
} ],
AquariumConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "adcf1D5p2tApaXjambl25C9", "AquariumConfig");
e.exports = {
TIME_COLUMN_NORMAL: .2,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .25,
TIME_CALL_STOP_FAST: .8,
TIME_WILD_3X_APPEAR: 4,
TIME_PLAY_EFFECT_EXPAND_WILD: 4,
TIME_SCALE_ANIMATION_WILD: 1.25,
TIME_WILD_3X_APPEAR_FAST: 2,
TIME_PLAY_EFFECT_EXPAND_WILD_FAST: 2,
TIME_SCALE_ANIMATION_WILD_FAST: 1.8,
TIME_PLAY_EFFECT_EXPAND_WILD_FREE_SPIN: .5,
TIME_MONEY_EFFECT_JACKPOT: 5,
TIME_MONEY_EFFECT_BIG_WIN: 5,
TIME_MONEY_EFFECT_NORMAL_WIN: 2,
TIME_WAIT_LOST: .8,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2.5,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2.5,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1.25,
TIME_WAIT_LOST_FAST: .5,
TIME_TWEEN_MONEY_FAST: .5,
TIME_WAIT_MULTIPLIER: 2,
TIME_WAIT_LAST_STEP: 1.5,
TIME_WAIT_LAST_PICK: 3,
TIME_WAIT_AUTO_FINISH_BONUS_GAME: 15,
TIME_WAIT_START_FREE_SPIN: 2,
TIME_WAIT_RESULT_FREE_SPIN: 2,
TIME_ANIMATION_OPEN_CARD: .8,
MULTIPLIER_BIG_WIN: 4,
TIME_WAIT_AUTO_START_BONUS_GAME: 2,
TIME_WAIT_AUTO_CLOSE_BONUS_GAME: 2
};
cc._RF.pop();
}, {} ],
AudioController: [ function(t, e) {
"use strict";
cc._RF.push(e, "576ddNPF4pD04sixJMWzGpj", "AudioController");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
e.prototype.setAudioPool = function(t) {
this.audioPool = t;
};
e.prototype.playSound = function(t) {
if (this.soundState) {
var e = this.audioPool.getAudioClip(t);
return null !== e ? e.play() : void 0;
}
};
e.prototype.stopSound = function(t) {
if (this.soundState) {
var e = this.audioPool.getAudioClip(t);
return null !== e ? e.stop() : void 0;
}
};
e.prototype.playMusic = function(t) {
if (this.musicState) {
var e = this.audioPool.getAudioClip(t);
return null !== e ? e.play() : void 0;
}
};
e.prototype.stopMusic = function(t) {
if (this.musicState) {
var e = this.audioPool.getAudioClip(t);
return null !== e ? e.stop() : void 0;
}
};
e.prototype.enableMusic = function(t) {
this.musicState = t;
this.audioPool.enableMusic(t);
};
e.prototype.enableSound = function(t) {
this.soundState = t;
this.audioPool.enableSound(t);
};
return e;
}();
cc.AudioController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
AudioPoolXocXoc: [ function(t, e) {
"use strict";
cc._RF.push(e, "8e9baQKokRGs7BtgwmkMF5b", "AudioPoolXocXoc");
(function() {
cc.AudioPoolXocXoc = cc.Class({
extends: cc.AudioPool,
properties: {
musicBackground: cc.AudioSource,
chipSelect: cc.AudioSource,
chipBet: cc.AudioSource
},
enableMusic: function(t) {
this.musicBackground && (t ? this.musicBackground.isPlaying || this.musicBackground.play() : this.musicBackground.stop());
},
enableSound: function(t) {
this.chipSelect.mute = !t;
this.chipBet.mute = !t;
this.enableMusic(t);
},
getAudioClip: function(t) {
var e;
e = null;
switch (t) {
case cc.AudioTypes.CHIP_SELECT:
e = this.chipSelect;
break;

case cc.AudioTypes.CHIP_BET:
e = this.chipBet;
}
return e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AudioPool: [ function(t, e) {
"use strict";
cc._RF.push(e, "286e9JwV/FKUKQTc9eTbnVi", "AudioPool");
(function() {
cc.AudioPool = cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.AudioController.getInstance().setAudioPool(this);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AudioTypes: [ function(t, e) {
"use strict";
cc._RF.push(e, "6d803LP0f1LR4kSHUMOlbEW", "AudioTypes");
(function() {
cc.AudioTypes = cc.Enum({
BACKGROUND: "BACKGROUND",
NORMAL_WIN: "NORMAL_WIN",
BIG_WIN: " BIG_WIN",
GET_BONUS: "GET_BONUS",
SPIN: "SPIN",
STOP_SPIN_1: "STOP_SPIN_1",
STOP_SPIN_2: "STOP_SPIN_2",
STOP_SPIN_3: "STOP_SPIN_3",
STOP_SPIN_4: "STOP_SPIN_4",
STOP_SPIN_5: "STOP_SPIN_5",
BONUS_CLICK: "BONUS_CLICK",
BONUS_MISS: "BONUS_MISS",
BONUS_WIN: "BONUS_WIN",
OPEN_CARD: "OPEN_CARD",
MINI_GAME_ACTIVE: "MINI_GAME_ACTIVE",
X2_CLICK: "X2_CLICK",
X2_WIN: "X2_WIN",
EXPAND_WILD: "EXPAND_WILD",
EXPLODE: "EXPLODE",
SPIN_LOOP: "SPIN_LOOP",
MONKEY_READY_GO: "MONKEY_READY_GO",
MONKEY_BG: "MONKEY_BG",
CHIP_SELECT: "CHIP_SELECT",
CHIP_BET: "CHIP_BET",
HAND_WIN: "HAND_WIN",
DRAW_CARD: "DRAW_CARD"
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AudioUtil: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "20be6KhEi5P97F3/rTPFvYr", "AudioUtil");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.stopMusic = function() {
cc.audioEngine.stopMusic();
};
t.setFinishCallback = function(t, e, o) {
cc.audioEngine.setFinishCallback(t, function() {
e && o && e.call(o);
});
};
t.stopSound = function(t) {
cc.audioEngine.stopEffect(t);
};
t.stopAllSounds = function() {
cc.audioEngine.stopAllEffects();
};
t.playSound = function(t, e, o, n) {
void 0 === e && (e = !1);
void 0 === o && (o = !1);
void 0 === n && (n = 1);
if (t && e) return cc.audioEngine.play(t, o, n);
};
t.playMusic = function(t, e, o) {
void 0 === e && (e = !1);
void 0 === o && (o = !1);
if (t && e) return cc.audioEngine.playMusic(t, o);
};
t.playSoundWithTime = function(t, e, o) {
var n = this;
void 0 === e && (e = !1);
void 0 === o && (o = 0);
var i = null, r = this.playSound(t, e, !1);
i = setTimeout(function() {
clearTimeout(i);
n.stopSound(r);
}.bind(this), 1e3 * o);
};
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
Avatar: [ function(t, e) {
"use strict";
cc._RF.push(e, "fde5fYTdUdLFaHQ7QSWDYdb", "Avatar");
(function() {
cc.Avatar = cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.sprite = this.node.getComponent(cc.Sprite);
},
setAvatar: function(t) {
null !== this.node && (this.node.getComponent(cc.Sprite).spriteFrame = t);
},
getAvatar: function(t) {
var e = this;
cc.loader.load({
url: t,
type: "png",
width: 256,
height: 256
}, function(t, o) {
null !== e.node && (e.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o));
});
},
load: function(t) {
var e = this, o = "https://graph.facebook.com/" + t + "/picture?redirect=false&width=512&height=512", n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 === n.readyState && n.status >= 200 && n.status < 400) {
var t = n.responseText, o = JSON.parse(t);
e.getAvatar(o.data.url);
}
};
n.open("GET", o, !0);
n.send();
},
loadAvatarJackpot: function(t) {
this.node.getComponent(cc.Sprite).spriteFrame = null;
if (t && "" !== t) {
var e = this, o = "https://graph.facebook.com/" + t + "/picture?redirect=false&width=512&height=512", n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 === n.readyState && n.status >= 200 && n.status < 400) {
var t = n.responseText, o = JSON.parse(t);
e.getAvatar(o.data.url);
}
};
n.open("GET", o, !0);
n.send();
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BBConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "c7f92lcBVxNnaQsSKQ/y/2r", "BBConfig");
e.exports = {
TIME_COLUMN_NORMAL: .15,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .1,
TIME_CALL_STOP_FAST: .3,
TIME_WILD_3X_APPEAR: 3,
TIME_PLAY_EFFECT_EXPAND_WILD: 3,
TIME_SCALE_ANIMATION_WILD: 1,
TIME_WILD_3X_APPEAR_FAST: 1.5,
TIME_PLAY_EFFECT_EXPAND_WILD_FAST: 1.5,
TIME_SCALE_ANIMATION_WILD_FAST: 2,
TIME_PLAY_EFFECT_EXPAND_WILD_FREE_SPIN: .5,
TIME_MONEY_EFFECT_JACKPOT: 5,
TIME_MONEY_EFFECT_BIG_WIN: 5,
TIME_MONEY_EFFECT_NORMAL_WIN: 1.4,
TIME_MONEY_EFFECT_BUM_BUM: 4,
TIME_WAIT_LOST: .5,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1,
TIME_WAIT_LOST_FAST: .3,
TIME_TWEEN_MONEY_FAST: .3,
TIME_WAIT_MULTIPLIER: 2,
TIME_WAIT_LAST_STEP: 1.5,
TIME_WAIT_AUTO_FINISH_BONUS_GAME: 1500,
TIME_WAIT_START_FREE_SPIN: 2,
TIME_WAIT_RESULT_FREE_SPIN: 2,
TIME_ANIMATION_OPEN_CARD: .9,
MULTIPLIER_BIG_WIN: 4,
TIME_WAIT_AUTO_START_BONUS_GAME: 2,
TIME_WAIT_AUTO_CLOSE_BONUS_GAME: 2
};
cc._RF.pop();
}, {} ],
BalanceController: [ function(t, e) {
"use strict";
cc._RF.push(e, "d9c43A+ko1CI5wL4b8Gy7/S", "BalanceController");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && ((t = this).prototype.balanceViews = []);
return t.prototype;
};
e.prototype.setBalanceTryView = function(t) {
this.balanceTryView = t;
};
e.prototype.addBalanceView = function(t) {
this.balanceViews.push(t);
};
e.prototype.removeBalanceView = function(t) {
if (0 !== this.balanceViews.length) {
var e = this.balanceViews.indexOf(t);
e > -1 && this.balanceViews.splice(e, 1);
}
};
e.prototype.getBalance = function() {
return this.balance;
};
e.prototype.getTryBalance = function() {
return this.tryBalance;
};
e.prototype.updateRealBalance = function(t) {
fzgui.UserManager.instance.mainUserInfo.Money = t;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
this.balance = t;
};
e.prototype.updateBalance = function(t) {
this.balanceViews.forEach(function(e) {
e.updateBalance(t);
});
};
e.prototype.updateTryBalance = function(t) {
this.tryBalance = t;
null !== this.balanceTryView && this.balanceTryView.updateTryBalance(t);
};
e.prototype.subTryBalance = function(t) {
null !== this.balanceTryView && this.balanceTryView.subTryBalance(t);
};
return e;
}();
cc.BalanceController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BalanceTryView: [ function(t, e) {
"use strict";
cc._RF.push(e, "d857dgwT55H868B0MQw1E2w", "BalanceTryView");
(function() {
cc.BalanceTryView = cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.lbiBalance = this.node.getComponent(cc.LabelIncrement);
cc.BalanceController.getInstance().setBalanceTryView(this);
},
onDestroy: function() {
cc.BalanceController.getInstance().setBalanceTryView(null);
},
updateTryBalance: function(t) {
this.balance = t;
this.lbiBalance.tweenValueto(t);
},
subTryBalance: function(t) {
this.balance -= t;
this.lbiBalance.tweenValueto(this.balance);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BalanceView: [ function(t, e) {
"use strict";
cc._RF.push(e, "47b4eqoA/hFw4ocENL+7owM", "BalanceView");
(function() {
cc.BalanceView = cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.lbiBalance = this.node.getComponent(cc.LabelIncrement);
cc.BalanceController.getInstance().addBalanceView(this);
},
onDestroy: function() {
cc.BalanceController.getInstance().removeBalanceView(this);
},
updateBalance: function(t) {
this.balance = t;
this.lbiBalance.tweenValueto(t);
},
refreshBalance: function() {
this.lbiBalance.tweenValueto(this.balance);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BgResizer: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cbf1dlYiXRG35Ei6K+I4cFm", "BgResizer");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.designResolution = new cc.Size(1280, 720);
e.lastWitdh = 0;
e.lastHeight = 0;
return e;
}
e.prototype.start = function() {
this.updateSize();
};
e.prototype.update = function() {
this.updateSize();
};
e.prototype.updateSize = function() {
var t = cc.view.getFrameSize();
if (this.lastWitdh !== t.width || this.lastHeight !== t.height) {
this.lastWitdh = t.width;
this.lastHeight = t.height;
if (this.designResolution.width / this.designResolution.height > t.width / t.height) {
var e = (n = this.designResolution.width * t.height / t.width) * this.designResolution.width / this.designResolution.height, o = cc.size(e, n);
this.node.setContentSize(o);
} else {
var n = (e = this.designResolution.height * t.width / t.height) * this.designResolution.height / this.designResolution.width;
o = cc.size(e, n), o = cc.size(e, n);
this.node.setContentSize(o);
}
}
};
r([ a ], e.prototype, "designResolution", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
BhvShake: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6b367jbKq1JYYuAR/V3rR09", "BhvShake");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = c.menu, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.movingMode = !1;
e.decayMode = !1;
e.damping = .01;
e.shakeTime = .5;
e.intensity = cc.v2(5, 5);
return e;
}
r([ a({
tooltip: "Chế độ chuyển động, chế độ di chuyển sẽ không khôi phục tọa độ của đối tượng trở lại trạng thái trước khi xảy ra rung lắc, thích hợp cho các đối tượng chuyển động"
}) ], e.prototype, "movingMode", void 0);
r([ a({
tooltip: "Chế độ phân rã, sẽ giảm dần theo cường độ của thời gian rung"
}) ], e.prototype, "decayMode", void 0);
r([ a({
visible: function() {
return !0 === this.decayMode;
},
tooltip: "Giảm chấn, tốc độ tại đó bán kính giảm dần trong quá trình rung"
}) ], e.prototype, "damping", void 0);
r([ a({
tooltip: "Thời gian rung"
}) ], e.prototype, "shakeTime", void 0);
r([ a({
tooltip: "Sự bù trừ của rung động x, y"
}) ], e.prototype, "intensity", void 0);
return r([ s, u("FzGUI/Movement/Shake") ], e);
}(fzgui.BhvShake);
o.default = l;
cc._RF.pop();
}, {} ],
BhvSine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5d9e7c1ptlDEqdve7SZk4bY", "BhvSine");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = c.menu, l = (Math.PI, 
Math.PI, Math.PI, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.activeAtStart = !0;
e.movement = fzgui.MOVEMENT.vertical;
e.wave = fzgui.WAVE.sine;
e.period = 4;
e.periodRandom = 0;
e.periodOffset = 0;
e.periodOffsetRandom = 0;
e.magnitude = 50;
e.magnitudeRandom = 0;
return e;
}
r([ a({
tooltip: "Được kích hoạt ở chức năng bắt đầu"
}) ], e.prototype, "activeAtStart", void 0);
r([ a({
type: cc.Enum(fzgui.MOVEMENT),
tooltip: "Loại thuộc tính nào được sử dụng cho chuyển động chu kỳ sin"
}) ], e.prototype, "movement", void 0);
r([ a({
type: cc.Enum(fzgui.WAVE),
tooltip: "Dạng Sóng"
}) ], e.prototype, "wave", void 0);
r([ a({
tooltip: ""
}) ], e.prototype, "period", void 0);
r([ a({
tooltip: "Khoảng thời gian ngẫu nhiên"
}) ], e.prototype, "periodRandom", void 0);
r([ a({
tooltip: "Chu kỳ bù đắp"
}) ], e.prototype, "periodOffset", void 0);
r([ a({
tooltip: "Giá trị bù chu kỳ Ngẫu nhiên"
}) ], e.prototype, "periodOffsetRandom", void 0);
r([ a({
tooltip: "Phạm vi dao động"
}) ], e.prototype, "magnitude", void 0);
r([ a({
tooltip: "Giá trị ngẫu nhiên của biên độ dao động"
}) ], e.prototype, "magnitudeRandom", void 0);
return r([ s, u("FzGUI/Movement/Sine (Chức năng chuyển động)") ], e);
}(fzgui.BhvSine));
o.default = l;
cc._RF.pop();
}, {} ],
BroadcastReceiver: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8831e6G+6NKPKJ3bcB/6OEn", "BroadcastReceiver");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n;
(function(t) {
var e = function(t, e, o) {
this.action = t;
this.target = o;
this.callback = e;
};
t.BroadcastListener = e;
var o = function() {
function t() {}
t.register = function(t, o, n) {
this.listeners.push(new e(t, o, n));
};
t.unRegisterByAction = function(t) {
for (var e = 0; e < this.listeners.length; e++) this.listeners[e].action == t && this.listeners.splice(e--, 1);
};
t.unRegisterByTarget = function(t) {
for (var e = 0; e < this.listeners.length; e++) this.listeners[e].target == t && this.listeners.splice(e--, 1);
};
t.send = function(t, e) {
void 0 === e && (e = null);
for (var o = 0; o < this.listeners.length; o++) {
var n = this.listeners[o];
n.action == t && (n.target && n.target instanceof Object && n.target.node ? n.callback(e) : this.listeners.splice(o--, 1));
}
};
t.UPDATE_NICKNAME_SUCCESS = "UPDATE_NICKNAME_SUCCESS";
t.LOGINED = "LOGINED";
t.USER_INFO_UPDATED = "USER_INFO_UPDATED";
t.USER_LOGOUT = "USER_LOGOUT";
t.USER_UPDATE_COIN = "USER_UPDATE_COIN";
t.ON_AUDIO_CHANGED = "ON_AUDIO_CHANGED";
t.listeners = new Array();
return t;
}();
t.BroadcastReceiver = o;
})(n || (n = {}));
o.default = n.BroadcastReceiver;
cc._RF.pop();
}, {} ],
BundleDownLoad: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "271f8/NgIpEDYx7U0i7AOWF", "BundleDownLoad");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.linkUrl = "";
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.autoDownload = !1;
e.isClicked = !1;
return e;
}
r([ a(cc.String) ], e.prototype, "linkUrl", void 0);
r([ a(cc.String) ], e.prototype, "bundleName", void 0);
r([ a(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ a(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ a(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ a(cc.Boolean) ], e.prototype, "autoDownload", void 0);
r([ a(cc.Boolean) ], e.prototype, "isClicked", void 0);
return r([ s ], e);
}(fzgui.BundleDownLoad);
o.default = u;
cc._RF.pop();
}, {} ],
CanvasResizer: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a675f/akUBI86qmorXDh3TV", "CanvasResizer");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = c.requireComponent, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.designResolution = new cc.Size(1280, 720);
e.lastWitdh = 0;
e.lastHeight = 0;
return e;
}
e.prototype.onLoad = function() {
this.canvas = this.node.getComponent(cc.Canvas);
this.updateCanvas();
};
e.prototype.update = function() {
this.updateCanvas();
};
e.prototype.updateCanvas = function() {
var t = cc.view.getFrameSize();
if (this.lastWitdh !== t.width || this.lastHeight !== t.height) {
this.lastWitdh = t.width;
this.lastHeight = t.height;
if (this.designResolution.width / this.designResolution.height > t.width / t.height) {
var e = cc.size(this.designResolution.width, this.designResolution.width * (t.height / t.width));
this.canvas.designResolution = e;
cc.log("update canvas size: " + e);
} else {
e = cc.size(this.designResolution.height * (t.width / t.height), this.designResolution.height);
this.canvas.designResolution = e;
cc.log("update canvas size: " + e);
}
}
};
r([ a ], e.prototype, "designResolution", void 0);
return r([ s, u(cc.Canvas) ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
Capcha: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "64049zpmS5INJXfoJv3bOjW", "Capcha");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.capcha = null;
e.isTelco = !1;
e.capchaId = "";
e.mUrl = "";
return e;
}
e.prototype.start = function() {
this.refreshCapcha();
};
e.prototype.refreshCapcha = function() {
var t = "https://test.traquatnhadam.xyz/Captcha/Get?length=3&width=90&height=36";
this.isTelco && (t = "");
this.sendGetCaptcha(t);
};
e.prototype.getCapChaId = function() {
return this.capchaId;
};
e.prototype.resetCapcha = function() {
this.capcha.node.active = !1;
};
e.prototype.sendGetCaptcha = function(t) {
this.mUrl = t;
var e = this;
fzgui.Https.get(t, function(t) {
var o = t;
e.capchaId = o[0];
var n = o[1];
n = n.replace(/\r\n/g, "");
e.loadImgBinary(n);
});
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, o = new Image();
o.width = 130;
o.height = 60;
var n = this;
o.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(o);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
n.capcha.node.active = !0;
n.capcha.spriteFrame = e;
};
o.src = e;
};
r([ a(cc.Sprite) ], e.prototype, "capcha", void 0);
r([ a(cc.Boolean) ], e.prototype, "isTelco", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
CommonAssetDefined: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d6570HA0PpN+42el5D4GKmQ", "CommonAssetDefined");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./PrefabEDefined"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.WAITING_LAYOUT = null;
e.BUTTON_COMMON = null;
e.FADED_BACKGROUND = null;
e.CENTER_NOTIFICATION = null;
e.TEXT_FLY = null;
e.POPUP_COMMON = null;
e.TOOLTIP_MESSAGE = null;
e.listPrefabDefined = [];
return e;
}
r([ u(cc.Prefab) ], e.prototype, "WAITING_LAYOUT", void 0);
r([ u(cc.Prefab) ], e.prototype, "BUTTON_COMMON", void 0);
r([ u(cc.Prefab) ], e.prototype, "FADED_BACKGROUND", void 0);
r([ u(cc.Prefab) ], e.prototype, "CENTER_NOTIFICATION", void 0);
r([ u(cc.Prefab) ], e.prototype, "TEXT_FLY", void 0);
r([ u(cc.Prefab) ], e.prototype, "POPUP_COMMON", void 0);
r([ u(cc.Prefab) ], e.prototype, "TOOLTIP_MESSAGE", void 0);
r([ u(c.default) ], e.prototype, "listPrefabDefined", void 0);
return r([ a ], e);
}(fzgui.CommonAssetDefined);
o.default = l;
cc._RF.pop();
}, {
"./PrefabEDefined": "PrefabEDefined"
} ],
"Config ": [ function(t, e) {
"use strict";
cc._RF.push(e, "52855fdlA9Al7ZE2HGvSngn", "Config ");
var o = t("NetConfig");
(function() {
var t, e, n;
e = 0;
n = 10;
var i = [], r = [], c = [], s = [], a = [ "nothing.club" ];
t = function() {
var t;
function u() {}
t = void 0;
u.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
u.prototype.getDomainVK = function() {
return a;
};
u.prototype.getMinVipShowChat = function() {
return 2;
};
u.prototype.getServiceId = function() {
switch (o.HOST) {
case "sieusoc.vip":
return cc.ServiceId.BLOCK_BUSTER;

case "sieusoc.vip":
return cc.ServiceId.BLOCK_BUSTER_2;

case "sieusoc.vip":
return cc.ServiceId.BLOCK_BUSTER_3;

case "sieusoc.vip":
return cc.ServiceId.BLOCK_BUSTER_4;

default:
return cc.ServiceId.BLOCK_BUSTER;
}
};
u.prototype.getServiceName = function(t) {
switch (t) {
case cc.ServiceId.OLD:
case cc.ServiceId.BLOCK_BUSTER:
return "<color=#32CB09>[" + cc.ServiceName.BLOCK_BUSTER + "]</color> ";

case cc.ServiceId.BLOCK_BUSTER_2:
return "<color=#32CB09>[" + cc.ServiceName.BLOCK_BUSTER_2 + "]</color> ";

case cc.ServiceId.BLOCK_BUSTER_3:
return "<color=#32CB09>[" + cc.ServiceName.BLOCK_BUSTER_3 + "]</color> ";

case cc.ServiceId.BLOCK_BUSTER_4:
return "<color=#32CB09>[" + cc.ServiceName.BLOCK_BUSTER_4 + "]</color> ";
}
};
u.prototype.getIndexIcon = function(t) {
switch (t) {
case cc.ServiceId.OLD:
case cc.ServiceId.BLOCK_BUSTER:
return 0;

case cc.ServiceId.BLOCK_BUSTER_2:
return 1;

case cc.ServiceId.BLOCK_BUSTER_3:
return 2;

case cc.ServiceId.BLOCK_BUSTER_4:
return 3;
}
};
u.prototype.getServiceNameNoFormat = function(t) {
switch (t) {
case cc.ServiceId.OLD:
case cc.ServiceId.BLOCK_BUSTER:
return "[" + cc.ServiceName.BLOCK_BUSTER + "] ";

case cc.ServiceId.BLOCK_BUSTER_2:
return "[" + cc.ServiceName.BLOCK_BUSTER_2 + "] ";

case cc.ServiceId.BLOCK_BUSTER_3:
return "[" + cc.ServiceName.BLOCK_BUSTER_3 + "] ";

case cc.ServiceId.BLOCK_BUSTER_4:
return "[" + cc.ServiceName.BLOCK_BUSTER_4 + "] ";
}
};
u.prototype.getIndexByNation = function(t) {
var e;
switch (t) {
case cc.NationCode.Japan:
e = 4;
break;

case cc.NationCode.Korea:
e = 8;
break;

case cc.NationCode.Russia:
e = 1;
break;

case cc.NationCode.Ukraine:
e = 2;
break;

case cc.NationCode.Germany:
e = 3;
break;

case cc.NationCode.Poland:
e = 5;
break;

case cc.NationCode.Taipen:
e = 6;
break;

case cc.NationCode.Sec:
e = 7;
break;

default:
e = 0;
}
return e;
};
u.prototype.getNationByNationCode = function(t) {
switch (t) {
case cc.NationCode.Japan:
return "Nhật Bản";

case cc.NationCode.Korea:
return "Hàn Quốc";

case cc.NationCode.Russia:
return "Nga";

case cc.NationCode.Ukraine:
return "Ukraina";

case cc.NationCode.Belarus:
return "Belarus";

case cc.NationCode.Poland:
return "Ba Lan";

case cc.NationCode.Germany:
return "Đức";

case cc.NationCode.Taipen:
return "Đài Loan";

case cc.NationCode.Sec:
return "Cộng hoà Séc";

default:
return "";
}
};
u.prototype.checkErrorDomain = function() {
var t = !1;
i.forEach(function(e) {
e === cc.Tool.getInstance().getHostName() && (t = !0);
});
return t;
};
u.prototype.checkFDomain = function() {
var t = !1;
c.forEach(function(e) {
e === cc.Tool.getInstance().getHostName() && (t = !0);
});
s.forEach(function(e) {
e === o.HOST && (t = !0);
});
return t;
};
u.prototype.getNewDomain = function() {
var t = "", e = 0;
i.forEach(function(o) {
o === cc.Tool.getInstance().getHostName() && (t = r[e]);
e++;
});
return t;
};
u.prototype.formatName = function(t, e) {
return t.length > e ? t.substring(0, e) + ".." : t;
};
u.prototype.checkUrl = function(t, e) {
return t.length > e ? t.substring(0, e) + ".." : t;
};
u.prototype.getRoomValue = function(t, e) {
switch (t.toString()) {
case cc.GameId.THREE_KINGDOM:
case cc.GameId.EGYPT:
case cc.GameId.AQUARIUM:
case cc.GameId.DRAGON_BALL:
case cc.GameId.COWBOY:
case cc.GameId.SEVEN77:
case cc.GameId.THUONG_HAI:
switch (e) {
case 1:
return 100;

case 2:
return 1e3;

case 3:
return 5e3;

case 4:
return 1e4;
}
break;

case cc.GameId.MINI_POKER:
switch (e) {
case 1:
return 100;

case 2:
return 1e3;

case 3:
return 1e4;

case 4:
return 3e4;
}
break;

case cc.GameId.BLOCK_BUSTER:
switch (e) {
case 1:
return 1e3;

case 2:
return 2e3;

case 3:
return 5e3;

case 4:
return 1e4;

case 5:
return 3e4;

case 6:
return 5e4;

case 7:
return 1e5;
}
break;

case cc.GameId.LUCKY_WILD:
switch (e) {
case 1:
return 1e3;

case 2:
return 2e3;

case 3:
return 5e3;

case 4:
return 1e4;

case 5:
return 25e3;
}
}
};
u.prototype.getGameName = function(t) {
switch (t.toString()) {
case cc.GameId.THREE_KINGDOM:
return cc.GameName.THREE_KINGDOM;

case cc.GameId.EGYPT:
return cc.GameName.EGYPT;

case cc.GameId.AQUARIUM:
return cc.GameName.AQUARIUM;

case cc.GameId.DRAGON_BALL:
return cc.GameName.DRAGON_BALL;

case cc.GameId.COWBOY:
return cc.GameName.COWBOY;

case cc.GameId.THUONG_HAI:
return cc.GameName.THUONGHAI;

case cc.GameId.GAINHAY:
return cc.GameName.GAINHAY;

case cc.GameId.TAI_XIU:
return cc.GameName.TAI_XIU;

case cc.GameId.MINI_POKER:
return cc.GameName.MINI_POKER;

case cc.GameId.SEVEN77:
return cc.GameName.SEVEN77;

case cc.GameId.BLOCK_BUSTER:
return cc.GameName.BLOCK_BUSTER;

case cc.GameId.LUCKY_WILD:
return cc.GameName.LUCKY_WILD;

case cc.GameId.VQMM:
return cc.GameName.VQMM;

case cc.GameId.MONKEY:
return cc.GameName.MONKEY;

case cc.GameId.DRAGON_TIGER:
return cc.GameName.DRAGON_TIGER;

case cc.GameId.XOC_XOC:
return cc.GameName.XOC_XOC;

case cc.GameId.BACCARAT:
return cc.GameName.BACCARAT;

case cc.GameId.BAUCUA:
return cc.GameName.BAU_CUA;

case cc.GameId.BA_CAY:
return cc.GameName.BA_CAY;

case cc.GameId.BA_CAY_GA:
return cc.GameName.BA_CAY_GA;

case cc.GameId.BA_CAY_BIEN:
return cc.GameName.BA_CAY_BIEN;

case cc.GameId.POKER_TEXAS:
return cc.GameName.POKER_TEXAS;

case cc.GameId.TIEN_LEN_MN:
return cc.GameName.TIEN_LEN_MN;

case cc.GameId.TIEN_LEN_MN_SOLO:
return cc.GameName.TIEN_LEN_MN_SOLO;

case cc.GameId.MAU_BINH:
return cc.GameName.MAU_BINH;

case cc.GameId.LODE:
return cc.GameName.LODE;

case cc.GameId.SHOOT_FISH:
return cc.GameName.SHOOT_FISH;

default:
return "";
}
};
u.prototype.getSubDomainByHub = function(t) {
switch (t) {
case cc.HubName.PortalHub:
return cc.SubdomainName.PORTAL;

case cc.HubName.ChatHub:
return cc.SubdomainName.CHAT;

case cc.HubName.TreasureHub:
return cc.SubdomainName.TREASURE;

case cc.HubName.EgyptHub:
return cc.SubdomainName.EGYPT;

case cc.HubName.ThreeKingdomHub:
return cc.SubdomainName.THREE_KINGDOM;

case cc.HubName.AquariumHub:
return cc.SubdomainName.AQUARIUM;

case cc.HubName.DragonBallHub:
return cc.SubdomainName.DRAGON_BALL;

case cc.HubName.CowboyHub:
return cc.SubdomainName.COWBOY;

case cc.HubName.ThuongHaiHub:
return cc.SubdomainName.THUONGHAI;

case cc.HubName.GaiNhayHub:
return cc.SubdomainName.GAINHAY;

case cc.HubName.MonkeyHub:
return cc.SubdomainName.MONKEY;

case cc.HubName.DragonTigerHub:
return cc.SubdomainName.DRAGON_TIGER;

case cc.HubName.XocXocHub:
return cc.SubdomainName.XOC_XOC;

case cc.HubName.BauCuaHub:
return cc.SubdomainName.BAUCUA;

case cc.HubName.LodeHub:
return cc.SubdomainName.LODE;

case cc.HubName.LuckyDiceHub:
return cc.SubdomainName.TAI_XIU;

case cc.HubName.MiniPokerHub:
return cc.SubdomainName.MINI_POKER;

case cc.HubName.Seven77Hub:
return cc.SubdomainName.SEVEN77;

case cc.HubName.BlockBusterHub:
return cc.SubdomainName.BLOCK_BUSTER;

case cc.HubName.LuckyWildHub:
return cc.SubdomainName.LUCKY_WILD;

case cc.HubName.ThreeCardsHub:
return cc.SubdomainName.THREE_CARDS;

case cc.HubName.TexasPokerHub:
return cc.SubdomainName.TEXAS_POKER;

case cc.HubName.MBHub:
return cc.SubdomainName.MAU_BINH;

case cc.HubName.BaccaratHub:
return cc.SubdomainName.BACCARAT;

case cc.HubName.TLMNHub:
switch (cc.RoomController.getInstance().getGameId().toString()) {
case cc.GameId.TIEN_LEN_MN:
return cc.SubdomainName.TLMN;

case cc.GameId.TIEN_LEN_MN_SOLO:
return cc.SubdomainName.TLMN_SOLO;
}

case cc.HubName.ShootFishHub:
return cc.SubdomainName.SHOOT_FISH;
}
};
u.prototype.getMultiplierByRoomId = function(t) {
switch (t) {
case 1:
return 80;

case 2:
return 100;

case 3:
default:
return 50;
}
};
u.prototype.getMultiplierByTotalBet = function(t) {
switch (t) {
case 100:
case 300:
return 80;

case 1e3:
case 2e3:
case 3e3:
return 100;

case 5e3:
case 1e4:
case 25e3:
case 3e4:
default:
return 50;
}
};
u.prototype.currency = function() {
switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
case cc.ServiceId.BLOCK_BUSTER_4:
return "Game";
}
};
u.prototype.getPortalName = function() {
switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
return cc.PortalName.BLOCK_BUSTER;

case cc.ServiceId.BLOCK_BUSTER_2:
return cc.PortalName.BLOCK_BUSTER_2;

case cc.ServiceId.BLOCK_BUSTER_3:
return cc.PortalName.BLOCK_BUSTER_3;

case cc.ServiceId.BLOCK_BUSTER_4:
return cc.PortalName.BLOCK_BUSTER_4;
}
};
u.prototype.version = function() {
return "1.0";
};
u.prototype.versionCode = function() {
return 1;
};
u.prototype.getDownloadUrl = function() {
switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
case cc.ServiceId.BLOCK_BUSTER_4:
return "https://tai.sieusoc.vip/";
}
};
u.prototype.fanPageFB = function() {
if (this.checkFDomain()) switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
return "http://www.facebook.com/";

case cc.ServiceId.BLOCK_BUSTER_4:
return "http://tiny.cc/";
} else switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
case cc.ServiceId.BLOCK_BUSTER_4:
return "http://tiny.cc/";
}
};
u.prototype.groupFB = function() {
if (this.checkFDomain()) switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
return "http://www.facebook.com/";

case cc.ServiceId.BLOCK_BUSTER_4:
return "http://tiny.cc/";
} else switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
case cc.ServiceId.BLOCK_BUSTER_4:
return "http://tiny.cc/";
}
};
u.prototype.getTID = function() {
return ++e;
};
u.prototype.getZINDEX = function() {
return ++n;
};
u.prototype.formatRank = function(t, e, o) {
return cc.Tool.getInstance().formatNumber(o);
};
u.prototype.getDeviceType = function() {
return cc.sys.isNative ? cc.sys.os === cc.sys.OS_IOS ? cc.DeviceType.IOS : cc.DeviceType.ANDROID : cc.DeviceType.WEB;
};
u.prototype.getCardTypeByCode = function(t) {
return t.includes(cc.CardOperatorCode.VIETTEL) ? cc.CardType.VIETTEL : t.includes(cc.CardOperatorCode.MOBIFONE) ? cc.CardType.MOBIFONE : t.includes(cc.CardOperatorCode.VINAPHONE) ? cc.CardType.VINAPHONE : void 0;
};
u.prototype.teleHotro = function() {
return "http://tiny.cc/";
};
u.prototype.taiotpx6 = function() {
return "https://tai.sieusoc.vip/";
};
return u;
}();
cc.Config = t;
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: "NetConfig"
} ],
Config: [ function(t, e) {
"use strict";
cc._RF.push(e, "d7a04IUn61A16ny1GlpaDEh", "Config");
var o = t("NetConfig");
(function() {
var t, e, n;
e = 0;
n = 10;
var i = [], r = [], c = [], s = [], a = [ "nothing.club" ];
t = function() {
var t;
function u() {}
t = void 0;
u.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
u.prototype.getDomainVK = function() {
return a;
};
u.prototype.getMinVipShowChat = function() {
return 2;
};
u.prototype.getServiceId = function() {
switch (o.HOST) {
case "sieusoc.vip":
return cc.ServiceId.BLOCK_BUSTER;

case "sieusoc.vip":
return cc.ServiceId.BLOCK_BUSTER_2;

case "sieusoc.vip":
return cc.ServiceId.BLOCK_BUSTER_3;

case "sieusoc.vip":
return cc.ServiceId.BLOCK_BUSTER_4;

default:
return cc.ServiceId.BLOCK_BUSTER;
}
};
u.prototype.getServiceName = function(t) {
switch (t) {
case cc.ServiceId.OLD:
case cc.ServiceId.BLOCK_BUSTER:
return "<color=#32CB09>[" + cc.ServiceName.BLOCK_BUSTER + "]</color> ";

case cc.ServiceId.BLOCK_BUSTER_2:
return "<color=#32CB09>[" + cc.ServiceName.BLOCK_BUSTER_2 + "]</color> ";

case cc.ServiceId.BLOCK_BUSTER_3:
return "<color=#32CB09>[" + cc.ServiceName.BLOCK_BUSTER_3 + "]</color> ";

case cc.ServiceId.BLOCK_BUSTER_4:
return "<color=#32CB09>[" + cc.ServiceName.BLOCK_BUSTER_4 + "]</color> ";
}
};
u.prototype.getIndexIcon = function(t) {
switch (t) {
case cc.ServiceId.OLD:
case cc.ServiceId.BLOCK_BUSTER:
return 0;

case cc.ServiceId.BLOCK_BUSTER_2:
return 1;

case cc.ServiceId.BLOCK_BUSTER_3:
return 2;

case cc.ServiceId.BLOCK_BUSTER_4:
return 3;
}
};
u.prototype.getServiceNameNoFormat = function(t) {
switch (t) {
case cc.ServiceId.OLD:
case cc.ServiceId.BLOCK_BUSTER:
return "[" + cc.ServiceName.BLOCK_BUSTER + "] ";

case cc.ServiceId.BLOCK_BUSTER_2:
return "[" + cc.ServiceName.BLOCK_BUSTER_2 + "] ";

case cc.ServiceId.BLOCK_BUSTER_3:
return "[" + cc.ServiceName.BLOCK_BUSTER_3 + "] ";

case cc.ServiceId.BLOCK_BUSTER_4:
return "[" + cc.ServiceName.BLOCK_BUSTER_4 + "] ";
}
};
u.prototype.getIndexByNation = function(t) {
var e;
switch (t) {
case cc.NationCode.Japan:
e = 4;
break;

case cc.NationCode.Korea:
e = 8;
break;

case cc.NationCode.Russia:
e = 1;
break;

case cc.NationCode.Ukraine:
e = 2;
break;

case cc.NationCode.Germany:
e = 3;
break;

case cc.NationCode.Poland:
e = 5;
break;

case cc.NationCode.Taipen:
e = 6;
break;

case cc.NationCode.Sec:
e = 7;
break;

default:
e = 0;
}
return e;
};
u.prototype.getNationByNationCode = function(t) {
switch (t) {
case cc.NationCode.Japan:
return "Nhật Bản";

case cc.NationCode.Korea:
return "Hàn Quốc";

case cc.NationCode.Russia:
return "Nga";

case cc.NationCode.Ukraine:
return "Ukraina";

case cc.NationCode.Belarus:
return "Belarus";

case cc.NationCode.Poland:
return "Ba Lan";

case cc.NationCode.Germany:
return "Đức";

case cc.NationCode.Taipen:
return "Đài Loan";

case cc.NationCode.Sec:
return "Cộng hoà Séc";

default:
return "";
}
};
u.prototype.checkErrorDomain = function() {
var t = !1;
i.forEach(function(e) {
e === cc.Tool.getInstance().getHostName() && (t = !0);
});
return t;
};
u.prototype.checkFDomain = function() {
var t = !1;
c.forEach(function(e) {
e === cc.Tool.getInstance().getHostName() && (t = !0);
});
s.forEach(function(e) {
e === o.HOST && (t = !0);
});
return t;
};
u.prototype.getNewDomain = function() {
var t = "", e = 0;
i.forEach(function(o) {
o === cc.Tool.getInstance().getHostName() && (t = r[e]);
e++;
});
return t;
};
u.prototype.formatName = function(t, e) {
return t.length > e ? t.substring(0, e) + ".." : t;
};
u.prototype.checkUrl = function(t, e) {
return t.length > e ? t.substring(0, e) + ".." : t;
};
u.prototype.getRoomValue = function(t, e) {
switch (t.toString()) {
case cc.GameId.THREE_KINGDOM:
case cc.GameId.EGYPT:
case cc.GameId.AQUARIUM:
case cc.GameId.DRAGON_BALL:
case cc.GameId.COWBOY:
case cc.GameId.SEVEN77:
case cc.GameId.THUONG_HAI:
switch (e) {
case 1:
return 100;

case 2:
return 1e3;

case 3:
return 5e3;

case 4:
return 1e4;
}
break;

case cc.GameId.MINI_POKER:
switch (e) {
case 1:
return 100;

case 2:
return 1e3;

case 3:
return 1e4;

case 4:
return 3e4;
}
break;

case cc.GameId.BLOCK_BUSTER:
switch (e) {
case 1:
return 1e3;

case 2:
return 2e3;

case 3:
return 5e3;

case 4:
return 1e4;

case 5:
return 3e4;

case 6:
return 5e4;

case 7:
return 1e5;
}
break;

case cc.GameId.LUCKY_WILD:
switch (e) {
case 1:
return 1e3;

case 2:
return 2e3;

case 3:
return 5e3;

case 4:
return 1e4;

case 5:
return 25e3;
}
}
};
u.prototype.getGameName = function(t) {
switch (t.toString()) {
case cc.GameId.THREE_KINGDOM:
return cc.GameName.THREE_KINGDOM;

case cc.GameId.EGYPT:
return cc.GameName.EGYPT;

case cc.GameId.AQUARIUM:
return cc.GameName.AQUARIUM;

case cc.GameId.DRAGON_BALL:
return cc.GameName.DRAGON_BALL;

case cc.GameId.COWBOY:
return cc.GameName.COWBOY;

case cc.GameId.THUONG_HAI:
return cc.GameName.THUONGHAI;

case cc.GameId.GAINHAY:
return cc.GameName.GAINHAY;

case cc.GameId.TAI_XIU:
return cc.GameName.TAI_XIU;

case cc.GameId.MINI_POKER:
return cc.GameName.MINI_POKER;

case cc.GameId.SEVEN77:
return cc.GameName.SEVEN77;

case cc.GameId.BLOCK_BUSTER:
return cc.GameName.BLOCK_BUSTER;

case cc.GameId.LUCKY_WILD:
return cc.GameName.LUCKY_WILD;

case cc.GameId.VQMM:
return cc.GameName.VQMM;

case cc.GameId.MONKEY:
return cc.GameName.MONKEY;

case cc.GameId.DRAGON_TIGER:
return cc.GameName.DRAGON_TIGER;

case cc.GameId.XOC_XOC:
return cc.GameName.XOC_XOC;

case cc.GameId.BACCARAT:
return cc.GameName.BACCARAT;

case cc.GameId.BAUCUA:
return cc.GameName.BAU_CUA;

case cc.GameId.BA_CAY:
return cc.GameName.BA_CAY;

case cc.GameId.BA_CAY_GA:
return cc.GameName.BA_CAY_GA;

case cc.GameId.BA_CAY_BIEN:
return cc.GameName.BA_CAY_BIEN;

case cc.GameId.POKER_TEXAS:
return cc.GameName.POKER_TEXAS;

case cc.GameId.TIEN_LEN_MN:
return cc.GameName.TIEN_LEN_MN;

case cc.GameId.TIEN_LEN_MN_SOLO:
return cc.GameName.TIEN_LEN_MN_SOLO;

case cc.GameId.MAU_BINH:
return cc.GameName.MAU_BINH;

case cc.GameId.LODE:
return cc.GameName.LODE;

case cc.GameId.SHOOT_FISH:
return cc.GameName.SHOOT_FISH;

default:
return "";
}
};
u.prototype.getSubDomainByHub = function(t) {
switch (t) {
case cc.HubName.PortalHub:
return cc.SubdomainName.PORTAL;

case cc.HubName.ChatHub:
return cc.SubdomainName.CHAT;

case cc.HubName.TreasureHub:
return cc.SubdomainName.TREASURE;

case cc.HubName.EgyptHub:
return cc.SubdomainName.EGYPT;

case cc.HubName.ThreeKingdomHub:
return cc.SubdomainName.THREE_KINGDOM;

case cc.HubName.AquariumHub:
return cc.SubdomainName.AQUARIUM;

case cc.HubName.DragonBallHub:
return cc.SubdomainName.DRAGON_BALL;

case cc.HubName.CowboyHub:
return cc.SubdomainName.COWBOY;

case cc.HubName.ThuongHaiHub:
return cc.SubdomainName.THUONGHAI;

case cc.HubName.GaiNhayHub:
return cc.SubdomainName.GAINHAY;

case cc.HubName.MonkeyHub:
return cc.SubdomainName.MONKEY;

case cc.HubName.DragonTigerHub:
return cc.SubdomainName.DRAGON_TIGER;

case cc.HubName.XocXocHub:
return cc.SubdomainName.XOC_XOC;

case cc.HubName.BauCuaHub:
return cc.SubdomainName.BAUCUA;

case cc.HubName.LodeHub:
return cc.SubdomainName.LODE;

case cc.HubName.LuckyDiceHub:
return cc.SubdomainName.TAI_XIU;

case cc.HubName.MiniPokerHub:
return cc.SubdomainName.MINI_POKER;

case cc.HubName.Seven77Hub:
return cc.SubdomainName.SEVEN77;

case cc.HubName.BlockBusterHub:
return cc.SubdomainName.BLOCK_BUSTER;

case cc.HubName.LuckyWildHub:
return cc.SubdomainName.LUCKY_WILD;

case cc.HubName.ThreeCardsHub:
return cc.SubdomainName.THREE_CARDS;

case cc.HubName.TexasPokerHub:
return cc.SubdomainName.TEXAS_POKER;

case cc.HubName.MBHub:
return cc.SubdomainName.MAU_BINH;

case cc.HubName.BaccaratHub:
return cc.SubdomainName.BACCARAT;

case cc.HubName.TLMNHub:
switch (cc.RoomController.getInstance().getGameId().toString()) {
case cc.GameId.TIEN_LEN_MN:
return cc.SubdomainName.TLMN;

case cc.GameId.TIEN_LEN_MN_SOLO:
return cc.SubdomainName.TLMN_SOLO;
}

case cc.HubName.ShootFishHub:
return cc.SubdomainName.SHOOT_FISH;
}
};
u.prototype.getMultiplierByRoomId = function(t) {
switch (t) {
case 1:
return 80;

case 2:
return 100;

case 3:
default:
return 50;
}
};
u.prototype.getMultiplierByTotalBet = function(t) {
switch (t) {
case 100:
case 300:
return 80;

case 1e3:
case 2e3:
case 3e3:
return 100;

case 5e3:
case 1e4:
case 25e3:
case 3e4:
default:
return 50;
}
};
u.prototype.currency = function() {
switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
case cc.ServiceId.BLOCK_BUSTER_4:
return "Game";
}
};
u.prototype.getPortalName = function() {
switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
return cc.PortalName.BLOCK_BUSTER;

case cc.ServiceId.BLOCK_BUSTER_2:
return cc.PortalName.BLOCK_BUSTER_2;

case cc.ServiceId.BLOCK_BUSTER_3:
return cc.PortalName.BLOCK_BUSTER_3;

case cc.ServiceId.BLOCK_BUSTER_4:
return cc.PortalName.BLOCK_BUSTER_4;
}
};
u.prototype.version = function() {
return "1.0";
};
u.prototype.versionCode = function() {
return 1;
};
u.prototype.getDownloadUrl = function() {
switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
case cc.ServiceId.BLOCK_BUSTER_4:
return "https://tai.sieusoc.vip/";
}
};
u.prototype.fanPageFB = function() {
if (this.checkFDomain()) switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
return "http://www.facebook.com/";

case cc.ServiceId.BLOCK_BUSTER_4:
return "http://tiny.cc/";
} else switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
case cc.ServiceId.BLOCK_BUSTER_4:
return "http://tiny.cc/";
}
};
u.prototype.groupFB = function() {
if (this.checkFDomain()) switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
return "http://www.facebook.com/";

case cc.ServiceId.BLOCK_BUSTER_4:
return "http://tiny.cc/";
} else switch (this.getServiceId()) {
case cc.ServiceId.BLOCK_BUSTER:
case cc.ServiceId.BLOCK_BUSTER_2:
case cc.ServiceId.BLOCK_BUSTER_3:
case cc.ServiceId.BLOCK_BUSTER_4:
return "http://tiny.cc/";
}
};
u.prototype.getTID = function() {
return ++e;
};
u.prototype.getZINDEX = function() {
return ++n;
};
u.prototype.formatRank = function(t, e, o) {
return cc.Tool.getInstance().formatNumber(o);
};
u.prototype.getDeviceType = function() {
return cc.sys.isNative ? cc.sys.os === cc.sys.OS_IOS ? cc.DeviceType.IOS : cc.DeviceType.ANDROID : cc.DeviceType.WEB;
};
u.prototype.getCardTypeByCode = function(t) {
return t.includes(cc.CardOperatorCode.VIETTEL) ? cc.CardType.VIETTEL : t.includes(cc.CardOperatorCode.MOBIFONE) ? cc.CardType.MOBIFONE : t.includes(cc.CardOperatorCode.VINAPHONE) ? cc.CardType.VINAPHONE : void 0;
};
u.prototype.teleHotro = function() {
return "http://tiny.cc/";
};
u.prototype.taiotpx6 = function() {
return "https://tai.sieusoc.vip/";
};
return u;
}();
cc.Config = t;
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: "NetConfig"
} ],
ConfirmDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c68cdZSJc9OgLYIsXx9RI8K", "ConfirmDialog");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./Dialog"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblMessage = null;
e.lblDone = null;
e.lblConfirm = null;
e.onDismissed = null;
e.onConfirmClicked = null;
e.isClickdConfirm = !1;
return e;
}
e.prototype.show1 = function(t) {
this.show4(t);
};
e.prototype.show2 = function(t, e) {
this.show4(t, null, null, e);
};
e.prototype.show3 = function(t, e, o) {
this.show4(t, null, e, o);
};
e.prototype.show5 = function(e, o) {
this.isClickdConfirm = !1;
this.onDismissed = o;
this.lblMessage.string = e;
t.prototype.show.call(this);
};
e.prototype.show4 = function(e, o, n, i) {
this.isClickdConfirm = !1;
this.lblDone.string = o || "Hủy";
this.lblConfirm.string = n || "Đồng ý";
this.onDismissed = i;
this.lblMessage.string = e;
t.prototype.show.call(this);
};
e.prototype.actConfirm = function() {
this.isClickdConfirm = !0;
this.dismiss();
};
e.prototype._onShowed = function() {
c.default.prototype._onShowed.call(this);
};
e.prototype._onDismissed = function() {
c.default.prototype._onDismissed.call(this);
"function" == typeof this.onDismissed && this.onDismissed(this.isClickdConfirm);
};
r([ u(cc.Label) ], e.prototype, "lblMessage", void 0);
r([ u(cc.Label) ], e.prototype, "lblDone", void 0);
r([ u(cc.Label) ], e.prototype, "lblConfirm", void 0);
return r([ a ], e);
}(c.default);
o.default = l;
cc._RF.pop();
}, {
"./Dialog": "Dialog"
} ],
CowboyConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "23da4XFM/RDip3t0OoEIRil", "CowboyConfig");
e.exports = {
TIME_COLUMN_NORMAL: .4,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .25,
TIME_CALL_STOP_FAST: .8,
TIME_WILD_3X_APPEAR: 4,
TIME_PLAY_EFFECT_EXPAND_WILD: 3,
TIME_SCALE_ANIMATION_WILD: 1.25,
TIME_WILD_3X_APPEAR_FAST: 2.5,
TIME_PLAY_EFFECT_EXPAND_WILD_FAST: 2,
TIME_SCALE_ANIMATION_WILD_FAST: 2,
TIME_PLAY_EFFECT_EXPAND_WILD_FREE_SPIN: .5,
TIME_MONEY_EFFECT_JACKPOT: 5,
TIME_MONEY_EFFECT_BIG_WIN: 5,
TIME_MONEY_EFFECT_NORMAL_WIN: 2.25,
TIME_WAIT_LOST: .8,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2.5,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2.5,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1.25,
TIME_WAIT_LOST_FAST: .5,
TIME_TWEEN_MONEY_FAST: .5,
TIME_WAIT_MULTIPLIER: 2,
TIME_WAIT_LAST_STEP: 1.5,
TIME_WAIT_LAST_PICK: 2,
TIME_WAIT_AUTO_FINISH_BONUS_GAME: 15,
TIME_WAIT_START_FREE_SPIN: 2,
TIME_WAIT_RESULT_FREE_SPIN: 2,
TIME_ANIMATION_OPEN_CARD: .8,
MULTIPLIER_BIG_WIN: 4,
TIME_WAIT_AUTO_START_BONUS_GAME: 2,
TIME_WAIT_AUTO_CLOSE_BONUS_GAME: 2
};
cc._RF.pop();
}, {} ],
DialogUtil: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d1e37QPoABALrfk1epzt2EZ", "DialogUtil");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onBtnClose = function() {
this.node.destroy();
};
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Dialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "89938zvBc1CAaNyePwL3b4R", "Dialog");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isAnimated = !0;
e.bg = null;
e.container = null;
e.showScale = 1.1;
e.startScale = .7;
e.timeoutDissMsgSystem = null;
return e;
}
e.prototype.show = function() {
this.bg || (this.bg = this.node.getChildByName("Bg"));
this.container || (this.container = this.node.getChildByName("Container"));
this.node.active = !0;
this.isAnimated = !1;
this.bg.stopAllActions();
this.bg.opacity = 0;
this.bg.runAction(cc.fadeTo(.2, 128));
this.container.stopAllActions();
this.container.opacity = 0;
this.container.scale = this.startScale;
this.container.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, this.showScale), cc.fadeIn(.2)), cc.scaleTo(.1, 1), cc.callFunc(this._onShowed.bind(this))));
};
e.prototype.dismiss = function() {
this.bg || (this.bg = this.node.getChildByName("Bg"));
this.container || (this.container = this.node.getChildByName("Container"));
this.isAnimated = !1;
this.bg.stopAllActions();
this.bg.opacity = 128;
this.bg.runAction(cc.fadeOut(.2));
this.container.stopAllActions();
this.container.opacity = 255;
this.container.scale = 1;
this.container.runAction(cc.sequence(cc.scaleTo(.1, this.showScale), cc.spawn(cc.scaleTo(.2, this.startScale), cc.fadeOut(.2)), cc.callFunc(this._onDismissed.bind(this))));
};
e.prototype.showMsgSystem = function() {
if (this.node) {
this.bg || (this.bg = this.node.getChildByName("Bg"));
this.container || (this.container = this.node.getChildByName("Container"));
this.node.active = !0;
this.isAnimated = !1;
this.container.position = cc.v2(0, 50);
var t = cc.v2(0, 15);
this.bg.stopAllActions();
this.bg.opacity = 0;
this.bg.runAction(cc.fadeTo(.2, 128));
this.container.stopAllActions();
this.container.opacity = 155;
this.container.runAction(cc.sequence(cc.spawn(cc.moveTo(.2, t), cc.fadeIn(.2)), cc.callFunc(this._onShowedMsgSystem.bind(this))));
}
};
e.prototype.dismissMsgSystem = function() {
if (this.node) {
this.bg || (this.bg = this.node.getChildByName("Bg"));
this.container || (this.container = this.node.getChildByName("Container"));
this.isAnimated = !1;
this.bg.stopAllActions();
this.bg.opacity = 128;
this.bg.runAction(cc.fadeOut(.2));
var t = cc.v2(0, 50);
this.container.stopAllActions();
this.container.opacity = 255;
this.container.runAction(cc.sequence(cc.spawn(cc.moveTo(.2, t), cc.fadeOut(.2)), cc.callFunc(this._onDismissedMsgSystem.bind(this))));
}
};
e.prototype._onShowedMsgSystem = function() {
var t = this;
this.isAnimated = !0;
null != this.timeoutDissMsgSystem && clearTimeout(this.timeoutDissMsgSystem);
this.timeoutDissMsgSystem = setTimeout(function() {
t.dismissMsgSystem();
}, 1200);
};
e.prototype._onDismissedMsgSystem = function() {
this.node.active = !0;
this.isAnimated = !1;
};
e.prototype._onShowed = function() {
this.isAnimated = !0;
};
e.prototype._onDismissed = function() {
this.node.active = !1;
this.isAnimated = !0;
};
e.prototype._onDestroy = function() {
this.unscheduleAllCallbacks();
};
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
DragonBallConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "b4c0alGW6BFf7RrOwha2iRo", "DragonBallConfig");
e.exports = {
TIME_COLUMN_NORMAL: .15,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .1,
TIME_CALL_STOP_FAST: .5,
TIME_WILD_3X_APPEAR: 1.5,
TIME_PLAY_EFFECT_EXPAND_WILD: .7,
TIME_SCALE_ANIMATION_WILD: 1.3,
TIME_WILD_3X_APPEAR_FAST: 1,
TIME_PLAY_EFFECT_EXPAND_WILD_FAST: .35,
TIME_SCALE_ANIMATION_WILD_FAST: 2,
TIME_PLAY_EFFECT_EXPAND_WILD_FREE_SPIN: .5,
TIME_MONEY_EFFECT_JACKPOT: 5,
TIME_MONEY_EFFECT_BIG_WIN: 5,
TIME_MONEY_EFFECT_NORMAL_WIN: 2,
TIME_WAIT_LOST: .5,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1,
TIME_WAIT_LOST_FAST: .3,
TIME_TWEEN_MONEY_FAST: .3,
TIME_WAIT_MULTIPLIER: 2,
TIME_WAIT_LAST_STEP: 1.5,
TIME_WAIT_LAST_PICK: 2,
TIME_WAIT_AUTO_FINISH_BONUS_GAME: 15,
TIME_WAIT_START_FREE_SPIN: 2,
TIME_WAIT_RESULT_FREE_SPIN: 2,
TIME_ANIMATION_OPEN_CARD: .9,
MULTIPLIER_BIG_WIN: 4,
TIME_WAIT_AUTO_START_BONUS_GAME: 2,
TIME_WAIT_AUTO_CLOSE_BONUS_GAME: 2
};
cc._RF.pop();
}, {} ],
DropDownItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0e0c1OzYPVOfpEPKQp433tu", "DropDownItem");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.sprite = null;
e.toggle = null;
return e;
}
r([ a(cc.Label) ], e.prototype, "label", void 0);
r([ a(cc.Sprite) ], e.prototype, "sprite", void 0);
r([ a(cc.Toggle) ], e.prototype, "toggle", void 0);
return r([ s() ], e);
}(fzgui.DropDownItem);
o.default = u;
cc._RF.pop();
}, {} ],
DropDownOptionData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fd5cfBXVIZC4Ks6evy9ygnF", "DropDownOptionData");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.optionString = "";
e.optionSf = null;
return e;
}
r([ a(cc.String) ], e.prototype, "optionString", void 0);
r([ a(cc.SpriteFrame) ], e.prototype, "optionSf", void 0);
return r([ s("DropDownOptionData") ], e);
}(fzgui.DropDownOptionData);
o.default = u;
cc._RF.pop();
}, {} ],
DropDown: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4c73768DrRIEpBrhG+kF/zC", "DropDown");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./DropDownOptionData"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.template = null;
e.labelCaption = null;
e.spriteCaption = null;
e.labelItem = null;
e.spriteItem = null;
e.optionDatas = [];
return e;
}
r([ u(cc.Node) ], e.prototype, "template", void 0);
r([ u(cc.Label) ], e.prototype, "labelCaption", void 0);
r([ u(cc.Sprite) ], e.prototype, "spriteCaption", void 0);
r([ u(cc.Label) ], e.prototype, "labelItem", void 0);
r([ u(cc.Sprite) ], e.prototype, "spriteItem", void 0);
r([ u([ c.default ]) ], e.prototype, "optionDatas", void 0);
return r([ a() ], e);
}(fzgui.DropDown);
o.default = l;
cc._RF.pop();
}, {
"./DropDownOptionData": "DropDownOptionData"
} ],
ESoundDefined: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5d4ceATrhFBYoeHQn/OnoaF", "ESoundDefined");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.audioClick = null;
e.musicPlay = null;
return e;
}
r([ a(cc.AudioClip) ], e.prototype, "audioClick", void 0);
r([ a(cc.AudioClip) ], e.prototype, "musicPlay", void 0);
return r([ s ], e);
}(fzgui.ESoundDefined);
o.default = u;
cc._RF.pop();
}, {} ],
EventDefine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3f2a6f2hp1AOLhefSz/uGvR", "EventDefine");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, c = (i.property, function() {
function t() {}
t.LOAD_GAMESETTING_COMPLETE = "load_gamesetting_complete";
t.UPDATE_LIST_JACKPOT = "update_list_jackpot";
t.UPDATE_USER_BALANCE = "update_user_balance";
return n([ r ], t);
}());
o.default = c;
cc._RF.pop();
}, {} ],
"FixFontLabel ": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4e0d15SRpdOwJqFQ/ZjOfPu", "FixFontLabel ");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isSystemFontUsed = !1;
return e;
}
e.prototype.onLoad = function() {
if (cc.sys.os == cc.sys.OS_IOS) {
switch (this.font.name) {
case "UTM_Avo":
this.fontFamily = "UTM Avo";
break;

case "UTM_AvoBold":
this.fontFamily = "UTMAvoBold";
break;

case "UTM_AvoBold_Italic":
this.fontFamily = "UTM Avo Bold Italic";
break;

case "UTM_AvoItalic":
this.fontFamily = "UTM Avo Italic";
break;

case "UTM_Azuki":
this.fontFamily = "Material Icons";
break;

case "UTM-Davida":
this.fontFamily = "UTM Davida";
break;

case "UTM-SeagullBold":
this.fontFamily = "UTMSeagullBold";
break;

case "UTM-SeagullBoldItalic":
this.fontFamily = "UTM Seagull Bold Italic";
break;

case "TUV-Benchmark":
this.fontFamily = "TUVBenchmark";
break;

case "Roboto-Black":
this.fontFamily = "Roboto Black";
break;

case "Roboto-Italic":
this.fontFamily = "Roboto Italic";
break;

case "Roboto-Light":
this.fontFamily = "Roboto Light";
break;

case "Roboto-Regular":
this.fontFamily = "Roboto Regular";
break;

case "Roboto-BoldCondensedItalic":
this.fontFamily = "Roboto Bold Condensed Italic";
break;

case "Roboto-Bold":
this.fontFamily = "Roboto Bold";
break;

case "SVN-Batman-Forever-Alternate":
this.fontFamily = "SVN-BatmanForeverAlternate";
break;

case "SVN-Bira":
this.fontFamily = "SVN-Bira";
break;

case "SVN-Block":
this.fontFamily = "SVN-Block";
}
this.font = null;
this.isSystemFontUsed = !0;
this.fontFamily = this.fontFamily;
} else {
this.isSystemFontUsed = !1;
this.font = this.font;
}
};
return r([ s ], e);
}(cc.Label));
o.default = a;
cc._RF.pop();
}, {} ],
FormatUtil: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "04294fnxVpAGaPrBMuMQThi", "FormatUtil");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, c = (i.property, function() {
function t() {}
e = t;
t.formatNumber = function(t) {
if (t) {
var e = (t = parseInt(t)).toString().split(".");
e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
return e.join(".");
}
return t;
};
t.formatNumberNN = function(t) {
return t < 10 ? "0" + t : "" + t;
};
t.formatTimeMMSS = function(t) {
t < 0 && (t = 0);
var e = Math.floor(t / 60), o = t - 60 * e;
return (e < 10 ? "0" + e : "" + e) + ":" + (o < 10 ? "0" + o : "" + o);
};
t.formatDateByTimeStamp = function(t) {
var e = new Date(1e3 * t), o = e.getHours(), n = e.getMinutes(), i = e.getDate(), r = e.getMonth() + 1;
o < 10 && (o = "0" + o);
n < 10 && (n = "0" + n);
i < 10 && (i = "0" + i);
r < 10 && (r = "0" + r);
return o + ":" + n + " " + i + "/" + r + "/" + e.getFullYear();
};
t.formatDateDDHHMMSS = function(t) {
var o = t, n = Math.floor(t / 86400);
o -= 86400 * n;
var i = 0 === n ? "" : e.formatNumberNN(n) + "d:", r = Math.floor(o / 3600);
o -= 3600 * r;
var c = e.formatNumberNN(r), s = Math.floor(o / 60), a = o -= 60 * s;
return i + c + ":" + e.formatNumberNN(s) + ":" + e.formatNumberNN(a);
};
t.formatDateMonthYear = function(t) {
void 0 === t && (t = void 0);
var e = null, o = (e = t ? new Date(1e3 * t) : new Date()).getDay();
return (1 == o ? "Thứ 2" : 2 == o ? "Thứ 3" : 3 == o ? "Thứ 4" : 4 == o ? "Thứ 5" : 5 == o ? "Thứ 6" : 6 == o ? "Thứ 7" : "Chủ Nhật") + ",ngày " + e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
};
t.formatDateDDMMYYYY = function(t) {
var e = new Date(t), o = e.getDate(), n = e.getMonth();
return (o < 10 ? "0" + o : "" + o) + "-" + (n < 10 ? "0" + n : "" + n) + "-" + e.getFullYear();
};
t.formatDateTime = function(t, e, o) {
var n = t.split("-"), i = n[0], r = n[1], c = n[2].substr(0, 2), s = n[2].split(":"), a = s[0].substr(s[0].length - 2, 2), u = s[1];
s[2].substr(0, 2);
return e && o ? c + "-" + r + "-" + i + " " + a + ":" + u : e ? c + "-" + r + "-" + i : o ? a + ":" + u : void 0;
};
t.formatBirthday = function(t) {
var e = t.split("T")[0].split("-");
return e[1] + "/" + e[2] + "/" + e[0];
};
t.formatNumberToK = function(t) {
var e = "", o = t < 0 ? 1 : 0;
if ((t = Math.abs(t)) >= 1e3) {
var n = Math.floor(t / 1e3);
e = this.formatNumber(n) + "K";
} else e = "" + t;
o && (e = "-" + e);
return e;
};
t.formatNumberToKM = function(t) {
if (Math.abs(t) >= 1e6) {
var e = t < 0 ? 1 : 0;
t = Math.abs(t);
var o = Math.floor(t / 1e6), n = this.formatNumber(o) + "M";
e && (n = "-" + n);
return n;
}
return this.formatNumberToK(t);
};
t.getOnlyNumberInString = function(t) {
var e = t.match(/\d+/g);
return e ? e.join("") : "";
};
var e;
return e = n([ r ], t);
}());
o.default = c;
cc._RF.pop();
}, {} ],
GameCoreManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bf59c/u3uZHebYRjv7AEd5R", "GameCoreManager");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nMiniGames = null;
e.nWidgetShowJackpot = null;
e.nLayerMiniGame = null;
e.gameName = "";
return e;
}
r([ a(cc.Node) ], e.prototype, "nMiniGames", void 0);
r([ a(cc.Node) ], e.prototype, "nWidgetShowJackpot", void 0);
r([ a(cc.Node) ], e.prototype, "nLayerMiniGame", void 0);
r([ a(cc.String) ], e.prototype, "gameName", void 0);
return r([ s ], e);
}(fzgui.GameCoreManager);
o.default = u;
cc._RF.pop();
}, {} ],
GameMessage: [ function(t, e) {
"use strict";
cc._RF.push(e, "84a52M5pp9HupD36If5Hrcr", "GameMessage");
e.exports = {
BALANCE_NOT_ENOUGH_SPIN: "Số dư không đủ để quay",
YOU_WIN_X2: "Bạn đã thắng cược",
YOU_LOSE_X2: "Bạn đã thua cược",
GET_FREE_SPIN: "Chúc mừng bạn quay đươc\n freespin hệ số nhân: X",
RESULT_FREE_SPIN_1: "Chúc mừng bạn đã được\n",
RESULT_FREE_SPIN_2: "\ntừ lượt quay miễn phí",
YOU_NOT_CHOOSE_BET_LINES: "Bạn chưa chọn dòng đặt",
SLOTS_POPUP_WIN: "Chúc mừng bạn đã được",
MP_CANT_SWITCH_ROOM_AUTO_SPIN: "Bạn không thể chuyển phòng khi đang tự quay",
MP_CANT_SWITCH_ROOM_SPINNING: "Bạn không thể chuyển phòng khi đang quay"
};
cc._RF.pop();
}, {} ],
HubController: [ function(t, e) {
"use strict";
cc._RF.push(e, "1d41fXFbyFM2qXlkwLIM0O2", "HubController");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
e.prototype.setPortalHub = function(t) {
this.portalHub = t;
};
e.prototype.disconnectPortalHub = function() {
this.portalHub && this.portalHub.disconnect();
};
return e;
}();
cc.HubController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
HubName: [ function(t, e) {
"use strict";
cc._RF.push(e, "c6a7dsKciBOdJKxj3afvsi+", "HubName");
(function() {
cc.HubName = cc.Enum({
PortalHub: "PortalHub",
ChatHub: "chatHub",
LuckyDiceHub: "luckydiceHub",
MiniPokerHub: "xpokerHub",
Seven77Hub: "kingstarHub",
BlockBusterHub: "blockbusterHub",
LuckyWildHub: "luckywildHub",
EgyptHub: "egyptHub",
ThreeKingdomHub: "taydukyHub",
AquariumHub: "thuycungHub",
DragonBallHub: "songokuHub",
BumBumHub: "bumbumHub",
CowboyHub: "cowboysHub",
ThuongHaiHub: "demthuonghaiHub",
MonkeyHub: "monkeyHub",
DragonTigerHub: "dragontigerHub",
XocXocHub: "sedieHub",
ThreeCardsHub: "bacayHub",
TexasPokerHub: "pokerHub",
TLMNHub: "tlmnHub",
MBHub: "maubinhHub",
BaccaratHub: "baccaratHub",
BauCuaHub: "baucuaHub",
VietlotHub: "vietlottHub",
LodeHub: "xosoHub",
TreasureHub: "TreasureHub",
ShootFishHub: "shootFishHub",
GaiNhayHub: "gainhayHub",
CookieName: ".cplay.club"
});
}).call(void 0);
cc._RF.pop();
}, {} ],
Hub: [ function(t, e) {
"use strict";
cc._RF.push(e, "8cd07mSK+JHQ4qtACQGk7Gi", "Hub");
var o = t("NetConfig");
(function() {
var t;
t = function() {
function t() {}
t.prototype.connect = function(t, e, n, i, r) {
if (e && t) {
try {
this.controller = t;
this.hubName = e;
this.channelChatId = r || "taixiu";
var c = JSON.stringify([ {
name: this.hubName
} ]), s = o.HOST;
e !== cc.HubName.DragonTigerHub && e !== cc.HubName.XocXocHub && e !== cc.HubName.ChatHub && e !== cc.HubName.ThreeCardsHub && e !== cc.HubName.TexasPokerHub && e !== cc.HubName.TLMNHub && e !== cc.HubName.MBHub && e !== cc.HubName.BaccaratHub && e !== cc.HubName.TreasureHub && e !== cc.HubName.BauCuaHub && e !== cc.HubName.LodeHub && e !== cc.HubName.VietlotHub || "ibom2.cc" !== s && "ibom3.cc" !== s || (s = "thanhno.club");
var a = "wss://" + cc.Config.getInstance().getSubDomainByHub(e) + s + "/signalr/connect?transport=webSockets&connectionToken=" + encodeURIComponent(n) + "&connectionData=" + encodeURIComponent(c) + "&tid=" + cc.Config.getInstance().getTID();
cc.ServerConnector.getInstance().getToken() && (a += "&access_token=" + encodeURIComponent(cc.ServerConnector.getInstance().getToken()));
i ? a = a.replace("/signalr/connect?", "/signalr/reconnect?") : cc.PopupController.getInstance().showBusy();
try {
cc.sys.isNative ? this.netControl = new WebSocket(a, [], cc.url.raw("resources/cacert.pem")) : this.netControl = new WebSocket(a);
} catch (t) {
cc.PopupController.getInstance().hideBusy();
}
this.netControl.onopen = this.onOpen.bind(this);
this.netControl.onclose = this.onClose.bind(this);
this.netControl.onmessage = this.onMessage.bind(this);
this.netControl.onerror = this.onError.bind(this);
} catch (t) {
cc.PopupController.getInstance().hideBusy();
}
this.ID = 0;
this.lastID = 0;
}
};
t.prototype.disconnect = function() {
if (this.netControl) {
this.netControl.close();
this.netControl.onopen = null;
this.netControl.onclose = null;
this.netControl.onmessage = null;
this.netControl.onerror = null;
this.netControl = null;
}
this.controller = null;
this.ID = 0;
this.lastID = 0;
this.interval && clearInterval(this.interval);
};
t.prototype.enterLobby = function() {
var t = {
M: cc.MethodHubName.ENTER_LOBBY
};
switch (this.hubName) {
case cc.HubName.XocXocHub:
case cc.HubName.TexasPokerHub:
case cc.HubName.ThreeCardsHub:
case cc.HubName.TLMNHub:
case cc.HubName.MBHub:
case cc.HubName.BaccaratHub:
case cc.HubName.DragonTigerHub:
case cc.HubName.BauCuaHub:
t.A = [ cc.Config.getInstance().getDeviceType(), cc.LoginController.getInstance().getLoginResponse().RankID ];
}
this.send(t);
};
t.prototype.exitLobby = function() {
var t = {
M: cc.MethodHubName.EXIT_LOBBY
};
this.send(t);
};
t.prototype.playNow = function(t) {
var e = {
M: cc.MethodHubName.PLAY_NOW
};
switch (this.hubName) {
case cc.HubName.XocXocHub:
case cc.HubName.BaccaratHub:
case cc.HubName.DragonTigerHub:
case cc.HubName.BauCuaHub:
break;

case cc.HubName.ThreeCardsHub:
e.A = [ t, 1 ];
break;

case cc.HubName.TLMNHub:
case cc.HubName.MBHub:
e.A = [ t, 1, cc.ServerConnector.getInstance().getLatitude(), cc.ServerConnector.getInstance().getLongitude() ];
break;

case cc.HubName.CowboyHub:
e.A = [ t, cc.Config.getInstance().getDeviceType() ];
break;

default:
e.A = [ t ];
}
this.send(e);
};
t.prototype.spin = function(t, e) {
var o = {
M: cc.MethodHubName.SPIN
};
switch (this.hubName) {
case cc.HubName.EgyptHub:
case cc.HubName.ThreeKingdomHub:
case cc.HubName.AquariumHub:
case cc.HubName.DragonBallHub:
case cc.HubName.BumBumHub:
case cc.HubName.ThuongHaiHub:
case cc.HubName.GaiNhayHub:
o.A = [ t, cc.Config.getInstance().getDeviceType() ];
break;

case cc.HubName.CowboyHub:
o.A = [ t ];
break;

case cc.HubName.BlockBusterHub:
case cc.HubName.LuckyWildHub:
o.A = [ e, cc.Config.getInstance().getDeviceType() ];
break;

default:
o.A = [ e, t, cc.Config.getInstance().getDeviceType() ];
}
this.send(o);
};
t.prototype.freeSpin = function() {
var t = {
M: cc.MethodHubName.FREE_SPIN
};
this.send(t);
};
t.prototype.playBonus = function(t, e) {
var o = {
M: cc.MethodHubName.PLAY_BONUS,
A: [ t, e ]
};
this.send(o);
};
t.prototype.playX2Game = function() {
var t = {
M: cc.MethodHubName.PLAY_X2_GAME
};
this.send(t);
};
t.prototype.finishX2Game = function() {
var t = {
M: cc.MethodHubName.FINISH_X2_GAME
};
this.send(t);
};
t.prototype.playTry = function() {
var t = {
M: cc.MethodHubName.PLAY_TRY
};
this.send(t);
};
t.prototype.spinTry = function() {
var t = {
M: cc.MethodHubName.SPIN_TRY
};
this.send(t);
};
t.prototype.register = function() {
var t = {
M: cc.MethodHubName.REGISTER_CHAT,
A: [ this.channelChatId, cc.LoginController.getInstance().getLoginResponse().RankID ]
};
this.send(t);
};
t.prototype.unregister = function() {
var t = {
M: cc.MethodHubName.UNREGISTER_CHAT,
A: [ this.channelChatId ]
};
this.send(t);
};
t.prototype.sendRoomMessage = function(t) {
var e = {
M: cc.MethodHubName.SEND_MESSAGE,
A: [ t ]
};
this.send(e);
};
t.prototype.sendMessage = function(t) {
var e = {
M: cc.MethodHubName.SEND_MESSAGE,
A: [ t, this.channelChatId ]
};
this.send(e);
};
t.prototype.bet = function(t, e) {
var o = {
M: cc.MethodHubName.BET
};
switch (this.hubName) {
case cc.HubName.MonkeyHub:
o.A = [ t, cc.Config.getInstance().getDeviceType() ];
break;

case cc.HubName.XocXocHub:
case cc.HubName.BaccaratHub:
case cc.HubName.DragonTigerHub:
case cc.HubName.BauCuaHub:
case cc.HubName.TexasPokerHub:
o.A = [ t, e ];
break;

case cc.HubName.ThreeCardsHub:
o.A = [ t ];
break;

default:
o.A = [ t, e, cc.Config.getInstance().getDeviceType() ];
}
this.send(o);
};
t.prototype.lodeBet = function(t, e, o) {
var n = {
M: cc.MethodHubName.BET
};
n.A = [ t, e, o, cc.Config.getInstance().getDeviceType() ];
this.send(n);
};
t.prototype.vietlotBet = function(t, e, o) {
var n = {
M: cc.MethodHubName.BET
};
n.A = [ t, e, o ];
this.send(n);
};
t.prototype.cordInfo = function() {
var t = {
M: cc.MethodHubName.CORD_INFO
};
this.send(t);
};
t.prototype.registerLeaveRoom = function() {
var t = {
M: cc.MethodHubName.REGISTER_LEAVE_ROOM
};
this.send(t);
};
t.prototype.unRegisterLeaveRoom = function() {
var t = {
M: cc.MethodHubName.UNREGISTER_LEAVE_ROOM
};
this.send(t);
};
t.prototype.sellOwner = function(t) {
var e = {
M: cc.MethodHubName.SELL_OWNER,
A: [ t ]
};
this.send(e);
};
t.prototype.buyOwner = function() {
var t = {
M: cc.MethodHubName.BUY_OWNER
};
this.send(t);
};
t.prototype.betOther = function(t, e) {
var o = {
M: cc.MethodHubName.BET_OTHERS,
A: [ t, e ]
};
this.send(o);
};
t.prototype.acceptBet = function(t, e) {
var o = {
M: cc.MethodHubName.ACCEPT_BET,
A: [ t, e ]
};
this.send(o);
};
t.prototype.feedChicken = function() {
var t = {
M: cc.MethodHubName.FEED_CHICKEN
};
this.send(t);
};
t.prototype.flip = function() {
var t = {
M: cc.MethodHubName.FLIP
};
this.send(t);
};
t.prototype.danhBai = function(t) {
var e = {
M: cc.MethodHubName.DANH_BAI,
A: [ t ]
};
this.send(e);
};
t.prototype.boLuot = function() {
var t = {
M: cc.MethodHubName.BO_LUOT
};
this.send(t);
};
t.prototype.xepBai = function() {
var t = {
M: cc.MethodHubName.SORT_HAND_CARDS
};
this.send(t);
};
t.prototype.startGame = function() {
var t = {
M: cc.MethodHubName.START_GAME
};
this.send(t);
};
t.prototype.checkChi = function(t) {
var e = {
M: cc.MethodHubName.CHECK_CHI,
A: [ t ]
};
this.send(e);
};
t.prototype.finishGame = function(t) {
var e = {
M: cc.MethodHubName.FINISH_GAME,
A: [ t ]
};
this.send(e);
};
t.prototype.playNowCardGame = function(t, e, o) {
var n = {
M: cc.MethodHubName.PLAY_NOW,
A: [ t, 1, e, o, cc.ServerConnector.getInstance().getLatitude(), cc.ServerConnector.getInstance().getLongitude() ]
};
this.send(n);
};
t.prototype.buyIn = function(t, e, o) {
var n = {
M: cc.MethodHubName.BUY_IN,
A: [ t, 1, e, o ]
};
this.send(n);
};
t.prototype.registerAuto = function(t) {
var e = {
M: cc.MethodHubName.REGISTER_AUTO,
A: [ parseInt(t) ]
};
this.send(e);
};
t.prototype.flipCards = function() {
var t = {
M: cc.MethodHubName.FLIP_CARDS
};
this.send(t);
};
t.prototype.treasureGetCarrotUserInfo = function() {
var t = {
M: cc.MethodHubName.TREASURE_GET_CARROT_USER_INFO
};
this.send(t);
};
t.prototype.treasureUserGetTreasure = function() {
var t = {
M: cc.MethodHubName.TREASURE_CARROT_USER_GET_TREASURE
};
this.send(t);
};
t.prototype.treasureCarrotJumpCreateNextData = function(t) {
var e = {
M: cc.MethodHubName.TREASURE_CARROT_JUMP_CREATE_NEXT_DATA,
A: [ t ]
};
this.send(e);
};
t.prototype.treasureCarrotJumpSpinCreate = function(t) {
var e = {
M: cc.MethodHubName.TREASURE_CARROT_JUMP_SPIN_CREATE,
A: [ t ]
};
this.send(e);
};
t.prototype.treasureCarrotFightSpinCreate = function(t) {
var e = {
M: cc.MethodHubName.TREASURE_CARROT_FIGHT_SPIN_CREATE,
A: [ t ]
};
this.send(e);
};
t.prototype.pingPong = function() {
var t = {
M: cc.MethodHubName.PING_PONG
};
this.lastID = this.ID;
this.send(t);
this.isPingPong = !1;
};
t.prototype.getRecentID = function() {
return this.ID;
};
t.prototype.send = function(t) {
if (this.netControl) {
t.H = this.hubName;
t.I = this.ID;
this.ID++;
this.netControl.send(JSON.stringify(t));
}
};
t.prototype.onOpen = function() {
this.controller.onHubOpen();
cc.PopupController.getInstance().hideBusy();
var t = this;
t.pingPong();
this.interval = setInterval(function() {
t.checkPingPong();
}, 1e3 * o.PING_TIME);
};
t.prototype.onClose = function() {
this.controller.onHubClose();
this.interval && clearInterval(this.interval);
cc.PopupController.getInstance().hideBusy();
};
t.prototype.onError = function() {
this.controller.onHubError();
this.interval && clearInterval(this.interval);
cc.PopupController.getInstance().hideBusy();
};
t.prototype.onMessage = function(t) {
var e = JSON.parse(t.data);
this.controller.onHubMessage(e);
if (e.R < 0 && cc.LoginController.getInstance().getUserId() > 0) {
cc.PopupController.getInstance().hideBusy();
switch (e.R) {
case -10:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_10_INPUT_INVALID);
break;

case -11:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_11_LINES_INVALID);
break;

case -12:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_12_ROOM_NOT_EXIST);
break;

case -13:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_13_DEVICE_ID_NOT_EXIST);
break;

case -98:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_98_OTHER_DEVICE);
break;

case -99:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_99_EXCEPTION);
break;

case -211:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_211_ROOM_EXIST);
break;

case -214:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_214_ROOM_NOT_EXIST);
break;

case -231:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_231_PLAYER_NOT_IN_ROOM);
break;

case -232:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_232_TRANS_DATA_INVALID);
break;

case -233:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_233_ROOM_TYPE_NOT_EXIST);
break;

case -234:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_234_ROOM_OVER);
break;

case -235:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_235_ROOM_CANCELED);
break;

case -236:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_236_TOTAL_MONEY_NOT_EQUAL);
break;

case -504:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_504_NOT_ENOUGH_MONEY);
break;

case -999:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_999_UNDEFINED);
break;

case -1001:
cc.PopupController.getInstance().showPopupRequireLogin(cc.HubError.ERROR_1001_NOT_AUTHENTICATE);
break;

case -1002:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_1002_PLAYER_NULL);
break;

case -1003:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_1003_DUPLICATE_SPIN);
break;

case -1004:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_1004_BLOCK_SPIN);
break;

case -1005:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_1005_BLOCK_PLAY_NOW);
break;

case -1006:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_1006_PLAY_BONUS);
break;

case -1007:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_1007_PLAY_FREE_SPIN);
break;

case -1008:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_1008_PLAY_X2);
break;

case -600:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_600_SESSION_NOT_EXIST);
break;

case -601:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_601_MEGA_CODE_NOT_EXIST);
break;

case -602:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_602_SESSION_HAS_RESULT);
break;

case -603:
cc.PopupController.getInstance().showMessageError(cc.HubError.ERROR_603_SESSION_HAS_REWARD);
}
}
};
t.prototype.checkPingPong = function() {
this.isPingPong, this.pingPong();
};
t.prototype.pingPongResponse = function(t) {
this.lastID.toString() === t && (this.isPingPong = !0);
};
return t;
}();
cc.Hub = t;
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: "NetConfig"
} ],
LWConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "e081dPG/NZHsrvwlPRcYhfb", "LWConfig");
e.exports = {
TIME_COLUMN_NORMAL: .4,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .25,
TIME_CALL_STOP_FAST: .8,
TIME_SPIN_NORMAL: 2.5,
TIME_SPIN_FAST: .8,
TIME_EFFECT_MULTI: .5,
TIME_EFFECT_FOCUS: 1.2,
TIME_START_EFFECT_FOCUS: 1.7,
TIME_MONEY_EFFECT_JACKPOT: 3,
TIME_MONEY_EFFECT_BIG_WIN: 3,
TIME_MONEY_EFFECT_NORMAL_WIN: 2,
TIME_WAIT_LOST: .8,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1,
TIME_WAIT_LOST_FAST: .5,
TIME_TWEEN_MONEY_FAST: .5
};
cc._RF.pop();
}, {} ],
LabelIncrement: [ function(t, e) {
"use strict";
cc._RF.push(e, "f92cbvNs3pBuIDcZJI7cvrJ", "LabelIncrement");
(function() {
cc.LabelIncrement = cc.Class({
extends: cc.Component,
properties: {
label: cc.Label,
surfix: "",
duration: 1.5,
fromValue: 0,
toValue: 0,
range: 0,
sign: 0,
canRun: !1,
delta: 0
},
onLoad: function() {
this.label = this.node.getComponent(cc.Label);
this.duration >= 2.4 ? this.rootDuration = 3 : this.rootDuration = 1;
this.duration = 1;
this.durationNormal = 1.5;
this.durationAn = 2;
this.durationDam = 4;
this.durationKhung = 6;
this.durationAnHu = 8;
},
update: function(t) {
if (this.canRun) {
this.delta += t;
if (this.delta > this.duration) {
this.label.string = this.formatNumber(this.toValue) + this.surfix;
this.canRun = !1;
} else this.label.string = this.formatNumber(Math.round(this.fromValue + this.delta / this.duration * this.range * this.sign)) + this.surfix;
}
},
formatNumber: function(t) {
return cc.Tool.getInstance().formatNumberK(t);
},
tweenValueto: function(t, e) {
this.duration = e || this.rootDuration;
this.tweenValue(this.toValue, t, e);
},
tweenValueWithTime: function(t, e, o) {
this.duration = o;
this.startTween(t, e);
},
tweenValue: function(t, e, o) {
this.duration = o || this.rootDuration;
this.canRun = !1;
this.startTween(t, e);
},
startTween: function(t, e) {
this.fromValue = t;
this.toValue = e;
this.range = Math.abs(this.toValue - this.fromValue);
this.toValue >= this.fromValue ? this.sign = 1 : this.sign = -1;
this.delta = 0;
this.fromValue !== this.toValue ? this.canRun = !0 : this.canRun = !1;
if (!1 === this.canRun) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
}
},
setValue: function(t) {
this.canRun = !1;
this.fromValue = t;
this.toValue = t;
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
},
setValueText: function(t) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
LabelInr_TS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fb4a8INFCZAhKUTNuYpznRA", "LabelInr_TS");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LabelIncrement = void 0;
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.surfix = "";
e.duration = 1.5;
e.fromValue = 0;
e.toValue = 0;
e.range = 0;
e.sign = 0;
e.canRun = !1;
e.delta = 0;
e.rootDuration = 0;
e.durationNormal = 0;
e.durationAn = 0;
e.durationDam = 0;
e.durationKhung = 0;
e.durationAnHu = 0;
return e;
}
e.prototype.onLoad = function() {
this.label = this.node.getComponent(cc.Label);
this.duration >= 2.4 ? this.rootDuration = 3 : this.rootDuration = 1;
this.duration = 1;
this.durationNormal = 1.5;
this.durationAn = 2;
this.durationDam = 4;
this.durationKhung = 6;
this.durationAnHu = 8;
};
e.prototype.update = function(t) {
if (this.canRun) {
this.delta += t;
if (this.delta > this.duration) {
this.label.string = this.formatNumber(this.toValue) + this.surfix;
this.canRun = !1;
} else this.label.string = this.formatNumber(Math.round(this.fromValue + this.delta / this.duration * this.range * this.sign)) + this.surfix;
}
};
e.prototype.formatNumber = function(t) {
return cc.Tool.getInstance().formatNumber(t);
};
e.prototype.tweenValueto = function(t, e) {
this.duration = e || this.rootDuration;
this.tweenValue(this.toValue, t, e);
};
e.prototype.tweenValueWithTime = function(t, e, o) {
this.duration = o;
this.startTween(t, e);
};
e.prototype.tweenValue = function(t, e, o) {
this.duration = o || this.rootDuration;
this.canRun = !1;
this.startTween(t, e);
};
e.prototype.startTween = function(t, e) {
this.fromValue = t;
this.toValue = e;
this.range = Math.abs(this.toValue - this.fromValue);
this.toValue >= this.fromValue ? this.sign = 1 : this.sign = -1;
this.delta = 0;
this.fromValue !== this.toValue ? this.canRun = !0 : this.canRun = !1;
if (!1 === this.canRun) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
}
};
e.prototype.setValue = function(t) {
this.canRun = !1;
this.fromValue = t;
this.toValue = t;
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
};
e.prototype.setValueText = function(t) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = t;
};
r([ a(cc.Label) ], e.prototype, "label", void 0);
r([ a ], e.prototype, "surfix", void 0);
r([ a ], e.prototype, "duration", void 0);
r([ a ], e.prototype, "fromValue", void 0);
r([ a ], e.prototype, "toValue", void 0);
r([ a ], e.prototype, "range", void 0);
r([ a ], e.prototype, "sign", void 0);
r([ a ], e.prototype, "canRun", void 0);
r([ a ], e.prototype, "delta", void 0);
return r([ s ], e);
}(cc.Component);
o.LabelIncrement = u;
cc._RF.pop();
}, {} ],
ListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "8833fvTPGRGg4lA7Cp9Gy7M", "ListView");
(function() {
cc.ListView = cc.Class({
extends: cc.Component,
properties: {
itemTemplate: cc.Node,
scrollView: cc.ScrollView,
spawnCount: 0,
spacing: 0,
bufferZone: 0
},
onLoad: function() {
this.spawnCount = 15;
if (null !== this.scrollView) {
this.content = this.scrollView.content;
this.items = [];
this.updateTimer = 0;
this.updateInterval = .1;
this.lastContentPosY = 0;
this.rootContentY = this.content.y;
}
},
resetList: function() {
if (null !== this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
this.content = this.scrollView.content;
this.content.y = this.rootContentY;
for (var t = this.content.children, e = t.length - 1; e >= 0; e--) this.content.removeChild(t[e]);
}
},
getPositionInView: function(t) {
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollView.node.convertToNodeSpaceAR(e);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
LoadingController: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "824b5qOuCNEyohj4WNh5do8", "LoadingController");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./AlertDialog"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblStatus = null;
e.loadings = null;
e.alertDialog = null;
e._storagePath = "";
e._updating = !1;
e._failCount = 0;
e.sprProgressBar = null;
return e;
}
e.prototype.getCusomManifestStr = function() {
var t = Date.now();
return JSON.stringify({
packageUrl: Global.hotUpdateUrl,
remoteManifestUrl: Global.hotUpdateUrl + "project.manifest?t=" + t,
remoteVersionUrl: Global.hotUpdateUrl + "version.manifest?t=" + t,
version: "1.0.0"
});
};
e.prototype.start = function() {
for (var t = this, e = 0; e < this.loadings.childrenCount; e++) {
this.loadings.children[e].active = "BigClub" == this.loadings.children[e].name;
"BigClub" == this.loadings.children[e].name && (this.sprProgressBar = this.loadings.children[e].getChildByName("progressBar").getComponent(cc.Sprite));
}
this.sprProgressBar.fillRange = 0;
this.lblStatus.string = "";
this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote_assets";
if (jsb.fileUtils.isFileExist(this._storagePath + "/project.manifest")) cc.loader.load(this._storagePath + "/project.manifest", function(e, o) {
o = JSON.parse(o);
var n = Date.now();
if (o.hasOwnProperty("remoteVersionUrl")) {
var i = o.remoteVersionUrl.split("?t=");
o.remoteVersionUrl = i[0] + "?t=" + n;
}
if (o.hasOwnProperty("remoteManifestUrl")) {
var r = o.remoteManifestUrl.split("?t=");
o.remoteManifestUrl = r[0] + "?t=" + n;
}
jsb.fileUtils.writeStringToFile(JSON.stringify(o, null, "\t"), t._storagePath + "/project.manifest");
t.initAssetManager();
t.checkUpdate();
}); else {
this.initAssetManager();
this.checkUpdate();
}
};
e.prototype.initAssetManager = function() {
console.log("Storage path for remote asset : " + this._storagePath);
this.lblStatus.string = "Đang kiểm tra phiên bản mới...";
this.sprProgressBar.fillRange = 0;
this._am = new jsb.AssetsManager("", this._storagePath, function(t, e) {
console.log("JS Custom Version Compare: version A is " + t + ", version B is " + e);
for (var o = t.split("."), n = e.split("."), i = 0; i < o.length; ++i) {
var r = parseInt(o[i]), c = parseInt(n[i] || 0);
if (r !== c) return r - c;
}
return n.length > o.length ? -1 : 0;
});
};
e.prototype.checkUpdate = function() {
if (!this._updating) {
this._failCount = 0;
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = new jsb.Manifest(this.getCusomManifestStr(), this._storagePath);
this._am.loadLocalManifest(t, this._storagePath);
}
this._am.setEventCallback(this.checkCb.bind(this));
this._am.checkUpdate();
console.log("Start check update local: " + this._am.getLocalManifest().getVersionFileUrl());
console.log("Start check update remote: " + this._am.getRemoteManifest().getVersionFileUrl());
this._updating = !0;
}
};
e.prototype.checkCb = function(t) {
var e = this;
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
console.log("No local manifest file found, hot update skipped.");
this.lblStatus.string = "No local manifest file found, hot update skipped.";
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
console.log("Fail to download manifest file, hot update skipped.");
this.lblStatus.string = "Fail to download manifest file, hot update skipped.";
this.alreadyUpToDate();
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
console.log("Already up to date with the latest remote version.");
this.lblStatus.string = "Already up to date with the latest remote version.";
this.alreadyUpToDate();
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
console.log("New version found, please try to update.");
this.lblStatus.string = "New version found, please try to update.";
this.sprProgressBar.fillRange = 0;
this.alertDialog.show4("Đã có phiên bản mới vui lòng cập nhật.", "Cập nhật", function() {
console.log("click cap nhat");
e.startUpdate();
});
break;

default:
return;
}
this._am.setEventCallback(null);
this._updating = !1;
};
e.prototype.startUpdate = function() {
if (this._am && !this._updating) {
this._am.setEventCallback(this.updateCb.bind(this));
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = new jsb.Manifest(this.getCusomManifestStr(), this._storagePath);
this._am.loadLocalManifest(t, this._storagePath);
}
this._am.update();
this._updating = !0;
}
};
e.prototype.updateCb = function(t) {
var e = !1, o = !1;
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
console.log("No local manifest file found, hot update skipped.");
this.lblStatus.string = "No local manifest file found, hot update skipped.";
o = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
console.log("files: " + t.getDownloadedFiles() + " / " + t.getTotalFiles());
console.log("bytes: " + t.getTotalBytes() + " / " + t.getDownloadedBytes());
console.log("event.getPercent(): " + t.getPercent());
this.sprProgressBar.fillRange = t.getDownloadedFiles() / t.getTotalFiles();
this.lblStatus.string = "Đang tải dữ liệu..." + Math.round(t.getDownloadedFiles() / t.getTotalFiles() * 100) + "%";
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
console.log("Fail to download manifest file, hot update skipped.");
this.lblStatus.string = "Fail to download manifest file, hot update skipped.";
o = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
console.log("Already up to date with the latest remote version.");
this.lblStatus.string = "Already up to date with the latest remote version.";
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
console.log("Update finished. " + t.getMessage());
e = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
console.log("Update failed. " + t.getMessage());
if (this._failCount < 5) {
cc.sys.localStorage.setItem("HotUpdated", "false");
this._am.downloadFailedAssets();
} else {
this._updating = !1;
o = !0;
}
this._failCount++;
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
console.log("Asset update error: " + t.getAssetId() + ", " + t.getMessage());
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
this.alertDialog.showMsg("Decompress error: " + t.getMessage());
}
if (o) {
this._am.setEventCallback(null);
this._updating = !1;
this.alertDialog.show4("Tải xuống không thành công, vui lòng thử lại sau.", "Thử lại", function() {
cc.game.restart();
});
}
if (e && !o) {
this._am.setEventCallback(null);
var n = jsb.fileUtils.getSearchPaths(), i = this._am.getLocalManifest().getSearchPaths();
console.log("manifest paths: " + JSON.stringify(i));
for (var r = 0; r < i.length; r++) -1 == n.indexOf(i[r]) && n.push(i[r]);
console.log("new paths: " + JSON.stringify(i));
cc.sys.localStorage.setItem("HotUpdated", "true");
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(n));
jsb.fileUtils.setSearchPaths(n);
cc.game.restart();
}
};
e.prototype.alreadyUpToDate = function() {
var t = this;
this.lblStatus.string = cc.sys.isNative ? "Đang chuẩn bị tài nguyên (Không tốn dữ liệu)...0%" : "Đang tải...0%";
cc.director.preloadScene("MainScene", function(e, o) {
t.lblStatus.string = (cc.sys.isNative ? "Đang chuẩn bị tài nguyên (Không tốn dữ liệu)..." : "Đang tải...") + Math.round(e / o * 100) + "%";
t.sprProgressBar.fillRange = e / o;
}, function() {
cc.director.loadScene("MainScene");
});
};
r([ u(cc.Label) ], e.prototype, "lblStatus", void 0);
r([ u(cc.Node) ], e.prototype, "loadings", void 0);
r([ u(c.default) ], e.prototype, "alertDialog", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./AlertDialog": "AlertDialog"
} ],
LobbyController: [ function(t, e) {
"use strict";
cc._RF.push(e, "09232GQKS1C4JveDKK3kJ5w", "LobbyController");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && ((t = this).prototype.isLobbyActive = !0);
return t.prototype;
};
e.prototype.setLobbyView = function(t) {
return this.lobbyView = t;
};
e.prototype.setTopBarView = function(t) {
return this.topBarView = t;
};
e.prototype.setBottomBarView = function(t) {
return this.bottomBarView = t;
};
e.prototype.setSettingView = function(t) {
return this.settingView = t;
};
e.prototype.setLobbyEffectView = function(t) {
return this.lobbyEffectView = t;
};
e.prototype.setGameAssets = function(t) {
return this.gameAssets = t;
};
e.prototype.getGameAssets = function() {
return this.gameAssets;
};
e.prototype.showFxWinJackpot = function(t) {
return this.lobbyEffectView.showFxWinJackpot(t);
};
e.prototype.openSetting = function() {
return this.settingView.openSetting();
};
e.prototype.closeSetting = function() {
return this.settingView.closeSetting();
};
e.prototype.showPopupLogout = function() {
return this.settingView.showPopupLogout();
};
e.prototype.joinGame = function(t) {
return this.lobbyView.joinGame(t);
};
e.prototype.createX2PopupView = function() {
return this.lobbyView.createX2PopupView();
};
e.prototype.destroyX2PopupView = function() {
return this.lobbyView.destroyX2PopupView();
};
e.prototype.createX2RewardView = function(t) {
cc.Tool.getInstance().setItem("@startTabX2", t);
return this.lobbyView.createX2RewardView();
};
e.prototype.destroyX2RewardView = function() {
return this.lobbyView.destroyX2RewardView();
};
e.prototype.createTreasureView = function() {
return this.lobbyView.createTreasureView();
};
e.prototype.destroyTreasureView = function() {
return this.lobbyView.destroyTreasureView();
};
e.prototype.createBuyCarrotView = function() {
return this.lobbyView.createBuyCarrotView();
};
e.prototype.destroyBuyCarrotView = function() {
return this.lobbyView.destroyBuyCarrotView();
};
e.prototype.createTreasureGiftView = function() {
return this.lobbyView.createTreasureGiftView();
};
e.prototype.destroyTreasureGiftView = function() {
return this.lobbyView.destroyTreasureGiftView();
};
e.prototype.createCarrotDailyBonusView = function() {
return this.lobbyView.createCarrotDailyBonusView();
};
e.prototype.destroyCarrotDailyBonusView = function() {
return this.lobbyView.destroyCarrotDailyBonusView();
};
e.prototype.createTreasureRuleView = function() {
return this.lobbyView.createTreasureRuleView();
};
e.prototype.destroyTreasureRuleView = function() {
return this.lobbyView.destroyTreasureRuleView();
};
e.prototype.createTreasureTopView = function() {
return this.lobbyView.createTreasureTopView();
};
e.prototype.destroyTreasureTopView = function() {
return this.lobbyView.destroyTreasureTopView();
};
e.prototype.createFxSummonDragon = function() {
return this.lobbyView.createFxSummonDragon();
};
e.prototype.destroyFxSummonDragon = function() {
return this.lobbyView.destroyFxSummonDragon();
};
e.prototype.createLoginView = function() {
return this.lobbyView.createLoginView();
};
e.prototype.destroyLoginView = function() {
return this.lobbyView.destroyLoginView();
};
e.prototype.createVQMMView = function() {
return this.lobbyView.createVQMMView();
};
e.prototype.destroyVQMMView = function() {
return this.lobbyView.destroyVQMMView();
};
e.prototype.createAccountView = function(t) {
cc.Tool.getInstance().setItem("@startTab", t);
return this.lobbyView.createAccountView();
};
e.prototype.destroyAccountView = function() {
return this.lobbyView.destroyAccountView();
};
e.prototype.createSecurityView = function(t) {
cc.Tool.getInstance().setItem("@startTabSecurity", t);
return this.lobbyView.createSecurityView();
};
e.prototype.destroySecurityView = function() {
return this.lobbyView.destroySecurityView();
};
e.prototype.createPopupUpdateUserPassView = function() {
return this.lobbyView.createPopupUpdateUserPassView();
};
e.prototype.destroyPopupUpdateUserPassView = function() {
return this.lobbyView.destroyPopupUpdateUserPassView();
};
e.prototype.destroyShopTopupView = function() {
return this.lobbyView.destroyShopTopupView();
};
e.prototype.createShopView = function(t) {
cc.Tool.getInstance().setItem("@startShopTab", t);
return t === cc.ShopTab.TOPUP || t === cc.ShopTab.BANK || t === cc.ShopTab.LOAN || t === cc.ShopTab.MOMO || t === cc.ShopTab.TRANSFER || t === cc.ShopTab.REDEEM_REWARD ? this.lobbyView.createShopTopupView() : this.lobbyView.createShopView();
};
e.prototype.destroyShopView = function() {
return this.lobbyView.destroyShopView();
};
e.prototype.createHistoryView = function(t) {
cc.Tool.getInstance().setItem("@startHistoryTab", t);
return this.lobbyView.createHistoryView();
};
e.prototype.destroyHistoryView = function() {
return this.lobbyView.destroyHistoryView();
};
e.prototype.createGiftcodeView = function() {
return this.lobbyView.createGiftcodeView();
};
e.prototype.createEventView = function() {
return this.lobbyView.createEventView();
};
e.prototype.createEventViewTopVP = function() {
return this.lobbyView.createEventViewTopVP();
};
e.prototype.createAppSafeHelpView = function() {
return this.lobbyView.createAppSafeHelpView();
};
e.prototype.createDNSHelpView = function() {
return this.lobbyView.createDNSHelpView();
};
e.prototype.createUpdateAccountView = function() {
return this.lobbyView.createUpdateAccountView();
};
e.prototype.createMoveBBView = function() {
return this.lobbyView.createMoveBBView();
};
e.prototype.destroyMoveBBView = function() {
return this.lobbyView.destroyMoveBBView();
};
e.prototype.createDynamicView = function(t) {
return this.lobbyView.createDynamicView(t);
};
e.prototype.destroyDynamicView = function(t) {
return this.lobbyView.destroyDynamicView(t);
};
e.prototype.destroyAllMiniGameView = function() {
return this.lobbyView.destroyAllMiniGameView();
};
e.prototype.createEventPopupView = function() {
return this.lobbyView.createEventPopupView();
};
e.prototype.destroyEventPopupView = function() {
return this.lobbyView.destroyEventPopupView();
};
e.prototype.loginSuccess = function() {
return this.lobbyView.loginSuccess();
};
e.prototype.refreshAccountInfo = function() {
return this.lobbyView.refreshAccountInfo();
};
e.prototype.activeNodeLobby = function(t) {
return this.lobbyView.activeNodeLobby(t);
};
e.prototype.activeNodeTopBar = function(t) {
return this.lobbyView.activeNodeTopBar(t);
};
e.prototype.setLobbyActive = function(t) {
return this.isLobbyActive = t;
};
e.prototype.setBBOffCheckData = function(t) {
return this.bbOffCheckData = t;
};
e.prototype.getBBOffCheckData = function() {
return this.bbOffCheckData;
};
e.prototype.checkLobbyActive = function() {
return this.bbOffCheckData;
};
e.prototype.topBarUpdateInfo = function() {
return this.topBarView.topBarUpdateInfo();
};
e.prototype.refreshAvatar = function() {
return this.topBarView.refreshAvatar();
};
e.prototype.updateUILogin = function(t) {
return this.topBarView.updateUILogin(t);
};
e.prototype.resetTopBar = function() {
return this.topBarView.resetTopBar();
};
e.prototype.getMailUnRead = function() {
return this.topBarView.getMailUnRead();
};
e.prototype.setIsOnAudioBg = function() {
return this.lobbyView.setIsAudioBg();
};
e.prototype.showRegisterView = function() {
return this.topBarView.registerClicked();
};
return e;
}();
cc.LobbyController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
LobbyView: [ function(t, e) {
"use strict";
cc._RF.push(e, "bc955hfMctLeKDXEocDXUyO", "LobbyView");
var o = t("NetConfig");
(function() {
cc.LobbyView = cc.Class({
extends: cc.Component,
properties: {
prefabLoginViewKV: cc.Prefab,
prefabLoginView: cc.Prefab,
prefabAccountView: cc.Prefab,
prefabSecurityView: cc.Prefab,
prefabShopView: cc.Prefab,
prefabShopViewBank: cc.Prefab,
prefabShopViewKV: cc.Prefab,
prefabShopTopupView: cc.Prefab,
prefabShopTopupViewBank: cc.Prefab,
prefabHistoryView: cc.Prefab,
prefabHistoryViewBank: cc.Prefab,
prefabHistoryViewKV: cc.Prefab,
prefabPopupUpdateUserPass: cc.Prefab,
prefabGiftcode: cc.Prefab,
prefabEvent: cc.Prefab,
prefabVQMM: cc.Prefab,
prefabAppSafeHelp: cc.Prefab,
prefabDNSHelp: cc.Prefab,
prefabUpdateAccount: cc.Prefab,
prefabMoveBB: cc.Prefab,
prefabBlockBB: cc.Prefab,
prefabTreasure: cc.Prefab,
prefabCarrotDailyBonus: cc.Prefab,
prefabBuyCarrot: cc.Prefab,
prefabTreasureGift: cc.Prefab,
prefabTreasureRule: cc.Prefab,
prefabTreasureTop: cc.Prefab,
prefabX2Popup: cc.Prefab,
prefabX2Reward: cc.Prefab,
prefabFxSummonDragon: cc.Prefab,
prefabEventPopup: cc.Prefab,
prefabEventVNPopup: cc.Prefab,
lbLoadingEgypt: cc.Label,
lbLoadingTK: cc.Label,
lbLoadingAquarium: cc.Label,
lbLoadingDragonBall: cc.Label,
lbLoadingBumBum: cc.Label,
lbLoadingCowboy: cc.Label,
lbLoadingMonkey: cc.Label,
lbLoadingDragonTiger: cc.Label,
lbLoadingXocXoc: cc.Label,
lbLoadingBauCua: cc.Label,
lbLoadingLoDe: cc.Label,
lbLoadingTaiXiu: cc.Label,
lbLoadingMiniPoker: cc.Label,
lbLoading777: cc.Label,
lbLoadingTQ: cc.Label,
lbLoadingLuckyWild: cc.Label,
lbLoadingPoker: cc.Label,
lbLoadingThreeCards: cc.Label,
lbLoadingTLMN: cc.Label,
lbLoadingTLMNSolo: cc.Label,
lbLoadingMB: cc.Label,
lbLoadingBaccarat: cc.Label,
lbLoadingVietlot: cc.Label,
lbLoadingShootFish: cc.Label,
nodeLobbys: [ cc.Node ],
nodeTopBar: cc.Node,
nodeSetting: cc.Node,
audioBg: cc.AudioSource,
toggleAudio: cc.Toggle,
lbTopVp: cc.Label,
prefabEventTop: cc.Prefab,
nodeEventTop: cc.Node
},
onLoad: function() {
cc.LobbyController.getInstance().setLobbyView(this);
this.nodeTaiXiu = null;
this.nodeMiniPoker = null;
this.node777 = null;
this.nodeTQ = null;
this.nodeLW = null;
this.nodeSlotsView = null;
this.nodeVQMMView = null;
var t = cc.Tool.getInstance();
null !== t.getItem("@onAudioBg") ? "true" === t.getItem("@onAudioBg") ? this.IsOnAudioBg = !0 : this.IsOnAudioBg = !1 : this.IsOnAudioBg = !0;
this.toggleAudio.isChecked = this.IsOnAudioBg;
},
onEnable: function() {
this.IsOnAudioBg ? this.audioBg.play() : this.audioBg.stop();
this.lbTopVp.string = cc.Tool.getInstance().formatNumber(cc.LoginController.getInstance().getTopVPResponse());
if (!cc.LoginController.getInstance().getLoginState()) {
var t = cc.Tool.getInstance();
null !== t.getItem("@isLanding") && "true" === t.getItem("@isLanding") && cc.LobbyController.getInstance().showRegisterView();
}
},
createX2PopupView: function() {
this.nodeX2Popup = this.createView(this.prefabX2Popup);
},
destroyX2PopupView: function() {
this.nodeX2Popup && this.nodeX2Popup.destroy();
},
createX2RewardView: function() {
this.nodeX2Reward = this.createView(this.prefabX2Reward);
},
destroyX2RewardView: function() {
this.nodeX2Reward && this.nodeX2Reward.destroy();
},
createEventPopupView: function() {
cc.Config.getInstance().getDomainVK().includes(o.HOST) ? this.nodeEventPopup = this.createView(this.prefabEventPopup) : this.nodeEventPopup = this.createView(this.prefabEventVNPopup);
},
destroyEventPopupView: function() {
this.nodeEventPopup && this.nodeEventPopup.destroy();
},
createTreasureView: function() {
this.nodeTreasureView = this.createView(this.prefabTreasure);
},
destroyTreasureView: function() {
this.nodeTreasureView && this.nodeTreasureView.destroy();
},
createBuyCarrotView: function() {
this.nodeBuyCarrotView = this.createView(this.prefabBuyCarrot);
},
destroyBuyCarrotView: function() {
this.nodeBuyCarrotView && this.nodeBuyCarrotView.destroy();
},
createTreasureGiftView: function() {
this.nodeTreasureGiftView = this.createView(this.prefabTreasureGift);
},
destroyTreasureGiftView: function() {
this.nodeTreasureGiftView && this.nodeTreasureGiftView.destroy();
},
createCarrotDailyBonusView: function() {
this.nodeCarrotDailyBonusView = this.createView(this.prefabCarrotDailyBonus);
},
destroyCarrotDailyBonusView: function() {
this.nodeCarrotDailyBonusView && this.nodeCarrotDailyBonusView.destroy();
},
createTreasureRuleView: function() {
this.nodeTreasureRuleView = this.createView(this.prefabTreasureRule);
},
destroyTreasureRuleView: function() {
this.nodeTreasureRuleView && this.nodeTreasureRuleView.destroy();
},
createTreasureTopView: function() {
this.nodeTreasureTopView = this.createView(this.prefabTreasureTop);
},
destroyTreasureTopView: function() {
this.nodeTreasureTopView && this.nodeTreasureTopView.destroy();
},
createFxSummonDragon: function() {
this.nodeFxSummonDragon = this.createView(this.prefabFxSummonDragon);
},
destroyFxSummonDragon: function() {
this.nodeFxSummonDragon && this.nodeFxSummonDragon.destroy();
},
createLoginView: function() {
cc.Config.getInstance().getDomainVK().includes(o.HOST) ? this.nodeLoginView = this.createView(this.prefabLoginViewKV) : this.nodeLoginView = this.createView(this.prefabLoginView);
},
destroyLoginView: function() {
this.nodeLoginView && this.nodeLoginView.destroy();
},
createVQMMView: function() {
null === this.nodeVQMMView && (this.nodeVQMMView = this.createView(this.prefabVQMM));
},
destroyVQMMView: function() {
if (this.nodeVQMMView) {
this.nodeVQMMView.destroy();
this.nodeVQMMView = null;
}
},
createHistoryView: function() {
cc.Config.getInstance().getDomainVK().includes(o.HOST) ? this.nodeHistoryView = this.createView(this.prefabHistoryViewKV) : this.nodeHistoryView = this.createView(this.prefabHistoryViewBank);
},
destroyHistoryView: function() {
this.nodeHistoryView && this.nodeHistoryView.destroy();
},
createAccountView: function() {
this.nodeAccountView = this.createView(this.prefabAccountView);
},
destroyAccountView: function() {
cc.LobbyController.getInstance().refreshAccountInfo();
this.nodeAccountView && this.nodeAccountView.destroy();
},
createSecurityView: function() {
this.nodeSecurityView = this.createView(this.prefabSecurityView);
},
destroySecurityView: function() {
cc.LobbyController.getInstance().refreshAccountInfo();
this.nodeSecurityView && this.nodeSecurityView.destroy();
},
createPopupUpdateUserPassView: function() {
this.nodePopupUpdateUserPass = this.createView(this.prefabPopupUpdateUserPass);
},
destroyPopupUpdateUserPassView: function() {
cc.LobbyController.getInstance().refreshAccountInfo();
this.nodePopupUpdateUserPass && this.nodePopupUpdateUserPass.destroy();
},
createShopTopupView: function() {
this.nodeShopTopupView = this.createView(this.prefabShopTopupViewBank);
},
destroyShopTopupView: function() {
cc.LobbyController.getInstance().refreshAccountInfo();
this.nodeShopTopupView && this.nodeShopTopupView.destroy();
},
createShopView: function() {
cc.Config.getInstance().getDomainVK().includes(o.HOST) ? this.nodeShopView = this.createView(this.prefabShopViewKV) : cc.Config.getInstance().getServiceId() === cc.ServiceId.BLOCK_BUSTER_3 ? this.nodeShopView = this.createView(this.prefabShopViewBank) : this.nodeShopView = this.createView(this.prefabShopView);
},
destroyShopView: function() {
cc.LobbyController.getInstance().refreshAccountInfo();
this.nodeShopView && this.nodeShopView.destroy();
},
createGiftcodeView: function() {
this.nodeGiftcodeView = this.createView(this.prefabGiftcode);
},
destroyGiftcodeView: function() {
this.nodeGiftcodeView && this.nodeGiftcodeView.destroy();
},
createEventView: function() {
this.nodeEventView = this.createView(this.prefabEvent);
},
createEventViewTopVP: function() {
this.nodeEventViewTopVP = this.createView(this.prefabEventTop);
},
createAppSafeHelpView: function() {
this.createView(this.prefabAppSafeHelp);
},
createDNSHelpView: function() {
this.createView(this.prefabDNSHelp);
},
createUpdateAccountView: function() {
this.createView(this.prefabUpdateAccount);
},
createMoveBBView: function() {
this.createView(this.prefabMoveBB);
},
destroyMoveBBView: function() {
this.prefabMoveBB && this.prefabMoveBB.destroy();
},
createBlockBBView: function() {
this.createView(this.prefabBlockBB);
},
createDynamicView: function(t) {
switch (t) {
case cc.GameId.SHOOT_FISH:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingShootFish.node.parent.active = !0;
var e = 0;
cc.loader.loadRes("shootFish/prefabs/ShootFish", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingShootFish.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingShootFish.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.EGYPT:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingEgypt.node.parent.active = !0;
e = 0;
cc.loader.loadRes("egypt/prefabs/egyptView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingEgypt.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingEgypt.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.THREE_KINGDOM:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingTK.node.parent.active = !0;
e = 0;
cc.loader.loadRes("tk/prefabs/tkView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingTK.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingTK.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.BUM_BUM:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingBumBum.node.parent.active = !0;
e = 0;
cc.loader.loadRes("bumbum/prefabs/bbView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingBumBum.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingBumBum.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.AQUARIUM:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingAquarium.node.parent.active = !0;
e = 0;
cc.loader.loadRes("aquarium/prefabs/aquariumView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingAquarium.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingAquarium.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.DRAGON_BALL:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingDragonBall.node.parent.active = !0;
e = 0;
cc.loader.loadRes("dragonball/prefabs/dbView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingDragonBall.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingDragonBall.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.COWBOY:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingCowboy.node.parent.active = !0;
e = 0;
cc.loader.loadRes("cowboy/prefabs/cbView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingCowboy.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingCowboy.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.MONKEY:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingMonkey.node.parent.active = !0;
e = 0;
cc.loader.loadRes("monkey/prefabs/monkeyView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingMonkey.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingMonkey.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.DRAGON_TIGER:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingDragonTiger.node.parent.active = !0;
e = 0;
cc.loader.loadRes("dragontiger/prefabs/dragonTigerView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingDragonTiger.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingDragonTiger.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.XOC_XOC:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingXocXoc.node.parent.active = !0;
e = 0;
cc.loader.loadRes("xocxoc/prefabs/xocxocView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingXocXoc.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingXocXoc.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.TAI_XIU:
if (null !== this.nodeTaiXiu) return;
this.isLoading = !0;
(o = this).lbLoadingTaiXiu.node.parent.active = !0;
e = 0;
cc.loader.loadRes("taixiu/prefabs/taixiuView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingTaiXiu.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingTaiXiu.node.parent.active = !1;
o.nodeTaiXiu = o.createView(e);
});
break;

case cc.GameId.MINI_POKER:
if (null !== this.nodeMiniPoker) return;
this.isLoading = !0;
(o = this).lbLoadingMiniPoker.node.parent.active = !0;
e = 0;
cc.loader.loadRes("minipoker/prefabs/minipokerView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingMiniPoker.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingMiniPoker.node.parent.active = !1;
o.nodeMiniPoker = o.createView(e);
});
break;

case cc.GameId.SEVEN77:
if (null !== this.node777) return;
this.isLoading = !0;
(o = this).lbLoading777.node.parent.active = !0;
e = 0;
cc.loader.loadRes("777/prefabs/777View", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoading777.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoading777.node.parent.active = !1;
o.node777 = o.createView(e);
});
break;

case cc.GameId.BLOCK_BUSTER:
if (null !== this.nodeTQ) return;
this.isLoading = !0;
(o = this).lbLoadingTQ.node.parent.active = !0;
e = 0;
cc.loader.loadRes("tq/prefabs/tqView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingTQ.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingTQ.node.parent.active = !1;
o.nodeTQ = o.createView(e);
});
break;

case cc.GameId.LUCKY_WILD:
if (null !== this.nodeLW) return;
this.isLoading = !0;
(o = this).lbLoadingLuckyWild.node.parent.active = !0;
e = 0;
cc.loader.loadRes("luckyWild/prefabs/lwView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingLuckyWild.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingLuckyWild.node.parent.active = !1;
o.nodeLW = o.createView(e);
});
break;

case cc.GameId.POKER_TEXAS:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingPoker.node.parent.active = !0;
e = 0;
cc.loader.loadRes("poker/prefabs/pokerView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingPoker.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingPoker.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
o.activeNodeTopBar(!0);
});
break;

case cc.GameId.BA_CAY:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingThreeCards.node.parent.active = !0;
e = 0;
cc.loader.loadRes("3cay/prefabs/3CLobby", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingThreeCards.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingThreeCards.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
o.activeNodeTopBar(!0);
});
break;

case cc.GameId.TIEN_LEN_MN:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingTLMN.node.parent.active = !0;
e = 0;
cc.loader.loadRes("tienlenMN/prefabs/TLMNLobby", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingTLMN.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingTLMN.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
o.activeNodeTopBar(!0);
});
break;

case cc.GameId.TIEN_LEN_MN_SOLO:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingTLMNSolo.node.parent.active = !0;
e = 0;
cc.loader.loadRes("tienlenMNSoLo/prefabs/TLMNSoLoLobby", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingTLMNSolo.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingTLMNSolo.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
o.activeNodeTopBar(!0);
});
break;

case cc.GameId.MAU_BINH:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingMB.node.parent.active = !0;
e = 0;
cc.loader.loadRes("maubinh/prefabs/MBLobby", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingMB.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingMB.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
o.activeNodeTopBar(!0);
});
break;

case cc.GameId.BACCARAT:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingBaccarat.node.parent.active = !0;
e = 0;
cc.loader.loadRes("bacarat/prefabs/BaCaratView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingBaccarat.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingBaccarat.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.BAUCUA:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingBauCua.node.parent.active = !0;
e = 0;
cc.loader.loadRes("baucua/prefabs/BauCuaView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingBauCua.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingBauCua.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
break;

case cc.GameId.LODE:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
(o = this).lbLoadingLoDe.node.parent.active = !0;
e = 0;
cc.loader.loadRes("lode/prefabs/LoDeLobby", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingLoDe.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingLoDe.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
o.activeNodeTopBar(!0);
});
break;

case cc.GameId.VIETLOT:
if (null !== this.nodeSlotsView) return;
cc.RoomController.getInstance().setGameId(t);
this.isLoading = !0;
var o;
(o = this).lbLoadingVietlot.node.parent.active = !0;
e = 0;
cc.loader.loadRes("vietlot/prefabs/VietlotView", function(t, n) {
var i = Math.round(100 * t / n);
i > e && (e = i);
o.lbLoadingVietlot.string = e + "%";
}, function(t, e) {
o.isLoading = !1;
o.lbLoadingVietlot.node.parent.active = !1;
o.nodeSlotsView = o.createView(e);
o.activeNodeLobby(!1);
});
}
},
destroyDynamicView: function(t) {
switch (t) {
case cc.GameId.EVENT_TREASURE:
if (this.nodeTreasureView) {
this.nodeTreasureView.destroy();
this.nodeTreasureView = null;
}
if (this.nodeTreasureGiftView) {
this.nodeTreasureGiftView.destroy();
this.nodeTreasureGiftView = null;
}
if (this.nodeBuyCarrotView) {
this.nodeBuyCarrotView.destroy();
this.nodeBuyCarrotView = null;
}
break;

case cc.GameId.TAI_XIU:
if (this.nodeTaiXiu) {
this.nodeTaiXiu.destroy();
this.nodeTaiXiu = null;
}
break;

case cc.GameId.MINI_POKER:
if (this.nodeMiniPoker) {
this.nodeMiniPoker.destroy();
this.nodeMiniPoker = null;
}
break;

case cc.GameId.SEVEN77:
if (this.node777) {
this.node777.destroy();
this.node777 = null;
}
break;

case cc.GameId.BLOCK_BUSTER:
if (this.nodeTQ) {
this.nodeTQ.destroy();
this.nodeTQ = null;
}
break;

case cc.GameId.LUCKY_WILD:
if (this.nodeLW) {
this.nodeLW.destroy();
this.nodeLW = null;
}
break;

default:
this.activeNodeTopBar(!1);
this.activeNodeLobby(!0);
if (this.nodeSlotsView) {
this.nodeSlotsView.destroy();
this.nodeSlotsView = null;
}
if (this.nodeEventView) {
this.nodeEventView.destroy();
this.nodeEventView = null;
}
if (this.nodeEventViewTopVP) {
this.nodeEventViewTopVP.destroy();
this.nodeEventViewTopVP = null;
}
}
cc.LobbyController.getInstance().refreshAccountInfo();
},
destroyAllMiniGameView: function() {
this.destroyDynamicView(cc.GameId.TAI_XIU);
this.destroyDynamicView(cc.GameId.MINI_POKER);
this.destroyDynamicView(cc.GameId.SEVEN77);
this.destroyDynamicView(cc.GameId.BLOCK_BUSTER);
this.destroyDynamicView(cc.GameId.LUCKY_WILD);
this.destroyDynamicView(null);
},
createView: function(t, e) {
var o = cc.instantiate(t);
o.parent = this.node;
e ? o.setPosition(0, e) : o.setPosition(0, 0);
return o;
},
loginSuccess: function() {
cc.OneSignalController.getInstance().sendTag("AccountID", cc.LoginController.getInstance().getUserId());
cc.OneSignalController.getInstance().sendTag("AccountName", cc.LoginController.getInstance().getNickname());
cc.LoginController.getInstance().setLoginState(!0);
cc.LobbyController.getInstance().updateUILogin(!1);
cc.GameController.getInstance().portalNegotiate();
cc.LobbyController.getInstance().topBarUpdateInfo();
cc.LobbyController.getInstance().getMailUnRead();
cc.LoginController.getInstance().getLoginResponse();
if (!cc.DomainController.getInstance().checkErrorDomain()) {
this.checkVQMMInfo();
cc.DDNA.getInstance().clientDevice();
cc.DDNA.getInstance().gameStarted();
new cc.GetChargeDefaultCommand().execute(this);
}
cc.LoginController.getInstance().checkLogin() ? this.lbTopVp.string = cc.Tool.getInstance().formatNumber(cc.LoginController.getInstance().getTopVPResponse()) : this.lbTopVp.string = "0";
},
checkHaveDailyBonus: function() {
new cc.TreasureGetCarrotNameKnownCommand().execute(this);
},
onTreasureGetCarrotNameKnownResponse: function(t) {
null !== t && cc.TreasureController.getInstance().setIsDailyBonus(t.IsInDay);
null === t || t.IsInDay || cc.LobbyController.getInstance().createCarrotDailyBonusView();
},
joinGame: function(t) {
if (cc.LoginController.getInstance().checkLogin()) {
if (this.isLoading) return;
if (void 0 === t) {
cc.PopupController.getInstance().showMessage("Sắp ra mắt!");
return;
}
switch (t.toString()) {
case cc.GameId.SHOOT_FISH:
this.createDynamicView(cc.GameId.SHOOT_FISH);
break;

case cc.GameId.EGYPT:
this.createDynamicView(cc.GameId.EGYPT);
break;

case cc.GameId.THREE_KINGDOM:
this.createDynamicView(cc.GameId.THREE_KINGDOM);
break;

case cc.GameId.AQUARIUM:
this.createDynamicView(cc.GameId.AQUARIUM);
break;

case cc.GameId.DRAGON_BALL:
this.createDynamicView(cc.GameId.DRAGON_BALL);
break;

case cc.GameId.BUM_BUM:
this.createDynamicView(cc.GameId.BUM_BUM);
break;

case cc.GameId.COWBOY:
this.createDynamicView(cc.GameId.COWBOY);
break;

case cc.GameId.THUONG_HAI:
this.createDynamicView(cc.GameId.THUONG_HAI);
break;

case cc.GameId.GAINHAY:
this.createDynamicView(cc.GameId.GAINHAY);
break;

case cc.GameId.BACCARAT:
this.createDynamicView(cc.GameId.BACCARAT);
break;

case cc.GameId.MONKEY:
this.createDynamicView(cc.GameId.MONKEY);
break;

case cc.GameId.DRAGON_TIGER:
this.createDynamicView(cc.GameId.DRAGON_TIGER);
break;

case cc.GameId.BAUCUA:
this.createDynamicView(cc.GameId.BAUCUA);
break;

case cc.GameId.XOC_XOC:
this.createDynamicView(cc.GameId.XOC_XOC);
break;

case cc.GameId.POKER_TEXAS:
case cc.GameId.BA_CAY:
case cc.GameId.TIEN_LEN_MN:
case cc.GameId.TIEN_LEN_MN_SOLO:
if (cc.BalanceController.getInstance().getBalance() < 1e4) {
cc.PopupController.getInstance().showMessage("Bạn không đủ tiền để vào phòng. Tối thiểu cần 10.000");
return;
}
this.createDynamicView(t.toString());
break;

case cc.GameId.MAU_BINH:
if (cc.BalanceController.getInstance().getBalance() < 3e4) {
cc.PopupController.getInstance().showMessage("Bạn không đủ tiền để vào phòng. Tối thiểu cần 30.000");
return;
}
this.createDynamicView(t.toString());
break;

case cc.GameId.TAI_XIU:
this.createDynamicView(cc.GameId.TAI_XIU);
break;

case cc.GameId.MINI_POKER:
this.createDynamicView(cc.GameId.MINI_POKER);
break;

case cc.GameId.SEVEN77:
this.createDynamicView(cc.GameId.SEVEN77);
break;

case cc.GameId.BLOCK_BUSTER:
this.createDynamicView(cc.GameId.BLOCK_BUSTER);
break;

case cc.GameId.LUCKY_WILD:
this.createDynamicView(cc.GameId.LUCKY_WILD);
break;

case cc.GameId.LODE:
this.createDynamicView(cc.GameId.LODE);
break;

case cc.GameId.VIETLOT:
this.createDynamicView(cc.GameId.VIETLOT);
break;

case "100":
case "101":
cc.PopupController.getInstance().showMessage("Sắp ra mắt");
}
}
},
refreshAccountInfo: function() {
new cc.GetAccountInfoCommand().execute(this);
},
activeNodeLobby: function(t) {
if (t) {
this.activeNodeTopBar(!1);
this.playAudioBg();
} else this.audioBg.stop();
this.nodeEventTop.active = t;
this.nodeLobbys.forEach(function(e) {
e.active = t;
});
cc.LobbyController.getInstance().setLobbyActive(t);
},
activeNodeTopBar: function(t) {
this.nodeTopBar.active = t;
this.nodeSetting.active = t;
this.nodeTopBar.getComponent(cc.TopBarView).isCardGame = t;
if (t) {
this.nodeTopBar.zIndex = cc.NoteDepth.TOP_BAR_CARD_GAME;
this.refreshAccountInfo();
} else this.nodeTopBar.zIndex = cc.NoteDepth.TOP_BAR;
},
onGetAccountInfoResponse: function(t) {
if (null !== t) {
cc.LoginController.getInstance().setLoginResponse(t.AccountInfo);
cc.LoginController.getInstance().setNextVPResponse(t.NextVIP);
cc.LoginController.getInstance().setTopVPResponse(t.TopVP);
}
cc.LobbyController.getInstance().topBarUpdateInfo();
this.lbTopVp.string = cc.Tool.getInstance().formatNumber(cc.LoginController.getInstance().getTopVPResponse());
},
checkVQMMInfo: function() {
new cc.VQMMGetInfoCommand().execute(this);
},
onVQMMGetInfoResponse: function(t) {
null !== t && t.Quantity > 0 && t.IsOpen && this.createVQMMView();
},
joinGameClicked: function(t, e) {
if (cc.LoginController.getInstance().checkLogin()) {
this.joinGame(e);
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, cc.DDNA.getInstance().getGameById(e.toString()), cc.DDNAUIType.BUTTON);
}
},
setIsAudioBg: function() {
this.IsOnAudioBg = !this.IsOnAudioBg;
cc.Tool.getInstance().setItem("@onAudioBg", this.IsOnAudioBg);
this.IsOnAudioBg ? this.audioBg.play() : this.audioBg.stop();
this.toggleAudio.isChecked = this.IsOnAudioBg;
},
playAudioBg: function() {
this.IsOnAudioBg ? this.audioBg.play() : this.audioBg.stop();
}
});
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: "NetConfig"
} ],
LocalTest: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6dd9063/sxJ9reKdFNiafKV", "LocalTest");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
var t = this;
fzgui.UIWaitingLayout.showWaiting();
fzgui.Https.post("https://api.dragonf1.xyz/Authen/login", {
UserName: "luffytest",
Password: "4297f44b13955235245b2497399d7a93",
IpAddress: "",
DeviceName: "Chrome",
PlatformId: 4,
UIID: "",
gate: "789.club",
MerchantId: 1002
}, function(e, o) {
200 == e && t.onLoginSuccess(o);
});
};
e.prototype.onLoginSuccess = function(t) {
console.log(t);
fzgui.UserManager.instance.mainUserInfo = t;
fzgui.UserManager.instance.mainUserInfo.UserName = "linhnhicute";
fzgui.UserManager.instance.mainUserInfo.PassWord = "4297f44b13955235245b2497399d7a93";
this.destroy();
this.setCookie(fzgui.Https.xhr);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS);
fzgui.UIWaitingLayout.hideWaiting();
};
e.prototype.setCookie = function(t) {
cc.log("setCookie " + document.cookie);
if (cc.sys.isNative) {
t.getResponseHeader("Set-Cookie").split(";");
fzgui.UserManager.instance.mainUserInfo.cookie = "";
}
};
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
LoginController: [ function(t, e) {
"use strict";
cc._RF.push(e, "a871c51y7hFWYHxuXK8GcIR", "LoginController");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
e.prototype.setLoginView = function(t) {
return this.loginView = t;
};
e.prototype.setRegisterView = function(t) {
return this.registerView = t;
};
e.prototype.setForgotPassView = function(t) {
return this.forgotPassView = t;
};
e.prototype.setNicknameView = function(t) {
return this.nicknameView = t;
};
e.prototype.setOTPView = function(t) {
return this.otpView = t;
};
e.prototype.showLogin = function(t) {
return this.loginView.showLogin(t);
};
e.prototype.stayOnTop = function(t) {
return this.loginView.stayOnTop(t);
};
e.prototype.showRegister = function(t) {
return this.registerView.showRegister(t);
};
e.prototype.showForgotPass = function(t) {
return this.forgotPassView.showForgotPass(t);
};
e.prototype.showNickname = function(t) {
return this.nicknameView.showNickname(t);
};
e.prototype.showOTP = function(t) {
this.otpView.showOTP(t);
};
e.prototype.getLoginResponse = function() {
return this.loginResponse;
};
e.prototype.setLoginResponse = function(t) {
return this.loginResponse = t;
};
e.prototype.getNextVPResponse = function() {
return this.nextVPResponse;
};
e.prototype.setNextVPResponse = function(t) {
return this.nextVPResponse = t;
};
e.prototype.getUserId = function() {
return this.userId;
};
e.prototype.setUserId = function(t) {
return this.userId = t;
};
e.prototype.setUsername = function(t) {
return this.username = t;
};
e.prototype.getUsername = function() {
return this.username;
};
e.prototype.setNickname = function(t) {
return this.nickname = t;
};
e.prototype.getNickname = function() {
return this.nickname;
};
e.prototype.setPassword = function(t) {
return this.password = t;
};
e.prototype.getPassword = function() {
return this.password;
};
e.prototype.setLoginState = function(t) {
return this.loginState = t;
};
e.prototype.getLoginState = function() {
return !!this.loginState;
};
e.prototype.setLoginType = function(t) {
return this.loginType = t;
};
e.prototype.getLoginType = function() {
return this.loginType;
};
e.prototype.checkLogin = function() {
if (this.loginState) return !0;
cc.LobbyController.getInstance().createLoginView();
this.showRegister(!1);
this.showLogin(!0);
return !1;
};
e.prototype.getTopVPResponse = function() {
return void 0 === this.topVPResponse ? "0" : this.topVPResponse;
};
e.prototype.setTopVPResponse = function(t) {
return this.topVPResponse = t;
};
return e;
}();
cc.LoginController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
LoginFeature: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8b7d1eQq4JHxbM+cgSIxjq3", "LoginFeature");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tabIndex = 0;
e.guiType = fzgui.GUI_TYPE.POPUP;
e.featurePrefab = null;
e.isLoadFromUrl = !0;
e.featurePrefabUrl = "";
e.bundleName = "";
e.isNotLogin = !1;
return e;
}
r([ a ], e.prototype, "tabIndex", void 0);
r([ a({
type: cc.Enum(fzgui.GUI_TYPE)
}) ], e.prototype, "guiType", void 0);
r([ a({
type: cc.Prefab,
visible: function() {
return !this.isLoadFromUrl;
}
}) ], e.prototype, "featurePrefab", void 0);
r([ a ], e.prototype, "isLoadFromUrl", void 0);
r([ a({
visible: function() {
return this.isLoadFromUrl;
}
}) ], e.prototype, "featurePrefabUrl", void 0);
r([ a({
visible: function() {
return this.isLoadFromUrl;
}
}) ], e.prototype, "bundleName", void 0);
r([ a ], e.prototype, "isNotLogin", void 0);
return r([ s ], e);
}(fzgui.LoginFeature);
o.default = u;
cc._RF.pop();
}, {} ],
MPConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "d7d262NtCFEpqrz+yKIW/HW", "MPConfig");
e.exports = {
TIME_COLUMN_NORMAL: .15,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .05,
TIME_CALL_STOP_FAST: .1,
TIME_MONEY_EFFECT_JACKPOT: 5,
TIME_MONEY_EFFECT_BIG_WIN: 5,
TIME_MONEY_EFFECT_NORMAL_WIN: 1,
TIME_WAIT_LOST: .5,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1,
TIME_WAIT_LOST_FAST: .3,
TIME_TWEEN_MONEY_FAST: .3
};
cc._RF.pop();
}, {} ],
MVWebSocket: [ function(t, e) {
"use strict";
cc._RF.push(e, "20b6ci413dHiYjvwjW50xF7", "MVWebSocket");
var o = o || window.WebSocket || window.MozWebSocket, n = cc.Class({
extends: cc.Component,
properties: {
_socketIndex: {
default: 0
},
_mvWebSocket: {
default: null
},
_currentData: {
default: ""
},
_eventName: {
default: ""
},
_url: {
default: ""
},
_hub: {
default: ""
},
_cookie: {
default: ""
},
_state: {
default: null
},
_isReconnect: {
default: !1
},
_isEndMsg: {
default: !1
},
loopConnect: 0
},
__ctor__: function(t, e, o, n, i) {
this._socketIndex = 0;
this._mvWebSocket = null;
this._currentData = "";
this._eventName = t;
this._url = cc.sys.isNative ? i : e;
this._hub = o;
this._ip = i;
this._isReconnect = !1;
null != n && (this._cookie = n);
this._state = 0;
},
getState: function() {
return this._state;
},
connect: function(t) {
null != t && (this._isReconnect = t);
var e = this, o = this._url + "/negotiate";
console.log("negotiateUrl: ", o);
var n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 == n.readyState && 200 == n.status) {
Global.log(n.responseText);
var t = JSON.parse(n.responseText), o = e._url;
o = (o = o.replace("https://", "wss://")).replace("http://", "ws://");
e._isReconnect ? o += "/reconnect" : o += "/connect";
cc.log(e._hub);
o += "?transport=webSockets&connectionToken=" + encodeURIComponent(t.ConnectionToken) + "&connectionData=" + encodeURIComponent('[{"name":"' + e._hub + '"}]') + "&tid=" + MvUtils.random(1, 11) + "&token=" + encodeURIComponent(Global.AccountInfo.token);
cc.log("---\x3e " + o);
e.connectWS(o);
e.loopConnect = 0;
} else console.log("negotiateUrl error: ", n.responseText);
};
n.ontimeout = function() {
if (0 == e.loopConnect) {
e.loopConnect += 1;
e.connect();
} else {
e._state = 4;
cc.systemEvent.emit(e._eventName, {
M: [ {
M: "error"
} ]
});
}
};
n.onerror = function() {
if (0 == e.loopConnect) {
e.loopConnect += 1;
e.connect();
} else {
cc.log(n.responseText);
e._state = 4;
cc.systemEvent.emit(e._eventName, {
M: [ {
M: "error"
} ]
});
}
};
n.timeout = 3e4;
n.open("GET", o, !0);
n.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
cc.sys.isNative ? n.setRequestHeader("cookie", "") : n.withCredentials = !0;
n.send();
},
reconnect: function() {
this.connect(!0);
},
connectWS: function(t) {
this._socketIndex = 0;
this._currentData = "";
this.close();
console.log("url url", t);
this._mvWebSocket = new o(t);
var e = this;
this._mvWebSocket.onopen = function() {
console.log("onopen: " + e._hub);
e._state = 1;
cc.systemEvent.emit(e._eventName, '{"M": [{"M": "open"}]}');
};
this._mvWebSocket.onmessage = function(t) {
if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
if (!e._isEndMsg) {
e._currentData += t.data;
try {
JSON.parse(e._currentData);
e._isEndMsg = !0;
} catch (t) {
return;
}
}
e._isEndMsg && e.processMessage(e._currentData);
} else e.processMessage(t.data);
};
this._mvWebSocket.onerror = function(t) {
console.log("onerror _mvWebSocket: " + e._hub + JSON.stringify(t));
e._state = 4;
cc.systemEvent.emit(e._eventName, '{"M": [{"M": "error"}]}');
};
this._mvWebSocket.onclose = function(t) {
console.log("onclose _mvWebSocket: " + e._hub + JSON.stringify(t));
e._state = 3;
cc.systemEvent.emit(e._eventName, '{"M": [{"M": "close"}]}');
};
},
send: function(t, e) {
if (null != this._mvWebSocket && 1 == this._state) {
var o = JSON.stringify({
H: this._hub,
M: t,
A: e,
I: this._socketIndex++
});
cc.log("ws_send:" + o);
this._mvWebSocket.send(o);
}
},
pingPong: function() {
this.send("PingPong", []);
},
close: function() {
if (this._mvWebSocket) {
this._mvWebSocket.close();
this._mvWebSocket = null;
}
},
processMessage: function(t) {
try {
JSON.parse(t);
cc.systemEvent.emit(this._eventName, t);
this._currentData = "";
this._isEndMsg = !1;
} catch (e) {
cc.log(t);
cc.log("Error 2:" + e);
}
}
});
e.exports = n;
cc._RF.pop();
}, {} ],
MethodHubName: [ function(t, e) {
"use strict";
cc._RF.push(e, "157c8lKeH5CcICdILlDFyB6", "MethodHubName");
(function() {
cc.MethodHubName = cc.Enum({
ENTER_LOBBY: "EnterLobby",
EXIT_LOBBY: "ExitLobby",
PLAY_NOW: "PlayNow",
SPIN: "Spin",
FREE_SPIN: "FreeSpin",
PLAY_BONUS: "PlayBonusGame",
PLAY_X2_GAME: "PlayX2Game",
FINISH_X2_GAME: "FinishX2Game",
PLAY_TRY: "PlayTry",
SPIN_TRY: "SpinTry",
REGISTER_LEAVE_ROOM: "RegisterLeaveRoom",
UNREGISTER_LEAVE_ROOM: "UnregisterLeaveRoom",
CASH_OUT: "Cashout",
BET: "Bet",
CORD_INFO: "CordInfo",
BUY_IN: "BuyIn",
REGISTER_AUTO: "RegisterAuto",
FLIP_CARDS: "FlipCards",
SELL_OWNER: "SellOwner",
BUY_OWNER: "BuyOwner",
BET_OTHERS: "BetOthers",
ACCEPT_BET: "AcceptBet",
FEED_CHICKEN: "FeedChicken",
FLIP: "Flip",
DANH_BAI: "DanhBai",
BO_LUOT: "BoLuot",
SORT_HAND_CARDS: "SortHandCards",
START_GAME: "StartGame",
CHECK_CHI: "CheckChi",
FINISH_GAME: "FinishGame",
REGISTER_CHAT: "RegisterChat",
UNREGISTER_CHAT: "UnregisterChat",
SEND_MESSAGE: "SendMessage",
TREASURE_CARROT_JUMP_SPIN_CREATE: "CarrotJumpSpinCreate",
TREASURE_CARROT_FIGHT_SPIN_CREATE: "CarrotFightSpinCreate",
TREASURE_GET_CARROT_USER_INFO: "GetCarrotUserInfor",
TREASURE_CARROT_USER_GET_TREASURE: "CarrotUserGetTreasure",
TREASURE_CARROT_JUMP_CREATE_NEXT_DATA: "CarrotJumpCreateNextData",
PING_PONG: "PingPong"
});
}).call(void 0);
cc._RF.pop();
}, {} ],
MethodHubOnName: [ function(t, e) {
"use strict";
cc._RF.push(e, "7ac37q0wpxOOauK/EKrB4Z8", "MethodHubOnName");
(function() {
var t;
cc.MethodHubOnName = cc.Enum(((t = {
JOIN_GAME: "joinGame",
RESULT_SPIN: "resultSpin",
RESULT_FREE_SPIN: "resultFreeSpin",
UPDATE_USER_BALANCE: "updateUserBalance",
RESULT_X2_GAME: "resultX2Game",
UPDATE_JACKPOT: "updateJackpot",
MESSAGE: "message",
BET_USER: "betUser",
REJOIN: "reJoin",
TOTAL_WIN_MONEY: "totalWinMoney",
SESSION_INFO: "sessionInfo",
GAME_HISTORY: "gameHistory",
BET_OF_ACCOUNT: "betOfAccount",
BET_SUCCESS: "betSuccess",
WIN_RESULT: "winResult",
CORD_ACCOUNT_INFO: "cordAccountInfo",
EVENT_WINNER_RESULT: "eventWinnerResult",
SUMMON_DRAGON_AWARD: "summonDragonAward",
PLAYER_LEAVE: "playerLeave",
UPDATE_CONNECTION_STATUS: "updateConnectionStatus",
PLAYER_JOIN: "playerJoin",
PLAYER_BET: "playerBet",
PLAYER_MESSAGE: "playerMessage",
OPEN_PLATE_NOW: "openPlateNow",
START_ACTION_TIMER: "startActionTimer",
UPDATE_PLAYER_STATUS: "updatePlayerStatus",
UPDATE_ROOM_TIME: "updateRoomTime",
BUY_MANUAL: "buyManual",
UPDATE_ACCOUNT: "updateAccount",
PLAYER_CHECK_AUTO: "playerCheckAuto",
NOTIFY_CHANGE_PHRASE: "notifyChangePhrase",
NOTIFY_START_ACTIONS: "notifyStartActions",
NOTIFY_FINISH_ACTIONS: "notifyFinishActions",
PLAYER_FLIP_CARDS: "playerFlipCards",
REFUND: "refund",
UPDATE_BETTING: "updateBetting",
BET_OTHER: "betOther",
ACCEPTED_BET: "acceptedBet",
FEED_CHICKEN: "feedChicken",
START_GAME: "startGame",
START_BETTING_TIME: "startBettingTime",
START_ANIMATION_TIME: "startAnimationTime",
SHOW_ALL_RESULT: "showAllResult",
UPDATE_SESSION: "updateSession",
ASK_OTHER_TO_BUY: "askOtherToBuy",
SHOW_PRIZE: "showPrize",
ASK_TO_SELL: "askToSell",
FLIP_CARDS: "flipCards",
CHANGE_OWNER: "changeOwner",
BUY_OWNER_SUCCESS: "buyOwnerSuccess",
DANH_BAI: "danhBai",
BO_LUOT: "boLuot",
END_ROUND: "endRound",
ALLOW_CHAN_NGAY: "allowChanNgay",
CANCEL_CHAN_NGAY: "cancelChanNgay",
SHOW_RESULT: "showResult",
SORT_HAND_CARDS: "sortHandCards",
CHECK_SORT_CHI: "checkSortChi",
HA_BAI: "haBai",
UPDATE_GAME_SESSION: "updateGameSession",
FINISH_GAME: "finishGame",
BET_SESSION: "betSession",
VIP_PLAYERS: "vipPlayers",
WIN_RESULT_VIP: "winResultVip",
SUMMARY_PLAYER: "summaryPlayer"
}).NOTIFY_CHANGE_PHRASE = "notifyChangePhrase", t.TOPUP_CARD = "topupCard", t.EFFECT_JACKPOT_ALL = "effectJackpotAll", 
t.LIST_LAST_MESSAGES = "listLastMessages", t.RECEIVE_MESSAGE = "receiveMessage", 
t.SYSTEM_MESSAGE = "systemMessage", t.OTHER_DEVICE = "otherDevice", t.X_BOOM = "xBoom", 
t.TREASURE_CARROT_JUMP_SPIN_CREATE_SUCCESS = "carrotJumpSpinCreateSuccess", t.TREASURE_CARROT_FIGHT_SPIN_CREATE_SUCCESS = "carrotFightSpinCreateSuccess", 
t.TREASURE_CARROT_USER_GET_TREASURE_SUCCESS = "carrotUserGetTreasuresuccess", t.TREASURE_GET_CARROT_USER_INFO_SUCCESS = "getCarrotUserInforSuccess", 
t.CURR_SESSION_INFO = "currSessionInfo", t.SESSION_RESULT = "sessionResult", t.UPDATE_TIMER = "updateTimer", 
t.BET_LIST = "playerBetList", t.PLAYER_CASH_OUT = "playerCashOut", t.CASH_OUT_SUCCESS = "cashoutSuccess", 
t));
}).call(void 0);
cc._RF.pop();
}, {} ],
MiniGameNavigator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "94e7avAJohDA42qEEUoFTOW", "MiniGameNavigator");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nBg = null;
return e;
}
e.prototype.popupWillAppear = function() {
this.nBg.opacity = 255;
this.nBg.scale = 0;
var t = cc.spawn(cc.scaleTo(.24, 1), cc.rotateBy(.23, 360));
this.nBg.runAction(t);
};
r([ a(cc.Node) ], e.prototype, "nBg", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {} ],
MiniPokerConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "1cd13fwMAdAL4dhU+dkBMOM", "MiniPokerConfig");
e.exports = {
TIME_ENABLE_TORNADO: 40,
TIME_FAST: 10,
TIME_SUPER_FAST: 5,
TIME_WAIT_SHOW_WIN_RESULT: 2,
TIME_WAIT_SHOW_WIN_RESULT_NAN: 12,
TIME_WAIT_DICE_ANIMATION: 2
};
cc._RF.pop();
}, {} ],
NegotiateCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "89cd9V2gpZGyLNzjiSTp1tZ", "NegotiateCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t, e) {
return cc.ServerConnector.getInstance().sendRequest(e, "signalr/negotiate", function(e) {
cc.PopupController.getInstance().hideBusy();
var o = JSON.parse(e);
return t.onSlotsNegotiateResponse(o);
}, !0);
};
return t;
}();
cc.NegotiateCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
NetConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "c09f0yzsjhD44YxBnSR/+2I", "NetConfig");
e.exports = {
HOST_U: "",
IS_APPSTORE: !1,
PORTAL: "test",
HOST: fzgui.ConfigManager.instance.ConfigInfo.Api,
FB_LOGIN_URL: "http://fbook.hit-portal.site/Home/FbLogin",
PING_TIME: 5,
RECONNECT_TIME: 5
};
cc._RF.pop();
}, {} ],
NumberUtil: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "81e86zZGX5IoJikxW0vjjx2", "NumberUtil");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./FormatUtil"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e._animationEnabled = !0;
e._animationScale = !1;
e._spendNotAnimation = !1;
e._animationTime = .5;
e._number = 0;
e._currentNum = 0;
e._bonusNum = 0;
e._delayTime = .05;
e.m_isShort = !1;
e.m_isMoneyUsd = !1;
e.m_isMoneyAdd = !1;
return e;
}
e.prototype.start = function() {};
e.prototype.setNumber = function(t) {
if (t != this._number) {
if (!this._animationEnabled || t < this._number && this._spendNotAnimation) {
var e = "";
this.m_isShort || (e = c.default.formatNumber(t));
if (this._animationEnabled) {
this.node.stopAllActions();
this.unschedule(this.increase);
this.unschedule(this.EndAnimation);
}
this.m_isMoneyUsd && (e = cc.js.formatStr("$%s", e));
this.label.string = e;
this._bonusNum = t;
this._currentNum = t;
} else {
var o = this._animationTime / this._delayTime;
this._bonusNum = (t - this._currentNum) / o;
this.node.stopAllActions();
this.unschedule(this.increase);
this.unschedule(this.EndAnimation);
this.schedule(this.increase, this._delayTime);
this.schedule(this.EndAnimation, this._animationTime);
}
this._number = t;
}
};
e.prototype.EndAnimation = function() {
this.unschedule(this.increase);
this.unschedule(this.EndAnimation);
var t = "";
this.m_isShort || (t = c.default.formatNumber(this._number));
this.m_isMoneyUsd && (t = cc.js.formatStr("$%s", t));
this.m_isMoneyAdd && (t = cc.js.formatStr("+%s", t));
this.label.string = t;
if (this._animationScale) {
var e = cc.scaleTo(.4, 1);
this.node.runAction(e);
}
this._currentNum = this._number;
};
e.prototype.increase = function() {
this._currentNum += this._bonusNum;
var t = "";
this.m_isShort || (t = c.default.formatNumber(Math.round(this._currentNum)));
this.m_isMoneyUsd && (t = cc.js.formatStr("$%s", t));
this.m_isMoneyAdd && (t = cc.js.formatStr("+%s", t));
this.label.string = t;
if (this._animationScale) {
var e;
e = cc.scaleBy(.1, 1.01);
this.node.runAction(e);
}
};
e.prototype.setEnableAnimation = function(t) {
this._animationEnabled = t;
};
e.prototype.setEnableAnimationScale = function(t) {
this._animationScale = t;
};
e.prototype.setSpendNotAnimation = function(t) {
this._spendNotAnimation = t;
};
e.prototype.setAnimationTime = function(t) {
this._animationTime = t;
this._animationEnabled = t > 0;
};
e.prototype.getNumber = function() {
return this._number;
};
e.prototype.setValueNumber = function(t) {
this.label.string = "" + t;
this._number = t;
this._currentNum = t;
};
e.prototype.isEnabledAnimation = function() {
return this._animationEnabled;
};
e.prototype.getAnimationTime = function() {
return this._animationTime;
};
e.prototype.setMoneyFormat = function(t) {
this.m_isShort = t;
var e = "";
this.m_isShort || (e = c.default.formatNumber(this._currentNum));
this.m_isMoneyUsd && (e = cc.js.formatStr("$%s", e));
this.label.string = e;
};
e.prototype.setMoneyUsd = function(t) {
this.m_isMoneyUsd = t;
};
e.prototype.setMoneyAdd = function(t) {
this.m_isMoneyAdd = t;
};
r([ u(cc.Label) ], e.prototype, "label", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./FormatUtil": "FormatUtil"
} ],
PopupBase: [ function(t, e) {
"use strict";
cc._RF.push(e, "6f31cFDgqdD0IQwna8AZn6W", "PopupBase");
(function() {
cc.PopupBase = cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
},
onEnable: function() {
this.animation.play("openPopup");
},
closeClicked: function() {
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
t.closeFinished();
}, this, 1, 0, .12, !1);
},
closeFinished: function() {}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
PopupController: [ function(t, e) {
"use strict";
cc._RF.push(e, "14bc30tp8BFvahs/U+vy+F0", "PopupController");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
e.prototype.setPopupView = function(t) {
return this.popupView = t;
};
e.prototype.setPopupSlotsView = function(t) {
return this.popupSlotsView = t;
};
e.prototype.showSlotsMessage = function(t) {
return fzgui.UITextManager.showCenterNotification(t);
};
e.prototype.showSlotsWin = function(t) {
return fzgui.UITextManager.showCenterNotification(t);
};
e.prototype.init = function() {
return this.popupView.init();
};
e.prototype.init = function() {
return this.popupView.init();
};
e.prototype.showBusy = function() {};
e.prototype.hideBusy = function() {};
e.prototype.isShowPopup = function() {
return this.popupView.isShowPopup();
};
e.prototype.getOTPPopup = function() {
return this.popupView.getOTPPopup();
};
e.prototype.showMessage = function(t) {
return fzgui.UIPopupManager.instance.showPopup(t);
};
e.prototype.showMessageError = function(t) {
return fzgui.UIPopupManager.instance.showPopup(t);
};
e.prototype.showPopupOTP = function(t, e, o) {
return this.popupView.showPopupOTP(t, e, o);
};
e.prototype.showPopup = function(t, e, o, n, i) {
return this.popupView.showPopup(t, e, o, n, i);
};
e.prototype.showPopupSimple = function(t, e, o) {
return this.popupView.showPopupSimple(t, e, o);
};
e.prototype.showPopupLostConnection = function() {
return this.popupView.showPopupLostConnection();
};
e.prototype.showPopupRequireLogin = function(t) {
return this.popupView.showPopupRequireLogin(t);
};
e.prototype.showPopupOtherDevice = function(t, e) {
return fzgui.UIPopupManager.instance.showPopup(t, e);
};
e.prototype.showMiniMessage = function(t) {
return fzgui.UITextManager.showCenterNotification(t);
};
e.prototype.showPopupRequireEnableLocation = function() {
return this.popupView.showPopupRequireEnableLocation();
};
e.prototype.closePopupRequireEnableLocation = function() {
return this.popupView.closePopupRequireEnableLocation();
};
e.prototype.isShowPopupRequireEnableLocation = function() {
return this.popupView.isShowPopupRequireEnableLocation();
};
e.prototype.closePopup = function() {
return this.popupView.closePopup();
};
return e;
}();
cc.PopupController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
PopupSlotsView: [ function(t, e) {
"use strict";
cc._RF.push(e, "832cdd6gThBUZ3q0q4hjRy5", "PopupSlotsView");
var o = t("GameMessage");
(function() {
cc.PopupSlotsView = cc.Class({
extends: cc.Component,
properties: {
nodeMessage: cc.Node,
lbMessage: cc.Label,
lbWin: cc.Label,
sfPopupNormal: cc.SpriteFrame,
sfPopupWin: cc.SpriteFrame,
messPosY: 0,
messWinPosY: 74
},
onLoad: function() {
cc.PopupController.getInstance().setPopupSlotsView(this);
this.sprite = this.nodeMessage.getComponent(cc.Sprite);
this.animation = this.node.getComponent(cc.Animation);
},
showSlotsMessage: function(t) {
this.sprite.spriteFrame = this.sfPopupNormal;
this.lbMessage.string = t;
this.lbMessage.node.y = this.messPosY;
this.nodeMessage.opacity = 0;
this.nodeMessage.active = !0;
this.lbWin && (this.lbWin.node.active = !1);
this.animation.play("openPopupSlots");
},
showSlotsWin: function(t) {
this.sprite.spriteFrame = this.sfPopupWin;
this.lbMessage.string = o.SLOTS_POPUP_WIN;
this.lbMessage.node.y = this.messWinPosY;
this.lbWin.string = cc.Tool.getInstance().formatNumber(t);
this.lbWin.node.active = !0;
this.nodeMessage.opacity = 0;
this.nodeMessage.active = !0;
this.animation.play("openPopupSlots");
}
});
}).call(void 0);
cc._RF.pop();
}, {
GameMessage: "GameMessage"
} ],
PopupStyle: [ function(t, e) {
"use strict";
cc._RF.push(e, "c696bksCcJBVbNnyWPQMIEu", "PopupStyle");
(function() {
cc.PopupStyle = cc.Enum({
NOTHING: 0,
REQUIRE_LOGIN: 1,
INFO: 2,
REQUIRE_UPDATE: 3,
CHARGE_OR_SPIN_XU: 4,
LOGIN_OR_SPIN_XU: 5,
CHARGE_VANG_OR_SPIN_XU: 6
});
}).call(void 0);
cc._RF.pop();
}, {} ],
PopupViewBase: [ function(t, e) {
"use strict";
cc._RF.push(e, "74795lNLfpAhphIMLTfHGgH", "PopupViewBase");
(function() {
cc.PopupViewBase = cc.Class({
extends: cc.Component,
properties: {
prefabBetLines: cc.Prefab,
prefabHelp: cc.Prefab,
prefabHistory: cc.Prefab,
prefabTop: cc.Prefab,
prefabSessionDetail: cc.Prefab
},
createSessionDetailView: function() {
this.nodeSessionDetailView = this.createView(this.prefabSessionDetail);
},
destroySessionDetailView: function() {
this.nodeSessionDetailView && this.nodeSessionDetailView.destroy();
},
createBetLinesView: function() {
this.nodeBetLinesView = this.createView(this.prefabBetLines);
},
destroyBetLinesView: function() {
this.nodeBetLinesView && this.nodeBetLinesView.destroy();
},
createTopView: function() {
this.nodeTopView = this.createView(this.prefabTop);
},
destroyTopView: function() {
this.nodeTopView && this.nodeTopView.destroy();
},
createHelpView: function() {
this.nodeHelpView = this.createView(this.prefabHelp);
},
destroyHelpView: function() {
this.nodeHelpView && this.nodeHelpView.destroy();
},
createHistoryView: function() {
this.nodeHistoryView = this.createView(this.prefabHistory);
},
destroyHistoryView: function() {
this.nodeHistoryView && this.nodeHistoryView.destroy();
},
createView: function(t) {
var e = cc.instantiate(t);
e.parent = this.node;
e.setPosition(-this.node.x, -this.node.y);
return e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
PopupView: [ function(t, e) {
"use strict";
cc._RF.push(e, "08222+lSvhHCZa4fSrQbbI7", "PopupView");
var o = t("NetConfig");
(function() {
cc.PopupView = cc.Class({
extends: cc.Component,
properties: {
nodeBusy: cc.Node,
nodeMessage: cc.Node,
spriteMessage: cc.Sprite,
lbMessage: cc.Label,
nodePopup: cc.Node,
lbContentInfo: cc.Label,
buttonRed: cc.Button,
buttonBlue: cc.Button,
nodePopupOTP: cc.Node,
lbContentInfoOTP: cc.Label,
buttonBlueOTP: cc.Button,
lbBlueOTPs: [ cc.Label ],
editBoxOTP: cc.EditBox,
btnGetOTPs: [ cc.Button ],
lbBtnGetOTPs: [ cc.Label ],
nodeTeleSafes: [ cc.Node ],
animationMenuOTP: cc.Animation,
lbOTPType: cc.Label,
nodeMini: cc.Node,
lbMiniMessage: cc.Label,
lbReds: [ cc.Label ],
lbBlues: [ cc.Label ],
sfMessageError: cc.SpriteFrame,
sfMessageInfo: cc.SpriteFrame,
spriteIcon: cc.Sprite
},
onLoad: function() {
this.spriteIcon && (this.spriteIcon.spriteFrame = cc.LobbyController.getInstance().getGameAssets().icons[cc.Config.getInstance().getIndexIcon(cc.Config.getInstance().getServiceId())]);
this.nodeMessage.opacity = 0;
this.isLostConnection = !1;
this.isRegLogin = !1;
this.isOtherDevice = !1;
this.isRequireLocation = !1;
this.isTimer = !1;
this.timer = 0;
this.timePerGetOTP = 120;
this.updateInterval = 1;
this.updateTimer = 0;
this.otpType = cc.OTPType.TELE_SAFE;
},
update: function(t) {
if (this.isTimer) {
this.timer -= t;
this.updateTimer += t;
if (this.updateTimer < this.updateInterval) return;
this.updateTimer = 0;
this.processTimeOTPButton();
}
},
init: function() {
this.animationPopup = this.nodePopup.getComponent(cc.Animation);
this.animationPopupOTP = this.nodePopupOTP.getComponent(cc.Animation);
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = cc.NoteDepth.POPUP_SYSTEM;
},
activeTimeOTPButton: function() {
this.isTimer = !0;
this.updateTimer = 1;
this.timer = this.timePerGetOTP;
},
getTimeOTPPopup: function() {
this.timer = parseInt(cc.Tool.getInstance().getItem("@TimeGetOTPPopupOTP"));
this.processTimeOTPButton();
var t = cc.LoginController.getInstance().getLoginResponse();
if (cc.Config.getInstance().getDomainVK().includes(o.HOST)) {
this.nodeTeleSafes.forEach(function(t) {
t.active = !1;
});
this.otpType = cc.OTPType.TELE_SAFE;
this.lbOTPType.string = "App OTP";
} else if (null === t.PhoneSafeNo) {
this.nodeTeleSafes.forEach(function(t) {
t.active = !1;
});
this.otpType = cc.OTPType.SMS;
this.lbOTPType.string = "SMS";
}
},
processTimeOTPButton: function() {
if (this.timer <= 0) {
this.isTimer = !1;
this.btnGetOTPs.forEach(function(t) {
t.interactable = !0;
});
this.lbBtnGetOTPs.forEach(function(t) {
t.string = "LẤY OTP";
});
} else {
this.isTimer = !0;
var t = this.timer;
this.btnGetOTPs.forEach(function(t) {
t.interactable = !1;
});
this.lbBtnGetOTPs.forEach(function(e) {
e.string = Math.round(t);
});
}
},
showBusy: function() {
this.nodeBusy.active = !0;
},
hideBusy: function() {
this.nodeBusy.active = !1;
},
showMessage: function(t, e) {
this.spriteMessage.spriteFrame = this.sfMessageInfo;
this.showMess(t, e);
},
showMessageError: function(t, e) {
this.spriteMessage.spriteFrame = this.sfMessageError;
this.showMess(t, e);
},
showMess: function(t, e) {
this.lbMessage.string = t || (t ? "Đã có lỗi xảy ra" : "Đã có lỗi xảy ra (" + e + ")");
this.nodeMessage.opacity = 0;
this.nodeMessage.active = !0;
this.animation.stop("openPopupFade");
this.animation.play("openPopupFade", 0);
},
showPopupOTP: function(t, e, o) {
if (!this.nodePopupOTP.active) {
this.getTimeOTPPopup();
this.lbContentInfoOTP.string = t;
this.lbBlueOTPs.forEach(function(t) {
t.string = e;
});
this.buttonBlueOTP.clickEvents = [];
this.buttonBlueOTP.clickEvents.push(o);
this.buttonBlueOTP.node.active = !0;
this.nodePopupOTP.active = !0;
this.animationPopupOTP.play("openPopup");
}
},
showPopup: function(t, e, o, n, i) {
if (!this.nodePopup.active) {
this.lbContentInfo.string = t;
this.lbReds.forEach(function(t) {
t.string = e;
});
this.lbBlues.forEach(function(t) {
t.string = o;
});
this.buttonRed.clickEvents = [];
this.buttonBlue.clickEvents = [];
this.buttonRed.clickEvents.push(n);
this.buttonBlue.clickEvents.push(i);
this.buttonRed.node.active = !0;
this.buttonBlue.node.active = !0;
this.nodePopup.active = !0;
this.animationPopup.play("openPopup");
}
},
showPopupSimple: function(t, e, o) {
if (!this.nodePopup.active) {
this.lbContentInfo.string = t;
this.lbBlues.forEach(function(t) {
t.string = e;
});
this.buttonBlue.clickEvents.push(o);
this.buttonRed.node.active = !1;
this.buttonBlue.node.active = !0;
this.nodePopup.active = !0;
this.animationPopup.play("openPopup");
}
},
showPopupLostConnection: function() {
if (!this.isLostConnection) {
this.isLostConnection = !0;
var t = new cc.Component.EventHandler();
t.target = this;
t.component = "PopupView";
t.handler = "cancelTryClicked";
var e = new cc.Component.EventHandler();
e.target = this;
e.component = "PopupView";
e.handler = "tryClicked";
cc.PopupController.getInstance().showPopup("Bạn vừa mất kết nối vui lòng thử lại", "Huỷ", "Thử lại", e, t);
}
},
showPopupRequireLogin: function(t) {
if (!this.isRegLogin) {
this.isRegLogin = !0;
var e = new cc.Component.EventHandler();
e.target = this;
e.component = "PopupView";
e.handler = "openLoginClicked";
cc.PopupController.getInstance().showPopupSimple(t, "Đồng ý", e);
}
},
showPopupOtherDevice: function(t, e) {
this.gameId = e;
if (!this.isOtherDevice) {
this.isOtherDevice = !0;
var o = new cc.Component.EventHandler();
o.target = this;
o.component = "PopupView";
o.handler = "quitRoomClicked";
cc.PopupController.getInstance().showPopupSimple(t, "Đồng ý", o);
}
},
showPopupRequireEnableLocation: function() {
if (!this.isRequireLocation) {
this.isRequireLocation = !0;
var t = new cc.Component.EventHandler();
t.target = this;
t.component = "PopupView";
t.handler = "openSettingsClicked";
var e = new cc.Component.EventHandler();
e.target = this;
e.component = "PopupView";
e.handler = "cancelSettingsClicked";
cc.PopupController.getInstance().showPopup("Để tiếp tục chơi game bạn cần cấp quyền thu thập thông tin vị trí.", "Bỏ qua", "Cài đặt", e, t);
}
},
isShowPopupRequireEnableLocation: function() {
return this.isRequireLocation;
},
closePopupRequireEnableLocation: function() {
this.isRequireLocation && this.closePopup();
},
showMiniMessage: function(t) {
this.lbMiniMessage.string = t;
this.nodeMini.opacity = 0;
this.nodeMini.active = !0;
this.animation.stop("openMessageFade");
this.animation.play("openMessageFade", 0);
},
closePopup: function() {
this.nodePopupOTP.active && cc.Tool.getInstance().setItem("@TimeGetOTPPopupOTP", 0);
this.isTimer = 0;
this.editBoxOTP.string = "";
this.nodeBusy.active = !1;
this.nodePopup.active = !1;
this.nodePopupOTP.active = !1;
this.nodeMessage.active = !1;
this.nodeMini.active = !1;
this.isLostConnection = !1;
this.isRequireLocation = !1;
this.isRegLogin = !1;
this.isOtherDevice = !1;
this.animationPopup.play("closePopup");
},
getOTPPopup: function() {
return this.editBoxOTP.string;
},
isShowPopup: function() {
return !!(this.nodePopupOTP.active || this.nodePopup.active || this.nodeBusy.active || this.nodeMessage);
},
onGetOTPResponse: function(t) {
t.Message ? cc.PopupController.getInstance().showMessage(t.Message) : cc.PopupController.getInstance().showMessage("Lấy OTP thành công");
},
onGetOTPResponseError: function(t) {
cc.PopupController.getInstance().showMessageError(t.Message, t.ResponseCode);
},
selectOTPEvent: function(t, e) {
this.otpType = "App OTP" === e.toString() ? cc.OTPType.TELE_SAFE : cc.OTPType.SMS;
this.lbOTPType.string = e.toString();
this.animationMenuOTP.play("hideDropdownMenu");
},
openMenuOTPClicked: function() {
this.animationMenuOTP.play("showDropdownMenu");
},
hideMenuOTPClicked: function() {
this.animationMenuOTP.play("hideDropdownMenu");
},
getOTPClicked: function() {
this.activeTimeOTPButton();
new cc.GetOTPCommand().execute(this, "", this.otpType);
},
cancelTryClicked: function() {
this.closePopup();
},
tryClicked: function() {
if (cc.sys.isNative) {
cc.PopupController.getInstance().showBusy();
cc.director.loadScene("lobby");
} else location.reload();
},
openLoginClicked: function() {
if (cc.sys.isNative) {
cc.PopupController.getInstance().showBusy();
cc.director.loadScene("lobby");
} else location.reload();
},
quitRoomClicked: function() {
fzgui.UIScreenManager.instance.popToRootScreen();
this.closePopup();
},
openSettingsClicked: function() {
cc.LocationController.getInstance().openSettings();
this.closePopup();
},
cancelSettingsClicked: function() {
this.closePopup();
},
closeClicked: function() {
this.closePopup();
}
});
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: "NetConfig"
} ],
PortalConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "057af0fbMZIz5zZMpfuLf9p", "PortalConfig");
e.exports = {
TIME_SHOW_EFFECT_JACKPOT: 10,
TIME_GET_JACKPOT: 15,
TIME_GET_X_JACKPOT: 30,
TIME_CHECK_EVENT: 180
};
cc._RF.pop();
}, {} ],
PrefabEDefined: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a9c77lq3AJF+rUbcC9M4FrY", "PrefabEDefined");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, c = i.property, s = (cc.Enum({
VN: 0,
EN: 1,
MM: 2
}), function() {
function t() {
this.namePrefab = "";
this.prfDefined = null;
}
n([ c(cc.String) ], t.prototype, "namePrefab", void 0);
n([ c(cc.Prefab) ], t.prototype, "prfDefined", void 0);
return n([ r("PrefabEDefined") ], t);
}());
o.default = s;
cc._RF.pop();
}, {} ],
Random: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "37876xtqfFHAZPUJtTiL4na", "Random");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, c = (i.property, function() {
function t() {}
t.range = function(t, e) {
return Math.random() * (e - t) + t;
};
t.rangeInt = function(t, e) {
t = Math.ceil(t);
e = Math.floor(e);
return Math.floor(Math.random() * (e - t)) + t;
};
return n([ r ], t);
}());
o.default = c;
cc._RF.pop();
}, {} ],
ServerConnector: [ function(t, e) {
"use strict";
cc._RF.push(e, "6d20c2CRsNPgYE/8E8eShWI", "ServerConnector");
var o = t("NetConfig");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
e.prototype.sendRequest = function(t, e, n) {
var i, r;
try {
console.log("===> ServerConnector.prototype.sendRequest=---\x3e" + o.HOST);
var c = fzgui.ConfigManager.instance.ConfigInfo.Api;
r = cc.loader.getXMLHttpRequest();
var s = "https://" + t + c + "/" + e;
console.log("urlRequest =====" + s);
fzgui.UserManager.instance.mainUserInfo.GameToken && (s.includes("?") ? s += "&token=" + encodeURIComponent(fzgui.UserManager.instance.mainUserInfo.GameToken) : s += "?token=" + encodeURIComponent(fzgui.UserManager.instance.mainUserInfo.GameToken));
console.log(s);
r.timeout = 6e4;
r.open("GET", s);
r.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
r.onreadystatechange = function() {
if (4 === r.readyState && 200 === r.status) return n(r.responseText);
};
return r.send();
} catch (t) {
i = t;
return console.log("Caught Exception: " + i.message);
}
};
e.prototype.sendRequestPOST = function(t, e, o, n) {
var i, r;
try {
var c = fzgui.ConfigManager.instance.ConfigInfo.Api;
t === cc.SubdomainName.TREASURE && ("ibom2.cc" !== c && "ibom3.cc" !== c || (c = fzgui.ConfigManager.instance.ConfigInfo.Api));
r = cc.loader.getXMLHttpRequest();
var s = "https://" + t + c + "/" + e;
cc.ServerConnector.getInstance().getToken() && (s.includes("?"), s += "&token=" + encodeURIComponent(fzgui.UserManager.instance.mainUserInfo.GameToken));
r.timeout = 6e4;
r.open(cc.RequestType.POST, s);
r.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
cc.sys.isNative ? cc.ServerConnector.getInstance().getCookie() && r.setRequestHeader("cookie", cc.ServerConnector.getInstance().getCookie()) : r.withCredentials = !0;
r.onreadystatechange = function() {
if (4 === r.readyState && 200 === r.status) {
cc.sys.isNative;
-1001 === JSON.parse(r.responseText).ResponseCode && cc.PopupController.getInstance().showPopupRequireLogin(cc.HubError.ERROR_1001_NOT_AUTHENTICATE);
return n(r.responseText);
}
};
return r.send(o);
} catch (t) {
i = t;
return console.log("Caught Exception: " + i.message);
}
};
e.prototype.getToken = function() {
return this.token;
};
e.prototype.setToken = function(t) {
null === t ? cc.Tool.getInstance().setItem("@atn", null) : cc.Tool.getInstance().setItem("@atn", t);
return this.token = t;
};
e.prototype.setLatitude = function(t) {
return this.latitude = t;
};
e.prototype.getLatitude = function() {
return this.latitude;
};
e.prototype.setLongitude = function(t) {
return this.longitude = t;
};
e.prototype.getLongitude = function() {
return this.longitude;
};
e.prototype.setCookie = function(t) {
return this.cookie = t;
};
e.prototype.getCookie = function() {
return this.cookie;
};
e.prototype.setCookie = function(t) {
return this.cookie = t;
};
e.prototype.getDeviceId = function() {
return this.deviceId;
};
e.prototype.setDeviceId = function(t) {
return this.deviceId = t;
};
e.prototype.getCaptchaPrivateKey = function() {
return this.captchaPrivateKey;
};
e.prototype.setCaptchaPrivateKey = function(t) {
return this.captchaPrivateKey = t;
};
return e;
}();
cc.ServerConnector = t;
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: "NetConfig"
} ],
ServiceId: [ function(t, e) {
"use strict";
cc._RF.push(e, "9f224uIioxIXYLFncLwJIuk", "ServiceId");
(function() {
cc.ServiceId = cc.Enum({
OLD: 0,
BLOCK_BUSTER: 1,
BLOCK_BUSTER_2: 2,
BLOCK_BUSTER_3: 3,
BLOCK_BUSTER_4: 101
});
}).call(void 0);
cc._RF.pop();
}, {} ],
ServiceName: [ function(t, e) {
"use strict";
cc._RF.push(e, "8806dIJ+tlESbZkWXB+WIhc", "ServiceName");
(function() {
cc.ServiceName = cc.Enum({
BLOCK_BUSTER: "B1",
BLOCK_BUSTER_2: "B2",
BLOCK_BUSTER_3: "B3",
BLOCK_BUSTER_4: "B4"
});
}).call(void 0);
cc._RF.pop();
}, {} ],
SetZIndex: [ function(t, e) {
"use strict";
cc._RF.push(e, "f74d33qIsFLnqhF+m+kFzXV", "SetZIndex");
(function() {
cc.SetZIndex = cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = this;
this.node.on("touchstart", function() {
t.node.zIndex = cc.Config.getInstance().getZINDEX();
}, this.node);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
Seven77Config: [ function(t, e) {
"use strict";
cc._RF.push(e, "c7209tWrNRMVYiFzTB69CFC", "Seven77Config");
e.exports = {
TIME_COLUMN_NORMAL: .4,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .25,
TIME_CALL_STOP_FAST: .8,
TIME_MONEY_EFFECT_JACKPOT: 3,
TIME_MONEY_EFFECT_BIG_WIN: 3,
TIME_MONEY_EFFECT_NORMAL_WIN: 2,
TIME_WAIT_LOST: .8,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1,
TIME_WAIT_LOST_FAST: .5,
TIME_TWEEN_MONEY_FAST: .5
};
cc._RF.pop();
}, {} ],
"Sicbo.Helper": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "73f85MHHAhB3JqwA83z7G20", "Sicbo.Helper");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.getIsSound = function() {
return this.isSound;
};
e.getIsMusic = function() {
return this.isMusic;
};
e.setSound = function(t) {
cc.log("setSound: " + t);
this.isSound = t;
};
e.setMusic = function(t) {
cc.log("setMusic: " + t);
this.isMusic = t;
};
e.isSound = !0;
e.isMusic = !0;
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
SlotAudio: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ba1e4nOYiNO9ISbAIiLkrsf", "SlotAudio");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.button = null;
e.musicBg = null;
e.win = null;
e.bigwin = null;
e.superwin = null;
e.jackpot = null;
e.reelStop = null;
e.reelSpin = null;
return e;
}
r([ a({
type: cc.AudioClip
}) ], e.prototype, "button", void 0);
r([ a({
type: cc.AudioClip
}) ], e.prototype, "musicBg", void 0);
r([ a({
type: cc.AudioClip
}) ], e.prototype, "win", void 0);
r([ a({
type: cc.AudioClip
}) ], e.prototype, "bigwin", void 0);
r([ a({
type: cc.AudioClip
}) ], e.prototype, "superwin", void 0);
r([ a({
type: cc.AudioClip
}) ], e.prototype, "jackpot", void 0);
r([ a({
type: cc.AudioClip
}) ], e.prototype, "reelStop", void 0);
r([ a({
type: cc.AudioClip
}) ], e.prototype, "reelSpin", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
SlotConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "84cc9Q4sTVFTKEL9D2i9gdb", "SlotConfig");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.POS_ITEM = [ 0, 0, 0, 0, 0, 0 ];
e.MAX_ITEM = 11;
e.RATE_BIG_WIN = 50;
e.RATE_SUPER_WIN = 100;
e.TIME_DELAY_NEXT_SPIN = 1;
e.TIME_NEXT_SPIN = 1;
e.TIME_ANIM_WIN = 1.5;
e.TIME_ANIM_BIGWIN = 2;
e.TIME_ANIM_JACKPOT = 300;
e.LINE = [];
return e;
}
r([ a([ cc.Integer ]) ], e.prototype, "POS_ITEM", void 0);
r([ a(cc.Integer) ], e.prototype, "MAX_ITEM", void 0);
r([ a(cc.Integer) ], e.prototype, "RATE_BIG_WIN", void 0);
r([ a(cc.Integer) ], e.prototype, "RATE_SUPER_WIN", void 0);
r([ a(cc.Integer) ], e.prototype, "TIME_DELAY_NEXT_SPIN", void 0);
r([ a(cc.Integer) ], e.prototype, "TIME_NEXT_SPIN", void 0);
r([ a(cc.Integer) ], e.prototype, "TIME_ANIM_WIN", void 0);
r([ a(cc.Integer) ], e.prototype, "TIME_ANIM_BIGWIN", void 0);
r([ a(cc.Integer) ], e.prototype, "TIME_ANIM_JACKPOT", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
SlotConstant: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d1a2581cUlKgb5S9fdc9pEO", "SlotConstant");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.GAME_ID = o.SLOT_CALLBACK_ID = o.SLOT_STATE = o.STATE_X2 = o.SLOT_TYPE_ITEM = o.SLOT_TYPE_SPIN = o.SLOT_TYPE_WIN = o.SLOT_ANIM_PRIORITY = o.SLOT_SELECT_LINE_TYPE = o.SLOT_ROOM_ID = o.SLOT_CMD = void 0;
(function(t) {
t[t.NOTI_JOIN_ROM = 8401] = "NOTI_JOIN_ROM";
t[t.GET_HISTORY = 3001] = "GET_HISTORY";
t[t.JOIN_ROOM = 2e3] = "JOIN_ROOM";
t[t.OUT_ROOM = 3003] = "OUT_ROOM";
t[t.SPIN = 8400] = "SPIN";
t[t.GET_RANK_POT = 1412] = "GET_RANK_POT";
t[t.GET_RANK_BIGWIN = 3002] = "GET_RANK_BIGWIN";
t[t.START_X2 = 8413] = "START_X2";
t[t.SELECT_X2 = 8414] = "SELECT_X2";
t[t.END_X2 = 8415] = "END_X2";
})(o.SLOT_CMD || (o.SLOT_CMD = {}));
(function(t) {
t[t.ROOM_TRIAL = 0] = "ROOM_TRIAL";
t[t.ROOM100 = 1] = "ROOM100";
t[t.ROOM1K = 2] = "ROOM1K";
t[t.ROOM10K = 3] = "ROOM10K";
})(o.SLOT_ROOM_ID || (o.SLOT_ROOM_ID = {}));
(function(t) {
t[t.CHAN = 0] = "CHAN";
t[t.LE = 1] = "LE";
t[t.TATCA = 2] = "TATCA";
})(o.SLOT_SELECT_LINE_TYPE || (o.SLOT_SELECT_LINE_TYPE = {}));
(function(t) {
t[t.ANIM_SINGLE_LINE_WIN = 1] = "ANIM_SINGLE_LINE_WIN";
t[t.ANIM_TONG_KET_FREE_SPIN = 2] = "ANIM_TONG_KET_FREE_SPIN";
t[t.ANIM_FREESPIN = 3] = "ANIM_FREESPIN";
t[t.ANIM_BONUS = 4] = "ANIM_BONUS";
t[t.ANIM_WIN = 5] = "ANIM_WIN";
t[t.ANIM_BIGWIN = 6] = "ANIM_BIGWIN";
t[t.ANIM_SUPERWIN = 7] = "ANIM_SUPERWIN";
t[t.ANIM_JACKPOT = 8] = "ANIM_JACKPOT";
t[t.ANIM_ALL_LINE_WIN = 9] = "ANIM_ALL_LINE_WIN";
t[t.ANIM_EXPAND_WILD = 10] = "ANIM_EXPAND_WILD";
t[t.SHOW_TONG_KET_FREESPIN = 11] = "SHOW_TONG_KET_FREESPIN";
})(o.SLOT_ANIM_PRIORITY || (o.SLOT_ANIM_PRIORITY = {}));
(function(t) {
t[t.BIGWIN = 2] = "BIGWIN";
t[t.WIN = 3] = "WIN";
t[t.JACKPOT = 0] = "JACKPOT";
t[t.SUPERWIN = 1] = "SUPERWIN";
})(o.SLOT_TYPE_WIN || (o.SLOT_TYPE_WIN = {}));
(function(t) {
t[t.SPIN_TYPE_NORMAL = 0] = "SPIN_TYPE_NORMAL";
t[t.SPIN_TYPE_QUICK = 1] = "SPIN_TYPE_QUICK";
})(o.SLOT_TYPE_SPIN || (o.SLOT_TYPE_SPIN = {}));
(function(t) {
t[t.LOSE = 0] = "LOSE";
t[t.IDLE = 1] = "IDLE";
t[t.WIN = 2] = "WIN";
})(o.SLOT_TYPE_ITEM || (o.SLOT_TYPE_ITEM = {}));
(function(t) {
t[t.READY = 1] = "READY";
t[t.PLAYING = 2] = "PLAYING";
t[t.COMPLETE = 3] = "COMPLETE";
})(o.STATE_X2 || (o.STATE_X2 = {}));
(function(t) {
t[t.READY = 0] = "READY";
t[t.SPINING = 1] = "SPINING";
})(o.SLOT_STATE || (o.SLOT_STATE = {}));
(function(t) {
t[t.END_EFFECT_WIN = 0] = "END_EFFECT_WIN";
t[t.END_EFFECT_BIGWIN = 1] = "END_EFFECT_BIGWIN";
t[t.END_EFFECT_SUPERWIN = 2] = "END_EFFECT_SUPERWIN";
t[t.END_EFFECT_JACKPOT = 3] = "END_EFFECT_JACKPOT";
t[t.END_EFFECT_BONUS = 4] = "END_EFFECT_BONUS";
t[t.END_EFFECT_FREESPIN = 5] = "END_EFFECT_FREESPIN";
t[t.END_POPUP_BONUS = 6] = "END_POPUP_BONUS";
t[t.END_POPUP_FREESPIN = 7] = "END_POPUP_FREESPIN";
t[t.END_MINIGAME_BONUS = 8] = "END_MINIGAME_BONUS";
t[t.END_FINAL_FREESPIN = 9] = "END_FINAL_FREESPIN";
t[t.END_MINIGAME_X2 = 10] = "END_MINIGAME_X2";
t[t.END_ANIM_ALL_LINE_WIN = 11] = "END_ANIM_ALL_LINE_WIN";
})(o.SLOT_CALLBACK_ID || (o.SLOT_CALLBACK_ID = {}));
(function(t) {
t[t.BAT_MAN = 60] = "BAT_MAN";
t[t.CHEF = 61] = "CHEF";
t[t.GIANG_HO = 62] = "GIANG_HO";
t[t.PUBG = 63] = "PUBG";
t[t.GODZILLA = 64] = "GODZILLA";
t[t.BLTT = 65] = "BLTT";
t[t.KINGDOM = 66] = "KINGDOM";
t[t.ONEPIECE = 67] = "ONEPIECE";
})(o.GAME_ID || (o.GAME_ID = {}));
cc._RF.pop();
}, {} ],
SlotDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "09444D7RtdPEYJTPihGY70I", "SlotDialog");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtTitle = null;
e.txtContent = null;
e.mCallback = null;
e.mTarget = null;
e.mTime = 0;
e.mTimeout = null;
return e;
}
e.prototype.onDestroy = function() {
clearTimeout(this.mTimeout);
this.mCallback && this.mTarget && this.mCallback.call(this.mTarget);
};
e.prototype.show = function(t, e, o, n) {
var i = this;
void 0 === t && (t = "");
void 0 === e && (e = "");
void 0 === o && (o = null);
void 0 === n && (n = null);
this.txtTitle.string = t;
this.txtContent.string = e;
this.mCallback = o;
this.mTarget = n;
this.mTimeout = setTimeout(function() {
i.node.destroy();
}, 2e3);
};
e.prototype.onBtnOk = function() {
this.node.destroy();
};
r([ a(cc.Label) ], e.prototype, "txtTitle", void 0);
r([ a(cc.Label) ], e.prototype, "txtContent", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
SlotEffect: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "54c9fDM/PVNkq1YhifBczyQ", "SlotEffect");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeJackpot = null;
e.txtMoneyJackpot = null;
e.nodeBigwin = null;
e.txtMoneyBigwin = null;
e.nodeWin = null;
e.txtMoneyWin = null;
e.mSlot = null;
e.mSlotRoom = null;
e.mCallback = null;
e.mTarget = null;
return e;
}
e.prototype.init = function(t) {
this.mSlotRoom = t;
this.mSlot = this.mSlotRoom.mSlot;
};
e.prototype.showJackpot = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
};
e.prototype.showBigWin = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
};
e.prototype.showSuperWin = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
};
e.prototype.showWin = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
};
r([ a(cc.Node) ], e.prototype, "nodeJackpot", void 0);
r([ a(cc.Label) ], e.prototype, "txtMoneyJackpot", void 0);
r([ a(cc.Node) ], e.prototype, "nodeBigwin", void 0);
r([ a(cc.Label) ], e.prototype, "txtMoneyBigwin", void 0);
r([ a(cc.Node) ], e.prototype, "nodeWin", void 0);
r([ a(cc.Label) ], e.prototype, "txtMoneyWin", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
SlotEntity: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "03745drOIBFj5WflukAksDM", "SlotEntity");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.DataSlotHistory = o.DataSlotSpin = o.DataFreespinInfo = o.DataSlotFreespin = o.DataSlotBonus = o.DataSlotLineWin = o.DataSlotRank = o.DataSlotSendSpin = void 0;
o.DataSlotSendSpin = function() {
this.bet = 0;
this.listLine = [];
};
o.DataSlotRank = function() {
this.session = 0;
this.time = 0;
this.dName = "";
this.bet = 0;
this.mw = 0;
this.des = "";
this.gp = 1;
};
o.DataSlotLineWin = function() {
this.idLine = 0;
this.type = 0;
this.listItemWin = [];
};
o.DataSlotBonus = function() {
this.listItem = [];
this.moneyTotalWin = 0;
this.rate = 0;
this.rateSpecial = 0;
};
o.DataSlotFreespin = function() {
this.moneyWin = 0;
this.listItemResult = [];
this.listLineWin = [];
this.typeWin = 2;
this.point = 0;
this.rate = 0;
this.numJackpotX10 = 0;
};
o.DataFreespinInfo = function() {
this.moneyTotalWin = 0;
this.totalSpin = 0;
this.rate = 0;
};
var r = function() {
this.se = 0;
this.moneyWin = 0;
this.moneyJackpot = 0;
this.typeWin = 0;
this.listItemResult = [];
this.listLineWin = [];
this.dataBonus = null;
this.freespinInfo = null;
this.listFreespin = [];
this.point = 0;
this.rate = 0;
this.numJackpotX10 = 0;
};
o.DataSlotSpin = r;
var c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bet = 0;
e.time = 0;
return e;
}
return e;
}(r);
o.DataSlotHistory = c;
cc._RF.pop();
}, {} ],
SlotHandler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "839aaCBNbJGZKXtaIu6/eiR", "SlotHandler");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mSlot = null;
e.mListenerKey = "";
return e;
}
e.prototype.sendPlayTry = function() {
this.mSignalr.send("PlayTry", []);
};
e.prototype.init = function(t) {
this.mSlot = t;
};
e.prototype.connect = function() {};
e.prototype.disconnect = function() {
if (this.mSignalr) {
this.mSignalr.close();
this.mSignalr = void 0;
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
}
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s) {
if (!this.mSlot.isConnect) {
this.mSlot.isConnect = !0;
this.mSlot.connectSuccess();
}
} else {
if (!t.M || !Array.isArray(t.M) || 0 == t.M.length) return;
for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if ("object" == typeof n && "string" == typeof n.M && n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0];
switch (n.M) {
case "joinGame":
this.onJoinGame(i);
break;

case "PlayNow":
this.onPlayNow(i);
break;

case "resultSpin":
this.onSpin(i);
break;

case "message":
this.onMessage(i);
break;

case "GetHistory":
this.onHistory(i);
break;

case "honor":
this.onGetRank(i);
break;

case "UpdateJackpot":
this.onUpdateJackpot(i);
break;

case "GetEventJackpot":
this.onGetPotInfo(i);
}
}
}
}
};
e.prototype.onJoinGame = function() {};
e.prototype.onPlayNow = function() {};
e.prototype.onSpin = function() {};
e.prototype.onUpdateJackpot = function(t) {
if (this.mSlot) {
var e = JSON.parse(t);
this.mSlot.onUpdatePot(e);
}
};
e.prototype.onMessage = function() {};
e.prototype.onHistory = function() {};
e.prototype.onGetRank = function() {};
e.prototype.onGetPotInfo = function() {};
e.prototype.send = function(t) {
for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
this.mSignalr.send(t, e);
};
e.prototype.sendGetJackPot = function() {};
e.prototype.sendJoinRoomTest = function() {
this.mSignalr.send("JoinGameTest");
};
e.prototype.sendJoinRoom = function() {
this.mSignalr.send("GetEventJackpot");
this.mSignalr.send("GetJackpot");
};
e.prototype.sendSpin = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
};
e.prototype.sendSpinTest = function(t, e) {
this.mSignalr.send("SpinTest", [ 1, t, e, "2,2,2,2,2,1,3,3,4,5,6,7,7,7,4" ]);
};
e.prototype.sendGetRank = function() {
this.mSignalr.send("GetHistoryJackPot_v2");
};
e.prototype.sendHistory = function(t) {
this.mSignalr.send("GetHistory", [ t ]);
};
e.prototype.sendPlayNow = function() {
this.mSignalr.send("PlayGame", [ 1, this.mSlot.mRoomId ]);
};
e.prototype.sendEndBonus = function(t, e) {
this.mSignalr.send("FinishBonusGame", [ t, e ]);
};
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
SlotHistoryCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "33fd6vEabtBBJm+1y8L5zPG", "SlotHistoryCell");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./util/FormatUtil"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtSession = null;
e.txtTime = null;
e.txtMoneyTotalBet = null;
e.txtMoneyWin = null;
e.txtLineSelect = null;
e.nodeBg = null;
e.mIdx = 0;
return e;
}
e.prototype.setData = function(t, e) {
this.mIdx = e;
this.txtSession.string = "#" + t.SpinID;
this.txtTime.string = c.default.formatDateTime(t.CreatedTime, !0, !0);
this.txtMoneyTotalBet.string = c.default.formatNumber(t.BetValue);
this.txtMoneyWin.string = c.default.formatNumber(t.TotalPrizeValue);
this.txtLineSelect.string = t.LineData.split(",").length;
this.nodeBg && (this.nodeBg.active = e % 2 == 0);
};
e.prototype.onBtnDetail = function() {};
r([ u(cc.Label) ], e.prototype, "txtSession", void 0);
r([ u(cc.Label) ], e.prototype, "txtTime", void 0);
r([ u(cc.Label) ], e.prototype, "txtMoneyTotalBet", void 0);
r([ u(cc.Label) ], e.prototype, "txtMoneyWin", void 0);
r([ u(cc.Label) ], e.prototype, "txtLineSelect", void 0);
r([ u(cc.Node) ], e.prototype, "nodeBg", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./util/FormatUtil": "FormatUtil"
} ],
SlotHistory: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b0573+XOjRMGpe+IAMUvjCq", "SlotHistory");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrollview = null;
e.cellHistory = null;
e.heightItem = 0;
e.spacing = 0;
e.spawnCount = 0;
e.bufferZone = 0;
e.lastContentPosY = 0;
e.updateTimer = 0;
e.updateInterval = .2;
e.mListDataCell = [];
e.mListCell = [];
e.mSlot = null;
return e;
}
e.prototype.init = function(t) {
this.mSlot = t;
this.scrollview.content.destroyAllChildren();
};
e.prototype.update = function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.bufferZone, o = this.scrollview.content.y < this.lastContentPosY, n = (this.heightItem + this.spacing) * this.mListCell.length, i = 0; i < this.mListCell.length; ++i) {
var r = this.mListCell[i].node, c = this.getPositionInView(r);
if (o) {
if (c.y < -e && r.y + n < 0) {
r.y = r.y + n;
var s = this.mListCell[i], a = s.mIdx - this.mListCell.length;
s.setData(this.mListDataCell[a], a);
}
} else if (c.y > e && r.y - n > -this.scrollview.content.height) {
r.y = r.y - n;
var u = this.mListCell[i];
a = u.mIdx + this.mListCell.length;
u.setData(this.mListDataCell[a], a);
}
}
this.lastContentPosY = this.scrollview.content.y;
}
};
e.prototype.getPositionInView = function(t) {
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollview.node.convertToNodeSpaceAR(e);
};
e.prototype.setData = function(t, e) {
this.mListDataCell = e;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var o = e.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
for (var n = this.spawnCount <= o ? this.spawnCount : o, i = 0; i < n; i++) {
var r = cc.instantiate(this.cellHistory), c = r.getComponent("SlotHistoryCell");
c.setData(this.mListDataCell[i], i);
var s = -c.node.height * (.5 + i) - this.spacing * (i + 1);
c.node.setPosition(0, s);
this.scrollview.content.addChild(r);
this.mListCell.push(c);
}
};
e.prototype.onBtnClose = function() {
this.node.destroy();
};
r([ a(cc.ScrollView) ], e.prototype, "scrollview", void 0);
r([ a(cc.Prefab) ], e.prototype, "cellHistory", void 0);
r([ a(cc.Integer) ], e.prototype, "heightItem", void 0);
r([ a(cc.Integer) ], e.prototype, "spacing", void 0);
r([ a(cc.Integer) ], e.prototype, "spawnCount", void 0);
r([ a(cc.Integer) ], e.prototype, "bufferZone", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {} ],
SlotItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e7c48Qa6oRBYKnRwAcm5K60", "SlotItem");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./SlotConstant"), s = t("./util/Util"), a = cc._decorator, u = a.ccclass, l = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprItem = null;
e.skeItem = null;
e.mSlotReel = null;
e.mSlot = null;
e.mSlotRoom = null;
e.mId = -1;
e.mIndex = -1;
e.mTypeItem = 0;
return e;
}
e.prototype.init = function(t) {
this.mSlotReel = t;
this.mSlotRoom = this.mSlotReel.mSlotMachine.mSlotRoom;
this.mSlot = this.mSlotRoom.mSlot;
var e = this.getRandomId();
this.setId(e);
};
e.prototype.setId = function(t) {
if (this.mId != t) {
this.mId = t;
this.setSkeData(this.mId);
this.setFrameItem(this.mId);
}
};
e.prototype.getRandomId = function() {
return s.default.random(0, this.mSlot.mSlotConfig.MAX_ITEM - 1);
};
e.prototype.setDefault = function() {
this.showIdle();
};
e.prototype.setSkeData = function() {};
e.prototype.setFrameItem = function() {};
e.prototype.showLose = function() {
if (this.mTypeItem != c.SLOT_TYPE_ITEM.LOSE) {
this.mTypeItem = c.SLOT_TYPE_ITEM.LOSE;
this.sprItem && (this.sprItem.node.color = cc.color(100, 100, 100));
this.skeItem && (this.skeItem.node.color = cc.color(100, 100, 100));
}
};
e.prototype.showIdle = function() {
this.mTypeItem = c.SLOT_TYPE_ITEM.IDLE;
this.skeItem && (this.skeItem.node.color = cc.color(255, 255, 255));
this.sprItem && (this.sprItem.node.color = cc.color(255, 255, 255));
};
e.prototype.showWin = function() {
if (this.mTypeItem != c.SLOT_TYPE_ITEM.WIN) {
this.mTypeItem = c.SLOT_TYPE_ITEM.WIN;
this.sprItem && (this.sprItem.node.color = cc.color(255, 255, 255));
this.skeItem && (this.skeItem.node.color = cc.color(255, 255, 255));
}
};
e.prototype.setIndex = function(t) {
this.mIndex = -3 == t ? this.mSlotReel.listItem.length - 1 : -2 == t ? this.mSlotReel.listItem.length - 2 : -1 == t ? this.mSlotReel.listItem.length - 3 : t;
};
e.prototype.getIndex = function() {
return this.mIndex;
};
e.prototype.visibleSprItem = function(t) {
this.sprItem ? this.sprItem.node.active = t : this.sprItem = null;
};
e.prototype.visibleSkeItem = function(t) {
this.skeItem ? this.skeItem.node.active = t : this.skeItem = null;
};
r([ l(cc.Sprite) ], e.prototype, "sprItem", void 0);
r([ l(sp.Skeleton) ], e.prototype, "skeItem", void 0);
return r([ u ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./SlotConstant": "SlotConstant",
"./util/Util": "Util"
} ],
SlotLine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fcf78LtHDVOI5U7CqjsjTxO", "SlotLine");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.circle = null;
e.txtLine = null;
e.line = null;
e.mSlotMachine = null;
e.mSlot = null;
e.mListSlotItem = [];
e.mIsSelect = !0;
e.mId = 0;
return e;
}
e.prototype.updateSlotItem = function(t) {
this.mListSlotItem = t;
};
e.prototype.init = function(t) {
this.mSlotMachine = t;
this.mSlot = this.mSlotMachine.mSlot;
this.mIsSelect = !0;
this.setDefault();
};
e.prototype.setDefault = function() {
this.showIdle();
};
e.prototype.setId = function(t) {
this.mId = t;
};
e.prototype.getId = function() {
return this.mId;
};
e.prototype.setSelect = function(t) {
this.mIsSelect = t;
if (this.mIsSelect) {
this.circle && (this.circle.color = cc.color(255, 255, 0));
this.txtLine && (this.txtLine.node.color = cc.color(255, 255, 255));
} else {
this.circle && (this.circle.color = cc.color(100, 100, 100));
this.txtLine && (this.txtLine.node.color = cc.color(100, 100, 100));
}
};
e.prototype.isSelect = function() {
return this.mIsSelect;
};
e.prototype.showFocus = function() {
this.circle && (this.circle.color = cc.color(255, 255, 0));
};
e.prototype.showWin = function() {
this.txtLine && (this.txtLine.node.color = cc.color(255, 255, 0));
if (this.circle) {
this.circle.color = cc.color(255, 255, 0);
this.circle.active = !0;
}
if (this.line) {
this.line.active = !0;
this.line.opacity = 255;
this.line.stopAllActions();
this.line.runAction(cc.fadeTo(1.2, 0));
}
};
e.prototype.showLose = function() {
this.txtLine && (this.txtLine.node.color = cc.color(255, 255, 255));
this.line && (this.line.active = !1);
};
e.prototype.showIdle = function() {
if (this.mIsSelect) {
this.txtLine && (this.txtLine.node.color = cc.color(255, 255, 255));
if (this.circle) {
this.circle.color = cc.color(255, 255, 255);
this.circle.active = !1;
}
} else this.txtLine && (this.txtLine.node.color = cc.color(100, 100, 100));
this.line && (this.line.active = !1);
};
r([ a(cc.Node) ], e.prototype, "circle", void 0);
r([ a(cc.Label) ], e.prototype, "txtLine", void 0);
r([ a(cc.Node) ], e.prototype, "line", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
SlotMachine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3408dM/xXBFaKoHZQ6HdxfD", "SlotMachine");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./SlotReel"), s = t("./SlotLine"), a = cc._decorator, u = a.ccclass, l = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listSlotReel = [];
e.listSlotLine = [];
e.mListSlotItemResult = [];
e.mSlot = null;
e.mSlotRoom = null;
e.mAudioIdSpin = 0;
return e;
}
e.prototype.init = function(t) {
this.mSlotRoom = t;
this.mSlot = this.mSlotRoom.mSlot;
for (var e = 0; e < this.listSlotReel.length; e++) {
this.listSlotReel[e].init(this);
this.listSlotReel[e].setId(e);
}
for (e = 0; e < this.listSlotLine.length; e++) {
this.listSlotLine[e].init(this);
this.listSlotLine[e].setId(e + 1);
}
};
e.prototype.setDefault = function() {
for (var t = 0; t < this.listSlotLine.length; t++) this.listSlotLine[t].setDefault();
for (t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].setDefault();
};
e.prototype.spin = function() {
this.setDefault();
};
e.prototype.stopSpin = function(t) {
void 0 === t && (t = null);
};
e.prototype.getSlotLineById = function(t) {
for (var e = 0; e < this.listSlotLine.length; e++) if (t === this.listSlotLine[e].getId()) return this.listSlotLine[e];
return null;
};
e.prototype.getNumLineSelect = function() {
for (var t = [], e = 0; e < this.listSlotLine.length; e++) this.listSlotLine[e].isSelect() && t.push(this.listSlotLine[e].getId());
return t;
};
e.prototype.showLineWin = function() {};
e.prototype.updateAllItemAllLine = function() {};
e.prototype.updateAllLine = function() {};
e.prototype.getListLineSelect = function() {};
r([ l([ c.default ]) ], e.prototype, "listSlotReel", void 0);
r([ l([ s.default ]) ], e.prototype, "listSlotLine", void 0);
return r([ u ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./SlotLine": "SlotLine",
"./SlotReel": "SlotReel"
} ],
SlotParse: [ function(t, e) {
"use strict";
cc._RF.push(e, "bb46cggrFBDaJ9XRlRsenCK", "SlotParse");
cc._RF.pop();
}, {} ],
SlotRankCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6643ainTQVB5oaLFCCni+aI", "SlotRankCell");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./util/FormatUtil"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprBg = null;
e.txtBet = null;
e.txtTime = null;
e.txtUserName = null;
e.txtWin = null;
e.txtDecription = null;
e.mIdx = 0;
return e;
}
e.prototype.setData = function(t, e) {
console.log(t);
1 == t.RoomId && (t.BetValue = 100);
2 == t.RoomId && (t.BetValue = 1e3);
3 == t.RoomId && (t.BetValue = 1e4);
this.mIdx = e;
this.txtTime.string = c.default.formatDateTime(t.CreatedTime, !0, !0);
this.txtUserName.string = t.Username;
this.txtWin.string = c.default.formatNumber(t.PrizeValue);
this.txtDecription.string = t.IsJackport ? "Nổ hũ" : "Thắng Lớn";
this.txtBet.string = c.default.formatNumber(t.BetValue);
this.sprBg && (this.sprBg.active = e % 2 == 0);
};
r([ u(cc.Node) ], e.prototype, "sprBg", void 0);
r([ u(cc.Label) ], e.prototype, "txtBet", void 0);
r([ u(cc.Label) ], e.prototype, "txtTime", void 0);
r([ u(cc.Label) ], e.prototype, "txtUserName", void 0);
r([ u(cc.Label) ], e.prototype, "txtWin", void 0);
r([ u(cc.Label) ], e.prototype, "txtDecription", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./util/FormatUtil": "FormatUtil"
} ],
SlotRank: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ad71e8aUXZPToSeEle73leW", "SlotRank");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrollview = null;
e.cellRank = null;
e.btnBigwin = null;
e.btnJackpot = null;
e.heightItem = 0;
e.spacing = 0;
e.spawnCount = 0;
e.bufferZone = 0;
e.lastContentPosY = 0;
e.updateTimer = 0;
e.updateInterval = .2;
e.mState = 0;
e.mListDataCell = [];
e.mListCell = [];
e.mSlot = null;
e.listDataBigwinCache = [];
e.listDataJackpotCache = [];
return e;
}
e.prototype.init = function(t) {
this.mSlot = t;
this.scrollview.content.destroyAllChildren();
};
e.prototype.update = function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.bufferZone, o = this.scrollview.content.y < this.lastContentPosY, n = (this.heightItem + this.spacing) * this.mListCell.length, i = 0; i < this.mListCell.length; ++i) {
var r = this.mListCell[i].node, c = this.getPositionInView(r);
if (o) {
if (c.y < -e && r.y + n < 0) {
r.y = r.y + n;
var s = this.mListCell[i], a = s.mIdx - this.mListCell.length;
s.setData(this.mListDataCell[a], a);
}
} else if (c.y > e && r.y - n > -this.scrollview.content.height) {
r.y = r.y - n;
var u = this.mListCell[i];
a = u.mIdx + this.mListCell.length;
u.setData(this.mListDataCell[a], a);
}
}
this.lastContentPosY = this.scrollview.content.y;
}
};
e.prototype.getPositionInView = function(t) {
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollview.node.convertToNodeSpaceAR(e);
};
e.prototype.setData = function(t) {
this.mListDataCell = t;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var e = t.length;
this.scrollview.content.height = e * (this.heightItem + this.spacing) + this.spacing;
for (var o = this.spawnCount <= e ? this.spawnCount : e, n = 0; n < o; n++) {
var i = cc.instantiate(this.cellRank), r = i.getComponent("SlotRankCell");
r.setData(this.mListDataCell[n], n);
var c = -i.height * (.5 + n) - this.spacing * (n + 1);
i.setPosition(0, c);
this.mListCell.push(r);
this.scrollview.content.addChild(i);
}
};
e.prototype.onBtnThanglon = function() {
this.mState = 0;
this.setData(this.listDataBigwinCache);
};
e.prototype.onBtnNohu = function() {
this.mState = 1;
this.setData(this.listDataJackpotCache);
};
e.prototype.onBtnClose = function() {
this.node.destroy();
};
r([ a(cc.ScrollView) ], e.prototype, "scrollview", void 0);
r([ a(cc.Prefab) ], e.prototype, "cellRank", void 0);
r([ a(cc.Toggle) ], e.prototype, "btnBigwin", void 0);
r([ a(cc.Toggle) ], e.prototype, "btnJackpot", void 0);
r([ a(cc.Integer) ], e.prototype, "heightItem", void 0);
r([ a(cc.Integer) ], e.prototype, "spacing", void 0);
r([ a(cc.Integer) ], e.prototype, "spawnCount", void 0);
r([ a(cc.Integer) ], e.prototype, "bufferZone", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {} ],
SlotReel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "93c68TJTwZP3ZsfLTEFRsSW", "SlotReel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./SlotItem"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listItem = [];
e.mSlotMachine = null;
e.mSlot = null;
e.mId = -1;
e.listIdItemResult = [];
return e;
}
e.prototype.init = function(t) {
this.mSlotMachine = t;
this.mSlot = this.mSlotMachine.mSlot;
for (var e = 0; e < this.listItem.length; e++) {
this.listItem[e].mIndex = e;
this.listItem[e].init(this);
}
};
e.prototype.spin = function() {
this.setDefault();
};
e.prototype.stopSpin = function() {};
e.prototype.setIdItemResult = function(t) {
this.listIdItemResult = t;
};
e.prototype.setId = function(t) {
this.mId = t;
};
e.prototype.setDefault = function() {
for (var t = 0; t < this.listItem.length; t++) this.listItem[t].setDefault();
};
e.prototype.getSlotItemByIndex = function(t) {
for (var e = 0; e < this.listItem.length; e++) if (this.listItem[e].getIndex() == t) return this.listItem[e];
return null;
};
e.prototype.getId = function() {
return this.mId;
};
r([ u([ c.default ]) ], e.prototype, "listItem", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./SlotItem": "SlotItem"
} ],
SlotRewardPool: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b7180zbRY9AXIMJKBPSeR0z", "SlotRewardPool");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./SlotConstant"), s = cc._decorator, a = s.ccclass, u = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mArrayReward = [];
return e;
}
e.prototype.setDefault = function() {
this.mArrayReward = [];
};
e.prototype.get = function() {
var t = null;
this.mArrayReward.length > 0 && (t = this.mArrayReward.pop());
return t;
};
e.prototype.push = function(t) {
if (0 === this.mArrayReward.length) this.mArrayReward.push(t); else {
this.mArrayReward.push(t);
this.mArrayReward = this.mArrayReward.sort(function(t, e) {
return t - e;
});
}
};
e.prototype.isEmptyReward = function() {
for (var t = 0; t < this.mArrayReward.length; t++) if (this.mArrayReward[t] === c.SLOT_ANIM_PRIORITY.ANIM_BIGWIN || this.mArrayReward[t] === c.SLOT_ANIM_PRIORITY.ANIM_FREESPIN || this.mArrayReward[t] === c.SLOT_ANIM_PRIORITY.ANIM_BONUS || this.mArrayReward[t] === c.SLOT_ANIM_PRIORITY.ANIM_SUPERWIN || this.mArrayReward[t] === c.SLOT_ANIM_PRIORITY.ANIM_WIN || this.mArrayReward[t] === c.SLOT_ANIM_PRIORITY.ANIM_JACKPOT) return !1;
return !0;
};
e.prototype.clearAnim = function(t) {
for (var e = -1, o = 0; o < this.mArrayReward.length; o++) if (this.mArrayReward[o] == t) {
e = o;
break;
}
-1 != e && this.mArrayReward.splice(e, 1);
};
e.prototype.clearAllAnim = function() {
this.mArrayReward = [];
};
e.prototype.isAnimById = function(t) {
for (var e = 0; e < this.mArrayReward.length; e++) if (this.mArrayReward[e] == t) return !0;
return !1;
};
return r([ a ], e);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {
"./SlotConstant": "SlotConstant"
} ],
SlotRoomUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5b1d5yuV4FFn6z71iTpNEmT", "SlotRoomUI");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./util/FormatUtil"), s = t("./util/NumberUtil"), a = cc._decorator, u = a.ccclass, l = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtPot = null;
e.txtSession = null;
e.txtUserMoney = null;
e.txtLineSelect = null;
e.txtTotalWin = null;
e.txtTotalBet = null;
e.txtBet = null;
e.btnQuickspin = null;
e.btnSpin = null;
e.btnAutoSpin = null;
e.btnBack = null;
e.btnStopAuto = null;
e.btnMusic = null;
e.btnSound = null;
return e;
}
e.prototype.updatePot = function(t) {
this.txtPot && t && t > 0 && fzgui.UINumericLabelHelper.scheduleForLabel(this.txtPot, t, .3);
};
e.prototype.updateSession = function(t) {
if (t && this.txtSession) {
this.txtSession.node.active = !0;
t ? this.txtSession.string = "#" + t.toString() : this.txtSession.node.active = !1;
}
};
e.prototype.updateUserMoney = function(t) {
this.txtUserMoney && this.txtUserMoney.setNumber(t);
};
e.prototype.updateLineSelect = function(t) {
this.txtLineSelect ? this.txtLineSelect.string = t.toString() : this.txtLineSelect = null;
};
e.prototype.updateTotalWin = function(t) {
this.txtTotalWin ? this.txtTotalWin.setNumber(t) : this.txtTotalWin = null;
};
e.prototype.updateTotalBet = function(t) {
this.txtTotalBet ? this.txtTotalBet.string = c.default.formatNumber(t) : this.txtTotalBet = null;
};
e.prototype.updateBet = function(t) {
this.txtBet ? this.txtBet.string = c.default.formatNumber(t) : this.txtBet = null;
};
e.prototype.interactableBtnSpin = function(t) {
this.btnSpin ? this.btnSpin.interactable = t : this.btnSpin = null;
};
e.prototype.interactableBtnAutoSpin = function(t) {
this.btnAutoSpin ? this.btnAutoSpin.interactable = t : this.btnAutoSpin = null;
};
e.prototype.interactableQuickspin = function(t) {
this.btnQuickspin ? this.btnQuickspin.interactable = t : this.btnQuickspin = null;
};
e.prototype.interactableBtnBack = function(t) {
this.btnBack ? this.btnBack.interactable = t : this.btnBack = null;
};
e.prototype.visibleBtnSpin = function(t) {
this.btnSpin ? this.btnSpin.node.active = t : this.btnSpin = null;
};
e.prototype.visibleBtnStopSpin = function(t) {
this.btnStopAuto ? this.btnStopAuto.node.active = t : this.btnStopAuto = null;
};
e.prototype.visibleBtnAutoSpin = function(t) {
this.btnAutoSpin ? this.btnAutoSpin.node.active = t : this.btnAutoSpin = null;
};
e.prototype.visibleBtnQuickSpin = function(t) {
this.btnQuickspin ? this.btnQuickspin.node.active = t : this.btnQuickspin = null;
};
e.prototype.isQuickSpin = function() {
return !!this.btnQuickspin && this.btnQuickspin;
};
r([ l(cc.Label) ], e.prototype, "txtPot", void 0);
r([ l(cc.Label) ], e.prototype, "txtSession", void 0);
r([ l(s.default) ], e.prototype, "txtUserMoney", void 0);
r([ l(cc.Label) ], e.prototype, "txtLineSelect", void 0);
r([ l(s.default) ], e.prototype, "txtTotalWin", void 0);
r([ l(cc.Label) ], e.prototype, "txtTotalBet", void 0);
r([ l(cc.Label) ], e.prototype, "txtBet", void 0);
r([ l(cc.Button) ], e.prototype, "btnQuickspin", void 0);
r([ l(cc.Button) ], e.prototype, "btnSpin", void 0);
r([ l(cc.Button) ], e.prototype, "btnAutoSpin", void 0);
r([ l(cc.Button) ], e.prototype, "btnBack", void 0);
r([ l(cc.Button) ], e.prototype, "btnStopAuto", void 0);
r([ l(cc.Toggle) ], e.prototype, "btnMusic", void 0);
r([ l(cc.Toggle) ], e.prototype, "btnSound", void 0);
return r([ u ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./util/FormatUtil": "FormatUtil",
"./util/NumberUtil": "NumberUtil"
} ],
SlotRoom_Base_RR: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3cf7cAnbX1MY49D3N02bvtE", "SlotRoom_Base_RR");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./SlotRoomUI"), s = t("./SlotEffect"), a = t("./SlotMachine"), u = t("./SlotRewardPool"), l = t("./SlotConstant"), p = t("./util/AudioUtil"), h = cc._decorator, f = h.ccclass, d = h.property, _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlotRewardPool = null;
e.mSlotEffect = null;
e.mSlotMachine = null;
e.mSlotRoomUI = null;
e.mSlot = null;
e.mUserMoney = 0;
e.mMoneyWin = 0;
e.mDataSpin = null;
e.mIsAutoSpin = !1;
e.mState = 0;
e.mTimeoutNextSpin = null;
e.mIsQuickSpin = !1;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.onDestroy = function() {
clearTimeout(this.mTimeoutNextSpin);
};
e.prototype.init = function(t) {
this.mSlot = t;
this.mSlotEffect.init(this);
this.mSlotMachine.init(this);
this.updateTotalWin(this.mMoneyWin);
this.updateTotalBet();
this.updateLineSelect(this.mSlotMachine.getNumLineSelect());
this.updateBet(this.mSlot.getMoneyBet());
this.updateUserMoney(this.mUserMoney);
this.onUpdatePot(this.mSlot.mListPot[this.mSlot.getIdxPot()]);
};
e.prototype.onUpdatePot = function(t) {
void 0 === t && (t = 0);
t && this.mSlotRoomUI.updatePot(t);
};
e.prototype.setDefault = function() {
this.node.stopAllActions();
this.mMoneyWin = 0;
this.updateTotalWin(this.mMoneyWin);
this.mDataSpin = null;
this.mSlotRewardPool.clearAllAnim();
this.mSlotMachine.setDefault();
};
e.prototype.spin = function() {
var t = this;
this.setDefault();
this.node.runAction(cc.sequence(cc.delayTime(.7), cc.callFunc(function() {
t.mSlotMachine.spin();
}, this)));
this.mState = l.SLOT_STATE.SPINING;
this.mSlotRoomUI.interactableBtnSpin(!1);
this.mSlotRoomUI.interactableBtnBack(!1);
};
e.prototype.stopSpin = function(t) {
this.mDataSpin = t;
};
e.prototype.showError = function(t) {
this.stopSpin(t);
this.mSlotRoomUI.interactableBtnBack(!0);
};
e.prototype.updateTotalWin = function(t) {
this.mMoneyWin += t;
this.mSlotRoomUI.updateTotalWin(this.mMoneyWin);
};
e.prototype.updateBet = function(t) {
this.mSlotRoomUI.updateBet(t);
};
e.prototype.updateTotalBet = function() {
var t = this.getTotalBet();
this.mSlotRoomUI.updateTotalBet(t);
};
e.prototype.updateLineSelect = function(t) {
this.mSlotRoomUI.updateLineSelect(t.length);
this.updateTotalBet();
};
e.prototype.updateUserMoney = function(t) {
this.mUserMoney = t;
this.mSlotRoomUI.updateUserMoney(t);
};
e.prototype.updateSession = function(t) {
this.mSlotRoomUI.updateSession(t);
};
e.prototype.getTotalBet = function() {
return this.mSlot.getMoneyBet() * this.mSlotMachine.getNumLineSelect().length;
};
e.prototype.onBtnAll = function(t, e) {
console.log("onBtnAll", e);
p.default && this.mSlot && this.mSlot.mSlotAudio && this.mSlot.mSlotAudio.button && p.default.playSound(this.mSlot.mSlotAudio.button, this.mSlot.mIsSound, !1, 1);
switch (e) {
case "spin":
this.onBtnSpin();
break;

case "stop_spin":
this.onBtnStopSpin();
break;

case "auto_spin":
if (this.mSlot.isTrial()) {
this.mSlot.mTooltip.show("Tính năng không sử dụng trong chơi thử");
return;
}
this.onBtnAutoSpin();
break;

case "quick_spin":
if (this.mSlot.isTrial()) {
this.mSlot.mTooltip.show("Tính năng không sử dụng trong chơi thử");
return;
}
this.onBtnQuickSpin();
break;

case "guide":
this.onBtnGuide();
break;

case "history":
this.onBtnHistory();
break;

case "rank":
this.onBtnRank();
break;

case "select_line":
if (this.mSlot.isTrial()) {
this.mSlot.mTooltip.show("Tính năng không sử dụng trong chơi thử");
return;
}
this.onBtnSelectLine();
break;

case "add_bet":
if (this.mSlot.isTrial()) {
this.mSlot.mTooltip.show("Tính năng không sử dụng trong chơi thử");
return;
}
this.onBtnAddBet();
break;

case "sub_bet":
this.onBtnSubBet();
break;

case "back":
this.onBtnBack();
break;

case "x2":
this.onBtnX2();
break;

case "setting":
this.onBtnSetting();
break;

case "sound":
this.mSlotRoomUI.btnSound._pressed && this.onBtnSound();
break;

case "music":
this.mSlotRoomUI.btnMusic._pressed && this.onBtnMusic();
}
};
e.prototype.onBtnSpin = function() {
this.mState == l.SLOT_STATE.READY ? this.mUserMoney < this.getTotalBet() ? this.mSlot.mTooltip.show("Số dư không đủ để quay") : this.mState == l.SLOT_STATE.READY && this.spin() : this.mSlot.mTooltip.show("Chưa hết phiên quay");
};
e.prototype.onBtnAutoSpin = function() {
this.mIsAutoSpin = !0;
this.mSlotRoomUI.visibleBtnStopSpin(!0);
this.mSlotRoomUI.visibleBtnAutoSpin(!1);
this.mSlotRoomUI.visibleBtnQuickSpin(!1);
this.mState == l.SLOT_STATE.READY ? this.spin() : this.mState != l.SLOT_STATE.READY ? this.mSlot.mTooltip.show("Không quay được khi chưa kết thúc phiên") : this.mUserMoney < this.getTotalBet() && this.mSlot.mTooltip.show("Số dư không đủ để quay");
};
e.prototype.onBtnStopSpin = function() {
this.mSlotRoomUI.visibleBtnStopSpin(!1);
this.mSlotRoomUI.visibleBtnAutoSpin(!0);
this.mSlotRoomUI.visibleBtnQuickSpin(!0);
this.mIsAutoSpin = !1;
this.mIsQuickSpin = !1;
};
e.prototype.onBtnQuickSpin = function() {
this.mIsQuickSpin = !0;
};
e.prototype.onBtnGuide = function() {};
e.prototype.onBtnHistory = function() {};
e.prototype.onBtnRank = function() {};
e.prototype.onBtnSelectLine = function() {
fzgui.BundleManager.instance.getPrefabFromBundle("games/slotgame/slotpubg/prefabs/slot3SelectLine", "SlotRungRam", function(t) {
fzgui.UIPopupManager.instance.showPopupFromPrefab(t);
});
};
e.prototype.onBtnAddBet = function() {};
e.prototype.onBtnSubBet = function() {};
e.prototype.onBtnBack = function() {};
e.prototype.onBtnX2 = function() {};
e.prototype.onBtnSetting = function() {};
e.prototype.onBtnSound = function() {
this.mSlot.mIsSound = this.mSlotRoomUI.btnSound.isChecked;
if (this.mSlot.mIsSound) cc.sys.localStorage.setItem(this.mSlot.keySound, 1); else {
cc.sys.localStorage.setItem(this.mSlot.keySound, 2);
p.default.stopAllSounds();
}
};
e.prototype.onBtnMusic = function() {
this.mSlot.mIsMusic = this.mSlotRoomUI.btnMusic.isChecked;
if (this.mSlot.mIsMusic) {
cc.sys.localStorage.setItem(this.mSlot.keyMusic, 1);
p.default && this.mSlot.mSlotAudio && this.mSlot.mSlotAudio.musicBg && p.default.playMusic(this.mSlot.mSlotAudio.musicBg, this.mSlot.mIsMusic, !0);
} else {
cc.sys.localStorage.setItem(this.mSlot.keyMusic, 2);
p.default.stopMusic();
}
};
r([ d(u.default) ], e.prototype, "mSlotRewardPool", void 0);
r([ d(s.default) ], e.prototype, "mSlotEffect", void 0);
r([ d(a.default) ], e.prototype, "mSlotMachine", void 0);
r([ d(c.default) ], e.prototype, "mSlotRoomUI", void 0);
return r([ f ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"./SlotConstant": "SlotConstant",
"./SlotEffect": "SlotEffect",
"./SlotMachine": "SlotMachine",
"./SlotRewardPool": "SlotRewardPool",
"./SlotRoomUI": "SlotRoomUI",
"./util/AudioUtil": "AudioUtil"
} ],
SlotRoom: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "25bb7YiL9JAnLbwEwf7bBCE", "SlotRoom");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./SlotRoomUI"), s = t("./SlotEffect"), a = t("./SlotMachine"), u = t("./SlotRewardPool"), l = t("./SlotConstant"), p = t("./util/AudioUtil"), h = cc._decorator, f = h.ccclass, d = h.property, _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlotRewardPool = null;
e.mSlotEffect = null;
e.mSlotMachine = null;
e.mSlotRoomUI = null;
e.mSlot = null;
e.mUserMoney = 0;
e.mMoneyWin = 0;
e.mDataSpin = null;
e.mIsAutoSpin = !1;
e.mState = 0;
e.mTimeoutNextSpin = null;
e.mIsQuickSpin = !1;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.onDestroy = function() {
clearTimeout(this.mTimeoutNextSpin);
};
e.prototype.init = function(t) {
this.mSlot = t;
this.mSlotEffect.init(this);
this.mSlotMachine.init(this);
this.updateTotalWin(this.mMoneyWin);
this.updateTotalBet();
this.updateLineSelect(this.mSlotMachine.getNumLineSelect());
this.updateBet(this.mSlot.getMoneyBet());
this.updateUserMoney(this.mUserMoney);
this.onUpdatePot(this.mSlot.mListPot[this.mSlot.getIdxPot()]);
};
e.prototype.onUpdatePot = function(t) {
void 0 === t && (t = 0);
t && this.mSlotRoomUI.updatePot(t);
};
e.prototype.setDefault = function() {
this.node.stopAllActions();
this.mMoneyWin = 0;
this.updateTotalWin(this.mMoneyWin);
this.mDataSpin = null;
this.mSlotRewardPool.clearAllAnim();
this.mSlotMachine.setDefault();
};
e.prototype.spin = function() {
var t = this;
this.setDefault();
this.node.runAction(cc.sequence(cc.delayTime(.7), cc.callFunc(function() {
t.mSlotMachine.spin();
}, this)));
this.mState = l.SLOT_STATE.SPINING;
this.mSlotRoomUI.interactableBtnSpin(!1);
this.mSlotRoomUI.interactableBtnBack(!1);
};
e.prototype.stopSpin = function(t) {
this.mDataSpin = t;
};
e.prototype.showError = function(t) {
this.stopSpin(t);
this.mSlotRoomUI.interactableBtnBack(!0);
};
e.prototype.updateTotalWin = function(t) {
this.mMoneyWin += t;
this.mSlotRoomUI.updateTotalWin(this.mMoneyWin);
};
e.prototype.updateBet = function(t) {
this.mSlotRoomUI.updateBet(t);
};
e.prototype.updateTotalBet = function() {
var t = this.getTotalBet();
this.mSlotRoomUI.updateTotalBet(t);
};
e.prototype.updateLineSelect = function(t) {
this.mSlotRoomUI.updateLineSelect(t.length);
this.updateTotalBet();
};
e.prototype.updateUserMoney = function(t) {
this.mUserMoney = t;
this.mSlotRoomUI.updateUserMoney(t);
};
e.prototype.updateSession = function(t) {
this.mSlotRoomUI.updateSession(t);
};
e.prototype.getTotalBet = function() {
return this.mSlot.getMoneyBet() * this.mSlotMachine.getNumLineSelect().length;
};
e.prototype.onBtnAll = function(t, e) {
console.log("onBtnAll", e);
p.default && this.mSlot && this.mSlot.mSlotAudio && this.mSlot.mSlotAudio.button && p.default.playSound(this.mSlot.mSlotAudio.button, this.mSlot.mIsSound, !1, 1);
switch (e) {
case "spin":
this.onBtnSpin();
break;

case "stop_spin":
this.onBtnStopSpin();
break;

case "auto_spin":
if (this.mSlot.isTrial()) {
this.mSlot.mTooltip.show("Tính năng không sử dụng trong chơi thử");
return;
}
this.onBtnAutoSpin();
break;

case "quick_spin":
if (this.mSlot.isTrial()) {
this.mSlot.mTooltip.show("Tính năng không sử dụng trong chơi thử");
return;
}
this.onBtnQuickSpin();
break;

case "guide":
this.onBtnGuide();
break;

case "history":
this.onBtnHistory();
break;

case "rank":
this.onBtnRank();
break;

case "select_line":
if (this.mSlot.isTrial()) {
this.mSlot.mTooltip.show("Tính năng không sử dụng trong chơi thử");
return;
}
this.onBtnSelectLine();
break;

case "add_bet":
if (this.mSlot.isTrial()) {
this.mSlot.mTooltip.show("Tính năng không sử dụng trong chơi thử");
return;
}
this.onBtnAddBet();
break;

case "sub_bet":
this.onBtnSubBet();
break;

case "back":
this.onBtnBack();
break;

case "x2":
this.onBtnX2();
break;

case "setting":
this.onBtnSetting();
break;

case "sound":
this.mSlotRoomUI.btnSound._pressed && this.onBtnSound();
break;

case "music":
this.mSlotRoomUI.btnMusic._pressed && this.onBtnMusic();
}
};
e.prototype.onBtnSpin = function() {
this.mState == l.SLOT_STATE.READY ? this.mUserMoney < this.getTotalBet() ? this.mSlot.mTooltip.show("Số dư không đủ để quay") : this.mState == l.SLOT_STATE.READY && this.spin() : this.mSlot.mTooltip.show("Chưa hết phiên quay");
};
e.prototype.onBtnAutoSpin = function() {
this.mIsAutoSpin = !0;
this.mSlotRoomUI.visibleBtnStopSpin(!0);
this.mSlotRoomUI.visibleBtnAutoSpin(!1);
this.mSlotRoomUI.visibleBtnQuickSpin(!1);
this.mState == l.SLOT_STATE.READY ? this.spin() : this.mState != l.SLOT_STATE.READY ? this.mSlot.mTooltip.show("Không quay được khi chưa kết thúc phiên") : this.mUserMoney < this.getTotalBet() && this.mSlot.mTooltip.show("Số dư không đủ để quay");
};
e.prototype.onBtnStopSpin = function() {
this.mSlotRoomUI.visibleBtnStopSpin(!1);
this.mSlotRoomUI.visibleBtnAutoSpin(!0);
this.mSlotRoomUI.visibleBtnQuickSpin(!0);
this.mIsAutoSpin = !1;
this.mIsQuickSpin = !1;
};
e.prototype.onBtnQuickSpin = function() {
this.mIsQuickSpin = !0;
};
e.prototype.onBtnGuide = function() {};
e.prototype.onBtnHistory = function() {};
e.prototype.onBtnRank = function() {};
e.prototype.onBtnSelectLine = function() {};
e.prototype.onBtnAddBet = function() {};
e.prototype.onBtnSubBet = function() {};
e.prototype.onBtnBack = function() {};
e.prototype.onBtnX2 = function() {};
e.prototype.onBtnSetting = function() {};
e.prototype.onBtnSound = function() {
this.mSlot.mIsSound = this.mSlotRoomUI.btnSound.isChecked;
if (this.mSlot.mIsSound) cc.sys.localStorage.setItem(this.mSlot.keySound, 1); else {
cc.sys.localStorage.setItem(this.mSlot.keySound, 2);
p.default.stopAllSounds();
}
};
e.prototype.onBtnMusic = function() {
this.mSlot.mIsMusic = this.mSlotRoomUI.btnMusic.isChecked;
if (this.mSlot.mIsMusic) {
cc.sys.localStorage.setItem(this.mSlot.keyMusic, 1);
p.default && this.mSlot.mSlotAudio && this.mSlot.mSlotAudio.musicBg && p.default.playMusic(this.mSlot.mSlotAudio.musicBg, this.mSlot.mIsMusic, !0);
} else {
cc.sys.localStorage.setItem(this.mSlot.keyMusic, 2);
p.default.stopMusic();
}
};
r([ d(u.default) ], e.prototype, "mSlotRewardPool", void 0);
r([ d(s.default) ], e.prototype, "mSlotEffect", void 0);
r([ d(a.default) ], e.prototype, "mSlotMachine", void 0);
r([ d(c.default) ], e.prototype, "mSlotRoomUI", void 0);
return r([ f ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"./SlotConstant": "SlotConstant",
"./SlotEffect": "SlotEffect",
"./SlotMachine": "SlotMachine",
"./SlotRewardPool": "SlotRewardPool",
"./SlotRoomUI": "SlotRoomUI",
"./util/AudioUtil": "AudioUtil"
} ],
SlotSelectLineCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a65fbEvlsZFNKrmbdwvmDjp", "SlotSelectLineCell");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprBg = null;
e.txtLine = null;
e.togLine = null;
e.sprSelect = null;
e.sprUnselect = null;
e.mId = 0;
return e;
}
e.prototype.setId = function(t) {
this.mId = t;
this.txtLine && (this.txtLine.string = "" + (t + 1));
};
e.prototype.setSpriteSelect = function(t) {
this.sprSelect && (this.sprSelect.spriteFrame = t);
};
e.prototype.setSpriteUnselect = function(t) {
this.sprUnselect && (this.sprUnselect.spriteFrame = t);
};
e.prototype.getId = function() {
return this.mId;
};
e.prototype.setSelect = function(t) {
this.togLine.isChecked = t;
this.sprBg && (this.sprBg.node.active = t);
this.txtLine && (this.txtLine.node.opacity = t ? 255 : 150);
};
e.prototype.isSelect = function() {
return this.togLine.isChecked;
};
e.prototype.onBtnSelect = function() {
this.togLine._pressed && this.setSelect(!this.togLine.isChecked);
};
r([ a(cc.Sprite) ], e.prototype, "sprBg", void 0);
r([ a(cc.Label) ], e.prototype, "txtLine", void 0);
r([ a(cc.Toggle) ], e.prototype, "togLine", void 0);
r([ a(cc.Sprite) ], e.prototype, "sprSelect", void 0);
r([ a(cc.Sprite) ], e.prototype, "sprUnselect", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
SlotSelectLine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fb453BD5Z5J56Q9cYsKK/5q", "SlotSelectLine");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btnChan = null;
e.btnLe = null;
e.btnTatCa = null;
e.btnBoChon = null;
e.listLineItem = [];
e.mSlotRoom = null;
e.mSlot = null;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
};
e.prototype.init = function(t) {
this.mSlotRoom = t;
this.mSlot = this.mSlotRoom.mSlot;
for (var e = this.mSlotRoom.mSlotMachine.getListLineSelect(), o = 0; o < this.listLineItem.length; o++) {
for (var n = !1, i = 0; i < e.length; i++) if (e[i] == o) {
n = !0;
break;
}
this.listLineItem[o].isChecked = n;
}
};
e.prototype.onBtnAll = function(t, e) {
switch (e) {
case "chan":
this.btnChan.isChecked && this.onBtnChan();
break;

case "le":
this.btnLe.isChecked && this.onBtnLe();
break;

case "bochon":
this.btnBoChon.isChecked && this.onBtnBoChon();
break;

case "all":
this.btnTatCa.isChecked && this.onBtnTatCa();
break;

case "close":
this.onBtnClose();
}
};
e.prototype.onBtnChan = function() {
for (var t = 0; t < this.listLineItem.length; t++) this.listLineItem[t].isChecked = (t + 1) % 2 == 0;
};
e.prototype.onBtnLe = function() {
for (var t = 0; t < this.listLineItem.length; t++) this.listLineItem[t].isChecked = t % 2 == 0;
};
e.prototype.onBtnTatCa = function() {
for (var t = 0; t < this.listLineItem.length; t++) this.listLineItem[t].isChecked = !0;
};
e.prototype.onBtnBoChon = function() {
for (var t = 0; t < this.listLineItem.length; t++) this.listLineItem[t].isChecked = !1;
};
e.prototype.onBtnClose = function() {
for (var t = [], e = 0; e < this.listLineItem.length; e++) this.listLineItem[e].isChecked && t.push(e);
if (0 == t.length) this.mSlot.mTooltip.show("Bạn phải chọn ít nhất 1 dòng"); else {
this.mSlotRoom.updateLineSelect(t);
this.node.destroy();
}
};
r([ a(cc.Toggle) ], e.prototype, "btnChan", void 0);
r([ a(cc.Toggle) ], e.prototype, "btnLe", void 0);
r([ a(cc.Toggle) ], e.prototype, "btnTatCa", void 0);
r([ a(cc.Toggle) ], e.prototype, "btnBoChon", void 0);
r([ a([ cc.Toggle ]) ], e.prototype, "listLineItem", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {} ],
SlotSelectRoom_Base_RR: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "55a81fWkJdJ6p7X2CAx7gPp", "SlotSelectRoom_Base_RR");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./util/NumberUtil"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listPot = [];
e.listRoom = [];
e.mSlot = null;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
o._instance = this;
this.mSlot.isConnect ? this.unlockBtn(!0) : this.unlockBtn(!1);
};
e.prototype.unlockBtn = function(t) {
for (var e = 0; e < this.listRoom.length; e++) this.listRoom[e].interactable = t;
};
e.prototype.init = function(t) {
this.mSlot = t;
this.onUpdatePot(this.mSlot.mListPot);
};
e.prototype.onUpdatePot = function(t) {
for (var e = 0; e < this.listPot.length; e++) t[e] && this.listPot[e].setNumber(t[e]);
};
e.prototype.onBtnAll = function(t, e) {
switch (e) {
case "trial":
this.mSlot.mIsTrail = !0;
this.onSelectRoom(3);
break;

case "100":
this.mSlot.mIsTrail = !1;
this.onSelectRoom(1);
break;

case "1000":
this.mSlot.mIsTrail = !1;
this.onSelectRoom(2);
break;

case "10000":
this.mSlot.mIsTrail = !1;
this.onSelectRoom(3);
break;

case "close":
this.onBtnBack();
}
};
e.prototype.onBtnBack = function() {
fzgui.GameCoreManager.instance.onBackToLobby();
this.mSlot.mIsTrail || fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
};
e.prototype.onSelectRoom = function(t) {
for (var e = 0; e < this.listRoom.length; e++) this.listRoom[e].interactable = !1;
this.mSlot.setBetId(t);
this.mSlot.mIsTrail ? this.mSlot.mSlotNetwork.sendPlayTry() : this.mSlot.mSlotNetwork.sendPlayNow();
};
var o;
e._instance = null;
r([ u([ c.default ]) ], e.prototype, "listPot", void 0);
r([ u([ cc.Button ]) ], e.prototype, "listRoom", void 0);
return o = r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./util/NumberUtil": "NumberUtil"
} ],
SlotSelectRoom: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b6fd7/A0S5ALrKi2Ka2e/cw", "SlotSelectRoom");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./util/NumberUtil"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listPot = [];
e.listRoom = [];
e.mSlot = null;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
o._instance = this;
this.mSlot.isConnect ? this.unlockBtn(!0) : this.unlockBtn(!1);
};
e.prototype.unlockBtn = function(t) {
for (var e = 0; e < this.listRoom.length; e++) this.listRoom[e].interactable = t;
};
e.prototype.init = function(t) {
this.mSlot = t;
this.onUpdatePot(this.mSlot.mListPot);
};
e.prototype.onUpdatePot = function(t) {
for (var e = 0; e < this.listPot.length; e++) t[e] && this.listPot[e].setNumber(t[e]);
};
e.prototype.onBtnAll = function(t, e) {
switch (e) {
case "trial":
this.mSlot.mIsTrail = !0;
this.onSelectRoom(3);
break;

case "100":
this.mSlot.mIsTrail = !1;
this.onSelectRoom(1);
break;

case "1000":
this.mSlot.mIsTrail = !1;
this.onSelectRoom(2);
break;

case "10000":
this.mSlot.mIsTrail = !1;
this.onSelectRoom(3);
break;

case "close":
this.onBtnBack();
}
};
e.prototype.onBtnBack = function() {
this.mSlot.mIsTrail || fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
};
e.prototype.onSelectRoom = function(t) {
for (var e = 0; e < this.listRoom.length; e++) this.listRoom[e].interactable = !1;
this.mSlot.setBetId(t);
this.mSlot.mIsTrail ? this.mSlot.mSlotNetwork.sendPlayTry() : this.mSlot.mSlotNetwork.sendPlayNow();
};
var o;
e._instance = null;
r([ u([ c.default ]) ], e.prototype, "listPot", void 0);
r([ u([ cc.Button ]) ], e.prototype, "listRoom", void 0);
return o = r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./util/NumberUtil": "NumberUtil"
} ],
SlotXPotCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "68baeyL1qBDmbXp+tewKEt3", "SlotXPotCell");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtPotCount = null;
e.skeEffect = null;
e.mData = null;
e.mSlotXPot = null;
return e;
}
e.prototype.onLoad = function() {
this.skeEffect && (this.skeEffect.node.active = !1);
};
e.prototype.init = function(t) {
this.mSlotXPot = t;
};
e.prototype.updatePot = function() {};
e.prototype.setData = function() {};
r([ a(cc.Label) ], e.prototype, "txtPotCount", void 0);
r([ a(sp.Skeleton) ], e.prototype, "skeEffect", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
SlotXPot: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9fd8fdObAVPk6nPhcxJJMPd", "SlotXPot");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./SlotXPotCell"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listPotCell = [];
e.mSlot = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.onDestroy = function() {};
e.prototype.init = function(t) {
this.mSlot = t;
for (var e = 0; e < this.listPotCell.length; e++) this.listPotCell[e].init(this);
};
r([ u([ c.default ]) ], e.prototype, "listPotCell", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./SlotXPotCell": "SlotXPotCell"
} ],
SlotsConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "1d889WsiFhFDpW9XA0LzHLp", "SlotsConfig");
e.exports = {
TIME_COLUMN_NORMAL: .4,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .25,
TIME_CALL_STOP_FAST: .5,
TIME_WILD_3X_APPEAR: 4,
TIME_PLAY_EFFECT_EXPAND_WILD: 4,
TIME_SCALE_ANIMATION_WILD: 1.25,
TIME_WILD_3X_APPEAR_FAST: 2.5,
TIME_PLAY_EFFECT_EXPAND_WILD_FAST: 2,
TIME_SCALE_ANIMATION_WILD_FAST: 2,
TIME_PLAY_EFFECT_EXPAND_WILD_FREE_SPIN: .5,
TIME_MONEY_EFFECT_JACKPOT: 5,
TIME_MONEY_EFFECT_BIG_WIN: 5,
TIME_MONEY_EFFECT_NORMAL_WIN: 2.25,
TIME_WAIT_LOST: .8,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2.5,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2.5,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1.25,
TIME_WAIT_LOST_FAST: .5,
TIME_TWEEN_MONEY_FAST: .5,
TIME_WAIT_MULTIPLIER: 2,
TIME_WAIT_LAST_STEP: 1.5,
TIME_WAIT_LAST_PICK: 2,
TIME_WAIT_AUTO_FINISH_BONUS_GAME: 15,
TIME_WAIT_START_FREE_SPIN: 2,
TIME_WAIT_RESULT_FREE_SPIN: 2,
TIME_ANIMATION_OPEN_CARD: .8,
MULTIPLIER_BIG_WIN: 4,
TIME_WAIT_AUTO_START_BONUS_GAME: 2,
TIME_WAIT_AUTO_CLOSE_BONUS_GAME: 2
};
cc._RF.pop();
}, {} ],
Slot: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f31c4KbijBL9oFO07ZPldaZ", "Slot");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./SlotHandler"), s = t("./SlotAudio"), a = t("./SlotConfig"), u = t("./SlotConstant"), l = t("./util/ToolTip"), p = t("./util/AudioUtil"), h = cc._decorator, f = h.ccclass, d = h.property, _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeMain = null;
e.mTooltip = null;
e.mSlotNetwork = null;
e.mSlotConfig = null;
e.mSlotAudio = null;
e.mSlotSelectRoom = null;
e.mSlotRoom = null;
e.mRoomId = 1;
e.mIdGame = 0;
e.mIsTrail = !1;
e.mIsSound = !1;
e.mIsMusic = !1;
e.keySound = "";
e.keyMusic = "";
e.isConnect = !1;
e.mMoneyType = 1;
e.mListPot = [];
return e;
}
e.prototype.onLoad = function() {
this.mSlotNetwork.init(this);
this.mSlotNetwork.connect();
};
e.prototype.onDestroy = function() {
this.mSlotNetwork.disconnect();
p.default.stopAllSounds();
p.default.stopMusic();
};
e.prototype.connectSuccess = function() {
this.isConnect = !0;
this.mSlotNetwork.sendJoinRoom();
};
e.prototype.connectFail = function() {
this.isConnect = !1;
this.node.destroy();
};
e.prototype.onJoinGameSuccess = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
this.init();
};
e.prototype.onJoinGameFail = function() {
this.node.destroy();
};
e.prototype.onPlayNow = function() {};
e.prototype.onBackRoom = function() {};
e.prototype.init = function() {};
e.prototype.loadSlotRoom = function() {
this.mSlotRoom.init(this);
this.mSlotRoom.node.active = !0;
this.mSlotSelectRoom.node.active = !1;
};
e.prototype.loadSlotEventXPot = function() {};
e.prototype.onBtnClose = function() {
this.node.destroy();
};
e.prototype.onUpdatePot = function(t) {
if (t) {
var e = 0;
for (var o in t) {
var n = t[o];
this.mListPot[e] = n;
e++;
}
this.mSlotSelectRoom && this.mSlotSelectRoom.onUpdatePot(this.mListPot);
this.mSlotRoom && this.mSlotRoom.onUpdatePot(this.mListPot[this.mRoomId]);
}
};
e.prototype.setBetId = function(t) {
this.mRoomId = t;
};
e.prototype.getBetId = function() {
return this.mRoomId;
};
e.prototype.getIdxPot = function() {
return this.mRoomId == u.SLOT_ROOM_ID.ROOM_TRIAL ? 2 : this.mRoomId - 1;
};
e.prototype.getMoneyBet = function() {
var t = 0;
this.mRoomId == u.SLOT_ROOM_ID.ROOM_TRIAL ? t = 1e4 : this.mRoomId == u.SLOT_ROOM_ID.ROOM100 ? t = 100 : this.mRoomId == u.SLOT_ROOM_ID.ROOM1K ? t = 1e3 : this.mRoomId == u.SLOT_ROOM_ID.ROOM10K && (t = 1e4);
return t;
};
e.prototype.isTrial = function() {
return this.mIsTrail;
};
e.prototype.checkSound = function(t, e) {
this.keySound = t;
this.keyMusic = e;
var o = cc.sys.localStorage.getItem(t), n = cc.sys.localStorage.getItem(e);
if (o) {
o = parseInt(o);
this.mIsSound = 1 === o;
} else {
this.mIsSound = !0;
cc.sys.localStorage.setItem(t, 1);
}
if (n) {
n = parseInt(n);
this.mIsMusic = 1 === n;
} else {
this.mIsMusic = !0;
cc.sys.localStorage.setItem(e, 1);
}
this.mIsMusic && p.default && this.mSlotAudio && this.mSlotAudio.musicBg && p.default.playMusic(this.mSlotAudio.musicBg, this.mIsMusic, !0);
};
e.prototype.loadPopup = function(t, e) {
void 0 === t && (t = "");
void 0 === e && (e = "");
};
e.prototype.bundleNameWithID = function() {
switch (this.mIdGame) {
case 6:
return "godzilla";

case 5:
return "chef";

case 2:
return "slotonepiece";

case 16:
return "slotice";

case 19:
return "slotpubg";

case 9:
return "slotbachluyen";

case 1:
return "slotkingdom";

case 25:
return "slotbatman";
}
};
r([ d(cc.Node) ], e.prototype, "nodeMain", void 0);
r([ d(l.default) ], e.prototype, "mTooltip", void 0);
r([ d(c.default) ], e.prototype, "mSlotNetwork", void 0);
r([ d(a.default) ], e.prototype, "mSlotConfig", void 0);
r([ d(s.default) ], e.prototype, "mSlotAudio", void 0);
return r([ f ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"./SlotAudio": "SlotAudio",
"./SlotConfig": "SlotConfig",
"./SlotConstant": "SlotConstant",
"./SlotHandler": "SlotHandler",
"./util/AudioUtil": "AudioUtil",
"./util/ToolTip": "ToolTip"
} ],
StretchSprite: [ function(t, e) {
"use strict";
cc._RF.push(e, "b5964xPIH1BUbpO82T+GdIa", "StretchSprite");
(function() {
cc.StretchSprite = cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var t = cc.view.getVisibleSize();
if (t.width / t.height >= 1398 / 786) {
this.node.width = t.width;
this.node.height = t.width / 1398 * 786;
} else {
this.node.height = t.height;
this.node.width = t.height / 786 * 1398;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
SubdomainName: [ function(t, e) {
"use strict";
cc._RF.push(e, "73f5eitlzBDR7obdDhGPECV", "SubdomainName");
(function() {
cc.SubdomainName = cc.Enum({
PORTAL: "portal.",
EVENT: "event.",
VQMM: "vqmm.",
CHAT: "chat.",
TREASURE: "treasure.",
SAFE_OTP: "safeotp.",
EGYPT: "egypt.",
THREE_KINGDOM: "tamquoc.",
AQUARIUM: "thuycung.",
DRAGON_BALL: "haitac.",
BUM_BUM: "bumbum.",
COWBOY: "cowboys.",
THUONGHAI: "demthuonghai.",
MONKEY: "monkey.",
XOC_XOC: "xocdia.",
XOC_XOC_LIVE: "xocdialive.",
DRAGON_TIGER: "dragontiger.",
BACCARAT: "baccarat.",
BAUCUA: "baucuato.",
THREE_CARDS: "bacay.",
TEXAS_POKER: "poker.",
TLMN: "tlmn.",
TLMN_SOLO: "tlmnsolo.",
MAU_BINH: "maubinh.",
LODE: "xoso.",
VIETLOT: "vietlott.",
SEVEN77: "minibar.",
MINI_POKER: "minipoker.",
BLOCK_BUSTER: "blockbuster.",
TAI_XIU: "taixiu.",
LUCKY_WILD: "luckywild.",
SHOOT_FISH: "shootfish.",
GAINHAY: "gainhay.",
AVIATOR: "aviator."
});
}).call(void 0);
cc._RF.pop();
}, {} ],
TKConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "0a522YnYbZDAr3CmHpoTtIR", "TKConfig");
e.exports = {
TIME_COLUMN_NORMAL: .4,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .25,
TIME_CALL_STOP_FAST: .5,
TIME_WILD_3X_APPEAR: 4,
TIME_PLAY_EFFECT_EXPAND_WILD: 4,
TIME_SCALE_ANIMATION_WILD: 1.25,
TIME_WILD_3X_APPEAR_FAST: 2.5,
TIME_PLAY_EFFECT_EXPAND_WILD_FAST: 2,
TIME_SCALE_ANIMATION_WILD_FAST: 2,
TIME_PLAY_EFFECT_EXPAND_WILD_FREE_SPIN: .5,
TIME_MONEY_EFFECT_JACKPOT: 5,
TIME_MONEY_EFFECT_BIG_WIN: 5,
TIME_MONEY_EFFECT_NORMAL_WIN: 2.25,
TIME_WAIT_LOST: .8,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2.5,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2.5,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1.25,
TIME_WAIT_LOST_FAST: .5,
TIME_TWEEN_MONEY_FAST: .5,
TIME_WAIT_MULTIPLIER: 2,
TIME_WAIT_LAST_STEP: 1.5,
TIME_WAIT_AUTO_FINISH_BONUS_GAME: 1500,
TIME_WAIT_START_FREE_SPIN: 2,
TIME_WAIT_RESULT_FREE_SPIN: 2,
TIME_ANIMATION_OPEN_CARD: .8,
MULTIPLIER_BIG_WIN: 4,
TIME_WAIT_AUTO_START_BONUS_GAME: 2,
TIME_WAIT_AUTO_CLOSE_BONUS_GAME: 2
};
cc._RF.pop();
}, {} ],
TQConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "9b207McKkNPpLlAfX3h47dq", "TQConfig");
e.exports = {
TIME_COLUMN_NORMAL: .4,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .25,
TIME_CALL_STOP_FAST: .4,
TIME_SPIN_NORMAL: 2.5,
TIME_SPIN_FAST: 1.25,
TIME_MONEY_EFFECT_JACKPOT: 3,
TIME_MONEY_EFFECT_BIG_WIN: 3,
TIME_MONEY_EFFECT_NORMAL_WIN: 2,
TIME_WAIT_LOST: .8,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1,
TIME_WAIT_LOST_FAST: .5,
TIME_TWEEN_MONEY_FAST: .5
};
cc._RF.pop();
}, {} ],
TaiXiuConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "862d7SflMpKwL/YiFrT1Zk9", "TaiXiuConfig");
e.exports = {
TIME_ENABLE_TORNADO: 30,
TIME_FAST: 10,
TIME_SUPER_FAST: 5,
TIME_WAIT_SHOW_WIN_RESULT: 2,
TIME_WAIT_SHOW_WIN_RESULT_NAN: 12,
TIME_WAIT_DICE_ANIMATION: 2
};
cc._RF.pop();
}, {} ],
ThuongHaiConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "e048aj/LK1EM7wA6wFs7hBe", "ThuongHaiConfig");
e.exports = {
TIME_COLUMN_NORMAL: .2,
TIME_CALL_STOP_NORMAL: 1,
TIME_COLUMN_FAST: .25,
TIME_CALL_STOP_FAST: .8,
TIME_WILD_3X_APPEAR: 4,
TIME_PLAY_EFFECT_EXPAND_WILD: 4,
TIME_SCALE_ANIMATION_WILD: 1.25,
TIME_WILD_3X_APPEAR_FAST: 2,
TIME_PLAY_EFFECT_EXPAND_WILD_FAST: 2,
TIME_SCALE_ANIMATION_WILD_FAST: 1.8,
TIME_PLAY_EFFECT_EXPAND_WILD_FREE_SPIN: .5,
TIME_MONEY_EFFECT_JACKPOT: 5,
TIME_MONEY_EFFECT_BIG_WIN: 5,
TIME_MONEY_EFFECT_NORMAL_WIN: 2,
TIME_WAIT_LOST: .8,
TIME_MONEY_EFFECT_JACKPOT_FAST: 2.5,
TIME_MONEY_EFFECT_BIG_WIN_FAST: 2.5,
TIME_MONEY_EFFECT_NORMAL_WIN_FAST: 1.25,
TIME_WAIT_LOST_FAST: .5,
TIME_TWEEN_MONEY_FAST: .5,
TIME_WAIT_MULTIPLIER: 2,
TIME_WAIT_LAST_STEP: 1.5,
TIME_WAIT_LAST_PICK: 3,
TIME_WAIT_AUTO_FINISH_BONUS_GAME: 15,
TIME_WAIT_START_FREE_SPIN: 2,
TIME_WAIT_RESULT_FREE_SPIN: 2,
TIME_ANIMATION_OPEN_CARD: .8,
MULTIPLIER_BIG_WIN: 4,
TIME_WAIT_AUTO_START_BONUS_GAME: 2,
TIME_WAIT_AUTO_CLOSE_BONUS_GAME: 2
};
cc._RF.pop();
}, {} ],
TimeUtils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b4524+Kka1G9I1IAQDimkCk", "TimeUtils");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, c = (i.property, function() {
function t() {}
t.currentTimeMillis = function() {
return Date.now();
};
t.serverTime = function() {
return Math.ceil(this.currentTimeMillis() - this.minDistanceTime + this.minPing / 2);
};
t.ping = 0;
t.minPing = -1;
t.minDistanceTime = 0;
return n([ r ], t);
}());
o.default = c;
cc._RF.pop();
}, {} ],
ToolTip: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4227aoy6+xNVI916p+gEtXk", "ToolTip");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtContent = null;
e.mTimeout = null;
e.mCallback = null;
e.mTarget = null;
return e;
}
e.prototype.onDisable = function() {
clearTimeout(this.mTimeout);
};
e.prototype.onDestroy = function() {
clearTimeout(this.mTimeout);
};
e.prototype.show = function(t, e, o, n) {
var i = this;
void 0 === e && (e = 2);
void 0 === o && (o = null);
void 0 === n && (n = null);
this.node.active = !0;
this.mCallback = o;
this.mTarget = n;
"" != t && (this.txtContent.string = t);
this.node.opacity = 0;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.fadeIn(e / 4), cc.delayTime(e / 2), cc.fadeOut(e / 4), cc.callFunc(function() {
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
i.hide();
}, this)));
};
e.prototype.showAndSetBg = function(t, e, o, n) {
var i = this;
void 0 === e && (e = 2);
void 0 === o && (o = null);
void 0 === n && (n = null);
this.node.active = !1;
this.mCallback = o;
this.mTarget = n;
"" != t && (this.txtContent.string = t);
this.scheduleOnce(function() {
i.node.active = !0;
i.node.children[0].width = i.txtContent.node.width + 40;
i.node.children[0].height = i.txtContent.node.height + 20;
i.node.opacity = 0;
i.node.stopAllActions();
i.node.runAction(cc.sequence(cc.fadeIn(e / 4), cc.delayTime(e / 2), cc.fadeOut(e / 4), cc.callFunc(function() {
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
i.hide();
}, i)));
});
};
e.prototype.hide = function() {
this.node.active = !1;
};
r([ a(cc.Label) ], e.prototype, "txtContent", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
Tool: [ function(t, e) {
"use strict";
cc._RF.push(e, "b27244BiNFPNrbHSF0lMvG8", "Tool");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
e.prototype.copyToClipboard = function(t) {
if (cc.sys.isNative) {
if (jsb) {
jsb.copyTextToClipboard(t);
return !0;
}
return !1;
}
var e = document.createElement("input");
e.value = t;
e.id = "inputID";
document.body.appendChild(e);
e.select();
document.execCommand("copy");
document.body.removeChild(e);
return !0;
};
e.prototype.formatNumber = function(t) {
return t || "0" === t || 0 === t ? parseInt(t).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : "";
};
e.prototype.formatNumberM = function(t) {
return t > 999999 || t < -999999 ? Math.floor(t / 1e6).toLocaleString("es-ES") + "M" : t.toLocaleString("es-ES");
};
e.prototype.formatNumberK = function(t) {
return t > 999999999 || t < -999999999 ? (Math.round(t / 1e9 * 100) / 100).toLocaleString("es-ES") + "B" : t > 999999 || t < -999999 ? (Math.round(t / 1e6 * 100) / 100).toLocaleString("es-ES") + "M" : t > 999 || t < -999 ? (Math.round(t / 1e3 * 100) / 100).toLocaleString("es-ES") + "K" : t.toLocaleString("es-ES");
};
e.prototype.formatNumberKTX = function(t) {
return t > 999999999 || t < -999999999 ? Math.floor(t / 1e6).toLocaleString("es-ES") + "M" : t > 999999 || t < -999999 ? Math.floor(t / 1e3).toLocaleString("es-ES") + "K" : t.toLocaleString("es-ES");
};
e.prototype.removeDot = function(t) {
return parseInt(t.split(".").join("").split("+").join(""));
};
e.prototype.formatRichTextGray = function(t, e) {
return this.formatRichText(t, e, "#AEC4D5");
};
e.prototype.formatRichTextYellow = function(t, e) {
return this.formatRichText(t, e, "#FFCA23");
};
e.prototype.formatRichTextBlue = function(t, e) {
return this.formatRichText(t, e, "#03BEEC");
};
e.prototype.formatRichTextRed = function(t, e) {
return this.formatRichText(t, e, "#EE3148");
};
e.prototype.formatRichText = function(t, e, o) {
return "<color=#ffffff>" + t + " </c><color=" + o + ">" + e + "</color>";
};
e.prototype.toTimeString = function(t) {
return new Date(1e3 * t).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
};
e.prototype.toTimeString4 = function(t) {
return new Date(1e3 * t).toUTCString().match(/(\d\d:\d\d)/)[0];
};
e.prototype.getTimestamp = function() {
var t = new Date();
return t.getUTCFullYear() + "-" + (t.getUTCMonth() + 1) + "-" + t.getUTCDate() + " " + t.getUTCHours() + ":" + t.getUTCMinutes() + ":" + t.getUTCSeconds() + "." + t.getUTCMilliseconds();
};
e.prototype.getDateNow = function() {
var t = new Date();
return t.getUTCFullYear() + "-" + (t.getUTCMonth() + 1 < 10 ? "0" + (t.getUTCMonth() + 1) : t.getUTCMonth() + 1) + "-" + t.getUTCDate();
};
e.prototype.getLocalMonth = function() {
return new Date().getMonth() + 1;
};
e.prototype.getLocalDateNow = function(t) {
var e = new Date();
void 0 !== t && e.setDate(e.getDate() - t);
return e.getFullYear() + "-" + (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-" + (e.getDate() < 10 ? "0" + e.getDate() : e.getDate());
};
e.prototype.getLocalDateNow2 = function(t) {
var e = new Date();
void 0 !== t && e.setDate(e.getDate() - t);
return (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "/" + (e.getDate() < 10 ? "0" + e.getDate() : e.getDate()) + "/" + e.getFullYear();
};
e.prototype.formatDate = function(t) {
var e = t.getDate(), o = t.getMonth() + 1;
return (e = e < 10 ? "0" + e : e) + "/" + (o = o < 10 ? "0" + o : o) + "/" + t.getFullYear();
};
e.prototype.getLocalDateNow3 = function(t) {
var e = new Date();
void 0 !== t && e.setHours(e.getHours() - t);
return (e.getHours() < 10 ? "0" + e.getHours() : e.getHours()) + ":" + (e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()) + " " + (e.getDate() < 10 ? "0" + e.getDate() : e.getDate()) + "/" + (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "/" + e.getFullYear();
};
e.prototype.generateUUID = function() {
var t = new Date().getTime();
return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
var o = (t + 16 * Math.random()) % 16 | 0;
t = Math.floor(t / 16);
return ("x" == e ? o : 3 & o | 8).toString(16);
});
};
e.prototype.getParameterByName = function(t, e) {
e || (e = window.location.href);
t = t.replace(/[\[\]]/g, "\\$&");
var o = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null;
};
e.prototype.getHref = function() {
if (!cc.sys.isNative) return window.location.href;
};
e.prototype.getHostName = function() {
if (!cc.sys.isNative) return window.location.hostname;
};
e.prototype.shuffle = function(t) {
var e, o, n;
for (n = t.length; n; n--) {
e = Math.floor(Math.random() * n);
o = t[n - 1];
t[n - 1] = t[e];
t[e] = o;
}
return t;
};
e.prototype.convertStringArrayToIntArray = function(t) {
return t.split(",").map(function(t) {
return parseInt(t, 10);
});
};
e.prototype.listToMatrix = function(t, e) {
var o, n, i = [];
for (o = 0, n = -1; o < t.length; o++) {
o % e == 0 && (i[++n] = []);
i[n].push(t[o]);
}
return i;
};
e.prototype.convertSecondToTimeWithDay = function(t) {
t < 0 && (t = 0);
var e = Math.floor(t / 3600 / 24), o = Math.floor(t / 3600 % 24), n = Math.floor(t % 3600 / 60), i = Math.floor(t % 3600 % 60);
return e < 1 ? o < 10 ? ("0" + o).slice(-2) + ":" + ("0" + n).slice(-2) + ":" + ("0" + i).slice(-2) : o + ":" + ("0" + n).slice(-2) + ":" + ("0" + i).slice(-2) : o < 10 ? e + "N " + ("0" + o).slice(-2) + ":" + ("0" + n).slice(-2) + ":" + ("0" + i).slice(-2) : e + "N " + o + ":" + ("0" + n).slice(-2) + ":" + ("0" + i).slice(-2);
};
e.prototype.convertSecondToTime = function(t) {
t < 0 && (t = 0);
var e = Math.floor(t / 3600), o = Math.floor(t % 3600 / 60), n = Math.floor(t % 3600 % 60);
return e < 10 ? ("0" + e).slice(-2) + ":" + ("0" + o).slice(-2) + ":" + ("0" + n).slice(-2) : e + ":" + ("0" + o).slice(-2) + ":" + ("0" + n).slice(-2);
};
e.prototype.convertSecondToTime2 = function(t) {
t < 0 && (t = 0);
var e = Math.floor(t % 3600 / 60), o = Math.floor(t % 3600 % 60);
return ("0" + e).slice(-2) + ":" + ("0" + o).slice(-2);
};
e.prototype.convertTime = function(t) {
var e = new Date(t);
function o(t) {
return t < 10 ? "0" + t : t;
}
return [ o(e.getDate()), o(e.getMonth() + 1), e.getFullYear() ].join("-") + " " + [ o(e.getHours()), o(e.getMinutes()) ].join(":");
};
e.prototype.convertUTCTime = function(t) {
var e = new Date(t + "Z");
function o(t) {
return t < 10 ? "0" + t : t;
}
return [ o(e.getUTCDate()), o(e.getUTCMonth() + 1), e.getUTCFullYear() ].join("-") + " " + [ o(e.getUTCHours()), o(e.getUTCMinutes()) ].join(":");
};
e.prototype.convertUTCTime3 = function(t) {
var e = new Date(t + "Z");
function o(t) {
return t < 10 ? "0" + t : t;
}
return [ o(e.getUTCDate()), o(e.getUTCMonth() + 1), e.getUTCFullYear() ].join("-") + " " + [ o(e.getUTCHours()), o(e.getUTCMinutes()) ].join(":");
};
e.prototype.convertUTCTime2 = function(t) {
var e = new Date(t + "Z");
function o(t) {
return t < 10 ? "0" + t : t;
}
return [ o(e.getUTCHours()), o(e.getUTCMinutes()), o(e.getUTCSeconds()) ].join(":");
};
e.prototype.convertUTCDate = function(t) {
var e = new Date(t + "Z");
function o(t) {
return t < 10 ? "0" + t : t;
}
return [ o(e.getUTCDate()), o(e.getUTCMonth() + 1), e.getUTCFullYear() ].join("-");
};
e.prototype.convertGMT0Time = function(t) {
var e = new Date(t).getTime() - 252e5;
return new Date(e);
};
e.prototype.rtrim = function(t, e) {
for (var o = t.length - 1; o >= 0; o--) if (e !== t.charAt(o)) {
t = t.substring(0, o + 1);
break;
}
return t;
};
e.prototype.removeStr = function(t, e) {
return t.replace("/" + e + "/g", "");
};
e.prototype.setItem = function(t, e) {
return cc.sys.localStorage.setItem(t, e);
};
e.prototype.getItem = function(t) {
return cc.sys.localStorage.getItem(t);
};
e.prototype.removeItem = function(t) {
return cc.sys.localStorage.removeItem(t);
};
e.prototype.openOnce = function(t, e) {
var o = window.open("", e, "", !0);
"about:blank" === o.location.href && (o.location.href = t);
return o;
};
e.prototype.deleteAllCookies = function() {
for (var t = document.cookie.split(";"), e = 0; e < t.length; e++) {
var o = t[e], n = o.indexOf("="), i = n > -1 ? o.substr(0, n) : o;
document.cookie = i + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
};
e.prototype.mergeJSON = function(t, e) {
var o = Object.create(e);
for (var n in t) o.hasOwnProperty(n) ? null != t[n] && t[n].constructor == Object && (o[n] = mergeJSON(t[n], o[n])) : o[n] = t[n];
return o;
};
e.prototype.getRandomFromTo = function(t, e) {
return Math.floor(Math.random() * (e - t) + t);
};
e.prototype.arrUnique = function(t) {
return t.filter(function(t, e, o) {
return o.indexOf(t) === e;
});
};
e.prototype.pushZero = function(t) {
return (t = parseInt(t)) < 10 ? "0" + t : t;
};
return e;
}();
cc.Tool = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
TopBarView: [ function(t, e) {
"use strict";
cc._RF.push(e, "a2a10N4xe5BwpV+2nhRrZ1O", "TopBarView");
var o = t("NetConfig");
(function() {
cc.TopBarView = cc.Class({
extends: cc.Component,
properties: {
nodeLogin: [ cc.Node ],
nodeLoginSuccess: [ cc.Node ],
lbNickName: cc.Label,
lbRank: cc.Label,
lbiBalance: cc.LabelIncrement,
avatar: cc.Avatar,
lbCountMail: cc.Label,
badgeMail: cc.Node,
lbVipPoint: cc.Label
},
onLoad: function() {
this.isCardGame = !1;
this.node.zIndex = cc.NoteDepth.TOP_BAR;
cc.LobbyController.getInstance().setTopBarView(this);
this.node.active = !1;
},
getMailUnRead: function() {
new cc.MailUnReadCommand().execute(this);
},
onMailUnReadResponse: function(t) {
if (t.Count > 0) {
this.lbCountMail.string = t.Count;
this.lbCountMail.node.active = !0;
this.badgeMail.active = !0;
} else {
this.lbCountMail.node.active = !1;
this.badgeMail.active = !1;
}
},
resetTopBar: function() {},
updateUILogin: function(t) {
this.nodeLogin.forEach(function(e) {
e.active = t;
});
this.nodeLoginSuccess.forEach(function(e) {
e.active = !t;
});
this.node.active = !t;
},
topBarUpdateInfo: function() {
var t = cc.LoginController.getInstance().getLoginResponse(), e = cc.LoginController.getInstance().getNextVPResponse();
this.lbNickName.string = t.AccountName;
this.lbVipPoint.string = cc.Config.getInstance().formatRank(t.RankID, t.RankName, t.VP, e ? e.VP : 0);
this.lbRank.string = this.getVipRank(e ? e.RankID - 1 : 0);
cc.BalanceController.getInstance().updateRealBalance(t.Balance);
cc.BalanceController.getInstance().updateBalance(t.Balance);
this.avatar.setAvatar(cc.AccountController.getInstance().getAvatarImage(t.AvatarID));
},
refreshAvatar: function() {
var t = cc.LoginController.getInstance().getLoginResponse();
this.avatar.setAvatar(cc.AccountController.getInstance().getAvatarImage(t.AvatarID));
},
quickLogoutClicked: function() {
this.isCardGame || cc.LobbyController.getInstance().showPopupLogout();
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "BACK", cc.DDNAUIType.BUTTON);
},
avatarClicked: function() {
cc.LobbyController.getInstance().createAccountView(cc.AccountTab.PROFILE);
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "ACCOUNT_INFO", cc.DDNAUIType.BUTTON);
},
profileClicked: function() {
cc.LobbyController.getInstance().createAccountView(cc.AccountTab.PROFILE);
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "ACCOUNT_INFO", cc.DDNAUIType.BUTTON);
},
topupClicked: function() {
if (cc.LoginController.getInstance().checkLogin()) {
if (cc.Config.getInstance().getDomainVK().includes(o.HOST)) {
cc.LobbyController.getInstance().createShopView(cc.ShopTab.AGENCY);
cc.DDNA.getInstance().shopEntered(cc.DDNAShopName.AGENCY);
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "AGENCY", cc.DDNAUIType.BUTTON);
} else switch (cc.ShopController.getInstance().getChargeDefault()) {
case "CARD":
cc.LobbyController.getInstance().createShopView(cc.ShopTab.TOPUP);
break;

case "BANK":
cc.LobbyController.getInstance().createShopView(cc.ShopTab.BANK);
break;

case "MOMO":
cc.LobbyController.getInstance().createShopView(cc.ShopTab.MOMO);
break;

default:
cc.LobbyController.getInstance().createShopView(cc.ShopTab.TOPUP);
}
cc.DDNA.getInstance().shopEntered(cc.DDNAShopName.TOPUP);
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "SHOP_PURCHASE", cc.DDNAUIType.BUTTON);
}
},
eventClicked: function() {
if (cc.LoginController.getInstance().checkLogin()) {
cc.Config.getInstance().getDomainVK().includes(o.HOST), cc.Tool.getInstance().setItem("@startTabEvent", 4);
cc.Tool.getInstance().setItem("@startSubTabEvent", "TOP");
cc.LobbyController.getInstance().createEventView();
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "EVENT", cc.DDNAUIType.BUTTON);
}
},
treasureClicked: function() {
if (cc.LoginController.getInstance().checkLogin()) {
cc.LobbyController.getInstance().createTreasureView();
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "TREASURE", cc.DDNAUIType.BUTTON);
}
},
inboxClicked: function() {
if (cc.LoginController.getInstance().checkLogin()) {
cc.LobbyController.getInstance().createAccountView(cc.AccountTab.INBOX);
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "INBOX", cc.DDNAUIType.BUTTON);
}
},
settingClicked: function() {
if (cc.LoginController.getInstance().checkLogin()) {
cc.LobbyController.getInstance().openSetting();
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "SETTING", cc.DDNAUIType.BUTTON);
}
},
loginClicked: function() {
cc.LobbyController.getInstance().createLoginView();
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "LOGIN", cc.DDNAUIType.BUTTON);
},
registerClicked: function() {
cc.LobbyController.getInstance().createLoginView();
cc.LoginController.getInstance().showRegister(!0);
cc.LoginController.getInstance().showLogin(!1);
cc.DDNA.getInstance().uiInteraction(cc.DDNAUILocation.PORTAL, "REGISTER", cc.DDNAUIType.BUTTON);
},
telegramClicked: function() {
cc.LoginController.getInstance().checkLogin() && cc.sys.openURL(cc.Config.getInstance().taiotpx6());
},
getVipRank: function(t) {
switch (t) {
case 2:
return "2";

case 3:
return "3";

case 4:
return "4";

case 5:
return "5";

case 6:
return "6";

case 7:
return "7";

case 8:
return "8";

case 9:
return "9";

default:
return "1";
}
}
});
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: "NetConfig"
} ],
TouchDragger: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4c8ffVhBXRDrZKK/Xj0PsuO", "TouchDragger");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mTouchStart = null;
e.mCallback = null;
e.mTarget = null;
e.mIsCbStartEnabled = null;
return e;
}
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
};
e.prototype.init = function(t, e, o) {
void 0 === o && (o = !1);
this.mCallback = t;
this.mTarget = e;
this.mIsCbStartEnabled = o;
};
e.prototype.touchStart = function(t) {
this.mTouchStart = t.getLocation();
this.mIsCbStartEnabled && this.onClick();
};
e.prototype.touchMove = function(t) {
var e = t.touch.getDelta();
this.node.x += e.x;
this.node.y += e.y;
};
e.prototype.touchCancel = function() {};
e.prototype.touchEnd = function(t) {
var e = t.getLocation();
Math.abs(this.mTouchStart.x - e.x) < 10 && Math.abs(this.mTouchStart.y - e.y) < 10 && this.onClick();
};
e.prototype.onClick = function() {
this.mCallback && this.mTarget && this.mCallback.call(this.mTarget);
};
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
TouchMove: [ function(t, e) {
"use strict";
cc._RF.push(e, "8457bzXi+RCFrWEyccPy/PF", "TouchMove");
(function() {
cc.TouchMove = cc.Class({
extends: cc.Component,
properties: {
btnHandle: cc.Button,
touchParent: cc.TouchMove
},
onLoad: function() {
var t = this;
this.isTouch = !1;
this.lastX = this.node.x;
this.lastY = this.node.y;
this.countTouch = 0;
this.btnHandle = this.node.getComponent(cc.Button);
this.node.on("touchstart", function() {
t.isTouch = !0;
t.node.zIndex = cc.Config.getInstance().getZINDEX();
}, this.node);
this.node.on("touchmove", function(e) {
void 0 !== t.touchParent && null !== t.touchParent && (t.touchParent.isTouch = !1);
if (t.isTouch) {
void 0 !== t.touchParent && null !== t.btnHandle && (t.lastX === this.x && t.lastY === this.y || (t.btnHandle.interactable = !1));
var o = e.touch.getDelta();
t.countTouch++;
this.x += o.x;
this.y += o.y;
}
}, this.node);
this.node.on("touchend", function() {
void 0 !== t.touchParent && null !== t.touchParent && (t.touchParent.isTouch = !0);
if (t.isTouch) {
null !== t.btnHandle && (t.btnHandle.interactable = !0);
t.countTouch < (cc.sys.os === cc.sys.OS_ANDROID ? 5 : 2) && null !== t.btnHandle && "btnMINI" == t.btnHandle.node.name && cc.MINIController.getInstance().openClicked();
t.countTouch = 0;
t.lastX = this.x;
t.lastY = this.y;
t.isTouch = !1;
}
}, this.node);
},
disableTouch: function() {
this.isTouch = !1;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
Tween: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b463e/ybFpMl6HKyeG5WLZz", "Tween");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c, s = t("./Utils"), a = cc._decorator, u = a.ccclass;
a.property;
(function(t) {
var e = function() {
this.target = null;
this.duration = 0;
this.curDuration = 0;
this.callback = null;
};
t.TweenListener = e;
var o = function(t) {
i(o, t);
function o() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeepFrame = !1;
e.countSkeep = 1;
e.curCountSkeep = 0;
e.delta = 0;
return e;
}
n = o;
o.getInstance = function() {
if (null == this.instance) {
var t = new cc.Node();
t.name = "Tween";
cc.game.addPersistRootNode(t);
this.instance = t.addComponent(n);
}
return this.instance;
};
o.prototype.update = function(t) {
if (this.skeepFrame) {
this.curCountSkeep++;
this.delta += t;
if (this.curCountSkeep >= this.countSkeep) {
this.curCountSkeep = 0;
this.skeepFrame = !1;
}
} else {
for (var e = 0; e < n.listeners.length; e++) {
var o = n.listeners[e];
if (o.target && o.target instanceof cc.Component && o.target.node) {
o.curDuration = Math.min(o.duration, o.curDuration + t + this.delta);
o.callback(o.curDuration / o.duration);
o.curDuration >= o.duration && n.listeners.splice(e--, 1);
} else n.listeners.splice(e--, 1);
}
this.skeepFrame = !0;
this.delta = 0;
}
};
o.numberTo = function(t, o, i, r) {
void 0 === r && (r = function(t) {
return s.default.formatNumber(t);
});
this.getInstance();
for (var c = null, a = 0; a < n.listeners.length; a++) {
var u = n.listeners[a];
if (u.target == t) {
c = u;
break;
}
}
if (null == c) {
c = new e();
this.listeners.push(c);
}
var l = s.default.stringToInt(t.string), p = o - l;
c.curDuration = 0;
c.duration = i;
c.target = t;
c.callback = function(e) {
t.string = r(parseInt("" + (l + p * e)));
};
};
var n;
o.instance = null;
o.listeners = new Array();
return n = r([ u ], o);
}(cc.Component);
t.Tween = o;
})(c || (c = {}));
o.default = c.Tween;
cc._RF.pop();
}, {
"./Utils": "Utils"
} ],
UIAutoLayout: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c6cda9lQuNPlLL7+cteSbei", "UIAutoLayout");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.type = fzgui.eAutoLayoutType.Raw;
return e;
}
r([ a(cc.Enum({
type: cc.Enum(fzgui.eAutoLayoutType)
})) ], e.prototype, "type", void 0);
return r([ s ], e);
}(fzgui.UIAutoLayout);
o.default = u;
cc._RF.pop();
}, {} ],
UIButtonCommon: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "58361a529dG1LTx1JYiJ4GA", "UIButtonCommon");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listSprite = [];
e.lbAction = null;
return e;
}
r([ a(cc.SpriteFrame) ], e.prototype, "listSprite", void 0);
r([ a(cc.Label) ], e.prototype, "lbAction", void 0);
return r([ s ], e);
}(fzgui.UIButtonCommon);
o.default = u;
cc._RF.pop();
}, {} ],
UIDragDrop: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b7247PMzvRJu5hX8uUdEr2+", "UIDragDrop");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dragAlwaysCenter = !0;
e.backToStartPosition = !1;
e.stickyDrag = !1;
e.propagateTouchEvent = !0;
e.dragScale = 1;
e.disableScrollViewWhileDrag = !0;
return e;
}
r([ a ], e.prototype, "dragAlwaysCenter", void 0);
r([ a ], e.prototype, "backToStartPosition", void 0);
r([ a ], e.prototype, "stickyDrag", void 0);
r([ a ], e.prototype, "propagateTouchEvent", void 0);
r([ a ], e.prototype, "dragScale", void 0);
r([ a ], e.prototype, "disableScrollViewWhileDrag", void 0);
return r([ s ], e);
}(fzgui.UIDragDrop);
o.default = u;
cc._RF.pop();
}, {} ],
UIDraggable: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f7fa0GAKbhBtKxkO9VaCswQ", "UIDraggable");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.draggable = !0;
e.backToStartPosition = !1;
e.autoFitEdge = !1;
return e;
}
r([ a ], e.prototype, "draggable", void 0);
r([ a ], e.prototype, "backToStartPosition", void 0);
r([ a ], e.prototype, "autoFitEdge", void 0);
return r([ s ], e);
}(fzgui.UIDraggable);
o.default = u;
cc._RF.pop();
}, {} ],
UIJoystick: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1417dvOjyhG7qZIi1TJTTxC", "UIJoystick");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.analog = null;
e.background = null;
e.radius = 60;
e.touchAnyWhereToStart = !0;
e.followFinger = !0;
return e;
}
r([ a(cc.Node) ], e.prototype, "analog", void 0);
r([ a(cc.Node) ], e.prototype, "background", void 0);
r([ a ], e.prototype, "radius", void 0);
r([ a ], e.prototype, "touchAnyWhereToStart", void 0);
r([ a ], e.prototype, "followFinger", void 0);
return r([ s ], e);
}(fzgui.UIJoystick);
o.default = u;
cc._RF.pop();
}, {} ],
UINumericLabelHelper: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "01a90QxnUdOSY/qJJWZpxQc", "UINumericLabelHelper");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(fzgui.UINumericLabelHelper));
o.default = a;
cc._RF.pop();
}, {} ],
UIPersitsNode: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5cd3ew3VKdAh6L7xnu2XSSg", "UIPersitsNode");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.game.addPersistRootNode(this.node);
};
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
UIPopupCommon: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f08fe9yX5BCq4keohrUs7Wh", "UIPopupCommon");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbTitle = null;
e.lbContent = null;
e.nCustomView = null;
e.nActionContainer = null;
e.btnClose = null;
e.buttons = new Map();
return e;
}
r([ a(cc.Label) ], e.prototype, "lbTitle", void 0);
r([ a(cc.Label) ], e.prototype, "lbContent", void 0);
r([ a(cc.Node) ], e.prototype, "nCustomView", void 0);
r([ a(cc.Node) ], e.prototype, "nActionContainer", void 0);
r([ a(cc.Button) ], e.prototype, "btnClose", void 0);
return r([ s ], e);
}(fzgui.UIPopupCommon);
o.default = u;
cc._RF.pop();
}, {} ],
UIPopup: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2558ehHVUhC1Y7abTC2mXc3", "UIPopup");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(fzgui.UIPopup));
o.default = a;
cc._RF.pop();
}, {} ],
UIScreen: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "742e77TYztKOK9Af6WwIErB", "UIScreen");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.hideCurScreenOnShow = !0;
return e;
}
r([ a(cc.Boolean) ], e.prototype, "hideCurScreenOnShow", void 0);
return r([ s ], e);
}(fzgui.UIScreen);
o.default = u;
cc._RF.pop();
}, {} ],
UIScrollBar: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eb2bf77+s1LKIARwbyQpinD", "UIScrollBar");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.handle = null;
e.direction = fzgui.UIScrollBarDirection.VERTICAL;
e.enableAutoHide = !0;
e.autoHideTime = 1;
return e;
}
r([ a(cc.Sprite) ], e.prototype, "handle", void 0);
r([ a({
type: cc.Enum(fzgui.UIScrollBarDirection)
}) ], e.prototype, "direction", void 0);
r([ a(cc.Boolean) ], e.prototype, "enableAutoHide", void 0);
r([ a(cc.Float) ], e.prototype, "autoHideTime", void 0);
return r([ s ], e);
}(fzgui.UIScrollBar);
o.default = u;
cc._RF.pop();
}, {} ],
UIScrollContent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a2324boZkJFxpzNX6zz85gx", "UIScrollContent");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._scrollView = null;
return e;
}
Object.defineProperty(e.prototype, "scrollView", {
get: function() {
return this._scrollView;
},
set: function(t) {
this._scrollView = t;
},
enumerable: !1,
configurable: !0
});
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
UIScrollView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4d28aYP5v1NRJI1EFf152rw", "UIScrollView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./UIScrollBar"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.direction = fzgui.UIScrollDirection.BOTH;
e.zoomScaleEnabled = !1;
e.maxScale = 1;
e.minScale = 1;
e.content = null;
e.scrollEnabled = !0;
e.touchEnabled = !0;
e.dragChildrenEnabled = !1;
e.easingAutoScroll = !0;
e.movementFactor = .64;
e.horizontalScrollBar = null;
e.verticalScrollBar = null;
e.autoClearAutoScroll = !1;
e.autoClearAutoZoomScale = !1;
return e;
}
r([ u({
type: cc.Enum(fzgui.UIScrollDirection)
}) ], e.prototype, "direction", void 0);
r([ u ], e.prototype, "zoomScaleEnabled", void 0);
r([ u ], e.prototype, "maxScale", void 0);
r([ u ], e.prototype, "minScale", void 0);
r([ u(cc.Node) ], e.prototype, "content", void 0);
r([ u ], e.prototype, "scrollEnabled", void 0);
r([ u ], e.prototype, "touchEnabled", void 0);
r([ u ], e.prototype, "dragChildrenEnabled", void 0);
r([ u ], e.prototype, "easingAutoScroll", void 0);
r([ u ], e.prototype, "movementFactor", void 0);
r([ u(c.default) ], e.prototype, "horizontalScrollBar", void 0);
r([ u(c.default) ], e.prototype, "verticalScrollBar", void 0);
r([ u ], e.prototype, "autoClearAutoScroll", void 0);
r([ u ], e.prototype, "autoClearAutoZoomScale", void 0);
return r([ a ], e);
}(fzgui.UIScrollView);
o.default = l;
cc._RF.pop();
}, {
"./UIScrollBar": "UIScrollBar"
} ],
UIShowPopupHelp: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2b5a1gQmLpPe6Pc55sqYibU", "UIShowPopupHelp");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = "";
return e;
}
e.prototype.onEnable = function() {
this.node.getComponent(cc.Button) || this.node.addComponent(cc.Button);
this.node.on(fzgui.ControlEvent.Click, this._onClicked, this);
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
this.node.runAction(cc.scaleTo(.2, .92, .92));
}.bind(this));
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
this.node.runAction(cc.scaleTo(.2, 1, 1));
}.bind(this));
};
e.prototype.onDisable = function() {
this.node.off(fzgui.ControlEvent.Click, this._onClicked, this);
};
e.prototype._onClicked = function() {
fzgui.UIPopupManager.instance.showPopup(this.text);
};
r([ a ], e.prototype, "text", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
UITabbarController: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f48e8Syq7FBnpz9MjThYlbS", "UITabbarController");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./UITabbarItem"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.items = [];
e.content = null;
e.titleLabel = null;
e.startIndex = 0;
return e;
}
r([ u([ c.default ]) ], e.prototype, "items", void 0);
r([ u(cc.Node) ], e.prototype, "content", void 0);
r([ u(cc.Label) ], e.prototype, "titleLabel", void 0);
r([ u(cc.Integer) ], e.prototype, "startIndex", void 0);
return r([ a ], e);
}(fzgui.UITabbarController);
o.default = l;
cc._RF.pop();
}, {
"./UITabbarItem": "UITabbarItem"
} ],
UITabbarItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b92a2UbPxROtq7hEHvw7+8y", "UITabbarItem");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.title = "";
e.prefab = null;
e.nodeContent = null;
e.nodeOn = null;
e.nodeOff = null;
return e;
}
r([ a(cc.String) ], e.prototype, "title", void 0);
r([ a(cc.Prefab) ], e.prototype, "prefab", void 0);
r([ a(cc.Node) ], e.prototype, "nodeContent", void 0);
r([ a(cc.Node) ], e.prototype, "nodeOn", void 0);
r([ a(cc.Node) ], e.prototype, "nodeOff", void 0);
return r([ s ], e);
}(fzgui.UITabbarItem);
o.default = u;
cc._RF.pop();
}, {} ],
UITableCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "62daaYiRPtH+pZrGfUKRZsO", "UITableCell");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nSelected = null;
e.nDeselected = null;
e.nHighlighted = null;
e.nUnhighlighted = null;
return e;
}
r([ a(cc.Node) ], e.prototype, "nSelected", void 0);
r([ a(cc.Node) ], e.prototype, "nDeselected", void 0);
r([ a(cc.Node) ], e.prototype, "nHighlighted", void 0);
r([ a(cc.Node) ], e.prototype, "nUnhighlighted", void 0);
return r([ s ], e);
}(fzgui.UITableCell);
o.default = u;
cc._RF.pop();
}, {} ],
UITableView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a0e36R/pTtMt7lUY1yP/dOz", "UITableView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./UIScrollBar"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.direction = fzgui.UIScrollDirection.BOTH;
e.zoomScaleEnabled = !1;
e.maxScale = 1;
e.minScale = 1;
e.content = null;
e.scrollEnabled = !0;
e.touchEnabled = !0;
e.dragChildrenEnabled = !1;
e.easingAutoScroll = !0;
e.movementFactor = .64;
e.horizontalScrollBar = null;
e.verticalScrollBar = null;
e.autoClearAutoScroll = !1;
e.autoClearAutoZoomScale = !1;
e.fillOrder = fzgui.UITableViewFillOrder.LEFT_TO_RIGHT__TOP_TO_BOTTOM;
e.interactionMode = fzgui.UITableViewInteractionMode.NONE;
e.cellPagingEnabled = !1;
e.numberOfPagingCell = 1;
e.tableCell = null;
e.nEmpty = null;
return e;
}
r([ u({
type: cc.Enum(fzgui.UIScrollDirection)
}) ], e.prototype, "direction", void 0);
r([ u ], e.prototype, "zoomScaleEnabled", void 0);
r([ u ], e.prototype, "maxScale", void 0);
r([ u ], e.prototype, "minScale", void 0);
r([ u(cc.Node) ], e.prototype, "content", void 0);
r([ u ], e.prototype, "scrollEnabled", void 0);
r([ u ], e.prototype, "touchEnabled", void 0);
r([ u ], e.prototype, "dragChildrenEnabled", void 0);
r([ u ], e.prototype, "easingAutoScroll", void 0);
r([ u ], e.prototype, "movementFactor", void 0);
r([ u(c.default) ], e.prototype, "horizontalScrollBar", void 0);
r([ u(c.default) ], e.prototype, "verticalScrollBar", void 0);
r([ u ], e.prototype, "autoClearAutoScroll", void 0);
r([ u ], e.prototype, "autoClearAutoZoomScale", void 0);
r([ u({
type: cc.Enum(fzgui.UITableViewFillOrder)
}) ], e.prototype, "fillOrder", void 0);
r([ u({
type: cc.Enum(fzgui.UITableViewInteractionMode)
}) ], e.prototype, "interactionMode", void 0);
r([ u(cc.Boolean) ], e.prototype, "cellPagingEnabled", void 0);
r([ u(cc.Integer) ], e.prototype, "numberOfPagingCell", void 0);
r([ u(cc.Prefab) ], e.prototype, "tableCell", void 0);
r([ u(cc.Node) ], e.prototype, "nEmpty", void 0);
return r([ a ], e);
}(fzgui.UITableView);
o.default = l;
cc._RF.pop();
}, {
"./UIScrollBar": "UIScrollBar"
} ],
UITextManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "33835FdSiNMLbniOKoxQEKX", "UITextManager");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(fzgui.UITextManager));
o.default = a;
cc._RF.pop();
}, {} ],
UITooltipHandler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f7790lDpgxFqpDc3O6HIphN", "UITooltipHandler");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TooltipHideType = void 0;
var c, s = cc._decorator, a = s.ccclass, u = s.property;
(function(t) {
t[t.OnTouchDownOnScreen = 0] = "OnTouchDownOnScreen";
t[t.OnTouchUpOrMoveFromTarget = 1] = "OnTouchUpOrMoveFromTarget";
t[t.Invalid = 2] = "Invalid";
})(c = o.TooltipHideType || (o.TooltipHideType = {}));
var l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.followTarget = !0;
e.showAtTarget = !1;
e.hideType = c.OnTouchDownOnScreen;
e.manager = null;
return e;
}
r([ u ], e.prototype, "followTarget", void 0);
r([ u ], e.prototype, "showAtTarget", void 0);
r([ u({
type: cc.Enum(c)
}) ], e.prototype, "hideType", void 0);
return r([ a ], e);
}(fzgui.UITooltipHandler);
o.default = l;
cc._RF.pop();
}, {} ],
UITooltipListener: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "13585zGU79K+aJa2xJ16zgc", "UITooltipListener");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.message = "";
e.prefab = null;
e.target = null;
e.showType = fzgui.TooltipShowType.OnLongClick;
return e;
}
r([ a ], e.prototype, "message", void 0);
r([ a(cc.Prefab) ], e.prototype, "prefab", void 0);
r([ a(cc.Node) ], e.prototype, "target", void 0);
r([ a({
type: cc.Enum(fzgui.TooltipShowType)
}) ], e.prototype, "showType", void 0);
return r([ s ], e);
}(fzgui.UITooltipListener);
o.default = u;
cc._RF.pop();
}, {} ],
UITooltipManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0a624ZAIpxNsaqm18cBFaFW", "UITooltipManager");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(fzgui.UITooltipManager));
o.default = a;
cc._RF.pop();
}, {} ],
UITooltipMessage: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a9398x9OLNB15O3Y+okDscF", "UITooltipMessage");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./UITooltipHandler"), s = cc._decorator, a = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spBubble = null;
e.lbMessage = null;
return e;
}
r([ u(cc.Sprite) ], e.prototype, "spBubble", void 0);
r([ u(cc.Label) ], e.prototype, "lbMessage", void 0);
return r([ a ], e);
}(c.default);
o.default = l;
cc._RF.pop();
}, {
"./UITooltipHandler": "UITooltipHandler"
} ],
UITouchHandler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "76a1bwvdItKMrD/yHxtIn+9", "UITouchHandler");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.touchEvent = new cc.Component.EventHandler();
e.longClickEnabled = !1;
return e;
}
r([ a(cc.Component.EventHandler) ], e.prototype, "touchEvent", void 0);
r([ a ], e.prototype, "longClickEnabled", void 0);
return r([ s ], e);
}(fzgui.UITouchHandler);
o.default = u;
cc._RF.pop();
}, {} ],
UIWaitingLayout: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eadffzSZzdO+KkgOXSaKZBe", "UIWaitingLayout");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nFaded = null;
e.nLoading = null;
e.lbPercent = null;
return e;
}
e.prototype.onDisable = function() {
t.prototype.onDisable.call(this);
this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
};
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
this.nLoading && (this.nLoading.active = !1);
this.nFaded && (this.nFaded.active = !1);
var e = cc.sequence(cc.delayTime(0), cc.callFunc(this._showWaitingUI.bind(this)));
e.setTag(99);
this.node.stopActionByTag(99);
this.node.runAction(e);
};
e.prototype._showWaitingUI = function() {
this.nLoading && (this.nLoading.active = !0);
this.nFaded && (this.nFaded.active = !0);
};
e.prototype._onTouchStart = function(t) {
t.stopPropagation();
};
r([ a(cc.Node) ], e.prototype, "nFaded", void 0);
r([ a(cc.Node) ], e.prototype, "nLoading", void 0);
r([ a(cc.Label) ], e.prototype, "lbPercent", void 0);
return r([ s ], e);
}(fzgui.UIWaitingLayout);
o.default = u;
cc._RF.pop();
}, {} ],
UIWindow: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5b513z6C69Kr4wF3siWJHY2", "UIWindow");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(fzgui.UIWindow));
o.default = a;
cc._RF.pop();
}, {} ],
Utils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2515c7B2EhMFpB2s6zxJZFp", "Utils");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.common = void 0;
var n, i = cc._decorator;
i.ccclass, i.property;
(function(t) {
var e = function() {
function t() {}
t.degreesToVec2 = function(e) {
return t.radianToVec2(e * t.Deg2Rad);
};
t.radianToVec2 = function(t) {
return cc.v2(Math.cos(t), Math.sin(t));
};
t.numberToEnum = function(t, e) {
return e[e[t]];
};
t.loadSpriteFrameFromBase64 = function(t, e) {
var o = new Image();
o.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(o);
t.handleLoadedTexture();
var n = new cc.SpriteFrame(t);
e(n);
}.bind(this);
o.src = "data:image/png;base64," + t;
};
t.formatNumber = function(t) {
return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
t.formatNumberMin = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e9);
return this.formatNumber(t) + "B";
}
if (t >= 1e6) {
t = Math.ceil(t / 1e6);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
};
t.nFormatter = function(t) {
return t >= 1e9 ? t % 1e9 == 0 ? (t / 1e9).toFixed(0).replace(/\.0$/, "") + "B" : (t / 1e9).toFixed(2).replace(/\.0$/, "") + "B" : t >= 1e6 ? t % 1e6 == 0 ? (t / 1e6).toFixed(0).replace(/\.0$/, "") + "M" : (t / 1e6).toFixed(2).replace(/\.0$/, "") + "M" : t >= 1e3 ? t % 1e3 == 0 ? (t / 1e3).toFixed(0).replace(/\.0$/, "") + "K" : (t / 1e3).toFixed(2).replace(/\.0$/, "") + "K" : this.formatNumber(t);
};
t.stringToInt = function(t) {
var e = parseInt(t.replace(/\./g, "").replace(/,/g, ""));
isNaN(e) && (e = 0);
return e;
};
t.randomRangeInt = function(t, e) {
return Math.floor(Math.random() * (e - t)) + t;
};
t.randomRange = function(t, e) {
return Math.random() * (e - t) + t;
};
t.v2Distance = function(t, e) {
return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
};
t.v2Degrees = function(t, e) {
return 180 * Math.atan2(e.y - t.y, e.x - t.x) / Math.PI;
};
t.dateToYYYYMMdd = function(t) {
var e = t.getMonth() + 1, o = t.getDate();
return [ t.getFullYear(), (e > 9 ? "" : "0") + e, (o > 9 ? "" : "0") + o ].join("-");
};
t.dateToYYYYMM = function(t) {
var e = t.getMonth() + 1;
t.getDate();
return [ t.getFullYear(), (e > 9 ? "" : "0") + e ].join("-");
};
t.removeDups = function(t) {
var e = {};
t.forEach(function(t) {
e[t] || (e[t] = !0);
});
return Object.keys(e);
};
t.copyToClipboard = function(t) {
if (cc.sys.isNative) {
if (jsb) {
jsb.copyTextToClipboard(t);
return !0;
}
return !1;
}
var e = document.createElement("input");
e.value = t;
e.id = "inputID";
document.body.appendChild(e);
e.select();
document.execCommand("copy");
document.body.removeChild(e);
return !0;
};
t.Rad2Deg = -57.2957795;
t.Deg2Rad = -.0174532925;
return t;
}();
t.Utils = e;
})(n = o.common || (o.common = {}));
o.default = n.Utils;
cc._RF.pop();
}, {} ],
Util: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b6aecVn0bBHMo49C5DSB7Du", "Util");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.random = function(t, e) {
return Math.floor(Math.random() * (e - t + 1)) + t;
};
t.parseDate = function(t) {
var e = t, o = e.indexOf("T");
if (o >= 0) {
var n = e.substr(0, o), i = e.substr(o + 1, 5), r = n.substr(0, 4), c = n.substr(5, 2);
return n.substr(8, 2) + "/" + c + "/" + r + " " + i;
}
return "";
};
t.shuffle = function(t) {
for (var e = t.length - 1; e > 0; e--) {
var o = Math.floor(Math.random() * (e + 1)), n = t[e];
t[e] = t[o];
t[o] = n;
}
return t;
};
t.log = function() {};
t.validateNumber = function(t) {
return /^[0-9]+$/.test(t);
};
t.formatNumber = function(t) {
return void 0 === t ? "" : parseInt(t) < 1e3 ? t.toString() : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
t.removeDot = function(t) {
for (;t.indexOf(".") >= 0; ) t = t.replace(".", "");
return t;
};
t.timeoutListener = function(t, e, o) {
void 0 === e && (e = null);
void 0 === o && (o = null);
var n = null;
n = setTimeout(function() {
clearTimeout(n);
e && o && e.call(o);
}, 1e3 * t);
};
t.setCookie = function(t, e) {
var o = new Date();
o.setTime(o.getTime());
var n = "expires=" + o.toUTCString();
document.cookie = t + "=" + e + "; " + n;
};
t.getCookie = function(t) {
for (var e = t + "=", o = document.cookie.split(";"), n = 0; n < o.length; n++) {
for (var i = o[n]; " " == i.charAt(0); ) i = i.substring(1);
if (0 == i.indexOf(e)) return i.substring(e.length, i.length);
}
return "";
};
t.removeCookie = function(t) {
document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};
t.loadImgFromBinary = function(t, e) {
var o = "data:image/png;base64," + t, n = new Image();
n.src = o;
n.width = e.node.width;
n.height = e.node.height;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var o = new cc.SpriteFrame(t);
e.spriteFrame = o;
};
};
t.padString = function(t, e, o) {
void 0 === o && (o = "0");
return (t += "").length >= e ? t : new Array(e - t.length + 1).join(o) + t;
};
t.parseTime = function(t, e) {
return e ? this.padString(Math.floor(t / 3600).toString(), 2) + ":" + this.padString(Math.floor(Math.floor(t % 3600) / 60).toString(), 2) + ":" + this.padString(Math.floor(t % 60).toString(), 2) : this.padString(Math.floor(t / 60).toString(), 2) + ":" + this.padString((t % 60).toString(), 2);
};
t.removeArrayFromArray = function(t, e) {
return t.filter(function(t) {
return -1 === e.indexOf(t);
});
};
t.distance2Point = function(t, e) {
return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y));
};
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
VQMMConfig: [ function(t, e) {
"use strict";
cc._RF.push(e, "01bcfAmluNAFaVz5pWpC0ds", "VQMMConfig");
e.exports = {
SPIN_TIME: 2
};
cc._RF.pop();
}, {} ],
VersionConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e7ec4XN+cxFXosy8K+vQsvi", "VersionConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.CP_NAME_R99 = "R99";
t.CP_NAME_VIP52 = "VIP52";
t.CP_NAME_XXENG = "XXENG";
t.CP_NAME_MANVIP = "MANVIP";
t.CP_NAME_R99_2 = "R99_2";
t.CP_NAME_HT68 = "HT68";
t.CP_NAME_F69 = "F69";
t.CP_NAME_88KING = "88KING";
t.CP_NAME_MARBLES99 = "MARBLES99";
t.CP_NAME_SIN99 = "SIN99";
t.CP_NAME_TEST = "TEST";
t.CP_NAME_DOM99 = "DOM99";
t.VersionName = "";
t.CPName = "";
return t;
}();
o.default = n;
if (cc.sys.isNative) {
var i = cc.sys.localStorage.getItem("VersionConfig");
if (null != i) {
i = JSON.parse(i);
n.VersionName = i.VersionName;
n.CPName = i.CPName;
}
} else {
n.VersionName = "1.0.0";
n.CPName = n.CP_NAME_HT68;
}
cc._RF.pop();
}, {} ],
"crypto-js": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d8448USm6JPVbhmVn9jvOcf", "crypto-js");
n = function() {
var t, e, o, n = n || function(t) {
var e = Object.create || function() {
function t() {}
return function(e) {
var o;
t.prototype = e;
o = new t();
t.prototype = null;
return o;
};
}(), o = {}, n = o.lib = {}, i = n.Base = {
extend: function(t) {
var o = e(this);
t && o.mixIn(t);
o.hasOwnProperty("init") && this.init !== o.init || (o.init = function() {
o.$super.init.apply(this, arguments);
});
o.init.prototype = o;
o.$super = this;
return o;
},
create: function() {
var t = this.extend();
t.init.apply(t, arguments);
return t;
},
init: function() {},
mixIn: function(t) {
for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
t.hasOwnProperty("toString") && (this.toString = t.toString);
},
clone: function() {
return this.init.prototype.extend(this);
}
}, r = n.WordArray = i.extend({
init: function(t, e) {
t = this.words = t || [];
this.sigBytes = null != e ? e : 4 * t.length;
},
toString: function(t) {
return (t || s).stringify(this);
},
concat: function(t) {
var e = this.words, o = t.words, n = this.sigBytes, i = t.sigBytes;
this.clamp();
if (n % 4) for (var r = 0; r < i; r++) {
var c = o[r >>> 2] >>> 24 - r % 4 * 8 & 255;
e[n + r >>> 2] |= c << 24 - (n + r) % 4 * 8;
} else for (r = 0; r < i; r += 4) e[n + r >>> 2] = o[r >>> 2];
this.sigBytes += i;
return this;
},
clamp: function() {
var e = this.words, o = this.sigBytes;
e[o >>> 2] &= 4294967295 << 32 - o % 4 * 8;
e.length = t.ceil(o / 4);
},
clone: function() {
var t = i.clone.call(this);
t.words = this.words.slice(0);
return t;
},
random: function(e) {
for (var o, n = [], i = function(e) {
e = e;
var o = 987654321, n = 4294967295;
return function() {
var i = ((o = 36969 * (65535 & o) + (o >> 16) & n) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & n) & n;
i /= 4294967296;
return (i += .5) * (t.random() > .5 ? 1 : -1);
};
}, c = 0; c < e; c += 4) {
var s = i(4294967296 * (o || t.random()));
o = 987654071 * s();
n.push(4294967296 * s() | 0);
}
return new r.init(n, e);
}
}), c = o.enc = {}, s = c.Hex = {
stringify: function(t) {
for (var e = t.words, o = t.sigBytes, n = [], i = 0; i < o; i++) {
var r = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
n.push((r >>> 4).toString(16));
n.push((15 & r).toString(16));
}
return n.join("");
},
parse: function(t) {
for (var e = t.length, o = [], n = 0; n < e; n += 2) o[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
return new r.init(o, e / 2);
}
}, a = c.Latin1 = {
stringify: function(t) {
for (var e = t.words, o = t.sigBytes, n = [], i = 0; i < o; i++) {
var r = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
n.push(String.fromCharCode(r));
}
return n.join("");
},
parse: function(t) {
for (var e = t.length, o = [], n = 0; n < e; n++) o[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
return new r.init(o, e);
}
}, u = c.Utf8 = {
stringify: function(t) {
try {
return decodeURIComponent(escape(a.stringify(t)));
} catch (t) {
throw new Error("Malformed UTF-8 data");
}
},
parse: function(t) {
return a.parse(unescape(encodeURIComponent(t)));
}
}, l = n.BufferedBlockAlgorithm = i.extend({
reset: function() {
this._data = new r.init();
this._nDataBytes = 0;
},
_append: function(t) {
"string" == typeof t && (t = u.parse(t));
this._data.concat(t);
this._nDataBytes += t.sigBytes;
},
_process: function(e) {
var o = this._data, n = o.words, i = o.sigBytes, c = this.blockSize, s = i / (4 * c), a = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * c, u = t.min(4 * a, i);
if (a) {
for (var l = 0; l < a; l += c) this._doProcessBlock(n, l);
var p = n.splice(0, a);
o.sigBytes -= u;
}
return new r.init(p, u);
},
clone: function() {
var t = i.clone.call(this);
t._data = this._data.clone();
return t;
},
_minBufferSize: 0
}), p = (n.Hasher = l.extend({
cfg: i.extend(),
init: function(t) {
this.cfg = this.cfg.extend(t);
this.reset();
},
reset: function() {
l.reset.call(this);
this._doReset();
},
update: function(t) {
this._append(t);
this._process();
return this;
},
finalize: function(t) {
t && this._append(t);
return this._doFinalize();
},
blockSize: 16,
_createHelper: function(t) {
return function(e, o) {
return new t.init(o).finalize(e);
};
},
_createHmacHelper: function(t) {
return function(e, o) {
return new p.HMAC.init(t, o).finalize(e);
};
}
}), o.algo = {});
return o;
}(Math);
(function() {
var t = n, e = t.lib.WordArray;
t.enc.Base64 = {
stringify: function(t) {
var e = t.words, o = t.sigBytes, n = this._map;
t.clamp();
for (var i = [], r = 0; r < o; r += 3) for (var c = (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, s = 0; s < 4 && r + .75 * s < o; s++) i.push(n.charAt(c >>> 6 * (3 - s) & 63));
var a = n.charAt(64);
if (a) for (;i.length % 4; ) i.push(a);
return i.join("");
},
parse: function(t) {
var e = t.length, n = this._map, i = this._reverseMap;
if (!i) {
i = this._reverseMap = [];
for (var r = 0; r < n.length; r++) i[n.charCodeAt(r)] = r;
}
var c = n.charAt(64);
if (c) {
var s = t.indexOf(c);
-1 !== s && (e = s);
}
return o(t, e, i);
},
_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};
function o(t, o, n) {
for (var i = [], r = 0, c = 0; c < o; c++) if (c % 4) {
var s = n[t.charCodeAt(c - 1)] << c % 4 * 2, a = n[t.charCodeAt(c)] >>> 6 - c % 4 * 2;
i[r >>> 2] |= (s | a) << 24 - r % 4 * 8;
r++;
}
return e.create(i, r);
}
})();
(function(t) {
var e = n, o = e.lib, i = o.WordArray, r = o.Hasher, c = e.algo, s = [];
(function() {
for (var e = 0; e < 64; e++) s[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0;
})();
var a = c.MD5 = r.extend({
_doReset: function() {
this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
},
_doProcessBlock: function(t, e) {
for (var o = 0; o < 16; o++) {
var n = e + o, i = t[n];
t[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
}
var r = this._hash.words, c = t[e + 0], a = t[e + 1], f = t[e + 2], d = t[e + 3], _ = t[e + 4], y = t[e + 5], g = t[e + 6], m = t[e + 7], b = t[e + 8], S = t[e + 9], T = t[e + 10], I = t[e + 11], v = t[e + 12], E = t[e + 13], O = t[e + 14], R = t[e + 15], A = r[0], N = r[1], C = r[2], M = r[3];
A = u(A, N, C, M, c, 7, s[0]);
M = u(M, A, N, C, a, 12, s[1]);
C = u(C, M, A, N, f, 17, s[2]);
N = u(N, C, M, A, d, 22, s[3]);
A = u(A, N, C, M, _, 7, s[4]);
M = u(M, A, N, C, y, 12, s[5]);
C = u(C, M, A, N, g, 17, s[6]);
N = u(N, C, M, A, m, 22, s[7]);
A = u(A, N, C, M, b, 7, s[8]);
M = u(M, A, N, C, S, 12, s[9]);
C = u(C, M, A, N, T, 17, s[10]);
N = u(N, C, M, A, I, 22, s[11]);
A = u(A, N, C, M, v, 7, s[12]);
M = u(M, A, N, C, E, 12, s[13]);
C = u(C, M, A, N, O, 17, s[14]);
A = l(A, N = u(N, C, M, A, R, 22, s[15]), C, M, a, 5, s[16]);
M = l(M, A, N, C, g, 9, s[17]);
C = l(C, M, A, N, I, 14, s[18]);
N = l(N, C, M, A, c, 20, s[19]);
A = l(A, N, C, M, y, 5, s[20]);
M = l(M, A, N, C, T, 9, s[21]);
C = l(C, M, A, N, R, 14, s[22]);
N = l(N, C, M, A, _, 20, s[23]);
A = l(A, N, C, M, S, 5, s[24]);
M = l(M, A, N, C, O, 9, s[25]);
C = l(C, M, A, N, d, 14, s[26]);
N = l(N, C, M, A, b, 20, s[27]);
A = l(A, N, C, M, E, 5, s[28]);
M = l(M, A, N, C, f, 9, s[29]);
C = l(C, M, A, N, m, 14, s[30]);
A = p(A, N = l(N, C, M, A, v, 20, s[31]), C, M, y, 4, s[32]);
M = p(M, A, N, C, b, 11, s[33]);
C = p(C, M, A, N, I, 16, s[34]);
N = p(N, C, M, A, O, 23, s[35]);
A = p(A, N, C, M, a, 4, s[36]);
M = p(M, A, N, C, _, 11, s[37]);
C = p(C, M, A, N, m, 16, s[38]);
N = p(N, C, M, A, T, 23, s[39]);
A = p(A, N, C, M, E, 4, s[40]);
M = p(M, A, N, C, c, 11, s[41]);
C = p(C, M, A, N, d, 16, s[42]);
N = p(N, C, M, A, g, 23, s[43]);
A = p(A, N, C, M, S, 4, s[44]);
M = p(M, A, N, C, v, 11, s[45]);
C = p(C, M, A, N, R, 16, s[46]);
A = h(A, N = p(N, C, M, A, f, 23, s[47]), C, M, c, 6, s[48]);
M = h(M, A, N, C, m, 10, s[49]);
C = h(C, M, A, N, O, 15, s[50]);
N = h(N, C, M, A, y, 21, s[51]);
A = h(A, N, C, M, v, 6, s[52]);
M = h(M, A, N, C, d, 10, s[53]);
C = h(C, M, A, N, T, 15, s[54]);
N = h(N, C, M, A, a, 21, s[55]);
A = h(A, N, C, M, b, 6, s[56]);
M = h(M, A, N, C, R, 10, s[57]);
C = h(C, M, A, N, g, 15, s[58]);
N = h(N, C, M, A, E, 21, s[59]);
A = h(A, N, C, M, _, 6, s[60]);
M = h(M, A, N, C, I, 10, s[61]);
C = h(C, M, A, N, f, 15, s[62]);
N = h(N, C, M, A, S, 21, s[63]);
r[0] = r[0] + A | 0;
r[1] = r[1] + N | 0;
r[2] = r[2] + C | 0;
r[3] = r[3] + M | 0;
},
_doFinalize: function() {
var e = this._data, o = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
o[i >>> 5] |= 128 << 24 - i % 32;
var r = t.floor(n / 4294967296), c = n;
o[15 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
o[14 + (i + 64 >>> 9 << 4)] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
e.sigBytes = 4 * (o.length + 1);
this._process();
for (var s = this._hash, a = s.words, u = 0; u < 4; u++) {
var l = a[u];
a[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
}
return s;
},
clone: function() {
var t = r.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
function u(t, e, o, n, i, r, c) {
var s = t + (e & o | ~e & n) + i + c;
return (s << r | s >>> 32 - r) + e;
}
function l(t, e, o, n, i, r, c) {
var s = t + (e & n | o & ~n) + i + c;
return (s << r | s >>> 32 - r) + e;
}
function p(t, e, o, n, i, r, c) {
var s = t + (e ^ o ^ n) + i + c;
return (s << r | s >>> 32 - r) + e;
}
function h(t, e, o, n, i, r, c) {
var s = t + (o ^ (e | ~n)) + i + c;
return (s << r | s >>> 32 - r) + e;
}
e.MD5 = r._createHelper(a);
e.HmacMD5 = r._createHmacHelper(a);
})(Math);
(function() {
var t = n, e = t.lib, o = e.WordArray, i = e.Hasher, r = t.algo, c = [], s = r.SHA1 = i.extend({
_doReset: function() {
this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
},
_doProcessBlock: function(t, e) {
for (var o = this._hash.words, n = o[0], i = o[1], r = o[2], s = o[3], a = o[4], u = 0; u < 80; u++) {
if (u < 16) c[u] = 0 | t[e + u]; else {
var l = c[u - 3] ^ c[u - 8] ^ c[u - 14] ^ c[u - 16];
c[u] = l << 1 | l >>> 31;
}
var p = (n << 5 | n >>> 27) + a + c[u];
p += u < 20 ? 1518500249 + (i & r | ~i & s) : u < 40 ? 1859775393 + (i ^ r ^ s) : u < 60 ? (i & r | i & s | r & s) - 1894007588 : (i ^ r ^ s) - 899497514;
a = s;
s = r;
r = i << 30 | i >>> 2;
i = n;
n = p;
}
o[0] = o[0] + n | 0;
o[1] = o[1] + i | 0;
o[2] = o[2] + r | 0;
o[3] = o[3] + s | 0;
o[4] = o[4] + a | 0;
},
_doFinalize: function() {
var t = this._data, e = t.words, o = 8 * this._nDataBytes, n = 8 * t.sigBytes;
e[n >>> 5] |= 128 << 24 - n % 32;
e[14 + (n + 64 >>> 9 << 4)] = Math.floor(o / 4294967296);
e[15 + (n + 64 >>> 9 << 4)] = o;
t.sigBytes = 4 * e.length;
this._process();
return this._hash;
},
clone: function() {
var t = i.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
t.SHA1 = i._createHelper(s);
t.HmacSHA1 = i._createHmacHelper(s);
})();
(function(t) {
var e = n, o = e.lib, i = o.WordArray, r = o.Hasher, c = e.algo, s = [], a = [];
(function() {
function e(e) {
for (var o = t.sqrt(e), n = 2; n <= o; n++) if (!(e % n)) return !1;
return !0;
}
function o(t) {
return 4294967296 * (t - (0 | t)) | 0;
}
for (var n = 2, i = 0; i < 64; ) {
if (e(n)) {
i < 8 && (s[i] = o(t.pow(n, .5)));
a[i] = o(t.pow(n, 1 / 3));
i++;
}
n++;
}
})();
var u = [], l = c.SHA256 = r.extend({
_doReset: function() {
this._hash = new i.init(s.slice(0));
},
_doProcessBlock: function(t, e) {
for (var o = this._hash.words, n = o[0], i = o[1], r = o[2], c = o[3], s = o[4], l = o[5], p = o[6], h = o[7], f = 0; f < 64; f++) {
if (f < 16) u[f] = 0 | t[e + f]; else {
var d = u[f - 15], _ = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3, y = u[f - 2], g = (y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10;
u[f] = _ + u[f - 7] + g + u[f - 16];
}
var m = n & i ^ n & r ^ i & r, b = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22), S = h + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & l ^ ~s & p) + a[f] + u[f];
h = p;
p = l;
l = s;
s = c + S | 0;
c = r;
r = i;
i = n;
n = S + (b + m) | 0;
}
o[0] = o[0] + n | 0;
o[1] = o[1] + i | 0;
o[2] = o[2] + r | 0;
o[3] = o[3] + c | 0;
o[4] = o[4] + s | 0;
o[5] = o[5] + l | 0;
o[6] = o[6] + p | 0;
o[7] = o[7] + h | 0;
},
_doFinalize: function() {
var e = this._data, o = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
o[i >>> 5] |= 128 << 24 - i % 32;
o[14 + (i + 64 >>> 9 << 4)] = t.floor(n / 4294967296);
o[15 + (i + 64 >>> 9 << 4)] = n;
e.sigBytes = 4 * o.length;
this._process();
return this._hash;
},
clone: function() {
var t = r.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
e.SHA256 = r._createHelper(l);
e.HmacSHA256 = r._createHmacHelper(l);
})(Math);
(function() {
var t = n, e = t.lib.WordArray, o = t.enc;
o.Utf16 = o.Utf16BE = {
stringify: function(t) {
for (var e = t.words, o = t.sigBytes, n = [], i = 0; i < o; i += 2) {
var r = e[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
n.push(String.fromCharCode(r));
}
return n.join("");
},
parse: function(t) {
for (var o = t.length, n = [], i = 0; i < o; i++) n[i >>> 1] |= t.charCodeAt(i) << 16 - i % 2 * 16;
return e.create(n, 2 * o);
}
};
o.Utf16LE = {
stringify: function(t) {
for (var e = t.words, o = t.sigBytes, n = [], r = 0; r < o; r += 2) {
var c = i(e[r >>> 2] >>> 16 - r % 4 * 8 & 65535);
n.push(String.fromCharCode(c));
}
return n.join("");
},
parse: function(t) {
for (var o = t.length, n = [], r = 0; r < o; r++) n[r >>> 1] |= i(t.charCodeAt(r) << 16 - r % 2 * 16);
return e.create(n, 2 * o);
}
};
function i(t) {
return t << 8 & 4278255360 | t >>> 8 & 16711935;
}
})();
(function() {
if ("function" == typeof ArrayBuffer) {
var t = n.lib.WordArray, e = t.init;
(t.init = function(t) {
t instanceof ArrayBuffer && (t = new Uint8Array(t));
(t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
if (t instanceof Uint8Array) {
for (var o = t.byteLength, n = [], i = 0; i < o; i++) n[i >>> 2] |= t[i] << 24 - i % 4 * 8;
e.call(this, n, o);
} else e.apply(this, arguments);
}).prototype = t;
}
})();
(function() {
var t = n, e = t.lib, o = e.WordArray, i = e.Hasher, r = t.algo, c = o.create([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ]), s = o.create([ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ]), a = o.create([ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ]), u = o.create([ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ]), l = o.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]), p = o.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]), h = r.RIPEMD160 = i.extend({
_doReset: function() {
this._hash = o.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
},
_doProcessBlock: function(t, e) {
for (var o = 0; o < 16; o++) {
var n = e + o, i = t[n];
t[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
}
var r, h, b, S, T, I, v, E, O, R, A, N = this._hash.words, C = l.words, M = p.words, P = c.words, w = s.words, L = a.words, B = u.words;
I = r = N[0];
v = h = N[1];
E = b = N[2];
O = S = N[3];
R = T = N[4];
for (o = 0; o < 80; o += 1) {
A = r + t[e + P[o]] | 0;
A += o < 16 ? f(h, b, S) + C[0] : o < 32 ? d(h, b, S) + C[1] : o < 48 ? _(h, b, S) + C[2] : o < 64 ? y(h, b, S) + C[3] : g(h, b, S) + C[4];
A = (A = m(A |= 0, L[o])) + T | 0;
r = T;
T = S;
S = m(b, 10);
b = h;
h = A;
A = I + t[e + w[o]] | 0;
A += o < 16 ? g(v, E, O) + M[0] : o < 32 ? y(v, E, O) + M[1] : o < 48 ? _(v, E, O) + M[2] : o < 64 ? d(v, E, O) + M[3] : f(v, E, O) + M[4];
A = (A = m(A |= 0, B[o])) + R | 0;
I = R;
R = O;
O = m(E, 10);
E = v;
v = A;
}
A = N[1] + b + O | 0;
N[1] = N[2] + S + R | 0;
N[2] = N[3] + T + I | 0;
N[3] = N[4] + r + v | 0;
N[4] = N[0] + h + E | 0;
N[0] = A;
},
_doFinalize: function() {
var t = this._data, e = t.words, o = 8 * this._nDataBytes, n = 8 * t.sigBytes;
e[n >>> 5] |= 128 << 24 - n % 32;
e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
t.sigBytes = 4 * (e.length + 1);
this._process();
for (var i = this._hash, r = i.words, c = 0; c < 5; c++) {
var s = r[c];
r[c] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
}
return i;
},
clone: function() {
var t = i.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
function f(t, e, o) {
return t ^ e ^ o;
}
function d(t, e, o) {
return t & e | ~t & o;
}
function _(t, e, o) {
return (t | ~e) ^ o;
}
function y(t, e, o) {
return t & o | e & ~o;
}
function g(t, e, o) {
return t ^ (e | ~o);
}
function m(t, e) {
return t << e | t >>> 32 - e;
}
t.RIPEMD160 = i._createHelper(h);
t.HmacRIPEMD160 = i._createHmacHelper(h);
})(Math);
e = (t = n).lib.Base, o = t.enc.Utf8, t.algo.HMAC = e.extend({
init: function(t, e) {
t = this._hasher = new t.init();
"string" == typeof e && (e = o.parse(e));
var n = t.blockSize, i = 4 * n;
e.sigBytes > i && (e = t.finalize(e));
e.clamp();
for (var r = this._oKey = e.clone(), c = this._iKey = e.clone(), s = r.words, a = c.words, u = 0; u < n; u++) {
s[u] ^= 1549556828;
a[u] ^= 909522486;
}
r.sigBytes = c.sigBytes = i;
this.reset();
},
reset: function() {
var t = this._hasher;
t.reset();
t.update(this._iKey);
},
update: function(t) {
this._hasher.update(t);
return this;
},
finalize: function(t) {
var e = this._hasher, o = e.finalize(t);
e.reset();
return e.finalize(this._oKey.clone().concat(o));
}
});
(function() {
var t = n, e = t.lib, o = e.Base, i = e.WordArray, r = t.algo, c = r.SHA1, s = r.HMAC, a = r.PBKDF2 = o.extend({
cfg: o.extend({
keySize: 4,
hasher: c,
iterations: 1
}),
init: function(t) {
this.cfg = this.cfg.extend(t);
},
compute: function(t, e) {
for (var o = this.cfg, n = s.create(o.hasher, t), r = i.create(), c = i.create([ 1 ]), a = r.words, u = c.words, l = o.keySize, p = o.iterations; a.length < l; ) {
var h = n.update(e).finalize(c);
n.reset();
for (var f = h.words, d = f.length, _ = h, y = 1; y < p; y++) {
_ = n.finalize(_);
n.reset();
for (var g = _.words, m = 0; m < d; m++) f[m] ^= g[m];
}
r.concat(h);
u[0]++;
}
r.sigBytes = 4 * l;
return r;
}
});
t.PBKDF2 = function(t, e, o) {
return a.create(o).compute(t, e);
};
})();
(function() {
var t = n, e = t.lib, o = e.Base, i = e.WordArray, r = t.algo, c = r.MD5, s = r.EvpKDF = o.extend({
cfg: o.extend({
keySize: 4,
hasher: c,
iterations: 1
}),
init: function(t) {
this.cfg = this.cfg.extend(t);
},
compute: function(t, e) {
for (var o = this.cfg, n = o.hasher.create(), r = i.create(), c = r.words, s = o.keySize, a = o.iterations; c.length < s; ) {
u && n.update(u);
var u = n.update(t).finalize(e);
n.reset();
for (var l = 1; l < a; l++) {
u = n.finalize(u);
n.reset();
}
r.concat(u);
}
r.sigBytes = 4 * s;
return r;
}
});
t.EvpKDF = function(t, e, o) {
return s.create(o).compute(t, e);
};
})();
(function() {
var t = n, e = t.lib.WordArray, o = t.algo, i = o.SHA256, r = o.SHA224 = i.extend({
_doReset: function() {
this._hash = new e.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
},
_doFinalize: function() {
var t = i._doFinalize.call(this);
t.sigBytes -= 4;
return t;
}
});
t.SHA224 = i._createHelper(r);
t.HmacSHA224 = i._createHmacHelper(r);
})();
(function() {
var t = n, e = t.lib, o = e.Base, i = e.WordArray, r = t.x64 = {};
r.Word = o.extend({
init: function(t, e) {
this.high = t;
this.low = e;
}
}), r.WordArray = o.extend({
init: function(t, e) {
t = this.words = t || [];
this.sigBytes = null != e ? e : 8 * t.length;
},
toX32: function() {
for (var t = this.words, e = t.length, o = [], n = 0; n < e; n++) {
var r = t[n];
o.push(r.high);
o.push(r.low);
}
return i.create(o, this.sigBytes);
},
clone: function() {
for (var t = o.clone.call(this), e = t.words = this.words.slice(0), n = e.length, i = 0; i < n; i++) e[i] = e[i].clone();
return t;
}
});
})();
(function(t) {
var e = n, o = e.lib, i = o.WordArray, r = o.Hasher, c = e.x64.Word, s = e.algo, a = [], u = [], l = [];
(function() {
for (var t = 1, e = 0, o = 0; o < 24; o++) {
a[t + 5 * e] = (o + 1) * (o + 2) / 2 % 64;
var n = (2 * t + 3 * e) % 5;
t = e % 5;
e = n;
}
for (t = 0; t < 5; t++) for (e = 0; e < 5; e++) u[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
for (var i = 1, r = 0; r < 24; r++) {
for (var s = 0, p = 0, h = 0; h < 7; h++) {
if (1 & i) {
var f = (1 << h) - 1;
f < 32 ? p ^= 1 << f : s ^= 1 << f - 32;
}
128 & i ? i = i << 1 ^ 113 : i <<= 1;
}
l[r] = c.create(s, p);
}
})();
var p = [];
(function() {
for (var t = 0; t < 25; t++) p[t] = c.create();
})();
var h = s.SHA3 = r.extend({
cfg: r.cfg.extend({
outputLength: 512
}),
_doReset: function() {
for (var t = this._state = [], e = 0; e < 25; e++) t[e] = new c.init();
this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
},
_doProcessBlock: function(t, e) {
for (var o = this._state, n = this.blockSize / 2, i = 0; i < n; i++) {
var r = t[e + 2 * i], c = t[e + 2 * i + 1];
r = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
c = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
(N = o[i]).high ^= c;
N.low ^= r;
}
for (var s = 0; s < 24; s++) {
for (var h = 0; h < 5; h++) {
for (var f = 0, d = 0, _ = 0; _ < 5; _++) {
f ^= (N = o[h + 5 * _]).high;
d ^= N.low;
}
var y = p[h];
y.high = f;
y.low = d;
}
for (h = 0; h < 5; h++) {
var g = p[(h + 4) % 5], m = p[(h + 1) % 5], b = m.high, S = m.low;
for (f = g.high ^ (b << 1 | S >>> 31), d = g.low ^ (S << 1 | b >>> 31), _ = 0; _ < 5; _++) {
(N = o[h + 5 * _]).high ^= f;
N.low ^= d;
}
}
for (var T = 1; T < 25; T++) {
var I = (N = o[T]).high, v = N.low, E = a[T];
E < 32 ? (f = I << E | v >>> 32 - E, d = v << E | I >>> 32 - E) : (f = v << E - 32 | I >>> 64 - E, 
d = I << E - 32 | v >>> 64 - E);
var O = p[u[T]];
O.high = f;
O.low = d;
}
var R = p[0], A = o[0];
R.high = A.high;
R.low = A.low;
for (h = 0; h < 5; h++) for (_ = 0; _ < 5; _++) {
var N = o[T = h + 5 * _], C = p[T], M = p[(h + 1) % 5 + 5 * _], P = p[(h + 2) % 5 + 5 * _];
N.high = C.high ^ ~M.high & P.high;
N.low = C.low ^ ~M.low & P.low;
}
N = o[0];
var w = l[s];
N.high ^= w.high;
N.low ^= w.low;
}
},
_doFinalize: function() {
var e = this._data, o = e.words, n = (this._nDataBytes, 8 * e.sigBytes), r = 32 * this.blockSize;
o[n >>> 5] |= 1 << 24 - n % 32;
o[(t.ceil((n + 1) / r) * r >>> 5) - 1] |= 128;
e.sigBytes = 4 * o.length;
this._process();
for (var c = this._state, s = this.cfg.outputLength / 8, a = s / 8, u = [], l = 0; l < a; l++) {
var p = c[l], h = p.high, f = p.low;
h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
u.push(f);
u.push(h);
}
return new i.init(u, s);
},
clone: function() {
for (var t = r.clone.call(this), e = t._state = this._state.slice(0), o = 0; o < 25; o++) e[o] = e[o].clone();
return t;
}
});
e.SHA3 = r._createHelper(h);
e.HmacSHA3 = r._createHmacHelper(h);
})(Math);
(function() {
var t = n, e = t.lib.Hasher, o = t.x64, i = o.Word, r = o.WordArray, c = t.algo;
function s() {
return i.create.apply(i, arguments);
}
var a = [ s(1116352408, 3609767458), s(1899447441, 602891725), s(3049323471, 3964484399), s(3921009573, 2173295548), s(961987163, 4081628472), s(1508970993, 3053834265), s(2453635748, 2937671579), s(2870763221, 3664609560), s(3624381080, 2734883394), s(310598401, 1164996542), s(607225278, 1323610764), s(1426881987, 3590304994), s(1925078388, 4068182383), s(2162078206, 991336113), s(2614888103, 633803317), s(3248222580, 3479774868), s(3835390401, 2666613458), s(4022224774, 944711139), s(264347078, 2341262773), s(604807628, 2007800933), s(770255983, 1495990901), s(1249150122, 1856431235), s(1555081692, 3175218132), s(1996064986, 2198950837), s(2554220882, 3999719339), s(2821834349, 766784016), s(2952996808, 2566594879), s(3210313671, 3203337956), s(3336571891, 1034457026), s(3584528711, 2466948901), s(113926993, 3758326383), s(338241895, 168717936), s(666307205, 1188179964), s(773529912, 1546045734), s(1294757372, 1522805485), s(1396182291, 2643833823), s(1695183700, 2343527390), s(1986661051, 1014477480), s(2177026350, 1206759142), s(2456956037, 344077627), s(2730485921, 1290863460), s(2820302411, 3158454273), s(3259730800, 3505952657), s(3345764771, 106217008), s(3516065817, 3606008344), s(3600352804, 1432725776), s(4094571909, 1467031594), s(275423344, 851169720), s(430227734, 3100823752), s(506948616, 1363258195), s(659060556, 3750685593), s(883997877, 3785050280), s(958139571, 3318307427), s(1322822218, 3812723403), s(1537002063, 2003034995), s(1747873779, 3602036899), s(1955562222, 1575990012), s(2024104815, 1125592928), s(2227730452, 2716904306), s(2361852424, 442776044), s(2428436474, 593698344), s(2756734187, 3733110249), s(3204031479, 2999351573), s(3329325298, 3815920427), s(3391569614, 3928383900), s(3515267271, 566280711), s(3940187606, 3454069534), s(4118630271, 4000239992), s(116418474, 1914138554), s(174292421, 2731055270), s(289380356, 3203993006), s(460393269, 320620315), s(685471733, 587496836), s(852142971, 1086792851), s(1017036298, 365543100), s(1126000580, 2618297676), s(1288033470, 3409855158), s(1501505948, 4234509866), s(1607167915, 987167468), s(1816402316, 1246189591) ], u = [];
(function() {
for (var t = 0; t < 80; t++) u[t] = s();
})();
var l = c.SHA512 = e.extend({
_doReset: function() {
this._hash = new r.init([ new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209) ]);
},
_doProcessBlock: function(t, e) {
for (var o = this._hash.words, n = o[0], i = o[1], r = o[2], c = o[3], s = o[4], l = o[5], p = o[6], h = o[7], f = n.high, d = n.low, _ = i.high, y = i.low, g = r.high, m = r.low, b = c.high, S = c.low, T = s.high, I = s.low, v = l.high, E = l.low, O = p.high, R = p.low, A = h.high, N = h.low, C = f, M = d, P = _, w = y, L = g, B = m, D = b, U = S, F = T, k = I, V = v, H = E, G = O, j = R, x = A, W = N, K = 0; K < 80; K++) {
var Y = u[K];
if (K < 16) var X = Y.high = 0 | t[e + 2 * K], z = Y.low = 0 | t[e + 2 * K + 1]; else {
var J = u[K - 15], q = J.high, Q = J.low, Z = (q >>> 1 | Q << 31) ^ (q >>> 8 | Q << 24) ^ q >>> 7, $ = (Q >>> 1 | q << 31) ^ (Q >>> 8 | q << 24) ^ (Q >>> 7 | q << 25), tt = u[K - 2], et = tt.high, ot = tt.low, nt = (et >>> 19 | ot << 13) ^ (et << 3 | ot >>> 29) ^ et >>> 6, it = (ot >>> 19 | et << 13) ^ (ot << 3 | et >>> 29) ^ (ot >>> 6 | et << 26), rt = u[K - 7], ct = rt.high, st = rt.low, at = u[K - 16], ut = at.high, lt = at.low;
X = (X = (X = Z + ct + ((z = $ + st) >>> 0 < $ >>> 0 ? 1 : 0)) + nt + ((z += it) >>> 0 < it >>> 0 ? 1 : 0)) + ut + ((z += lt) >>> 0 < lt >>> 0 ? 1 : 0);
Y.high = X;
Y.low = z;
}
var pt, ht = F & V ^ ~F & G, ft = k & H ^ ~k & j, dt = C & P ^ C & L ^ P & L, _t = M & w ^ M & B ^ w & B, yt = (C >>> 28 | M << 4) ^ (C << 30 | M >>> 2) ^ (C << 25 | M >>> 7), gt = (M >>> 28 | C << 4) ^ (M << 30 | C >>> 2) ^ (M << 25 | C >>> 7), mt = (F >>> 14 | k << 18) ^ (F >>> 18 | k << 14) ^ (F << 23 | k >>> 9), bt = (k >>> 14 | F << 18) ^ (k >>> 18 | F << 14) ^ (k << 23 | F >>> 9), St = a[K], Tt = St.high, It = St.low, vt = x + mt + ((pt = W + bt) >>> 0 < W >>> 0 ? 1 : 0), Et = gt + _t;
x = G;
W = j;
G = V;
j = H;
V = F;
H = k;
F = D + (vt = (vt = (vt = vt + ht + ((pt += ft) >>> 0 < ft >>> 0 ? 1 : 0)) + Tt + ((pt += It) >>> 0 < It >>> 0 ? 1 : 0)) + X + ((pt += z) >>> 0 < z >>> 0 ? 1 : 0)) + ((k = U + pt | 0) >>> 0 < U >>> 0 ? 1 : 0) | 0;
D = L;
U = B;
L = P;
B = w;
P = C;
w = M;
C = vt + (yt + dt + (Et >>> 0 < gt >>> 0 ? 1 : 0)) + ((M = pt + Et | 0) >>> 0 < pt >>> 0 ? 1 : 0) | 0;
}
d = n.low = d + M;
n.high = f + C + (d >>> 0 < M >>> 0 ? 1 : 0);
y = i.low = y + w;
i.high = _ + P + (y >>> 0 < w >>> 0 ? 1 : 0);
m = r.low = m + B;
r.high = g + L + (m >>> 0 < B >>> 0 ? 1 : 0);
S = c.low = S + U;
c.high = b + D + (S >>> 0 < U >>> 0 ? 1 : 0);
I = s.low = I + k;
s.high = T + F + (I >>> 0 < k >>> 0 ? 1 : 0);
E = l.low = E + H;
l.high = v + V + (E >>> 0 < H >>> 0 ? 1 : 0);
R = p.low = R + j;
p.high = O + G + (R >>> 0 < j >>> 0 ? 1 : 0);
N = h.low = N + W;
h.high = A + x + (N >>> 0 < W >>> 0 ? 1 : 0);
},
_doFinalize: function() {
var t = this._data, e = t.words, o = 8 * this._nDataBytes, n = 8 * t.sigBytes;
e[n >>> 5] |= 128 << 24 - n % 32;
e[30 + (n + 128 >>> 10 << 5)] = Math.floor(o / 4294967296);
e[31 + (n + 128 >>> 10 << 5)] = o;
t.sigBytes = 4 * e.length;
this._process();
return this._hash.toX32();
},
clone: function() {
var t = e.clone.call(this);
t._hash = this._hash.clone();
return t;
},
blockSize: 32
});
t.SHA512 = e._createHelper(l);
t.HmacSHA512 = e._createHmacHelper(l);
})();
(function() {
var t = n, e = t.x64, o = e.Word, i = e.WordArray, r = t.algo, c = r.SHA512, s = r.SHA384 = c.extend({
_doReset: function() {
this._hash = new i.init([ new o.init(3418070365, 3238371032), new o.init(1654270250, 914150663), new o.init(2438529370, 812702999), new o.init(355462360, 4144912697), new o.init(1731405415, 4290775857), new o.init(2394180231, 1750603025), new o.init(3675008525, 1694076839), new o.init(1203062813, 3204075428) ]);
},
_doFinalize: function() {
var t = c._doFinalize.call(this);
t.sigBytes -= 16;
return t;
}
});
t.SHA384 = c._createHelper(s);
t.HmacSHA384 = c._createHmacHelper(s);
})();
n.lib.Cipher || function(t) {
var e = n, o = e.lib, i = o.Base, r = o.WordArray, c = o.BufferedBlockAlgorithm, s = e.enc, a = (s.Utf8, 
s.Base64), u = e.algo.EvpKDF, l = o.Cipher = c.extend({
cfg: i.extend(),
createEncryptor: function(t, e) {
return this.create(this._ENC_XFORM_MODE, t, e);
},
createDecryptor: function(t, e) {
return this.create(this._DEC_XFORM_MODE, t, e);
},
init: function(t, e, o) {
this.cfg = this.cfg.extend(o);
this._xformMode = t;
this._key = e;
this.reset();
},
reset: function() {
c.reset.call(this);
this._doReset();
},
process: function(t) {
this._append(t);
return this._process();
},
finalize: function(t) {
t && this._append(t);
return this._doFinalize();
},
keySize: 4,
ivSize: 4,
_ENC_XFORM_MODE: 1,
_DEC_XFORM_MODE: 2,
_createHelper: function() {
function t(t) {
return "string" == typeof t ? b : g;
}
return function(e) {
return {
encrypt: function(o, n, i) {
return t(n).encrypt(e, o, n, i);
},
decrypt: function(o, n, i) {
return t(n).decrypt(e, o, n, i);
}
};
};
}()
}), p = (o.StreamCipher = l.extend({
_doFinalize: function() {
return this._process(!0);
},
blockSize: 1
}), e.mode = {}), h = o.BlockCipherMode = i.extend({
createEncryptor: function(t, e) {
return this.Encryptor.create(t, e);
},
createDecryptor: function(t, e) {
return this.Decryptor.create(t, e);
},
init: function(t, e) {
this._cipher = t;
this._iv = e;
}
}), f = p.CBC = function() {
var e = h.extend();
e.Encryptor = e.extend({
processBlock: function(t, e) {
var n = this._cipher, i = n.blockSize;
o.call(this, t, e, i);
n.encryptBlock(t, e);
this._prevBlock = t.slice(e, e + i);
}
});
e.Decryptor = e.extend({
processBlock: function(t, e) {
var n = this._cipher, i = n.blockSize, r = t.slice(e, e + i);
n.decryptBlock(t, e);
o.call(this, t, e, i);
this._prevBlock = r;
}
});
function o(e, o, n) {
var i = this._iv;
if (i) {
var r = i;
this._iv = t;
} else r = this._prevBlock;
for (var c = 0; c < n; c++) e[o + c] ^= r[c];
}
return e;
}(), d = (e.pad = {}).Pkcs7 = {
pad: function(t, e) {
for (var o = 4 * e, n = o - t.sigBytes % o, i = n << 24 | n << 16 | n << 8 | n, c = [], s = 0; s < n; s += 4) c.push(i);
var a = r.create(c, n);
t.concat(a);
},
unpad: function(t) {
var e = 255 & t.words[t.sigBytes - 1 >>> 2];
t.sigBytes -= e;
}
}, _ = (o.BlockCipher = l.extend({
cfg: l.cfg.extend({
mode: f,
padding: d
}),
reset: function() {
l.reset.call(this);
var t = this.cfg, e = t.iv, o = t.mode;
if (this._xformMode == this._ENC_XFORM_MODE) var n = o.createEncryptor; else {
n = o.createDecryptor;
this._minBufferSize = 1;
}
if (this._mode && this._mode.__creator == n) this._mode.init(this, e && e.words); else {
this._mode = n.call(o, this, e && e.words);
this._mode.__creator = n;
}
},
_doProcessBlock: function(t, e) {
this._mode.processBlock(t, e);
},
_doFinalize: function() {
var t = this.cfg.padding;
if (this._xformMode == this._ENC_XFORM_MODE) {
t.pad(this._data, this.blockSize);
var e = this._process(!0);
} else {
e = this._process(!0);
t.unpad(e);
}
return e;
},
blockSize: 4
}), o.CipherParams = i.extend({
init: function(t) {
this.mixIn(t);
},
toString: function(t) {
return (t || this.formatter).stringify(this);
}
})), y = (e.format = {}).OpenSSL = {
stringify: function(t) {
var e = t.ciphertext, o = t.salt;
if (o) var n = r.create([ 1398893684, 1701076831 ]).concat(o).concat(e); else n = e;
return n.toString(a);
},
parse: function(t) {
var e = a.parse(t), o = e.words;
if (1398893684 == o[0] && 1701076831 == o[1]) {
var n = r.create(o.slice(2, 4));
o.splice(0, 4);
e.sigBytes -= 16;
}
return _.create({
ciphertext: e,
salt: n
});
}
}, g = o.SerializableCipher = i.extend({
cfg: i.extend({
format: y
}),
encrypt: function(t, e, o, n) {
n = this.cfg.extend(n);
var i = t.createEncryptor(o, n), r = i.finalize(e), c = i.cfg;
return _.create({
ciphertext: r,
key: o,
iv: c.iv,
algorithm: t,
mode: c.mode,
padding: c.padding,
blockSize: t.blockSize,
formatter: n.format
});
},
decrypt: function(t, e, o, n) {
n = this.cfg.extend(n);
e = this._parse(e, n.format);
return t.createDecryptor(o, n).finalize(e.ciphertext);
},
_parse: function(t, e) {
return "string" == typeof t ? e.parse(t, this) : t;
}
}), m = (e.kdf = {}).OpenSSL = {
execute: function(t, e, o, n) {
n || (n = r.random(8));
var i = u.create({
keySize: e + o
}).compute(t, n), c = r.create(i.words.slice(e), 4 * o);
i.sigBytes = 4 * e;
return _.create({
key: i,
iv: c,
salt: n
});
}
}, b = o.PasswordBasedCipher = g.extend({
cfg: g.cfg.extend({
kdf: m
}),
encrypt: function(t, e, o, n) {
var i = (n = this.cfg.extend(n)).kdf.execute(o, t.keySize, t.ivSize);
n.iv = i.iv;
var r = g.encrypt.call(this, t, e, i.key, n);
r.mixIn(i);
return r;
},
decrypt: function(t, e, o, n) {
n = this.cfg.extend(n);
e = this._parse(e, n.format);
var i = n.kdf.execute(o, t.keySize, t.ivSize, e.salt);
n.iv = i.iv;
return g.decrypt.call(this, t, e, i.key, n);
}
});
}();
n.mode.CFB = function() {
var t = n.lib.BlockCipherMode.extend();
t.Encryptor = t.extend({
processBlock: function(t, o) {
var n = this._cipher, i = n.blockSize;
e.call(this, t, o, i, n);
this._prevBlock = t.slice(o, o + i);
}
});
t.Decryptor = t.extend({
processBlock: function(t, o) {
var n = this._cipher, i = n.blockSize, r = t.slice(o, o + i);
e.call(this, t, o, i, n);
this._prevBlock = r;
}
});
function e(t, e, o, n) {
var i = this._iv;
if (i) {
var r = i.slice(0);
this._iv = void 0;
} else r = this._prevBlock;
n.encryptBlock(r, 0);
for (var c = 0; c < o; c++) t[e + c] ^= r[c];
}
return t;
}();
n.mode.ECB = function() {
var t = n.lib.BlockCipherMode.extend();
t.Encryptor = t.extend({
processBlock: function(t, e) {
this._cipher.encryptBlock(t, e);
}
});
t.Decryptor = t.extend({
processBlock: function(t, e) {
this._cipher.decryptBlock(t, e);
}
});
return t;
}();
n.pad.AnsiX923 = {
pad: function(t, e) {
var o = t.sigBytes, n = 4 * e, i = n - o % n, r = o + i - 1;
t.clamp();
t.words[r >>> 2] |= i << 24 - r % 4 * 8;
t.sigBytes += i;
},
unpad: function(t) {
var e = 255 & t.words[t.sigBytes - 1 >>> 2];
t.sigBytes -= e;
}
};
n.pad.Iso10126 = {
pad: function(t, e) {
var o = 4 * e, i = o - t.sigBytes % o;
t.concat(n.lib.WordArray.random(i - 1)).concat(n.lib.WordArray.create([ i << 24 ], 1));
},
unpad: function(t) {
var e = 255 & t.words[t.sigBytes - 1 >>> 2];
t.sigBytes -= e;
}
};
n.pad.Iso97971 = {
pad: function(t, e) {
t.concat(n.lib.WordArray.create([ 2147483648 ], 1));
n.pad.ZeroPadding.pad(t, e);
},
unpad: function(t) {
n.pad.ZeroPadding.unpad(t);
t.sigBytes--;
}
};
n.mode.OFB = function() {
var t = n.lib.BlockCipherMode.extend(), e = t.Encryptor = t.extend({
processBlock: function(t, e) {
var o = this._cipher, n = o.blockSize, i = this._iv, r = this._keystream;
if (i) {
r = this._keystream = i.slice(0);
this._iv = void 0;
}
o.encryptBlock(r, 0);
for (var c = 0; c < n; c++) t[e + c] ^= r[c];
}
});
t.Decryptor = e;
return t;
}();
n.pad.NoPadding = {
pad: function() {},
unpad: function() {}
};
(function() {
var t = n, e = t.lib.CipherParams, o = t.enc.Hex;
t.format.Hex = {
stringify: function(t) {
return t.ciphertext.toString(o);
},
parse: function(t) {
var n = o.parse(t);
return e.create({
ciphertext: n
});
}
};
})();
(function() {
var t = n, e = t.lib.BlockCipher, o = t.algo, i = [], r = [], c = [], s = [], a = [], u = [], l = [], p = [], h = [], f = [];
(function() {
for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
var o = 0, n = 0;
for (e = 0; e < 256; e++) {
var d = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
d = d >>> 8 ^ 255 & d ^ 99;
i[o] = d;
r[d] = o;
var _ = t[o], y = t[_], g = t[y], m = 257 * t[d] ^ 16843008 * d;
c[o] = m << 24 | m >>> 8;
s[o] = m << 16 | m >>> 16;
a[o] = m << 8 | m >>> 24;
u[o] = m;
m = 16843009 * g ^ 65537 * y ^ 257 * _ ^ 16843008 * o;
l[d] = m << 24 | m >>> 8;
p[d] = m << 16 | m >>> 16;
h[d] = m << 8 | m >>> 24;
f[d] = m;
if (o) {
o = _ ^ t[t[t[g ^ _]]];
n ^= t[t[n]];
} else o = n = 1;
}
})();
var d = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], _ = o.AES = e.extend({
_doReset: function() {
if (!this._nRounds || this._keyPriorReset !== this._key) {
for (var t = this._keyPriorReset = this._key, e = t.words, o = t.sigBytes / 4, n = 4 * ((this._nRounds = o + 6) + 1), r = this._keySchedule = [], c = 0; c < n; c++) if (c < o) r[c] = e[c]; else {
var s = r[c - 1];
if (c % o) o > 6 && c % o == 4 && (s = i[s >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s]); else {
s = i[(s = s << 8 | s >>> 24) >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s];
s ^= d[c / o | 0] << 24;
}
r[c] = r[c - o] ^ s;
}
for (var a = this._invKeySchedule = [], u = 0; u < n; u++) {
c = n - u;
s = u % 4 ? r[c] : r[c - 4];
a[u] = u < 4 || c <= 4 ? s : l[i[s >>> 24]] ^ p[i[s >>> 16 & 255]] ^ h[i[s >>> 8 & 255]] ^ f[i[255 & s]];
}
}
},
encryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._keySchedule, c, s, a, u, i);
},
decryptBlock: function(t, e) {
var o = t[e + 1];
t[e + 1] = t[e + 3];
t[e + 3] = o;
this._doCryptBlock(t, e, this._invKeySchedule, l, p, h, f, r);
o = t[e + 1];
t[e + 1] = t[e + 3];
t[e + 3] = o;
},
_doCryptBlock: function(t, e, o, n, i, r, c, s) {
for (var a = this._nRounds, u = t[e] ^ o[0], l = t[e + 1] ^ o[1], p = t[e + 2] ^ o[2], h = t[e + 3] ^ o[3], f = 4, d = 1; d < a; d++) {
var _ = n[u >>> 24] ^ i[l >>> 16 & 255] ^ r[p >>> 8 & 255] ^ c[255 & h] ^ o[f++], y = n[l >>> 24] ^ i[p >>> 16 & 255] ^ r[h >>> 8 & 255] ^ c[255 & u] ^ o[f++], g = n[p >>> 24] ^ i[h >>> 16 & 255] ^ r[u >>> 8 & 255] ^ c[255 & l] ^ o[f++], m = n[h >>> 24] ^ i[u >>> 16 & 255] ^ r[l >>> 8 & 255] ^ c[255 & p] ^ o[f++];
u = _;
l = y;
p = g;
h = m;
}
_ = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & h]) ^ o[f++], 
y = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & u]) ^ o[f++], 
g = (s[p >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ o[f++], 
m = (s[h >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ o[f++];
t[e] = _;
t[e + 1] = y;
t[e + 2] = g;
t[e + 3] = m;
},
keySize: 8
});
t.AES = e._createHelper(_);
})();
(function() {
var t = n, e = t.lib, o = e.WordArray, i = e.BlockCipher, r = t.algo, c = [ 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ], s = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ], a = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ], u = [ {
0: 8421888,
268435456: 32768,
536870912: 8421378,
805306368: 2,
1073741824: 512,
1342177280: 8421890,
1610612736: 8389122,
1879048192: 8388608,
2147483648: 514,
2415919104: 8389120,
2684354560: 33280,
2952790016: 8421376,
3221225472: 32770,
3489660928: 8388610,
3758096384: 0,
4026531840: 33282,
134217728: 0,
402653184: 8421890,
671088640: 33282,
939524096: 32768,
1207959552: 8421888,
1476395008: 512,
1744830464: 8421378,
2013265920: 2,
2281701376: 8389120,
2550136832: 33280,
2818572288: 8421376,
3087007744: 8389122,
3355443200: 8388610,
3623878656: 32770,
3892314112: 514,
4160749568: 8388608,
1: 32768,
268435457: 2,
536870913: 8421888,
805306369: 8388608,
1073741825: 8421378,
1342177281: 33280,
1610612737: 512,
1879048193: 8389122,
2147483649: 8421890,
2415919105: 8421376,
2684354561: 8388610,
2952790017: 33282,
3221225473: 514,
3489660929: 8389120,
3758096385: 32770,
4026531841: 0,
134217729: 8421890,
402653185: 8421376,
671088641: 8388608,
939524097: 512,
1207959553: 32768,
1476395009: 8388610,
1744830465: 2,
2013265921: 33282,
2281701377: 32770,
2550136833: 8389122,
2818572289: 514,
3087007745: 8421888,
3355443201: 8389120,
3623878657: 0,
3892314113: 33280,
4160749569: 8421378
}, {
0: 1074282512,
16777216: 16384,
33554432: 524288,
50331648: 1074266128,
67108864: 1073741840,
83886080: 1074282496,
100663296: 1073758208,
117440512: 16,
134217728: 540672,
150994944: 1073758224,
167772160: 1073741824,
184549376: 540688,
201326592: 524304,
218103808: 0,
234881024: 16400,
251658240: 1074266112,
8388608: 1073758208,
25165824: 540688,
41943040: 16,
58720256: 1073758224,
75497472: 1074282512,
92274688: 1073741824,
109051904: 524288,
125829120: 1074266128,
142606336: 524304,
159383552: 0,
176160768: 16384,
192937984: 1074266112,
209715200: 1073741840,
226492416: 540672,
243269632: 1074282496,
260046848: 16400,
268435456: 0,
285212672: 1074266128,
301989888: 1073758224,
318767104: 1074282496,
335544320: 1074266112,
352321536: 16,
369098752: 540688,
385875968: 16384,
402653184: 16400,
419430400: 524288,
436207616: 524304,
452984832: 1073741840,
469762048: 540672,
486539264: 1073758208,
503316480: 1073741824,
520093696: 1074282512,
276824064: 540688,
293601280: 524288,
310378496: 1074266112,
327155712: 16384,
343932928: 1073758208,
360710144: 1074282512,
377487360: 16,
394264576: 1073741824,
411041792: 1074282496,
427819008: 1073741840,
444596224: 1073758224,
461373440: 524304,
478150656: 0,
494927872: 16400,
511705088: 1074266128,
528482304: 540672
}, {
0: 260,
1048576: 0,
2097152: 67109120,
3145728: 65796,
4194304: 65540,
5242880: 67108868,
6291456: 67174660,
7340032: 67174400,
8388608: 67108864,
9437184: 67174656,
10485760: 65792,
11534336: 67174404,
12582912: 67109124,
13631488: 65536,
14680064: 4,
15728640: 256,
524288: 67174656,
1572864: 67174404,
2621440: 0,
3670016: 67109120,
4718592: 67108868,
5767168: 65536,
6815744: 65540,
7864320: 260,
8912896: 4,
9961472: 256,
11010048: 67174400,
12058624: 65796,
13107200: 65792,
14155776: 67109124,
15204352: 67174660,
16252928: 67108864,
16777216: 67174656,
17825792: 65540,
18874368: 65536,
19922944: 67109120,
20971520: 256,
22020096: 67174660,
23068672: 67108868,
24117248: 0,
25165824: 67109124,
26214400: 67108864,
27262976: 4,
28311552: 65792,
29360128: 67174400,
30408704: 260,
31457280: 65796,
32505856: 67174404,
17301504: 67108864,
18350080: 260,
19398656: 67174656,
20447232: 0,
21495808: 65540,
22544384: 67109120,
23592960: 256,
24641536: 67174404,
25690112: 65536,
26738688: 67174660,
27787264: 65796,
28835840: 67108868,
29884416: 67109124,
30932992: 67174400,
31981568: 4,
33030144: 65792
}, {
0: 2151682048,
65536: 2147487808,
131072: 4198464,
196608: 2151677952,
262144: 0,
327680: 4198400,
393216: 2147483712,
458752: 4194368,
524288: 2147483648,
589824: 4194304,
655360: 64,
720896: 2147487744,
786432: 2151678016,
851968: 4160,
917504: 4096,
983040: 2151682112,
32768: 2147487808,
98304: 64,
163840: 2151678016,
229376: 2147487744,
294912: 4198400,
360448: 2151682112,
425984: 0,
491520: 2151677952,
557056: 4096,
622592: 2151682048,
688128: 4194304,
753664: 4160,
819200: 2147483648,
884736: 4194368,
950272: 4198464,
1015808: 2147483712,
1048576: 4194368,
1114112: 4198400,
1179648: 2147483712,
1245184: 0,
1310720: 4160,
1376256: 2151678016,
1441792: 2151682048,
1507328: 2147487808,
1572864: 2151682112,
1638400: 2147483648,
1703936: 2151677952,
1769472: 4198464,
1835008: 2147487744,
1900544: 4194304,
1966080: 64,
2031616: 4096,
1081344: 2151677952,
1146880: 2151682112,
1212416: 0,
1277952: 4198400,
1343488: 4194368,
1409024: 2147483648,
1474560: 2147487808,
1540096: 64,
1605632: 2147483712,
1671168: 4096,
1736704: 2147487744,
1802240: 2151678016,
1867776: 4160,
1933312: 2151682048,
1998848: 4194304,
2064384: 4198464
}, {
0: 128,
4096: 17039360,
8192: 262144,
12288: 536870912,
16384: 537133184,
20480: 16777344,
24576: 553648256,
28672: 262272,
32768: 16777216,
36864: 537133056,
40960: 536871040,
45056: 553910400,
49152: 553910272,
53248: 0,
57344: 17039488,
61440: 553648128,
2048: 17039488,
6144: 553648256,
10240: 128,
14336: 17039360,
18432: 262144,
22528: 537133184,
26624: 553910272,
30720: 536870912,
34816: 537133056,
38912: 0,
43008: 553910400,
47104: 16777344,
51200: 536871040,
55296: 553648128,
59392: 16777216,
63488: 262272,
65536: 262144,
69632: 128,
73728: 536870912,
77824: 553648256,
81920: 16777344,
86016: 553910272,
90112: 537133184,
94208: 16777216,
98304: 553910400,
102400: 553648128,
106496: 17039360,
110592: 537133056,
114688: 262272,
118784: 536871040,
122880: 0,
126976: 17039488,
67584: 553648256,
71680: 16777216,
75776: 17039360,
79872: 537133184,
83968: 536870912,
88064: 17039488,
92160: 128,
96256: 553910272,
100352: 262272,
104448: 553910400,
108544: 0,
112640: 553648128,
116736: 16777344,
120832: 262144,
124928: 537133056,
129024: 536871040
}, {
0: 268435464,
256: 8192,
512: 270532608,
768: 270540808,
1024: 268443648,
1280: 2097152,
1536: 2097160,
1792: 268435456,
2048: 0,
2304: 268443656,
2560: 2105344,
2816: 8,
3072: 270532616,
3328: 2105352,
3584: 8200,
3840: 270540800,
128: 270532608,
384: 270540808,
640: 8,
896: 2097152,
1152: 2105352,
1408: 268435464,
1664: 268443648,
1920: 8200,
2176: 2097160,
2432: 8192,
2688: 268443656,
2944: 270532616,
3200: 0,
3456: 270540800,
3712: 2105344,
3968: 268435456,
4096: 268443648,
4352: 270532616,
4608: 270540808,
4864: 8200,
5120: 2097152,
5376: 268435456,
5632: 268435464,
5888: 2105344,
6144: 2105352,
6400: 0,
6656: 8,
6912: 270532608,
7168: 8192,
7424: 268443656,
7680: 270540800,
7936: 2097160,
4224: 8,
4480: 2105344,
4736: 2097152,
4992: 268435464,
5248: 268443648,
5504: 8200,
5760: 270540808,
6016: 270532608,
6272: 270540800,
6528: 270532616,
6784: 8192,
7040: 2105352,
7296: 2097160,
7552: 0,
7808: 268435456,
8064: 268443656
}, {
0: 1048576,
16: 33555457,
32: 1024,
48: 1049601,
64: 34604033,
80: 0,
96: 1,
112: 34603009,
128: 33555456,
144: 1048577,
160: 33554433,
176: 34604032,
192: 34603008,
208: 1025,
224: 1049600,
240: 33554432,
8: 34603009,
24: 0,
40: 33555457,
56: 34604032,
72: 1048576,
88: 33554433,
104: 33554432,
120: 1025,
136: 1049601,
152: 33555456,
168: 34603008,
184: 1048577,
200: 1024,
216: 34604033,
232: 1,
248: 1049600,
256: 33554432,
272: 1048576,
288: 33555457,
304: 34603009,
320: 1048577,
336: 33555456,
352: 34604032,
368: 1049601,
384: 1025,
400: 34604033,
416: 1049600,
432: 1,
448: 0,
464: 34603008,
480: 33554433,
496: 1024,
264: 1049600,
280: 33555457,
296: 34603009,
312: 1,
328: 33554432,
344: 1048576,
360: 1025,
376: 34604032,
392: 33554433,
408: 34603008,
424: 0,
440: 34604033,
456: 1049601,
472: 1024,
488: 33555456,
504: 1048577
}, {
0: 134219808,
1: 131072,
2: 134217728,
3: 32,
4: 131104,
5: 134350880,
6: 134350848,
7: 2048,
8: 134348800,
9: 134219776,
10: 133120,
11: 134348832,
12: 2080,
13: 0,
14: 134217760,
15: 133152,
2147483648: 2048,
2147483649: 134350880,
2147483650: 134219808,
2147483651: 134217728,
2147483652: 134348800,
2147483653: 133120,
2147483654: 133152,
2147483655: 32,
2147483656: 134217760,
2147483657: 2080,
2147483658: 131104,
2147483659: 134350848,
2147483660: 0,
2147483661: 134348832,
2147483662: 134219776,
2147483663: 131072,
16: 133152,
17: 134350848,
18: 32,
19: 2048,
20: 134219776,
21: 134217760,
22: 134348832,
23: 131072,
24: 0,
25: 131104,
26: 134348800,
27: 134219808,
28: 134350880,
29: 133120,
30: 2080,
31: 134217728,
2147483664: 131072,
2147483665: 2048,
2147483666: 134348832,
2147483667: 133152,
2147483668: 32,
2147483669: 134348800,
2147483670: 134217728,
2147483671: 134219808,
2147483672: 134350880,
2147483673: 134217760,
2147483674: 134219776,
2147483675: 0,
2147483676: 133120,
2147483677: 2080,
2147483678: 131104,
2147483679: 134350848
} ], l = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ], p = r.DES = i.extend({
_doReset: function() {
for (var t = this._key.words, e = [], o = 0; o < 56; o++) {
var n = c[o] - 1;
e[o] = t[n >>> 5] >>> 31 - n % 32 & 1;
}
for (var i = this._subKeys = [], r = 0; r < 16; r++) {
var u = i[r] = [], l = a[r];
for (o = 0; o < 24; o++) {
u[o / 6 | 0] |= e[(s[o] - 1 + l) % 28] << 31 - o % 6;
u[4 + (o / 6 | 0)] |= e[28 + (s[o + 24] - 1 + l) % 28] << 31 - o % 6;
}
u[0] = u[0] << 1 | u[0] >>> 31;
for (o = 1; o < 7; o++) u[o] = u[o] >>> 4 * (o - 1) + 3;
u[7] = u[7] << 5 | u[7] >>> 27;
}
var p = this._invSubKeys = [];
for (o = 0; o < 16; o++) p[o] = i[15 - o];
},
encryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._subKeys);
},
decryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._invSubKeys);
},
_doCryptBlock: function(t, e, o) {
this._lBlock = t[e];
this._rBlock = t[e + 1];
h.call(this, 4, 252645135);
h.call(this, 16, 65535);
f.call(this, 2, 858993459);
f.call(this, 8, 16711935);
h.call(this, 1, 1431655765);
for (var n = 0; n < 16; n++) {
for (var i = o[n], r = this._lBlock, c = this._rBlock, s = 0, a = 0; a < 8; a++) s |= u[a][((c ^ i[a]) & l[a]) >>> 0];
this._lBlock = c;
this._rBlock = r ^ s;
}
var p = this._lBlock;
this._lBlock = this._rBlock;
this._rBlock = p;
h.call(this, 1, 1431655765);
f.call(this, 8, 16711935);
f.call(this, 2, 858993459);
h.call(this, 16, 65535);
h.call(this, 4, 252645135);
t[e] = this._lBlock;
t[e + 1] = this._rBlock;
},
keySize: 2,
ivSize: 2,
blockSize: 2
});
function h(t, e) {
var o = (this._lBlock >>> t ^ this._rBlock) & e;
this._rBlock ^= o;
this._lBlock ^= o << t;
}
function f(t, e) {
var o = (this._rBlock >>> t ^ this._lBlock) & e;
this._lBlock ^= o;
this._rBlock ^= o << t;
}
t.DES = i._createHelper(p);
var d = r.TripleDES = i.extend({
_doReset: function() {
var t = this._key.words;
this._des1 = p.createEncryptor(o.create(t.slice(0, 2)));
this._des2 = p.createEncryptor(o.create(t.slice(2, 4)));
this._des3 = p.createEncryptor(o.create(t.slice(4, 6)));
},
encryptBlock: function(t, e) {
this._des1.encryptBlock(t, e);
this._des2.decryptBlock(t, e);
this._des3.encryptBlock(t, e);
},
decryptBlock: function(t, e) {
this._des3.decryptBlock(t, e);
this._des2.encryptBlock(t, e);
this._des1.decryptBlock(t, e);
},
keySize: 6,
ivSize: 2,
blockSize: 2
});
t.TripleDES = i._createHelper(d);
})();
(function() {
var t = n, e = t.lib.StreamCipher, o = t.algo, i = o.RC4 = e.extend({
_doReset: function() {
for (var t = this._key, e = t.words, o = t.sigBytes, n = this._S = [], i = 0; i < 256; i++) n[i] = i;
i = 0;
for (var r = 0; i < 256; i++) {
var c = i % o, s = e[c >>> 2] >>> 24 - c % 4 * 8 & 255;
r = (r + n[i] + s) % 256;
var a = n[i];
n[i] = n[r];
n[r] = a;
}
this._i = this._j = 0;
},
_doProcessBlock: function(t, e) {
t[e] ^= r.call(this);
},
keySize: 8,
ivSize: 0
});
function r() {
for (var t = this._S, e = this._i, o = this._j, n = 0, i = 0; i < 4; i++) {
o = (o + t[e = (e + 1) % 256]) % 256;
var r = t[e];
t[e] = t[o];
t[o] = r;
n |= t[(t[e] + t[o]) % 256] << 24 - 8 * i;
}
this._i = e;
this._j = o;
return n;
}
t.RC4 = e._createHelper(i);
var c = o.RC4Drop = i.extend({
cfg: i.cfg.extend({
drop: 192
}),
_doReset: function() {
i._doReset.call(this);
for (var t = this.cfg.drop; t > 0; t--) r.call(this);
}
});
t.RC4Drop = e._createHelper(c);
})();
n.mode.CTRGladman = function() {
var t = n.lib.BlockCipherMode.extend();
function e(t) {
if (255 == (t >> 24 & 255)) {
var e = t >> 16 & 255, o = t >> 8 & 255, n = 255 & t;
if (255 === e) {
e = 0;
if (255 === o) {
o = 0;
255 === n ? n = 0 : ++n;
} else ++o;
} else ++e;
t = 0;
t += e << 16;
t += o << 8;
t += n;
} else t += 1 << 24;
return t;
}
function o(t) {
0 === (t[0] = e(t[0])) && (t[1] = e(t[1]));
return t;
}
var i = t.Encryptor = t.extend({
processBlock: function(t, e) {
var n = this._cipher, i = n.blockSize, r = this._iv, c = this._counter;
if (r) {
c = this._counter = r.slice(0);
this._iv = void 0;
}
o(c);
var s = c.slice(0);
n.encryptBlock(s, 0);
for (var a = 0; a < i; a++) t[e + a] ^= s[a];
}
});
t.Decryptor = i;
return t;
}();
(function() {
var t = n, e = t.lib.StreamCipher, o = t.algo, i = [], r = [], c = [], s = o.Rabbit = e.extend({
_doReset: function() {
for (var t = this._key.words, e = this.cfg.iv, o = 0; o < 4; o++) t[o] = 16711935 & (t[o] << 8 | t[o] >>> 24) | 4278255360 & (t[o] << 24 | t[o] >>> 8);
var n = this._X = [ t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16 ], i = this._C = [ t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0] ];
this._b = 0;
for (o = 0; o < 4; o++) a.call(this);
for (o = 0; o < 8; o++) i[o] ^= n[o + 4 & 7];
if (e) {
var r = e.words, c = r[0], s = r[1], u = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), l = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), p = u >>> 16 | 4294901760 & l, h = l << 16 | 65535 & u;
i[0] ^= u;
i[1] ^= p;
i[2] ^= l;
i[3] ^= h;
i[4] ^= u;
i[5] ^= p;
i[6] ^= l;
i[7] ^= h;
for (o = 0; o < 4; o++) a.call(this);
}
},
_doProcessBlock: function(t, e) {
var o = this._X;
a.call(this);
i[0] = o[0] ^ o[5] >>> 16 ^ o[3] << 16;
i[1] = o[2] ^ o[7] >>> 16 ^ o[5] << 16;
i[2] = o[4] ^ o[1] >>> 16 ^ o[7] << 16;
i[3] = o[6] ^ o[3] >>> 16 ^ o[1] << 16;
for (var n = 0; n < 4; n++) {
i[n] = 16711935 & (i[n] << 8 | i[n] >>> 24) | 4278255360 & (i[n] << 24 | i[n] >>> 8);
t[e + n] ^= i[n];
}
},
blockSize: 4,
ivSize: 2
});
function a() {
for (var t = this._X, e = this._C, o = 0; o < 8; o++) r[o] = e[o];
e[0] = e[0] + 1295307597 + this._b | 0;
e[1] = e[1] + 3545052371 + (e[0] >>> 0 < r[0] >>> 0 ? 1 : 0) | 0;
e[2] = e[2] + 886263092 + (e[1] >>> 0 < r[1] >>> 0 ? 1 : 0) | 0;
e[3] = e[3] + 1295307597 + (e[2] >>> 0 < r[2] >>> 0 ? 1 : 0) | 0;
e[4] = e[4] + 3545052371 + (e[3] >>> 0 < r[3] >>> 0 ? 1 : 0) | 0;
e[5] = e[5] + 886263092 + (e[4] >>> 0 < r[4] >>> 0 ? 1 : 0) | 0;
e[6] = e[6] + 1295307597 + (e[5] >>> 0 < r[5] >>> 0 ? 1 : 0) | 0;
e[7] = e[7] + 3545052371 + (e[6] >>> 0 < r[6] >>> 0 ? 1 : 0) | 0;
this._b = e[7] >>> 0 < r[7] >>> 0 ? 1 : 0;
for (o = 0; o < 8; o++) {
var n = t[o] + e[o], i = 65535 & n, s = n >>> 16, a = ((i * i >>> 17) + i * s >>> 15) + s * s, u = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
c[o] = a ^ u;
}
t[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0;
t[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0;
t[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0;
t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0;
t[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0;
t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0;
t[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0;
t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
}
t.Rabbit = e._createHelper(s);
})();
n.mode.CTR = function() {
var t = n.lib.BlockCipherMode.extend(), e = t.Encryptor = t.extend({
processBlock: function(t, e) {
var o = this._cipher, n = o.blockSize, i = this._iv, r = this._counter;
if (i) {
r = this._counter = i.slice(0);
this._iv = void 0;
}
var c = r.slice(0);
o.encryptBlock(c, 0);
r[n - 1] = r[n - 1] + 1 | 0;
for (var s = 0; s < n; s++) t[e + s] ^= c[s];
}
});
t.Decryptor = e;
return t;
}();
(function() {
var t = n, e = t.lib.StreamCipher, o = t.algo, i = [], r = [], c = [], s = o.RabbitLegacy = e.extend({
_doReset: function() {
var t = this._key.words, e = this.cfg.iv, o = this._X = [ t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16 ], n = this._C = [ t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0] ];
this._b = 0;
for (var i = 0; i < 4; i++) a.call(this);
for (i = 0; i < 8; i++) n[i] ^= o[i + 4 & 7];
if (e) {
var r = e.words, c = r[0], s = r[1], u = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), l = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), p = u >>> 16 | 4294901760 & l, h = l << 16 | 65535 & u;
n[0] ^= u;
n[1] ^= p;
n[2] ^= l;
n[3] ^= h;
n[4] ^= u;
n[5] ^= p;
n[6] ^= l;
n[7] ^= h;
for (i = 0; i < 4; i++) a.call(this);
}
},
_doProcessBlock: function(t, e) {
var o = this._X;
a.call(this);
i[0] = o[0] ^ o[5] >>> 16 ^ o[3] << 16;
i[1] = o[2] ^ o[7] >>> 16 ^ o[5] << 16;
i[2] = o[4] ^ o[1] >>> 16 ^ o[7] << 16;
i[3] = o[6] ^ o[3] >>> 16 ^ o[1] << 16;
for (var n = 0; n < 4; n++) {
i[n] = 16711935 & (i[n] << 8 | i[n] >>> 24) | 4278255360 & (i[n] << 24 | i[n] >>> 8);
t[e + n] ^= i[n];
}
},
blockSize: 4,
ivSize: 2
});
function a() {
for (var t = this._X, e = this._C, o = 0; o < 8; o++) r[o] = e[o];
e[0] = e[0] + 1295307597 + this._b | 0;
e[1] = e[1] + 3545052371 + (e[0] >>> 0 < r[0] >>> 0 ? 1 : 0) | 0;
e[2] = e[2] + 886263092 + (e[1] >>> 0 < r[1] >>> 0 ? 1 : 0) | 0;
e[3] = e[3] + 1295307597 + (e[2] >>> 0 < r[2] >>> 0 ? 1 : 0) | 0;
e[4] = e[4] + 3545052371 + (e[3] >>> 0 < r[3] >>> 0 ? 1 : 0) | 0;
e[5] = e[5] + 886263092 + (e[4] >>> 0 < r[4] >>> 0 ? 1 : 0) | 0;
e[6] = e[6] + 1295307597 + (e[5] >>> 0 < r[5] >>> 0 ? 1 : 0) | 0;
e[7] = e[7] + 3545052371 + (e[6] >>> 0 < r[6] >>> 0 ? 1 : 0) | 0;
this._b = e[7] >>> 0 < r[7] >>> 0 ? 1 : 0;
for (o = 0; o < 8; o++) {
var n = t[o] + e[o], i = 65535 & n, s = n >>> 16, a = ((i * i >>> 17) + i * s >>> 15) + s * s, u = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
c[o] = a ^ u;
}
t[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0;
t[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0;
t[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0;
t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0;
t[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0;
t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0;
t[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0;
t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
}
t.RabbitLegacy = e._createHelper(s);
})();
n.pad.ZeroPadding = {
pad: function(t, e) {
var o = 4 * e;
t.clamp();
t.sigBytes += o - (t.sigBytes % o || o);
},
unpad: function(t) {
for (var e = t.words, o = t.sigBytes - 1; !(e[o >>> 2] >>> 24 - o % 4 * 8 & 255); ) o--;
t.sigBytes = o + 1;
}
};
return n;
}, "object" == typeof o ? e.exports = o = n() : "function" == typeof define && define.amd ? define([], n) : (void 0).CryptoJS = n();
var n;
cc._RF.pop();
}, {} ],
md5: [ function(t, e) {
"use strict";
cc._RF.push(e, "c5e7aEbKxFGdYVDZbS9bmJc", "md5");
(function() {
function t(t, e) {
var o = (65535 & t) + (65535 & e);
return (t >> 16) + (e >> 16) + (o >> 16) << 16 | 65535 & o;
}
function o(e, o, n, i, r, c) {
return t((s = t(t(o, e), t(i, c))) << (a = r) | s >>> 32 - a, n);
var s, a;
}
function n(t, e, n, i, r, c, s) {
return o(e & n | ~e & i, t, e, r, c, s);
}
function i(t, e, n, i, r, c, s) {
return o(e & i | n & ~i, t, e, r, c, s);
}
function r(t, e, n, i, r, c, s) {
return o(e ^ n ^ i, t, e, r, c, s);
}
function c(t, e, n, i, r, c, s) {
return o(n ^ (e | ~i), t, e, r, c, s);
}
function s(e, o) {
e[o >> 5] |= 128 << o % 32;
e[14 + (o + 64 >>> 9 << 4)] = o;
var s, a, u, l, p, h = 1732584193, f = -271733879, d = -1732584194, _ = 271733878;
for (s = 0; s < e.length; s += 16) {
a = h;
u = f;
l = d;
p = _;
h = n(h, f, d, _, e[s], 7, -680876936);
_ = n(_, h, f, d, e[s + 1], 12, -389564586);
d = n(d, _, h, f, e[s + 2], 17, 606105819);
f = n(f, d, _, h, e[s + 3], 22, -1044525330);
h = n(h, f, d, _, e[s + 4], 7, -176418897);
_ = n(_, h, f, d, e[s + 5], 12, 1200080426);
d = n(d, _, h, f, e[s + 6], 17, -1473231341);
f = n(f, d, _, h, e[s + 7], 22, -45705983);
h = n(h, f, d, _, e[s + 8], 7, 1770035416);
_ = n(_, h, f, d, e[s + 9], 12, -1958414417);
d = n(d, _, h, f, e[s + 10], 17, -42063);
f = n(f, d, _, h, e[s + 11], 22, -1990404162);
h = n(h, f, d, _, e[s + 12], 7, 1804603682);
_ = n(_, h, f, d, e[s + 13], 12, -40341101);
d = n(d, _, h, f, e[s + 14], 17, -1502002290);
h = i(h, f = n(f, d, _, h, e[s + 15], 22, 1236535329), d, _, e[s + 1], 5, -165796510);
_ = i(_, h, f, d, e[s + 6], 9, -1069501632);
d = i(d, _, h, f, e[s + 11], 14, 643717713);
f = i(f, d, _, h, e[s], 20, -373897302);
h = i(h, f, d, _, e[s + 5], 5, -701558691);
_ = i(_, h, f, d, e[s + 10], 9, 38016083);
d = i(d, _, h, f, e[s + 15], 14, -660478335);
f = i(f, d, _, h, e[s + 4], 20, -405537848);
h = i(h, f, d, _, e[s + 9], 5, 568446438);
_ = i(_, h, f, d, e[s + 14], 9, -1019803690);
d = i(d, _, h, f, e[s + 3], 14, -187363961);
f = i(f, d, _, h, e[s + 8], 20, 1163531501);
h = i(h, f, d, _, e[s + 13], 5, -1444681467);
_ = i(_, h, f, d, e[s + 2], 9, -51403784);
d = i(d, _, h, f, e[s + 7], 14, 1735328473);
h = r(h, f = i(f, d, _, h, e[s + 12], 20, -1926607734), d, _, e[s + 5], 4, -378558);
_ = r(_, h, f, d, e[s + 8], 11, -2022574463);
d = r(d, _, h, f, e[s + 11], 16, 1839030562);
f = r(f, d, _, h, e[s + 14], 23, -35309556);
h = r(h, f, d, _, e[s + 1], 4, -1530992060);
_ = r(_, h, f, d, e[s + 4], 11, 1272893353);
d = r(d, _, h, f, e[s + 7], 16, -155497632);
f = r(f, d, _, h, e[s + 10], 23, -1094730640);
h = r(h, f, d, _, e[s + 13], 4, 681279174);
_ = r(_, h, f, d, e[s], 11, -358537222);
d = r(d, _, h, f, e[s + 3], 16, -722521979);
f = r(f, d, _, h, e[s + 6], 23, 76029189);
h = r(h, f, d, _, e[s + 9], 4, -640364487);
_ = r(_, h, f, d, e[s + 12], 11, -421815835);
d = r(d, _, h, f, e[s + 15], 16, 530742520);
h = c(h, f = r(f, d, _, h, e[s + 2], 23, -995338651), d, _, e[s], 6, -198630844);
_ = c(_, h, f, d, e[s + 7], 10, 1126891415);
d = c(d, _, h, f, e[s + 14], 15, -1416354905);
f = c(f, d, _, h, e[s + 5], 21, -57434055);
h = c(h, f, d, _, e[s + 12], 6, 1700485571);
_ = c(_, h, f, d, e[s + 3], 10, -1894986606);
d = c(d, _, h, f, e[s + 10], 15, -1051523);
f = c(f, d, _, h, e[s + 1], 21, -2054922799);
h = c(h, f, d, _, e[s + 8], 6, 1873313359);
_ = c(_, h, f, d, e[s + 15], 10, -30611744);
d = c(d, _, h, f, e[s + 6], 15, -1560198380);
f = c(f, d, _, h, e[s + 13], 21, 1309151649);
h = c(h, f, d, _, e[s + 4], 6, -145523070);
_ = c(_, h, f, d, e[s + 11], 10, -1120210379);
d = c(d, _, h, f, e[s + 2], 15, 718787259);
f = c(f, d, _, h, e[s + 9], 21, -343485551);
h = t(h, a);
f = t(f, u);
d = t(d, l);
_ = t(_, p);
}
return [ h, f, d, _ ];
}
function a(t) {
var e, o = "", n = 32 * t.length;
for (e = 0; e < n; e += 8) o += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
return o;
}
function u(t) {
var e, o = [];
o[(t.length >> 2) - 1] = void 0;
for (e = 0; e < o.length; e += 1) o[e] = 0;
var n = 8 * t.length;
for (e = 0; e < n; e += 8) o[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
return o;
}
function l(t) {
return a(s(u(t), 8 * t.length));
}
function p(t, e) {
var o, n, i = u(t), r = [], c = [];
r[15] = c[15] = void 0;
i.length > 16 && (i = s(i, 8 * t.length));
for (o = 0; o < 16; o += 1) {
r[o] = 909522486 ^ i[o];
c[o] = 1549556828 ^ i[o];
}
n = s(r.concat(u(e)), 512 + 8 * e.length);
return a(s(c.concat(n), 640));
}
function h(t) {
var e, o, n = "";
for (o = 0; o < t.length; o += 1) {
e = t.charCodeAt(o);
n += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
}
return n;
}
function f(t) {
return unescape(encodeURIComponent(t));
}
function d(t) {
return l(f(t));
}
function _(t, e) {
return p(f(t), f(e));
}
function y(t, e, o) {
return e ? o ? _(e, t) : h(_(e, t)) : o ? d(t) : h(d(t));
}
"function" == typeof define && define.amd ? define(function() {
return y;
}) : "object" == typeof e && e.exports ? e.exports = y : (void 0).md5 = y;
})();
cc._RF.pop();
}, {} ]
}, {}, [ "LocalTest", "Slot", "SlotAudio", "SlotConfig", "SlotConstant", "SlotDialog", "SlotEffect", "SlotEntity", "SlotHandler", "SlotHistory", "SlotHistoryCell", "SlotItem", "SlotLine", "SlotMachine", "SlotParse", "SlotRank", "SlotRankCell", "SlotReel", "SlotRewardPool", "SlotRoom", "SlotRoomUI", "SlotRoom_Base_RR", "SlotSelectLine", "SlotSelectLineCell", "SlotSelectRoom", "SlotSelectRoom_Base_RR", "SlotXPot", "SlotXPotCell", "AudioUtil", "DialogUtil", "EventDefine", "FixFontLabel ", "FormatUtil", "NumberUtil", "ToolTip", "TouchDragger", "Util", "crypto-js", "md5", "ESoundDefined", "AlertDialog", "Avatar", "BgResizer", "BroadcastReceiver", "CanvasResizer", "Config ", "Config", "ConfirmDialog", "Dialog", "Hub", "HubController", "HubName", "LoginController", "MethodHubName", "MethodHubOnName", "ServiceId", "ServiceName", "SubdomainName", "LabelIncrement", "LabelInr_TS", "LoadingController", "NetConfig", "Random", "SetZIndex", "Sicbo.Helper", "StretchSprite", "TimeUtils", "Tool", "TouchMove", "Tween", "Utils", "VersionConfig", "AudioController", "AudioPool", "AudioPoolXocXoc", "AudioTypes", "BalanceController", "BalanceTryView", "BalanceView", "ListView", "PopupBase", "PopupViewBase", "AquariumConfig", "BBConfig", "CowboyConfig", "DragonBallConfig", "LWConfig", "MPConfig", "MiniPokerConfig", "PortalConfig", "Seven77Config", "SlotsConfig", "TKConfig", "TQConfig", "TaiXiuConfig", "ThuongHaiConfig", "VQMMConfig", "AccountController", "LobbyController", "LobbyView", "TopBarView", "GameMessage", "PopupController", "PopupSlotsView", "PopupStyle", "PopupView", "NegotiateCommand", "ServerConnector", "BhvShake", "BhvSine", "MVWebSocket", "GameCoreManager", "Capcha", "BundleDownLoad", "CommonAssetDefined", "DropDown", "DropDownItem", "DropDownOptionData", "LoginFeature", "MiniGameNavigator", "PrefabEDefined", "UIAutoLayout", "UIButtonCommon", "UIDragDrop", "UIDraggable", "UIJoystick", "UINumericLabelHelper", "UIPersitsNode", "UIPopup", "UIPopupCommon", "UIScreen", "UIScrollBar", "UIScrollContent", "UIScrollView", "UIShowPopupHelp", "UITabbarController", "UITabbarItem", "UITableCell", "UITableView", "UITextManager", "UITooltipHandler", "UITooltipListener", "UITooltipManager", "UITooltipMessage", "UITouchHandler", "UIWaitingLayout", "UIWindow" ]);