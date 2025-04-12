window.__require = function t(e, n, o) {
function i(c, a) {
if (!n[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!a && p) return p(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var l = n[c] = {
exports: {}
};
e[c][0].call(l.exports, function(t) {
return i(e[c][1][t] || t);
}, l, l.exports, t, e, n, o);
}
return n[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < o.length; c++) i(o[c]);
return i;
}({
AutoScroll: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "781548XAiZBNp1chTLEyRwr", "AutoScroll");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pageView = null;
e.autoScrollDuration = 2;
e.autoScrollSpeed = 200;
return e;
}
e.prototype.onLoad = function() {
if (this.pageView) {
this.pageView.scrollEvents = !0;
this.pageView.scrollDuration = this.autoScrollDuration;
this.pageView.autoScrollSpeed = this.autoScrollSpeed;
this.pageView.scrollToPage(0, this.autoScrollDuration);
}
};
r([ s(cc.PageView) ], e.prototype, "pageView", void 0);
r([ s ], e.prototype, "autoScrollDuration", void 0);
r([ s ], e.prototype, "autoScrollSpeed", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
BannerPromotion: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6e4091lTYFCTpNS41XbeME3", "BannerPromotion");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ a ], e);
}(lngui.UIPopup));
n.default = s;
cc._RF.pop();
}, {} ],
BetTX: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1cdb7vo8odKYLfIyfp3s/FI", "BetTX");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameID = c.GAME_IDS.NONE;
e.lbJackpot1 = null;
e.lbJackpot2 = null;
e.lbJackpot3 = null;
return e;
}
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.updateJackpot = function() {
var t, e = this;
c.LobbyConst.slotByKeys.forEach(function(n, o) {
o != e.gameID || (t = n);
});
if (t && 1236 != this.gameID) {
this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t.TotalBetValue1, 2);
this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t.TotalBetValue2, 2);
this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t.JackpotFund, 2);
}
if (1236 == this.gameID) {
this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t.TotalBetXiu, 2);
this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t.TotalBetTai, 2);
this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t.JackpotFund, 2);
}
};
r([ l({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot1", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot2", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot3", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
BundleMiniGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d7ae8W+pkhKN71C0SrSO2su", "BundleMiniGame");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.linkUrl = "";
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
e.gameID = c.GAME_IDS.NONE;
e.isTest = !1;
e.numOfClick = 10;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
};
e.prototype.onFuturePrefabLoadDone = function(t) {
var e = this;
if (!cc.Canvas.instance.node.getChildByName(this.prefabMainNameURL)) {
lngui.UIWindowManager.instance.showWindowFromPrefab(t, function(t) {
t.node.name = e.prefabMainNameURL;
});
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS);
}
};
r([ p(cc.String) ], e.prototype, "linkUrl", void 0);
r([ p(cc.String) ], e.prototype, "bundleName", void 0);
r([ p(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ p(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ p(cc.Boolean) ], e.prototype, "isClicked", void 0);
r([ p({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTest", void 0);
r([ p({
visible: function() {
return this.isTest;
}
}) ], e.prototype, "numOfClick", void 0);
return r([ s ], e);
}(lngui.BundleDownLoad);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
BundleSceneGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "19083XsaEZMx7wDy6oqmR1j", "BundleSceneGame");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.linkUrl = "";
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
e.gameID = c.GAME_IDS.NONE;
e.isTest = !1;
e.numOfClick = 10;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
};
e.prototype.onFuturePrefabLoadDone = function(t) {
lngui.UIScreenManager.instance.pushScreen(t);
};
r([ p(cc.String) ], e.prototype, "linkUrl", void 0);
r([ p(cc.String) ], e.prototype, "bundleName", void 0);
r([ p(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ p(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ p(cc.Boolean) ], e.prototype, "isClicked", void 0);
r([ p({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTest", void 0);
r([ p({
visible: function() {
return this.isTest;
}
}) ], e.prototype, "numOfClick", void 0);
return r([ s ], e);
}(lngui.BundleDownLoad);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
CapchaReal: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d034dREc+xAgbxbpKp4MHg1", "CapchaReal");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.capcha = null;
return e;
}
e.prototype.start = function() {
this.sendGetCaptcha("https://gc-api.tieusi.online/789captcha");
};
e.prototype.sendGetCaptcha = function(t) {
var e = this;
lngui.Https.get(t, function(t) {
var n = t.data.image;
n = n.replace(/\r\n/g, "");
e.loadImgBinary(n);
});
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 130;
n.height = 60;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.capcha.node.active = !0;
o.capcha.spriteFrame = e;
};
n.src = e;
};
r([ s(cc.Sprite) ], e.prototype, "capcha", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
CapchaZ: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ce052fYL1H45r8huNtFn/M", "CapchaZ");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = {
Login: "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/Captcha/Get?length=3&width=90&height=36",
Telco: ""
}, a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
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
var t = c.Login;
this.isTelco && (t = c.Telco);
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
lngui.Https.get(t, function(t) {
var n = t;
e.capchaId = n[0];
var o = n[1];
o = o.replace(/\r\n/g, "");
e.loadImgBinary(o);
});
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 130;
n.height = 60;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.capcha.node.active = !0;
o.capcha.spriteFrame = e;
};
n.src = e;
};
r([ p(cc.Sprite) ], e.prototype, "capcha", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTelco", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
EventEDB: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "380ffD+S4FA+ZeF4/5i+Dl+", "EventEDB");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.displayLabel = null;
e.editBox = null;
e.Type = "";
return e;
}
e.prototype.onLoad = function() {
this.checkOrientation();
window.addEventListener("orientationchange", this.checkOrientation.bind(this));
window.addEventListener("resize", this.checkOrientation.bind(this));
this.editBox.node.on("editing-did-began", this.onEdbStart, this);
this.editBox.node.on("text-changed", this.onTextChanged, this);
this.editBox.node.on("editing-did-ended", this.onEdbDone, this);
};
e.prototype.checkOrientation = function() {
var t = 90 === window.orientation || -90 === window.orientation || window.innerWidth > window.innerHeight;
cc.sys.isBrowser && cc.sys.OS_IOS && cc.sys.isMobile ? this.displayLabel.node.active = !t : this.displayLabel.node.active = !1;
};
e.prototype.onTextChanged = function(t) {
var e = t.string;
"password" == this.Type ? this.displayLabel.string = e.replace(/./g, "*") : this.displayLabel.string = e;
};
e.prototype.onEdbStart = function() {
this.checkOrientation();
};
e.prototype.onEdbDone = function() {
this.displayLabel.node.active = !1;
};
e.prototype.onDestroy = function() {
window.removeEventListener("orientationchange", this.checkOrientation.bind(this));
window.removeEventListener("resize", this.checkOrientation.bind(this));
};
r([ s(cc.Label) ], e.prototype, "displayLabel", void 0);
r([ s(cc.EditBox) ], e.prototype, "editBox", void 0);
r([ s ], e.prototype, "Type", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
ForgetPassCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "53d8e/wmD9P54A6oSlG7fWr", "ForgetPassCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nStep1 = null;
e.nStep2 = null;
e.ebAccount = null;
e.ebPhoneNumber = null;
e.btnGetOtp = null;
e.edbOTP = null;
e.edbCaptcha = null;
e.UICaptcha = null;
e.txtNewPass = null;
e.txtReNewPass = null;
return e;
}
e.prototype.onLoad = function() {
this.nStep1.active = !0;
this.nStep2.active = !1;
};
e.prototype.onContinueClicked = function() {
if (this.ebAccount.string.length < 6) lngui.UIPopupManager.instance.showPopup("Tên đăng nhập không đúng!"); else if (this.ebPhoneNumber.string.length < 10) lngui.UIPopupManager.instance.showPopup("Số điện thoại không đúng!"); else {
this.nStep1.active = !1;
this.nStep2.active = !0;
}
};
e.prototype.onGetOTPClicked = function() {
if (this.ebAccount.string.length < 6) lngui.UIPopupManager.instance.showPopup("Tên đăng nhập không đúng!"); else if (this.ebPhoneNumber.string.length < 10) lngui.UIPopupManager.instance.showPopup("Số điện thoại không đúng!"); else {
this.btnGetOtp.interactable = !1;
this.btnGetOtp.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
c.LobbyConst.timerSMS--;
if (c.LobbyConst.timerSMS <= 0) {
this.btnGetOtp.interactable = !0;
c.LobbyConst.timerSMS = 30;
this.btnGetOtp.node.stopAllActions();
}
}, this)).repeatForever());
lngui.UIWaitingLayout.showWaiting();
var t = {
AccountName: this.ebAccount.string,
Mobile: this.ebPhoneNumber.string
}, e = c.LobbyConst.API.URL + c.LobbyConst.API.OTP_RESET_PASSWORD, n = this, o = cc.loader.getXMLHttpRequest();
o.onreadystatechange = function() {
lngui.UIWaitingLayout.hideWaiting();
if (4 == o.readyState) if (200 == o.status) {
var t = JSON.parse(o.responseText);
cc.log("otppp ====> pass: ", t);
n.btnGetOtp.interactable = !0;
c.LobbyConst.timerSMS = 30;
n.btnGetOtp.node.stopAllActions();
lngui.UIPopupManager.instance.showPopup("OTP đã gửi về số điện thoại của bạn");
n.onContinueClicked();
} else o.responseText.length > 0 && lngui.UIPopupManager.instance.showPopup(o.responseText);
};
o.ontimeout = function() {
lngui.UIWaitingLayout.hideWaiting();
};
o.onerror = function() {
lngui.UIWaitingLayout.hideWaiting();
};
o.timeout = 3e3;
o.open("POST", e, !0);
o.setRequestHeader("Content-Type", "application/json");
o.withCredentials = !0;
o.send(JSON.stringify(t));
}
};
e.prototype.onBackClicked = function() {
this.btnGetOtp.interactable = !0;
this.nStep1.active = !0;
this.nStep2.active = !1;
};
e.prototype.onChangePassClicked = function() {
var t = this.edbOTP.string.trim(), e = this.txtNewPass.string, n = this.txtReNewPass.string, o = this.edbCaptcha.string;
if (0 != t.length) if (0 != e.length) if (e === n) if (0 != o.length) {
lngui.UIWaitingLayout.showWaiting();
var i = {
AccountName: this.ebAccount.string,
Mobile: this.ebPhoneNumber.string,
Token: this.UICaptcha.getComponent(a.default).getCapChaId(),
Captcha: this.edbCaptcha.string,
OtpType: 1,
NewPassword: e,
Otp: t
};
cc.log(JSON.stringify(i));
var r = c.LobbyConst.API.URL + c.LobbyConst.API.RESET_PASSWORD, s = this, p = cc.loader.getXMLHttpRequest();
p.onreadystatechange = function() {
lngui.UIWaitingLayout.hideWaiting();
if (4 == p.readyState) {
s.onRefreshCaptchaClicked();
if (200 == p.status) {
s.hide();
var t = JSON.parse(p.responseText);
cc.log("change pass: ", t);
lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu thành công");
} else p.responseText.length > 0 ? lngui.UIPopupManager.instance.showPopup(p.responseText) : lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
}
};
p.ontimeout = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
};
p.onerror = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
};
p.timeout = 3e4;
p.open("POST", r, !0);
p.setRequestHeader("Content-Type", "application/json");
p.withCredentials = !0;
p.send(JSON.stringify(i));
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận"); else lngui.UIPopupManager.instance.showPopup("Nhập lại mật khẩu mới không đúng"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu mới"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
r([ l(cc.Node) ], e.prototype, "nStep1", void 0);
r([ l(cc.Node) ], e.prototype, "nStep2", void 0);
r([ l(cc.EditBox) ], e.prototype, "ebAccount", void 0);
r([ l(cc.EditBox) ], e.prototype, "ebPhoneNumber", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtp", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTP", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(a.default) ], e.prototype, "UICaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtNewPass", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtReNewPass", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIAccountChangePass: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "af430Za50VKKrBLoGZg4QQA", "GUIAccountChangePass");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UICaptcha = null;
e.txtOldPass = null;
e.txtNewPass = null;
e.txtReNewPass = null;
e.txtCaptchaChangePass = null;
e.nodeStep1 = null;
e.nodeStep2 = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
e.prototype.onChangePass = function() {
var t = this, e = this.txtOldPass.string, n = this.txtNewPass.string, o = this.txtReNewPass.string, i = this.txtCaptchaChangePass.string;
if (0 != e.length) if (0 != n.length) if (n === o) if (0 != i.length) {
var r = {
sourceId: c.LobbyConst.platform,
newPass: window.md5(n),
oldPass: window.md5(e),
captchaText: i,
captchaToken: this.UICaptcha.getCapChaId()
};
s.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.CHANGE_PASS, r, function(e, n) {
if (e >= 200 && e < 400) {
var o = n;
if (null != o) if (null != o.IsOtp && 1 == o.IsOtp) lngui.UIPopupManager.instance.showPopupFromPrefab(lngui.CommonAssetDefined.instance.getPrefabByName("GUI_OTP"), function(t) {
t.initData(o.OtpToken, Global.SERVICEID.OTP_SERVICE_CHANGE_PASSWORD);
}); else {
var i = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn cần đăng ký OTP để thực hiện chức năng này.\nBạn muốn đăng ký OTP không?", i);
t.clearInput();
}
} else {
t.clearInput();
t.onRefreshCaptchaClicked();
lngui.UIPopupManager.instance.showPopup(n);
}
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận"); else lngui.UIPopupManager.instance.showPopup("Nhập lại mật khẩu mới không đúng"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu mới"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu cũ");
};
e.prototype.clearInput = function() {
this.onRefreshCaptchaClicked();
this.txtOldPass.string = "";
this.txtNewPass.string = "";
this.txtReNewPass.string = "";
this.txtCaptchaChangePass.string = "";
};
r([ u(a.default) ], e.prototype, "UICaptcha", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtOldPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtNewPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtReNewPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtCaptchaChangePass", void 0);
r([ u(cc.Node) ], e.prototype, "nodeStep1", void 0);
r([ u(cc.Node) ], e.prototype, "nodeStep2", void 0);
return r([ l ], e);
}(lngui.UIPopup);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIAccountDetail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b4aaemL11lLvoXxIBnIZrTq", "GUIAccountDetail");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblNickname = null;
e.lbCoin = null;
e.lblPhone = null;
e.lblDiemVip = null;
e.lblLevel = null;
e.avatar = null;
e.listAvt = [];
e.btnSms = null;
e.PrefabKet = null;
return e;
}
e.prototype.onLoad = function() {
this.setData();
};
e.prototype.setData = function() {
this.lblNickname.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.lbCoin.string = fgui.StringUtils.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
lngui.UserManager.instance.mainUserInfo.Mobile ? this.lblPhone.string = a.MVUtils.hideMiddle(lngui.UserManager.instance.mainUserInfo.Mobile, 2, 3) : this.lblPhone.string = "";
this.lblDiemVip.string = lngui.UserManager.instance.mainUserInfo.VipPoint + "";
this.lblLevel.string = lngui.UserManager.instance.mainUserInfo.Level + "";
this.btnSms.active = !(this.lblPhone.string.length > 0);
};
e.prototype.openGuideOTP = function() {
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
};
e.prototype.onLogoutClicked = function() {
var t = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn có chắc chắn muốn thoát khỏi trò chơi?", t);
};
e.prototype.onbtnket = function() {
lngui.UserManager.instance.mainUserInfo.Mobile ? lngui.UIPopupManager.instance.showPopupFromPrefab(this.PrefabKet) : lngui.UIPopupManager.instance.showPopup("Bạn cần đăng ký bảo mật để tiếp tục");
};
r([ l(cc.Label) ], e.prototype, "lblNickname", void 0);
r([ l(cc.Label) ], e.prototype, "lbCoin", void 0);
r([ l(cc.Label) ], e.prototype, "lblPhone", void 0);
r([ l(cc.Label) ], e.prototype, "lblDiemVip", void 0);
r([ l(cc.Label) ], e.prototype, "lblLevel", void 0);
r([ l(cc.Sprite) ], e.prototype, "avatar", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "listAvt", void 0);
r([ l(cc.Node) ], e.prototype, "btnSms", void 0);
r([ l(cc.Prefab) ], e.prototype, "PrefabKet", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountMail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7f47c5fYaZANqorDhathbD5", "GUIAccountMail");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mailTemplate = null;
e.mailList = null;
e.mailDetail = null;
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
this.mailDetail.active = !1;
this.requestMail();
};
e.prototype.onDisable = function() {};
e.prototype.requestMail = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_LIST_MAIL;
a.MVUtils.post(e, {
MailType: 2,
CurrentPage: 1,
PageSize: 25
}, function(e, n) {
e >= 200 && e < 400 ? t.initPanelInbox(n.List) : console.log("err", n);
});
};
e.prototype.initPanelInbox = function(t) {
console.log(t);
if (null != t && !(t.length <= 0)) {
this.mailList.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.mailTemplate);
n.getComponent("ItemMail").initData(t[e]);
n.getComponent(cc.Button).clickEvents[0].customEventData = t[e];
n.getChildByName("btnDelete").getComponent(cc.Button).clickEvents[0].customEventData = t[e].ID;
this.mailList.addChild(n);
}
}
};
e.prototype.initMailContent = function(t) {
this.mailDetail.getChildByName("lblTime").getComponent(cc.Label).string = a.MVUtils.formatDateTime(t.CreatedTime);
this.mailDetail.getChildByName("lblTitle").getComponent(cc.Label).string = t.Title;
this.mailDetail.getChildByName("lblContent").getComponent(cc.Label).string = t.Content;
this.mailDetail.getChildByName("btnUse").active = !1;
};
e.prototype.onActBack = function() {
this.mailList.active = !0;
this.mailDetail.active = !1;
};
var n;
e._instance = null;
r([ l(cc.Prefab) ], e.prototype, "mailTemplate", void 0);
r([ l(cc.Node) ], e.prototype, "mailList", void 0);
r([ l(cc.Node) ], e.prototype, "mailDetail", void 0);
return n = r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSafe: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e9512sLjkFEb7wom0HBexVs", "GUIAccountSafe");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.panelOTPSafe = null;
e.cbxFreeze = null;
e.cbxOpenFreeze = null;
e.lblBalance = null;
e.lblFreezeBalance = null;
e.edbMoneyFreeze = null;
e.edbOTPSafeStep2 = null;
e.btnAccept = null;
e.btnGetOtpFreezeSafe = null;
e.frozenVal = 0;
return e;
}
e.prototype.onEnable = function() {
this.panelOTPSafe.active = !1;
this.edbMoneyFreeze.string = "";
this.edbOTPSafeStep2.string = "";
this.btnGetOtpFreezeSafe.interactable = !0;
this.cbxFreeze.interactable = !1;
this.getFrozenValue();
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbMoneyFreeze.string);
t = Math.abs(t);
this.edbMoneyFreeze.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbMoneyFreeze.focus();
};
e.prototype.getFrozenValue = function() {
var t = this;
lngui.UIWaitingLayout.showWaiting();
var e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_FROZEB, n = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
token: lngui.UserManager.instance.mainUserInfo.GameToken
}, o = lngui.Https.packDataForRequest(n);
lngui.Https.getRaw(e + o, function(e, n) {
console.log("getFrozenValue ===" + n);
if (e >= 200 && e < 400) {
lngui.UIWaitingLayout.hideWaiting();
var o = JSON.parse(n), i = o.FrozenValue;
t.frozenVal = i;
var r = o.Balance;
t.lblFreezeBalance.string = fgui.StringUtils.formatNumber(i);
t.lblBalance.string = fgui.StringUtils.formatNumber(r);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, r);
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(n);
}
});
};
e.prototype.onClickFreeze = function() {
if (this.cbxFreeze.isChecked) {
this.cbxFreeze.isChecked = !0;
this.cbxOpenFreeze.isChecked = !1;
this.panelOTPSafe.active = !1;
this.cbxFreeze.interactable = !1;
this.cbxOpenFreeze.interactable = !0;
}
};
e.prototype.onClickOpenFreeze = function() {
if (this.cbxOpenFreeze.isChecked) {
this.cbxOpenFreeze.isChecked = !0;
this.cbxFreeze.isChecked = !1;
this.panelOTPSafe.active = !0;
this.cbxFreeze.interactable = !0;
this.cbxOpenFreeze.interactable = !1;
}
};
e.prototype.acceptFreeze = function() {
var t = this;
this.btnAccept.interactable = !1;
if (0 != this.edbMoneyFreeze.string.length) {
var e = this.toNumber(this.edbMoneyFreeze.string), n = this.cbxFreeze.isChecked ? c.LobbyConst.SETTING_ID.FROZEN : c.LobbyConst.SETTING_ID.UNFROZEN;
if (e <= 0) {
var o = [ lngui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
lngui.UIPopupManager.instance.showPopup("Giá trị Coin phải lớn hơn 0", o);
} else if (e > lngui.UserManager.instance.mainUserInfo.Money && n == c.LobbyConst.SETTING_ID.FROZEN) {
o = [ lngui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
lngui.UIPopupManager.instance.showPopup("Giá trị Coin phải nhỏ hơn hoặc bằng số dư của bạn", o);
} else if (e > this.frozenVal && n == c.LobbyConst.SETTING_ID.UNFROZEN) {
o = [ lngui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
lngui.UIPopupManager.instance.showPopup("Giá trị Coin phải nhỏ hơn hoặc bằng số dư đóng băng của bạn", o);
} else {
lngui.UIWaitingLayout.showWaiting();
var i = c.LobbyConst.API.URL + c.LobbyConst.API.FROZEB, r = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
amount: e,
isFrozen: n,
sourceId: c.LobbyConst.platform,
otp: this.edbOTPSafeStep2.string,
otpType: 1
};
this.executeGETMethod(i, r, function(o, i) {
lngui.UIWaitingLayout.hideWaiting();
if (i >= 200 && i < 400) {
var r = JSON.parse(o), a = r.FrozenValue, s = r.Balance;
t.frozenVal = a;
lngui.UserManager.instance.mainUserInfo.Money = s;
t.lblFreezeBalance.string = fgui.StringUtils.formatNumber(a);
t.lblBalance.string = fgui.StringUtils.formatNumber(s);
t.edbOTPSafeStep2.string = "";
t.edbMoneyFreeze.string = "";
n == c.LobbyConst.SETTING_ID.FROZEN ? lngui.UIPopupManager.instance.showPopup("Bạn đã đóng băng thành công " + e + " Coin") : lngui.UIPopupManager.instance.showPopup("Bạn đã mở băng thành công " + e + " Coin");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, s);
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(o);
}
t.btnAccept.interactable = !0;
});
}
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập số Coin");
};
e.prototype.getOtpFreez = function() {
var t = this;
this.btnGetOtpFreezeSafe.interactable = !1;
this.scheduleOnce(function() {
t.btnGetOtpFreezeSafe.interactable = !0;
}, 3);
var e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_OTP_SMS;
lngui.Https.get(e, function(t) {
if (cc.js.isNumber(t)) {
lngui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
} else lngui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.toNumber = function(t) {
if (t.indexOf(".") >= 0) {
for (var e = t; e.indexOf(".") >= 0; ) e = e.replace(".", "");
return parseInt(e);
}
return parseInt(t);
};
e.prototype.executeGETMethod = function(t, e, n) {
e || (e = {});
if (lngui.UserManager.instance.mainUserInfo.GameToken) {
e.token = void 0;
e = Object.assign(e, {
token: lngui.UserManager.instance.mainUserInfo.GameToken
});
}
var o = t + c.getStringBodyByObject(e), i = cc.loader.getXMLHttpRequest();
i.onreadystatechange = function() {
4 === i.readyState && (200 == i.status ? n(i.responseText, i.status) : i.responseText.length > 0 ? n(i.responseText, i.status) : n("error_code : " + i.status, null));
};
i.ontimeout = function() {
n("Hệ thống không phản hồi.", null);
};
i.timeout = 3e4;
i.open("GET", o, !0);
i.setRequestHeader("Content-Type", "application/json");
i.withCredentials = !0;
i.send();
};
r([ l(cc.Node) ], e.prototype, "panelOTPSafe", void 0);
r([ l(cc.Toggle) ], e.prototype, "cbxFreeze", void 0);
r([ l(cc.Toggle) ], e.prototype, "cbxOpenFreeze", void 0);
r([ l(cc.Label) ], e.prototype, "lblBalance", void 0);
r([ l(cc.Label) ], e.prototype, "lblFreezeBalance", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbMoneyFreeze", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPSafeStep2", void 0);
r([ l(cc.Button) ], e.prototype, "btnAccept", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpFreezeSafe", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSecurityNew: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "27a50sSsyhLlandscRFb+A+", "GUIAccountSecurityNew");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.NodeFAQ = null;
e.NodeRegOtp = null;
e.NodeOtpActive = null;
e.edbOtp = null;
e._phoneNumber = "";
e.g_isOTP = !1;
return e;
}
e.prototype.onEnable = function() {
if (0 == lngui.UserManager.instance.mainUserInfo.IsMobileActived) {
this.NodeRegOtp.active = !0;
this.NodeOtpActive.active = !1;
} else {
this.NodeRegOtp.active = !1;
this.NodeOtpActive.active = !0;
}
};
e.prototype.registerOTP = function() {
var t = this, e = this.edbOtp.string;
if (0 != e.length) {
var n = {
AccountName: lngui.UserManager.instance.mainUserInfo.UserName,
AccountId: lngui.UserManager.instance.mainUserInfo.AccountID,
Type: 1,
SecureCode: e,
Mobile: 123123
};
a.MVUtils.post2(c.LobbyConst.API.URL + c.LobbyConst.API.REG_MOBILE, n, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UserManager.instance.mainUserInfo.IsMobileActived = !0;
lngui.UIPopupManager.instance.showPopup(n);
t.NodeRegOtp.active = !1;
t.NodeOtpActive.active = !0;
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.deletaOTP = function() {
var t = this;
if (0 != this.edbOtp.string.length) {
var e = {
AccountName: lngui.UserManager.instance.mainUserInfo.UserName,
AccountId: lngui.UserManager.instance.mainUserInfo.AccountID,
Type: 2,
SecureCode: 987654,
Mobile: 123123
};
a.MVUtils.post2(c.LobbyConst.API.URL + c.LobbyConst.API.REG_MOBILE, e, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UserManager.instance.mainUserInfo.IsMobileActived = !1;
lngui.UIPopupManager.instance.showPopup(n);
t.NodeRegOtp.active = !0;
t.NodeOtpActive.active = !1;
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.touchGetOtpRegisterPhone = function() {};
e.prototype.btnshowfaq = function() {
this.NodeFAQ.active = !0;
};
e.prototype.btnhidefaq = function() {
this.NodeFAQ.active = !0;
};
r([ l(cc.Node) ], e.prototype, "NodeFAQ", void 0);
r([ l(cc.Node) ], e.prototype, "NodeRegOtp", void 0);
r([ l(cc.Node) ], e.prototype, "NodeOtpActive", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOtp", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSecurity: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "45a32kM0iRKY6Kqe7N+mRwQ", "GUIAccountSecurity");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblPhoneSMSPlus = null;
e.lblAccount = null;
e.lblTitleSMSPlus = null;
e.edbPhoneSMSPlus = null;
e.edbOTPRegisterAndDel = null;
e.panelRegisterSMSPlus = null;
e.btnGetOtpDeletePhone = null;
e.btnGetOtpRegisterPhone = null;
e.btnRegisterSMSPlus = null;
e.btnRemovePhoneSMSPlus = null;
e.btnUpdatePhoneSMSPlus = null;
e.btnBack = null;
e.btnDeleteMobile = null;
e._phoneNumber = "";
e.g_isOTP = !1;
return e;
}
e.prototype.onEnable = function() {
this.lblAccount.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.setInfo();
};
e.prototype.setInfo = function() {
this.g_isOTP = lngui.UserManager.instance.mainUserInfo.IsMobileActived;
this._phoneNumber = lngui.UserManager.instance.mainUserInfo.Mobile || 0;
this.lblPhoneSMSPlus.string = this._phoneNumber;
this.g_isOTP ? this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_INFO) : this._phoneNumber && this._phoneNumber.length > 0 ? this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_REGISTER) : this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_INFO);
};
e.prototype.showPanelSMSPlus = function(t) {
this.panelRegisterSMSPlus.active = !1;
this.edbOTPRegisterAndDel.string = "";
if (t == c.LobbyConst.SETTING_ID.SMSPLUS_DEL_PHONE) {
this.panelRegisterSMSPlus.active = !0;
this.lblTitleSMSPlus.string = "HỦY SỐ ĐIỆN THOẠI";
this.btnGetOtpDeletePhone.node.active = !0;
this.btnGetOtpRegisterPhone.node.active = !1;
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
this.edbPhoneSMSPlus.node.active = !1;
this.btnBack.node.active = !0;
this.btnDeleteMobile.node.active = !0;
this.btnRegisterSMSPlus.node.active = !1;
this.btnRegisterSMSPlus.getComponent(cc.Button).clickEvents[0].customEventData = "3";
} else if (t == c.LobbyConst.SETTING_ID.SMSPLUS_REGISTER) {
this.panelRegisterSMSPlus.active = !0;
this.lblTitleSMSPlus.string = "ĐĂNG KÝ BẢO MẬT OTP";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
this.btnGetOtpDeletePhone.node.active = !1;
this.btnGetOtpRegisterPhone.node.active = !0;
this.edbPhoneSMSPlus.node.active = !1;
this.btnBack.node.active = !1;
this.btnDeleteMobile.node.active = !1;
this.btnRegisterSMSPlus.node.active = !0;
} else if (t == c.LobbyConst.SETTING_ID.SMSPLUS_INFO) {
this.btnBack.node.active = !1;
this.btnDeleteMobile.node.active = !1;
if (this.g_isOTP) {
this.lblTitleSMSPlus.string = "THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = a.MVUtils.hideMiddle(this._phoneNumber, 2, 3);
this.edbPhoneSMSPlus.node.active = !1;
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
} else if (this._phoneNumber && this._phoneNumber.length > 0) {
this.lblTitleSMSPlus.string = "THÔNG TIN BẢO MẬT OTP";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.edbPhoneSMSPlus.node.active = !1;
} else {
this.lblTitleSMSPlus.string = "CẬP NHẬT THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = "";
this.edbPhoneSMSPlus.node.active = !0;
this.edbPhoneSMSPlus.string = "";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !0;
}
} else if (999 == t) {
this.lblTitleSMSPlus.string = "CẬP NHẬT THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = "";
this.edbPhoneSMSPlus.node.active = !0;
this.edbPhoneSMSPlus.string = "";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !0;
}
};
e.prototype.touchUpdate = function() {
var t = this, e = this.edbPhoneSMSPlus.string;
if (e.length < 10) lngui.UIPopupManager.instance.showPopup("Số điện thoại không hợp lệ!"); else {
var n = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
mobile: e
};
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.UPDATE_MOBILE, n, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UIPopupManager.instance.showPopup("Cập nhật thông tin thành công!");
lngui.UserManager.instance.mainUserInfo.Mobile = n.Mobile;
lngui.UserManager.instance.mainUserInfo.IsMobileActived = n.IsMobileActived;
lngui.UserManager.instance.mainUserInfo.IsOtp = n.IsOTP;
t.setInfo();
} else lngui.UIPopupManager.instance.showPopup(n);
}, !0);
}
};
e.prototype.registerOTP = function(t, e) {
var n = this;
console.log(e);
var o = this.edbOTPRegisterAndDel.string, i = e;
if (0 != o.length) {
var r = {
AccountName: lngui.UserManager.instance.mainUserInfo.UserName,
AccountId: lngui.UserManager.instance.mainUserInfo.AccountID,
Type: parseInt(i),
SecureCode: o,
Mobile: this._phoneNumber
};
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.REG_MOBILE, r, function(t, e) {
if (t >= 200 && t < 400) {
var o = e;
lngui.UserManager.instance.mainUserInfo.Mobile = o.Mobile;
lngui.UserManager.instance.mainUserInfo.IsMobileActived = o.IsMobileActived;
lngui.UserManager.instance.mainUserInfo.IsOtp = o.IsOTP;
n.setInfo();
if (i == c.LobbyConst.SETTING_ID.SMSPLUS_REGISTER_TYPE) {
lngui.UIPopupManager.instance.showPopup("Đăng ký bảo mật thành công!");
n.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_INFO);
} else i == c.LobbyConst.SETTING_ID.SMSPLUS_DEL_OTP_TYPE && a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.DELETE_MOBILE, {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
mobile: lngui.UserManager.instance.mainUserInfo.Mobile
}, function(t, e) {
if (t >= 200 && t < 400) {
var n = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
}) ];
lngui.UIPopupManager.instance.showPopup("Hủy số điện thoại thành công!", n);
} else lngui.UIPopupManager.instance.showPopup(e);
});
} else lngui.UIPopupManager.instance.showPopup(e);
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.touchGetOtpRegisterPhone = function() {};
e.prototype.onShowPanelRemovePhone = function() {
this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_DEL_PHONE);
};
r([ l(cc.Label) ], e.prototype, "lblPhoneSMSPlus", void 0);
r([ l(cc.Label) ], e.prototype, "lblAccount", void 0);
r([ l(cc.Label) ], e.prototype, "lblTitleSMSPlus", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbPhoneSMSPlus", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPRegisterAndDel", void 0);
r([ l(cc.Node) ], e.prototype, "panelRegisterSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpDeletePhone", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpRegisterPhone", void 0);
r([ l(cc.Button) ], e.prototype, "btnRegisterSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnRemovePhoneSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnUpdatePhoneSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnBack", void 0);
r([ l(cc.Button) ], e.prototype, "btnDeleteMobile", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIEventBigBang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "902523ic5hBB4yIcUG7XBpS", "GUIEventBigBang");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c, a, s = t("./ItemGiftBigBang"), p = t("./ItemRankBigBang"), l = t("./MVUtils"), u = cc._decorator, h = u.ccclass, f = u.property;
(function(t) {
t[t.DAY = 0] = "DAY";
t[t.FINAL = 1] = "FINAL";
})(c || (c = {}));
(function(t) {
t[t.RANK = 0] = "RANK";
t[t.GIFT = 1] = "GIFT";
t[t.RULE = 2] = "RULE";
})(a || (a = {}));
var d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemTempleRank = null;
e.itemTempleGift = null;
e.itemTempleDate = null;
e.listView = [];
e.ls_btn_tab_top = [];
e.ls_btn_tab_left = [];
e.lb_me = null;
e.dropDay = null;
e.lb_date = null;
return e;
}
e.prototype.start = function() {
this.itemTempleRank.active = !1;
this.itemTempleGift.active = !1;
this.itemTempleDate.active = !1;
this.lb_me.string = "";
this.lb_date.string = "Hôm nay";
this.loadListDate();
this.onClickTabLeft();
};
e.prototype.loadListRank = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.itemTempleRank).getComponent(p.default);
n.node.parent = this.listView[a.RANK].content;
n.node.active = !0;
n.setInfo(t[e], e + 1);
}
};
e.prototype.loadListGift = function(t) {
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.itemTempleGift).getComponent(s.default);
n.node.parent = this.listView[a.GIFT].content;
n.node.active = !0;
n.setInfo(t[e], e + 1);
}
};
e.prototype.loadListDate = function() {
var t = new Date();
if (t.getDate() > 5) {
this.dropDay.node.height = 250;
this.dropDay.node.y = -150;
} else {
this.dropDay.node.height = 40 * t.getDate();
this.dropDay.node.y = 0 - this.dropDay.node.height / 2 - 25;
}
for (var e = t.getDate(); e >= 1; e--) {
var n = e < 10 ? "0" + e : e, o = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, i = t.getFullYear(), r = "" + i + o + n, c = cc.instantiate(this.itemTempleDate);
c.active = !0;
c.dataDate = r;
c.parent = this.dropDay.content;
c.getComponentInChildren(cc.Label).string = n + "/" + o + "/" + i;
var a = new cc.Component.EventHandler();
a.target = this.node;
a.component = "GUIEventBigBang";
a.handler = "onClickSelectDate";
c.getComponent(cc.Button).clickEvents = [ a ];
}
};
e.prototype.onClickSelectDate = function(t) {
this.listView[a.RANK].content.destroyAllChildren();
var e = t.target.dataDate, n = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetEventRaceVPDaily", o = {
token: lngui.UserManager.instance.mainUserInfo.GameToken,
recallCode: e
};
this.reloadListRank(n, o);
var i = e.slice(0, 4), r = e.slice(4, 6), c = e.slice(6, 8);
new Date().getDate() == parseInt(c) ? this.lb_date.string = "Hôm nay" : this.lb_date.string = c + "/" + r + "/" + i;
this.dropDay.node.active = !1;
};
e.prototype.onClickDropDate = function() {
this.dropDay.node.active = !this.dropDay.node.active;
};
e.prototype.onClickTabTop = function() {
if (this.ls_btn_tab_top[1].isChecked) {
this.lb_date.node.parent.active = !1;
this.listView[a.RANK].content.destroyAllChildren();
var t = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetEventRaceVPMonthly", e = {
token: lngui.UserManager.instance.mainUserInfo.GameToken
};
this.reloadListRank(t, e);
} else {
this.lb_date.node.parent.active = !0;
this.onClickSelectDate({
target: this.dropDay.content.children[0]
}, "");
}
};
e.prototype.reloadListRank = function(t, e) {
var n = this;
l.MVUtils.get(t, e, function(t, e) {
if (t >= 200 && t < 400) {
n.loadListRank(e.LstEventHonors);
null == e.TotalVP ? n.lb_me.string = "Bạn chưa có hạng!" : null == e.TopNo ? n.lb_me.string = "Bạn chưa có hạng!" : n.lb_me.string = "Điểm của bạn <color=yellow>" + e.TotalVP + "</color>   Hạng <color=yellow>" + e.TopNo + "</color>";
} else console.log(e);
});
};
e.prototype.onClickTabLeft = function() {
var t = this;
this.listView[0].node.active = !1;
this.listView[1].node.active = !1;
this.listView[2].node.active = !1;
if (this.ls_btn_tab_left[0].isChecked) {
this.onClickTabTop();
this.listView[0].node.active = !0;
} else if (this.ls_btn_tab_left[1].isChecked) {
this.listView[1].node.active = !0;
this.listView[a.GIFT].content.destroyAllChildren();
var e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetDailyRewardList", n = {
token: lngui.UserManager.instance.mainUserInfo.GameToken
};
l.MVUtils.get(e, n, function(e, n) {
if (e >= 200 && e < 400) {
console.log("-=-=res gift   ", n);
n.List && t.loadListGift(n.List);
} else console.log(n);
});
} else this.listView[2].node.active = !0;
};
r([ f(cc.Node) ], e.prototype, "itemTempleRank", void 0);
r([ f(cc.Node) ], e.prototype, "itemTempleGift", void 0);
r([ f(cc.Node) ], e.prototype, "itemTempleDate", void 0);
r([ f([ cc.ScrollView ]) ], e.prototype, "listView", void 0);
r([ f([ cc.Toggle ]) ], e.prototype, "ls_btn_tab_top", void 0);
r([ f([ cc.Toggle ]) ], e.prototype, "ls_btn_tab_left", void 0);
r([ f(cc.RichText) ], e.prototype, "lb_me", void 0);
r([ f(cc.ScrollView) ], e.prototype, "dropDay", void 0);
r([ f(cc.Label) ], e.prototype, "lb_date", void 0);
return r([ h ], e);
}(lngui.UIPopup);
n.default = d;
cc._RF.pop();
}, {
"./ItemGiftBigBang": "ItemGiftBigBang",
"./ItemRankBigBang": "ItemRankBigBang",
"./MVUtils": "MVUtils"
} ],
GUIEventX3Nap: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e2c7a960IZIcLR8JtQsG2yn", "GUIEventX3Nap");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./ItemNapX3"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.template = null;
e.listView = null;
e.node_progress = null;
e.node_rule = null;
e.ls_btn_tab = [];
return e;
}
e.prototype.onEnable = function() {
var t = this;
this.template.active = !1;
this.listView.content.removeAllChildren();
a.MVUtils.get("https://api.${lngui.ConfigManager.instance.ConfigInfo.Api}/api/Event/GetX3Infor", {}, function(e, n) {
e >= 200 && e < 400 && t.parseData(n);
});
};
e.prototype.parseData = function(t) {
console.log("-=-=parseData ", t);
if (1 == t.ResponseCode) {
for (var e = 0; e < t.List.length; e++) {
var n = cc.instantiate(this.template).getComponent(c.default);
n.node.active = !0;
n.updateInfo(t.List[e]);
n.node.parent = this.listView.content;
}
this.listView.vertical = t.List.length > 3;
}
};
e.prototype.onClickTab = function(t) {
for (var e = 0; e < this.ls_btn_tab.length; e++) {
var n = this.ls_btn_tab[e].children[0];
if (t.target === this.ls_btn_tab[e]) {
n.active = !0;
if (0 === e) {
this.node_progress.active = !0;
this.node_rule.active = !1;
} else {
this.node_progress.active = !1;
this.node_rule.active = !0;
}
} else n.active = !1;
}
};
r([ l(cc.Node) ], e.prototype, "template", void 0);
r([ l(cc.ScrollView) ], e.prototype, "listView", void 0);
r([ l(cc.Node) ], e.prototype, "node_progress", void 0);
r([ l(cc.Node) ], e.prototype, "node_rule", void 0);
r([ l([ cc.Node ]) ], e.prototype, "ls_btn_tab", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"./ItemNapX3": "ItemNapX3",
"./MVUtils": "MVUtils"
} ],
GUIGiftCode: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9be5cKI7zJMq7+CMpvb7Ae2", "GUIGiftCode");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UICaptcha = null;
e.txtGiftCode = null;
e.txtCaptcha = null;
e.imgCaptcha = null;
e._codeType = 1;
return e;
}
e.prototype.initData = function(t, e) {
void 0 === e && (e = null);
this._codeType = c.LobbyConst.SETTING_ID.GIFT_CODE;
null != t && (this._codeType = t);
null != e && (this._uiid = e);
this.init();
};
e.prototype.init = function() {
var t = "";
this._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE && (t = c.LobbyConst.StringDefine.INPUT_GIFT_CODE);
this.txtGiftCode.placeholder = t;
this.onRefreshCaptchaClicked();
};
e.prototype.setGiftcodeText = function(t) {
this.txtGiftCode.string = t;
};
e.prototype.touchBtnGiftcode = function() {
var t, e = this, n = this.txtGiftCode.string;
n = n.replace(" ", "");
var o = this.txtCaptcha.string;
if (n.length <= 0) this._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE ? lngui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.INPUT_GIFT_CODE) : this._codeType == c.LobbyConst.SETTING_ID.VIP_CODE ? lngui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.INPUT_VIP_CODE) : this._codeType == c.LobbyConst.SETTING_ID.OTP && lngui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.INPUT_OTP); else if (o.length <= 0) lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận!"); else {
lngui.UIWaitingLayout.showWaiting();
var i = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
accountName: lngui.UserManager.instance.mainUserInfo.UserName,
nickName: lngui.UserManager.instance.mainUserInfo.NickName,
giftcode: n,
captcha: o,
verifyCaptcha: this.UICaptcha.getCapChaId(),
uiid: this._uiid,
merchantKey: c.LobbyConst.MERCHANT_GIFTCODE.KEY,
merchantId: c.LobbyConst.MERCHANT_GIFTCODE.ID,
sourceId: c.LobbyConst.platform
}, r = c.getStringBodyByObject({
token: lngui.UserManager.instance.mainUserInfo.GameToken
});
t = c.LobbyConst.API.URL + c.LobbyConst.API.GIFT_CODE + r + c.LobbyConst.GATE.URL;
var a = cc.loader.getXMLHttpRequest();
a.onreadystatechange = function() {
if (4 == a.readyState) {
lngui.UIWaitingLayout.hideWaiting();
if (200 == a.status) e._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE && e.onCheckGiftCode(a.responseText); else if (400 == a.status) {
lngui.UIPopupManager.instance.showPopup(a.responseText);
e.onRefreshCaptchaClicked();
} else if (e._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE) {
lngui.UIPopupManager.instance.showPopup("Nhập GiftCode không thành công.\nVui lòng thử lại.");
e.onRefreshCaptchaClicked();
}
}
};
a.ontimeout = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.STR_NETWORK_ERROR);
};
a.onerror = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.STR_NETWORK_ERROR);
};
a.timeout = 3e4;
a.open("POST", t, !0);
a.setRequestHeader("Content-Type", "application/json");
a.withCredentials = !0;
a.send(JSON.stringify(i));
}
};
e.prototype.onCheckGiftCode = function(t) {
if (null != t) {
var e = JSON.parse(t);
if (e.Response >= 0) {
var n = "Chúc mừng bạn đã nhận được\n" + lngui.StringUtils.formatNumber(e.Response);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e.Balance);
var o = [ lngui.PopupAction.make("OK", function() {}) ];
lngui.UIPopupManager.instance.showPopup(n, o);
}
}
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
r([ l(a.default) ], e.prototype, "UICaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtGiftCode", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "imgCaptcha", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIOTP: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a890yymXtHIZDKEQ8N6vs+", "GUIOTP");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtOTP = null;
e.btnGetOtpSms = null;
e.otpToken = null;
e.serviceId = null;
e.otpType = 1;
return e;
}
e.prototype.initData = function(t, e) {
this.otpToken = t;
this.serviceId = e;
this.initUI();
};
e.prototype.initUI = function() {
this.otpType = 1;
};
e.prototype.getOTP = function() {
var t = this;
this.btnGetOtpSms.interactable = !1;
var e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_OTP_SMS;
3 == this.otpType && (e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_OTP_TRANFER);
this.scheduleOnce(function() {
t.btnGetOtpSms.interactable = !0;
}, 3);
lngui.Https.get(e, function(t) {
if (cc.js.isNumber(t)) {
lngui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
} else lngui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.touchXacThuc = function() {
var t = this, e = this.txtOTP.string;
if (0 != e.length) {
var n = {
Otp: e,
OtpType: this.otpType,
OtpToken: this.otpToken,
ServiceId: this.serviceId
}, o = c.getStringBodyByObject({
token: lngui.UserManager.instance.mainUserInfo.GameToken
}), i = c.LobbyConst.API.URL + c.LobbyConst.API.CHECK_OTP + o;
lngui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.onreadystatechange = function() {
if (4 == r.readyState) {
lngui.UIWaitingLayout.hideWaiting();
if (200 == r.status) {
lngui.UIPopupManager.instance.showPopup(r.responseText);
t.hide();
} else r.responseText.length > 0 ? lngui.UIPopupManager.instance.showPopup(r.responseText) : lngui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công, Vui lòng thử lại!");
}
};
r.ontimeout = function() {
lngui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công, kiểm tra kết nối internet của bạn!");
lngui.UIWaitingLayout.hideWaiting();
};
r.onerror = function() {
lngui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công. Vui lòng thử lại!");
lngui.UIWaitingLayout.hideWaiting();
};
r.timeout = 3e4;
r.open("POST", i, !0);
r.setRequestHeader("Content-Type", "application/json");
r.withCredentials = !0;
r.send(JSON.stringify(n));
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP");
};
r([ p(cc.EditBox) ], e.prototype, "txtOTP", void 0);
r([ p(cc.Button) ], e.prototype, "btnGetOtpSms", void 0);
return r([ s ], e);
}(lngui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
GUISettingCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "eb28aej8ZpC7IBPcvjreNwP", "GUISettingCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cbSound = null;
e.cbMusic = null;
return e;
}
e.prototype.onCbSound = function(t) {
lngui.AudioManager.instance.sfxVolume = t.isChecked ? 1 : 0;
};
e.prototype.onCbMusic = function(t) {
lngui.AudioManager.instance.musicVolume = t.isChecked ? 1 : 0;
};
e.prototype.onEnable = function() {
var t = lngui.ClientData.getNumber("music", 1), e = lngui.ClientData.getNumber("sfx", 1);
0 == t ? this.cbMusic.uncheck() : this.cbMusic.check();
0 == e ? this.cbSound.uncheck() : this.cbSound.check();
};
r([ s(cc.Toggle) ], e.prototype, "cbSound", void 0);
r([ s(cc.Toggle) ], e.prototype, "cbMusic", void 0);
return r([ a ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {} ],
GUITopJackpotCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e4903cXk/RKWIdtsKgPq6fc", "GUITopJackpotCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./game_icon/BundleMiniGame"), s = t("./game_icon/BundleSceneGame"), p = t("./ItemTopJackpotCtrl"), l = t("./utils/Lobby_UITableView"), u = cc._decorator, h = u.ccclass, f = u.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tbvJackpot = null;
e.listIconDownLoad = [];
e._dataOld = new Map();
e._data = [];
return e;
}
e.prototype.numberOfCellsInTableView = function() {
return this._data.length || 0;
};
e.prototype.tableCellAtIndex = function(t, e) {
var n = t.dequeueCell(), o = n.getComponent(p.default), i = this._data[e], r = this._dataOld.get(e);
r = r || 0;
o.lbJackpot.data = r;
o.lbJackpot.setString(lngui.StringUtils.formatNumber(r));
this._dataOld.set(e, this._data[e].jackpot);
o.setData(i.gameID, this._data[e].jackpot);
return n;
};
e.prototype.onTabbarSelected = function() {
if (this.tbvJackpot && this.tbvJackpot._isOnLoadCalled) {
this.refreshData();
this.tbvJackpot.reloadData();
this.tbvJackpot.scrollToTop(!1);
}
};
e.prototype.onEnable = function() {
this.tbvJackpot.dataSource = this;
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.onUpdateListJackpot, this);
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.onDownloadGameFromItem, this);
this.node.on(lngui.ControlEvent.TabbarItemSelected, this.onTabbarSelected, this);
this.onUpdateListJackpot();
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.onUpdateListJackpot, this);
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.onDownloadGameFromItem, this);
this.node.off(lngui.ControlEvent.TabbarItemSelected, this.onTabbarSelected, this);
};
e.prototype.onDownloadGameFromItem = function(t) {
this.listIconDownLoad.forEach(function(e) {
if (e) {
var n = e.getComponent(a.default) && e.getComponent(a.default).gameID, o = e.getComponent(s.default) && e.getComponent(s.default).gameID;
if (n && n == t || o && o == t) {
e.getComponent(a.default) && e.getComponent(a.default)._onClicked();
e.getComponent(s.default) && e.getComponent(s.default)._onClicked();
}
}
});
};
e.prototype.refreshData = function() {
var t = c.LobbyConst.slotByKeys;
this._data = [];
var e = [], n = Math.max(this.node.getComponent("UITabbarController").curSelectedIndex, 0);
t.forEach(function(t, o) {
t.length - 1 >= n && e.push({
gameID: o,
jackpot: t[n]
});
});
this._data = e.sort(function(t, e) {
return e.jackpot - t.jackpot;
});
};
e.prototype.onUpdateListJackpot = function() {
this.refreshData();
this.tbvJackpot.reloadData();
};
r([ f(l.default) ], e.prototype, "tbvJackpot", void 0);
r([ f(cc.Node) ], e.prototype, "listIconDownLoad", void 0);
return r([ h ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./ItemTopJackpotCtrl": "ItemTopJackpotCtrl",
"./game_icon/BundleMiniGame": "BundleMiniGame",
"./game_icon/BundleSceneGame": "BundleSceneGame",
"./utils/Lobby_UITableView": "Lobby_UITableView"
} ],
GUITopupBankManual: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f998809LCRBorWJUmvHKdwm", "GUITopupBankManual");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GuiTopupBank2.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbsender = null;
e.edbnote = null;
e.lbTypeBank = null;
e.lbAccountId = null;
e.lbAccountName = null;
e.nodeSpiner = null;
e.nodeInfoTransfer = null;
e.nodeguide = null;
e._verifyCaptcha = null;
e.bank = null;
e.amount = 0;
e.listBank = [];
e.timeRemain = 30;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.nodeInfoTransfer.active = !1;
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.LIST_BANKMANUAL + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(e) {
console.log(e);
e ? t.listBank = e.Data : lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
};
e.prototype.start = function() {};
e.prototype.onClickChooseBank = function() {
var t = this;
this.nodeSpiner.node.active = !this.nodeSpiner.node.active;
this.nodeSpiner.setInfo(this.listBank, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.BankName;
}, function(e) {
console.log(e);
t.lbTypeBank.string = e.BankName;
t.lbTypeBank.node.color = cc.Color.WHITE;
t.bank = e.Id;
t.lbAccountId.string = e.BankAccountNumber;
t.lbAccountName.string = e.BankAccountName;
t.nodeInfoTransfer.active = !0;
});
this.nodeSpiner.node.y = 367;
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = a.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = a.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
if ("" != this.edbAmount.string) if (a.MVUtils.toInt(this.edbAmount.string) < 1e4) lngui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 10.000"); else if (a.MVUtils.toInt(this.edbAmount.string) > 3e8) lngui.UIPopupManager.instance.showPopup("Số tiền tối đa là 300,000,000 Coin"); else if (null != this.bank) {
var t = c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_MANUALBANK + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken, e = {
os: c.LobbyConst.platform,
ManualBankId: this.bank,
Amount: this.edbAmount.string,
Code: this.edbnote.string,
SenderName: this.edbsender.string
};
lngui.Https.post(t, e, function(t, e) {
e.ResponseCode < 0 ? lngui.UIPopupManager.instance.showPopup(e.Description) : e && lngui.UIPopupManager.instance.showPopup(e);
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn ngân hàng!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập số tiền!");
};
e.prototype.onClickCancel = function() {};
e.prototype.onBtnHuyBo = function() {
this.nodeInfoTransfer.active = !1;
};
e.prototype.onClickCopySTK = function() {
lngui.PlatformInterface.copy(this.lbAccountId.string);
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbsender", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbnote", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountId", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountName", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupBank: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6f83aop94JNioUx6gMraHaS", "GUITopupBank");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GuiTopupBank.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbCaptcha = null;
e.sprCaptcha = null;
e.QR = null;
e.lbTypeBank = null;
e.lbBigAmount = null;
e.lbAccountId = null;
e.lbAccountName = null;
e.lbTransferContent = null;
e.lbTimeRemain = null;
e.nodeSpiner = null;
e.nodeInfoTransfer = null;
e.nodehint = null;
e.lbStk = null;
e.lbBankName = null;
e.lbAccName = null;
e.lbContent = null;
e.nodeguide = null;
e._verifyCaptcha = null;
e.bank = null;
e.amount = 0;
e.listBank = [];
e.timeRemain = 30;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.nodeInfoTransfer.active = !1;
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.LIST_BANK_IN + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken + c.LobbyConst.GATE.URL, function(e) {
e ? t.listBank = e : lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
};
e.prototype.start = function() {};
e.prototype.onClickChooseBank = function() {
var t = this;
this.nodeSpiner.node.active = !this.nodeSpiner.node.active;
this.nodeSpiner.setInfo(this.listBank, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.Name;
}, function(e) {
t.lbTypeBank.string = e.Name;
t.lbTypeBank.node.color = cc.Color.WHITE;
t.bank = e.Code;
t.onClickConfirm();
});
this.nodeSpiner.node.y = 416;
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = a.MVUtils.formatNumber(t);
this.lbBigAmount.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = a.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = a.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
var t = this;
if (null != this.bank) {
var e = c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_BANK + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken + c.LobbyConst.GATE.URL, n = {
os: c.LobbyConst.platform,
amount: 6e4,
provider: this.bank
};
lngui.Https.post(e, n, function(e, n) {
if (n.ResponseCode < 0) lngui.UIPopupManager.instance.showPopup(n.Description); else if (n) {
t.lbStk.string = n.Data.BankNumber;
t.lbBankName.string = n.Data.BankName;
t.lbAccName.string = n.Data.BankAccountName;
t.lbContent.string = n.Data.Content;
t.nodeInfoTransfer.active = !0;
var o = n.Data.QrCode;
o = o.replace(/\r\n/g, "");
t.loadImgBinary(o);
t.setTimeCountDown();
}
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn ngân hàng!");
};
e.prototype.setTimeCountDown = function() {
var t = this;
this.schedule(function() {
t.lbTimeRemain.string = t.timeRemain.toString();
t.timeRemain--;
}, 1, this.timeRemain);
};
e.prototype.onClickCancel = function() {};
e.prototype.onBtnHuyBo = function() {
this.nodeInfoTransfer.active = !1;
};
e.prototype.onClickCopySTK = function() {
lngui.PlatformInterface.copy(this.lbStk.string);
};
e.prototype.onClickCopyContent = function() {
lngui.PlatformInterface.copy(this.lbContent.string);
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 250;
n.height = 250;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.QR.spriteFrame = e;
};
n.src = e;
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "QR", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.Label) ], e.prototype, "lbBigAmount", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountId", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountName", void 0);
r([ l(cc.Label) ], e.prototype, "lbTransferContent", void 0);
r([ l(cc.Label) ], e.prototype, "lbTimeRemain", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ l(cc.Node) ], e.prototype, "nodehint", void 0);
r([ l(cc.Label) ], e.prototype, "lbStk", void 0);
r([ l(cc.Label) ], e.prototype, "lbBankName", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccName", void 0);
r([ l(cc.Label) ], e.prototype, "lbContent", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "32701gpeuBPPb09K5EcN62J", "GUITopupCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ a ], e);
}(lngui.UIPopup));
n.default = s;
cc._RF.pop();
}, {} ],
GUITopupEWallet: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ed3c3pD0dI3oRCO5rUdcbj", "GUITopupEWallet");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GUITopupEWallet.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbCaptcha = null;
e.sprCaptcha = null;
e.nodeSpiner = null;
e.nodeInfoTransfer = null;
e.lbBocAmount = null;
e.lbSdt = null;
e.lbAccName = null;
e.lbContent = null;
e.lbTypeBank = null;
e.lbTypeVi = null;
e._verifyCaptcha = null;
e.bank = null;
e.amount = 0;
e.listBank = [];
e.timeRemain = 30;
return e;
}
e.prototype.onLoad = function() {
this.nodeInfoTransfer.active = !1;
};
e.prototype.start = function() {};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = a.MVUtils.formatNumber(t);
this.lbBocAmount.string = this.edbAmount.string;
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = a.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = a.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("" != this.edbAmount.string) if (a.MVUtils.toInt(this.edbAmount.string) < 1e4) {
lngui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 10.000");
this.onClickRefreshCaptcha();
} else if (a.MVUtils.toInt(this.edbAmount.string) > 1e7) {
lngui.UIPopupManager.instance.showPopup("Số tiền tối đa là 10.000.000");
this.onClickRefreshCaptcha();
} else {
var e = c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.MOMO_REQUEST + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken, n = {
os: c.LobbyConst.platform,
amount: this.amount,
type: "momo"
};
lngui.Https.post(e, n, function(e, n) {
if (1 == n.ResponseCode) {
if (n) {
t.lbSdt.string = n.Data.Banknumber;
t.lbAccName.string = n.Data.Bankname;
t.lbContent.string = n.Data.Content;
t.nodeInfoTransfer.active = !0;
t.onClickRefreshCaptcha();
t.clearInput();
}
} else {
lngui.UIPopupManager.instance.showPopup(n.Description);
t.onClickRefreshCaptcha();
}
});
} else {
this.onClickRefreshCaptcha();
lngui.UIPopupManager.instance.showPopup("Vui lòng nhập số tiền!");
}
};
e.prototype.onClickCancel = function() {};
e.prototype.onBtnHuyBo = function() {
this.nodeInfoTransfer.active = !1;
};
e.prototype.onClickCopySTK = function() {
lngui.PlatformInterface.copy(this.lbSdt.string);
};
e.prototype.onClickCopyContent = function() {
lngui.PlatformInterface.copy(this.lbContent.string);
};
e.prototype.clearInput = function() {
this.onClickRefreshCaptcha();
this.bank = null;
this.edbAmount.string = "";
this.edbCaptcha.string = "";
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ l(cc.Label) ], e.prototype, "lbBocAmount", void 0);
r([ l(cc.Label) ], e.prototype, "lbSdt", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccName", void 0);
r([ l(cc.Label) ], e.prototype, "lbContent", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeVi", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupExchange: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fefcdRa9qVKjLiaLguJ46lr", "GUITopupExchange");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TabCashCard = n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.thisNode.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupExchange.Spinner") ], t);
}();
n.Spinner = u;
var h = function() {
function t() {
this.step1 = null;
this.sprCaptcha = null;
this._verifyCaptcha = null;
}
t.prototype.setInfo = function() {};
r([ l(cc.Node) ], t.prototype, "step1", void 0);
r([ l(cc.Sprite) ], t.prototype, "sprCaptcha", void 0);
return r([ p("GuiTopupExchange.TabCashCard") ], t);
}();
n.TabCashCard = h;
var f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSpiner = null;
e.tabCashCard = null;
e.lbTypeCard = null;
e.lbRequiredChip = null;
e.lbValue = null;
e.sprCaptcha = null;
e.edbCaptcha = null;
e.pnlOTPVerify = null;
e.edbOTPVerify = null;
e.tiGiaContainer = null;
e.itemTiGiaTemplate = null;
e.nodeguide = null;
e.listProvider = [];
e.listCardRate = [];
e.provider = null;
e.currentCardValue = 0;
return e;
}
e.prototype.onLoad = function() {
var t = this;
0 == this.listProvider.length && lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.CARD_TYPE + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(e) {
t.listProvider = e.Data;
});
0 == this.listCardRate.length && lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.RATE_CARD + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(e) {
console.log(e.Data[0]);
console.log(e.Data[0].LstCashInDisplay);
if (e) {
var n = e.Data[0].LstCashInDisplay.filter(function(t) {
return t.Amount >= 2e5;
});
t.listCardRate = n;
}
t.ExchangeRate = e.Data[0].ExchangeRate;
t.loadListTiGia();
});
};
e.prototype.loadListTiGia = function() {
for (var t = this.listCardRate, e = 0; e < t.length; e++) {
var n = this.tiGiaContainer.children[e];
n || ((n = cc.instantiate(this.itemTiGiaTemplate)).parent = this.tiGiaContainer);
n.getChildByName("lblValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].Amount);
n.getChildByName("lblBalance").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].Amount * this.ExchangeRate);
}
};
e.prototype.onClickTypeCard = function() {
var t = this;
this.nodeSpiner.thisNode.active = !this.nodeSpiner.thisNode.active;
this.nodeSpiner.type = 0;
this.nodeSpiner.setInfo(this.listProvider, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.cardTypeName;
}, function(e) {
t.lbTypeCard.string = e.cardTypeName;
t.provider = e.cardType;
});
this.nodeSpiner.thisNode.y = 394.026;
};
e.prototype.onClickValue = function() {
var t = this;
this.nodeSpiner.type = 1;
this.nodeSpiner.thisNode.active = !this.nodeSpiner.thisNode.active;
this.nodeSpiner.thisNode.y = 315.377;
this.nodeSpiner.setInfo(this.listCardRate, function(t, e) {
t.getComponentInChildren(cc.Label).string = a.MVUtils.formatNumber(e.Amount);
}, function(e) {
console.log(e);
t.lbValue.string = a.MVUtils.formatNumber(e.Amount);
t.currentCardValue = e.Amount;
t.lbRequiredChip.string = a.MVUtils.formatNumber(e.Amount * t.ExchangeRate);
});
};
e.prototype.onClickConfirmExChange = function() {
var t = this;
if ("" != this.edbCaptcha.string) if (this.provider) if (0 != this.currentCardValue) {
var e = "";
"VT" == this.provider && (e = "VTT");
"Vina" == this.provider && (e = "VNP");
"Mobi" == this.provider && (e = "VMS");
var n = {
provider: e,
type: 0,
captchaText: this.edbCaptcha.string,
captchaToken: this.sprCaptcha.getComponent("CapchaZ").getCapChaId(),
amount: this.currentCardValue,
merchantId: 1,
sourceId: 1,
quantity: 1
};
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.MUA_THE, n, function(e, n) {
if (e >= 200 && e < 400) {
t.data = n;
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblCardType").getComponent(cc.Label).string = t.provider;
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblCardValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(t.currentCardValue);
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblBigDoi").getComponent(cc.Label).string = t.lbRequiredChip.string;
t.pnlOTPVerify.active = !0;
t.tabCashCard.step1.active = !1;
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Xin vui lòng chọn mệnh giá!"); else lngui.UIPopupManager.instance.showPopup("Xin vui lòng chọn nhà mạng!"); else lngui.UIPopupManager.instance.showPopup("Xin vui lòng nhập mã kiểm tra!");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2001
}, function(e, n) {
if (200 == e) {
lngui.UIPopupManager.instance.showPopup("Rút thẻ thành công\nVui lòng đợi NPH duyệt!");
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.currentCardValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
} else lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onBtnHuy = function() {
this.tabCashCard.step1.active = !0;
this.pnlOTPVerify.active = !1;
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onClickSendOTPSMS = function() {};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(h) ], e.prototype, "tabCashCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbRequiredChip", void 0);
r([ l(cc.Label) ], e.prototype, "lbValue", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Node) ], e.prototype, "pnlOTPVerify", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.Node) ], e.prototype, "tiGiaContainer", void 0);
r([ l(cc.Node) ], e.prototype, "itemTiGiaTemplate", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryAllGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "62760o5vXBKybXWQZVvHxI1", "GUITopupHistoryAllGame");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
e.listHistory = [];
return e;
}
e.prototype.onLoad = function() {
var t = this, e = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID
};
lngui.UIWaitingLayout.showWaiting();
a.MVUtils.get(c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.LIST_HISTORY_ALLGAME, e, function(e, n) {
lngui.UIWaitingLayout.hideWaiting();
e >= 200 && e < 400 ? t.loadListHistory(n) : console.log("err===>", n);
});
};
e.prototype.loadListHistory = function(t) {
this.listHistory = t;
for (var e = 0; e < this.listHistory.length; e++) {
var n = this.listHistory[e], o = this.scrHistory.content.children[e];
if (!o) {
o = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(o);
}
o.active = !0;
var i = n.CreatedTime;
i = (i = i.replace("T", "\n")).substring(0, i.indexOf("."));
o.getChildByName("lblThoiGian").getComponent(cc.Label).string = i;
o.getChildByName("lblDichVu").getComponent(cc.Label).string = n.ServiceName;
o.getChildByName("lblSoTien").getComponent(cc.Label).string = a.MVUtils.formatNumber(n.Amount).toString();
n.Description.length > 29 && (n.Description = n.Description.substring(0, 29) + "...");
o.getChildByName("lblMoTa").getComponent(cc.Label).string = n.Description;
}
};
e.prototype.start = function() {};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryBankManual: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9e60OJcYNGzbGLDcRuAlka", "GUITopupHistoryBankManual");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
return e;
}
e.prototype.onLoad = function() {
this.requestHistory();
};
e.prototype.requestHistory = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.LIST_HISTORY_BANKMANUAL + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(e, function(e) {
t.loadListHistory(e.Data);
});
};
e.prototype.loadListHistory = function(t) {
this.scrHistory.content.removeAllChildren(!0);
if (t && 0 != t.length) for (var e = 0; e < t.length; e++) {
var n = t[e], o = this.scrHistory.content.children[e];
if (!o) {
o = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(o);
}
o.active = !0;
o.getChildByName("lblSTT").getComponent(cc.Label).string = n.Id;
var i = n.CreatedDate;
i = (i = i.replace("T", " ")).substring(0, i.indexOf("."));
o.getChildByName("lblTime").getComponent(cc.Label).string = i;
o.getChildByName("lblCardType").getComponent(cc.Label).string = n.BankName;
o.getChildByName("lblCardValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(n.Amount);
-1 == n.Status ? o.getChildByName("lblStatus").getComponent(cc.Label).string = n.Reason : 1 == n.Status ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Thành công" : "Đang chờ" == n.Status && (o.getChildByName("lblStatus").getComponent(cc.Label).string = "Đang chờ duyệt");
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryNap: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0f1edg/gHBB44ZE3KZnNhOB", "GUITopupHistoryNap");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
return e;
}
e.prototype.onLoad = function() {
this.requestHistory();
};
e.prototype.requestHistory = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.LIST_HISTORY + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken + "&inOut=1";
lngui.Https.get(e, function(e) {
t.loadListHistory(e);
});
};
e.prototype.loadListHistory = function(t) {
this.scrHistory.content.removeAllChildren(!0);
if (t && 0 != t.length) {
t = t.filter(function(t) {
return 1 == t.InOut;
});
for (var e = 0; e < t.length; e++) {
var n = t[e], o = this.scrHistory.content.children[e];
if (!o) {
o = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(o);
}
o.active = !0;
o.getChildByName("lblSTT").getComponent(cc.Label).string = n.Id;
var i = n.CreateTime;
i = (i = i.replace("T", " ")).substring(0, i.indexOf("."));
o.getChildByName("lblTime").getComponent(cc.Label).string = i;
o.getChildByName("lblCardType").getComponent(cc.Label).string = n.Type;
o.getChildByName("lblCardValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(n.Amount);
"Từ chối" == n.StatusString ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Từ chối" : "Thành công" == n.StatusString ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Thành công" : "Đang chờ" == n.StatusString ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Đang chờ" : o.getChildByName("lblStatus").getComponent(cc.Label).string = n.StatusString;
}
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryRut: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8469c0qIoFMaIBwMQGjt0eo", "GUITopupHistoryRut");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
return e;
}
e.prototype.onLoad = function() {
this.requestHistory();
};
e.prototype.requestHistory = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.LIST_HISTORY + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken + "&inOut=2";
lngui.Https.get(e, function(e) {
t.loadListHistory(e);
});
};
e.prototype.loadListHistory = function(t) {
this.scrHistory.content.removeAllChildren(!0);
if (t && 0 != t.length) {
t = t.filter(function(t) {
return 2 == t.InOut;
});
for (var e = 0; e < t.length; e++) {
var n = t[e], o = this.scrHistory.content.children[e];
if (!o) {
o = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(o);
}
o.active = !0;
o.getChildByName("lblSTT").getComponent(cc.Label).string = n.Id;
var i = n.CreateTime;
i = (i = i.replace("T", " ")).substring(0, i.indexOf("."));
o.getChildByName("lblTime").getComponent(cc.Label).string = i;
o.getChildByName("lblCardType").getComponent(cc.Label).string = n.Type;
o.getChildByName("lblCardValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(n.Amount);
"Từ chối" == n.StatusString ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Từ chối" : "Thành công" == n.StatusString ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Thành công" : "Đang chờ" == n.StatusString ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Đang chờ" : o.getChildByName("lblStatus").getComponent(cc.Label).string = n.StatusString;
}
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupRutBank: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "773aePSP/pNJZowO2fOnd+Y", "GUITopupRutBank");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GUITopupRutBank.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbSoTk = null;
e.edbChuTaiKhoan = null;
e.nodeSpiner = null;
e.lbTypeBank = null;
e.edbCaptcha = null;
e.sprCaptcha = null;
e.edbOTPVerify = null;
e.layoutCastOut = null;
e.layoutOTP = null;
e.nodeguide = null;
e._verifyCaptcha = null;
e.bank = null;
e.listBank = [];
return e;
}
e.prototype.onLoad = function() {
var t = this;
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.LIST_BANK_OUT + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken + c.LobbyConst.GATE.URL, function(e) {
e ? t.listBank = e : lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
};
e.prototype.start = function() {};
e.prototype.onClickChooseBank = function() {
var t = this;
this.nodeSpiner.node.active = !this.nodeSpiner.node.active;
this.nodeSpiner.setInfo(this.listBank, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.ShortName;
}, function(e) {
t.lbTypeBank.string = e.ShortName;
t.lbTypeBank.node.color = cc.Color.WHITE;
t.bank = e.Code;
});
this.nodeSpiner.node.y = 450.833;
};
e.prototype.onClickRutTien = function() {
var t = this;
if (parseInt(this.edbAmount.string.split(".").join("")) < 2e5) lngui.UIPopupManager.instance.showPopup("Số tiền rút tối thiểu là 200,000 Coin"); else if (parseInt(this.edbAmount.string.split(".").join("")) > 3e8) lngui.UIPopupManager.instance.showPopup("Số tiền rút tối thiểu là 300,000,000 Coin"); else if ("" != this.edbSoTk.string) if ("" != this.edbChuTaiKhoan.string) if ("" != this.edbCaptcha.string) {
this._verifyCaptcha = this.sprCaptcha.getComponent("CapchaZ").getCapChaId();
this.data = {
nickNameTrans: lngui.UserManager.instance.mainUserInfo.NickName,
transferValue: a.MVUtils.toInt(this.edbAmount.string),
sourceId: 1,
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
bankAccountNumber: this.edbSoTk.string,
bankAccountName: a.MVUtils.removeVietnameseTones(this.edbChuTaiKhoan.string).toUpperCase(),
bankCode: this.bank,
transferType: 0
};
var e = this;
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.CAST_OUT, this.data, function(n, o) {
if (200 == n) {
e.layoutOTP.getChildByName("lblUsername").getComponent(cc.Label).string = t.data.bankAccountName;
e.layoutOTP.getChildByName("lblReceiveQuay").getComponent(cc.Label).string = a.MVUtils.formatNumber(t.data.transferValue);
e.layoutOTP.getChildByName("lblReason").getComponent(cc.Label).string = t.data.bankAccountNumber;
e.layoutOTP.getChildByName("lblbankk").getComponent(cc.Label).string = t.lbTypeBank.string;
e.layoutOTP.active = !0;
e.layoutCastOut.active = !1;
e.data.OtpToken = o.OtpToken;
} else {
lngui.UIPopupManager.instance.showPopup(o);
t.onClickRefreshCaptcha();
}
});
} else lngui.UIPopupManager.instance.showPopup("Nhập mã kiểm tra"); else lngui.UIPopupManager.instance.showPopup("Vui lòng điền Chủ Tài Khoản"); else lngui.UIPopupManager.instance.showPopup("Vui lòng điền Số Tài Khoản");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2005
}, function(e, n) {
if (200 == e) {
lngui.UIPopupManager.instance.showPopup("Tạo lệnh rút tiền thành công");
t.layoutCastOut.active = !0;
t.layoutOTP.active = !1;
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
t.clearInput();
} else {
lngui.UIPopupManager.instance.showPopup(n);
t.onClickRefreshCaptcha();
}
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
this.edbCaptcha.string = "";
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.edbAmount.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onClickSendOTPSMS = function() {};
e.prototype.onClickHuy = function() {
this.layoutCastOut.active = !0;
this.layoutOTP.active = !1;
this.onClickRefreshCaptcha();
};
e.prototype.clearInput = function() {
this.onClickRefreshCaptcha();
this.edbCaptcha.string = "";
this.edbChuTaiKhoan.string = "";
this.edbSoTk.string = "";
this.edbAmount.string = "0";
this.edbOTPVerify.string = "";
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbSoTk", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbChuTaiKhoan", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.Node) ], e.prototype, "layoutCastOut", void 0);
r([ l(cc.Node) ], e.prototype, "layoutOTP", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupTelco: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d4303PCXcRKZrcQyq2peaWg", "GUITopupTelco");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.thisNode.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupTelco.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSpinner = null;
e.lbTypeCard = null;
e.lbValue = null;
e.tiGiaContainer = null;
e.itemTiGiaTemplate = null;
e.edbCaptcha = null;
e.edbCardCode = null;
e.edbCardSeri = null;
e.sprCaptcha = null;
e.nodeguide = null;
e.currentMenhGia = 0;
e.provider = null;
e._verifyCaptcha = "";
e.listProvider = [];
e.currentRateProvider = {};
e.rateCard = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.RATE_CARD + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(e) {
t.rateCard = e.Data[0];
});
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.CARD_TYPE + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(e) {
if (1 == e.ResponseCode) {
console.log(e.Data);
t.listProvider = e.Data;
t.currentRateProvider = t.listProvider[0];
}
t.loadListTiGia();
});
this.provider = "VT";
};
e.prototype.onClickChangeProvider = function(t, e) {
this.provider = e;
};
e.prototype.onClickValue = function() {
var t = this;
this.nodeSpinner.type = 1;
this.nodeSpinner.thisNode.active = !this.nodeSpinner.thisNode.active;
this.nodeSpinner.thisNode.y = 418.481;
var e = this.rateCard.LstCashInDisplay;
this.nodeSpinner.setInfo(e, function(t, e) {
t.getComponentInChildren(cc.Label).string = a.MVUtils.formatNumber(e.Amount);
}, function(e) {
cc.log("onClickValue");
t.lbValue.string = a.MVUtils.formatNumber(e.Amount);
t.currentMenhGia = e.Amount;
});
};
e.prototype.loadListTiGia = function() {
for (var t = this.currentRateProvider.List, e = 0; e < t.length; e++) {
var n = this.tiGiaContainer.children[e];
n || ((n = cc.instantiate(this.itemTiGiaTemplate)).parent = this.tiGiaContainer);
n.getChildByName("lblAmout").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].Amount);
n.getChildByName("lblNo").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].AmountReceive);
n.getChildByName("icMoney");
}
};
e.prototype.onClickConfirm = function() {
var t = this;
if (0 != this.currentMenhGia) if (null != this.provider) if ("" != this.edbCaptcha.string && "" != this.edbCardCode.string && "" != this.edbCardSeri.string) {
this._verifyCaptcha = this.sprCaptcha.node.getComponent("CapchaZ").getCapChaId();
var e = this.edbCardSeri.string, n = this.edbCardCode.string, o = this.edbCaptcha.string, i = {
cardType: this.provider,
cardSerial: e,
amount: this.currentMenhGia,
cardPin: n,
captcha: o,
CardUserAmount: this.currentMenhGia,
verify: this._verifyCaptcha,
os: c.LobbyConst.platform
};
cc.log("Body==", JSON.stringify(i));
var r = c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_CASH_IN + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.post(r, i, function(e, n) {
200 != e && 0 != n.ResponseCode || t.clearInput();
t.onClickResetCaptcha();
lngui.UIPopupManager.instance.showPopup(n.Description);
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn loại thẻ!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn mệnh giá thẻ!");
};
e.prototype.onClickResetCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.clearInput = function() {
this.onClickResetCaptcha();
this.provider = null;
this.currentMenhGia = 0;
this.lbTypeCard.string = "Chọn nhà mạng";
this.lbValue.string = "Chọn mệnh giá";
this.edbCaptcha.string = "";
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
r([ l(u) ], e.prototype, "nodeSpinner", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbValue", void 0);
r([ l(cc.Node) ], e.prototype, "tiGiaContainer", void 0);
r([ l(cc.Node) ], e.prototype, "itemTiGiaTemplate", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCardCode", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCardSeri", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupTranfers: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ad5f9XP3mtEer426/J4XmR4", "GUITopupTranfers");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbTVN = null;
e.edbReTVN = null;
e.edbAmount = null;
e.edbCaptcha = null;
e.edbAccountInfo = null;
e.sprCaptcha = null;
e.lbFee = null;
e.lbBigReceive = null;
e.scrView = null;
e.transferLayer = null;
e.otpLayer = null;
e.edbOTPVerify = null;
e.listAgency = [];
e.amount = 0;
e._verifyCaptcha = "";
return e;
}
e.prototype.onLoad = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.LIST_AGENCY + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
a.MVUtils.get(e, {}, function(e, n) {
e >= 200 && e < 400 && (t.listAgency = n);
});
};
e.prototype.start = function() {};
e.prototype.loadListAgency = function() {
for (var t = 0; t < this.listAgency.length; t++) {
var e = this.scrView.content.children[t], n = this.listAgency[t];
if (!e) {
e = cc.instantiate(this.scrView.content.children[0]);
this.scrView.content.addChild(e);
}
e.active = !0;
e.getChildByName("lbStt").getComponent(cc.Label).string = t + 1 + "";
e.getChildByName("lbName").getComponent(cc.Label).string = n.StaffName;
e.getChildByName("lbNickName").getComponent(cc.Label).string = n.NickName;
}
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("" != this.edbCaptcha.string && "" != this.edbAccountInfo.string && "" != this.edbCaptcha.string && "" != this.edbAmount.string && "" != this.edbReTVN.string && "" != this.edbTVN.string) if (this.edbTVN.string == this.edbReTVN.string) {
this._verifyCaptcha = this.sprCaptcha.getComponent("CapchaZ").getCapChaId();
var e = this.edbAccountInfo.string;
this.data = {
accountIdTrans: lngui.UserManager.instance.mainUserInfo.AccountID,
nickNameTrans: lngui.UserManager.instance.mainUserInfo.NickName,
transferValue: this.amount,
nickNameRecv: this.edbReTVN.string,
sourceId: c.LobbyConst.platform,
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
transferType: 0,
reason: e
};
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_TRANSFER, this.data, function(e, n) {
if (e >= 200 && e < 400) {
t.otpLayer.getChildByName("lblUsername").getComponent(cc.Label).string = t.data.nickNameRecv;
t.otpLayer.getChildByName("lblReceiveQuay").getComponent(cc.Label).string = a.MVUtils.formatNumber(t.data.transferValue);
t.otpLayer.getChildByName("lblReason").getComponent(cc.Label).string = t.data.reason;
t.transferLayer.active = !1;
t.otpLayer.active = !0;
t.data.OtpToken = n.OtpToken;
lngui.ZLog.log("res ==============" + JSON.stringify(n));
} else {
lngui.UIPopupManager.instance.showPopup(n);
t.onClickRefreshCaptcha();
}
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng xác minh lại tên nhân vật!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2002
}, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UIPopupManager.instance.showPopup("Chuyển khoản thành công");
t.transferLayer.active = !0;
t.otpLayer.active = !1;
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
t.clearInput();
} else lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
this.edbCaptcha.string = "";
};
e.prototype.onClickSendOTPSMS = function() {};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = a.MVUtils.formatNumber(t);
this.lbFee.string = a.MVUtils.formatNumber(Math.floor(.02 * t));
this.lbBigReceive.string = a.MVUtils.formatNumber(Math.floor(1.02 * t));
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onClickHuy = function() {
this.transferLayer.active = !0;
this.otpLayer.active = !1;
this.onClickRefreshCaptcha();
};
e.prototype.clearInput = function() {
this.onClickRefreshCaptcha();
this.edbCaptcha.string = "";
this.edbTVN.string = "";
this.edbCaptcha.string = "";
this.edbReTVN.string = "";
this.edbAmount.string = "0";
this.edbOTPVerify.string = "";
this.edbAccountInfo.string = "";
this.lbBigReceive.string = "0";
this.lbBigReceive.string = "0";
};
r([ l(cc.EditBox) ], e.prototype, "edbTVN", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbReTVN", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbAccountInfo", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.Label) ], e.prototype, "lbFee", void 0);
r([ l(cc.Label) ], e.prototype, "lbBigReceive", void 0);
r([ l(cc.ScrollView) ], e.prototype, "scrView", void 0);
r([ l(cc.Node) ], e.prototype, "transferLayer", void 0);
r([ l(cc.Node) ], e.prototype, "otpLayer", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIUpdateDisplayName: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "034b8Kz6f1Gk4jn9VbUoqSY", "GUIUpdateDisplayName");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = t("./utils/CapchaZ"), p = cc._decorator, l = p.ccclass, u = p.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbNickName = null;
e.edbCaptcha = null;
e.UICaptcha = null;
return e;
}
e.prototype.onAcceptClicked = function() {
var t = this, e = this.edbNickName.string;
this.edbCaptcha.string;
if (e.length < 6 || e.length > 15 || e.indexOf(" ") > 0 || e.indexOf("@") > 0 || e === lngui.UserManager.instance.mainUserInfo.NickName) lngui.UIPopupManager.instance.showPopup("Tên người chơi phải từ 6 - 14 ký tự, viết liền không dấu, không trùng tên tài khoản, không chứa ký tự đặc biệt!"); else {
var n = {
fullName: this.edbNickName.string,
captcha: this.edbCaptcha.string,
captchaToken: this.UICaptcha.getComponent(s.default).getCapChaId(),
gate: c.LobbyConst.GATE.DATA
};
a.MVUtils.get(c.LobbyConst.API.URL + c.LobbyConst.API.UPDATE_DISPLAYNAME, n, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UserManager.instance.mainUserInfo = n;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
t.hide();
} else {
t.onRefreshCaptchaClicked();
lngui.UIPopupManager.instance.showPopup(n);
}
});
}
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.getComponent(s.default).refreshCapcha();
};
r([ u(cc.EditBox) ], e.prototype, "edbNickName", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ u(cc.Node) ], e.prototype, "UICaptcha", void 0);
return r([ l ], e);
}(lngui.UIPopup);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
GateJackpotNoti: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "367a3lByDhFzIpqOJuHzIje", "GateJackpotNoti");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNameNick = null;
e.lbGameName = null;
e.lbMoneyWin = null;
e.lbTime = null;
e.timeSche = null;
return e;
}
e.prototype.showJackpot = function(t, e) {
var n = this;
void 0 === e && (e = 5);
this.lbNameNick.string = t.NickName;
this.lbGameName.string = t.GameName;
this.lbMoneyWin.string = lngui.StringUtils.formatNumber(t.JackpotValue);
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).set({
x: 0,
y: -200
}).to(1, {
x: 0,
y: 0
}, {
easing: cc.easing.backOut
}).delay(e).to(1, {
y: cc.winSize.height / 2 + 500
}, {
easing: cc.easing.backIn
}).call(function() {
n.node.active = !1;
}).start();
this.unschedule(this.timeSche);
this.lbTime.string = e.toString();
this.schedule(this.timeSche = function() {
e--;
n.lbTime.string = e.toString();
}, 1, e + 2);
};
e.prototype.hideJackpot = function() {};
e.prototype.onClickXinLoc = function() {};
r([ s(cc.Label) ], e.prototype, "lbNameNick", void 0);
r([ s(cc.Label) ], e.prototype, "lbGameName", void 0);
r([ s(cc.Label) ], e.prototype, "lbMoneyWin", void 0);
r([ s(cc.Label) ], e.prototype, "lbTime", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GateSettingPopup: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ab674brdgFE/IvGLzEgsLaf", "GateSettingPopup");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodesp = null;
e.nodebtn = null;
return e;
}
e.prototype.shownodesp = function() {
this.nodesp.active = !0;
this.nodebtn.active = !0;
};
e.prototype.hidenodesp = function() {
this.nodesp.active = !1;
this.nodebtn.active = !1;
};
r([ s(cc.Node) ], e.prototype, "nodesp", void 0);
r([ s(cc.Node) ], e.prototype, "nodebtn", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GuiTopupRutMomo: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ab46hpQlJGOqMVrJBMlUzb", "GuiTopupRutMomo");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbSDT = null;
e.edbChuTaiKhoan = null;
e.edbCaptcha = null;
e.sprCaptcha = null;
e.edbOTPVerify = null;
e.layoutCastOut = null;
e.layoutOTP = null;
e._verifyCaptcha = null;
e.bank = null;
return e;
}
e.prototype.onLoad = function() {
this.layoutCastOut.active = !0;
this.layoutOTP.active = !1;
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.start = function() {
this.bank = "momo";
};
e.prototype.onClickRutTien = function() {
var t = this;
if (parseInt(this.edbAmount.string.split(".").join("")) < 2e5) lngui.UIPopupManager.instance.showPopup("Số tiền rút tối thiểu là 200,000 Gold"); else if ("" != this.edbSDT.string) if ("" != this.edbChuTaiKhoan.string) if ("" != this.edbCaptcha.string) {
this._verifyCaptcha = this.sprCaptcha.getComponent("CapchaZ").getCapChaId();
this.data = {
nickNameTrans: lngui.UserManager.instance.mainUserInfo.NickName,
transferValue: a.MVUtils.toInt(this.edbAmount.string),
sourceId: 1,
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
bankAccountNumber: this.edbSDT.string,
bankAccountName: a.MVUtils.removeVietnameseTones(this.edbChuTaiKhoan.string).toUpperCase(),
bankCode: this.bank,
transferType: 0
};
var e = this;
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.CAST_OUT, this.data, function(n, o) {
if (200 == n) {
e.layoutOTP.getChildByName("lblUsername").getComponent(cc.Label).string = t.data.bankAccountName;
e.layoutOTP.getChildByName("lblReceiveQuay").getComponent(cc.Label).string = a.MVUtils.formatNumber(t.data.transferValue);
e.layoutOTP.getChildByName("lblReason").getComponent(cc.Label).string = t.data.bankAccountNumber + " - " + t.bank;
e.layoutCastOut.active = !1;
e.layoutOTP.active = !0;
e.data.OtpToken = o.OtpToken;
} else lngui.UIPopupManager.instance.showPopup(o);
});
} else lngui.UIPopupManager.instance.showPopup("Nhập mã kiểm tra"); else lngui.UIPopupManager.instance.showPopup("Vui lòng điền Chủ Tài Khoản"); else lngui.UIPopupManager.instance.showPopup("Vui lòng điền Số Điện Thoại");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2005
}, function(e, n) {
if (200 == e) {
lngui.UIPopupManager.instance.showPopup("Tạo lệnh rút tiền thành công");
t.layoutCastOut.active = !0;
t.layoutOTP.active = !1;
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
} else lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.edbAmount.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onClickHuy = function() {
this.layoutCastOut.active = !0;
this.layoutOTP.active = !1;
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onClickSendOTPSMS = function() {};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbSDT", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbChuTaiKhoan", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.Node) ], e.prototype, "layoutCastOut", void 0);
r([ l(cc.Node) ], e.prototype, "layoutOTP", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
HeaderAccountCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "096b2vP0exLPLpcCyZGPD5R", "HeaderAccountCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNickName = null;
e.nMail = null;
e.lbMail = null;
e.lbtextrandom = null;
e.lbGold = null;
e.lbVippoint = null;
e.listText = [];
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
var t = this;
this.listText = [ "Do lượng người dùng lớn lên đôi khi giao dịch xử lý hơi chậm, mong quý khách thông cảm", "Phế chơi game chỉ từ 1%, giao dịch không mất phế, không đại lý", "Những tài khoản bị khoá vĩnh viễn là những tài khoản có hành vi gian lận,chơi bẩn" ];
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME, this.onUpdateInfo, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_GOLD, this.onUpdateGold, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateTotalGold, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_VIPPOINT, this.onUpDateVipPoint, this);
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.USER_MAIL, this.requestMail, this);
this.onTextRandom();
this.scheduleOnce(function() {
t.requestMail();
}, 2);
};
e.prototype.onDestroy = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME, this.onUpdateInfo, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_GOLD, this.onUpdateGold, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateTotalGold, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_VIPPOINT, this.onUpDateVipPoint, this);
};
e.prototype.requestMail = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_UNREAD_MAIL;
lngui.Https.get(e, function(e) {
lngui.ZLog.log("requestUnreadMail ===" + JSON.stringify(e));
if (e) if (e.Count) {
lngui.UITextManager.showCenterNotification("Bạn có Mail chưa đọc");
t.nMail.active = !0;
t.lbMail.string = e.Count;
} else {
t.nMail.active = !1;
t.lbMail.string = "";
}
});
};
e.prototype.onUpdateTotalGold = function(t) {
lngui.UserManager.instance.mainUserInfo.Money = t;
this.lbGold.scheduleProgress(t);
};
e.prototype.onUpdateGold = function() {
var t = lngui.UserManager.instance.mainUserInfo.Money;
this.lbGold.scheduleProgress(t);
};
e.prototype.onUpDateVipPoint = function() {
var t = lngui.UserManager.instance.mainUserInfo.VipPoint;
this.lbVippoint.scheduleProgress(t);
};
e.prototype.onUpdateInfo = function() {
var t = lngui.UserManager.instance.mainUserInfo.Money, e = lngui.UserManager.instance.mainUserInfo.VipPoint;
this.lbNickName.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.lbGold.scheduleProgress(t);
e && this.lbVippoint.scheduleProgress(e);
};
e.prototype.onTestUpdateGold = function() {
lngui.ZLog.log("onTestUpdateGold===>");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, 1e6);
};
e.prototype.onTextRandom = function() {
var t = this;
this.schedule(function() {
t.lbtextrandom.string = t.listText[Math.floor(Math.random() * t.listText.length)];
}, 10);
};
var n;
e._instance = null;
r([ l(cc.Label) ], e.prototype, "lbNickName", void 0);
r([ l(cc.Node) ], e.prototype, "nMail", void 0);
r([ l(cc.Label) ], e.prototype, "lbMail", void 0);
r([ l(cc.Label) ], e.prototype, "lbtextrandom", void 0);
r([ l(a.default) ], e.prototype, "lbGold", void 0);
r([ l(a.default) ], e.prototype, "lbVippoint", void 0);
return n = r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
HeaderCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a51eW1XyhOt6qP45H4JoA1", "HeaderCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./MVUtils"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nAccount = null;
e.nLogin = null;
return e;
}
e.prototype.onEnable = function() {
lngui.ZLog.log("HeaderCtrl ===================" + lngui.GameCoreManager.instance.isLoginSuccess);
this.nAccount.active = lngui.GameCoreManager.instance.isLoginSuccess;
this.nLogin.active = !lngui.GameCoreManager.instance.isLoginSuccess;
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSucess, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGOUT, this.onLogout, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSucess, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGOUT, this.onLogout, this);
};
e.prototype.onLoginSucess = function() {
this.nAccount.active = !0;
this.nLogin.active = !1;
};
e.prototype.onLogout = function() {
this.nAccount.active = !1;
this.nLogin.active = !0;
};
e.prototype.onClickFacebook = function() {
c.MVUtils.onFacebook();
};
e.prototype.onLogoutClicked = function() {
var t = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn có chắc chắn muốn thoát khỏi trò chơi?", t);
};
r([ p(cc.Node) ], e.prototype, "nAccount", void 0);
r([ p(cc.Node) ], e.prototype, "nLogin", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
IconAnGameScene: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "713c7rEt+dImrqM9bJdxfnG", "IconAnGameScene");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
this.isTest && this._countOpenGame >= this.numOfClick ? t.prototype._onClicked.call(this) : lngui.UIPopupManager.instance.showPopup("Đang bảo trì!");
this._countOpenGame++;
};
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconAnGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2c0fbSn7stCHqz3in00fODx", "IconAnGame");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
this.isTest && this._countOpenGame >= this.numOfClick ? t.prototype._onClicked.call(this) : lngui.UIPopupManager.instance.showPopup("Đang bảo trì!");
this._countOpenGame++;
};
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconBanCa: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "49b12s81Z9HvaYra2eUWGet", "IconBanCa");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconMiniPoker: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "95b79PfFo9Fc6If94sDzKYo", "IconMiniPoker");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniTaiXiu: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ff069evfzhDJK5I8Yp0OMyo", "IconMiniTaiXiu");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniTomCuaCa: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "67e00FaupRPvIof7YcGKiTO", "IconMiniTomCuaCa");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconTestGameCards: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0e089P3sfFL1qVUaxzipJ2G", "IconTestGameCards");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
if (this.isTest && this._countOpenGame >= this.numOfClick) {
t.prototype._onClicked.call(this);
lngui.GameCoreManager.instance.setGameID(this.gameID);
} else lngui.UIPopupManager.instance.showPopup("Game Sắp Ra Mắt!");
this._countOpenGame++;
};
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
ItemGiftBigBang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7ffcdMNs9pMkKnSNkPVasCw", "ItemGiftBigBang");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./MVUtils"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_title = null;
e.label_money = null;
e.icon_gift = null;
e.ls_icon_gift = [];
e.btn_recive = null;
e.ls_rank = [ "Giải nhất", "Giải nhì", "Giải ba" ];
e.dataItem = null;
return e;
}
e.prototype.start = function() {};
e.prototype.setInfo = function(t) {
this.dataItem = t;
this.label_title.string = "";
this.icon_gift.spriteFrame = this.ls_icon_gift[t.Type - 1];
1 == t.Type ? this.label_money.string = "" : this.label_money.string = t.PrizeDescription;
this.btn_recive.interactable = !t.IsAward;
};
e.prototype.onClickRecive = function() {
var t = this, e = {
token: lngui.UserManager.instance.mainUserInfo.GameToken,
EventPrizeId: this.dataItem.EventPrizeID
};
c.MVUtils.post("https://api.${lngui.ConfigManager.instance.ConfigInfo.Api}/api/Event/RaceDailyVPReward", e, function(e, n) {
console.log("-=ress     ", n);
if (e >= 200 && e < 400 && 1 == n.ResponseCode) {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, n.Balance);
t.btn_recive.interactable = !1;
}
lngui.UIPopupManager.instance.showPopup(n.Message);
});
};
r([ p(cc.Label) ], e.prototype, "label_title", void 0);
r([ p(cc.Label) ], e.prototype, "label_money", void 0);
r([ p(cc.Sprite) ], e.prototype, "icon_gift", void 0);
r([ p([ cc.SpriteFrame ]) ], e.prototype, "ls_icon_gift", void 0);
r([ p(cc.Button) ], e.prototype, "btn_recive", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
ItemMail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6ee50OxiEBBh5EcEWrRQnEV", "ItemMail");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./GUIAccountMail"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbTitle = null;
e.btnXoaMail = null;
e.lbTime = null;
e.lbNew = null;
e.idMail = -1;
e.mailType = null;
e.link = null;
e.giftcode = !1;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_END, function() {
t.readMail(t.idMail);
});
};
e.prototype.readMail = function(t) {
var e = this, n = {
Type: 2,
MailID: t
};
s.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.READ_MAIL, n, function(t, n) {
t >= 200 && t < 400 ? 1 == n.ResponseCode ? e.lbNew.node.active = !1 : lngui.UIPopupManager.instance.showPopup(n.Message) : lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onBtnXoaMail = function(t, e) {
s.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.DEL_MAIL, {
Type: -1,
MailID: e
}, function(t, e) {
if (t >= 200 && t < 400) {
lngui.UITextManager.showCenterNotification("Xóa thành công!");
a.default.instance.requestMail();
} else lngui.UIPopupManager.instance.showPopup(e);
});
};
e.prototype.initData = function(t) {
this.idMail = t.ID;
this.mailType = t.Type;
1 == t.Status ? this.lbNew.node.active = !0 : this.lbNew.node.active = !1;
this.lbTitle.string = t.Title;
this.lbTime.string = s.MVUtils.formatDateTime(t.CreatedTime);
};
e.prototype.onClickMailDetail = function(t, e) {
a.default.instance.mailList.active = !1;
a.default.instance.mailDetail.active = !0;
a.default.instance.initMailContent(e);
};
r([ u(cc.Label) ], e.prototype, "lbTitle", void 0);
r([ u(cc.Button) ], e.prototype, "btnXoaMail", void 0);
r([ u(cc.Label) ], e.prototype, "lbTime", void 0);
r([ u(cc.Sprite) ], e.prototype, "lbNew", void 0);
return r([ l ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./GUIAccountMail": "GUIAccountMail",
"./MVUtils": "MVUtils"
} ],
ItemNapX3: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "32e11V+jIBA1bZe3TguE4Eq", "ItemNapX3");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./MVUtils"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.icon = null;
e.label_gold = null;
e.label_reward = null;
e.sp_progress = null;
e.lb_progress = null;
e.btn_confirm = null;
e.lb_status = null;
e.node_gift = null;
e.ls_sf_icon = [];
e.dataItem = {
$id: "3",
Amount: 0,
PrizeValue: 0,
Progress: 0,
RechargeType: 2,
RemainTime: 0,
Status: 0
};
return e;
}
e.prototype.updateInfo = function(t) {
this.dataItem = t;
this.icon.spriteFrame = this.ls_sf_icon[this.dataItem.RechargeType - 1];
this.lb_progress.string = this.dataItem.Progress + "%";
this.sp_progress.fillRange = this.dataItem.Progress / 100;
this.label_gold.string = c.MVUtils.formatNumber(this.dataItem.Amount);
this.label_reward.string = c.MVUtils.formatNumber(this.dataItem.PrizeValue);
this.lb_status.string = [ "Hết hạn", "Chưa hoàn thành", "Đang trong tiến trình", "Hoàn thành", "Đã nhận thưởng" ][this.dataItem.Status + 1];
cc.Tween.stopAllByTarget(this.node_gift);
if (100 == this.dataItem.Progress && 2 == this.dataItem.Status) {
this.node_gift.color = cc.Color.WHITE;
cc.tween(this.node_gift).repeatForever(cc.tween().by(.2, {
y: 10
}, {
easing: cc.easing.sineIn
}).by(.2, {
y: -10
}, {
easing: cc.easing.sineIn
})).start();
} else {
this.node_gift.color = cc.Color.GRAY;
this.btn_confirm.node.color = cc.Color.GRAY;
}
};
e.prototype.onClickConfirm = function() {
var t = this, e = this.dataItem.RechargeType, n = this.dataItem.Status;
if (-1 != n) if (0 != n) if (1 != n) {
if (2 == n) c.MVUtils.post("https://api.${lngui.ConfigManager.instance.ConfigInfo.Api}/api/Event/GetX3Reward", {
RechargeType: e
}, function(e, n) {
if (1 == n.ResponseCode) {
t.node_gift.color = cc.Color.GRAY;
t.btn_confirm.node.color = cc.Color.GRAY;
cc.Tween.stopAllByTarget(t.node_gift);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, n.Balance);
}
lngui.UIPopupManager.instance.showPopup(n.Message);
}); else if (3 == n) {
lngui.UITextManager.showCenterNotification("Bạn đã nhận thưởng rồi");
return;
}
} else lngui.UITextManager.showCenterNotification("Hãy hoàn thành tiến trình nạp"); else lngui.UITextManager.showCenterNotification("Hãy bắt đầu tiến trình nạp"); else lngui.UITextManager.showCenterNotification("Phần thưởng đã hết hạn");
};
r([ p(cc.Sprite) ], e.prototype, "icon", void 0);
r([ p(cc.Label) ], e.prototype, "label_gold", void 0);
r([ p(cc.Label) ], e.prototype, "label_reward", void 0);
r([ p(cc.Sprite) ], e.prototype, "sp_progress", void 0);
r([ p(cc.Label) ], e.prototype, "lb_progress", void 0);
r([ p(cc.Button) ], e.prototype, "btn_confirm", void 0);
r([ p(cc.Label) ], e.prototype, "lb_status", void 0);
r([ p(cc.Node) ], e.prototype, "node_gift", void 0);
r([ p([ cc.SpriteFrame ]) ], e.prototype, "ls_sf_icon", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
ItemRankBigBang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "10769ZX8kFJib/g5p0RYBCs", "ItemRankBigBang");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_rank = null;
e.icon_rank = null;
e.label_name = null;
e.label_point = null;
e.label_gift = null;
e.icon_gift = null;
e.ls_sf_icon_rank = [];
e.ls_sf_icon_gift = [];
return e;
}
e.prototype.start = function() {};
e.prototype.setInfo = function(t, e) {
this.label_rank.string = e + "";
this.icon_rank.node.active = e <= 3;
e <= 3 && (this.icon_rank.spriteFrame = this.ls_sf_icon_rank[e - 1]);
this.label_name.string = t.GameAccountName;
this.label_point.string = t.TotalVPString;
if (t.Type >= 6) {
this.label_gift.string = t.PrizeDescription;
this.icon_gift.node.active = !1;
} else {
this.label_gift.string = "";
this.icon_gift.node.active = !0;
this.icon_gift.spriteFrame = this.ls_sf_icon_gift[t.Type - 1];
}
};
r([ s(cc.Label) ], e.prototype, "label_rank", void 0);
r([ s(cc.Sprite) ], e.prototype, "icon_rank", void 0);
r([ s(cc.Label) ], e.prototype, "label_name", void 0);
r([ s(cc.Label) ], e.prototype, "label_point", void 0);
r([ s(cc.Label) ], e.prototype, "label_gift", void 0);
r([ s(cc.Sprite) ], e.prototype, "icon_gift", void 0);
r([ s([ cc.SpriteFrame ]) ], e.prototype, "ls_sf_icon_rank", void 0);
r([ s([ cc.SpriteFrame ]) ], e.prototype, "ls_sf_icon_gift", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
ItemTopJackpotCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c7e213v/PZHe6KcAMZ6T63a", "ItemTopJackpotCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbJackpot = null;
e.lbGameName = null;
e.spIcon = null;
e.icontayduky = null;
e.iconankhe = null;
e.iconcunghi = null;
e.iconkbtl = null;
e.iconngulong = null;
e.iconsttt = null;
e.icontw = null;
e.iconthantai = null;
e.iconbaucuato = null;
e.icontrenduoi = null;
e.iconbanca = null;
e.iconMiniPoker = null;
e.iconXeng777 = null;
e.m_IdGame = -1;
return e;
}
e.prototype.updateGoldJackpot = function(t) {
this.lbJackpot.scheduleProgress(t, .5);
};
e.prototype.setData = function(t, e) {
this.m_IdGame = t;
switch (t) {
case c.GAME_IDS.ANKHE:
this.lbGameName.string = "Ăn Khế Trả Vàng";
this.spIcon.spriteFrame = this.iconankhe;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.TDK:
this.lbGameName.string = "Tây Du Ký";
this.spIcon.spriteFrame = this.icontayduky;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.TW:
this.lbGameName.string = "The Witcher";
this.spIcon.spriteFrame = this.icontw;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.THANTAI:
this.lbGameName.string = "Thần Tài";
this.spIcon.spriteFrame = this.iconthantai;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.STTT:
this.lbGameName.string = "Sơn Tinh Thủy Tinh";
this.spIcon.spriteFrame = this.iconsttt;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.KBTL:
this.lbGameName.string = "Kho Báu Tứ Linh";
this.spIcon.spriteFrame = this.iconkbtl;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.NGULONG:
this.lbGameName.string = "Ngũ Long";
this.spIcon.spriteFrame = this.iconngulong;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.MINIPOKER:
this.lbGameName.string = "MiniPoker";
this.spIcon.spriteFrame = this.iconMiniPoker;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.BAUCUATO:
this.lbGameName.string = "Bầu Cua";
this.spIcon.spriteFrame = this.iconbaucuato;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.BANCA:
this.lbGameName.string = "Bắn Cá";
this.spIcon.spriteFrame = this.iconbanca;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.ET:
this.lbGameName.string = "Kim Cương";
this.spIcon.spriteFrame = this.iconXeng777;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.XEDIEN:
this.lbGameName.string = "Trên Dưới";
this.spIcon.spriteFrame = this.icontrenduoi;
this.updateGoldJackpot(e);
}
};
e.prototype.onShowGameClicked = function() {
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.m_IdGame);
};
r([ l(a.default) ], e.prototype, "lbJackpot", void 0);
r([ l(cc.Label) ], e.prototype, "lbGameName", void 0);
r([ l(cc.Sprite) ], e.prototype, "spIcon", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "icontayduky", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconankhe", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconcunghi", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconkbtl", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconngulong", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconsttt", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "icontw", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconthantai", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconbaucuato", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "icontrenduoi", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconbanca", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconMiniPoker", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconXeng777", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
JackpotBySlot: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "44997m/iLpMhYzy9a4OvCNb", "JackpotBySlot");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameID = c.GAME_IDS.NONE;
e.lbJackpot1 = null;
e.lbJackpot2 = null;
e.lbJackpot3 = null;
return e;
}
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.updateJackpot = function() {
var t, e = this;
c.LobbyConst.slotByKeys.forEach(function(n, o) {
o != e.gameID || (t = n);
});
if (t) for (var n = 0; n < t.length; n++) {
4 == t.length ? this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t[3], 8) : this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t[2], 8);
1 == n ? this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t[n], 8) : 0 == n && this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t[n], 8);
}
};
r([ l({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot1", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot2", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot3", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
LobbAudioDefined: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "590f2JSWmRPELkqE/Ra6jXp", "LobbAudioDefined");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.music_bgm = null;
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
r([ s(cc.AudioClip) ], e.prototype, "music_bgm", void 0);
return n = r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
LobbyConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6b25cz4Ct5PVrB3sRlPhBbp", "LobbyConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.getStringBodyByObject = n.GAME_IDS = n.LobbyConst = n.Platform = void 0;
var o;
(function(t) {
t[t.INVALID = 0] = "INVALID";
t[t.ANDROID = 1] = "ANDROID";
t[t.WINDOWS = 2] = "WINDOWS";
t[t.IOS = 3] = "IOS";
t[t.WEB = 4] = "WEB";
t[t.MAC = 5] = "MAC";
})(o = n.Platform || (n.Platform = {}));
var i = function() {
function t() {}
Object.defineProperty(t, "platform", {
get: function() {
var t = o.INVALID;
cc.sys.isBrowser ? t = o.WEB : cc.sys.os == cc.sys.OS_ANDROID ? t = o.ANDROID : cc.sys.os == cc.sys.OS_IOS ? t = o.IOS : cc.sys.os == cc.sys.OS_WINDOWS ? t = o.WINDOWS : cc.sys.os == cc.sys.OS_OSX ? t = o.MAC : lngui.ZLog.log("Unsupport platform");
return t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "OSName", {
get: function() {
return cc.sys.isBrowser ? "web" : cc.sys.os == cc.sys.OS_ANDROID ? "android" : cc.sys.os == cc.sys.OS_OSX || cc.sys.os == cc.sys.OS_IOS ? "ios" : void 0;
},
enumerable: !1,
configurable: !0
});
t.BUILD_VERSION = "v_23_23072021_";
t.usernameRegEx = /^(?:[A-Za-z0-9_.@]{6,32})$/;
t.passwordRegEx = /^(?:[A-Za-z0-9~!@#$%^&*()_+`\-=\[\]{};':"\\|,.<>\/?]{6,35})$/;
t.slotByKeys = new Map();
t.listEventByDay = [];
t.timerSMS = 30;
t.MERCHANT_GIFTCODE = {
ID: 100011,
KEY: "123456"
};
t.URL = {
Gate: "&gate=" + lngui.ConfigManager.instance.ConfigInfo.Gate
};
t.API = {
URL: "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/",
LOGIN: "user/login",
REGISTRY: "user/createAccount",
GET_INFO_ACCOUNT: "Account/Vp",
UPDATE_DISPLAYNAME: "Account/UpdateUserFullName",
UPDATE_AVATAR: "Account/updateAvatar",
CHANGE_PASS: "Account/ChangePass",
CHECK_OTP: "Privacy/VerifyOTP",
GET_INFO_OTP: "Account/GetInfo?",
REGISTER_OTP: "Account/RegisterOTP",
DELETE_MOBILE: "Account/deleteMobile",
UPDATE_MOBILE: "Account/updateMobile",
GET_OTP: "Account/sendOtpTele",
REG_MOBILE: "Account/registerOTP",
GET_OTP_SMS: "Account/getOTPSMS",
GET_OTP_TRANFER: "Account/getOTPSMSTranfer",
GET_FROZEB: "Account/getFrozen?",
FROZEB: "Account/frozen",
GIFT_CODE: "Account/GiftCode",
LOGIN_VIP_CODE: "Account/LoginVipcode",
VIP_POINT_TRADE: "Account/VipPointTrade",
VIP_POINT_RANK: "Account/getRankingVip",
CAST_OUT: "payment/TransferCashout",
DELETE_PHONE: "Account/deleteMobile",
GET_BANK_ACCOUNTINFO: "payment/GetBankAccountInfo",
UPDATE_BANK_ACCOUNTINFO: "payment/MapBankAccount",
LIST_BANK_IN: "payment/GetListBankIn",
LIST_BANK_OUT: "payment/GetListBankOut",
REQUEST_BANK: "payment/BankRequest",
MOMO_REQUEST: "payment/MomoRequest",
RATE_CARD: "payment/GetChargeRate",
REQUEST_CASH_IN: "payment/rechargecard",
REQUEST_CARD: "payment/CardRequest",
CARD_TYPE: "payment/GetCardTypes",
LIST_AGENCY: "Agency/GetAgencies",
REQUEST_TRANSFER: "payment/Transfer",
MOMO_INFO: "payment/MomoGetAccount",
LIST_HISTORY: "payment/UserCashHistory",
LIST_HISTORY_BANKMANUAL: "payment/GetManualBankRequestHistory",
LIST_HISTORY_ALLGAME: "payment/getTransactionLogs",
GET_UNREAD_MAIL: "Mail/MailUnRead",
GET_LIST_MAIL: "Mail/GetUserMail",
READ_MAIL: "Mail/UpdateStatus",
DEL_MAIL: "Mail/UpdateStatus",
MUA_THE: "payment/muaThe",
OTP_RESET_PASSWORD: "Account/GetOTPResetPassword",
RESET_PASSWORD: "Account/ResetPassword"
};
t.EVENT_NAME = {
BUNDLEMINI_DOWNLOAD_SUCCESS: "BUNDLEMINI_DOWNLOAD_SUCCESS",
BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT: "BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT",
EVENT_UPDATE_JACKPOT: "EVENT_UPDATE_JACKPOT",
CHANGE_TAB_UI: "CHANGE_TAB_UI",
GET_LIST_MAIL: "GET_LIST_MAIL",
GET_DETAIL_MAIL: "GET_DETAIL_MAIL",
EVENT_DETAIL_MAIL: "notify_detail_mail",
USER_MAIL: "UserMail",
NEW_MAIL: "notifyNewMail",
COUNT_MAIL_MAIN: "count_mail0",
SHOW_BANNER_PROMOTION: "SHOW_BANNER_PROMOTION",
REQUEST_EVENT_RANK: "REQUEST_EVENT_RANK",
NOTIFY_SYSTEM: "NOTIFY_SYSTEM"
};
t.SETTING_ID = {
SMSPLUS_REGISTER_TYPE: 1,
SMSPLUS_DEL_OTP_TYPE: 3,
SMSPLUS_INFO: 1,
SMSPLUS_REGISTER: 2,
SMSPLUS_DEL_PHONE: 5,
FROZEN: 1,
UNFROZEN: 2,
GIFT_CODE: 1,
VIP_CODE: 2,
OTP: 3
};
t.StringDefine = {
INPUT_GIFT_CODE: "Vui lòng nhập GiftCode",
INPUT_VIP_CODE: "Vui lòng nhập VipCode",
INPUT_OTP: "Vui lòng nhập mã OTP",
STR_NETWORK_ERROR: "Mạng không ổn định, hãy kiểm tra Wifi hoặc 3G của bạn."
};
return t;
}();
n.LobbyConst = i;
(function(t) {
t[t.NONE = -1] = "NONE";
t[t.THANTAI = 5001] = "THANTAI";
t[t.TDK = 103] = "TDK";
t[t.NGULONG = 514] = "NGULONG";
t[t.CUNGHI = 512] = "CUNGHI";
t[t.STTT = 511] = "STTT";
t[t.XEDIEN = 999] = "XEDIEN";
t[t.ET = 115] = "ET";
t[t.TW = 513] = "TW";
t[t.KBTL = 1235] = "KBTL";
t[t.BIMAT = 515] = "BIMAT";
t[t.MEOTAILOC = 516] = "MEOTAILOC";
t[t.TRENDUOI = 517] = "TRENDUOI";
t[t.CHOTET = 518] = "CHOTET";
t[t.BAUCUATO = 519] = "BAUCUATO";
t[t.AVIATOR = 520] = "AVIATOR";
t[t.LINHCHAUTY = 525] = "LINHCHAUTY";
t[t.BMW = 526] = "BMW";
t[t.BONGDA = 7007] = "BONGDA";
t[t.MINIPOKER = 41] = "MINIPOKER";
t[t.TAIXIU = 89] = "TAIXIU";
t[t.TAIXIUMD5 = 90] = "TAIXIUMD5";
t[t.TAIXIULIVE = 521] = "TAIXIULIVE";
t[t.XOCDIALIVE = 522] = "XOCDIALIVE";
t[t.ANKHE = 5002] = "ANKHE";
t[t.BANCA = 123] = "BANCA";
t[t.XOCDIA = 333] = "XOCDIA";
t[t.GAME_POKER = 107] = "GAME_POKER";
t[t.GAME_TLMN_DL = 100] = "GAME_TLMN_DL";
t[t.GAME_MAUBINH = 7] = "GAME_MAUBINH";
t[t.GAME_BA_CAY = 102] = "GAME_BA_CAY";
t[t.GAME_SAMLOC = 101] = "GAME_SAMLOC";
})(n.GAME_IDS || (n.GAME_IDS = {}));
n.getStringBodyByObject = function(t) {
if (!t) return "";
var e = [];
for (var n in t) e.push(n + "=" + encodeURIComponent(t[n]));
return "?" + e.join("&");
};
cc._RF.pop();
}, {} ],
LobbyCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a3832nwcBdNMKefpx7BqvfH", "LobbyCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./BannerPromotion"), s = t("./network/NetworkPortal"), p = t("./network/NotificationNetworkHandle"), l = cc._decorator, u = l.ccclass, h = l.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfUpdateDisplayName = null;
e.prefabOTP = null;
e.nWidgetIcon = null;
e.NodeActivePhone = null;
e.PreBigBangIcon = null;
e.scrollview = null;
e.prefabx3 = null;
e.Img = [];
e.ImgRandom = null;
e.listEventByDay = [];
return e;
}
e.prototype.update = function() {
if (this.node.active) for (var t = cc.rect(-this.scrollview.content.x, -this.scrollview.node.height / 2, this.scrollview.node.width, this.scrollview.node.height), e = 0; e < this.scrollview.content.children.length; e++) {
var n = this.scrollview.content.children[e];
t.intersects(n.getBoundingBox()) ? n.opacity = 255 : n.opacity = 0;
}
};
e.prototype.start = function() {};
e.prototype.getGameEventByDay = function() {
var t = new Date();
if (t.getMonth() + 1 >= 13) {
var e = new Array(7);
e[0] = "Sunday";
e[1] = "Monday";
e[2] = "Tuesday";
e[3] = "Wednesday";
e[4] = "Thursday";
e[5] = "Friday";
e[6] = "Saturday";
var n = [];
switch (e[t.getDay()]) {
case "Monday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.LONGVUONG);
break;

case "Tuesday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.ANGRYBIRD);
break;

case "Wednesday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.LIENMINH);
break;

case "Thursday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.LONGVUONG);
break;

case "Friday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.MINIPOKER);
break;

case "Saturday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.RUNGRAM);
break;

case "Sunday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.TAYDUKY);
}
} else c.LobbyConst.listEventByDay = [ c.GAME_IDS.LONGVUONG, c.GAME_IDS.TAYDUKY, c.GAME_IDS.FROZEN, c.GAME_IDS.SINBAD, c.GAME_IDS.RUNGRAM, c.GAME_IDS.MINIPOKER ];
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSuccess, this);
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION, this.loadBannerPromotion, this);
this._addGUIOTP();
this._addWidgetIcon();
this.getGameEventByDay();
this.ImgRandom.spriteFrame = this.Img[0];
this.onImgRandom();
lngui.UserManager.instance.gateInfo = c.LobbyConst.Gate;
var t = cc.Canvas.instance.getComponent(p.default);
t ? t.mSignalr || t.connect() : cc.Canvas.instance.addComponent(p.default).connect();
var e = cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon");
e && (e.active = !0);
};
e.prototype.removeBigBangIcon = function() {
cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon") && (cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon").active = !1);
};
e.prototype.loadBannerPromotion = function() {
lngui.UIPopupManager.instance.has(a.default);
};
e.prototype._addWidgetIcon = function() {
if (!lngui.GameCoreManager.instance.nMiniGames.getChildByName("nWidgetIcon")) {
var t = cc.instantiate(this.nWidgetIcon);
t.name = "nWidgetIcon";
lngui.GameCoreManager.instance.nMiniGames.addChild(t);
}
};
e.prototype._addGUIOTP = function() {
var t = {
namePrefab: "GUI_OTP",
prfDefined: this.prefabOTP
};
lngui.CommonAssetDefined.instance.listPrefabDefined.push(t);
};
e.prototype.onDisable = function() {
lngui.AudioManager.instance.pauseMusic();
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSuccess, this);
var t = cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon");
t && (t.active = !1);
};
e.prototype.onLoginSuccess = function() {
console.log(lngui.UserManager.instance.mainUserInfo);
if (null == lngui.UserManager.instance.mainUserInfo.NickName || "" == lngui.UserManager.instance.mainUserInfo.NickName) {
lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfUpdateDisplayName);
(t = cc.Canvas.instance.getComponent(s.default)) ? t.connect() : cc.Canvas.instance.addComponent(s.default).connect();
} else {
var t;
(t = cc.Canvas.instance.getComponent(s.default)) ? t.connect() : cc.Canvas.instance.addComponent(s.default).connect();
}
};
e.prototype.onImgRandom = function() {
var t = this;
this.schedule(function() {
t.ImgRandom.spriteFrame = t.Img[Math.floor(Math.random() * t.Img.length)];
}, 10);
};
r([ h(cc.Prefab) ], e.prototype, "prfUpdateDisplayName", void 0);
r([ h(cc.Prefab) ], e.prototype, "prefabOTP", void 0);
r([ h(cc.Prefab) ], e.prototype, "nWidgetIcon", void 0);
r([ h(cc.Node) ], e.prototype, "NodeActivePhone", void 0);
r([ h(cc.Prefab) ], e.prototype, "PreBigBangIcon", void 0);
r([ h(cc.ScrollView) ], e.prototype, "scrollview", void 0);
r([ h(cc.Prefab) ], e.prototype, "prefabx3", void 0);
r([ h(cc.SpriteFrame) ], e.prototype, "Img", void 0);
r([ h(cc.Sprite) ], e.prototype, "ImgRandom", void 0);
return r([ u ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./BannerPromotion": "BannerPromotion",
"./network/NetworkPortal": "NetworkPortal",
"./network/NotificationNetworkHandle": "NotificationNetworkHandle"
} ],
Lobby_MiniGameNavigator: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "17186JZy8dBJp0coDZ023Kr", "Lobby_MiniGameNavigator");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nBg = null;
return e;
}
e.prototype.start = function() {
this.nBg.opacity = 255;
this.nBg.scale = 0;
var t = cc.spawn(cc.scaleTo(.24, 1), cc.rotateBy(.5, 360));
this.nBg.runAction(t);
};
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS, this.hide, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable.call(this);
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS, this.hide, this);
};
r([ p(cc.Node) ], e.prototype, "nBg", void 0);
return r([ s ], e);
}(lngui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
Lobby_UIDraggable: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9be29xRiu5CyJjMEFV1n4r1", "Lobby_UIDraggable");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.draggable = !0;
e.backToStartPosition = !1;
e.autoFitEdge = !1;
return e;
}
r([ s ], e.prototype, "draggable", void 0);
r([ s ], e.prototype, "backToStartPosition", void 0);
r([ s ], e.prototype, "autoFitEdge", void 0);
return r([ a ], e);
}(lngui.UIDraggable);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UINumericLabelHelper: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6aa8bFsEZpNjIqUqHxoX0hf", "Lobby_UINumericLabelHelper");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ a ], e);
}(lngui.UINumericLabelHelper));
n.default = s;
cc._RF.pop();
}, {} ],
Lobby_UIScrollBar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a6f97L48btM7LQAKF6khlKX", "Lobby_UIScrollBar");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.handle = null;
e.direction = lngui.UIScrollBarDirection.VERTICAL;
e.enableAutoHide = !0;
e.autoHideTime = 1;
return e;
}
r([ s(cc.Sprite) ], e.prototype, "handle", void 0);
r([ s({
type: cc.Enum(lngui.UIScrollBarDirection)
}) ], e.prototype, "direction", void 0);
r([ s(cc.Boolean) ], e.prototype, "enableAutoHide", void 0);
r([ s(cc.Float) ], e.prototype, "autoHideTime", void 0);
return r([ a ], e);
}(lngui.UIScrollBar);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UIShowPopupHelp: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d0169/XWbxHQKww7MnOyWnF", "Lobby_UIShowPopupHelp");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = "";
return e;
}
e.prototype.onEnable = function() {
this.node.getComponent(cc.Button) || this.node.addComponent(cc.Button);
this.node.on(lngui.ControlEvent.Click, this._onClicked, this);
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
this.node.runAction(cc.scaleTo(.2, .92, .92));
}.bind(this));
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
this.node.runAction(cc.scaleTo(.2, 1, 1));
}.bind(this));
};
e.prototype.onDisable = function() {
this.node.off(lngui.ControlEvent.Click, this._onClicked, this);
};
e.prototype._onClicked = function() {
lngui.UIPopupManager.instance.showPopup(this.text);
};
r([ s ], e.prototype, "text", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UIShowToolTip: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "48d7b9tUTVPYKyHs0k6iVYu", "Lobby_UIShowToolTip");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = "";
return e;
}
e.prototype.onEnable = function() {
this.node.getComponent(cc.Button) || this.node.addComponent(cc.Button);
this.node.on(lngui.ControlEvent.Click, this._onClicked, this);
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
this.node.runAction(cc.scaleTo(.2, .92, .92));
}.bind(this));
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
this.node.runAction(cc.scaleTo(.2, 1, 1));
}.bind(this));
};
e.prototype.onDisable = function() {
this.node.off(lngui.ControlEvent.Click, this._onClicked, this);
};
e.prototype._onClicked = function() {
lngui.UIPopupManager.instance.showPopup(this.text);
};
r([ s ], e.prototype, "text", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UITableView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "498cbDOIwhMmZQNxq7SA5ho", "Lobby_UITableView");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./Lobby_UIScrollBar"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.direction = lngui.UIScrollDirection.BOTH;
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
e.fillOrder = lngui.UITableViewFillOrder.LEFT_TO_RIGHT__TOP_TO_BOTTOM;
e.interactionMode = lngui.UITableViewInteractionMode.NONE;
e.cellPagingEnabled = !1;
e.numberOfPagingCell = 1;
e.tableCell = null;
e.nEmpty = null;
return e;
}
r([ p({
type: cc.Enum(lngui.UIScrollDirection)
}) ], e.prototype, "direction", void 0);
r([ p ], e.prototype, "zoomScaleEnabled", void 0);
r([ p ], e.prototype, "maxScale", void 0);
r([ p ], e.prototype, "minScale", void 0);
r([ p(cc.Node) ], e.prototype, "content", void 0);
r([ p ], e.prototype, "scrollEnabled", void 0);
r([ p ], e.prototype, "touchEnabled", void 0);
r([ p ], e.prototype, "dragChildrenEnabled", void 0);
r([ p ], e.prototype, "easingAutoScroll", void 0);
r([ p ], e.prototype, "movementFactor", void 0);
r([ p(c.default) ], e.prototype, "horizontalScrollBar", void 0);
r([ p(c.default) ], e.prototype, "verticalScrollBar", void 0);
r([ p ], e.prototype, "autoClearAutoScroll", void 0);
r([ p ], e.prototype, "autoClearAutoZoomScale", void 0);
r([ p({
type: cc.Enum(lngui.UITableViewFillOrder)
}) ], e.prototype, "fillOrder", void 0);
r([ p({
type: cc.Enum(lngui.UITableViewInteractionMode)
}) ], e.prototype, "interactionMode", void 0);
r([ p(cc.Boolean) ], e.prototype, "cellPagingEnabled", void 0);
r([ p(cc.Integer) ], e.prototype, "numberOfPagingCell", void 0);
r([ p(cc.Prefab) ], e.prototype, "tableCell", void 0);
r([ p(cc.Node) ], e.prototype, "nEmpty", void 0);
return r([ s ], e);
}(lngui.UITableView);
n.default = l;
cc._RF.pop();
}, {
"./Lobby_UIScrollBar": "Lobby_UIScrollBar"
} ],
LoginByLanding: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ed3f8QGDo1Jh7D8nmdXAlvf", "LoginByLanding");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.loginWithToken();
};
e.prototype.loginWithToken = function() {
var t = this;
if (cc.sys.isBrowser) {
var e = window.location.href, n = e.slice("https://web.big79.club/token=".length, e.length);
if (n && !(n.length < 30)) {
var o = "https://api.${lngui.ConfigManager.instance.ConfigInfo.Api}/Authen/GetAuthentication?token=" + n;
lngui.Https.getRaw(o, function(e, o) {
if (200 == e) {
var i = JSON.parse(o);
i.GameToken = n;
lngui.UserManager.instance.mainUserInfo = i;
lngui.UserManager.instance.mainUserInfo.UserName = i.UserName;
lngui.UserManager.instance.mainUserInfo.NickName = i.UserName;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
t.requestAccount(i);
}
});
}
}
};
e.prototype.requestAccount = function() {
var t = this;
a.MVUtils.get(c.LobbyConst.API.URL + c.LobbyConst.API.GET_INFO_ACCOUNT, {}, function(e, n) {
lngui.UserManager.instance.mainUserInfo.TotalVipPoint = n.TotalVipPoint;
lngui.UserManager.instance.mainUserInfo.VipPoint = n.VipPoint;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
t.requestUnreadMail();
});
};
e.prototype.requestUnreadMail = function() {
var t = c.LobbyConst.API.URL + c.LobbyConst.API.GET_UNREAD_MAIL;
lngui.Https.get(t, function(t) {
lngui.ZLog.log("requestUnreadMail ===" + JSON.stringify(t));
t && t.ResponseCode;
});
};
return r([ p ], e);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
LoginCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "65be4uyy4xF46qG67e6b51q", "LoginCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAccount = null;
e.edbPass = null;
e.edbCaptcha = null;
e.UICaptcha = null;
e.nCapcha = null;
e.nButton = null;
e.toggleSaveAccount = null;
return e;
}
e.prototype.onEnable = function() {
this.nButton.y = 0;
this.nCapcha.active = !1;
var t = lngui.ClientData.getBoolean("SAVE_PASS", !0);
this.toggleSaveAccount.isChecked = t;
this.edbAccount.string = lngui.ClientData.getString("USER_NAME", "");
this.edbPass.string = lngui.ClientData.getString("PASSWORD", "");
};
e.prototype.onClickLoginFB = function() {};
e.prototype.onClickLogin = function() {
var t = this, e = this.edbAccount.string.trim();
e = e.toLowerCase();
var n = this.edbPass.string.trim(), o = window.md5(e.toLowerCase() + "zxc" + n.toLowerCase());
if (e.length <= 0) lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập tên tài khoản"); else if (n.length <= 0) lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu"); else {
var i = {
UserName: e,
Password: window.md5(n),
passraw: n,
IpAddress: "",
DeviceName: "Chrome",
PlatformId: c.LobbyConst.platform,
deviceID: lngui.PlatformInterface.deviceID,
platform: lngui.PlatformInterface.platform,
OSName: lngui.PlatformInterface.OSName,
deviceToken: lngui.PlatformInterface.deviceToken,
phoneNumber: lngui.PlatformInterface.phoneNumber,
OSVersion: lngui.PlatformInterface.OSVersion,
appVersion: lngui.PlatformInterface.appVersion,
versionCode: lngui.PlatformInterface.versionCode,
bundleID: lngui.PlatformInterface.bundleID,
UIID: "",
MerchantId: 1002,
CaptchaText: this.edbCaptcha.string,
CaptchaToken: 1 == this.nCapcha.active ? this.UICaptcha.getComponent(a.default).getCapChaId() : "",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
otp: "",
Sid: o
};
s.MVUtils.postRaw(c.LobbyConst.API.URL + c.LobbyConst.API.LOGIN, i, function(e, n) {
e >= 200 && e < 400 ? n && t.onLoginSuccess(n, function() {
s.MVUtils.get(c.LobbyConst.API.URL + c.LobbyConst.API.GET_INFO_ACCOUNT, {}, function(e, n) {
lngui.UserManager.instance.mainUserInfo.PassWord = i.Password;
lngui.UserManager.instance.mainUserInfo.UserName = i.UserName;
lngui.UserManager.instance.mainUserInfo.TotalVipPoint = n.TotalVipPoint;
lngui.UserManager.instance.mainUserInfo.VipPoint = n.VipPoint;
lngui.UserManager.instance.mainUserInfo.Level = n.Level;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
t.requestUnreadMail();
});
}) : lngui.UIPopupManager.instance.showPopup(n);
}, !1, !0);
}
};
e.prototype.onLoginSuccess = function(t, e) {
lngui.UserManager.instance.mainUserInfo = t;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_VIPPOINT, lngui.UserManager.instance.mainUserInfo.TotalVipPoint);
this.hide();
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
if (this.toggleSaveAccount.isChecked) {
lngui.ClientData.setString("USER_NAME", this.edbAccount.string);
lngui.ClientData.setString("PASSWORD", this.edbPass.string);
} else {
this.edbAccount.string = "";
this.edbPass.string = "";
lngui.ClientData.setString("USER_NAME", this.edbAccount.string);
lngui.ClientData.setString("PASSWORD", this.edbPass.string);
}
e && e();
};
e.prototype.setCookie = function() {};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.getCapChaId();
};
e.prototype.onToggleSavePass = function(t) {
var e = t.isChecked;
lngui.ClientData.setBoolean("SAVE_PASS", e);
};
e.prototype.requestUnreadMail = function() {
var t = c.LobbyConst.API.URL + c.LobbyConst.API.GET_UNREAD_MAIL;
lngui.Https.get(t, function(t) {
lngui.ZLog.log("requestUnreadMail ===" + JSON.stringify(t));
t && t.ResponseCode;
});
};
r([ u(cc.EditBox) ], e.prototype, "edbAccount", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ u(a.default) ], e.prototype, "UICaptcha", void 0);
r([ u(cc.Node) ], e.prototype, "nCapcha", void 0);
r([ u(cc.Node) ], e.prototype, "nButton", void 0);
r([ u(cc.Toggle) ], e.prototype, "toggleSaveAccount", void 0);
return r([ l ], e);
}(lngui.UIPopup);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
MVUtils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "51eddUDQF1F05VZcf0ZIFjr", "MVUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.MVUtils = void 0;
var o = function() {
function t() {}
t.formatDateTime = function(t) {
if ("" != t.length && 0 != t.length) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + "/" + e[0] + " - " + t[1].substr(0, 5);
}
};
t.formatNumber = function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
t.toInt = function(t) {
if ("" == t) return 0;
cc.log("before==" + t);
var e = t.split(".").join("");
cc.log("after==" + e);
return parseInt(e);
};
t.ToVND = function(t) {
var e = t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
null != e && "NaN" != e || (e = 0);
return e;
};
t.getToken = function() {
return this.getStringBodyByObject({
token: lngui.UserManager.instance.mainUserInfo.GameToken
}, void 0);
};
t.getStringBodyByObject = function(t, e) {
if (!t) return "";
if (null != e && e) return JSON.stringify(t);
var n = [];
for (var o in t) n.push(o + "=" + encodeURIComponent(t[o]));
return "?" + n.join("&");
};
t.getRaw = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = r;
c.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
o && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, JSON.parse(c.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send();
};
t.postRaw = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = r;
c.open("POST", t);
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
o && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, JSON.parse(c.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send(JSON.stringify(e));
};
t.post = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = r;
c.open("POST", t + this.getToken());
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
o && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, JSON.parse(c.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send(JSON.stringify(e));
};
t.post2 = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = r;
c.open("POST", t + this.getToken());
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
o && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send(JSON.stringify(e));
};
t.get = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
e.token = lngui.UserManager.instance.mainUserInfo.GameToken;
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = r;
c.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
o && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, JSON.parse(c.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send();
};
t.getOtpSMS = function() {
this.get("https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/Account/getOTPSMS", {}, function(t, e) {
if (t >= 200 && t < 400) {
lngui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
} else lngui.UIPopupManager.instance.showPopup(e);
});
};
t.removeVietnameseTones = function(t) {
return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/Đ/g, "D")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")).replace(/\u02C6|\u0306|\u031B/g, "")).replace(/ + /g, " ")).trim()).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
};
t.onFacebook = function() {
var t = this;
if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) if (sdkbox.PluginFacebook.isLoggedIn()) fgui.UserManager.instance.mainUserInfo.facebookToken = sdkbox.PluginFacebook.getAccessToken(); else {
cc.log("FB to Login");
sdkbox.PluginFacebook.login([ "public_profile", "email" ]);
} else if (null != this.sdkFbWeb) {
cc.log("Login fb web");
try {
FB.getLoginStatus(function(e) {
if ("connected" === e.status) {
fgui.UserManager.instance.mainUserInfo.facebookToken = e.authResponse.accessToken;
cc.log("Configs.Login.AccessTokenFB auth:" + JSON.stringify(e));
} else "not_authorized" === e.status || FB.login(t.fbRespone, {
scope: "email,public_profile"
});
});
} catch (t) {}
} else this.sdkFbWeb = new facebookSdk("426698672356843", "email,public_profile", this.fbRespone);
};
t.fbRespone = function(t) {
if ("200" != t.status) "wait" != t.response && cc.log(JSON.stringify(t)); else {
cc.log("fbRespone:" + JSON.stringify(t));
fgui.UserManager.instance.mainUserInfo.facebookToken = t.response.authResponse.accessToken;
fgui.UserManager.instance.mainUserInfo.facebookID = t.response.authResponse.userID;
}
};
t.hideMiddle = function(t, e, n) {
var o = new RegExp("^(\\+?\\d{" + e + "})(\\d+)(\\d{" + n + "})$");
return t.replace(o, function(t, e, n, o) {
return e + "*".repeat(n.length) + o;
});
};
t.sdkFbWeb = null;
return t;
}();
n.MVUtils = o;
cc._RF.pop();
}, {} ],
NetworkPortal: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "50da5BoJcVFnpPT2A3XGYP/", "NetworkPortal");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "portalHub_net";
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
var t = {
hub: "portalHub",
url: "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate"
};
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, t.url, t.hub, "", !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGOUT, this.closeWS, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGOUT, this.closeWS, this);
this.closeWS();
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
lngui.ZLog.log("=====================CONNECT WS NOTI===============================" + JSON.stringify(t));
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
lngui.ZLog.log("onWebSocketCallback: ", o.M + ": " + JSON.stringify(i));
switch (o.M) {
case "playerLeave":
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
lngui.UIPopupManager.instance.showPopup("Tài khoản của bạn đã bị đăng nhập ở chỗ khác");
break;

case "topup":
1 == i.Status ? lngui.GameCoreManager.instance.updateTotalGold(i.balance) : lngui.UIPopupManager.instance.showPopup(i.msg);
}
}
}
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("NotificationNetworkHandle Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var n;
e._instance = null;
return n = r([ a ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
NotiRunItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ad5ffKiZKdBjqMQvMFTKodO", "NotiRunItem");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.mIsReady = !0;
e.mSpaceX = 15;
e.mSpeed = 90;
e.mNotifySystem = null;
return e;
}
e.prototype.onLoad = function() {
this.node.anchorX = 0;
};
e.prototype.init = function(t) {
this.mNotifySystem = t;
this.setDefault();
};
e.prototype.setDefault = function() {
this.node.active = !1;
this.node.x = 575;
this.content.string = "";
this.mIsReady = !0;
};
e.prototype.setContent = function(t) {
this.content.string = t;
};
e.prototype.setReady = function(t) {
this.mIsReady = t;
};
e.prototype.isReady = function() {
return this.mIsReady;
};
e.prototype.runNoify = function() {
var t = this;
this.mIsReady = !1;
this.node.active = !0;
this.node.stopAllActions();
var e = -this.node.width - this.mSpaceX, n = Math.abs(e) / this.mSpeed, o = -this.node.width - (this.mNotifySystem.nodeContent.width - Math.abs(e)), i = Math.abs(o) / this.mSpeed;
this.node.runAction(cc.sequence(cc.moveBy(n, e, 0), cc.callFunc(function() {
t.mNotifySystem.mIsReady = !0;
t.mNotifySystem.runNotify();
}, this), cc.moveBy(i, o, 0), cc.callFunc(function() {
t.setDefault();
t.mNotifySystem.checkEmptyContent();
}, this)));
};
r([ s(cc.RichText) ], e.prototype, "content", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
NotiRun: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "69b92KAzsFIqLLj/7ibvdgo", "NotiRun");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.NOTIFY_TYPE = n.DataNotify = void 0;
var c, a = t("../network/NotificationNetworkHandle"), s = t("../../LobbyConst"), p = t("./NotiRunItem"), l = cc._decorator, u = l.ccclass, h = l.property, f = function() {
this.content = "";
this.type = 0;
};
n.DataNotify = f;
(function(t) {
t[t.ADMIN = 1] = "ADMIN";
t[t.MONEY_WIN = 2] = "MONEY_WIN";
})(c = n.NOTIFY_TYPE || (n.NOTIFY_TYPE = {}));
var d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listNotifyItem = [];
e.nodeContent = null;
e.listNotifyMoneyWin = [];
e.listNotifyAdmin = [];
e.mIsReady = !1;
return e;
}
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(s.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, this.onRunText, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(s.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, this.onRunText, this);
};
e.prototype.onRunText = function(t) {
null == t && a.default.instance.sendNotifyRun();
for (var e = 0; e < this.listNotifyItem.length; e++) this.listNotifyItem[e].init(this);
this.updateNotify(t);
};
e.prototype.getGameNameById = function(t) {
var e = "";
switch (t) {
case s.GAME_IDS.MINIPOKER:
e = "MiniPoker";
break;

case s.GAME_IDS.TAIXIU:
e = "Tài Xỉu";
break;

case s.GAME_IDS.TAIXIUMD5:
e = "Tài Xỉu Md5";
break;

default:
e = "" + t;
}
return e;
};
e.prototype.updateNotify = function(t) {
var e = "", n = [ "thắng", "nổ hũ" ];
if (t) {
t = t.Data;
for (var o = 0; o < t.length; o++) {
e = t[o].gameId > 7 ? "<size=20>" + (0 == o ? "Chúc mừng người chơi" : "") + " <color=#FF6600>" + (t[o].UserName, 
t[o].UserName) + "</color> " + n[t[o].NType - 1] + " <color=#FF0000>" + lngui.StringUtils.formatNumber(t[o].Amount) + "</color> Game <color=#FF0000>" + t[o].gameID + "</color>" + (o == t.length - 1 ? "" : ",") + "</size>" : "<size=20>" + (0 == o ? "Chúc mừng người chơi" : "") + " <color=#FF6600>" + (t[o].UserName, 
t[o].UserName) + "</color> " + n[0] + " <color=#FF0000>" + lngui.StringUtils.formatNumber(t[o].Amount) + "</color> Game <color=#FF0000>" + this.getGameNameById(t[o].GameID) + "</color>" + (o == t.length - 1 ? "" : ",") + "</size></size>";
var i = new f();
i.content = e;
i.type = c.MONEY_WIN;
this.addNotify(i);
}
}
};
e.prototype.addNotify = function(t) {
t.type == c.MONEY_WIN ? this.listNotifyMoneyWin.push(t) : t.type == c.ADMIN && this.listNotifyAdmin.push(t);
if (!this.mIsReady) {
this.node.active = !0;
this.runNotify();
}
};
e.prototype.getNotifyReady = function() {
for (var t = 0; t < this.listNotifyItem.length; t++) if (this.listNotifyItem[t].isReady()) return this.listNotifyItem[t];
return null;
};
e.prototype.runNotify = function() {
this.mIsReady = !0;
var t = this.getNotifyReady();
if (t) {
var e = null;
this.listNotifyAdmin.length > 0 ? e = this.listNotifyAdmin.shift() : this.listNotifyMoneyWin.length > 0 && (e = this.listNotifyMoneyWin.shift());
if (e && "" != e.content) {
t.setContent(e.content);
t.runNoify();
} else {
this.mIsReady = !1;
a.default.instance.sendNotifyRun();
}
}
};
e.prototype.checkEmptyContent = function() {
for (var t = !1, e = 0; e < this.listNotifyItem.length; e++) if (!this.listNotifyItem[e].isReady()) {
t = !0;
break;
}
this.mIsReady = t;
this.node.active = t;
};
e.instance = null;
r([ h(p.default) ], e.prototype, "listNotifyItem", void 0);
r([ h(cc.Node) ], e.prototype, "nodeContent", void 0);
return r([ u ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"../network/NotificationNetworkHandle": "NotificationNetworkHandle",
"./NotiRunItem": "NotiRunItem"
} ],
NotificationNetworkHandle: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d49d4pTbZtBr5HXvzAt99Nj", "NotificationNetworkHandle");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = t("../GateJackpotNoti"), s = cc._decorator, p = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "notify_event";
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
var t = {
hub: "GateHub",
url: "https://noti." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate"
};
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.off(c.LobbyConst.EVENT_NAME.GET_LIST_MAIL, this.getUnReadMail, this);
cc.systemEvent.on(c.LobbyConst.EVENT_NAME.GET_LIST_MAIL, this.getUnReadMail, this);
cc.systemEvent.off(c.LobbyConst.EVENT_NAME.GET_DETAIL_MAIL, this.getDetailMail, this);
cc.systemEvent.on(c.LobbyConst.EVENT_NAME.GET_DETAIL_MAIL, this.getDetailMail, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, t.url, t.hub, "", !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
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
}
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
switch (o.M) {
case "jackpots":
this.onGetListJackPot(i);
break;

case "UserMail":
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.USER_MAIL, i);
break;

case "notifyNewMail":
break;

case "mailContent":
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.EVENT_DETAIL_MAIL, i);
break;

