window.__require = function t(e, n, i) {
function o(s, a) {
if (!n[s]) {
if (!e[s]) {
var r = s.split("/");
r = r[r.length - 1];
if (!e[r]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(r, !0);
if (c) return c(r, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = r;
}
var u = n[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return o(e[s][1][t] || t);
}, u, u.exports, t, e, n, i);
}
return n[s].exports;
}
for (var c = "function" == typeof __require && __require, s = 0; s < i.length; s++) o(i[s]);
return o;
}({
"Zom.AudioDefined": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0a15cBsRk1P2aYb0I56kC96", "Zom.AudioDefined");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg_game = null;
e.big_win = null;
e.bonus = null;
e.button_click = null;
e.free_spin = null;
e.giau_to = null;
e.jackpot = null;
e.showline1 = null;
e.showline2 = null;
e.showline3 = null;
e.showline4 = null;
e.soduKhongdu = null;
e.spin_reel = null;
e.tien_tang = null;
e.win = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
var n;
e._instance = null;
c([ r(cc.AudioClip) ], e.prototype, "bg_game", void 0);
c([ r(cc.AudioClip) ], e.prototype, "big_win", void 0);
c([ r(cc.AudioClip) ], e.prototype, "bonus", void 0);
c([ r(cc.AudioClip) ], e.prototype, "button_click", void 0);
c([ r(cc.AudioClip) ], e.prototype, "free_spin", void 0);
c([ r(cc.AudioClip) ], e.prototype, "giau_to", void 0);
c([ r(cc.AudioClip) ], e.prototype, "jackpot", void 0);
c([ r(cc.AudioClip) ], e.prototype, "showline1", void 0);
c([ r(cc.AudioClip) ], e.prototype, "showline2", void 0);
c([ r(cc.AudioClip) ], e.prototype, "showline3", void 0);
c([ r(cc.AudioClip) ], e.prototype, "showline4", void 0);
c([ r(cc.AudioClip) ], e.prototype, "soduKhongdu", void 0);
c([ r(cc.AudioClip) ], e.prototype, "spin_reel", void 0);
c([ r(cc.AudioClip) ], e.prototype, "tien_tang", void 0);
c([ r(cc.AudioClip) ], e.prototype, "win", void 0);
return n = c([ a ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
"Zom.BangThuong": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d217e2xL4tFlIAvjEMEFxE6", "Zom.BangThuong");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../Zom.Const"), a = cc._decorator, r = a.ccclass, l = a.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprFrame = [];
return e;
}
e.prototype.onLoad = function() {
switch (s.ZomConst.roomType) {
case 1:
this.sprContent.spriteFrame = this.sprFrame[0];
break;

case 2:
this.sprContent.spriteFrame = this.sprContent.spriteFrame = this.sprFrame[1];
break;

default:
this.sprContent.spriteFrame = this.sprContent.spriteFrame = this.sprFrame[2];
}
};
c([ l(cc.Sprite) ], e.prototype, "sprContent", void 0);
c([ l([ cc.SpriteFrame ]) ], e.prototype, "sprFrame", void 0);
return c([ r ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../Zom.Const": "Zom.Const"
} ],
"Zom.Button": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "86881q4c6lIMo3KLzopw7Wa", "Zom.Button");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._isBtnSetting = !1;
e.SpfIsMusic = [];
e.SpfIsSound = [];
return e;
}
e.prototype.touchBtnSetting = function() {
this.btnLichSuGiaoDich.node.active = !0;
this.btnSound.node.active = !0;
this.btnMusic.node.active = !0;
if (this._isBtnSetting) {
this._isBtnSetting = !this._isBtnSetting;
this.btnLichSuGiaoDich.node.runAction(cc.sequence(cc.delayTime(0), cc.moveTo(.3, this.btnSetting.node.getPosition()).easing(cc.easeElasticIn(.3)), cc.hide()));
this.btnSound.node.runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.3, this.btnSetting.node.getPosition()).easing(cc.easeElasticIn(.3)), cc.hide()));
this.btnMusic.node.runAction(cc.sequence(cc.delayTime(.2), cc.moveTo(.3, this.btnSetting.node.getPosition()).easing(cc.easeElasticIn(.3)), cc.hide()));
} else {
this._isBtnSetting = !this._isBtnSetting;
this.btnLichSuGiaoDich.node.runAction(cc.sequence(cc.delayTime(.1), cc.show(), cc.moveTo(.3, cc.v2(this.btnSetting.node.getPosition().x, this.btnSetting.node.getPosition().y - 80)).easing(cc.easeElasticOut(.3))));
this.btnSound.node.runAction(cc.sequence(cc.delayTime(.2), cc.show(), cc.moveTo(.3, cc.v2(this.btnSetting.node.getPosition().x, this.btnSetting.node.getPosition().y - 160)).easing(cc.easeElasticOut(.3))));
this.btnMusic.node.runAction(cc.sequence(cc.delayTime(.3), cc.show(), cc.moveTo(.3, cc.v2(this.btnSetting.node.getPosition().x, this.btnSetting.node.getPosition().y - 240)).easing(cc.easeElasticOut(.3))));
this._timeOutHide && clearTimeout(this._timeOutHide);
this._timeOutHide = setTimeout(function() {
this.touchBtnSetting();
}.bind(this), 5e3);
}
};
e.prototype.touchBtnBack = function() {};
e.prototype.touchMusic = function() {
if (0 == lngui.AudioManager.instance.musicVolume) {
this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.SpfIsMusic[1];
lngui.AudioManager.instance.musicVolume = 1;
} else {
this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.SpfIsMusic[0];
lngui.AudioManager.instance.musicVolume = 0;
}
};
e.prototype.touchSound = function() {
if (0 == lngui.AudioManager.instance.sfxVolume) {
this.btnSound.getComponent(cc.Sprite).spriteFrame = this.SpfIsSound[1];
lngui.AudioManager.instance.sfxVolume = 1;
} else {
this.btnSound.getComponent(cc.Sprite).spriteFrame = this.SpfIsSound[0];
lngui.AudioManager.instance.sfxVolume = 0;
}
};
c([ r(cc.Button) ], e.prototype, "btnBack", void 0);
c([ r(cc.Button) ], e.prototype, "btnSetting", void 0);
c([ r(cc.Button) ], e.prototype, "btnLichSuGiaoDich", void 0);
c([ r(cc.Button) ], e.prototype, "btnMusic", void 0);
c([ r(cc.Button) ], e.prototype, "btnSound", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "SpfIsMusic", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "SpfIsSound", void 0);
return c([ a ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
"Zom.ChonDong": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "06f5eHFkWBMfo0Jzz39L2Qn", "Zom.ChonDong");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../Zom.Const"), a = t("../Zom.MainGame"), r = cc._decorator, l = r.ccclass, u = r.property, p = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._arrayBtnDong = [];
e.TAG_ENABLE_LINE = 1;
e.TAG_DISABLE_LINE = 0;
e.OPACITY_DISABLE_LINE = 100;
e.OPACITY_ENABLE_LINE = 255;
return e;
}
e.prototype.onEnable = function() {
cc.log(this);
for (var t = this.pnlMid.getChildByName("pnlContent"), e = 1; e <= 20; e++) {
this._arrayBtnDong[e] = t.getChildByName("btn_" + e);
this._arrayBtnDong[e].tagName = this.TAG_ENABLE_LINE;
this._arrayBtnDong[e].on(cc.Node.EventType.TOUCH_END, this.touchItemDong.bind(this));
}
t.getChildByName("btnDongChan").on(cc.Node.EventType.TOUCH_END, function() {
for (var t = 1; t <= 20; t++) t % 2 == 0 ? this.setBtnStatus(this._arrayBtnDong[t], !0) : this.setBtnStatus(this._arrayBtnDong[t], !1);
}, this);
t.getChildByName("btnDongLe").on(cc.Node.EventType.TOUCH_END, function() {
for (var t = 1; t <= 20; t++) t % 2 == 1 ? this.setBtnStatus(this._arrayBtnDong[t], !0) : this.setBtnStatus(this._arrayBtnDong[t], !1);
}, this);
t.getChildByName("btnBoChon").on(cc.Node.EventType.TOUCH_END, function() {
for (var t = 1; t <= 20; t++) this.setBtnStatus(this._arrayBtnDong[t], !1);
}, this);
t.getChildByName("btnTatCa").on(cc.Node.EventType.TOUCH_END, function() {
for (var t = 1; t <= 20; t++) this.setBtnStatus(this._arrayBtnDong[t], !0);
}, this);
};
e.prototype.countEnableLine = function() {
for (var t = 0, e = 1; e <= 20; e++) this._arrayBtnDong[e].tagName === this.TAG_ENABLE_LINE && t++;
return t;
};
e.prototype.getStrEnableLine = function() {
for (var t = "", e = 1; e <= 20; e++) this._arrayBtnDong[e].tagName === this.TAG_ENABLE_LINE && (t += e + ",");
return [ t = t.slice(0, -1) ];
};
e.prototype.setBtnStatus = function(t, e) {
t.interactable = e;
if (e) {
t.tagName = this.TAG_ENABLE_LINE;
t.opacity = this.OPACITY_ENABLE_LINE;
} else {
t.tagName = this.TAG_DISABLE_LINE;
t.opacity = this.OPACITY_DISABLE_LINE;
}
};
e.prototype.touchItemDong = function(t) {
var e = t.currentTarget;
t.type === cc.Node.EventType.TOUCH_END && (e.tagName === this.TAG_ENABLE_LINE ? this.setBtnStatus(e, !1) : this.setBtnStatus(e, !0));
};
e.prototype.changeLine = function() {
if (0 === this.countEnableLine()) lngui.UITextManager.showCenterNotification("Bạn hãy chọn ít nhất 1 dòng"); else {
s.ZomConst.nLineBet = this.countEnableLine();
s.ZomConst.choseLine = this.getStrEnableLine();
a.default.instance.onChangeLine();
}
};
c([ u(cc.Node) ], e.prototype, "pnlMid", void 0);
return c([ l ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {
"../Zom.Const": "Zom.Const",
"../Zom.MainGame": "Zom.MainGame"
} ],
"Zom.Const": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d1f37ywOxVJ/5jMjQpYDXz5", "Zom.Const");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ZomConst = void 0;
var i = t("./Zom.MainGame"), o = function() {
function t() {}
t.isBtnClickable = function(t) {
if (this._isPlayTry) {
t || lngui.UITextManager.showCenterNotification("Bạn không thể chọn phòng trong phần chơi miễn phí");
return !1;
}
if (this._freeSpin) {
t || lngui.UITextManager.showCenterNotification("Hiện đang trong tiến trình quay miễn phí");
return !1;
}
if (this._autoSpin) {
t || lngui.UITextManager.showCenterNotification("Hiện đang trong tiến trình tự động quay");
return !1;
}
if (this._resultSpin || !i.default.instance.btnQuay.interactable) {
t || lngui.UITextManager.showCenterNotification("Hiện đang trong tiến trình quay");
return !1;
}
return !0;
};
t.nLineBet = 20;
t.WINBIG = {
QUAYMIENPHI: 2,
BONUS: 3,
GIAUTO: 4,
THANGLON: 5,
HUXU: 6
};
t._isPlayTry = !1;
t.choseLine = [ "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20" ];
t.spinSpeed = 1;
t._autoSpin = !1;
t.zOrder_Win = 50;
t.jackpot = [ 0, 5e5, 5e6, 5e7 ];
t._freeSpin = 0;
t.balanceUnitName = "Big";
t.maxLine = 20;
t._chonDongNumberCounter = "20";
t._isSound = !0;
t._isMusic = !0;
t.DemoData = {
RoomId: 1,
IsPlayTry: !1,
BetValue: 100,
AutoSpin: !1,
GameStatus: 3,
SpinData: {
Username: null,
SpinId: 571027,
LineData: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20",
TotalLine: 0,
CurrentFreeSpin: 0,
SessionFreeSpins: 61,
PrizeValueFreeSpins: 0,
X2StartValue: 0,
TotalFreeSpin: 0,
TotalFreeSpinPrizeValue: 0,
SlotsData: [ 6, 1, 1, 5, 5, 1, 7, 5, 6, 6, 4, 5, 7, 6, 1 ],
PrizeValue: 2100,
PrizeData: [ {
LineId: 6,
PrizeId: 12,
PrizeValue: 300,
Items: [ 8, 4, 5 ]
}, {
LineId: 13,
PrizeId: 12,
PrizeValue: 300,
Items: [ 12, 8, 4 ]
}, {
LineId: 18,
PrizeId: 3,
PrizeValue: 0,
Items: [ 6, 2, 3 ]
}, {
LineId: 19,
PrizeId: 11,
PrizeValue: 1500,
Items: [ 12, 8, 4, 5 ]
} ],
IsJackPot: !1,
JackpotValue: 728120,
ResponseStatus: 0
},
BonusGame: {
Inserted: !1,
SpinId: 571027,
TotalStep: 0,
CurrentStep: 0,
Possition: "",
BonusGameData: "1,210,1,0;2,220,4,400;3,203,36,3600;4,202,20,2000;5,220,4,400;6,220,4,400;7,220,4,400;8,210,1,0;9,220,6,600;10,220,6,600;11,202,30,3000;12,220,6,600",
StartBonus: 2,
PrizeValue: 12e3,
BonusGameBySteps: null,
ResponseStatus: 0
},
X2Game: {
X2TurnID: 0,
CurrentStep: 0,
StartBetValue: 1600,
PrizeValue: 0,
IsStop: !1,
Balance: 0
},
Balance: 16750923,
CurrentJackPort: 0,
AccountID: 346107
};
return t;
}();
n.ZomConst = o;
cc._RF.pop();
}, {
"./Zom.MainGame": "Zom.MainGame"
} ],
"Zom.HistoryDetail": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c1444ARZ/hGOoiLAbVtNtOy", "Zom.HistoryDetail");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../common/Utils"), a = t("../Zom.Const"), r = cc._decorator, l = r.ccclass, u = r.property, p = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.imgItem = [];
e._iconsPos = [];
e._icons = [];
e._nodeCol = [];
return e;
}
e.prototype.onEnable = function() {
cc.log("SlotDatas", a.ZomConst.data);
this.pnlMid.getChildByName("nodeSlot").getChildByName("pnlLine").active = !1;
this._pnlSlot = this.pnlMid.getChildByName("nodeSlot").getChildByName("pnlSlot");
this.setItem();
};
e.prototype.setItem = function() {
this.pnlMid.getChildByName("txtCongXu").getComponent(cc.Label).string = s.default.formatNumber(a.ZomConst.data.TotalPrizeValue);
this.pnlMid.getChildByName("txtSession").getComponent(cc.Label).string = "Phiên : #" + a.ZomConst.data.SessionID;
var t = this._pnlSlot.getChildByName("nodeCol1").getChildByName("nodeItem0");
this._nodeItemDistant = this._pnlSlot.getChildByName("nodeCol1").getChildByName("nodeItem1").y - t.y;
this._nodeItemBottomPos = this._pnlSlot.getChildByName("nodeCol1").getChildByName("nodeItem0").y;
this._nodeItemNumber = 3;
this._nodeItemScale = t.getScale(cc.v2());
for (var e = a.ZomConst.data.SlotsData.replace(/\[|\]/g, "").split(","), n = 0; n < 5; n++) {
this._icons[n] = [];
this._iconsPos[n] = [];
this._nodeCol[n] = this._pnlSlot.getChildByName("nodeCol" + n);
this._nodeCol[n].y -= (this._nodeItemNumber - 3) * this._nodeItemDistant;
for (var i = 0; i < 3; i++) {
this._iconsPos[n][i] = cc.v2(0, this._nodeItemBottomPos + this._nodeItemDistant * i);
var o = e[n + (10 - 5 * i)];
cc.log(o);
var c = new cc.Node();
c.addComponent(cc.Sprite).spriteFrame = this.imgItem[o];
c.setScale(this._nodeItemScale);
c.setPosition(this._iconsPos[n][i]);
this._nodeCol[n].addChild(c);
this._icons[n][i + this._nodeItemNumber - 3] = c;
}
}
};
c([ u(cc.Node) ], e.prototype, "pnlMid", void 0);
c([ u(cc.Prefab) ], e.prototype, "itemGame", void 0);
c([ u([ cc.SpriteFrame ]) ], e.prototype, "imgItem", void 0);
return c([ l ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {
"../Zom.Const": "Zom.Const",
"../common/Utils": void 0
} ],
"Zom.History": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "49d17TPPAlAlLRK8LC6NIm6", "Zom.History");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../common/Utils"), a = t("../Zom.Const"), r = t("../network/Zom.NetworkClient"), l = cc._decorator, u = l.ccclass, p = l.property, h = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemPerPage = 50;
e.arrayData = [];
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
r.default.instance.sendSignalR("GetHistory", []);
n._instance = this;
};
e.prototype.parseData = function(t) {
t = t.Results;
cc.log(t);
this.content.removeAllChildren();
this.arrayData = [];
if (t.length > 0) {
for (var e = 0; e < t.length; e++) this.arrayData.push(t[e]);
this.resetPagination();
}
};
e.prototype.resetPagination = function() {
this.content.removeAllChildren();
if (this.arrayData) {
for (var t = 0; t < this.itemPerPage && this.arrayData[t]; t++) this.updateToListView(this.arrayData[t]);
this.scrollview.scrollToTop(.1);
}
};
e.prototype.updateToListView = function(t) {
var e = cc.instantiate(this.pnlItem);
e.position = new cc.Vec3(0, 0);
e.getChildByName("txtPhien").color = cc.Color.WHITE;
e.getChildByName("txtThoiGian").color = cc.Color.WHITE;
e.getChildByName("txtMucDat").color = cc.Color.YELLOW;
e.getChildByName("txtCongXu").color = cc.Color.YELLOW;
e.getChildByName("txtChiTiet").color = cc.Color.WHITE;
if (t.SlotsData) {
e.getChildByName("txtChiTiet").active = !1;
e.getChildByName("btnChiTiet").active = !0;
e.getChildByName("btnChiTiet").getComponent(cc.Button).clickEvents[0].customEventData = t;
} else e.getChildByName("btnChiTiet").active = !1;
e.getChildByName("txtPhien").getComponent(cc.Label).string = t.SessionID;
e.getChildByName("txtThoiGian").getComponent(cc.Label).string = s.default.formatDateTime(t.CreatedDate);
e.getChildByName("txtMucDat").getComponent(cc.Label).string = t.TotalBetValue;
e.getChildByName("txtCongXu").getComponent(cc.Label).string = s.default.formatNumber(t.TotalPrizeValue);
this.content.addChild(e);
};
e.prototype.touchBtnDetail = function(t, e) {
a.ZomConst.data = e;
};
var n;
e._instance = null;
c([ p(cc.Node) ], e.prototype, "pnlItem", void 0);
c([ p(cc.ScrollView) ], e.prototype, "scrollview", void 0);
c([ p(cc.Node) ], e.prototype, "content", void 0);
c([ p(cc.AudioClip) ], e.prototype, "button_click", void 0);
return n = c([ u ], e);
}(lngui.UIPopup);
n.default = h;
cc._RF.pop();
}, {
"../Zom.Const": "Zom.Const",
"../common/Utils": void 0,
"../network/Zom.NetworkClient": "Zom.NetworkClient"
} ],
"Zom.ItemGame": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "663026NDhVAd7X+oXF2PXYX", "Zom.ItemGame");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.arrItemSkeleton = [];
e.tpSpriteFrame = [];
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
this.node.height = 179;
this.node.width = 163;
};
e.prototype.init = function(t, e, n) {
if (3 == e && n) {
var i = (o = new cc.Node()).addComponent(sp.Skeleton);
i.skeletonData = this.arrItemSkeleton[0];
i.premultipliedAlpha = !1;
i.debugSlots = !1;
i.debugBones = !1;
100 == t ? i.animation = "Item3_1_A" : 1e3 == t ? i.animation = "Item3_2_A" : 1e4 != t && 0 != t || (i.animation = "Item3_3_A");
i.loop = !0;
o.parent = this.node;
} else {
var o;
(o = new cc.Node()).addComponent(cc.Sprite).spriteFrame = this.tpSpriteFrame[e];
o.parent = this.node;
}
};
var n;
e._instance = null;
c([ r([ sp.SkeletonData ]) ], e.prototype, "arrItemSkeleton", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "tpSpriteFrame", void 0);
return n = c([ a ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
"Zom.Lobby": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "81022lf5s9HBIB1f+57qNLA", "Zom.Lobby");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./common/Utils"), a = t("./Zom.Const"), r = cc._decorator, l = r.ccclass, u = r.property, p = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtNickName = null;
e.txtXuBalance = null;
e.txtJackPot = [];
e.button_click = null;
e.soundBgLobby = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
n._instance = this;
this.txtNickName.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.txtXuBalance.string = s.default.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.1), cc.callFunc(this.setJackpot, this))));
lngui.AudioManager.instance.playMusic(this.soundBgLobby);
};
e.prototype.show = function(t) {
this.node.active = t;
return this.node.active;
};
e.prototype.setJackpot = function() {
for (var t = 0; t < 3; t++) lngui.UINumericLabelHelper.scheduleForLabel(this.txtJackPot[t], a.ZomConst.jackpot[t + 1], .2);
};
e.prototype.actBack = function() {
lngui.GameCoreManager.instance.onBackToLobby();
};
e.prototype.actRoom = function(t, e) {
a.ZomConst.roomType = e;
a.ZomConst.roomValue = [ 0, 100, 1e3, 1e4 ][e];
};
var n;
e._instance = null;
c([ u(cc.Label) ], e.prototype, "txtNickName", void 0);
c([ u(cc.Label) ], e.prototype, "txtXuBalance", void 0);
c([ u([ cc.Label ]) ], e.prototype, "txtJackPot", void 0);
c([ u(cc.AudioClip) ], e.prototype, "button_click", void 0);
c([ u(cc.AudioClip) ], e.prototype, "soundBgLobby", void 0);
return n = c([ l ], e);
}(lngui.UIScreen);
n.default = p;
cc._RF.pop();
}, {
"./Zom.Const": "Zom.Const",
"./common/Utils": void 0
} ],
"Zom.MainGame": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "68989OjzXpEG5DHpoyZeGzA", "Zom.MainGame");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./Zom.WinBig"), a = t("./Zom.Const"), r = t("./common/Utils"), l = t("./network/Zom.NetworkClient"), u = cc._decorator, p = u.ccclass, h = u.property, d = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._icons = [];
e._iconsPos = [];
e._nodeCol = [];
e._ItemArray = null;
e._LineArray = null;
e._nodeItemDistant = 164;
e._nodeItemBottomPos = -e._nodeItemDistant;
e._nodeItemNumber = 120;
e._nodeItemScale = 1.1;
e._freeSpin = 0;
e._spinSpeed = 1;
e._chonDongNumberCounter = 25;
e._spinEffect = [];
e._btnEffect = [];
e._isPnlSpinSpeed = !1;
e.sprCharArr = [];
e.btnSieuToc = [];
e.sprBgArr = [];
e.imgItem = [];
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
n._instance = this;
lngui.UINumericLabelHelper.scheduleForLabel(this.txtBalance, lngui.UserManager.instance.mainUserInfo.Money, .5 / this._spinSpeed);
this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
lngui.UINumericLabelHelper.scheduleForLabel(this.txtJackpot, a.ZomConst.jackpot[a.ZomConst.roomType], .5 / this._spinSpeed);
}, this))));
this.initPnlMid();
this.initPnlBottom();
this.initRoomVar(a.ZomConst.roomValue);
};
e.prototype.initRoomVar = function(t) {
a.ZomConst._isPlayTry = !1;
a.ZomConst.roomValue = t;
switch (a.ZomConst.roomValue) {
case 0:
a.ZomConst._isPlayTry = !0;
a.ZomConst.roomType = 3;
a.ZomConst.roomValue = 1e4;
l.default.instance.sendSignalR("PlayTry", [ !0 ]);
this.sprBg.spriteFrame = this.sprBgArr[0];
this.sprBg2.spriteFrame = this.sprBgArr[1];
break;

case 100:
a.ZomConst.roomType = 1;
this.sprChar.skeletonData = this.sprCharArr[0];
this.sprChar.setAnimation(0, "Intro", !1);
this.sprChar.setCompleteListener(function() {
this.sprChar.setAnimation(0, "Idle", !0);
}.bind(this));
this.sprBg.spriteFrame = this.sprBgArr[2];
this.sprBg2.spriteFrame = this.sprBgArr[3];
break;

case 1e3:
a.ZomConst.roomType = 2;
this.sprChar.skeletonData = this.sprCharArr[0];
this.sprChar.setAnimation(0, "Intro", !1);
this.sprChar.setCompleteListener(function() {
this.sprChar.setAnimation(0, "Idle", !0);
}.bind(this));
this.sprBg.spriteFrame = this.sprBgArr[4];
this.sprBg2.spriteFrame = this.sprBgArr[5];
break;

case 1e4:
a.ZomConst.roomType = 3;
this.sprChar.skeletonData = this.sprCharArr[1];
this.sprChar.setAnimation(0, "Idle", !0);
this.sprBg.spriteFrame = this.sprBgArr[6];
this.sprBg2.spriteFrame = this.sprBgArr[7];
}
l.default.instance.sendSignalR("PlayNow", [ a.ZomConst.roomType ]);
this.txtRoomValue.string = r.default.formatNumber(a.ZomConst.roomValue);
this.txtXuCuoc.string = r.default.formatNumber(a.ZomConst.roomValue * this._chonDongNumberCounter);
};
e.prototype.initPnlBottom = function() {
this.bgFreeSpin.active = !1;
this.txtFreeSpin.string = "";
this.txtXuThang.string = "0";
this.txtChonDongNumber.string = this._chonDongNumberCounter.toString();
this.pnlSpinSpeed.runAction(cc.sequence(cc.scaleTo(0, 0, 0), cc.hide()));
this.btnRoom.node.on(cc.Node.EventType.TOUCH_END, function() {
if (a.ZomConst.isBtnClickable(!1)) {
lngui.AudioManager.instance.playSfx(this.soundClick, 1);
switch (a.ZomConst.roomValue) {
case 100:
this.initRoomVar(1e3);
break;

case 1e3:
this.initRoomVar(1e4);
break;

case 1e4:
this.initRoomVar(100);
}
this._ItemArray = null;
this._LineArray = null;
for (var t = 1; t <= 25; t++) this._sprLine[t].active = !1;
this.txtXuThang.string = "0";
}
}, this);
this.btnChonDong.node.on(cc.Node.EventType.TOUCH_END, function() {
if (a.ZomConst.isBtnClickable(!1)) {
lngui.AudioManager.instance.playSfx(this.soundClick, 1);
this._chonDongNumberCounter++;
this._chonDongNumberCounter > 25 && (this._chonDongNumberCounter = 1);
this.updateChonDong();
}
}, this);
this.btnDongTang.node.on(cc.Node.EventType.TOUCH_END, function() {
if (a.ZomConst.isBtnClickable(!1)) {
lngui.AudioManager.instance.playSfx(this.soundClick, 1);
this._chonDongNumberCounter++;
this._chonDongNumberCounter > 25 && (this._chonDongNumberCounter = 1);
this.updateChonDong();
}
}, this);
this.btnDongGiam.node.on(cc.Node.EventType.TOUCH_END, function() {
if (a.ZomConst.isBtnClickable(!1)) {
lngui.AudioManager.instance.playSfx(this.soundClick, 1);
this._chonDongNumberCounter--;
this._chonDongNumberCounter < 1 && (this._chonDongNumberCounter = 25);
this.updateChonDong();
}
}, this);
this.btnQuay.node.on(cc.Node.EventType.TOUCH_END, function() {
if (a.ZomConst.isBtnClickable(!1)) {
lngui.AudioManager.instance.playSfx(this.soundClick, 1);
this.callSpin();
}
}, this);
this.btnTuQuay.node.on(cc.Node.EventType.TOUCH_END, function() {
lngui.AudioManager.instance.playSfx(this.soundClick, 1);
if (this._isPnlSpinSpeed) {
this._isPnlSpinSpeed = !this._isPnlSpinSpeed;
this.pnlSpinSpeed.runAction(cc.sequence(cc.scaleTo(.15, 0, 0), cc.hide()));
} else {
this._isPnlSpinSpeed = !this._isPnlSpinSpeed;
this.pnlSpinSpeed.runAction(cc.sequence(cc.show(), cc.scaleTo(.15, 1, 1)));
}
}, this);
this.btnDungTuQuay.node.on(cc.Node.EventType.TOUCH_END, function() {
lngui.AudioManager.instance.playSfx(this.soundClick, 1);
lngui.AudioManager.instance.playMusic(this.soundBgGame);
this._autoSpin = !1;
this._spinSpeed = 1;
this.touchBtnTuQuay();
}, this);
for (var t = function(t) {
e.btnSieuToc[t].node.on(cc.Node.EventType.TOUCH_END, function() {
lngui.AudioManager.instance.playSfx(this.soundClick, 1);
this._autoSpin = !0;
this._spinSpeed = t + 1;
this.touchBtnTuQuay();
this._isPnlSpinSpeed = !this._isPnlSpinSpeed;
this.pnlSpinSpeed.runAction(cc.sequence(cc.scaleTo(.15, 0, 0), cc.hide()));
}, e);
}, e = this, n = 0; n < 3; n++) t(n);
};
e.prototype.touchBtnTuQuay = function() {
lngui.AudioManager.instance.playSfx(this.soundClick, 1);
if (this._spinSpeed >= 1) {
lngui.AudioManager.instance.pauseMusic();
lngui.AudioManager.instance.playMusic(this.soundSpinSpeed);
}
this.btnTuQuay.node.active = !(this._autoSpin && this._spinSpeed >= 1);
this.btnDungTuQuay.node.active = this._autoSpin && this._spinSpeed >= 1;
null == this._resultSpin && this.callSpin();
};
e.prototype.initPnlMid = function() {
for (var t = 0; t < 5; t++) {
this._spinEffect[t] = this.pnlEffect.getChildByName("spinEffect_" + t);
this._spinEffect[t].opacity = 0;
}
for (t = 0; t < 5; t++) {
this._btnEffect[t] = this.pnlEffect.getChildByName("btnEffect_" + t);
this._btnEffect[t]._tagSprite = !1;
this._btnEffect[t].opacity = 0;
}
this.initNodeSlot();
this.initGameIcon();
};
e.prototype.initGameIcon = function() {
for (var t = 0; t < 5; t++) {
this._icons[t] = [];
this._iconsPos[t] = [];
this._nodeCol[t] = this.pnlSlot.getChildByName("nodeCol" + t);
this._nodeCol[t].y -= (this._nodeItemNumber - 3) * this._nodeItemDistant;
for (var e = 0; e < this._nodeItemNumber; e++) {
this._iconsPos[t][e] = cc.v2(0, this._nodeItemBottomPos + this._nodeItemDistant * e);
if (e >= this._nodeItemNumber - 3) {
var n = lngui.Utils.getRandomInt(1, this.imgItem.length - 1);
this._icons[t][e] = new cc.Node();
this._icons[t][e].addComponent(cc.Sprite).spriteFrame = this.imgItem[n];
this._icons[t][e].setPosition(this._iconsPos[t][e].x, this._iconsPos[t][e].y + 500);
this._icons[t][e].runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.3, this._iconsPos[t][e]).easing(cc.easeBounceOut())));
this._icons[t][e].setScale(this._nodeItemScale);
this._nodeCol[t].addChild(this._icons[t][e]);
}
}
}
};
e.prototype.initNodeSlot = function() {
this._sprLine = [];
for (var t = 1; t <= 25; t++) {
this._sprLine[t] = this.nodeLine.getChildByName("sprLine" + t);
this._sprLine[t].active = !1;
}
};
e.prototype.callSpin = function() {
this._resultSpin = 1;
this.btnQuay.interactable = !1;
this.sprChar.setAnimation(0, "Attack-" + r.default.randomRangeInt(1, 3), !1);
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
if (1 === this._resultSpin) {
this._resultSpin = null;
this.btnQuay.interactable = !0;
}
}, this)));
this._freeSpin ? l.default.instance.sendSignalR("Spin", [ 25, 1 ]) : l.default.instance.sendSignalR("Spin", [ this._chonDongNumberCounter, 1 ]);
};
e.prototype.parseSlotInfo = function(t) {
this.txtChonDongNumber.string = this._chonDongNumberCounter.toString();
a.ZomConst.jackpot[a.ZomConst.roomType] = t.Jackpot;
this.txtXuCuoc.string = r.default.formatNumber(a.ZomConst.roomValue * this._chonDongNumberCounter);
};
e.prototype.parseSpin = function(t) {
cc.log("parseSpin");
var e = t.SpinData.PrizeLines;
a.ZomConst._x2Data = t.X2Game;
for (var n in e) 4 === e[n].PrizeID && (t.IsJackpot = !0);
cc.log(t.AccumulateGame);
this.txtSession.string = "Phiên: #" + t.SpinData.SpinID;
this.hideWinBigNode();
this._resultSpin = t;
this._ItemArray = null;
this._LineArray = null;
this.prepareRoll();
};
e.prototype.hideWinBigNode = function() {
this._winBig && this._winBig.active && this._winBig.getComponent(s.default).hideLayer();
};
e.prototype.prepareRoll = function() {
cc.log("prepareRoll");
for (var t = 1; t <= 25; t++) this._sprLine[t].active = !1;
var e = this._resultSpin.SpinData.Slots;
cc.log(e);
this._delayRollIndexStart = 6;
var n = 0, i = 0;
for (t = 0; t < 4; t++) {
for (var o = !1, c = !1, s = 0; s < 3; s++) {
if (2 === e[t + (10 - 5 * s)] && !o) {
n++;
o = !0;
}
if (3 === e[t + (10 - 5 * s)] && !c) {
i++;
c = !0;
}
}
(2 === n || 2 === i) && this._delayRollIndexStart > 5 && (this._delayRollIndexStart = t);
}
for (t = 0; t < 5; t++) for (s = 0; s < 3; s++) {
this._icons[t][s] && this._icons[t][s].removeFromParent();
this._icons[t][s] = this._icons[t][s + this._nodeItemNumber - 3];
this._icons[t][s].stopAllActions();
var a = new cc.Node();
a.addComponent(cc.Sprite).spriteFrame = this.imgItem[e[t + (10 - 5 * s)]];
a.setScale(this._nodeItemScale);
this._nodeCol[t].addChild(a);
this._icons[t][s + this._nodeItemNumber - 3] = a;
}
if (!this._icons[0][3]) for (t = 0; t < 5; t++) for (s = 3; s < this._nodeItemNumber - 3; s++) {
var r = lngui.Utils.getRandomInt(1, this.imgItem.length - 1);
this._icons[t][s] = new cc.Node();
this._icons[t][s].addComponent(cc.Sprite).spriteFrame = this.imgItem[r];
this._icons[t][s].setScale(this._nodeItemScale);
this._nodeCol[t].addChild(this._icons[t][s]);
}
for (t = 0; t < 5; t++) {
for (s = 0; s < this._nodeItemNumber; s++) this._icons[t][s].setPosition(this._iconsPos[t][s]);
for (s = 0; s < 3; s++) {
this._icons[t][s + Math.round(this._nodeItemNumber / 4) - 3].active = !0;
this._icons[t][s + Math.round(this._nodeItemNumber / 3) - 3].active = !0;
this._icons[t][s + Math.round(this._nodeItemNumber / 2) - 3].active = !0;
if (1 === this._delayRollIndexStart) {
if (0 === t || 1 === t) {
this._icons[t][s + this._nodeItemNumber - 3].setPosition(this._iconsPos[t][s + Math.round(.25 * this._nodeItemNumber) - 3]);
this._icons[t][s + Math.round(.25 * this._nodeItemNumber) - 3].active = !1;
} else if (2 === t) {
this._icons[t][s + this._nodeItemNumber - 3].setPosition(this._iconsPos[t][s + Math.round(.5 * this._nodeItemNumber) - 3]);
this._icons[t][s + Math.round(.5 * this._nodeItemNumber) - 3].active = !1;
} else if (3 === t) {
this._icons[t][s + this._nodeItemNumber - 3].setPosition(this._iconsPos[t][s + Math.round(.75 * this._nodeItemNumber) - 3]);
this._icons[t][s + Math.round(.75 * this._nodeItemNumber) - 3].active = !1;
}
} else if (2 === this._delayRollIndexStart) {
if (0 === t || 1 === t || 2 === t) {
this._icons[t][s + this._nodeItemNumber - 3].setPosition(this._iconsPos[t][s + Math.round(.25 * this._nodeItemNumber) - 3]);
this._icons[t][s + Math.round(.25 * this._nodeItemNumber) - 3].active = !1;
} else if (3 === t) {
this._icons[t][s + this._nodeItemNumber - 3].setPosition(this._iconsPos[t][s + Math.round(.5 * this._nodeItemNumber) - 3]);
this._icons[t][s + Math.round(.5 * this._nodeItemNumber) - 3].active = !1;
} else if (4 === t) {
this._icons[t][s + this._nodeItemNumber - 3].setPosition(this._iconsPos[t][s + Math.round(.75 * this._nodeItemNumber) - 3]);
this._icons[t][s + Math.round(.75 * this._nodeItemNumber) - 3].active = !1;
}
} else if (3 === this._delayRollIndexStart) {
if (0 === t || 1 === t || 2 === t || 3 === t) {
this._icons[t][s + this._nodeItemNumber - 3].setPosition(this._iconsPos[t][s + Math.round(.25 * this._nodeItemNumber) - 3]);
this._icons[t][s + Math.round(.25 * this._nodeItemNumber) - 3].active = !1;
} else if (4 === t) {
this._icons[t][s + this._nodeItemNumber - 3].setPosition(this._iconsPos[t][s + Math.round(.5 * this._nodeItemNumber) - 3]);
this._icons[t][s + Math.round(.5 * this._nodeItemNumber) - 3].active = !1;
}
} else {
this._icons[t][s + this._nodeItemNumber - 3].setPosition(this._iconsPos[t][s + Math.round(.25 * this._nodeItemNumber) - 3]);
this._icons[t][s + Math.round(.25 * this._nodeItemNumber) - 3].active = !1;
}
}
}
this.beginRoll();
};
e.prototype.beginRoll = function() {
cc.log("beginRoll");
lngui.AudioManager.instance.playSfx(this.soundSpin, 1);
for (var t = 2.44 / this._spinSpeed, e = .3 / this._spinSpeed, n = t + e, i = 0; i < 5; i++) {
this._nodeCol[i].stopAllActions();
this._nodeCol[i].y = 0;
var o = [ cc.delayTime(.125 * i) ];
if (1 === this._delayRollIndexStart) {
if (0 === i || 1 === i) o.push(cc.moveBy(1 * t, 0, -this._nodeItemDistant * (Math.round(.25 * this._nodeItemNumber) - 2.5))); else if (2 === i) {
o.push(cc.moveBy(2 * t, 0, -this._nodeItemDistant * (Math.round(.5 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
}, this), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
})));
this._btnEffect[this._delayRollIndexStart].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
t.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(t) {
this.animationWait(t);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(t) {
t.stopAllActions();
t.opacity = 0;
}, this._btnEffect[this._delayRollIndexStart])));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
t.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(t) {
this.animationWait(t);
}, this)).repeatForever());
}, this), cc.delayTime(2 * n), cc.callFunc(function(t) {
t.opacity = 0;
t.stopAllActions();
}, this._btnEffect[i])));
} else if (3 === i) {
o.push(cc.moveBy(3 * t, 0, -this._nodeItemDistant * (Math.round(.75 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(2 * n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
}), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
})));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(2 * n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
t.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(t) {
this.animationWait(t);
}, this)).repeatForever());
}, this), cc.delayTime(2 * n), cc.callFunc(function(t) {
t.opacity = 0;
t.stopAllActions();
}, this._btnEffect[i])));
} else if (4 === i) {
o.push(cc.moveBy(4 * t, 0, -this._nodeItemDistant * (Math.round(1 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(3 * n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
}), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
})));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(3 * n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
t.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(t) {
this.animationWait(t);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
t.stopAllActions();
}, this._btnEffect[i])));
}
} else if (2 === this._delayRollIndexStart) {
if (0 === i || 1 === i || 2 === i) o.push(cc.moveBy(1 * t, 0, -this._nodeItemDistant * (Math.round(.25 * this._nodeItemNumber) - 2.5))); else if (3 === i) {
o.push(cc.moveBy(2 * t, 0, -this._nodeItemDistant * (Math.round(.5 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
}, this), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
})));
this._btnEffect[this._delayRollIndexStart].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
t.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(t) {
this.animationWait(t);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
t.stopAllActions();
}, this._btnEffect[this._delayRollIndexStart])));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
t.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(t) {
this.animationWait(t);
}, this)).repeatForever());
}, this), cc.delayTime(2 * n), cc.callFunc(function(t) {
t.opacity = 0;
t.stopAllActions();
}, this._btnEffect[i])));
} else if (4 === i) {
o.push(cc.moveBy(3 * t, 0, -this._nodeItemDistant * (Math.round(.75 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(2 * n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
}), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
})));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(2 * n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
t.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(t) {
this.animationWait(t);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
t.stopAllActions();
}, this._btnEffect[i])));
}
} else if (3 === this._delayRollIndexStart) {
if (0 === i || 1 === i || 2 === i || 3 === i) o.push(cc.moveBy(1 * t, 0, -this._nodeItemDistant * (Math.round(.25 * this._nodeItemNumber) - 2.5))); else if (4 === i) {
o.push(cc.moveBy(2 * t, 0, -this._nodeItemDistant * (Math.round(.5 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
}), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
})));
this._btnEffect[this._delayRollIndexStart].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
t.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(t) {
this.animationWait(t);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
t.stopAllActions();
}, this._btnEffect[this._delayRollIndexStart])));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(t + .125 * i), cc.callFunc(function(t) {
t.opacity = 255;
t.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(t) {
this.animationWait(t);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(t) {
t.opacity = 0;
t.stopAllActions();
}, this._btnEffect[i])));
}
} else o.push(cc.moveBy(1 * t, 0, -this._nodeItemDistant * (Math.round(.25 * this._nodeItemNumber) - 2.5)));
o.push(cc.moveBy(e, 0, .5 * this._nodeItemDistant).easing(cc.easeElasticOut(2)));
4 === i && o.push(cc.callFunc(this.finishRoll, this));
this._nodeCol[i].runAction(cc.sequence(o));
}
};
e.prototype.finishRoll = function() {
cc.log("finishRoll");
if (null != this._resultSpin.SpinData.PrizeLines && this._resultSpin.SpinData.PrizeLines.length > 0) {
var t = [], e = this._resultSpin.SpinData.PrizeLines;
for (var n in e) {
var i = e[n].LineID;
i < 1 || i > 25 || e[n].PrizeValue <= 0 || t.push(i);
}
for (var n in t) this._sprLine[t[n]].active = !0;
this._LineArray = t;
var o = [], c = e;
for (var n in c) o.push(c[n].Items);
this._ItemArray = o;
var s = [];
for (var n in o) for (var a in o[n]) s[o[n][a]] = !0;
}
this.showSpecialWonLayer();
};
e.prototype.showSpecialWonLayer = function() {
cc.log("showSpecialWonLayer");
var t, e = this._resultSpin.SpinData.PayLinePrizeValue / (a.ZomConst.roomValue || 1e4);
this._resultSpin.IsJackpot ? t = a.ZomConst.WINBIG.HUXU : this._resultSpin.BonusGame.BonusItemsData ? t = a.ZomConst.WINBIG.BONUS : e >= 50 && e < 100 ? t = a.ZomConst.WINBIG.THANGLON : e >= 100 ? t = a.ZomConst.WINBIG.GIAUTO : this._resultSpin.SlotInfo.FreeSpins && this._resultSpin.SpinData.TotalBetValue && (t = a.ZomConst.WINBIG.QUAYMIENPHI);
switch (t) {
case a.ZomConst.WINBIG.QUAYMIENPHI:
case a.ZomConst.WINBIG.BONUS:
var n = 2;
break;

case a.ZomConst.WINBIG.GIAUTO:
n = 5;
break;

case a.ZomConst.WINBIG.THANGLON:
n = 3;
break;

case a.ZomConst.WINBIG.HUXU:
n = 5;
break;

default:
n = .3;
}
if (this._resultSpin.SpinData.PayLinePrizeValue) switch (t) {
case a.ZomConst.WINBIG.GIAUTO:
lngui.AudioManager.instance.pauseMusic();
lngui.AudioManager.instance.playSfx(this.soundThangSieuLon, 1);
this._nodeCol[0].runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
this.showWinBigNode(t, this._resultSpin.SpinData.PayLinePrizeValue);
}, this)));
break;

