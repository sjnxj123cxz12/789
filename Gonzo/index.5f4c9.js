window.__require = function t(o, e, n) {
function i(l, c) {
if (!e[l]) {
if (!o[l]) {
var r = l.split("/");
r = r[r.length - 1];
if (!o[r]) {
var a = "function" == typeof __require && __require;
if (!c && a) return a(r, !0);
if (s) return s(r, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = r;
}
var p = e[l] = {
exports: {}
};
o[l][0].call(p.exports, function(t) {
return i(o[l][1][t] || t);
}, p, p.exports, t, o, e, n);
}
return e[l].exports;
}
for (var s = "function" == typeof __require && __require, l = 0; l < n.length; l++) i(n[l]);
return i;
}({
SlotGonzoAudio: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "c1f65X0oItAnYQZEDbDlxF9", "SlotGonzoAudio");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotAudio"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.boom = null;
return o;
}
s([ a({
type: cc.AudioClip
}) ], o.prototype, "boom", void 0);
return s([ r ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotAudio": void 0
} ],
SlotGonzoConfig: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "f2571XccflMfoR/OJFGfp12", "SlotGonzoConfig");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotConfig"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.DISTANCE = 205;
o.TIME_MOVE_ITEM_START_QUICK = 1;
o.TIME_MOVE_ITEM_START = 1;
o.TIME_MOVE_ITEM_QUICK = 1;
o.TIME_MOVE_ITEM = 1;
o.TIME_MOVE_ITEM_STOP_QUICK = 1;
o.TIME_MOVE_ITEM_STOP = 1;
o.TIME_DELAY_SPIN_REEL = 0;
o.LIST_SKE_ITEM = [];
o.LIST_SKE_KEY = [];
o.LIST_FRAME = [];
o.TIME_ANIM_FREESPIN = 2;
o.TIME_ANIM_BONUS = 10;
o.LINE = [ [ 5, 6, 7, 8, 9 ], [ 0, 1, 2, 3, 4 ], [ 10, 11, 12, 13, 14 ], [ 5, 6, 2, 8, 9 ], [ 5, 6, 12, 8, 9 ], [ 0, 1, 7, 3, 4 ], [ 10, 11, 7, 13, 14 ], [ 0, 11, 2, 13, 4 ], [ 10, 1, 12, 3, 14 ], [ 5, 1, 12, 3, 9 ], [ 10, 6, 2, 8, 14 ], [ 0, 6, 12, 8, 4 ], [ 5, 11, 7, 3, 9 ], [ 5, 1, 7, 13, 9 ], [ 10, 6, 7, 8, 14 ], [ 0, 6, 7, 8, 4 ], [ 5, 11, 12, 13, 9 ], [ 5, 1, 2, 3, 9 ], [ 10, 11, 7, 3, 4 ], [ 0, 1, 7, 13, 14 ] ];
return o;
}
s([ a(cc.Integer) ], o.prototype, "DISTANCE", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_START_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_START", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_STOP_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_STOP", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_DELAY_SPIN_REEL", void 0);
s([ a([ sp.SkeletonData ]) ], o.prototype, "LIST_SKE_ITEM", void 0);
s([ a([ cc.String ]) ], o.prototype, "LIST_SKE_KEY", void 0);
s([ a([ cc.SpriteFrame ]) ], o.prototype, "LIST_FRAME", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_ANIM_FREESPIN", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_ANIM_BONUS", void 0);
return s([ r ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotConfig": void 0
} ],
SlotGonzoEffect: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "efdf6u/7AJPE7SfxDGCbW/9", "SlotGonzoEffect");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotEffect"), c = t("../../base_slot/util/AudioUtil"), r = t("../../base_slot/util/FormatUtil"), a = cc._decorator, p = a.ccclass, u = a.property, h = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.nodeBonus = [];
o.txtEffectBonus = null;
o.nodeEffectFreespin = null;
o.txtEffectFreespin = null;
o.nodeNumFreespin = null;
o.txtNumFreespin = null;
o.mSlot = null;
o.mSlotRoom = null;
return o;
}
o.prototype.init = function(o) {
t.prototype.init.call(this, o);
};
o.prototype.showJackpot = function(t, o, e) {
var n = this;
void 0 === t && (t = null);
void 0 === o && (o = null);
c.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = o;
var i = this;
this.nodeJackpot.active = !0;
this.txtMoneyJackpot.string = r.default.formatNumber(e);
var s = function() {
i.node.stopAllActions();
i.nodeJackpot.off(cc.Node.EventType.TOUCH_END, s.bind(i), i);
i.nodeJackpot.active = !1;
n.mCallback && n.mTarget && n.mCallback.call(n.mTarget);
};
this.nodeJackpot.once(cc.Node.EventType.TOUCH_END, s.bind(this), this);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_JACKPOT), cc.callFunc(function() {
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
}, this)));
};
o.prototype.showBigWin = function(t, o, e) {
void 0 === t && (t = null);
void 0 === o && (o = null);
c.default.playSound(this.mSlot.mSlotAudio.bigwin, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = o;
var n = this;
this.nodeBigwin.active = !0;
this.txtMoneyBigwin.string = r.default.formatNumber(e);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_BIGWIN), cc.callFunc(function() {
n.mCallback && n.mTarget && n.mCallback.call(n.mTarget);
n.nodeBigwin.active = !1;
}, this)));
};
o.prototype.showWin = function(t, o, e) {
void 0 === t && (t = null);
void 0 === o && (o = null);
c.default.playSound(this.mSlot.mSlotAudio.win, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = o;
var n = this;
this.txtMoneyWin.node.active = !0;
this.txtMoneyWin.string = r.default.formatNumber(e);
this.txtMoneyWin.node.scale = 0;
this.txtMoneyWin.node.opacity = 0;
this.txtMoneyWin.node.setPosition(0, 0);
this.txtMoneyWin.node.stopAllActions();
this.txtMoneyWin.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, 1.2, 1.2), cc.moveBy(.2, 0, 50), cc.fadeIn(.2)), cc.delayTime(.3), cc.spawn(cc.moveTo(.4, 80, -225).easing(cc.easeBackIn()), cc.scaleTo(.4, 1, 1)), cc.callFunc(function() {
n.txtMoneyWin.node.active = !1;
n.mSlotRoom.updateTotalWin(e);
n.node.stopAllActions();
n.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
n.nodeWin.active = !1;
n.mCallback && n.mTarget && n.mCallback.call(n.mTarget);
}, n)));
}, n)));
};
o.prototype.showBonus = function(t, o, e, n) {
void 0 === t && (t = null);
void 0 === o && (o = null);
c.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = o;
var i = this;
this.nodeBonus[e].active = !0;
this.txtEffectBonus.node.active = !0;
this.txtEffectBonus.string = r.default.formatNumber(n);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_BONUS), cc.callFunc(function() {
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget, e);
i.mSlotRoom.updateTotalWin(n);
i.nodeBonus[e].active = !1;
i.txtEffectBonus.node.active = !1;
}, this)));
};
o.prototype.showFreespin = function(t, o, e) {
void 0 === t && (t = null);
void 0 === o && (o = null);
c.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = o;
var n = this;
this.nodeEffectFreespin.active = !0;
this.txtEffectFreespin.string = e.toString();
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(n.mSlot.mSlotConfig.TIME_ANIM_FREESPIN), cc.callFunc(function() {
n.mCallback && n.mTarget && n.mCallback.call(n.mTarget);
n.nodeEffectFreespin.active = !1;
n.nodeNumFreespin.active = !0;
n.txtNumFreespin.string = e.toString();
}, n)));
};
o.prototype.showNumFreespin = function(t) {
if (t <= 0) this.nodeNumFreespin.active = !1; else {
this.nodeNumFreespin.active = !0;
this.txtNumFreespin.string = t.toString();
}
};
s([ u([ cc.Node ]) ], o.prototype, "nodeBonus", void 0);
s([ u(cc.Label) ], o.prototype, "txtEffectBonus", void 0);
s([ u(cc.Node) ], o.prototype, "nodeEffectFreespin", void 0);
s([ u(cc.Label) ], o.prototype, "txtEffectFreespin", void 0);
s([ u(cc.Node) ], o.prototype, "nodeNumFreespin", void 0);
s([ u(cc.Label) ], o.prototype, "txtNumFreespin", void 0);
return s([ p ], o);
}(l.default);
e.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotEffect": void 0,
"../../base_slot/util/AudioUtil": void 0,
"../../base_slot/util/FormatUtil": void 0
} ],
SlotGonzoEntity: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "0828340qdpLTpowaT9ZkrFV", "SlotGonzoEntity");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.DataSlotGonzoHistoryCell = e.DataSlotGonzoRankCell = e.DataSlotGonzoPlayNow = e.DataSlotGonzoLineWin = e.DataSlotGonzoSpin = void 0;
var n = function() {
function t() {
this.accountId = 0;
this.session = 0;
this.listItem = [];
this.listLineWin = [];
this.totalBet = 0;
this.totalWin = 0;
this.userMoney = 0;
this.jackpotCurrent = 0;
this.maxTurn = 0;
this.posItemSpecial = -1;
}
t.prototype.getLineWinByTurn = function(t) {
for (var o = null, e = 0; e < this.listLineWin.length; e++) if (this.listLineWin[e].turn == t) {
o = this.listLineWin[e];
this.listLineWin.splice(e, 1);
break;
}
return o;
};
t.prototype.getLineWin = function() {
for (var t = null, o = 0, e = 1; e <= this.maxTurn; ) {
if (this.listLineWin[o].turn == e) {
t = this.listLineWin[o];
this.listLineWin.splice(o, 1);
break;
}
if (++o >= this.listLineWin.length) {
o = 0;
e++;
}
}
return t;
};
return t;
}();
e.DataSlotGonzoSpin = n;
e.DataSlotGonzoLineWin = function() {
this.id = 0;
this.bonus = 0;
this.jackpot = 0;
this.freespin = 0;
this.moneyWin = 0;
this.listIdx = [];
this.turn = -1;
};
e.DataSlotGonzoPlayNow = function() {
this.accID = 0;
this.accName = "";
this.money = 0;
};
e.DataSlotGonzoRankCell = function() {};
e.DataSlotGonzoHistoryCell = function() {};
cc._RF.pop();
}, {} ],
SlotGonzoGuide: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "7ded1kk11xLHK+wtKnDZe34", "SlotGonzoGuide");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = cc._decorator, c = l.ccclass, r = l.property, a = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.pageview = null;
return o;
}
o.prototype.onBtnClose = function() {
this.node.destroy();
};
o.prototype.onBtnNext = function() {
var t = this.pageview.getCurrentPageIndex();
t + 1 > 0 && (t = 1);
this.pageview.scrollToPage(t, .2);
};
o.prototype.onBtnBack = function() {
var t = this.pageview.getCurrentPageIndex();
t - 1 <= 0 && (t = 0);
this.pageview.scrollToPage(t, .2);
};
s([ r(cc.PageView) ], o.prototype, "pageview", void 0);
return s([ c ], o);
}(fzgui.UIPopup);
e.default = a;
cc._RF.pop();
}, {} ],
SlotGonzoHandler: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "8aeeaX5KpNAxq+Zb1aeoHXf", "SlotGonzoHandler");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./SlotGonzoEntity"), c = t("./SlotGonzoVar"), r = t("../../base_slot/SlotHandler"), a = t("../../base_slot/SlotSelectRoom"), p = cc._decorator, u = p.ccclass, h = (p.property, 
function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
o.mListenerKey = "Gonzo";
return o;
}
e = o;
Object.defineProperty(o, "instance", {
get: function() {
e._instance || (e._instance = new e());
return e._instance;
},
enumerable: !1,
configurable: !0
});
o.prototype.onLoad = function() {
e._instance = this;
};
o.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, c.default.api.negotiate, c.default.api.hub, fzgui.UserManager.instance.mainUserInfo.cookie, !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
o.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
o.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s) {
if (!this.mSlot.isConnect) {
this.mSlot.isConnect = !0;
this.mSlot.connectSuccess();
a.default.instance.unlockBtn(!0);
}
} else {
if (!t.M || !Array.isArray(t.M) || 0 == t.M.length) return;
for (var o = t.M.length, e = 0; e < o; ++e) {
var n = t.M[e];
if ("object" == typeof n && "string" == typeof n.M && n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0];
switch (n.M) {
case "joinGame":
this.mSignalr.send("StopX2Game");
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

case "history":
this.onHistory(i);
break;

case "honor":
this.onGetRank(i);
break;

case "jackpotHistory":
i.IsJackport = !0;
this.onGetRank(i);
break;

case "UpdateJackPot":
this.onUpdateJackpot(n.A);
break;

case "XJackpotInfo":
this.onGetPotInfo(i);
}
}
}
}
};
o.prototype.onJoinGame = function(t) {
t && this.mSlot.onJoinGameSuccess(t);
};
o.prototype.onPlayNow = function(t) {
if (this.mSlot) {
var o = new l.DataSlotGonzoPlayNow();
o.accID = t.AccountID;
o.accName = fzgui.UserManager.instance.mainUserInfo.UserName;
o.money = fzgui.UserManager.instance.mainUserInfo.Money;
this.mSlot.onPlayNow(o);
}
};
o.prototype.onSpin = function(t) {
if (this.mSlot) {
var o = new l.DataSlotGonzoSpin();
o.accountId = t.AccountID;
o.session = t.SpinData.SpinId;
o.totalBet = t.BetValue * t.SpinData.LineData.split(",").length;
o.totalWin = t.SpinData.PrizeValue;
o.userMoney = t.Balance;
o.jackpotCurrent = t.SpinData.JackpotValue;
c.default.isPlaytryJackpotValue = t.SpinData.JackpotValue;
o.listItem = t.SpinData.SlotsDataNoSap || [];
for (var e = t.SpinData.PrizeDataNoSap || [], n = [], i = 0; i < e.length; i++) n = n.concat(e[i].map(function(t) {
t.Turn = i + 1;
return t;
}));
n.forEach(function(e) {
if (e.LineId <= 20 && e.LineId > 0) {
(s = new l.DataSlotGonzoLineWin()).id = e.LineId;
s.bonus = t.BonusGame.PrizeValue;
s.jackpot = 1 == t.SpinData.IsJackPot ? t.SpinData.PrizeValue : 0;
s.freespin = t.SpinData.TotalFreeSpinPrizeValue;
s.moneyWin = e.PrizeValue;
s.turn = e.Turn;
for (var i = 0; i < e.Items.length; i++) e.Items[i] = e.Items[i] - 1;
s.listIdx = e.Items;
o.listLineWin.push(s);
o.maxTurn < s.turn && (o.maxTurn = s.turn);
} else {
fzgui.ZLog.log("freespin hoac random", JSON.stringify(n));
var s;
(s = new l.DataSlotGonzoLineWin()).id = e.LineId;
1 == e.PrizeId && (s.bonus = 5);
2 == e.PrizeId && (s.bonus = 4);
3 == e.PrizeId && (s.bonus = 3);
131 == e.PrizeId && (s.freespin = 6);
132 == e.PrizeId && (s.freespin = 3);
133 == e.PrizeId && (s.freespin = 1);
s.moneyWin = e.PrizeValue;
s.turn = e.Turn;
s.listIdx = [];
o.listLineWin.push(s);
o.maxTurn < s.turn && (o.maxTurn = s.turn);
}
});
var s = o.listItem[0];
s[5] == s[0] && s[5] == s[1] && s[5] == s[6] ? o.posItemSpecial = 0 : s[5] == s[10] && s[5] == s[11] && s[5] == s[6] ? o.posItemSpecial = 1 : s[6] == s[1] && s[6] == s[2] && s[6] == s[7] ? o.posItemSpecial = 2 : s[6] == s[11] && s[6] == s[12] && s[6] == s[7] ? o.posItemSpecial = 3 : s[7] == s[2] && s[7] == s[3] && s[7] == s[8] ? o.posItemSpecial = 4 : s[7] == s[12] && s[7] == s[13] && s[7] == s[8] ? o.posItemSpecial = 5 : s[8] == s[3] && s[8] == s[4] && s[8] == s[9] ? o.posItemSpecial = 6 : s[8] == s[13] && s[8] == s[14] && s[8] == s[9] && (o.posItemSpecial = 7);
0 == o.listItem.length || this.mSlot.mSlotRoom && this.mSlot.mSlotRoom.stopSpin(o);
}
};
o.prototype.onGetPotInfo = function(t) {
this.mSlot.mSlotPot.onEventXPot(t);
};
o.prototype.onUpdateJackpot = function(t) {
if (this.mSlot.isTrial()) {
c.default.jackPot[t[0]] = c.default.isPlaytryJackpotValue;
var o = c.default.jackPot;
this.mSlot.onUpdatePot(o);
} else {
c.default.jackPot[t[0]] = t[1];
o = c.default.jackPot;
this.mSlot.onUpdatePot(o);
}
};
o.prototype.onMessage = function(t) {
this.mSlot && this.mSlot.onMessage(t);
};
o.prototype.onHistory = function(t) {
this.mSlot && cc.systemEvent.emit("SlotGonzo_get_history", t);
};
o.prototype.onGetRank = function(t) {
fzgui.ZLog.log("onGetRank ===========================" + JSON.stringify(t));
this.mSlot && cc.systemEvent.emit("SlotGonzo_get_rank", t);
};
o.prototype.sendJoinRoom = function() {
this.mSignalr.send("GetEventJackpot");
};
o.prototype.sendSpin = function(t, o, e) {
this.mSignalr.send("SpinMobile", [ e ]);
};
o.prototype.sendSpinTry = function(t, o, e, n) {
this.mSignalr.send("SpinTry", [ t, o, e, n ]);
};
o.prototype.sendGetRank = function(t) {
this.mSignalr.send(t, []);
};
o.prototype.sendHistory = function() {
this.mSignalr.send("GetHistory", []);
};
o.prototype.sendPlayNow = function() {
this.mSignalr.send("PlayGame", [ this.mSlot.mRoomId, 1 ]);
};
o.prototype.sendEndBonus = function(t, o) {
this.mSignalr.send("FinishBonusGame", [ t, o ]);
};
var e;
o._instance = null;
return e = s([ u ], o);
}(r.default));
e.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotHandler": void 0,
"../../base_slot/SlotSelectRoom": void 0,
"./SlotGonzoEntity": "SlotGonzoEntity",
"./SlotGonzoVar": "SlotGonzoVar"
} ],
SlotGonzoHistoryCell: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "611f6CjbIdOB45a0LuOBUop", "SlotGonzoHistoryCell");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/FormatUtil"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.txtSession = null;
o.txtTime = null;
o.txtRoomBet = null;
o.txtTotalBet = null;
o.txtMoneyWin = null;
o.bg = null;
o.mIdx = 0;
return o;
}
o.prototype.setData = function(t, o) {
this.mIdx = o;
this.txtSession.string = "" + t.SpinId;
this.txtTime.string = l.default.formatDateTime(t.CreateDate, !0, !0);
this.txtTotalBet.string = l.default.formatNumber(t.TotalBetValue);
this.txtMoneyWin.string = l.default.formatNumber(t.TotalPrizeValue);
this.txtRoomBet.string = l.default.formatNumber(t.BetValue);
this.bg.active = this.mIdx % 2 == 0;
};
s([ a(cc.Label) ], o.prototype, "txtSession", void 0);
s([ a(cc.Label) ], o.prototype, "txtTime", void 0);
s([ a(cc.Label) ], o.prototype, "txtRoomBet", void 0);
s([ a(cc.Label) ], o.prototype, "txtTotalBet", void 0);
s([ a(cc.Label) ], o.prototype, "txtMoneyWin", void 0);
s([ a(cc.Node) ], o.prototype, "bg", void 0);
return s([ r ], o);
}(cc.Component);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
SlotGonzoHistory: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "9e0eexw3DhOcKWRDTr1YQV2", "SlotGonzoHistory");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotHistory"), c = t("./SlotGonzoHandler"), r = cc._decorator, a = r.ccclass, p = (r.property, 
function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
return o;
}
o.prototype.onLoad = function() {
c.default.instance.sendHistory();
cc.systemEvent.on("SlotGonzo_get_history", this.onEventGetHistory, this);
this.scrollview.content.destroyAllChildren();
};
o.prototype.onDestroy = function() {
cc.systemEvent.off("SlotGonzo_get_history", this.onEventGetHistory, this);
};
o.prototype.onEventGetHistory = function(t) {
this.setData(1, t);
};
o.prototype.setData = function(t, o) {
this.mListDataCell = o;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var e = o.length;
this.scrollview.content.height = e * (this.heightItem + this.spacing) + this.spacing;
for (var n = this.spawnCount <= e ? this.spawnCount : e, i = 0; i < n; i++) {
var s = cc.instantiate(this.cellHistory), l = s.getComponent("SlotGonzoHistoryCell");
l.setData(this.mListDataCell[i], i);
var c = -l.node.height * (.5 + i) - this.spacing * (i + 1);
l.node.setPosition(0, c);
this.scrollview.content.addChild(s);
this.mListCell.push(l);
}
};
return s([ a ], o);
}(l.default));
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotHistory": void 0,
"./SlotGonzoHandler": "SlotGonzoHandler"
} ],
SlotGonzoIconLine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "42cdaZ1qUFOEKQRGQJG9m3C", "SlotGonzoIconLine");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = cc._decorator, c = l.ccclass, r = l.property, a = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.sprLine = null;
o.id = -1;
o.isReady = !0;
o.cbHover = null;
o.tgHover = null;
o.cbLeave = null;
o.tgLeave = null;
return o;
}
o.prototype.onLoad = function() {
if (!cc.sys.isNative) {
this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseHover, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
}
};
o.prototype.onDestroy = function() {
if (!cc.sys.isNative) {
this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseHover, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
}
};
o.prototype.mouseHover = function() {
if (this.isReady && this.cbHover && this.tgHover) {
this.cbHover.call(this.tgHover, this.id);
this.sprLine.node.color = cc.Color.YELLOW;
}
};
o.prototype.mouseLeave = function() {
if (this.isReady && this.cbLeave && this.tgLeave) {
this.cbLeave.call(this.tgLeave, this.id);
this.sprLine.node.color = cc.Color.WHITE;
}
};
o.prototype.setReady = function(t) {
this.isReady = t;
};
s([ r(cc.Sprite) ], o.prototype, "sprLine", void 0);
s([ r(cc.Integer) ], o.prototype, "id", void 0);
return s([ c ], o);
}(cc.Component);
e.default = a;
cc._RF.pop();
}, {} ],
SlotGonzoItem: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "53347jO/gRMKL1hD31ooEnJ", "SlotGonzoItem");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotItem"), c = t("../../base_slot/SlotConstant"), r = t("../../base_slot/util/AudioUtil"), a = t("../../base_slot/util/Util"), p = cc._decorator, u = p.ccclass, h = p.property, m = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.skeBorder = null;
o.skeBoomed = null;
o.sprBorder = null;
o.skeEffectVaCham = null;
o.mIsBoom = !1;
o.mSlotReel = null;
o.mSlot = null;
o.mSlotRoom = null;
return o;
}
o.prototype.init = function(t) {
this.mSlotReel = t;
this.mSlotRoom = this.mSlotReel.mSlotMachine.mSlotRoom;
this.mSlot = this.mSlotRoom.mSlot;
this.skeBoomed.timeScale = 2;
this.skeBorder.timeScale = 1;
this.skeEffectVaCham.timeScale = 3;
var o = this.getRandomId();
this.setId(o);
};
o.prototype.setId = function(t) {
if (this.mId != t) {
this.mId = t;
if (3 == this.mId) {
this.sprItem.node.active = !1;
this.skeItem.node.active = !0;
this.skeItem.node.scale = .73;
this.setSkeData(1);
} else {
this.sprItem.node.active = !0;
this.skeItem.node.active = !1;
this.setFrameItem(this.mId);
}
}
};
o.prototype.getRandomId = function() {
return a.default.random(1, this.mSlot.mSlotConfig.MAX_ITEM);
};
o.prototype.showHover = function() {
this.sprBorder.node.active = !0;
};
o.prototype.showLeave = function() {
this.sprBorder.node.active = !1;
};
o.prototype.showIdle = function() {
this.mTypeItem = c.SLOT_TYPE_ITEM.IDLE;
if (3 == this.mId) {
this.sprItem.node.active = !1;
this.sprItem.node.color = cc.color(255, 255, 255);
this.skeItem.node.active = !0;
this.skeItem.node.color = cc.color(255, 255, 255);
} else {
this.sprItem.node.active = !0;
this.sprItem.node.color = cc.color(255, 255, 255);
this.skeItem.node.active = !1;
this.skeItem.node.color = cc.color(255, 255, 255);
}
this.skeBorder.node.active = !1;
this.skeBoomed.node.active = !1;
this.sprBorder.node.active = !1;
};
o.prototype.showLose = function() {
if (this.mTypeItem != c.SLOT_TYPE_ITEM.LOSE) {
this.mTypeItem = c.SLOT_TYPE_ITEM.LOSE;
if (3 == this.mId) {
this.sprItem.node.active = !1;
this.sprItem.node.color = cc.color(100, 100, 100);
this.skeItem.node.active = !0;
this.skeItem.node.color = cc.color(100, 100, 100);
} else {
this.sprItem.node.active = !0;
this.sprItem.node.color = cc.color(100, 100, 100);
this.skeItem.node.active = !1;
this.skeItem.node.color = cc.color(100, 100, 100);
}
this.skeBorder.node.active = !1;
this.skeBoomed.node.active = !1;
this.sprBorder.node.active = !1;
}
};
o.prototype.setSkeData = function(t) {
var o = this.mSlot.mSlotConfig.LIST_SKE_ITEM[t - 1], e = this.mSlot.mSlotConfig.LIST_SKE_KEY[t - 1];
this.skeItem.loop = !0;
this.skeItem.skeletonData = o;
this.skeItem.animation = e;
};
o.prototype.setFrameItem = function(t) {
var o = -1;
1 == t ? o = 0 : 2 == t ? o = 1 : 4 == t ? o = 2 : 5 == t ? o = 3 : 6 == t ? o = 4 : 7 == t && (o = 5);
this.sprItem.spriteFrame = this.mSlot.mSlotConfig.LIST_FRAME[o];
};
o.prototype.setBoom = function(t) {
this.mIsBoom = t;
};
o.prototype.isBoom = function() {
return this.mIsBoom;
};
o.prototype.showWin = function() {
var t = this;
if (this.mTypeItem != c.SLOT_TYPE_ITEM.WIN) {
this.mTypeItem = c.SLOT_TYPE_ITEM.WIN;
if (3 == this.mId) {
this.sprItem.node.active = !1;
this.sprItem.node.color = cc.color(255, 255, 255);
this.skeItem.node.active = !0;
this.skeItem.node.color = cc.color(255, 255, 255);
} else {
this.sprItem.node.active = !0;
this.sprItem.node.color = cc.color(255, 255, 255);
this.skeItem.node.active = !1;
this.skeItem.node.color = cc.color(255, 255, 255);
}
if (this.mIsBoom) {
this.sprBorder.node.active = !1;
this.skeBorder.node.active = !0;
this.skeBorder.node.active && this.skeBorder.node.runAction(cc.callFunc(function() {
t.shakeEffect(t.sprItem.node, 1.5);
}, this));
} else {
this.sprBorder.node.active = !0;
this.skeBorder.node.active = !1;
}
}
};
o.prototype.shakeEffect = function(t, o) {
try {
t.runAction(cc.sequence(cc.rotateBy(.01, 4), cc.rotateBy(.01, -8), cc.rotateBy(.01, 8), cc.rotateBy(.01, -8), cc.rotateBy(.01, 8), cc.rotateBy(.01, -8), cc.rotateBy(.01, 8), cc.rotateBy(.01, -8), cc.rotateBy(.01, 4))).repeatForever();
} catch (t) {
return;
}
this.scheduleOnce(function() {
t.stopAllActions();
t.setPosition(cc.v2(0, 0));
t.runAction(cc.rotateTo(0, 0));
}, o);
};
o.prototype.showBoom = function() {
r.default.playSound(this.mSlot.mSlotAudio.boom, this.mSlot.mIsSound);
this.node.stopAllActions();
this.sprBorder.node.active = !1;
this.skeBorder.node.active = !1;
this.skeItem.node.active = !1;
this.sprItem.node.active = !1;
this.skeBoomed.node.active = !0;
this.skeBoomed.animation = "Idle";
this.skeBoomed.loop = !1;
this.skeBoomed.setCompleteListener(this.onEventBoomed.bind(this));
};
o.prototype.onEventBoomed = function() {
this.mSlotReel.cbCompleteBoomed();
};
o.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIsBoom = !1;
};
o.prototype.moveStart = function(t) {
var o = this;
this.mIndex = this.mIndex - t;
var e = t * this.mSlot.mSlotConfig.DISTANCE, n = this.node.y - e, i = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(i, this.node.x, n), cc.callFunc(function() {
o.setBoom(!1);
o.resetItem();
o.mSlotReel.cbStopAllItemMoveStart();
}, this)));
};
o.prototype.moveStop = function(t) {
var o = this;
this.mIndex = this.mIndex - t;
var e = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex], n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(n, this.node.x, e).easing(cc.easeIn(5)), cc.callFunc(function() {
o.skeEffectVaCham.node.active = !0;
o.skeEffectVaCham.addAnimation(0, "animation", !1);
o.skeEffectVaCham.setCompleteListener(this.onEventVacham.bind(o));
o.mSlotReel.cbStopAllItemMoveStop();
}, this)));
};
o.prototype.moveBoom = function(t) {
var o = this;
this.mIndex = this.mIndex - t;
var e = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex], n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(n, this.node.x, e).easing(cc.easeIn(5)), cc.callFunc(function() {
o.setBoom(!1);
o.skeEffectVaCham.node.active = !0;
o.skeEffectVaCham.addAnimation(0, "animation", !1);
o.skeEffectVaCham.setCompleteListener(this.onEventVacham.bind(o));
o.mSlotReel.cbStopAllItemMoveBoom();
}, this)));
};
o.prototype.onEventVacham = function() {
this.skeEffectVaCham.node.active = !1;
};
o.prototype.resetItem = function() {
-1 == this.mIndex ? this.mIndex = 5 : -2 == this.mIndex ? this.mIndex = 4 : -3 == this.mIndex && (this.mIndex = 3);
this.node.y = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex];
};
s([ h(sp.Skeleton) ], o.prototype, "skeBorder", void 0);
s([ h(sp.Skeleton) ], o.prototype, "skeBoomed", void 0);
s([ h(cc.Sprite) ], o.prototype, "sprBorder", void 0);
s([ h(sp.Skeleton) ], o.prototype, "skeEffectVaCham", void 0);
return s([ u ], o);
}(l.default);
e.default = m;
cc._RF.pop();
}, {
"../../base_slot/SlotConstant": void 0,
"../../base_slot/SlotItem": void 0,
"../../base_slot/util/AudioUtil": void 0,
"../../base_slot/util/Util": void 0
} ],
SlotGonzoLine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "ef525hUFllNiKmnQk1jGRN4", "SlotGonzoLine");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotLine"), c = cc._decorator, r = c.ccclass, a = (c.property, 
function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotMachine = null;
o.mSlot = null;
o.mListSlotItem = [];
return o;
}
o.prototype.showWin = function() {
t.prototype.showWin.call(this);
for (var o = 0; o < this.mListSlotItem.length; o++) this.mListSlotItem[o].showWin();
};
o.prototype.showHover = function() {
for (var t = 0; t < this.mListSlotItem.length; t++) this.mListSlotItem[t].showHover();
};
o.prototype.showLeave = function() {
for (var t = 0; t < this.mListSlotItem.length; t++) this.mListSlotItem[t].showLeave();
};
return s([ r ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotLine": void 0
} ],
SlotGonzoMachine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "efdd6hhh1ZASo48eGIuJZvT", "SlotGonzoMachine");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotMachine"), c = t("../../base_slot/util/AudioUtil"), r = cc._decorator, a = r.ccclass, p = r.property, u = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listSlotReel = [];
o.listSlotLine = [];
o.mSlot = null;
o.mSlotRoom = null;
o.mListSlotItemResult = [];
o.mCountReelStartMove = 0;
o.mCountReelStopMove = 0;
o.mCountReelStopMoveBoom = 0;
o.mCountReelCompleteBoom = 0;
o.mIsAllReelDoneStart = !1;
o.mIsAllReelDoneStop = !1;
o.mNumReelExistBoom = 0;
return o;
}
o.prototype.init = function(o) {
t.prototype.init.call(this, o);
for (var e = 0; e < 3; e++) for (var n = 0; n < 5; n++) this.mListSlotItemResult.push(this.listSlotReel[n].listItem[e]);
fzgui.ZLog.log("mListSlotItemResult", this.mListSlotItemResult);
};
o.prototype.spin = function() {
this.mAudioIdSpin = c.default.playSound(this.mSlot.mSlotAudio.reelSpin, this.mSlot.mIsSound, !0);
this.setDefault();
for (var t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].spin();
};
o.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIsAllReelDoneStart = !1;
this.mIsAllReelDoneStop = !1;
};
o.prototype.setLineSelect = function(t) {
for (var o = 0; o < this.listSlotLine.length; o++) {
for (var e = !0, n = 0; n < t.length; n++) if (this.listSlotLine[o].getId() === t[n]) {
e = !1;
break;
}
e ? this.listSlotLine[o].setSelect(!1) : this.listSlotLine[o].setSelect(!0);
}
};
o.prototype.stopSpin = function() {
for (var t = this.mSlotRoom.mDataSpin.listItem[0], o = 0; o < this.listSlotReel.length; o++) {
var e = o, n = o + 5, i = o + 10;
this.listSlotReel[o].setIdItemResult([ t[i], t[n], t[e] ]);
this.listSlotReel[o].stopSpin();
}
this.showLog(0, t);
};
o.prototype.showLog = function() {};
o.prototype.showLineWin = function(t) {
for (var o = 0; o < t.listIdx.length; o++) {
var e = t.listIdx[o];
this.mListSlotItemResult[e].setBoom(!0);
}
for (o = 0; o < this.mListSlotItemResult.length; o++) this.mListSlotItemResult[o].showLose();
var n = this.getSlotLineById(t.id);
try {
n.showWin();
} catch (t) {
return;
}
};
o.prototype.showBoom = function() {
for (var t = 0; t < this.mListSlotItemResult.length; t++) this.mListSlotItemResult[t].showIdle();
for (t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].isBoom() && this.listSlotReel[t].showBoom();
};
o.prototype.isBoom = function() {
return this.mNumReelExistBoom > 0;
};
o.prototype.checkBoom = function() {
this.mNumReelExistBoom = 0;
for (var t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].checkBoom() && this.mNumReelExistBoom++;
return this.mNumReelExistBoom > 0;
};
o.prototype.getListLineSelect = function() {
return this.getNumLineSelect().join();
};
o.prototype.updateAllItemResult = function() {
this.mListSlotItemResult = [];
for (var t = 2; t >= 0; t--) for (var o = 0; o < this.listSlotReel.length; o++) {
var e = this.listSlotReel[o].getSlotItemByIndex(t);
this.mListSlotItemResult.push(e);
}
};
o.prototype.updateAllLine = function() {
for (var t = 0; t < this.mSlot.mSlotConfig.LINE.length; t++) {
for (var o = this.mSlot.mSlotConfig.LINE[t], e = [], n = 0; n < o.length; n++) e.push(this.mListSlotItemResult[o[n]]);
this.listSlotLine[t].updateSlotItem(e);
}
};
o.prototype.cbReelMoveStart = function() {
this.mCountReelStartMove++;
if (this.mCountReelStartMove == this.listSlotReel.length) {
this.mCountReelStartMove = 0;
this.mIsAllReelDoneStart = !0;
this.mSlotRoom.checkResult();
}
};
o.prototype.cbReelMoveStop = function() {
c.default.playSound(this.mSlot.mSlotAudio.reelStop, this.mSlot.mIsSound);
this.mCountReelStopMove++;
if (this.mCountReelStopMove == this.listSlotReel.length) {
c.default.stopSound(this.mAudioIdSpin);
this.mCountReelStopMove = 0;
this.mIsAllReelDoneStop = !0;
this.updateAllItemResult();
this.updateAllLine();
this.mSlotRoom.showResult();
}
};
o.prototype.cbReelCompleteBoom = function() {
this.mCountReelCompleteBoom++;
if (this.mCountReelCompleteBoom == this.mNumReelExistBoom) {
this.mCountReelCompleteBoom = 0;
for (var t = this.mSlotRoom.mDataSpin.listItem[this.mSlotRoom.mTurnWinCurent - 1], o = 0; o < this.listSlotReel.length; o++) {
var e = o, n = o + 5, i = o + 10;
this.listSlotReel[o].setIdItemResult([ t[e], t[n], t[i] ]);
this.listSlotReel[o].isBoom() && this.listSlotReel[o].showMoveBoom();
}
this.showLog(this.mSlotRoom.mTurnWinCurent - 1, t);
}
};
o.prototype.cbReelMoveBoomStop = function() {
this.mCountReelStopMoveBoom++;
if (this.mCountReelStopMoveBoom == this.mNumReelExistBoom) {
this.mCountReelStopMoveBoom = 0;
this.updateAllItemResult();
this.updateAllLine();
this.mSlotRoom.showResult();
}
};
s([ p({
override: !0
}) ], o.prototype, "listSlotReel", void 0);
s([ p({
override: !0
}) ], o.prototype, "listSlotLine", void 0);
return s([ a ], o);
}(l.default);
e.default = u;
cc._RF.pop();
}, {
"../../base_slot/SlotMachine": void 0,
"../../base_slot/util/AudioUtil": void 0
} ],
SlotGonzoRank: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "765a27/MppOTY0YdijHRHgs", "SlotGonzoRank");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./SlotGonzoHandler"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.scrollview = null;
o.cellRank = null;
o.heightItem = 0;
o.spacing = 0;
o.spawnCount = 0;
o.bufferZone = 0;
o.lastContentPosY = 0;
o.updateTimer = 0;
o.updateInterval = .2;
o.mState = 0;
o.mListDataCell = [];
o.mListCell = [];
o.mSlot = null;
o.listDataBigwinCache = [];
o.listDataJackpotCache = [];
return o;
}
o.prototype.onLoad = function() {
l.default.instance.sendGetRank("GetHonor");
this.scrollview.content.destroyAllChildren();
cc.systemEvent.on("SlotGonzo_get_rank", this.onEventGetRank, this);
};
o.prototype.onBtn = function(t, o) {
l.default.instance.sendGetRank(o);
};
o.prototype.onDestroy = function() {
cc.systemEvent.off("SlotGonzo_get_rank", this.onEventGetRank, this);
};
o.prototype.onEventGetRank = function(t) {
this.setData(t);
};
o.prototype.update = function(t) {
if (this.node.active) {
this.updateTimer += t;
if (this.updateTimer < this.updateInterval) return;
this.updateTimer = 0;
for (var o = this.bufferZone, e = this.scrollview.content.y < this.lastContentPosY, n = (this.heightItem + this.spacing) * this.mListCell.length, i = 0; i < this.mListCell.length; ++i) {
var s = this.mListCell[i].node, l = this.getPositionInView(s);
if (e) {
if (l.y < -o && s.y + n < 0) {
s.y = s.y + n;
var c = this.mListCell[i], r = c.mIdx - this.mListCell.length;
c.setData(this.mListDataCell[r], r);
}
} else if (l.y > o && s.y - n > -this.scrollview.content.height) {
s.y = s.y - n;
var a = this.mListCell[i];
r = a.mIdx + this.mListCell.length;
a.setData(this.mListDataCell[r], r);
}
}
this.lastContentPosY = this.scrollview.content.y;
}
};
o.prototype.getPositionInView = function(t) {
var o = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollview.node.convertToNodeSpaceAR(o);
};
o.prototype.setData = function(t) {
this.mListDataCell = t;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var o = t.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
this.spawnCount <= o && this.spawnCount;
for (var e = 0; e < o; e++) {
var n = cc.instantiate(this.cellRank), i = n.getComponent("SlotRankCell");
if (t.IsJackport) {
this.mListDataCell[e].IsJackport = !0;
i.setData(this.mListDataCell[e], e);
} else i.setData(this.mListDataCell[e], e);
var s = -n.height * (.5 + e) - this.spacing * (e + 1);
n.setPosition(0, s);
this.mListCell.push(i);
this.scrollview.content.addChild(n);
}
};
o.prototype.onBtnThanglon = function() {
this.mState = 0;
this.setData(this.listDataBigwinCache);
};
o.prototype.onBtnNohu = function() {
this.mState = 1;
this.setData(this.listDataJackpotCache);
};
o.prototype.onBtnClose = function() {
this.node.destroy();
};
s([ a(cc.ScrollView) ], o.prototype, "scrollview", void 0);
s([ a(cc.Prefab) ], o.prototype, "cellRank", void 0);
s([ a(cc.Integer) ], o.prototype, "heightItem", void 0);
s([ a(cc.Integer) ], o.prototype, "spacing", void 0);
s([ a(cc.Integer) ], o.prototype, "spawnCount", void 0);
s([ a(cc.Integer) ], o.prototype, "bufferZone", void 0);
return s([ r ], o);
}(fzgui.UIPopup);
e.default = p;
cc._RF.pop();
}, {
"./SlotGonzoHandler": "SlotGonzoHandler"
} ],
SlotGonzoReel: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "89058k68ylGB7aAWCS456fM", "SlotGonzoReel");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotReel"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listItem = [];
o.mSlotMachine = null;
o.mSlot = null;
o.mCountItemStopMove = 0;
o.mCountItemStartMove = 0;
o.mCountItemBoomed = 0;
o.mCountMoveBoom = 0;
o.mNumItemBoomMove = 0;
o.mExistBoom = !1;
o.mNumBoom = 0;
return o;
}
o.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mCountItemStopMove = 0;
this.mCountItemStartMove = 0;
this.mCountItemBoomed = 0;
this.mCountMoveBoom = 0;
this.mNumItemBoomMove = 0;
this.mExistBoom = !1;
this.mNumBoom = 0;
};
o.prototype.spin = function() {
t.prototype.spin.call(this);
for (var o = 0; o < this.listItem.length; o++) ;
var e = this.getSlotItemByIndex(2), n = this.getSlotItemByIndex(1), i = this.getSlotItemByIndex(0), s = this.mSlotMachine.mSlot.mSlotConfig.TIME_DELAY_SPIN_REEL, l = 0 * s, c = 5 * s + this.mId * s * .8, r = 10 * s + this.mId * s * .7;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(l), cc.callFunc(function() {
i.moveStart(3);
}, this), cc.delayTime(c), cc.callFunc(function() {
n.moveStart(3);
}, this), cc.delayTime(r), cc.callFunc(function() {
e.moveStart(3);
}, this)));
};
o.prototype.stopSpin = function() {
for (var t = 0; t < this.listItem.length; t++) ;
var o = this.getSlotItemByIndex(5), e = this.getSlotItemByIndex(4), n = this.getSlotItemByIndex(3);
o.setId(this.listIdItemResult[2]);
e.setId(this.listIdItemResult[1]);
n.setId(this.listIdItemResult[0]);
var i = this.mSlotMachine.mSlot.mSlotConfig.TIME_DELAY_SPIN_REEL, s = 0 * i + this.mId * i, l = 5 * i + this.mId * i * .8, c = 10 * i + this.mId * i * .6;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(s), cc.callFunc(function() {
n.moveStop(3);
}, this), cc.delayTime(l), cc.callFunc(function() {
e.moveStop(3);
}, this), cc.delayTime(c), cc.callFunc(function() {
o.moveStop(3);
}, this)));
};
o.prototype.isBoom = function() {
return this.mExistBoom;
};
o.prototype.checkBoom = function() {
var t = this.getSlotItemByIndex(0), o = this.getSlotItemByIndex(1), e = this.getSlotItemByIndex(2);
this.mNumBoom = 0;
t.isBoom() && this.mNumBoom++;
o.isBoom() && this.mNumBoom++;
e.isBoom() && this.mNumBoom++;
this.mExistBoom = this.mNumBoom > 0;
return this.mExistBoom;
};
o.prototype.showBoom = function() {
var t = this.getSlotItemByIndex(2), o = this.getSlotItemByIndex(1), e = this.getSlotItemByIndex(0);
if (e.isBoom()) {
e.node.stopAllActions();
e.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
e.showBoom();
}, this)));
}
if (o.isBoom()) {
o.node.stopAllActions();
o.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
o.showBoom();
}, this)));
}
if (t.isBoom()) {
t.node.stopAllActions();
t.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
t.showBoom();
}, this)));
}
};
o.prototype.showMoveBoom = function() {
for (var t = 0; t < this.listItem.length; t++) ;
this.mNumItemBoomMove = 0;
var o = 0;
for (t = 0; t < this.listItem.length; t++) {
var e = this.getSlotItemByIndex(t);
if (e.isBoom()) {
o++;
var n = this.listItem.length - 1 + o;
e.setIndex(n);
e.setBoom(!1);
e.showIdle();
e.node.active = !1;
} else if (this.listIdItemResult.length > 0) {
var i = this.listIdItemResult.pop();
e.setId(i);
if (0 != e.getIndex()) {
this.mNumItemBoomMove++;
e.moveBoom(o);
}
}
}
};
o.prototype.sortItem = function() {
for (var t = 3, o = 0; o < this.listItem.length; o++) if (this.listItem[o].getIndex() > 2) {
this.listItem[o].setIndex(t);
this.listItem[o].node.active = !0;
this.listItem[o].resetItem();
t++;
}
};
o.prototype.cbStopAllItemMoveStart = function() {
this.mCountItemStartMove++;
if (3 == this.mCountItemStartMove) {
this.mCountItemStartMove = 0;
for (var t = 0; t < this.listItem.length; t++) ;
this.mSlotMachine.cbReelMoveStart();
}
};
o.prototype.cbStopAllItemMove = function() {};
o.prototype.cbStopAllItemMoveStop = function() {
this.mCountItemStopMove++;
if (3 == this.mCountItemStopMove) {
this.mCountItemStopMove = 0;
for (var t = 0; t < this.listItem.length; t++) ;
this.mSlotMachine.cbReelMoveStop();
}
};
o.prototype.cbCompleteBoomed = function() {
this.mCountItemBoomed++;
if (this.mCountItemBoomed == this.mNumBoom) {
this.mCountItemBoomed = 0;
this.mSlotMachine.cbReelCompleteBoom();
}
};
o.prototype.cbStopAllItemMoveBoom = function() {
this.mCountMoveBoom++;
if (this.mCountMoveBoom == this.mNumItemBoomMove) {
this.mCountMoveBoom = 0;
this.sortItem();
for (var t = 0; t < this.listItem.length; t++) ;
this.mSlotMachine.cbReelMoveBoomStop();
}
};
s([ a({
override: !0
}) ], o.prototype, "listItem", void 0);
return s([ r ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotReel": void 0
} ],
SlotGonzoRoomUI: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "2515dq92RtPibKowCHuf5TE", "SlotGonzoRoomUI");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotRoomUI"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.btnSelectLine = null;
o.btnBet = null;
o.btnSetting = null;
o.btnRank = null;
o.btnHistory = null;
o.btnGuide = null;
return o;
}
o.prototype.interactableBtnSelectLine = function(t) {
this.btnSelectLine.interactable = t;
};
o.prototype.interactableBtnBet = function(t) {
this.btnBet.interactable = t;
};
s([ a(cc.Button) ], o.prototype, "btnSelectLine", void 0);
s([ a(cc.Button) ], o.prototype, "btnBet", void 0);
s([ a(cc.Toggle) ], o.prototype, "btnSetting", void 0);
s([ a(cc.Button) ], o.prototype, "btnRank", void 0);
s([ a(cc.Button) ], o.prototype, "btnHistory", void 0);
s([ a(cc.Button) ], o.prototype, "btnGuide", void 0);
return s([ r ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotRoomUI": void 0
} ],
SlotGonzoRoom: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "84d8aHuhiFLk7qQWw7kiT7M", "SlotGonzoRoom");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./SlotGonzo"), c = t("./SlotGonzoIconLine"), r = t("./SlotGonzoHandler"), a = t("./SlotGonzoVar"), p = t("../../base_slot/SlotRoom"), u = t("../../base_slot/SlotConstant"), h = cc._decorator, m = h.ccclass, f = h.property, d = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listIconLine = [];
o.mSlotMachine = null;
o.mSlotEffect = null;
o.mSkeChar = null;
o.mSlotRoomUI = null;
o.mSlot = null;
o.mDataSpin = null;
o.mTurnWinCurent = 1;
o.mIsJackpot = !1;
o.mNumFreespin = 0;
o.mIsInit = !1;
o.mMoneyBonus = 0;
o.prbSelectLine = null;
return o;
}
e = o;
Object.defineProperty(o, "instance", {
get: function() {
e._instance || (e._instance = new e());
return e._instance;
},
enumerable: !1,
configurable: !0
});
o.prototype.onLoad = function() {
e._instance = this;
};
o.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
o.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
o.prototype.onUpdateGold = function(t) {
fzgui.UserManager.instance.mainUserInfo.Money = t;
this.updateUserMoney(t);
};
o.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
};
o.prototype.init = function(t) {
this.mSlot = t;
if (!this.mIsInit) {
this.mIsInit = !0;
this.mSlotEffect.init(this);
this.mSlotMachine.init(this);
for (var o = 0; o < this.listIconLine.length; o++) {
this.listIconLine[o].cbHover = this.onHoverLine.bind(this);
this.listIconLine[o].tgHover = this;
this.listIconLine[o].cbLeave = this.onLeaveLine.bind(this);
this.listIconLine[o].tgLeave = this;
}
}
this.mSlot.isTrial() ? this.mUserMoney = 5e7 : this.mUserMoney = fzgui.UserManager.instance.mainUserInfo.Money;
this.updateTotalWin(this.mMoneyWin);
this.updateTotalBet();
this.updateLineSelect(this.mSlotMachine.getNumLineSelect());
this.updateBet(l.default.instance.getMoneyBet());
this.updateUserMoney(this.mUserMoney);
this.onUpdatePot(this.mSlot.mListPot[this.mSlot.getIdxPot()]);
this.mSlotRoomUI.btnSound.isChecked = this.mSlot.mIsSound;
this.mSlotRoomUI.btnMusic.isChecked = this.mSlot.mIsMusic;
this.mSlotRoomUI.btnSound.target.active = !this.mSlotRoomUI.btnSound.isChecked;
this.mSlotRoomUI.btnMusic.target.active = !this.mSlotRoomUI.btnMusic.isChecked;
this.mSlotRoomUI.btnMusic.node.setPosition(cc.winSize.width / 2 + 500, this.mSlotRoomUI.btnMusic.node.y);
this.mSlotRoomUI.btnSound.node.setPosition(cc.winSize.width / 2 + 500, this.mSlotRoomUI.btnSound.node.y);
this.mSlotRoomUI.btnGuide.node.setPosition(cc.winSize.width / 2 + 500, this.mSlotRoomUI.btnGuide.node.y);
this.mSlotRoomUI.btnHistory.node.setPosition(cc.winSize.width / 2 + 500, this.mSlotRoomUI.btnHistory.node.y);
this.mSlotRoomUI.btnRank.node.setPosition(cc.winSize.width / 2 + 500, this.mSlotRoomUI.btnRank.node.y);
};
o.prototype.onHoverLine = function(t) {
for (var o = this.mSlot.mSlotConfig.LINE[t - 1], e = 0; e < o.length; e++) this.mSlotMachine.mListSlotItemResult[o[e]].showHover();
};
o.prototype.onLeaveLine = function(t) {
for (var o = this.mSlot.mSlotConfig.LINE[t - 1], e = 0; e < o.length; e++) this.mSlotMachine.mListSlotItemResult[o[e]].showLeave();
};
o.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mTurnWinCurent = 1;
this.mMoneyBonus = 0;
};
o.prototype.spin = function() {
var o = this;
t.prototype.spin.call(this);
this.mSkeChar.setAnimation(0, "Idle", !1);
this.mSkeChar.setCompleteListener(function() {
o.mSkeChar.setAnimation(0, "Idle", !0);
});
for (var e = 0; e < this.listIconLine.length; e++) this.listIconLine[e].setReady(!1);
this.mUserMoney -= this.getTotalBet();
this.updateUserMoney(this.mUserMoney);
this.mSlotRoomUI.interactableBtnSpin(!1);
this.mSlotRoomUI.interactableBtnSelectLine(!1);
this.mSlotRoomUI.interactableBtnBet(!1);
this.mSlotRoomUI.interactableBtnBack(!1);
l.default.instance.isTrial() ? r.default.instance.sendSpinTry("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20", 5e7, a.default.isPlaytryJackpotValue, 0) : r.default.instance.sendSpin(this.mSlot.mMoneyType, this.mSlot.getBetId(), this.mSlotMachine.getListLineSelect());
};
o.prototype.stopSpin = function(o) {
t.prototype.stopSpin.call(this, o);
this.mSlotRoomUI.updateSession(o.session);
this.checkResult();
};
o.prototype.checkResult = function() {
this.mSlotMachine.mIsAllReelDoneStart && this.mDataSpin && this.mSlotMachine.stopSpin();
};
o.prototype.showResult = function() {
var t = this, o = this.mDataSpin.getLineWinByTurn(this.mTurnWinCurent);
if (o) {
this.mSkeChar.setAnimation(0, "Bonus-FreeSpine", !1);
this.mSkeChar.setCompleteListener(function() {
t.mSkeChar.setAnimation(0, "Idle-1", !0);
});
if (o.jackpot > 0) {
this.mIsJackpot = !0;
this.mSlot.isTrial();
this.mSlotEffect.showJackpot(this.showResult, this, o.jackpot);
} else if (o.bonus > 2 && o.bonus < 6) {
this.mSlot.isTrial();
this.mSlotEffect.showBonus(this.showResult, this, o.bonus - 3, o.moneyWin);
} else if (o.freespin > 0) {
this.mNumFreespin += o.freespin;
this.mSlotEffect.showFreespin(this.showResult, this, this.mNumFreespin);
} else if (o.moneyWin > 0) this.mSlotEffect.showWin(this.showResult, this, o.moneyWin); else {
this.mSkeChar.setAnimation(0, "Quay-3", !1);
this.mSkeChar.setCompleteListener(function() {
t.mSkeChar.setAnimation(0, "Idle-1", !0);
});
}
this.mSlotMachine.showLineWin(o);
} else {
this.mTurnWinCurent++;
this.mSlotMachine.checkBoom() ? this.mSlotMachine.showBoom() : this.checkNextSpin();
}
};
o.prototype.nextSpin = function() {
var t = this;
if (this.mNumFreespin > 0) {
this.mNumFreespin--;
this.mSlotEffect.showNumFreespin(this.mNumFreespin);
clearTimeout(this.mTimeoutNextSpin);
var o = function() {
clearTimeout(t.mTimeoutNextSpin);
t.spin();
};
this.mTimeoutNextSpin = setTimeout(o.bind(this), 1e3 * this.mSlot.mSlotConfig.TIME_DELAY_NEXT_SPIN);
} else {
if (this.mSlot.isTrial()) this.mUserMoney += this.mMoneyWin + this.mMoneyBonus; else {
this.mUserMoney = this.mDataSpin.userMoney + this.mMoneyBonus;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.mUserMoney);
}
this.updateUserMoney(this.mUserMoney);
if (this.mIsAutoSpin) {
clearTimeout(this.mTimeoutNextSpin);
o = function() {
clearTimeout(t.mTimeoutNextSpin);
t.mState = u.SLOT_STATE.READY;
t.onBtnSpin();
};
this.mTimeoutNextSpin = setTimeout(o.bind(this), 1e3 * this.mSlot.mSlotConfig.TIME_DELAY_NEXT_SPIN);
} else {
this.mState = u.SLOT_STATE.READY;
for (var e = 0; e < this.listIconLine.length; e++) this.listIconLine[e].setReady(!0);
this.mSlotRoomUI.interactableBtnSpin(!0);
this.mSlotRoomUI.interactableBtnSelectLine(!0);
this.mSlotRoomUI.interactableBtnBet(!0);
this.mSlotRoomUI.interactableBtnBack(!0);
}
}
};
o.prototype.updateLineSelect = function(t) {
this.mSlotRoomUI.updateLineSelect(t.length);
this.mSlotMachine.setLineSelect(t);
this.updateTotalBet();
};
o.prototype.showMiniBonus = function() {};
o.prototype.checkNextSpin = function() {
this.mDataSpin.totalWin >= 15 * this.getTotalBet() && !this.mIsJackpot ? this.mSlotEffect.showBigWin(this.nextSpin, this, this.mMoneyWin) : this.nextSpin();
};
o.prototype.onBtnQuickSpin = function() {
if (this.mUserMoney < this.getTotalBet()) l.default.instance.mTooltip.show("Số dư không đủ để quay"); else if (this.mState == u.SLOT_STATE.READY) {
this.mIsQuickSpin = !0;
this.mIsAutoSpin = !0;
this.mSlotRoomUI.visibleBtnStopSpin(!0);
this.mSlotRoomUI.visibleBtnAutoSpin(!1);
this.mSlotRoomUI.visibleBtnQuickSpin(!1);
this.mState == u.SLOT_STATE.READY && this.spin();
} else l.default.instance.mTooltip.show("Không quay được khi chưa kết thúc phiên");
};
o.prototype.onBtnAutoSpin = function() {
if (this.mUserMoney < this.getTotalBet()) l.default.instance.mTooltip.show("Số dư không đủ để quay"); else if (this.mState == u.SLOT_STATE.READY) {
this.mIsAutoSpin = !0;
this.mSlotRoomUI.visibleBtnStopSpin(!0);
this.mSlotRoomUI.visibleBtnAutoSpin(!1);
this.mSlotRoomUI.visibleBtnQuickSpin(!1);
this.mState == u.SLOT_STATE.READY && this.spin();
} else l.default.instance.mTooltip.show("Không quay được khi chưa kết thúc phiên");
};
o.prototype.onBtnAddBet = function() {
if (this.mSlot.isTrial()) this.mSlot.mTooltip.show("Không sử dụng được chức năng này ở chơi thử"); else if (this.mState == u.SLOT_STATE.READY) {
this.mSlot.mRoomId++;
this.mSlot.mRoomId > 3 && (this.mSlot.mRoomId = 1);
this.updateBet(l.default.instance.getMoneyBet());
this.updateTotalBet();
this.onUpdatePot(this.mSlot.mListPot[this.mSlot.mRoomId - 1]);
r.default.instance.sendPlayNow();
}
};
o.prototype.onBtnSetting = function() {
if (this.mSlotRoomUI.btnSetting.isChecked) {
this.mSlotRoomUI.btnMusic.node.runAction(cc.sequence(cc.delayTime(0), cc.moveTo(.2, cc.v2(570, 240)).easing(cc.easeElasticOut(.4))));
this.mSlotRoomUI.btnSound.node.runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.2, cc.v2(570, 170)).easing(cc.easeElasticOut(.4))));
} else {
this.mSlotRoomUI.btnMusic.node.runAction(cc.sequence(cc.delayTime(0), cc.moveTo(.2, cc.v2(1e3, 240)).easing(cc.easeElasticIn(.4))));
this.mSlotRoomUI.btnSound.node.runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.2, cc.v2(1e3, 170)).easing(cc.easeElasticIn(.4))));
}
};
o.prototype.onBtnGuide = function() {};
o.prototype.onBtnHistory = function() {};
o.prototype.onBtnRank = function() {};
o.prototype.onBtnSelectLine = function() {
var t = this;
fzgui.UIPopupManager.instance.showPopupFromPrefab(this.prbSelectLine, function(o) {
o.init(t);
});
};
o.prototype.onBtnBack = function() {
this.mSlot.onBtnBack();
};
o.prototype.onBtnSound = function() {
t.prototype.onBtnSound.call(this);
this.mSlotRoomUI.btnSound.target.active = !this.mSlotRoomUI.btnSound.isChecked;
};
o.prototype.onBtnMusic = function() {
t.prototype.onBtnMusic.call(this);
this.mSlotRoomUI.btnMusic.target.active = !this.mSlotRoomUI.btnMusic.isChecked;
};
var e;
o._instance = null;
s([ f([ c.default ]) ], o.prototype, "listIconLine", void 0);
s([ f({
override: !0
}) ], o.prototype, "mSlotMachine", void 0);
s([ f({
override: !0
}) ], o.prototype, "mSlotEffect", void 0);
s([ f(sp.Skeleton) ], o.prototype, "mSkeChar", void 0);
s([ f({
override: !0
}) ], o.prototype, "mSlotRoomUI", void 0);
s([ f(cc.Prefab) ], o.prototype, "prbSelectLine", void 0);
return e = s([ m ], o);
}(p.default);
e.default = d;
cc._RF.pop();
}, {
"../../base_slot/SlotConstant": void 0,
"../../base_slot/SlotRoom": void 0,
"./SlotGonzo": "SlotGonzo",
"./SlotGonzoHandler": "SlotGonzoHandler",
"./SlotGonzoIconLine": "SlotGonzoIconLine",
"./SlotGonzoVar": "SlotGonzoVar"
} ],
SlotGonzoSelectLine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "7bd66OyJcZKn4bqqkn35pwI", "SlotGonzoSelectLine");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotSelectLine"), c = t("./SlotGonzoRoom"), r = cc._decorator, a = r.ccclass, p = (r.property, 
function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotRoom = null;
o.mSlot = null;
return o;
}
o.prototype.init = function(t) {
this.mSlotRoom = t;
this.mSlot = this.mSlotRoom.mSlot;
for (var o = this.mSlotRoom.mSlotMachine.getNumLineSelect(), e = 0; e < this.listLineItem.length; e++) {
for (var n = !1, i = 0; i < o.length; i++) if (o[i] == e + 1) {
n = !0;
break;
}
this.listLineItem[e].isChecked = n;
}
};
o.prototype.hide = function() {
for (var o = [], e = 0; e < this.listLineItem.length; e++) this.listLineItem[e].isChecked && o.push(e + 1);
if (0 == o.length) this.mSlot.mTooltip.show("Bạn phải chọn ít nhất 1 dòng"); else {
c.default.instance.updateLineSelect(o);
t.prototype.hide.call(this);
}
};
return s([ a ], o);
}(l.default));
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotSelectLine": void 0,
"./SlotGonzoRoom": "SlotGonzoRoom"
} ],
SlotGonzoSelectRoom: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "f7b391dVcVJy7PJp4VZEm12", "SlotGonzoSelectRoom");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotSelectRoom"), c = cc._decorator, r = c.ccclass, a = (c.property, 
function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
return o;
}
return s([ r ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotSelectRoom": void 0
} ],
SlotGonzoVar: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "73188XF06NHZKlY/y27um8g", "SlotGonzoVar");
Object.defineProperty(e, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.api = {
negotiate: "https://gonzo.dragonf1.xyz/signalr/negotiate",
hub: "Rungramhub"
};
t.KEY_SOUND = "SlotGonzo_sound";
t.KEY_MUSIC = "SlotGonzo_music";
t.jackPot = [ 0, 5e5, 5e6, 5e7 ];
t.isPlaytryJackpotValue = 5e7;
return t;
}();
e.default = n;
cc._RF.pop();
}, {} ],
SlotGonzoXPotCell: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "494d1Y7ltlFaK0+r/RxXl1/", "SlotGonzoXPotCell");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotXPotCell"), c = cc._decorator, r = c.ccclass, a = (c.property, 
function(t) {
i(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
o.prototype.updatePot = function() {};
o.prototype.setData = function(t) {
this.mData = t;
this.node.active = t.IsEvent;
if (1 == t.RoomID) {
this.txtPotCount.node.active = !0;
t.NormalJackpot > 0 ? this.txtPotCount.string = "X6 SAU " + t.NormalJackpot + " HŨ" : this.txtPotCount.string = "X6 CÒN LẠI " + t.EventJackpotRemain + " HŨ";
} else if (2 == t.RoomID) {
this.txtPotCount.node.active = !0;
t.NormalJackpot > 0 ? this.txtPotCount.string = "X4 SAU " + t.NormalJackpot + " HŨ" : this.txtPotCount.string = "X4 CÒN LẠI " + t.EventJackpotRemain + " HŨ";
} else if (3 == t.RoomID && t.NormalJackpot > 0) {
this.txtPotCount.node.active = !0;
t.NormalJackpot > 0 ? this.txtPotCount.string = "X2 SAU " + t.NormalJackpot + " HŨ" : this.txtPotCount.string = "X2 CÒN LẠI " + t.EventJackpotRemain + " HŨ";
} else {
this.txtPotCount.node.active = !1;
this.skeEffect.node.active = !0;
this.mSlotXPot.mSlot.onUpdatePot(this.mSlotXPot.mSlot.mListPot);
}
};
return s([ r ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotXPotCell": void 0
} ],
SlotGonzoXPot: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "bbe36k6KYlG1IG76bvvZh7D", "SlotGonzoXPot");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotXPot"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listPotCell = [];
o.mSlot = null;
o.mData = null;
return o;
}
o.prototype.init = function(o) {
t.prototype.init.call(this, o);
};
o.prototype.updatePot = function() {};
o.prototype.onEventXPot = function(t) {
if (t[0].IsEvent) {
this.mData = t;
this.node.active = !0;
for (var o = 0; o < t.length; o++) this.listPotCell[o] && this.listPotCell[o].setData(t[o]);
} else this.node.active = !1;
};
s([ a({
override: !0
}) ], o.prototype, "listPotCell", void 0);
return s([ r ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotXPot": void 0
} ],
SlotGonzo: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "ef10b8aighCe6oK2QM48j4u", "SlotGonzo");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, n) {
var i, s = arguments.length, l = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(o, e, l) : i(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./SlotGonzoSelectRoom"), c = t("./SlotGonzoRoom"), r = t("./SlotGonzoVar"), a = t("./SlotGonzoXPot"), p = t("../../base_slot/Slot"), u = t("../../base_slot/SlotConstant"), h = cc._decorator, m = h.ccclass, f = h.property, d = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotPot = null;
o.mSlotNetwork = null;
o.mSlotConfig = null;
o.mSlotAudio = null;
o.mSlotSelectRoom = null;
o.mSlotRoom = null;
o.mDataJoin = null;
return o;
}
e = o;
Object.defineProperty(o, "instance", {
get: function() {
e._instance || (e._instance = new e());
return e._instance;
},
enumerable: !1,
configurable: !0
});
o.prototype.onLoad = function() {
e._instance = this;
t.prototype.onLoad.call(this);
this.mIdGame = u.GAME_ID.PUBG;
var o = r.default.jackPot;
if (o && o.length > 0) {
this.mListPot[0] = o[0];
this.mListPot[1] = o[1];
this.mListPot[2] = o[2];
}
this.checkSound(r.default.KEY_SOUND, r.default.KEY_MUSIC);
this.mSlotSelectRoom.init(this);
this.mSlotPot.init(this);
};
o.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.mSlotNetwork.connect, this);
this.mSlotNetwork.closeWS();
fzgui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
o.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
};
o.prototype.connectSuccess = function() {
this.mSlotNetwork.sendJoinRoom();
};
o.prototype.onJoinGameSuccess = function(t) {
this.onPlayNow(t);
};
o.prototype.onPlayNow = function(t) {
this.mDataJoin = t;
this.mSlotSelectRoom.node.active = !1;
this.mSlotRoom.node.active = !0;
this.mSlotRoom.init(this);
};
o.prototype.init = function() {};
o.prototype.onMessage = function(t) {
this.mTooltip.show(t);
this.mSlotRoom.node.active && (this.mSlotRoom.mSlotRoomUI.btnBack.interactable = !0);
};
o.prototype.onUpdatePot = function(t) {
if (t) {
var o = 0;
for (var e in t) {
var n = t[e];
if (n > 0) {
this.mListPot[o] = n;
o++;
}
}
this.mSlotSelectRoom && this.mSlotSelectRoom.onUpdatePot(this.mListPot);
this.mSlotRoom && this.mSlotRoom.onUpdatePot(this.mListPot[this.mRoomId - 1]);
}
};
o.prototype.onBtnBack = function() {
this.mSlotSelectRoom.node.active = !0;
this.mSlotRoom.node.active = !1;
};
var e;
o._instance = null;
s([ f(a.default) ], o.prototype, "mSlotPot", void 0);
s([ f({
override: !0
}) ], o.prototype, "mSlotNetwork", void 0);
s([ f({
override: !0
}) ], o.prototype, "mSlotConfig", void 0);
s([ f({
override: !0
}) ], o.prototype, "mSlotAudio", void 0);
s([ f(l.default) ], o.prototype, "mSlotSelectRoom", void 0);
s([ f(c.default) ], o.prototype, "mSlotRoom", void 0);
return e = s([ m ], o);
}(p.default);
e.default = d;
cc._RF.pop();
}, {
"../../base_slot/Slot": void 0,
"../../base_slot/SlotConstant": void 0,
"./SlotGonzoRoom": "SlotGonzoRoom",
"./SlotGonzoSelectRoom": "SlotGonzoSelectRoom",
"./SlotGonzoVar": "SlotGonzoVar",
"./SlotGonzoXPot": "SlotGonzoXPot"
} ]
}, {}, [ "SlotGonzo", "SlotGonzoAudio", "SlotGonzoConfig", "SlotGonzoEffect", "SlotGonzoEntity", "SlotGonzoGuide", "SlotGonzoHandler", "SlotGonzoHistory", "SlotGonzoHistoryCell", "SlotGonzoIconLine", "SlotGonzoItem", "SlotGonzoLine", "SlotGonzoMachine", "SlotGonzoRank", "SlotGonzoReel", "SlotGonzoRoom", "SlotGonzoRoomUI", "SlotGonzoSelectLine", "SlotGonzoSelectRoom", "SlotGonzoVar", "SlotGonzoXPot", "SlotGonzoXPotCell" ]);