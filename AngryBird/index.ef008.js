window.__require = function t(e, n, o) {
function i(r, s) {
if (!n[r]) {
if (!e[r]) {
var c = r.split("/");
c = c[c.length - 1];
if (!e[c]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = c;
}
var h = n[r] = {
exports: {}
};
e[r][0].call(h.exports, function(t) {
return i(e[r][1][t] || t);
}, h, h.exports, t, e, n, o);
}
return n[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < o.length; r++) i(o[r]);
return i;
}({
ThanThuAudioDefined: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "13c2bzj84ZFfYTU64cgxXlk", "ThanThuAudioDefined");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = r.property, u = function(t) {
i(e, t);
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
a([ c(cc.AudioClip) ], e.prototype, "bg_game", void 0);
a([ c(cc.AudioClip) ], e.prototype, "big_win", void 0);
a([ c(cc.AudioClip) ], e.prototype, "bonus", void 0);
a([ c(cc.AudioClip) ], e.prototype, "button_click", void 0);
a([ c(cc.AudioClip) ], e.prototype, "free_spin", void 0);
a([ c(cc.AudioClip) ], e.prototype, "giau_to", void 0);
a([ c(cc.AudioClip) ], e.prototype, "jackpot", void 0);
a([ c(cc.AudioClip) ], e.prototype, "showline1", void 0);
a([ c(cc.AudioClip) ], e.prototype, "showline2", void 0);
a([ c(cc.AudioClip) ], e.prototype, "showline3", void 0);
a([ c(cc.AudioClip) ], e.prototype, "showline4", void 0);
a([ c(cc.AudioClip) ], e.prototype, "soduKhongdu", void 0);
a([ c(cc.AudioClip) ], e.prototype, "spin_reel", void 0);
a([ c(cc.AudioClip) ], e.prototype, "tien_tang", void 0);
a([ c(cc.AudioClip) ], e.prototype, "win", void 0);
return n = a([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
ThanThuBangThuong: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0ed14utktZAc6g0s0oKf/+X", "ThanThuBangThuong");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = r.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprContent = null;
e.sprFrame = [];
return e;
}
e.prototype.onLoad = function() {};
a([ c(cc.Sprite) ], e.prototype, "sprContent", void 0);
a([ c([ cc.SpriteFrame ]) ], e.prototype, "sprFrame", void 0);
return a([ s ], e);
}(fzgui.UIPopup);
n.default = u;
cc._RF.pop();
}, {} ],
ThanThuBgResizer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0a509rCUBtMBrCDCSenidlO", "ThanThuBgResizer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = r.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.designResolution = new cc.Size(1280, 720);
e.lastWitdh = 0;
e.lastHeight = 0;
e.isSpine = !1;
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
var e = (o = this.designResolution.width * t.height / t.width) * this.designResolution.width / this.designResolution.height, n = cc.size(e, o);
this.node.setContentSize(n);
if (1 == this.isSpine) {
this.node.scaleX = n.width / this.designResolution.width;
this.node.scaleY = n.height / this.designResolution.height;
}
} else {
var o = (e = this.designResolution.height * t.width / t.height) * this.designResolution.height / this.designResolution.width;
n = cc.size(e, o);
this.node.setContentSize(n);
if (1 == this.isSpine) {
this.node.scaleX = n.width / this.designResolution.width;
this.node.scaleY = n.height / this.designResolution.height;
}
}
}
};
a([ c ], e.prototype, "designResolution", void 0);
a([ c ], e.prototype, "isSpine", void 0);
return a([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
ThanThuChonDong: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d6c368YfMZJ4arzC+oU6RnN", "ThanThuChonDong");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../ThanThuConst"), s = t("../ThanThuMainGame"), c = cc._decorator, u = c.ccclass, h = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._arrayBtnDong = [];
e.pnlMid = null;
e.TAG_ENABLE_LINE = 1;
e.TAG_DISABLE_LINE = 0;
e.OPACITY_DISABLE_LINE = 100;
e.OPACITY_ENABLE_LINE = 255;
return e;
}
e.prototype.onEnable = function() {
cc.log(this);
for (var t = this.pnlMid.getChildByName("pnlContent"), e = t.getChildByName("layout"), n = 1; n <= 20; n++) {
this._arrayBtnDong[n] = e.getChildByName("btn_" + n);
this._arrayBtnDong[n].tagName = this.TAG_ENABLE_LINE;
this._arrayBtnDong[n].on(cc.Node.EventType.TOUCH_END, this.touchItemDong.bind(this));
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
if (0 === this.countEnableLine()) fzgui.UITextManager.showCenterNotification("Bạn hãy chọn ít nhất 1 dòng"); else {
r.ThanThuConst.nLineBet = this.countEnableLine();
r.ThanThuConst.choseLine = this.getStrEnableLine();
s.default.instance.onChangeLine();
}
};
a([ h(cc.Node) ], e.prototype, "pnlMid", void 0);
return a([ u ], e);
}(fzgui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../ThanThuConst": "ThanThuConst",
"../ThanThuMainGame": "ThanThuMainGame"
} ],
ThanThuConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "24594r5RM5Fa7H8uPwVUwpk", "ThanThuConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ThanThuConst = void 0;
var o = function() {
function t() {}
t.isBtnClickable = function(t) {
if (this._freeSpin) {
t || fzgui.UITextManager.showCenterNotification("Hiện đang trong tiến trình quay miễn phí");
return !1;
}
if (this._autoSpin) {
t || fzgui.UITextManager.showCenterNotification("Hiện đang trong tiến trình tự động quay");
return !1;
}
if (this._resultSpin) {
t || fzgui.UITextManager.showCenterNotification("Hiện đang trong tiến trình quay");
return !1;
}
return !0;
};
t.nLineBet = 20;
t.isMainGame = !1;
t.isLobby = !1;
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
t.balanceUnitName = "Coin";
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
n.ThanThuConst = o;
cc._RF.pop();
}, {} ],
ThanThuEventXHu: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d7342IO7DVP6bnxWtZHPm+D", "ThanThuEventXHu");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("./ThanThuConst"), s = cc._decorator, c = s.ccclass, u = s.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblHu100 = null;
e.lblHu1000 = null;
e.lblHu10000 = null;
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
};
e.prototype.init = function(t) {
if (t && r.ThanThuConst.isMainGame) for (var e = 0; e < t.length; e++) {
var n = t[e];
if (n.IsEvent) {
1 == n.RoomID && (n.NormalJackpot > 0 ? this.lblHu100 = n.NormalJackpot : this.lblHu100 = n.EventJackpotRemain);
2 == n.RoomID && (n.NormalJackpot > 0 ? this.lblHu1000 = n.NormalJackpot : this.lblHu1000 = n.EventJackpotRemain);
3 == n.RoomID && (n.NormalJackpot > 0 ? this.lblHu10000 = n.NormalJackpot : this.lblHu10000 = n.EventJackpotRemain);
}
}
};
var n;
e._instance = null;
a([ u(cc.Label) ], e.prototype, "lblHu100", void 0);
a([ u(cc.Label) ], e.prototype, "lblHu1000", void 0);
a([ u(cc.Label) ], e.prototype, "lblHu10000", void 0);
return n = a([ c ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"./ThanThuConst": "ThanThuConst"
} ],
ThanThuHistoryDetail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b2a02MxlSZL/4PF3qcfGE/g", "ThanThuHistoryDetail");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../common/ThanThuUtils"), s = t("../ThanThuConst"), c = cc._decorator, u = c.ccclass, h = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pnlMid = null;
e.itemGame = null;
e._iconsPos = [];
e._icons = [];
e._nodeCol = [];
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
cc.log(s.ThanThuConst.itemJson);
n._instance = this;
this.pnlMid.getChildByName("ThanThuSlotNode").getChildByName("pnlLine").active = !1;
this._pnlSlot = this.pnlMid.getChildByName("ThanThuSlotNode").getChildByName("pnlSlot");
this.setItem();
};
e.prototype.setItem = function() {
this.pnlMid.getChildByName("txtCongXu").getComponent(cc.Label).string = r.default.formatNumber(s.ThanThuConst.itemJson.TotalPrizeValue);
this.pnlMid.getChildByName("txtSession").getComponent(cc.Label).string = "Phiên : #" + s.ThanThuConst.itemJson.SpinId;
var t = this._pnlSlot.getChildByName("nodeCol1").getChildByName("nodeItem0");
this._nodeItemDistant = this._pnlSlot.getChildByName("nodeCol1").getChildByName("nodeItem1").y - t.y;
this._nodeItemBottomPos = this._pnlSlot.getChildByName("nodeCol1").getChildByName("nodeItem0").y;
this._nodeItemNumber = 3;
this._nodeItemScale = t.getScale(cc.v2());
for (var e = s.ThanThuConst.itemJson.SlotsData.split(","), n = 0; n < 5; n++) {
this._icons[n] = [];
this._iconsPos[n] = [];
this._nodeCol[n] = this._pnlSlot.getChildByName("nodeCol" + n);
this._nodeCol[n].y -= (this._nodeItemNumber - 3) * this._nodeItemDistant;
for (var o = 0; o < this._nodeItemNumber; o++) {
this._iconsPos[n][o] = cc.v2(0, this._nodeItemBottomPos + this._nodeItemDistant * o);
var i = e[n + (10 - 5 * o)];
this._icons[n][o] = cc.instantiate(this.itemGame);
this._icons[n][o].getComponent("ThanThuItemGame").init(s.ThanThuConst.itemJson.BetValue, Number(i));
this._icons[n][o].setPosition(this._iconsPos[n][o]);
this._icons[n][o].setScale(.6);
this._nodeCol[n].addChild(this._icons[n][o]);
}
}
};
var n;
e._instance = null;
a([ h(cc.Node) ], e.prototype, "pnlMid", void 0);
a([ h(cc.Prefab) ], e.prototype, "itemGame", void 0);
return n = a([ u ], e);
}(fzgui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../ThanThuConst": "ThanThuConst",
"../common/ThanThuUtils": "ThanThuUtils"
} ],
ThanThuHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "20086iihURLXI/Lni9OWP2Q", "ThanThuHistory");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../common/ThanThuUtils"), s = t("../ThanThuConst"), c = t("../network/ThanThuNetworkClient"), u = cc._decorator, h = u.ccclass, l = u.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemPerPage = 50;
e.pnlItem = null;
e.scrollview = null;
e.content = null;
e.button_click = null;
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
c.default.instance.sendSignalR("GetHistory", []);
n._instance = this;
};
e.prototype.parseData = function(t) {
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
for (var t = 0; t < this.itemPerPage && this.arrayData[t]; t++) this.updateToListView(this.arrayData[t], t);
this.scrollview.scrollToTop(.1);
}
};
e.prototype.updateToListView = function(t, e) {
var n = cc.instantiate(this.pnlItem);
n.position = new cc.Vec3(0, 0);
n.getChildByName("txtPhien").color = cc.Color.WHITE;
n.getChildByName("txtThoiGian").color = cc.Color.WHITE;
n.getChildByName("txtMucDat").color = cc.Color.YELLOW;
n.getChildByName("txtCongXu").color = cc.Color.YELLOW;
n.getChildByName("txtChiTiet").color = cc.Color.WHITE;
if (t.SlotsData) {
n.getChildByName("txtChiTiet").active = !1;
n.getChildByName("btnChiTiet").active = !0;
n.getChildByName("btnChiTiet").on(cc.Node.EventType.TOUCH_END, function() {
s.ThanThuConst.itemJson = t;
});
} else n.getChildByName("btnChiTiet").active = !1;
n.getChildByName("txtPhien").getComponent(cc.Label).string = t.SpinId;
n.getChildByName("txtThoiGian").getComponent(cc.Label).string = r.default.formatDateTime(t.CreateDate);
n.getChildByName("txtMucDat").getComponent(cc.Label).string = t.TotalBetValue;
n.getChildByName("txtCongXu").getComponent(cc.Label).string = r.default.formatNumber(t.TotalPrizeValue);
n.getChildByName("background").active = e % 2 != 0;
this.content.addChild(n);
};
e.prototype.onDestroy = function() {
n._instance = null;
};
var n;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "pnlItem", void 0);
a([ l(cc.ScrollView) ], e.prototype, "scrollview", void 0);
a([ l(cc.Node) ], e.prototype, "content", void 0);
a([ l(cc.AudioClip) ], e.prototype, "button_click", void 0);
return n = a([ h ], e);
}(fzgui.UIPopup);
n.default = p;
cc._RF.pop();
}, {
"../ThanThuConst": "ThanThuConst",
"../common/ThanThuUtils": "ThanThuUtils",
"../network/ThanThuNetworkClient": "ThanThuNetworkClient"
} ],
ThanThuItemGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "da980Kjn1FGcZRpZCszoFrY", "ThanThuItemGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = r.property, u = function(t) {
i(e, t);
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
e.prototype.init = function(t, e) {
var n = new cc.Node();
n.addComponent(cc.Sprite).spriteFrame = this.tpSpriteFrame[e];
n.parent = this.node;
};
var n;
e._instance = null;
a([ c([ sp.SkeletonData ]) ], e.prototype, "arrItemSkeleton", void 0);
a([ c([ cc.SpriteFrame ]) ], e.prototype, "tpSpriteFrame", void 0);
return n = a([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
ThanThuLobby: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8d706KUR3pPQrPnxWajQg4m", "ThanThuLobby");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("./common/ThanThuUINumericLabelHelper"), s = t("./common/ThanThuUtils"), c = t("./ThanThuConst"), u = t("./network/ThanThuNetworkClient"), h = cc._decorator, l = h.ccclass, p = h.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtNickName = null;
e.txtXuBalance = null;
e.txtJackPot = [];
e.button_click = null;
e.PreEventXhu = null;
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
u.default.instance.connect();
this.txtNickName.string = fzgui.UserManager.instance.mainUserInfo.NickName;
this.txtXuBalance.string = s.default.formatNumber(fzgui.UserManager.instance.mainUserInfo.Money);
this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.1), cc.callFunc(this.setJackpot, this))));
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
e.prototype.onUpdateGold = function(t) {
fzgui.UserManager.instance.mainUserInfo.Money = t;
fzgui.UINumericLabelHelper.scheduleForLabel(this.txtXuBalance, t, .2);
};
e.prototype.show = function(t) {
this.node.active = t;
return this.node.active;
};
e.prototype.setJackpot = function() {
for (var t = 0; t < 3; t++) this.txtJackPot[t].scheduleProgress(c.ThanThuConst.jackpot[t + 1]);
};
e.prototype.actBack = function() {
fzgui.GameCoreManager.instance.onBackToLobby();
};
e.prototype.actHonors = function() {};
e.prototype.actHistory = function() {};
e.prototype.actRoom = function(t, e) {
fzgui.AudioManager.instance.playSfx(this.button_click, 1);
c.ThanThuConst.roomValue = e;
};
var n;
e._instance = null;
a([ p(cc.Label) ], e.prototype, "txtNickName", void 0);
a([ p(cc.Label) ], e.prototype, "txtXuBalance", void 0);
a([ p([ r.default ]) ], e.prototype, "txtJackPot", void 0);
a([ p(cc.AudioClip) ], e.prototype, "button_click", void 0);
a([ p(cc.Prefab) ], e.prototype, "PreEventXhu", void 0);
return n = a([ l ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"./ThanThuConst": "ThanThuConst",
"./common/ThanThuUINumericLabelHelper": "ThanThuUINumericLabelHelper",
"./common/ThanThuUtils": "ThanThuUtils",
"./network/ThanThuNetworkClient": "ThanThuNetworkClient"
} ],
ThanThuMainGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "770f1fZhTdDqoivIWuER4aj", "ThanThuMainGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("./network/ThanThuNetworkClient"), s = t("./ThanThuWinBig"), c = t("./ThanThuConst"), u = t("./common/ThanThuUINumericLabelHelper"), h = t("./ThanThuMiniGame"), l = t("./common/ThanThuUtils"), p = cc._decorator, d = p.ccclass, T = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._icons = [];
e._iconsPos = [];
e._nodeCol = [];
e._ItemArray = null;
e._LineArray = null;
e.txtJackPot = null;
e.txtXuBalance = null;
e.txtXuThang = null;
e.txtXuCuoc = null;
e.txtRoomValue = null;
e.txtFreeSpin = null;
e.txtChonDongNumber = null;
e.skeletonLine = null;
e.txtSession = null;
e.pnlMid = null;
e.btnQuay = null;
e.btnTuQuay = null;
e.btnChonDong = null;
e.btnSieuToc = null;
e.btnDungTuQuay = null;
e.btnDungSieuToc = null;
e.btnRoom = null;
e.PopupWinbig = null;
e.PopupMiniGame = null;
e.itemGame = null;
e.bgFreeSpin = null;
e.pnlLine = null;
e.button_click = null;
e.tien_tang = null;
e.win = null;
e.bg_game = null;
e.spin_reel = null;
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
c.ThanThuConst._isPlayTry = !1;
n._instance = this;
this.initPnlMid();
this.initPnlBottom();
this.initRoomVar(c.ThanThuConst.roomValue);
this.setBalance();
this.bgFreeSpin.active = !1;
this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.1), cc.callFunc(this.setJackpot, this))));
c.ThanThuConst.isMainGame = !0;
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
var t = setInterval(function() {
1 == c.ThanThuConst.IsEvent && clearInterval(t);
0 == c.ThanThuConst.IsEvent && clearInterval(t);
}, 500);
};
e.prototype.onUpdateGold = function(t) {
fzgui.UserManager.instance.mainUserInfo.Money = t;
this.txtXuBalance.scheduleProgress(t, .2);
};
e.prototype.onDisable = function() {
fzgui.UIWindowManager.instance.removeAllWindows();
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
c.ThanThuConst.isMainGame = !1;
console.log("backtomain");
};
e.prototype.initRoomVar = function(t) {
c.ThanThuConst.roomValue = Number(t);
if (0 == t) {
c.ThanThuConst._isPlayTry = !0;
c.ThanThuConst.jackpot[0] = 5e7;
t = 1e4;
}
100 == t && (c.ThanThuConst.roomType = 1);
1e3 == t && (c.ThanThuConst.roomType = 2);
1e4 == t && (c.ThanThuConst.roomType = 3);
c.ThanThuConst._isPlayTry ? r.default.instance.sendSignalR("PlayTry", []) : r.default.instance.sendSignalR("PlayGame", [ c.ThanThuConst.roomType, 1 ]);
this.changeRoomVariable();
};
e.prototype.changeRoomVariable = function() {
for (var t = 0; t < 5; t++) for (var e = 0, n = this._icons[t].length; e < n; e++) if (this._icons[t][e]) {
var o = l.default.randomRangeInt(1, 7);
this._icons[t][e].removeFromParent();
this._icons[t][e] = cc.instantiate(this.itemGame);
this._icons[t][e].getComponent("ThanThuItemGame").init(c.ThanThuConst.roomValue, o, !0);
this._icons[t][e].setPosition(this._iconsPos[t][e].x, this._iconsPos[t][e].y);
this._icons[t][e].setScale(.8);
this._nodeCol[t].addChild(this._icons[t][e]);
}
this.txtXuCuoc.scheduleProgress(c.ThanThuConst.roomValue * c.ThanThuConst.choseLine[0].split(",").length);
this.txtXuThang.scheduleProgress(0);
this.txtRoomValue.scheduleProgress(c.ThanThuConst.roomValue);
};
e.prototype.initPnlMid = function() {
cc.log("initPnlMid");
this._pnlSlot = this.pnlMid.getChildByName("nodeSlot").getChildByName("pnlSlot");
this.initGameIcon();
};
e.prototype.initPnlBottom = function() {
this.btnRoom.node.on(cc.Node.EventType.TOUCH_END, function() {
fzgui.AudioManager.instance.playSfx(this.button_click, 1);
if (c.ThanThuConst._isPlayTry) fzgui.UITextManager.showCenterNotification("Bạn không thể chọn phòng trong phần chơi miễn phí"); else if (c.ThanThuConst.isBtnClickable(!1)) {
console.log(c.ThanThuConst.roomValue);
switch (c.ThanThuConst.roomValue) {
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
for (var t = 0; t < 20; t++) this.pnlLine.getChildByName("sprLine" + (t + 1)).active = !1;
this.txtXuThang.scheduleProgress(0);
}
}, this);
this.txtChonDongNumber.string = c.ThanThuConst._chonDongNumberCounter;
this.btnChonDong.node.on(cc.Node.EventType.TOUCH_END, function() {
fzgui.AudioManager.instance.playSfx(this.button_click, 1);
c.ThanThuConst._isPlayTry ? fzgui.UITextManager.showCenterNotification("Bạn không thể chọn dòng trong phần chơi miễn phí") : c.ThanThuConst.isBtnClickable(!0);
}, this);
this.btnQuay.node.on(cc.Node.EventType.TOUCH_END, function() {
if (fzgui.UserManager.instance.mainUserInfo.Money < c.ThanThuConst.roomValue * c.ThanThuConst.nLineBet) fzgui.UITextManager.showCenterNotification("Số dư không đủ để thực hiện."); else {
fzgui.AudioManager.instance.playSfx(this.button_click, 1);
this.btnQuay.interactable && this.callSpin();
}
}.bind(this));
this.btnTuQuay.node.on(cc.Node.EventType.TOUCH_END, function() {
if (fzgui.UserManager.instance.mainUserInfo.Money < c.ThanThuConst.roomValue * c.ThanThuConst.nLineBet) fzgui.UITextManager.showCenterNotification("Số dư không đủ để thực hiện."); else {
fzgui.AudioManager.instance.playSfx(this.button_click, 1);
if (c.ThanThuConst._isPlayTry) fzgui.UITextManager.showCenterNotification("Bạn không thể tự quay trong phần chơi miễn phí"); else if (c.ThanThuConst.isBtnClickable(!1)) {
c.ThanThuConst._autoSpin = !0;
c.ThanThuConst.spinSpeed = 1;
this.touchBtnTuQuay();
}
}
}, this);
this.btnDungTuQuay.node.on(cc.Node.EventType.TOUCH_END, function() {
fzgui.AudioManager.instance.playSfx(this.button_click, 1);
c.ThanThuConst._autoSpin = !1;
c.ThanThuConst.spinSpeed = 1;
this.touchBtnTuQuay();
}, this);
this.btnDungTuQuay.node.active = !1;
this.btnSieuToc.node.on(cc.Node.EventType.TOUCH_END, function() {
fzgui.AudioManager.instance.playSfx(this.button_click, 1);
if (fzgui.UserManager.instance.mainUserInfo.Money < c.ThanThuConst.roomValue * c.ThanThuConst.nLineBet) fzgui.UITextManager.showCenterNotification("Số dư không đủ để thực hiện."); else if (c.ThanThuConst._isPlayTry) fzgui.UITextManager.showCenterNotification("Bạn không thể quay nhanh trong phần chơi miễn phí"); else if (c.ThanThuConst.isBtnClickable(!1)) {
c.ThanThuConst._autoSpin = !0;
c.ThanThuConst.spinSpeed = 3;
this.touchBtnTuQuay();
}
}, this);
this.btnDungSieuToc.node.on(cc.Node.EventType.TOUCH_END, function() {
fzgui.AudioManager.instance.playSfx(this.button_click, 1);
c.ThanThuConst._autoSpin = !1;
c.ThanThuConst.spinSpeed = 1;
this.touchBtnTuQuay();
}, this);
this.btnDungSieuToc.node.active = !1;
};
e.prototype.touchBtnTuQuay = function() {
this.btnTuQuay.node.active = !(c.ThanThuConst._autoSpin && 1 === c.ThanThuConst.spinSpeed);
this.btnDungTuQuay.node.active = c.ThanThuConst._autoSpin && 1 === c.ThanThuConst.spinSpeed;
this.btnSieuToc.node.active = !(c.ThanThuConst._autoSpin && 3 === c.ThanThuConst.spinSpeed);
this.btnDungSieuToc.node.active = c.ThanThuConst._autoSpin && 3 === c.ThanThuConst.spinSpeed;
null == c.ThanThuConst._resultSpin && this.callSpin();
};
e.prototype.initGameIcon = function() {
var t = this._pnlSlot.getChildByName("nodeCol0");
this._nodeItemDistant = t.getChildByName("nodeItem1").y - t.getChildByName("nodeItem0").y;
this._nodeItemBottomPos = t.getChildByName("nodeItem0").y;
this._nodeItemNumber = 25;
this._nodeItemScale = .8;
for (var e = 0; e < 5; e++) {
this._icons[e] = [];
this._iconsPos[e] = [];
this._nodeCol[e] = this._pnlSlot.getChildByName("nodeCol" + e);
this._nodeCol[e].y -= (this._nodeItemNumber - 3) * this._nodeItemDistant;
for (var n = 0; n < this._nodeItemNumber; n++) {
this._iconsPos[e][n] = cc.v2(0, this._nodeItemBottomPos + this._nodeItemDistant * n + 70);
if (n >= this._nodeItemNumber - 3) {
var o = l.default.randomRangeInt(1, 7);
this._icons[e][n] = cc.instantiate(this.itemGame);
this._icons[e][n].getComponent("ThanThuItemGame").init(c.ThanThuConst.roomValue, o, !1);
this._icons[e][n].setPosition(this._iconsPos[e][n].x, this._iconsPos[e][n].y);
this._icons[e][n].scale = this._nodeItemScale;
this._nodeCol[e].addChild(this._icons[e][n]);
}
}
}
};
e.prototype.parseJoinTryPlay = function(t) {
console.log("parseJoinTryPlay", t);
this.SpinData = t;
this.txtRoomValue.scheduleProgress(t.BetValue);
this.txtXuBalance.scheduleProgress(t.Balance);
c.ThanThuConst.jackpot[0] = t.SpinData.JackpotValue;
c.ThanThuConst._isPlayTry = !0;
this.txtJackPot.scheduleProgress(t.SpinData.JackpotValue);
};
e.prototype.parseSpin = function(t) {
switch (t.SpinData.ResponseStatus) {
case -10003:
c.ThanThuConst._resultSpin = 1;
this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(this.callSpin, this)));
return;

case -10004:
fzgui.UITextManager.showCenterNotification("Số dư của bạn không đủ để thực hiện");
return;
}
c.ThanThuConst._isPlayTry ? this.txtXuBalance.scheduleProgress(this.txtXuBalance.data - c.ThanThuConst.roomValue * c.ThanThuConst.nLineBet) : fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.txtXuBalance.data - c.ThanThuConst.roomValue * c.ThanThuConst.nLineBet);
if (t.SpinData.ResponseStatus < 0) fzgui.UITextManager.showCenterNotification("Có lỗi xảy ra trong quá trình quay, mời bạn thử lại"); else {
this.txtSession.string = "Phiên:\n#" + t.SpinData.SpinId;
c.ThanThuConst._resultSpin = t;
this.hideWinBigNode();
this.prepareRoll();
}
};
e.prototype.callSpin = function() {
console.log("CallSpin");
if (!this._miniGameNode) {
c.ThanThuConst._resultSpin = 1;
this.btnQuay.interactable = !1;
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
if (1 === this._resultSpin) {
this._resultSpin = null;
this.btnQuay.interactable = !0;
}
}, this)));
if (c.ThanThuConst._isPlayTry) {
var t = [ "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20", this.txtXuBalance.data, c.ThanThuConst.jackpot[0], 0 ];
r.default.instance.sendSignalR("SpinTry", t);
} else c.ThanThuConst._freeSpin > 0 ? r.default.instance.sendSignalR("SpinMobile", [ "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20" ]) : r.default.instance.sendSignalR("SpinMobile", c.ThanThuConst.choseLine);
}
};
e.prototype.prepareRoll = function() {
this.txtXuThang.data = 0;
cc.log("prepareRoll");
c.ThanThuConst._isPlayTry && this.txtXuBalance.scheduleProgress(this.txtXuBalance.data - 2e5);
for (var t = c.ThanThuConst._resultSpin.SpinData.SlotsData, e = 0; e < 5; e++) for (var n = 0; n < 3; n++) {
this._icons[e][n] && this._icons[e][n].removeFromParent();
this._icons[e][n] = this._icons[e][n + this._nodeItemNumber - 3];
this._icons[e][n].stopAllActions();
var o = t[e + (10 - 5 * n)], i = cc.instantiate(this.itemGame);
i.getComponent("ThanThuItemGame").init(c.ThanThuConst.roomValue, o, !0);
i.scale = this._nodeItemScale;
this._nodeCol[e].addChild(i);
this._icons[e][n + this._nodeItemNumber - 3] = i;
}
if (!this._icons[0][3]) for (e = 0; e < 5; e++) for (n = 3; n < this._nodeItemNumber - 3; n++) {
o = l.default.randomRangeInt(1, 7);
this._icons[e][n] = cc.instantiate(this.itemGame);
this._icons[e][n].getComponent("ThanThuItemGame").init(c.ThanThuConst.roomValue, o, !1);
this._icons[e][n].scale = this._nodeItemScale;
this._nodeCol[e].addChild(this._icons[e][n]);
}
for (e = 0; e < 5; e++) for (n = 0; n < this._nodeItemNumber; n++) this._icons[e][n].setPosition(this._iconsPos[e][n]);
for (e = 0; e < c.ThanThuConst.maxLine; e++) this.pnlLine.getChildByName("sprLine" + (e + 1)).active = !1;
this.beginRoll();
};
e.prototype.beginRoll = function() {
cc.log("beginRoll");
cc.log(c.ThanThuConst._resultSpin.SpinData);
fzgui.AudioManager.instance.playSfx(this.spin_reel, 1);
for (var t = 0; t < 5; t++) {
this._nodeCol[t].stopAllActions();
this._nodeCol[t].y = 0;
var e = [ cc.delayTime(.125 * t / c.ThanThuConst.spinSpeed) ];
e.push(cc.moveBy(1.5 / c.ThanThuConst.spinSpeed, 0, -this._nodeItemDistant * (this._nodeItemNumber - 2.5)));
e.push(cc.moveBy(.3 / c.ThanThuConst.spinSpeed, 0, .5 * this._nodeItemDistant).easing(cc.easeElasticOut(2)));
4 === t && e.push(cc.callFunc(this.finishRoll, this));
this._nodeCol[t].runAction(cc.sequence(e));
}
};
e.prototype.finishRoll = function() {
cc.log("finishRoll");
if (null != c.ThanThuConst._resultSpin.SpinData.PrizeData && c.ThanThuConst._resultSpin.SpinData.PrizeData.length > 0) {
var t = [], e = c.ThanThuConst._resultSpin.SpinData.PrizeData;
console.log("-=PrizeData ", e);
for (var n in e) {
var o = e[n].LineId;
o < 1 || o > 20 || e[n].PrizeValue <= 0 || t.push(o);
}
for (var n in t) this.pnlLine.getChildByName("sprLine" + t[n]).active = !0;
this._LineArray = t;
var i = [], a = e;
for (var n in a) i.push(a[n].Items);
this._ItemArray = i;
var r = [];
for (var n in i) for (var s in i[n]) r[i[n][s]] = !0;
for (n = 0; n < 5; n++) for (s = 0; s < 3; s++) this._icons[n][s + this._nodeItemNumber - 3].color = cc.Color.WHITE;
for (var u in r) {
var h = parseInt(u);
n = (h - 1) % 5, s = Math.ceil((h - n - 10) / -5);
this._icons[n][s + this._nodeItemNumber - 3].color = cc.Color.WHITE;
}
}
this.showSpecialWonLayer();
};
e.prototype.showSpecialWonLayer = function() {
var t, e = c.ThanThuConst._resultSpin.SpinData.PrizeValue / (c.ThanThuConst.roomValue || 1e4);
c.ThanThuConst._resultSpin.SpinData.IsJackPort ? t = c.ThanThuConst.WINBIG.HUXU : c.ThanThuConst._resultSpin.BonusGame.BonusGameData ? t = c.ThanThuConst.WINBIG.BONUS : e >= 50 && e < 100 ? t = c.ThanThuConst.WINBIG.THANGLON : e >= 100 ? t = c.ThanThuConst.WINBIG.GIAUTO : c.ThanThuConst._resultSpin.SpinData.TotalFreeSpin && !this._maxFreeSpin && (t = c.ThanThuConst.WINBIG.QUAYMIENPHI);
switch (t) {
case c.ThanThuConst.WINBIG.QUAYMIENPHI:
case c.ThanThuConst.WINBIG.BONUS:
n = 2;
break;

case c.ThanThuConst.WINBIG.GIAUTO:
n = 5;
break;

case c.ThanThuConst.WINBIG.THANGLON:
n = 2;
break;

case c.ThanThuConst.WINBIG.HUXU:
n = 2;
fzgui.AudioManager.instance.pauseMusic();
break;

default:
var n = .3;
}
this.showWinBigNode(t, c.ThanThuConst._resultSpin.SpinData.PrizeValue);
if (t === c.ThanThuConst.WINBIG.HUXU) {
c.ThanThuConst._autoSpin = !1;
c.ThanThuConst.spinSpeed = 1;
this.touchBtnTuQuay();
fzgui.AudioManager.instance.playSfx(this.bg_game, 1);
} else this._nodeCol[0].runAction(cc.sequence(cc.delayTime(n), cc.callFunc(function() {
this.hideWinBigDecorLayer();
c.ThanThuConst._resultSpin.BonusGame.BonusGameData && this.showMiniGameNode(c.ThanThuConst._resultSpin);
this.commitSpinResult();
}, this)));
};
e.prototype.showWinBigNode = function(t, e) {
if (this._winBig) this._winBig.getComponent(s.default).showLayer(t, e); else if (!this._winBig) {
this._winBig = cc.instantiate(this.PopupWinbig);
this.node.addChild(this._winBig, c.ThanThuConst.zOrder_Win);
this._winBig.getComponent(s.default).showLayer(t, e);
}
};
e.prototype.hideWinBigDecorLayer = function() {
this._winBig && this._winBig.active && this._winBig.getComponent(s.default).hideDecorLayer();
};
e.prototype.hideWinBigNode = function() {
this._winBig && this._winBig.active && this._winBig.getComponent(s.default).hideLayer();
};
e.prototype.commitSpinResult = function() {
this.txtXuThang.scheduleProgress(c.ThanThuConst._resultSpin.SpinData.PrizeValue);
if (!c.ThanThuConst._isPlayTry) {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, c.ThanThuConst._resultSpin.Balance);
c.ThanThuConst.jackpot[c.ThanThuConst.roomType] = c.ThanThuConst._resultSpin.SpinData.JackpotValue;
this.setJackpot();
}
if (c.ThanThuConst._isPlayTry) {
this.txtXuBalance.scheduleProgress(c.ThanThuConst._resultSpin.Balance);
this.txtJackPot.scheduleProgress(c.ThanThuConst._resultSpin.CurrentJackPort);
c.ThanThuConst.jackpot[0] = c.ThanThuConst._resultSpin.CurrentJackPort;
}
if (c.ThanThuConst._resultSpin) {
c.ThanThuConst._freeSpin = c.ThanThuConst._resultSpin.SpinData.TotalFreeSpin;
this._maxFreeSpin = this._maxFreeSpin || 0;
this._maxFreeSpin < c.ThanThuConst._freeSpin && (this._maxFreeSpin = c.ThanThuConst._freeSpin);
if (0 === c.ThanThuConst._freeSpin && this._maxFreeSpin && c.ThanThuConst._resultSpin.SpinData.PrizeValueFreeSpins) {
fzgui.UITextManager.showCenterNotification("BẠN ĐÃ THẮNG " + l.default.formatNumber(c.ThanThuConst._resultSpin.SpinData.PrizeValueFreeSpins) + " " + c.ThanThuConst.balanceUnitName + " TRONG FREESPIN");
this._maxFreeSpin = 0;
}
}
if (c.ThanThuConst._resultSpin.SpinData.PrizeValue) {
fzgui.AudioManager.instance.playSfx(this.tien_tang, 1);
fzgui.AudioManager.instance.playSfx(this.win, 1);
}
c.ThanThuConst._resultSpin = null;
this.btnQuay.interactable = !0;
this.bgFreeSpin.active = 0 != c.ThanThuConst._freeSpin;
this.txtFreeSpin.string = "Số lượt quay miễn phí: " + c.ThanThuConst._freeSpin;
this._nodeCol[0].runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
(c.ThanThuConst._freeSpin || c.ThanThuConst._autoSpin) && null == c.ThanThuConst._resultSpin && this.callSpin();
this.hideWinBigNode();
this.showWonLine();
this.schedule(this.showWonLine, 1);
}, this)));
};
e.prototype.setJackpot = function() {
if (this.txtJackPot) {
if (c.ThanThuConst._isPlayTry) return;
100 == c.ThanThuConst.roomValue ? this.txtJackPot.scheduleProgress(c.ThanThuConst.jackpot[1]) : 1e3 == c.ThanThuConst.roomValue ? this.txtJackPot.scheduleProgress(c.ThanThuConst.jackpot[2]) : this.txtJackPot.scheduleProgress(c.ThanThuConst.jackpot[3]);
}
};
e.prototype.setBalance = function() {
if (this.txtXuBalance) {
if (c.ThanThuConst._isPlayTry) return;
this.txtXuBalance.scheduleProgress(fzgui.UserManager.instance.mainUserInfo.Money);
}
};
e.prototype.showWonLine = function() {
if (!c.ThanThuConst._resultSpin && this._ItemArray && this._LineArray) {
var t = this._LineArray[0], e = this._ItemArray[0];
this._LineArray.splice(0, 1);
this._ItemArray.splice(0, 1);
for (var n = 0; n < c.ThanThuConst.maxLine; n++) this.pnlLine.getChildByName("sprLine" + (n + 1)).active = !1;
for (var o = 0; o < 5; o++) for (var i = 0; i < 3; i++) {
this._icons[o][i + this._nodeItemNumber - 3].stopAllActions();
this._icons[o][i + this._nodeItemNumber - 3].color = cc.Color.WHITE;
}
this.pnlLine.getChildByName("sprLine" + t) && (this.pnlLine.getChildByName("sprLine" + t).active = !0);
for (var a in e) {
var r = e[a], s = (r - 1) % 5, u = Math.ceil((r - s - 10) / -5);
this._icons[s][u + this._nodeItemNumber - 3].color = cc.Color.WHITE;
}
this._LineArray.push(t);
this._ItemArray.push(e);
} else this.unschedule(this.showWonLine);
};
e.prototype.showMiniGameNode = function(t) {
this._miniGameNode = cc.instantiate(this.PopupMiniGame);
this.node.addChild(this._miniGameNode);
this._miniGameNode.getComponent(h.default).parseMiniGame(t);
};
e.prototype.closeMiniGameNode = function() {
if (this._miniGameNode) {
this._miniGameNode.removeFromParent(!0);
this._miniGameNode = null;
}
(c.ThanThuConst._freeSpin || c.ThanThuConst._autoSpin) && this.callSpin();
(c.ThanThuConst._freeSpin || c.ThanThuConst._resultSpin) && this.txtXuThang.scheduleProgress(c.ThanThuConst._resultSpin.SpinData.PayLinePrizeValue + c.ThanThuConst._resultSpin.BonusGame.TotalPrizeValue);
};
e.prototype.onChangeLine = function() {
this.txtChonDongNumber.string = "" + c.ThanThuConst.nLineBet;
this.txtXuCuoc.scheduleProgress(c.ThanThuConst.roomValue * c.ThanThuConst.nLineBet);
};
var n;
e._instance = null;
a([ T(u.default) ], e.prototype, "txtJackPot", void 0);
a([ T(u.default) ], e.prototype, "txtXuBalance", void 0);
a([ T(u.default) ], e.prototype, "txtXuThang", void 0);
a([ T(u.default) ], e.prototype, "txtXuCuoc", void 0);
a([ T(u.default) ], e.prototype, "txtRoomValue", void 0);
a([ T(cc.Label) ], e.prototype, "txtFreeSpin", void 0);
a([ T(cc.Label) ], e.prototype, "txtChonDongNumber", void 0);
a([ T(sp.SkeletonData) ], e.prototype, "skeletonLine", void 0);
a([ T(cc.Label) ], e.prototype, "txtSession", void 0);
a([ T(cc.Node) ], e.prototype, "pnlMid", void 0);
a([ T(cc.Button) ], e.prototype, "btnQuay", void 0);
a([ T(cc.Button) ], e.prototype, "btnTuQuay", void 0);
a([ T(cc.Button) ], e.prototype, "btnChonDong", void 0);
a([ T(cc.Button) ], e.prototype, "btnSieuToc", void 0);
a([ T(cc.Button) ], e.prototype, "btnDungTuQuay", void 0);
a([ T(cc.Button) ], e.prototype, "btnDungSieuToc", void 0);
a([ T(cc.Button) ], e.prototype, "btnRoom", void 0);
a([ T(cc.Prefab) ], e.prototype, "PopupWinbig", void 0);
a([ T(cc.Prefab) ], e.prototype, "PopupMiniGame", void 0);
a([ T(cc.Prefab) ], e.prototype, "itemGame", void 0);
a([ T(cc.Node) ], e.prototype, "bgFreeSpin", void 0);
a([ T(cc.Node) ], e.prototype, "pnlLine", void 0);
a([ T(cc.AudioClip) ], e.prototype, "button_click", void 0);
a([ T(cc.AudioClip) ], e.prototype, "tien_tang", void 0);
a([ T(cc.AudioClip) ], e.prototype, "win", void 0);
a([ T(cc.AudioClip) ], e.prototype, "bg_game", void 0);
a([ T(cc.AudioClip) ], e.prototype, "spin_reel", void 0);
return n = a([ d ], e);
}(fzgui.UIScreen);
n.default = f;
cc._RF.pop();
}, {
"./ThanThuConst": "ThanThuConst",
"./ThanThuMiniGame": "ThanThuMiniGame",
"./ThanThuWinBig": "ThanThuWinBig",
"./common/ThanThuUINumericLabelHelper": "ThanThuUINumericLabelHelper",
"./common/ThanThuUtils": "ThanThuUtils",
"./network/ThanThuNetworkClient": "ThanThuNetworkClient"
} ],
ThanThuMiniGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6dce2/4BGtM1K7XBNmfiT7o", "ThanThuMiniGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("./common/ThanThuUINumericLabelHelper"), s = t("./common/ThanThuUtils"), c = t("./network/ThanThuNetworkClient"), u = t("./ThanThuConst"), h = t("./ThanThuMainGame"), l = cc._decorator, p = l.ccclass, d = l.property, T = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pnlMid = null;
e.txtSoLuot = null;
e.txtHeSoNhan = null;
e.txtTimer = null;
e.txtPrizeJumpEffect = null;
e.tien_tang = null;
e.BonusStep = 0;
e.AwardedPrizeValue = 0;
e._nMultiStar = 0;
e._btnMiniGameNode = [];
e._btnMiniGameNode_btn = [];
e._btnMiniGameNode_txtPrizeEffect = [];
e._nBonusMulti = 1;
e._timer = 15;
e._nTurn = 6;
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
c.default.instance.sendSignalR("PlayBonusGameAll", []);
n._instance = this;
this.schedule(this.timerEnd.bind(this), 1);
this._pnlMiniGame = this.pnlMid.getChildByName("pnlMiniGame");
for (var t = 0; t < 10; t++) {
this._btnMiniGameNode[t] = this._pnlMiniGame.getChildByName("btnMiniGameNode_" + t);
this._btnMiniGameNode[t].tagName = t;
this._btnMiniGameNode[t].getChildByName("nodeOpen").active = !1;
this._btnMiniGameNode[t].getChildByName("nodeFail").active = !1;
this._btnMiniGameNode[t].getChildByName("nodeSpine").active = !0;
this._btnMiniGameNode_btn[t] = this._btnMiniGameNode[t].getChildByName("btnMiniGame");
this._btnMiniGameNode_btn[t].tagName = t;
this._btnMiniGameNode_btn[t].on(cc.Node.EventType.TOUCH_END, this.touchBtnMiniGame.bind(this));
this._btnMiniGameNode[t].getChildByName("nodePrize").active = !1;
}
this._pnlMiniGame.active = !0;
};
e.prototype.parseMiniGame = function(t) {
cc.log(t);
this._resultSpin = t;
this.BonusGameData = t.BonusGame.BonusGameData.split(";");
this.txtSoLuot.string = this._nTurn + "";
this._nMultiStar = t.BonusGame.StartBonus;
this.txtHeSoNhan.string = this._nMultiStar + "";
};
e.prototype.timerEnd = function() {
this._timer--;
if (this._timer >= 0) {
if (0 === this._timer) {
this._isFinishBonus = !0;
this.parseFinishBonus();
}
this.txtTimer.string = this._timer + "s";
}
};
e.prototype.touchBtnMiniGame = function(t) {
if (!(this._choosingBtnMiniGameIndex >= 0 || this._isFinishBonus)) {
this._timer = 15;
this.txtTimer.string = this._timer + "s";
var e = this.BonusGameData[this.BonusStep].split(",");
for (var n in e) e[n] = parseInt(e[n]);
this.AwardedPrizeValue += e[3];
var o = {
PrizeValue: e[3],
AwardedPrizeValue: this.AwardedPrizeValue,
Multiplier: e[2],
TotalStep: this.BonusGameData.length,
CurrentStep: this.BonusStep + 1,
PrizeID: e[1]
};
this.BonusStep++;
this._choosingBtnMiniGameIndex = t.currentTarget.tagName;
this.parsePrize(o);
}
};
e.prototype.parsePrize = function(t) {
var e = this._choosingBtnMiniGameIndex;
this._choosingBtnMiniGameIndex = -1;
this._timer = 15;
this.txtTimer.string = this._timer + "s";
210 === t.PrizeID ? this._nBonusMulti++ : this._nTurn--;
this.txtPrizeJumpEffect.scheduleProgress(t.AwardedPrizeValue);
this.txtHeSoNhan.string = this._nMultiStar * this._nBonusMulti + "";
this.txtSoLuot.string = this._nTurn + "";
if (t.PrizeValue > 0) {
this._btnMiniGameNode[e].getChildByName("nodePrize").active = !0;
this._btnMiniGameNode[e].getChildByName("nodePrize").getChildByName("txtPrize").getComponent(r.default).scheduleProgress(t.PrizeValue);
this._btnMiniGameNode[e].getChildByName("nodePrize").runAction(cc.jumpBy(.5, 0, -45, 50, 1));
fzgui.AudioManager.instance.playSfx(this.tien_tang, 1);
} else this._btnMiniGameNode[e].getChildByName("nodeSpine").getComponent(sp.Skeleton).setAnimation(0, "idle_0", !1);
this._btnMiniGameNode_btn[e].active = !1;
if (6 === t.CurrentStep) {
this._isFinishBonus = !0;
this.parseFinishBonus();
}
};
e.prototype.parseFinishBonus = function() {
fzgui.UITextManager.showCenterNotification("BẠN ĐÃ THẮNG " + s.default.formatNumber(this._resultSpin.BonusGame.PrizeValue) + " " + u.ThanThuConst.balanceUnitName + " TRONG BONUS GAME");
this.txtPrizeJumpEffect.scheduleProgress(this._resultSpin.BonusGame.PrizeValue);
fzgui.AudioManager.instance.playSfx(this.tien_tang, 1);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money + this._resultSpin.BonusGame.PrizeValue);
this._pnlMiniGame.active = !0;
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
h.default.instance.closeMiniGameNode();
}, this)));
};
var n;
e._instance = null;
a([ d(cc.Node) ], e.prototype, "pnlMid", void 0);
a([ d(cc.Label) ], e.prototype, "txtSoLuot", void 0);
a([ d(cc.Label) ], e.prototype, "txtHeSoNhan", void 0);
a([ d(cc.Label) ], e.prototype, "txtTimer", void 0);
a([ d(r.default) ], e.prototype, "txtPrizeJumpEffect", void 0);
a([ d(cc.AudioClip) ], e.prototype, "tien_tang", void 0);
return n = a([ p ], e);
}(cc.Component);
n.default = T;
cc._RF.pop();
}, {
"./ThanThuConst": "ThanThuConst",
"./ThanThuMainGame": "ThanThuMainGame",
"./common/ThanThuUINumericLabelHelper": "ThanThuUINumericLabelHelper",
"./common/ThanThuUtils": "ThanThuUtils",
"./network/ThanThuNetworkClient": "ThanThuNetworkClient"
} ],
ThanThuNetworkClient: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d5265tUGclCAIVNUjI+hWR/", "ThanThuNetworkClient");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../ThanThuMainGame"), s = t("../ThanThuConst"), c = t("../popup/ThanThuVinhDanh"), u = t("../popup/ThanThuHistory"), h = t("../ThanThuMiniGame"), l = t("../ThanThuEventXHu"), p = cc._decorator, d = p.ccclass, T = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "LongVuongListener";
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
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
fzgui.UIWaitingLayout.showWaiting();
this.mSignalr.connect(this.mListenerKey, "https://thanthu.dragonf1.xyz/signalr/negotiate", "longvuonghub", fzgui.UserManager.instance.mainUserInfo.cookie, !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
console.log("=====================CLOSE WS NOTI===============================");
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
this.sendSignalR("GetEventJackpot", []);
this.sendSignalR("GetJackpot", []);
this.connectSuccess();
}
t.R < 0 && fzgui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
switch (o.M) {
case "joinGame":
if (i.IsPlayTry) r.default.instance.parseJoinTryPlay(i); else {
this.sendSignalR("StopX2Game", []);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
i.BonusGame.BonusItemsData && this.sendSignalR("PlayBonusGameAll", []);
}
break;

case "UpdateJackPot":
1 == o.A[0] && (s.ThanThuConst.jackpot[1] = o.A[1]);
2 == o.A[0] && (s.ThanThuConst.jackpot[2] = o.A[1]);
3 == o.A[0] && (s.ThanThuConst.jackpot[3] = o.A[1]);
break;

case "resultSpin":
fzgui.ZLog.log("====CONNECT-WS-NOTI====" + JSON.stringify(t));
s.ThanThuConst._isPlayTry ? r.default.instance.parseSpin(i) : r.default && r.default.instance.parseSpin(i);
break;

case "honor":
c.default.instance.parseData(i.slice(0, 50));
break;

case "jackpotHistory":
c.default.instance.parseDataJackpot(i.slice(0, 50));
break;

case "history":
u.default.instance.parseData(i.slice(0, 50));
break;

case "bonus":
h.default.instance.parseMiniGame(i);
break;

case "XJackpotInfo":
if (i[0].IsEvent) {
s.ThanThuConst.IsEvent = !0;
setTimeout(function() {
l.default.instance.init(i);
}, 1e3);
} else s.ThanThuConst.IsEvent = !1;
}
}
}
};
e.prototype.connectSuccess = function() {
fzgui.ZLog.log("Connect Sucesss");
fzgui.UIWaitingLayout.hideWaiting();
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
this.isConnect = !0;
this.isConnect = !1;
};
e.prototype.sendSignalR = function(t, e) {
fzgui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var n;
e._instance = null;
return n = a([ d ], e);
}(cc.Component));
n.default = T;
cc._RF.pop();
}, {
"../ThanThuConst": "ThanThuConst",
"../ThanThuEventXHu": "ThanThuEventXHu",
"../ThanThuMainGame": "ThanThuMainGame",
"../ThanThuMiniGame": "ThanThuMiniGame",
"../popup/ThanThuHistory": "ThanThuHistory",
"../popup/ThanThuVinhDanh": "ThanThuVinhDanh"
} ],
ThanThuTopBar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "aa60dyr3EJLHK5/lNu6aiqB", "ThanThuTopBar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("./ThanThuConst"), s = t("./network/ThanThuNetworkClient"), c = cc._decorator, u = c.ccclass, h = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btnSetting = null;
e.pnlSetting = null;
e.btnSound = null;
e.btnMusic = null;
e.btnBangThuong = null;
e.SpfIsSound = [];
e.SpfIsMusic = [];
return e;
}
e.prototype.onLoad = function() {
fzgui.AudioManager.instance.sfxVolume = 1;
fzgui.AudioManager.instance.musicVolume = 1;
};
e.prototype.touchBtnBack = function() {
if (r.ThanThuConst.isBtnClickable(!1)) {
fzgui.AudioManager.instance.pauseMusic();
if (1 == r.ThanThuConst.isMainGame) {
fzgui.UIScreenManager.instance.popScreen();
r.ThanThuConst._isPlayTry || fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
} else {
fzgui.UIScreenManager.instance.popToRootScreen();
s.default.instance.onDisable();
r.ThanThuConst._isPlayTry || fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
}
}
};
e.prototype.touchBtnSetting = function() {
this.pnlSetting.active = !0;
this._timeOutHide && clearTimeout(this._timeOutHide);
this._timeOutHide = setTimeout(function() {
this.pnlSetting.active = !1;
}.bind(this), 5e3);
};
e.prototype.touchBtnSound = function() {
if (0 == fzgui.AudioManager.instance.sfxVolume) {
this.btnSound.getComponent(cc.Sprite).spriteFrame = this.SpfIsSound[1];
fzgui.AudioManager.instance.sfxVolume = 1;
} else {
this.btnSound.getComponent(cc.Sprite).spriteFrame = this.SpfIsSound[0];
fzgui.AudioManager.instance.sfxVolume = 0;
}
};
e.prototype.touchBtnMusic = function() {
if (0 == fzgui.AudioManager.instance.musicVolume) {
this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.SpfIsMusic[1];
fzgui.AudioManager.instance.musicVolume = 1;
} else {
this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.SpfIsMusic[0];
fzgui.AudioManager.instance.musicVolume = 0;
}
};
a([ h(cc.Button) ], e.prototype, "btnSetting", void 0);
a([ h(cc.Node) ], e.prototype, "pnlSetting", void 0);
a([ h(cc.Node) ], e.prototype, "btnSound", void 0);
a([ h(cc.Node) ], e.prototype, "btnMusic", void 0);
a([ h(cc.Node) ], e.prototype, "btnBangThuong", void 0);
a([ h([ cc.SpriteFrame ]) ], e.prototype, "SpfIsSound", void 0);
a([ h([ cc.SpriteFrame ]) ], e.prototype, "SpfIsMusic", void 0);
return a([ u ], e);
}(fzgui.UIScreen);
n.default = l;
cc._RF.pop();
}, {
"./ThanThuConst": "ThanThuConst",
"./network/ThanThuNetworkClient": "ThanThuNetworkClient"
} ],
ThanThuUINumericLabelHelper: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9869bQriLVLf67tTs9NyDUE", "ThanThuUINumericLabelHelper");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = (r.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return a([ s ], e);
}(fzgui.UINumericLabelHelper));
n.default = c;
cc._RF.pop();
}, {} ],
ThanThuUtils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0e61bwf4bVO849JIhcFh/ZE", "ThanThuUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.common = void 0;
var o, i = cc._decorator;
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
var n = new Image();
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var o = new cc.SpriteFrame(t);
e(o);
}.bind(this);
n.src = "data:image/png;base64," + t;
};
t.formatNumber = function(t) {
return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
t.formatDateTime = function(t) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + "/" + e[0] + " - " + t[1].substr(0, 5);
};
t.formatNumberMin = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "B";
}
if (t >= 1e6) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
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
var e = t.getMonth() + 1, n = t.getDate();
return [ t.getFullYear(), (e > 9 ? "" : "0") + e, (n > 9 ? "" : "0") + n ].join("-");
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
t.Rad2Deg = -57.2957795;
t.Deg2Rad = -.0174532925;
return t;
}();
t.ThanThuUtils = e;
})(o = n.common || (n.common = {}));
n.default = o.ThanThuUtils;
cc._RF.pop();
}, {} ],
ThanThuVinhDanh: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bb43b3xRC9AmqkRUqdNBIDy", "ThanThuVinhDanh");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../common/ThanThuUtils"), s = t("../network/ThanThuNetworkClient"), c = cc._decorator, u = c.ccclass, h = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemPerPage = 50;
e.sp_title = null;
e.pnlItem = null;
e.scrollview = null;
e.content = null;
e.button_click = null;
e.arrayData = [];
e.ls_sf_title = [];
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
this.touchBtnLsHu(null, 1);
};
e.prototype.touchBtnLsHu = function(t, e) {
fzgui.AudioManager.instance.playSfx(this.button_click, 1);
1 == e ? s.default.instance.sendSignalR("GetHonor", []) : s.default.instance.sendSignalR("getjackpothistory", []);
this.content.removeAllChildren();
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
for (var t = 0; t < this.itemPerPage && this.arrayData[t]; t++) this.updateToListView(this.arrayData[t], t);
this.scrollview.scrollToTop(.1);
}
};
e.prototype.resetPaginationJackpot = function() {
this.content.removeAllChildren();
if (this.arrayData) {
for (var t = 0; t < this.itemPerPage && this.arrayData[t]; t++) this.updateToListViewJackpot(this.arrayData[t], t);
this.scrollview.scrollToTop(.1);
}
};
e.prototype.updateToListView = function(t, e) {
var n = cc.instantiate(this.pnlItem);
n.active = !0;
n.position = new cc.Vec3(0, 0);
n.getChildByName("txtPhien").color = cc.Color.WHITE;
n.getChildByName("txtThoiGian").color = cc.Color.WHITE;
n.getChildByName("txtTenTaiKhoan").color = cc.Color.WHITE;
n.getChildByName("txtThang").color = cc.Color.YELLOW;
n.getChildByName("txtMoTa").color = cc.Color.WHITE;
n.getChildByName("txtPhien").getComponent(cc.Label).string = t.Id;
n.getChildByName("txtThoiGian").getComponent(cc.Label).string = r.default.formatDateTime(t.CreatedTime);
n.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = t.Username;
n.getChildByName("txtThang").getComponent(cc.Label).string = r.default.formatNumber(t.PrizeValue);
n.getChildByName("txtMoTa").getComponent(cc.Label).string = 1 == t.IsJackport ? "Jackpot" : "payline";
n.getChildByName("background").active = e % 2 != 0;
this.content.addChild(n);
};
e.prototype.updateToListViewJackpot = function(t, e) {
var n = cc.instantiate(this.pnlItem);
n.active = !0;
n.position = new cc.Vec3(0, 0);
n.getChildByName("txtPhien").color = cc.Color.WHITE;
n.getChildByName("txtThoiGian").color = cc.Color.WHITE;
n.getChildByName("txtTenTaiKhoan").color = cc.Color.WHITE;
n.getChildByName("txtThang").color = cc.Color.YELLOW;
n.getChildByName("txtMoTa").color = cc.Color.WHITE;
n.getChildByName("txtPhien").getComponent(cc.Label).string = t.SpinID;
n.getChildByName("txtThoiGian").getComponent(cc.Label).string = r.default.formatDateTime(t.CreatedTime);
n.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = t.Username;
n.getChildByName("txtThang").getComponent(cc.Label).string = r.default.formatNumber(t.PrizeValue);
n.getChildByName("txtMoTa").getComponent(cc.Label).string = "Jackpot";
n.getChildByName("background").active = e % 2 != 0;
this.content.addChild(n);
};
e.prototype.onDestroy = function() {
n._instance = null;
};
var n;
e._instance = null;
a([ h(cc.Sprite) ], e.prototype, "sp_title", void 0);
a([ h(cc.Node) ], e.prototype, "pnlItem", void 0);
a([ h(cc.ScrollView) ], e.prototype, "scrollview", void 0);
a([ h(cc.Node) ], e.prototype, "content", void 0);
a([ h(cc.AudioClip) ], e.prototype, "button_click", void 0);
a([ h([ cc.SpriteFrame ]) ], e.prototype, "ls_sf_title", void 0);
return n = a([ u ], e);
}(fzgui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../common/ThanThuUtils": "ThanThuUtils",
"../network/ThanThuNetworkClient": "ThanThuNetworkClient"
} ],
ThanThuWinBig: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e4c58uJtA9Lc5WGfTBjZ6rn", "ThanThuWinBig");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, n, r) : i(e, n)) || r);
return a > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("./common/ThanThuUINumericLabelHelper"), s = t("./ThanThuConst"), c = cc._decorator, u = c.ccclass, h = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.layoutTouchable = null;
e.pnlDecor = null;
e.node_GiauTo = null;
e.node_NoHu = null;
e.node_ThangLon = null;
e.node_MienPhi = null;
e.node_Minigame = null;
e.node_WinNormal = null;
e.txtGiauTo = null;
e.txtNoHu = null;
e.txtThangLon = null;
e.txtWinNormal = null;
e.bonus = null;
e.giau_to = null;
e.big_win = null;
e.jackpot = null;
e.win = null;
e.soduKhongdu = null;
return e;
}
e.prototype.onLoad = function() {
this.initLayoutTouchable();
};
e.prototype.initLayoutTouchable = function() {
this.grapColor = this.layoutTouchable.addComponent(cc.Graphics);
this.grapColor.lineWidth = 0;
};
e.prototype.update = function() {
this.grapColor.clear();
this.grapColor.fillColor = new cc.Color(0, 0, 0, 51);
this.grapColor.fillRect(0, 0, this.layoutTouchable.width, this.layoutTouchable.height);
};
e.prototype.hideDecorChild = function() {
this.node_GiauTo.active = !1;
this.node_NoHu.active = !1;
this.node_ThangLon.active = !1;
this.node_MienPhi.active = !1;
this.node_Minigame.active = !1;
this.node_WinNormal.active = !1;
this.txtGiauTo.data = 0;
this.txtThangLon.data = 0;
this.txtWinNormal.data = 0;
this.txtNoHu.data = 0;
};
e.prototype.hideLayer = function() {
this.layoutTouchable.runAction(cc.fadeOut(.3));
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
this.txtWinNormal.scheduleProgress(0);
this.node.active = !1;
this.hideDecorChild();
}, this)));
};
e.prototype.hideDecorLayer = function() {
this.layoutTouchable.stopAllActions();
this.layoutTouchable.runAction(cc.fadeOut(.3));
this.pnlDecor.stopAllActions();
this.pnlDecor.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
this.layoutTouchable.active = !1;
this.pnlDecor.active = !1;
}, this)));
};
e.prototype.showLayer = function(t, e) {
this.hideDecorChild();
this.layoutTouchable.active = !0;
this.pnlDecor.active = !0;
this.node.active = !0;
this.node_WinNormal.active = !1;
switch (t) {
case s.ThanThuConst.WINBIG.QUAYMIENPHI:
this.showQuayMienPhi();
break;

case s.ThanThuConst.WINBIG.BONUS:
this.showBonus();
fzgui.AudioManager.instance.playSfx(this.bonus, 1);
break;

case s.ThanThuConst.WINBIG.GIAUTO:
this.showGiauTo(e);
fzgui.AudioManager.instance.playSfx(this.giau_to, 1);
break;

case s.ThanThuConst.WINBIG.THANGLON:
this.showThangLon(e);
fzgui.AudioManager.instance.playSfx(this.big_win, 1);
break;

case s.ThanThuConst.WINBIG.HUXU:
this.showHuXu(e);
fzgui.AudioManager.instance.playSfx(this.jackpot, 1);
break;

default:
this.layoutTouchable.active = !1;
this.pnlDecor.active = !1;
this.useBmfXu(e);
e ? fzgui.AudioManager.instance.playSfx(this.win, 1) : fzgui.AudioManager.instance.playSfx(this.soduKhongdu, 1);
}
this.node.active = !0;
this.layoutTouchable.stopAllActions();
this.pnlDecor.stopAllActions();
this.node.stopAllActions();
this.layoutTouchable.runAction(cc.fadeIn(.3));
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
this.txtGiauTo.scheduleProgress(0);
this.txtGiauTo.scheduleProgress(t);
this.node_GiauTo.runAction(cc.scaleTo(2, 1.5));
};
e.prototype.showThangLon = function(t) {
this.node_ThangLon.active = !0;
this.txtThangLon.scheduleProgress(0);
this.txtThangLon.scheduleProgress(t);
this.node_ThangLon.runAction(cc.scaleTo(2, 1.5));
};
e.prototype.showHuXu = function(t) {
fzgui.AudioManager.instance.playSfx(this.jackpot, 1);
this.node_NoHu.active = !0;
this.txtNoHu.scheduleProgress(0);
this.txtNoHu.scheduleProgress(t);
this.node_NoHu.runAction(cc.scaleTo(3, 1.5));
};
e.prototype.useBmfXu = function(t) {
if (t > 0) {
this.txtWinNormal.scheduleProgress(t, .6);
this.node_WinNormal.active = !0;
cc.log(this.node_WinNormal.active);
} else this.node_WinNormal.active = !1;
};
a([ h(cc.Node) ], e.prototype, "layoutTouchable", void 0);
a([ h(cc.Node) ], e.prototype, "pnlDecor", void 0);
a([ h(cc.Node) ], e.prototype, "node_GiauTo", void 0);
a([ h(cc.Node) ], e.prototype, "node_NoHu", void 0);
a([ h(cc.Node) ], e.prototype, "node_ThangLon", void 0);
a([ h(cc.Node) ], e.prototype, "node_MienPhi", void 0);
a([ h(cc.Node) ], e.prototype, "node_Minigame", void 0);
a([ h(cc.Node) ], e.prototype, "node_WinNormal", void 0);
a([ h(r.default) ], e.prototype, "txtGiauTo", void 0);
a([ h(r.default) ], e.prototype, "txtNoHu", void 0);
a([ h(r.default) ], e.prototype, "txtThangLon", void 0);
a([ h(r.default) ], e.prototype, "txtWinNormal", void 0);
a([ h(cc.AudioClip) ], e.prototype, "bonus", void 0);
a([ h(cc.AudioClip) ], e.prototype, "giau_to", void 0);
a([ h(cc.AudioClip) ], e.prototype, "big_win", void 0);
a([ h(cc.AudioClip) ], e.prototype, "jackpot", void 0);
a([ h(cc.AudioClip) ], e.prototype, "win", void 0);
a([ h(cc.AudioClip) ], e.prototype, "soduKhongdu", void 0);
return a([ u ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./ThanThuConst": "ThanThuConst",
"./common/ThanThuUINumericLabelHelper": "ThanThuUINumericLabelHelper"
} ]
}, {}, [ "ThanThuAudioDefined", "ThanThuConst", "ThanThuEventXHu", "ThanThuItemGame", "ThanThuLobby", "ThanThuMainGame", "ThanThuMiniGame", "ThanThuTopBar", "ThanThuWinBig", "ThanThuBgResizer", "ThanThuUINumericLabelHelper", "ThanThuUtils", "ThanThuNetworkClient", "ThanThuBangThuong", "ThanThuChonDong", "ThanThuHistory", "ThanThuHistoryDetail", "ThanThuVinhDanh" ]);