case a.ZomConst.WINBIG.HUXU:
case a.ZomConst.WINBIG.THANGLON:
lngui.AudioManager.instance.pauseMusic();
lngui.AudioManager.instance.playSfx(this.soundThangLon, 1);
this._nodeCol[0].runAction(cc.sequence(cc.delayTime(.33), cc.callFunc(function() {
this.showWinBigNode(t, this._resultSpin.SpinData.PayLinePrizeValue);
}, this)));
break;

case a.ZomConst.WINBIG.QUAYMIENPHI:
case a.ZomConst.WINBIG.BONUS:
default:
this.showWinBigNode(t, this._resultSpin.SpinData.PayLinePrizeValue);
} else this.showWinBigNode(t, this._resultSpin.SpinData.PayLinePrizeValue);
if (t === a.ZomConst.WINBIG.HUXU) {
this.btnDungTuQuay.node.active = !1;
this._autoSpin = !1;
this._spinSpeed = 1;
lngui.AudioManager.instance.pauseMusic();
lngui.AudioManager.instance.playSfx(this.soundNoHu, 1);
} else this._nodeCol[0].runAction(cc.sequence(cc.delayTime(n), cc.callFunc(function() {
this.hideWinBigDecorLayer();
this.commitSpinResult();
}, this)));
};
e.prototype.hideWinBigDecorLayer = function() {
this._winBig && this._winBig.active && this._winBig.getComponent(s.default).hideDecorLayer();
};
e.prototype.showWinBigNode = function(t, e) {
if (this._winBig) this._winBig.getComponent(s.default).showLayer(t, e); else if (!this._winBig) {
this._winBig = cc.instantiate(this.PopupWinbig);
this.node.addChild(this._winBig, a.ZomConst.zOrder_Win);
this._winBig.getComponent(s.default).showLayer(t, e);
}
};
e.prototype.commitSpinResult = function() {
if (this._resultSpin) {
var t = 0;
try {
t = this._resultSpin.BonusGame.BonusItemsData[this._resultSpin.BonusGame.BonusItemsData.length - 1].PrizeValue;
} catch (t) {}
this.setPrizeValue(this._resultSpin.SpinData.PayLinePrizeValue + t);
if (a.ZomConst._isPlayTry) {
lngui.UINumericLabelHelper.scheduleForLabel(this.txtBalance, this._resultSpin.Account.TotalStar, .5 / this._spinSpeed);
lngui.UINumericLabelHelper.scheduleForLabel(this.txtJackpot, this._resultSpin.SlotInfo.Jackpot, .5 / this._spinSpeed);
a.ZomConst.jackpot[0] = this._resultSpin.SlotInfo.Jackpot;
} else {
lngui.UINumericLabelHelper.scheduleForLabel(this.txtBalance, this._resultSpin.Account.TotalStar, .5 / this._spinSpeed);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this._resultSpin.Account.TotalStar);
a.ZomConst.jackpot[a.ZomConst.roomType] = this._resultSpin.SlotInfo.Jackpot;
this.setJackpot();
}
this._resultSpin && (this._freeSpin = this._resultSpin.SlotInfo.FreeSpins);
0 === this._resultSpin.SlotInfo.FreeSpins && this._resultSpin.SlotInfo.TotalFreeSpins > 0 && this._resultSpin.SlotInfo.TotalFreeSpinPrizeValue && lngui.UITextManager.showCenterNotification("Chúc mừng bạn đã quay được " + this._resultSpin.SlotInfo.TotalFreeSpins + " lượt miễn phí với tổng giải thưởng là " + r.default.formatNumber(this._resultSpin.SlotInfo.TotalFreeSpinPrizeValue));
this._resultSpin = null;
this.btnQuay.interactable = !0;
this.bgFreeSpin.active = this._freeSpin > 0;
this.bgFreeSpin && (this.txtFreeSpin.string = this._freeSpin.toString());
this._nodeCol[0].runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
this._autoSpin && null == this._resultSpin && this.callSpin();
this.showWonLine();
this.schedule(this.showWonLine, 1);
}, this)));
}
};
e.prototype.setPrizeValue = function(t) {
cc.js.isNumber(t) && lngui.UINumericLabelHelper.scheduleForLabel(this.txtXuThang, t, .5 / this._spinSpeed);
};
e.prototype.showWonLine = function() {
if (!this._resultSpin && this._ItemArray && this._LineArray) {
var t = this._LineArray[0], e = this._ItemArray[0];
this._LineArray.splice(0, 1);
this._ItemArray.splice(0, 1);
for (var n = 1; n <= 25; n++) this._sprLine[n].active = !1;
for (n = 0; n < 5; n++) for (var i = 0; i < 3; i++) this._icons[n][i + this._nodeItemNumber - 3].stopAllActions();
this._sprLine[t] && (this._sprLine[t].active = !0);
for (var o in e) {
var c = e[o];
n = (c - 1) % 5, i = Math.ceil((c - n - 10) / -5);
this._icons[n][i + this._nodeItemNumber - 3].color = cc.Color.WHITE;
}
this._LineArray.push(t);
this._ItemArray.push(e);
} else this.unschedule(this.showWonLine);
};
e.prototype.animationWait = function(t) {
t._tagSprite ? t.getComponent(cc.Sprite).spriteFrame = this.EffLight1 : t.getComponent(cc.Sprite).spriteFrame = this.EffLight2;
t._tagSprite = !t._tagSprite;
};
e.prototype.updateChonDong = function() {
if (a.ZomConst._isPlayTry) cc.log("Bạn không thể thực hiện thao tác này trong phần chơi miễn phí"); else {
this.txtChonDongNumber.string = this._chonDongNumberCounter.toString();
this.nodeLine.stopAllActions();
this.nodeLine.active = !0;
for (var t = 1; t <= 25; t++) this._sprLine[t].active = !1;
for (t = 1; t <= this._chonDongNumberCounter; t++) this._sprLine[t].active = !0;
this.nodeLine.opacity = 255;
this.nodeLine.runAction(cc.fadeOut(1.5));
this.txtXuCuoc.string = r.default.formatNumber(a.ZomConst.roomValue * this._chonDongNumberCounter);
}
};
e.prototype.setJackpot = function() {
a.ZomConst._isPlayTry || lngui.UINumericLabelHelper.scheduleForLabel(this.txtJackpot, a.ZomConst.jackpot[a.ZomConst.roomType], .5 / this._spinSpeed);
};
var n;
e._instance = null;
c([ h(cc.Label) ], e.prototype, "txtJackpot", void 0);
c([ h(cc.Label) ], e.prototype, "txtBalance", void 0);
c([ h(cc.Label) ], e.prototype, "txtXuThang", void 0);
c([ h(cc.Label) ], e.prototype, "txtXuCuoc", void 0);
c([ h(cc.Label) ], e.prototype, "txtRoomValue", void 0);
c([ h(cc.Label) ], e.prototype, "txtFreeSpin", void 0);
c([ h(cc.Label) ], e.prototype, "txtChonDongNumber", void 0);
c([ h(cc.Label) ], e.prototype, "txtSession", void 0);
c([ h([ sp.SkeletonData ]) ], e.prototype, "sprCharArr", void 0);
c([ h(sp.Skeleton) ], e.prototype, "sprChar", void 0);
c([ h(cc.Button) ], e.prototype, "btnQuay", void 0);
c([ h(cc.Button) ], e.prototype, "btnTuQuay", void 0);
c([ h(cc.Button) ], e.prototype, "btnChonDong", void 0);
c([ h([ cc.Button ]) ], e.prototype, "btnSieuToc", void 0);
c([ h(cc.Button) ], e.prototype, "btnDungTuQuay", void 0);
c([ h(cc.Button) ], e.prototype, "btnRoom", void 0);
c([ h(cc.Button) ], e.prototype, "btnDongGiam", void 0);
c([ h(cc.Button) ], e.prototype, "btnDongTang", void 0);
c([ h(cc.Prefab) ], e.prototype, "PopupWinbig", void 0);
c([ h(cc.Prefab) ], e.prototype, "PopupMiniGame", void 0);
c([ h(cc.Prefab) ], e.prototype, "itemGame", void 0);
c([ h(cc.Prefab) ], e.prototype, "X2Prefab", void 0);
c([ h(cc.Node) ], e.prototype, "bgFreeSpin", void 0);
c([ h(cc.Node) ], e.prototype, "pnlLine", void 0);
c([ h(cc.Node) ], e.prototype, "pnlTop", void 0);
c([ h(cc.Node) ], e.prototype, "pnlMid", void 0);
c([ h(cc.Node) ], e.prototype, "pnlBot", void 0);
c([ h(cc.Node) ], e.prototype, "nodeSlot", void 0);
c([ h(cc.Node) ], e.prototype, "nodeLine", void 0);
c([ h(cc.Node) ], e.prototype, "pnlSlot", void 0);
c([ h(cc.Node) ], e.prototype, "pnlEffect", void 0);
c([ h(cc.Node) ], e.prototype, "pnlSpinSpeed", void 0);
c([ h(cc.Sprite) ], e.prototype, "sprBg", void 0);
c([ h(cc.Sprite) ], e.prototype, "sprBg2", void 0);
c([ h(cc.SpriteFrame) ], e.prototype, "sprBgArr", void 0);
c([ h(cc.SpriteFrame) ], e.prototype, "imgItem", void 0);
c([ h(cc.SpriteFrame) ], e.prototype, "EffLight1", void 0);
c([ h(cc.SpriteFrame) ], e.prototype, "EffLight2", void 0);
c([ h(cc.AudioClip) ], e.prototype, "soundClick", void 0);
c([ h(cc.AudioClip) ], e.prototype, "soundWin", void 0);
c([ h(cc.AudioClip) ], e.prototype, "soundBgGame", void 0);
c([ h(cc.AudioClip) ], e.prototype, "soundSpin", void 0);
c([ h(cc.AudioClip) ], e.prototype, "soundThangSieuLon", void 0);
c([ h(cc.AudioClip) ], e.prototype, "soundThangLon", void 0);
c([ h(cc.AudioClip) ], e.prototype, "soundNoHu", void 0);
c([ h(cc.AudioClip) ], e.prototype, "soundSpinSpeed", void 0);
return n = c([ p ], e);
}(lngui.UIScreen);
n.default = d;
cc._RF.pop();
}, {
"./Zom.Const": "Zom.Const",
"./Zom.WinBig": "Zom.WinBig",
"./common/Utils": void 0,
"./network/Zom.NetworkClient": "Zom.NetworkClient"
} ],
"Zom.MiniGame": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3cc18jMq/ZAUJjMXqkP1t4i", "Zom.MiniGame");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./common/Utils"), a = t("./network/Zom.NetworkClient"), r = cc._decorator, l = r.ccclass, u = r.property, p = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._totalPrize = 0;
e._stepBtn = 0;
e._stepBtnX = 0;
e._btnMiniGameNode = [];
e._timer = 15;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
this.schedule(this.timerEnd.bind(this), 1);
this._pnlPhase1 = this.pnlMid.getChildByName("pnlPhase1");
this._pnlPhase2 = this.pnlMid.getChildByName("pnlPhase2");
this._pnlPhase3 = this.pnlMid.getChildByName("pnlPhase3");
for (var t = 0; t < 12; t++) {
this._btnMiniGameNode[t] = this._pnlPhase1.getChildByName("miniObjNode_" + t);
this._btnMiniGameNode[t].getChildByName("btnClick").getComponent(cc.Button).clickEvents[0].customEventData = t;
this._btnMiniGameNode[t].getChildByName("txtPrize").active = !1;
this._btnMiniGameNode[t].getChildByName("pnlOpen").getComponent(sp.Skeleton).setAnimation(0, "Idle-Bonus", !0);
this._btnMiniGameNode[t].getChildByName("nodeSpineGrave").active = !1;
}
this._pnlPhase1.active = !0;
this._pnlPhase2.active = !1;
this._pnlPhase3.active = !1;
this._pnlXObj = [];
for (t = 0; t < 3; t++) {
this._pnlXObj[t] = this._pnlPhase2.getChildByName("miniXNode_" + t);
this._pnlXObj[t].getChildByName("pnlOpen").getComponent(cc.Button).clickEvents[0].customEventData = t;
this._pnlXObj[t].getChildByName("nodeSpine").getComponent(sp.Skeleton).addAnimation(0, "Idle", !0);
for (var e = 1; e < 5; e++) this._pnlXObj[t].getChildByName("miniX" + e).active = !1;
}
this.parseMiniGame("");
};
e.prototype.parseMiniGame = function(t) {
cc.log(t);
this._resultSpin = t;
this.miniPrizeValue = t.BonusGame.BonusItemsData[t.BonusGame.BonusItemsData.length - 1].PrizeValue;
};
e.prototype.timerEnd = function() {
this._timer--;
this.txtTimer.string = this._timer.toString();
if (0 === this._timer) {
a.default.instance.sendSignalR("PlayBonusGameAll", []);
this._pnlPhase3.active = !0;
lngui.UINumericLabelHelper.scheduleForLabel(this.txtPrizeJumpEffect, this.miniPrizeValue, .3);
this.node.runAction(cc.sequence(cc.delayTime(5.5), cc.callFunc(function() {
this.hide();
}, this)));
}
-3 === this._timer && this.hide();
};
e.prototype.touchBtnMiniGame = function(t, e) {
var n = this._resultSpin.BonusGame.BonusItemsData[this._stepBtn];
this._stepBtn++;
if (n) if (n.PrizeValue > 0) {
this._timer = 15;
this.txtTimer.string = this._timer.toString();
this._totalPrize = this._totalPrize + n.PrizeValue;
this._btnMiniGameNode[e].getChildByName("pnlOpen").getComponent(sp.Skeleton).setAnimation(0, "Attack-" + s.default.randomRangeInt(1, 2) + "-Coin", !1);
lngui.UINumericLabelHelper.scheduleForLabel(this.txtPrizeJumpEffect, this._totalPrize, .3);
lngui.UINumericLabelHelper.scheduleForLabel(this._btnMiniGameNode[e].getChildByName("txtPrize").getComponent(cc.Label), n.PrizeValue, .3);
this._btnMiniGameNode[e].getChildByName("txtPrize").active = !0;
this._btnMiniGameNode[e].getChildByName("txtPrize").runAction(cc.spawn(cc.scaleTo(1, 1).easing(cc.easeElasticOut(3)), cc.moveBy(.2, 0, 30)));
this._btnMiniGameNode[e].getChildByName("btnClick").active = !1;
} else {
this._timer--;
this._btnMiniGameNode[e].getChildByName("pnlOpen").getComponent(sp.Skeleton).setAnimation(0, "Idle-Zombie", !0);
this._btnMiniGameNode[e].getChildByName("btnClick").active = !1;
this._pnlPhase1.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
this._pnlPhase1.active = !1;
this._pnlPhase2.active = !0;
this._pnlPhase3.active = !1;
}, this)));
}
};
e.prototype.touchPnlXOpen = function(t, e) {
cc.log(this._stepBtnX);
var n = this._resultSpin.BonusGame.BonusItemsData[this._stepBtnX], i = this;
this._stepBtnX++;
this._pnlXObj[e].getChildByName("nodeSpine").getComponent(sp.Skeleton).setAnimation(0, "Attack-1", !1);
n.Multiplier = Math.round(n.Multiplier);
n.Multiplier > 4 && (n.Multiplier = 4);
n.Multiplier < 1 && (n.Multiplier = 1);
this._pnlXObj[e].getChildByName("miniX" + n.Multiplier).runAction(cc.sequence(cc.delayTime(.4), cc.show()));
this.node.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
var t = s.default.randomRangeInt(1, 4);
i._pnlXObj[e].getChildByName("nodeSpine").getComponent(sp.Skeleton).setAnimation(0, "Attack-2", !1);
i._pnlXObj[e].getChildByName("miniX" + t).active = !0;
}, i), cc.delayTime(4), cc.callFunc(function() {
a.default.instance.sendSignalR("PlayBonusGameAll", []);
this._pnlPhase1.active = !1;
this._pnlPhase2.active = !1;
this._pnlPhase3.active = !0;
lngui.UINumericLabelHelper.scheduleForLabel(this.txtTotal, this._totalPrize.toString(), .3);
}, this), cc.delayTime(5.5), cc.callFunc(function() {
this.hide();
}, this)));
};
e.prototype.hide = function() {
t.prototype.hide.call(this);
};
var n;
e._instance = null;
c([ u(cc.Node) ], e.prototype, "pnlMid", void 0);
c([ u(cc.Label) ], e.prototype, "txtTimer", void 0);
c([ u(cc.Label) ], e.prototype, "txtTotal", void 0);
c([ u(cc.Label) ], e.prototype, "txtPrizeJumpEffect", void 0);
return n = c([ l ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {
"./common/Utils": void 0,
"./network/Zom.NetworkClient": "Zom.NetworkClient"
} ],
"Zom.NetworkClient": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e3dabh5BmpIRJsOS39PZ5AZ", "Zom.NetworkClient");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../Zom.MainGame"), a = t("../Zom.Const"), r = t("../popup/Zom.VinhDanh"), l = t("../popup/Zom.History"), u = t("../Zom.MiniGame"), p = t("../Zom.X2"), h = cc._decorator, d = h.ccclass, m = (h.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "ZomListener";
e.isConnect = !1;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.connect = function() {
console.log("Connect");
var t = {
url: "https://thantai." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8002/signalr/negotiate",
hub: "taydukyhub"
};
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, t.url, t.hub, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
lngui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
this.sendSignalR("GetEventJackpot", []);
this.schedule(function() {
this.sendSignalR("GetJackpotString", []);
}, 5);
}
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var i = t.M[n];
if (i.A && null != i.A[0] && null != i.A[0]) {
var o = i.A[0];
switch (i.M) {
case "jackpot":
for (var c = 0; c < 3; c++) a.ZomConst.jackpot[c + 1] = o.split("|")[c];
break;

case "resultSpin":
s.default.instance.parseSpin(o);
break;

case "joinGame":
this.sendSignalR("StopX2Game", []);
o.BonusGame.BonusItemsData && this.sendSignalR("PlayBonusGameAll", []);
s.default.instance.parseSlotInfo(o.SlotInfo);
break;

case "statistic":
r.default.instance.parseData(o);
break;

case "history":
l.default.instance.parseData(o);
break;

case "bonus":
u.default.instance.parseMiniGame(o);
break;

case "resultX2Game":
p.default.instance.parseData(o);
break;

case "message":
lngui.UITextManager.showCenterNotification(o);
}
}
}
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var n;
e._instance = null;
return n = c([ d ], e);
}(cc.Component));
n.default = m;
cc._RF.pop();
}, {
"../Zom.Const": "Zom.Const",
"../Zom.MainGame": "Zom.MainGame",
"../Zom.MiniGame": "Zom.MiniGame",
"../Zom.X2": "Zom.X2",
"../popup/Zom.History": "Zom.History",
"../popup/Zom.VinhDanh": "Zom.VinhDanh"
} ],
"Zom.TopBar": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "257344wsshNqoX5R6Xu2GoY", "Zom.TopBar");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./Zom.Const"), a = cc._decorator, r = a.ccclass, l = a.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.SpfIsSound = [];
e.SpfIsMusic = [];
return e;
}
e.prototype.onLoad = function() {
this.pnlSetting.active = !1;
lngui.AudioManager.instance.sfxVolume = 1;
lngui.AudioManager.instance.musicVolume = 1;
};
e.prototype.touchBtnBack = function() {
if (s.ZomConst.isBtnClickable(!1)) {
lngui.AudioManager.instance.pauseMusic();
lngui.GameCoreManager.instance.onBackToLobby();
} else lngui.UITextManager.showCenterNotification("Bạn không được rời bàn khi đang quay!");
};
e.prototype.touchBtnSetting = function() {
this.pnlSetting.active = !0;
this._timeOutHide && clearTimeout(this._timeOutHide);
this._timeOutHide = setTimeout(function() {
this.pnlSetting.active = !1;
}.bind(this), 5e3);
};
e.prototype.touchBtnSound = function() {
if (0 == lngui.AudioManager.instance.sfxVolume) {
this.btnSound.getComponent(cc.Sprite).spriteFrame = this.SpfIsSound[1];
lngui.AudioManager.instance.sfxVolume = 1;
} else {
this.btnSound.getComponent(cc.Sprite).spriteFrame = this.SpfIsSound[0];
lngui.AudioManager.instance.sfxVolume = 0;
}
};
e.prototype.touchBtnMusic = function() {
if (0 == lngui.AudioManager.instance.musicVolume) {
this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.SpfIsMusic[1];
lngui.AudioManager.instance.musicVolume = 1;
} else {
this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.SpfIsMusic[0];
lngui.AudioManager.instance.musicVolume = 0;
}
};
c([ l(cc.Button) ], e.prototype, "btnSetting", void 0);
c([ l(cc.Node) ], e.prototype, "pnlSetting", void 0);
c([ l(cc.Node) ], e.prototype, "btnSound", void 0);
c([ l(cc.Node) ], e.prototype, "btnMusic", void 0);
c([ l(cc.Node) ], e.prototype, "btnBangThuong", void 0);
c([ l([ cc.SpriteFrame ]) ], e.prototype, "SpfIsSound", void 0);
c([ l([ cc.SpriteFrame ]) ], e.prototype, "SpfIsMusic", void 0);
return c([ r ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./Zom.Const": "Zom.Const"
} ],
"Zom.VinhDanh": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fefa3IgOAdIeqo9a66fOZe/", "Zom.VinhDanh");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../common/Utils"), a = t("../network/Zom.NetworkClient"), r = cc._decorator, l = r.ccclass, u = r.property, p = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemPerPage = 50;
e.arrayData = [];
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
a.default.instance.sendSignalR("GetStatistic", [ !1 ]);
n._instance = this;
};
e.prototype.touchBtnLsHu = function(t, e) {
lngui.AudioManager.instance.playSfx(this.button_click, 1);
1 == e ? a.default.instance.sendSignalR("GetHonor", []) : a.default.instance.sendSignalR("getjackpothistory", []);
};
e.prototype.parseData = function(t) {
this.content.removeAllChildren();
this.arrayData = [];
if (t.length > 0) {
for (var e = 0; e < t.length; e++) this.arrayData.push(t[e]);
this.resetPagination();
}
};
e.prototype.parseDataJackpot = function(t) {
this.content.removeAllChildren();
this.arrayData = [];
if (t.length > 0) {
for (var e = 0; e < t.length; e++) this.arrayData.push(t[e]);
this.resetPaginationJackpot();
}
};
e.prototype.resetPagination = function() {
this.content.removeAllChildren();
if (this.arrayData) {
for (var t = 0; t < this.itemPerPage && this.arrayData[t]; t++) this.updateToListView(this.arrayData[t]);
this.scrollview.scrollToTop(.1);
}
};
e.prototype.resetPaginationJackpot = function() {
this.content.removeAllChildren();
if (this.arrayData) {
for (var t = 0; t < this.itemPerPage && this.arrayData[t]; t++) this.updateToListViewJackpot(this.arrayData[t]);
this.scrollview.scrollToTop(.1);
}
};
e.prototype.updateToListView = function(t) {
var e = cc.instantiate(this.pnlItem);
e.position = new cc.Vec3(0, 0);
e.getChildByName("txtPhien").color = cc.Color.WHITE;
e.getChildByName("txtThoiGian").color = cc.Color.WHITE;
e.getChildByName("txtTenTaiKhoan").color = cc.Color.WHITE;
e.getChildByName("txtThang").color = cc.Color.YELLOW;
e.getChildByName("txtMoTa").color = cc.Color.WHITE;
e.getChildByName("txtPhien").getComponent(cc.Label).string = t.SpinID;
e.getChildByName("txtThoiGian").getComponent(cc.Label).string = s.default.formatDateTime(t.CreatedTime);
e.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = t.Username;
e.getChildByName("txtThang").getComponent(cc.Label).string = s.default.formatNumber(t.PrizeValue);
e.getChildByName("txtMoTa").getComponent(cc.Label).string = 1 == t.IsJackport ? "Jackpot" : "payline";
this.content.addChild(e);
};
e.prototype.updateToListViewJackpot = function(t) {
var e = cc.instantiate(this.pnlItem);
e.position = new cc.Vec3(0, 0);
e.getChildByName("txtPhien").color = cc.Color.WHITE;
e.getChildByName("txtThoiGian").color = cc.Color.WHITE;
e.getChildByName("txtTenTaiKhoan").color = cc.Color.WHITE;
e.getChildByName("txtThang").color = cc.Color.YELLOW;
e.getChildByName("txtMoTa").color = cc.Color.WHITE;
e.getChildByName("txtPhien").getComponent(cc.Label).string = t.SpinID;
e.getChildByName("txtThoiGian").getComponent(cc.Label).string = s.default.formatDateTime(t.CreatedTime);
e.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = t.Username;
e.getChildByName("txtThang").getComponent(cc.Label).string = s.default.formatNumber(t.PrizeValue);
e.getChildByName("txtMoTa").getComponent(cc.Label).string = "Jackpot";
this.content.addChild(e);
};
var n;
e._instance = null;
c([ u(cc.Node) ], e.prototype, "pnlItem", void 0);
c([ u(cc.ScrollView) ], e.prototype, "scrollview", void 0);
c([ u(cc.Node) ], e.prototype, "content", void 0);
c([ u(cc.AudioClip) ], e.prototype, "button_click", void 0);
return n = c([ l ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {
"../common/Utils": void 0,
"../network/Zom.NetworkClient": "Zom.NetworkClient"
} ],
"Zom.WinBig": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0523eoz3ORIOIt/ixcvW7B0", "Zom.WinBig");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./Zom.Const"), a = cc._decorator, r = a.ccclass, l = a.property, u = function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.initLayoutTouchable();
};
e.prototype.initLayoutTouchable = function() {};
e.prototype.update = function() {};
e.prototype.hideDecorChild = function() {
this.node_GiauTo.active = !1;
this.node_NoHu.active = !1;
this.node_ThangLon.active = !1;
this.node_MienPhi.active = !1;
this.node_Minigame.active = !1;
this.node_WinNormal.active = !1;
this.txtGiauTo.string = "0";
this.txtThangLon.string = "0";
this.txtWinNormal.string = "0";
this.txtNoHu.string = "0";
};
e.prototype.hideLayer = function() {
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
this.txtWinNormal.string = "0";
this.node.active = !1;
this.hideDecorChild();
}, this)));
};
e.prototype.hideDecorLayer = function() {
this.pnlDecor.stopAllActions();
this.pnlDecor.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
this.pnlDecor.active = !1;
}, this)));
};
e.prototype.showLayer = function(t, e) {
this.hideDecorChild();
this.pnlDecor.active = !0;
this.node.active = !0;
this.node_WinNormal.active = !1;
switch (t) {
case s.ZomConst.WINBIG.QUAYMIENPHI:
this.showQuayMienPhi();
break;

case s.ZomConst.WINBIG.BONUS:
this.showBonus();
lngui.AudioManager.instance.playSfx(this.bonus, 1);
break;

case s.ZomConst.WINBIG.GIAUTO:
this.showGiauTo(e);
lngui.AudioManager.instance.playSfx(this.thangLon, 1);
break;

case s.ZomConst.WINBIG.THANGLON:
this.showThangLon(e);
lngui.AudioManager.instance.playSfx(this.thangSieuLon, 1);
break;

case s.ZomConst.WINBIG.HUXU:
this.showHuXu(e);
lngui.AudioManager.instance.playSfx(this.jackpot, 1);
break;

default:
this.pnlDecor.active = !1;
this.useBmfXu(e);
e ? lngui.AudioManager.instance.playSfx(this.win, 1) : lngui.AudioManager.instance.playSfx(this.fail, 1);
}
this.node.active = !0;
this.pnlDecor.stopAllActions();
this.node.stopAllActions();
this.pnlDecor.runAction(cc.fadeIn(.3));
this.node.runAction(cc.fadeIn(.3));
};
e.prototype.showQuayMienPhi = function() {
this.node_MienPhi.active = !0;
this.useBmfXu(0);
};
e.prototype.showBonus = function() {
this.node_Minigame.active = !0;
this.useBmfXu(0);
};
e.prototype.showGiauTo = function(t) {
this.node_GiauTo.active = !0;
this.txtGiauTo.string = "0";
lngui.UINumericLabelHelper.scheduleForLabel(this.txtGiauTo, t, .2);
this.node_GiauTo.runAction(cc.scaleTo(2, 1.5));
};
e.prototype.showThangLon = function(t) {
this.node_ThangLon.active = !0;
this.txtThangLon.string = "0";
lngui.UINumericLabelHelper.scheduleForLabel(this.txtThangLon, t, .2);
this.node_ThangLon.runAction(cc.scaleTo(2, 1.5));
};
e.prototype.showHuXu = function(t) {
lngui.AudioManager.instance.playSfx(this.jackpot, 1);
this.node_NoHu.active = !0;
this.txtNoHu.string = "0";
lngui.UINumericLabelHelper.scheduleForLabel(this.txtNoHu, t, .2);
this.node_NoHu.runAction(cc.scaleTo(3, 1.5));
};
e.prototype.useBmfXu = function(t) {
if (t > 0) {
lngui.UINumericLabelHelper.scheduleForLabel(this.txtWinNormal, t, .2);
this.node_WinNormal.active = !0;
this.node_WinNormal.runAction(cc.spawn(cc.show(), cc.moveTo(0, cc.v2(-123, -210)), cc.scaleTo(0, 1)));
this.node_WinNormal.runAction(cc.sequence(cc.delayTime(1), cc.spawn(cc.moveTo(.4, cc.v2(91, -326)), cc.scaleTo(.4, .4)), cc.hide()));
} else this.node_WinNormal.active = !1;
};
c([ l(cc.Node) ], e.prototype, "layoutTouchable", void 0);
c([ l(cc.Node) ], e.prototype, "pnlDecor", void 0);
c([ l(cc.Node) ], e.prototype, "node_GiauTo", void 0);
c([ l(cc.Node) ], e.prototype, "node_NoHu", void 0);
c([ l(cc.Node) ], e.prototype, "node_ThangLon", void 0);
c([ l(cc.Node) ], e.prototype, "node_MienPhi", void 0);
c([ l(cc.Node) ], e.prototype, "node_Minigame", void 0);
c([ l(cc.Node) ], e.prototype, "node_WinNormal", void 0);
c([ l(cc.Label) ], e.prototype, "txtGiauTo", void 0);
c([ l(cc.Label) ], e.prototype, "txtNoHu", void 0);
c([ l(cc.Label) ], e.prototype, "txtThangLon", void 0);
c([ l(cc.Label) ], e.prototype, "txtWinNormal", void 0);
c([ l(cc.AudioClip) ], e.prototype, "bonus", void 0);
c([ l(cc.AudioClip) ], e.prototype, "thangSieuLon", void 0);
c([ l(cc.AudioClip) ], e.prototype, "thangLon", void 0);
c([ l(cc.AudioClip) ], e.prototype, "jackpot", void 0);
c([ l(cc.AudioClip) ], e.prototype, "win", void 0);
c([ l(cc.AudioClip) ], e.prototype, "fail", void 0);
return c([ r ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./Zom.Const": "Zom.Const"
} ],
"Zom.X2": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "af9d94YqChIsbbzUOraMPmo", "Zom.X2");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), c = this && this.__decorate || function(t, e, n, i) {
var o, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (c < 3 ? o(s) : c > 3 ? o(e, n, s) : o(e, n)) || s);
return c > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./common/Utils"), a = t("./network/Zom.NetworkClient"), r = t("./Zom.Const"), l = cc._decorator, u = l.ccclass, p = l.property, h = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._pnlChest = [];
e.SkeHeo = [];
e.SkeChum = [];
e.SprX2 = [];
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
n._instance = this;
this.txtPrizeValue.string = "";
};
e.prototype.onLoad = function() {
this.btnX2Tiep.on(cc.Node.EventType.TOUCH_END, function() {
this.reset();
}, this);
var t = this;
this.btnDung.on(cc.Node.EventType.TOUCH_END, function() {
a.default.instance.sendSignalR("StopX2Game", []);
t.hide();
}, t);
for (var e = 0; e < 4; e++) {
this._pnlChest[e] = this.pnlChoose.getChildByName("pnlChest" + e);
this.SkeChum[e].setAnimation(0, "Idle-" + (e + 1), !0);
this.SkeHeo[e].node.active = !1;
this.SprX2[e].node.active = !1;
}
this.SprChar.setAnimation(0, "Idle", !0);
};
e.prototype.hide = function() {
t.prototype.hide.call(this);
};
e.prototype.reset = function() {
this.node.stopAllActions();
this.tagDecisionMade = void 0;
this.btnX2Tiep.active = !1;
this.btnDung.getComponent(cc.Button).interactable = !0;
for (var t = 0; t < 4; t++) {
this._pnlChest[t].getComponent(cc.Button).interactable = !0;
this.SkeChum[t].setAnimation(0, "Idle-" + (t + 1), !0);
this.SkeHeo[t].node.active = !1;
this.SprX2[t].node.active = !1;
}
this.txtThongBao.string = "CHỌN 1 CHUM ĐỂ ĐẬP";
var e = r.ZomConst._x2Data.StartBetValue;
r.ZomConst._x2Data.PrizeValue > 0 && (e = 1.99 * r.ZomConst._x2Data.StartBetValue);
lngui.UINumericLabelHelper.scheduleForLabel(this.bmfDaThang, e, .3);
lngui.UINumericLabelHelper.scheduleForLabel(this.bmfX2, 1.99 * e, .3);
};
e.prototype.parseData = function(t) {
t.PrizeValue > 0 ? this.txtThongBao.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
this.txtThongBao.string = "Chúc mừng bạn đã thắng " + s.default.formatNumber(t.PrizeValue) + " trong thử thách X2";
this.SprChar.setAnimation(0, "Attack-" + s.default.randomRangeInt(1, 3), !1);
this.SkeChum[this.tagDecisionMade].setAnimation(0, "Attack-1", !1);
this.SprX2[this.tagDecisionMade].node.active = !0;
this.btnX2Tiep.active = !0;
}, this), cc.delayTime(3), cc.callFunc(function() {
this.SprChar.setAnimation(0, "Attack-" + s.default.randomRangeInt(1, 3), !1);
for (var e = 0; e < 4; e++) if (e != this.tagDecisionMade) {
this.SkeChum[e].setAnimation(0, "Attack-1", !1);
this.SkeHeo[e].node.active = !0;
}
lngui.UINumericLabelHelper.scheduleForLabel(this.bmfDaThang, t.StartBetValue, .3);
lngui.UINumericLabelHelper.scheduleForLabel(this.bmfX2, 1.99 * t.StartBetValue, .3);
}, this))) : this.txtThongBao.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
this.txtThongBao.string = "Rất tiếc, bạn đã thua cuộc";
this.SprChar.setAnimation(0, "Attack-" + s.default.randomRangeInt(1, 3), !1);
this.SkeChum[this.tagDecisionMade].setAnimation(0, "Attack-1", !1);
this.SkeHeo[this.tagDecisionMade].node.active = !0;
}, this), cc.delayTime(3), cc.callFunc(function() {
this.SprChar.setAnimation(0, "Attack-" + s.default.randomRangeInt(1, 3), !1);
for (var t = [], e = s.default.randomRangeInt(0, 2), n = 0; n < 4; n++) {
if (n != this.tagDecisionMade) {
t.push(n);
this.SkeChum[n].setAnimation(0, "Attack-1", !1);
}
if (3 == n) {
this.SprX2[t[e]].node.active = !0;
for (var i = 0; i < t.length; i++) i != e && (this.SkeHeo[t[i]].node.active = !0);
}
}
}, this)));
t.IsStop && this.pnlChoose.runAction(cc.sequence(cc.delayTime(6), cc.callFunc(function() {
this.hide();
}, this)));
};
e.prototype.touchPnlChest = function(t, e) {
this.tagDecisionMade = Number(e);
a.default.instance.sendSignalR("PlayX2Game", [ this.tagDecisionMade || 1 ]);
this.btnDung.getComponent(cc.Button).interactable = !1;
for (var n = 0; n < 4; n++) this._pnlChest[n].getComponent(cc.Button).interactable = !1;
};
var n;
e._instance = null;
c([ p(cc.Label) ], e.prototype, "txtThongBao", void 0);
c([ p(cc.Label) ], e.prototype, "txtPrizeValue", void 0);
c([ p(cc.Label) ], e.prototype, "bmfDaThang", void 0);
c([ p(cc.Label) ], e.prototype, "bmfX2", void 0);
c([ p([ sp.Skeleton ]) ], e.prototype, "SkeHeo", void 0);
c([ p([ sp.Skeleton ]) ], e.prototype, "SkeChum", void 0);
c([ p(sp.Skeleton) ], e.prototype, "SprChar", void 0);
c([ p([ cc.Sprite ]) ], e.prototype, "SprX2", void 0);
c([ p(cc.Node) ], e.prototype, "pnlChoose", void 0);
c([ p(cc.Node) ], e.prototype, "btnX2Tiep", void 0);
c([ p(cc.Node) ], e.prototype, "btnDung", void 0);
return n = c([ u ], e);
}(lngui.UIPopup);
n.default = h;
cc._RF.pop();
}, {
"./Zom.Const": "Zom.Const",
"./common/Utils": void 0,
"./network/Zom.NetworkClient": "Zom.NetworkClient"
} ]
}, {}, [ "Zom.AudioDefined", "Zom.Button", "Zom.Const", "Zom.ItemGame", "Zom.Lobby", "Zom.MainGame", "Zom.MiniGame", "Zom.TopBar", "Zom.WinBig", "Zom.X2", "Zom.NetworkClient", "Zom.BangThuong", "Zom.ChonDong", "Zom.History", "Zom.HistoryDetail", "Zom.VinhDanh" ]);