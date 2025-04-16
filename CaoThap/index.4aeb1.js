window.__require = function t(e, n, o) {
function i(r, s) {
if (!n[r]) {
if (!e[r]) {
var c = r.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = c;
}
var p = n[r] = {
exports: {}
};
e[r][0].call(p.exports, function(t) {
return i(e[r][1][t] || t);
}, p, p.exports, t, e, n, o);
}
return n[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < o.length; r++) i(o[r]);
return i;
}({
"CaoThap.Const": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d1009r10PBL1qFY/Q3P1y+v", "CaoThap.Const");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CaoThapConst = void 0;
var o = function() {
function t() {}
t.formatNumber = function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
t.formatDateTime = function(t) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + " - " + t[1].substr(0, 5);
};
t.formatDateTime2 = function(t) {
var e = t = t.split("T");
return e[0] + "\n" + e[1];
};
t.formatUserName = function(t) {
return t.length > 10 ? t.slice(0, 9) + "..." : t;
};
t.convertToMoney = function(t) {
var e = "", n = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? t.toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : t.toString();
1 == n && (e = "-" + e);
return e;
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
t.formatNumberString = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e9);
return this.formatNumber(t) + "Tỷ";
}
if (t >= 1e6) {
t = Math.ceil(t / 1);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
};
t.formatNumbertoK = function(t) {
if (t >= 1e3 && t < 1e6) {
var e = t / 1e3;
return e < 10 ? e.toFixed(1) + "K" : e.toFixed(0) + "K";
}
if (t >= 1e6 && t < 1e9) return (n = t / 1e6) < 10 ? n.toFixed(2) + "M" : n.toFixed(0) + "M";
if (t >= 1e9) {
var n;
return (n = t / 1e9) < 10 ? n.toFixed(2) + "B" : n.toFixed(0) + "B";
}
return t.toString();
};
t.convertToK = function(t) {
var e = "", n = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? (t / 1e3).toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "K" : t.toString();
1 == n && (e = "-" + e);
return e;
};
t.getUrl = function(t, e) {
var n = t, o = cc.loader.getXMLHttpRequest();
o.onreadystatechange = function() {
4 === o.readyState && (200 == o.status ? e(JSON.parse(o.responseText), o.status) : o.responseText.length > 0 ? e(o.responseText, o.status) : e("error_code : " + o.status, null));
};
o.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
o.timeout = 3e4;
o.open("GET", n, !0);
o.setRequestHeader("Content-Type", "application/json");
o.withCredentials = !0;
o.send();
};
t.post = function(t, e, n) {
var o = cc.loader.getXMLHttpRequest();
o.timeout = 3e4;
o.open("POST", t);
o.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
o.setRequestHeader("HeaderName", "HeaderValue");
o.onreadystatechange = function() {
if (4 == o.readyState) if (o.status >= 200 && o.status < 400) {
var t = o.responseText, e = JSON.parse(t);
n && n(o.status, e);
} else n && n(o.status, null);
};
o.send(JSON.stringify(e));
};
t.MAX_KEY_VALUE = 8;
t.MAX_BET_TAI_XIU = 1e21;
t.MIN_BET = 10;
t.MAX_BET_PER_SESSION = 25e25;
t.RETURN_MONEY = 2;
t.diceNode = {
GameSessionID: 0
};
t.diceNode2 = {
GameSessionID: 0
};
t.GameID = {
UNKNOWN_GAME: -1,
GATE: 0,
BA_CAY: 1,
TA_LA: 3,
XI_TO: 5,
TLMN_DEMLA: 7,
MAU_BINH: 9,
TLMN_NHATANTAT: 27,
POKER: 13,
SAM_LOC: 15,
LIENG: 17,
CHAN: 19,
XOC_DIA: 25,
TLMN_DEMLA_SOLO: 33,
SAM_LOC_SOLO: 35,
CHAT: 40,
POKER_SLOT: 41,
CARD_SLOT: 42,
TAI_XIU: 40,
CCU: 44,
EVENT_HOT: 45,
EVENT_GIFT: 46,
Zombie: 100,
POKEMON: 101,
ANGRYBIRD: 102,
TIENCA: 103,
VQMM: 105,
RUNG_RAM: 106
};
t.ON_CAOTHAP_SOCKET = "OnCaoThapWebSocKet";
t.CLOSE_CaoThap = "CloseCaoThap";
t.isHideCaoThap = !1;
t.StepType = {
INIT: 0,
BET: 1,
STOP: 2
};
t.BetType = {
BET_GOLD: 1,
BET_BAC: 2
};
t.RoomHiLoID = {
ROOM1: 1,
ROOM2: 2,
ROOM3: 3,
ROOM4: 4,
ROOM5: 5
};
t.Location = {
DOWN: 0,
UP: 1
};
t.MAX_ROON = 5;
t.RETURN_RESULT = 1;
return t;
}();
n.CaoThapConst = o;
cc._RF.pop();
}, {} ],
"CaoThap.History": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "86c1fEOQqBPjoH2rc7h6bV5", "CaoThap.History");
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
var r = t("./CaoThap.NetworkClient"), s = t("./CaoThap.Const"), c = cc._decorator, l = c.ccclass, p = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
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
r.default.instance.sendSignalR("GetAccountHistory", [ s.CaoThapConst.BetType.BET_GOLD, s.CaoThapConst.GameID.CARD_SLOT, 30 ]);
};
e.prototype.showAccountHistoryCaoThap = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var n = t[e], o = n.CreatedTime, i = 1 == n.LocationID ? "Trên" : "Dưới", a = n.TurnID, r = n.BetValue, c = n.PrizeValue, l = cc.instantiate(this.template), p = c > 0 ? "Thắng" : "Thua";
l.active = !0;
l.position = new cc.Vec3(0, 0, 0);
l.getChildByName("txtPhien").getComponent(cc.Label).string = "" + a;
l.getChildByName("txtPhien").color = cc.Color.YELLOW;
if (o.length > 0) {
var h = s.CaoThapConst.formatDateTime(o);
l.getChildByName("txtThoiGian").getComponent(cc.Label).string = h;
}
l.getChildByName("txtCuaDat").getComponent(cc.Label).string = i;
l.getChildByName("txtKetQua").getComponent(cc.Label).string = p;
l.getChildByName("txtTienDat").getComponent(cc.Label).string = s.CaoThapConst.formatNumber(r);
l.getChildByName("txtNhan").getComponent(cc.Label).string = s.CaoThapConst.formatNumber(c);
l.getChildByName("line").active = !!(e % 2);
l.color = e % 2 == 0 ? cc.color(38, 4, 0) : cc.color(255, 255, 255);
this.content.addChild(l);
}
};
var n;
e._instance = null;
a([ p(cc.Node) ], e.prototype, "content", void 0);
a([ p(cc.Node) ], e.prototype, "template", void 0);
return n = a([ l ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"./CaoThap.Const": "CaoThap.Const",
"./CaoThap.NetworkClient": "CaoThap.NetworkClient"
} ],
"CaoThap.MainGame": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "36018wZkFBHeaYfjyMBFEbx", "CaoThap.MainGame");
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
var r = t("./CaoThap.NetworkClient"), s = t("./CaoThap.Const"), c = t("../../framework/common/Tween"), l = t("../../framework/common/Utils"), p = cc._decorator, h = p.ccclass, u = p.property, C = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprAtlasCards = null;
e.sprCardBack = null;
e.NodeActiveAce = [];
e.BtnBet = [];
e.lblJackpot = null;
e.lblSession = null;
e.lblUp = null;
e.lblCurrent = null;
e.lblDown = null;
e.lblStatus = null;
e.lblTime = null;
e.btnNewTurn = null;
e.btnClose = null;
e.btnPlay = null;
e.btnUp = null;
e.btnDown = null;
e.sprCard = null;
e.lblToast = null;
e.lblWinCoin = null;
e.sprBtn = [];
e.listBet = [ 1e3, 1e4, 5e4, 1e5, 5e5 ];
e.betIdx = 0;
e.currentTime = 0;
e.currentTimeInt = 0;
e.isPlaying = !1;
e.numA = 0;
e.cardNameMap = new Object();
e.m_nRoomID = 1;
e.m_nStepType = 0;
e.m_nLocationID = 0;
e.m_nCurrentStep = 0;
e.m_nPrize = 0;
e.m_betValue = 0;
e.m_betRateDown = 0;
e.m_betRateUp = 0;
e.remainTime = 0;
e.turnID = 0;
e.isJackpot = !1;
e.GAME_TIME = 120;
e.SPIN_FRAMES = 15;
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
this.reset();
};
e.prototype.start = function() {
for (var t = 0; t < 13; t++) for (var e = 0; e < 4; e++) {
var n = (t + 2).toString();
switch (n) {
case "11":
n = "J";
break;

case "12":
n = "Q";
break;

case "13":
n = "K";
break;

case "14":
n = "A";
}
var o = "";
switch (e) {
case 0:
o = "♠";
break;

case 1:
o = "♣";
break;

case 2:
o = "♦";
break;

case 3:
o = "♥";
}
this.cardNameMap[13 * e + t] = n + o;
}
};
e.prototype.reset = function() {
this.numA = 0;
this.isJackpot = !1;
this.isPlaying = !1;
this.lblToast.node.parent.active = !1;
this.lblStatus.string = "Nhấn BẮT ĐẦU để chơi";
this.lblSession.string = "";
this.lblUp.string = "";
this.lblDown.string = "";
this.lblTime.string = "2:00";
this.currentTime = 0;
this.lblCurrent.string = l.default.formatNumber(this.listBet[this.betIdx]);
this.btnNewTurn.interactable = !1;
this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
this.btnUp.interactable = !1;
this.btnDown.interactable = !1;
this.btnPlay.interactable = !0;
this.btnPlay.node.active = !0;
this.lblWinCoin.node.active = !1;
this.sprCard.spriteFrame = this.sprCardBack;
this.m_nStepType = s.CaoThapConst.StepType.INIT;
this.m_nCurrentStep = 0;
for (var t = 0; t < this.NodeActiveAce.length; t++) this.NodeActiveAce[t].active = !1;
};
e.prototype.CaoThapAccountInfo = function(t) {
console.log(t);
if (t.length <= 0) this.reset(); else if (t.responseStatus >= 0) {
this.m_nCurrentStep = t.currentStep;
if (this.m_nCurrentStep <= 0) this.reset(); else {
this.m_nStepType = s.CaoThapConst.StepType.BET;
this.isPlaying = !0;
var e = t;
this.numA = e.acesCount;
this.m_betRateDown = e.betRateDown;
this.m_betRateUp = e.betRateUp;
this.remainTime = e.remainTime;
this.turnID = e.currentTurnId;
this.m_nRoomID = e.currentRoomId;
for (var n = 0; n < this.numA; n++) this.NodeActiveAce[n].active = !0;
this.m_nPrize = e.currentBetValue;
var o = e.currentCardData.split(",");
0 == this.m_nRoomID && (this.m_nRoomID = 1);
this.updateRoomToggles(this.m_nRoomID);
this.lblUp.string = 0 == e.betRateUp ? "" : l.default.formatNumber(Math.round(e.betRateUp * this.m_nPrize));
this.lblDown.string = 0 == e.betRateDown ? "" : l.default.formatNumber(Math.round(e.betRateDown * this.m_nPrize));
this.lblSession.string = "#" + e.currentTurnId;
this.lblStatus.string = "";
this.sprCard.spriteFrame = this.sprAtlasCards.getSpriteFrame("card" + o[o.length - 1]);
this.currentTime = e.remainTime;
this.btnNewTurn.interactable = e.currentStep >= 1;
this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = e.step > 1 ? this.sprBtn[0] : this.sprBtn[1];
this.btnPlay.node.active = 0 == this.m_nCurrentStep;
this.btnUp.interactable = e.betRateUp > 0;
this.btnDown.interactable = e.betRateDown > 0;
var i = t.currentCardData.split(",");
for (n = 0; n < i.length; n++) {
n > 0 && (this.lblStatus.string += ",");
this.lblStatus.string += this.cardNameMap[i[n]];
}
this.betIdx = e.currentRoomId > 0 ? e.currentRoomId - 1 : e.currentRoomId;
this.lblCurrent.string = l.default.formatNumber(this.listBet[this.betIdx]);
if (1 == this.m_nCurrentStep && 0 == this.remainTime && this.turnID > 0) {
this.m_betRateDown <= 0 && this.m_betRateUp > 0 ? this.m_nLocationID = s.CaoThapConst.Location.UP : this.m_betRateDown > 0 && this.m_betRateUp <= 0 ? this.m_nLocationID = s.CaoThapConst.Location.DOWN : this.m_nLocationID = Math.floor(2 * Math.random());
this.m_nStepType = s.CaoThapConst.StepType.BET;
this.SetBetHiLo();
} else if (this.m_nCurrentStep > 1 && 0 == this.remainTime && this.turnID > 0) {
this.m_nStepType = s.CaoThapConst.StepType.STOP;
this.SetBetHiLo();
}
}
this.GetJackpotHiLo();
}
};
e.prototype.resultCaoThapBet = function(t) {
var e = this;
if (!(t.length <= 0)) if (t.responseStatus >= 0) if (this.m_nStepType != s.CaoThapConst.StepType.STOP) {
this.isPlaying = !0;
this.isJackpot = t.isJackpot;
this.m_nPrize = t.prizeValue;
this.m_betValue = t.betValue;
this.m_nCurrentStep = t.step;
this.m_betRateDown = t.betRateDown;
this.m_betRateUp = t.betRateUp;
this.lblSession.string = "#" + t.turnId;
this.currentTime = this.GAME_TIME;
this.m_nStepType == s.CaoThapConst.StepType.BET && this.spinCard(t.cardId, function() {
"" != e.lblStatus.string && (e.lblStatus.string += ",");
e.lblStatus.string += e.cardNameMap[t.cardId];
if (12 == t.cardId || 25 == t.cardId || 39 == t.cardId || 51 == t.cardId) {
e.numA++;
for (n = 0; n < e.numA; n++) e.NodeActiveAce[n].active = !0;
}
e.lblCurrent.string = l.default.formatNumber(e.m_betValue);
e.lblUp.string = 0 == e.m_betRateUp ? "" : l.default.formatNumber(Math.round(e.m_betRateUp * e.m_nPrize));
e.lblDown.string = 0 == e.m_betRateDown ? "" : l.default.formatNumber(Math.round(e.m_betRateDown * e.m_nPrize));
e.btnUp.interactable = e.isPlaying && e.m_betRateUp > 0;
e.btnDown.interactable = e.isPlaying && e.m_betRateDown > 0;
e.btnNewTurn.interactable = e.isPlaying;
e.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = e.isPlaying ? e.sprBtn[0] : e.sprBtn[1];
for (var n = 0; n < e.BtnBet.length; n++) e.BtnBet[n].interactable = !0;
0 == e.m_nPrize && e.showResult();
});
} else this.reset(); else this.reset();
};
e.prototype.GetJackpotHiLo = function() {
r.default.instance.sendSignalR("GetJackpotCardSlot", [ s.CaoThapConst.BetType.BET_GOLD, this.m_nRoomID ]);
};
e.prototype.UpdateJackpot = function(t) {
c.default.numberTo(this.lblJackpot, t.Jackpot, .3);
};
e.prototype.SetBetHiLo = function() {
this.currentTime = 0;
this.lblTime.string = "02:00";
r.default.instance.sendSignalR("SetBetCardSlot", [ s.CaoThapConst.BetType.BET_GOLD, this.m_nStepType, this.m_nLocationID, this.m_nRoomID ]);
};
e.prototype.touchRoom = function(t, e) {
if (this.m_nCurrentStep >= 1) {
this.updateRoomToggles(this.m_nRoomID);
this.showToast("Vui lòng chờ hết lượt");
} else {
this.m_nRoomID = parseInt(e);
this.betIdx = parseInt(e) - 1;
this.lblCurrent.string = l.default.formatNumber(this.listBet[this.betIdx]);
this.GetJackpotHiLo();
}
};
e.prototype.updateRoomToggles = function(t) {
for (var e = 0; e < this.BtnBet.length; e++) this.BtnBet[e].isChecked = e == t - 1;
};
e.prototype.showResult = function() {
var t = this;
this.btnUp.interactable = !1;
this.btnDown.interactable = !1;
this.btnPlay.interactable = !1;
this.isPlaying = !1;
this.scheduleOnce(function() {
0 == t.m_nPrize && t.reset();
t.lblWinCoin.node.stopAllActions();
t.lblWinCoin.node.setPosition(-26, -16);
t.lblWinCoin.node.opacity = 0;
t.lblWinCoin.string = t.m_nPrize > 0 ? "+" + l.default.formatNumber(t.m_nPrize) : "Bạn đã thua";
t.lblWinCoin.node.active = !0;
t.lblWinCoin.node.runAction(cc.sequence(cc.spawn(cc.fadeIn(.2), cc.moveBy(2, cc.v2(0, 100))), cc.fadeOut(.15), cc.callFunc(function() {
t.lblWinCoin.node.active = !1;
})));
}, 1);
};
e.prototype.update = function(t) {
if (this.currentTime > 0) {
this.currentTime = Math.max(0, this.currentTime - t);
var e = parseInt(this.currentTime.toString());
if (this.currentTimeInt != e) {
this.currentTimeInt = e;
this.lblTime.string = this.longToTime(this.currentTimeInt);
}
}
};
e.prototype.spinCard = function(t, e) {
var n = this, o = this.SPIN_FRAMES;
this.schedule(function() {
if (0 == --o) {
n.sprCard.node.color = cc.Color.WHITE;
n.sprCard.spriteFrame = n.sprAtlasCards.getSpriteFrame("card" + t);
e();
} else {
for (var i = 0; i < n.BtnBet.length; i++) n.BtnBet[i].interactable = !1;
n.sprCard.node.color = cc.Color.BLACK.fromHEX("#CCCCCC");
n.sprCard.spriteFrame = n.sprAtlasCards.getSpriteFrame("card" + l.default.randomRangeInt(0, 52));
}
}, .1, o - 1, 0);
};
e.prototype.longToTime = function(t) {
var e = t % 60;
return parseInt((t / 60).toString()) + ":" + (e < 10 ? "0" : "") + e;
};
e.prototype.actStart = function() {
if (this.m_nCurrentStep >= 1) this.showToast("Không hợp lệ."); else {
this.lblStatus.string = "";
this.isPlaying = !0;
this.btnPlay.node.active = !1;
this.SetBetHiLo();
this.m_nStepType = s.CaoThapConst.StepType.BET;
}
};
e.prototype.actUp = function() {
if (this.m_nCurrentStep < 1) this.showToast("Vui lòng click play"); else {
this.btnUp.interactable = !1;
this.btnDown.interactable = !1;
this.btnNewTurn.interactable = !1;
this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
this.m_nLocationID = s.CaoThapConst.Location.UP;
this.m_nStepType = s.CaoThapConst.StepType.BET;
this.SetBetHiLo();
}
};
e.prototype.actDown = function() {
if (this.m_nCurrentStep < 1) this.showToast("Vui lòng click play"); else {
this.btnUp.interactable = !1;
this.btnDown.interactable = !1;
this.btnNewTurn.interactable = !1;
this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
this.m_nLocationID = s.CaoThapConst.Location.DOWN;
this.m_nStepType = s.CaoThapConst.StepType.BET;
this.SetBetHiLo();
}
};
e.prototype.actStop = function() {
if (this.m_nCurrentStep <= 0) this.showToast("Vui lòng click play"); else if (1 === this.m_nCurrentStep) this.showToast("Chưa sang lượt mới"); else {
this.btnNewTurn.interactable = !1;
this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
this.m_nStepType = s.CaoThapConst.StepType.STOP;
this.SetBetHiLo();
this.showResult();
}
};
e.prototype.showToast = function(t) {
this.lblToast.string = t;
var e = this.lblToast.node.parent;
e.stopAllActions();
e.active = !0;
e.opacity = 0;
e.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(2), cc.fadeOut(.2), cc.callFunc(function() {
e.active = !1;
})));
};
var n;
e._instance = null;
a([ u(cc.SpriteAtlas) ], e.prototype, "sprAtlasCards", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "sprCardBack", void 0);
a([ u(cc.Node) ], e.prototype, "NodeActiveAce", void 0);
a([ u(cc.Toggle) ], e.prototype, "BtnBet", void 0);
a([ u(cc.Label) ], e.prototype, "lblJackpot", void 0);
a([ u(cc.Label) ], e.prototype, "lblSession", void 0);
a([ u(cc.Label) ], e.prototype, "lblUp", void 0);
a([ u(cc.Label) ], e.prototype, "lblCurrent", void 0);
a([ u(cc.Label) ], e.prototype, "lblDown", void 0);
a([ u(cc.Label) ], e.prototype, "lblStatus", void 0);
a([ u(cc.Label) ], e.prototype, "lblTime", void 0);
a([ u(cc.Button) ], e.prototype, "btnNewTurn", void 0);
a([ u(cc.Button) ], e.prototype, "btnClose", void 0);
a([ u(cc.Button) ], e.prototype, "btnPlay", void 0);
a([ u(cc.Button) ], e.prototype, "btnUp", void 0);
a([ u(cc.Button) ], e.prototype, "btnDown", void 0);
a([ u(cc.Sprite) ], e.prototype, "sprCard", void 0);
a([ u(cc.Label) ], e.prototype, "lblToast", void 0);
a([ u(cc.Label) ], e.prototype, "lblWinCoin", void 0);
a([ u([ cc.SpriteFrame ]) ], e.prototype, "sprBtn", void 0);
return n = a([ h ], e);
}(cc.Component);
n.default = C;
cc._RF.pop();
}, {
"../../framework/common/Tween": void 0,
"../../framework/common/Utils": void 0,
"./CaoThap.Const": "CaoThap.Const",
"./CaoThap.NetworkClient": "CaoThap.NetworkClient"
} ],
"CaoThap.NetworkClient": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fa2d0g6TsBJbJe9NzXNT12W", "CaoThap.NetworkClient");
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
var r = t("./CaoThap.Const"), s = t("./CaoThap.MainGame"), c = t("./CaoThap.VinhDanh"), l = t("./CaoThap.History"), p = cc._decorator, h = p.ccclass, u = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
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
url: "https://hilo." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "miniGameHub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
ip: "http://18.138.207.162:9001/signalr/negotiate"
};
cc.systemEvent.off(r.CaoThapConst.ON_CAOTHAP_SOCKET, this.onResponeData, this);
cc.systemEvent.on(r.CaoThapConst.ON_CAOTHAP_SOCKET, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(r.CaoThapConst.ON_CAOTHAP_SOCKET, t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.ZLog.log("=====================CONNECT WS TX===============================");
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.isConnect || this.connect();
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
if ("open" == t.s || "reconnect" == t.s || "1" == t.s) if (this.isConnect) this.sendSignalR("GetAccountInfoCardSlot", [ 1 ]); else {
this.isConnect = !0;
this.connectSuccess();
this.sendSignalR("GetAccountInfoCardSlot", []);
}
if (t.R < 0) switch (t.R) {
case -207:
lngui.UITextManager.showCenterNotification("Đã hết thời gian đặt cửa");
break;

case -208:
lngui.UITextManager.showCenterNotification("Không thể đặt cả 2 cửa trong 1 phiên");
break;

case -212:
case -213:
lngui.UITextManager.showCenterNotification("Giá trị nhập không hợp lệ");
break;

case -232:
lngui.UITextManager.showCenterNotification("Định dạng dữ liệu lỗi");
break;

case -99:
lngui.UITextManager.showCenterNotification("Lỗi hệ thống");
break;

case -102:
lngui.UITextManager.showCenterNotification("Access Token không hợp lệ");
break;

case -51:
lngui.UITextManager.showCenterNotification("Số dư không đủ");
break;

case -52:
lngui.UITextManager.showCenterNotification("Vui lòng bảo mật tài khoản trước khi cược");
break;

case -48:
lngui.UITextManager.showCenterNotification("Game đã bị khóa, vui lòng mở khóa để tiếp tục giao dịch");
break;

default:
lngui.UITextManager.showCenterNotification("Đặt cửa thất bại");
}
if (t.M && Array.isArray(t.M) && 0 != t.M.length && t.M != []) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
switch (o.M) {
case "resultCardSlotAccountInfo":
s.default.instance.CaoThapAccountInfo(i);
break;

case "jackpotCardSlot":
s.default.instance.UpdateJackpot(i);
break;

case "resultCardSlotSetBet":
s.default.instance.resultCaoThapBet(i);
break;

case "cardSlotAccountHistory":
l.default.instance.showAccountHistoryCaoThap(i);
break;

case "cardSlotTopWinner":
c.default.instance.showTopAccountsCaoThap(i);
}
}
}
};
e.prototype.pingPong = function() {};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(r.CaoThapConst.ON_CAOTHAP_SOCKET, this.onResponeData, this);
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
return n = a([ h ], e);
}(cc.Component));
n.default = u;
cc._RF.pop();
}, {
"./CaoThap.Const": "CaoThap.Const",
"./CaoThap.History": "CaoThap.History",
"./CaoThap.MainGame": "CaoThap.MainGame",
"./CaoThap.VinhDanh": "CaoThap.VinhDanh"
} ],
"CaoThap.VinhDanh": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c9fadLXQIRD+6urIN+yzXI0", "CaoThap.VinhDanh");
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
var r = t("./CaoThap.NetworkClient"), s = t("./CaoThap.Const"), c = cc._decorator, l = c.ccclass, p = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.template = null;
e.content = null;
e.spfHuanChuong = [];
e.FontTop = null;
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
r.default.instance.sendSignalR("GetTopAccounts", [ s.CaoThapConst.BetType.BET_GOLD, s.CaoThapConst.GameID.CARD_SLOT, 10 ]);
};
e.prototype.showTopAccountsCaoThap = function(t) {
if (t.length) for (var e = t.length, n = 0; n < e; n++) {
var o, i = t[n], a = i.UserFullName, r = i.PrizeValue, c = cc.instantiate(this.template);
switch (i.RoomID) {
case 1:
o = "1.000";
break;

case 2:
o = "10.000";
break;

case 3:
o = "50.000";
break;

case 4:
o = "100.000";
break;

case 5:
o = "500.000";
}
c.active = !0;
c.position = new cc.Vec3(0, 0, 0);
if (0 == n) {
c.getChildByName("txtHang").active = !1;
c.getChildByName("txtTenTaiKhoan").color = cc.color(255, 0, 235);
c.getChildByName("txtTienThang").color = cc.color(255, 0, 235);
c.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).font = this.FontTop;
console.log(c.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).font.name);
c.getChildByName("txtTienThang").getComponent(cc.Label).font = this.FontTop;
c.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).fontSize = 30;
c.getChildByName("txtTienThang").getComponent(cc.Label).fontSize = 30;
} else if (1 == n) {
c.getChildByName("txtHang").active = !1;
c.getChildByName("txtTenTaiKhoan").color = cc.color(75, 255, 255);
c.getChildByName("txtTienThang").color = cc.color(75, 255, 255);
c.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).font = this.FontTop;
c.getChildByName("txtTienThang").getComponent(cc.Label).font = this.FontTop;
c.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).fontSize = 28;
c.getChildByName("txtTienThang").getComponent(cc.Label).fontSize = 28;
} else if (2 == n) {
c.getChildByName("txtHang").active = !1;
c.getChildByName("txtTenTaiKhoan").color = cc.Color.ORANGE;
c.getChildByName("txtTienThang").color = cc.Color.ORANGE;
c.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).font = this.FontTop;
c.getChildByName("txtTienThang").getComponent(cc.Label).font = this.FontTop;
c.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).fontSize = 26;
c.getChildByName("txtTienThang").getComponent(cc.Label).fontSize = 26;
} else {
c.getChildByName("txtHang").active = !0;
c.getChildByName("txtHang").getComponent(cc.Label).string = "" + (n + 1);
}
c.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = a;
c.getChildByName("txtPhong").getComponent(cc.Label).string = o;
c.getChildByName("txtTienThang").getComponent(cc.Label).string = s.CaoThapConst.formatNumber(r);
c.getChildByName("line").active = !(n % 2);
this.content.addChild(c);
}
};
var n;
e._instance = null;
a([ p(cc.Node) ], e.prototype, "template", void 0);
a([ p(cc.Node) ], e.prototype, "content", void 0);
a([ p([ cc.SpriteFrame ]) ], e.prototype, "spfHuanChuong", void 0);
a([ p(cc.Font) ], e.prototype, "FontTop", void 0);
return n = a([ l ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"./CaoThap.Const": "CaoThap.Const",
"./CaoThap.NetworkClient": "CaoThap.NetworkClient"
} ]
}, {}, [ "CaoThap.Const", "CaoThap.History", "CaoThap.MainGame", "CaoThap.NetworkClient", "CaoThap.VinhDanh" ]);