case "NotifyJackpot":
break;

case "NotifySystem":
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, i);
}
}
}
};
e.prototype.getMail = function() {
this.sendSignalR("GetUserMail", []);
};
e.prototype.getDetailMail = function(t) {
this.sendSignalR("GetUserMailContent", [ t ]);
};
e.prototype.deleteMail = function(t) {
this.sendSignalR("DeleteUserMail", [ t ]);
};
e.prototype.getUnReadMail = function() {
this.sendSignalR("GetUnReadUserMailQuantity", []);
};
e.prototype.connectSuccess = function() {
this.sendSignalR("GetGeneralNotification", []);
this.scheduleOnce(function() {
n.instance.sendNotifyRun();
}, 1);
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
e.prototype.sendNotifyRun = function() {
console.log("=====GetSystemNotification -----\x3e");
this.sendSignalR("GetSystemNotification", [ 0 ]);
};
e.prototype.onTestSendSocketClicked = function() {
this.sendSignalR("GetUserMail", []);
};
e.prototype.onGetListJackPot = function(t) {
if (t && Array.isArray(t)) {
for (var e = t.length, n = 0; n < e; n++) if (89 == t[n].GameID || 90 == t[n].GameID || 1236 == t[n].GameID) {
var o = (r = {
slotID: t[n].GameID,
listJackPot: JSON.parse(t[n].JackpotFund)
}).listJackPot.length, i = r.listJackPot;
c.LobbyConst.slotByKeys.set(r.slotID, i);
} else {
o = (r = {
slotID: t[n].GameID,
listJackPot: t[n].JackpotFund.split("|")
}).listJackPot.length;
for (var r, a = [], s = 0; s < o; s++) a.push(parseInt(r.listJackPot[s]));
c.LobbyConst.slotByKeys.set(r.slotID, a);
}
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT);
}
};
e.prototype.showJackpotNotify = function(t) {
var e = lngui.EBundle_Name.LOBBY;
lngui.BundleManager.instance.getPrefabFromBundle("prefabs/GateJackpotNotify", e, function(e) {
var n = cc.instantiate(e);
lngui.GameCoreManager.instance.nWidgetShowJackpot.addChild(n);
var o = n.getComponent(a.default);
o && o.showJackpot(t);
});
};
var n;
e._instance = null;
return n = r([ p ], e);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"../GateJackpotNoti": "GateJackpotNoti"
} ],
OpenUrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fdad7/FnzVGQIEH3Ihxq/j2", "OpenUrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onBtnClick = function(t, e) {
cc.sys.openURL(e);
};
return r([ a ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
RegisterCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9766EnY81CLoCN+Ya8puza", "RegisterCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = t("./utils/CapchaZ"), p = cc._decorator, l = p.ccclass, u = p.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAccount = null;
e.edbPass = null;
e.edbRePass = null;
e.edbCaptcha = null;
return e;
}
e.prototype.onClickReg = function() {
var t = this, e = this.edbAccount.string.trim(), n = this.edbPass.string.trim(), o = this.edbRePass.string.trim(), i = (this.edbCaptcha.string, 
window.md5(e.toLowerCase() + "zxc" + n.toLowerCase()));
if (e.length > 18 || e.length < 6 || e.indexOf(" ") > 0 || e.indexOf("@") > 0) lngui.UIPopupManager.instance.showPopup("Tên tài khoản phải từ 6 - 18 ký tự, viết liền không dấu, không có ký tự đặc biệt!"); else if (n.length < 6 || n.length > 18) lngui.UIPopupManager.instance.showPopup("Mật khẩu phải có độ dài từ 6 - 18 ký tự!"); else if (n === o) {
lngui.ZLog.log('======"PlatformID": LobbyConst.platform==============' + c.LobbyConst.platform);
var r = {
username: e,
password: window.md5(n),
verify: this.UICaptcha.getComponent(s.default).getCapChaId(),
captcha: this.edbCaptcha.string,
Email: "fff",
landingHost: lngui.PlatformInterface.bundleID,
PlatformID: c.LobbyConst.platform,
deviceID: lngui.PlatformInterface.deviceID,
platform: lngui.PlatformInterface.platform,
OSName: lngui.PlatformInterface.OSName,
deviceToken: lngui.PlatformInterface.deviceToken,
phoneNumber: lngui.PlatformInterface.phoneNumber,
OSVersion: lngui.PlatformInterface.OSVersion,
appVersion: lngui.PlatformInterface.appVersion,
versionCode: lngui.PlatformInterface.versionCode,
bundleID: lngui.PlatformInterface.bundleID,
MerchantID: "1",
ServiceID: "1",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
Sid: i
};
a.MVUtils.postRaw(c.LobbyConst.API.URL + c.LobbyConst.API.REGISTRY, r, function(e, n) {
if (e >= 200 && e < 400) t.onLoginSuccess(n, function() {
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.GET_INFO_ACCOUNT + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(t) {
lngui.UserManager.instance.mainUserInfo.VipPoint = t.VipPoint;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
lngui.UserManager.instance.mainUserInfo.PassWord = r.password;
});
}); else {
t.onRefreshCaptchaClicked();
lngui.UIPopupManager.instance.showPopup(n);
}
});
} else lngui.UIPopupManager.instance.showPopup("Mật khẩu nhập lại không trùng với mật khẩu đã nhập.");
};
e.prototype.onLoginSuccess = function(t, e) {
lngui.UserManager.instance.mainUserInfo = t;
this.hide();
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
e && e();
};
e.prototype.onRefreshCaptchaClicked = function() {};
r([ u(cc.EditBox) ], e.prototype, "edbAccount", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbRePass", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
return r([ l ], e);
}(lngui.UIPopup);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
TabTypeGameCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9205OA5INPFLbKqXgtwJU3", "TabTypeGameCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listAllGame = null;
e.listGameSlots = [];
e.listMiniGame = [];
e.listCardGame = [];
e.listLive = [];
e.listTheThao = [];
e.taball = null;
e.tabcard = null;
e.tabslot = null;
e.tabmini = null;
e.tablive = null;
e.tabthethao = null;
return e;
}
e.prototype.showAllGame = function() {
var t = this;
this.listAllGame.children.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !0;
t.tabcard.getChildByName("2").active = !1;
t.tabslot.getChildByName("2").active = !1;
t.tabmini.getChildByName("2").active = !1;
t.tablive.getChildByName("2").active = !1;
t.tabthethao.getChildByName("2").active = !1;
});
};
e.prototype.showAllSlots = function() {
var t = this;
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listGameSlots.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !1;
t.tabcard.getChildByName("2").active = !1;
t.tabslot.getChildByName("2").active = !0;
t.tabmini.getChildByName("2").active = !1;
t.tablive.getChildByName("2").active = !1;
t.tabthethao.getChildByName("2").active = !1;
});
};
e.prototype.showMiniGame = function() {
var t = this;
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listMiniGame.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !1;
t.tabcard.getChildByName("2").active = !1;
t.tabslot.getChildByName("2").active = !1;
t.tabmini.getChildByName("2").active = !0;
t.tablive.getChildByName("2").active = !1;
t.tabthethao.getChildByName("2").active = !1;
});
};
e.prototype.showCardGame = function() {
var t = this;
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listCardGame.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !1;
t.tabcard.getChildByName("2").active = !0;
t.tabslot.getChildByName("2").active = !1;
t.tabmini.getChildByName("2").active = !1;
t.tablive.getChildByName("2").active = !1;
t.tabthethao.getChildByName("2").active = !1;
});
};
e.prototype.showLive = function() {
var t = this;
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listLive.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !1;
t.tabcard.getChildByName("2").active = !1;
t.tabslot.getChildByName("2").active = !1;
t.tabmini.getChildByName("2").active = !1;
t.tablive.getChildByName("2").active = !0;
t.tabthethao.getChildByName("2").active = !1;
});
};
e.prototype.showTheThao = function() {
var t = this;
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listTheThao.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !1;
t.tabcard.getChildByName("2").active = !1;
t.tabslot.getChildByName("2").active = !1;
t.tabmini.getChildByName("2").active = !1;
t.tablive.getChildByName("2").active = !1;
t.tabthethao.getChildByName("2").active = !0;
});
};
e.prototype.onUITouchEvent = function(t, e) {
switch (e) {
case "showAll":
this.showAllGame();
break;

case "showSlots":
this.showAllSlots();
break;

case "cardgame":
this.showCardGame();
break;

case "minigame":
this.showMiniGame();
break;

case "live":
this.showLive();
break;

case "thethao":
this.showTheThao();
}
};
r([ s(cc.Node) ], e.prototype, "listAllGame", void 0);
r([ s(cc.Node) ], e.prototype, "listGameSlots", void 0);
r([ s(cc.Node) ], e.prototype, "listMiniGame", void 0);
r([ s(cc.Node) ], e.prototype, "listCardGame", void 0);
r([ s(cc.Node) ], e.prototype, "listLive", void 0);
r([ s(cc.Node) ], e.prototype, "listTheThao", void 0);
r([ s(cc.Node) ], e.prototype, "taball", void 0);
r([ s(cc.Node) ], e.prototype, "tabcard", void 0);
r([ s(cc.Node) ], e.prototype, "tabslot", void 0);
r([ s(cc.Node) ], e.prototype, "tabmini", void 0);
r([ s(cc.Node) ], e.prototype, "tablive", void 0);
r([ s(cc.Node) ], e.prototype, "tabthethao", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
WidgetIconBigbang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3acbcfqXDBEcYeUxomMconC", "WidgetIconBigbang");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./GUIEventBigBang"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfMiniGame = null;
return e;
}
e.prototype.onClick = function() {
lngui.UIPopupManager.instance.has(c.default) || lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfMiniGame);
};
r([ p(cc.Prefab) ], e.prototype, "prfMiniGame", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./GUIEventBigBang": "GUIEventBigBang"
} ],
WidgetIconCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3c748uOw7NLXpHZ13WZ9nfN", "WidgetIconCtrl");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./utils/Lobby_MiniGameNavigator"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfPopupMinigame = null;
e.buttonClicked = !0;
e.buttonMoved = cc.Vec2.ZERO;
return e;
}
e.prototype.onClick = function() {
lngui.UIPopupManager.instance.has(c.default) || lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfPopupMinigame);
};
e.prototype.onLoad = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t.buttonClicked = !0;
t.buttonMoved = cc.Vec2.ZERO;
console.log("TOUCH_START");
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
t.buttonMoved = t.buttonMoved.add(e.getDelta());
t.buttonClicked && (Math.abs(t.buttonMoved.x) > 30 || Math.abs(t.buttonMoved.y) > 30) && (t.buttonClicked = !1);
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
t.buttonClicked && t.onClick();
}, this);
};
r([ p(cc.Prefab) ], e.prototype, "prfPopupMinigame", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./utils/Lobby_MiniGameNavigator": "Lobby_MiniGameNavigator"
} ]
}, {}, [ "LobbyConst", "BannerPromotion", "BetTX", "EventEDB", "ForgetPassCtrl", "GUIAccountChangePass", "GUIAccountDetail", "GUIAccountMail", "GUIAccountSafe", "GUIAccountSecurity", "GUIAccountSecurityNew", "GUIEventBigBang", "GUIEventX3Nap", "GUIGiftCode", "GUIOTP", "GUISettingCtrl", "GUITopJackpotCtrl", "GUITopupBank", "GUITopupBankManual", "GUITopupCtrl", "GUITopupEWallet", "GUITopupExchange", "GUITopupHistoryAllGame", "GUITopupHistoryBankManual", "GUITopupHistoryNap", "GUITopupHistoryRut", "GUITopupRutBank", "GUITopupTelco", "GUITopupTranfers", "GUIUpdateDisplayName", "GateJackpotNoti", "GateSettingPopup", "GuiTopupRutMomo", "HeaderAccountCtrl", "HeaderCtrl", "ItemGiftBigBang", "ItemMail", "ItemNapX3", "ItemRankBigBang", "ItemTopJackpotCtrl", "JackpotBySlot", "LobbyCtrl", "LoginByLanding", "LoginCtrl", "MVUtils", "OpenUrl", "RegisterCtrl", "TabTypeGameCtrl", "WidgetIconBigbang", "WidgetIconCtrl", "LobbAudioDefined", "BundleMiniGame", "BundleSceneGame", "IconAnGame", "IconAnGameScene", "IconBanCa", "IconMiniPoker", "IconMiniTaiXiu", "IconMiniTomCuaCa", "IconTestGameCards", "NetworkPortal", "NotificationNetworkHandle", "NotiRun", "NotiRunItem", "AutoScroll", "CapchaReal", "CapchaZ", "Lobby_MiniGameNavigator", "Lobby_UIDraggable", "Lobby_UINumericLabelHelper", "Lobby_UIScrollBar", "Lobby_UIShowPopupHelp", "Lobby_UIShowToolTip", "Lobby_UITableView" ]);