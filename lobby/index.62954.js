window.__require = function t(e, o, n) {
function i(a, c) {
if (!o[a]) {
if (!e[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var l = o[a] = {
exports: {}
};
e[a][0].call(l.exports, function(t) {
return i(e[a][1][t] || t);
}, l, l.exports, t, e, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
AutoScroll: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "781548XAiZBNp1chTLEyRwr", "AutoScroll");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
BannerPromotion: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6e4091lTYFCTpNS41XbeME3", "BannerPromotion");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ c ], e);
}(fzgui.UIPopup));
o.default = s;
cc._RF.pop();
}, {} ],
BetTX: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1cdb7vo8odKYLfIyfp3s/FI", "BetTX");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameID = a.GAME_IDS.NONE;
e.lbJackpot1 = null;
e.lbJackpot2 = null;
e.lbJackpot3 = null;
return e;
}
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.updateJackpot = function() {
var t, e = this;
a.LobbyConst.slotByKeys.forEach(function(o, n) {
n != e.gameID || (t = o);
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
type: cc.Enum(a.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot1", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot2", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot3", void 0);
return r([ p ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
BundleMiniGame: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d7ae8W+pkhKN71C0SrSO2su", "BundleMiniGame");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../LobbyConst"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.linkUrl = "";
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
e.gameID = a.GAME_IDS.NONE;
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
fzgui.UIWindowManager.instance.showWindowFromPrefab(t, function(t) {
t.node.name = e.prefabMainNameURL;
});
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS);
}
};
r([ p(cc.String) ], e.prototype, "linkUrl", void 0);
r([ p(cc.String) ], e.prototype, "bundleName", void 0);
r([ p(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ p(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ p(cc.Boolean) ], e.prototype, "isClicked", void 0);
r([ p({
type: cc.Enum(a.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTest", void 0);
r([ p({
visible: function() {
return this.isTest;
}
}) ], e.prototype, "numOfClick", void 0);
return r([ s ], e);
}(fzgui.BundleDownLoad);
o.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
BundleSceneGame: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "19083XsaEZMx7wDy6oqmR1j", "BundleSceneGame");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../LobbyConst"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.linkUrl = "";
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
e.gameID = a.GAME_IDS.NONE;
e.isTest = !1;
e.numOfClick = 10;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
};
e.prototype.onFuturePrefabLoadDone = function(t) {
fzgui.UIScreenManager.instance.pushScreen(t);
};
r([ p(cc.String) ], e.prototype, "linkUrl", void 0);
r([ p(cc.String) ], e.prototype, "bundleName", void 0);
r([ p(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ p(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ p(cc.Boolean) ], e.prototype, "isClicked", void 0);
r([ p({
type: cc.Enum(a.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTest", void 0);
r([ p({
visible: function() {
return this.isTest;
}
}) ], e.prototype, "numOfClick", void 0);
return r([ s ], e);
}(fzgui.BundleDownLoad);
o.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
CapchaReal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d034dREc+xAgbxbpKp4MHg1", "CapchaReal");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
fzgui.Https.get(t, function(t) {
var o = t.data.image;
o = o.replace(/\r\n/g, "");
e.loadImgBinary(o);
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
r([ s(cc.Sprite) ], e.prototype, "capcha", void 0);
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
CapchaZ: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3ce052fYL1H45r8huNtFn/M", "CapchaZ");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
var t = "https://api.dragonf1.xyz/Captcha/Get?length=3&width=90&height=36";
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
r([ s(cc.Sprite) ], e.prototype, "capcha", void 0);
r([ s(cc.Boolean) ], e.prototype, "isTelco", void 0);
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
EventEDB: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "380ffD+S4FA+ZeF4/5i+Dl+", "EventEDB");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
ForgetPassCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "53d8e/wmD9P54A6oSlG7fWr", "ForgetPassCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/CapchaZ"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
if (this.ebAccount.string.length < 6) fzgui.UIPopupManager.instance.showPopup("Tên đăng nhập không đúng!"); else if (this.ebPhoneNumber.string.length < 10) fzgui.UIPopupManager.instance.showPopup("Số điện thoại không đúng!"); else {
this.nStep1.active = !1;
this.nStep2.active = !0;
}
};
e.prototype.onGetOTPClicked = function() {
if (this.ebAccount.string.length < 6) fzgui.UIPopupManager.instance.showPopup("Tên đăng nhập không đúng!"); else if (this.ebPhoneNumber.string.length < 10) fzgui.UIPopupManager.instance.showPopup("Số điện thoại không đúng!"); else {
this.btnGetOtp.interactable = !1;
this.btnGetOtp.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
a.LobbyConst.timerSMS--;
if (a.LobbyConst.timerSMS <= 0) {
this.btnGetOtp.interactable = !0;
a.LobbyConst.timerSMS = 30;
this.btnGetOtp.node.stopAllActions();
}
}, this)).repeatForever());
fzgui.UIWaitingLayout.showWaiting();
var t = {
AccountName: this.ebAccount.string,
Mobile: this.ebPhoneNumber.string
}, e = a.LobbyConst.API.OTP_RESET_PASSWORD, o = this, n = cc.loader.getXMLHttpRequest();
n.onreadystatechange = function() {
fzgui.UIWaitingLayout.hideWaiting();
if (4 == n.readyState) if (200 == n.status) {
var t = JSON.parse(n.responseText);
cc.log("otppp ====> pass: ", t);
o.btnGetOtp.interactable = !0;
a.LobbyConst.timerSMS = 30;
o.btnGetOtp.node.stopAllActions();
fzgui.UIPopupManager.instance.showPopup("OTP đã gửi về số điện thoại của bạn");
o.onContinueClicked();
} else n.responseText.length > 0 && fzgui.UIPopupManager.instance.showPopup(n.responseText);
};
n.ontimeout = function() {
fzgui.UIWaitingLayout.hideWaiting();
};
n.onerror = function() {
fzgui.UIWaitingLayout.hideWaiting();
};
n.timeout = 3e3;
n.open("POST", e, !0);
n.setRequestHeader("Content-Type", "application/json");
n.withCredentials = !0;
n.send(JSON.stringify(t));
}
};
e.prototype.onBackClicked = function() {
this.btnGetOtp.interactable = !0;
this.nStep1.active = !0;
this.nStep2.active = !1;
};
e.prototype.onChangePassClicked = function() {
var t = this.edbOTP.string.trim(), e = this.txtNewPass.string, o = this.txtReNewPass.string, n = this.edbCaptcha.string;
if (0 != t.length) if (0 != e.length) if (e === o) if (0 != n.length) {
fzgui.UIWaitingLayout.showWaiting();
var i = {
AccountName: this.ebAccount.string,
Mobile: this.ebPhoneNumber.string,
Token: this.UICaptcha.getComponent(c.default).getCapChaId(),
Captcha: this.edbCaptcha.string,
OtpType: 1,
NewPassword: e,
Otp: t
};
cc.log(JSON.stringify(i));
var r = a.LobbyConst.API.RESET_PASSWORD, s = this, p = cc.loader.getXMLHttpRequest();
p.onreadystatechange = function() {
fzgui.UIWaitingLayout.hideWaiting();
if (4 == p.readyState) {
s.onRefreshCaptchaClicked();
if (200 == p.status) {
s.hide();
var t = JSON.parse(p.responseText);
cc.log("change pass: ", t);
fzgui.UIPopupManager.instance.showPopup("Đổi mật khẩu thành công");
} else p.responseText.length > 0 ? fzgui.UIPopupManager.instance.showPopup(p.responseText) : fzgui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
}
};
p.ontimeout = function() {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
};
p.onerror = function() {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
};
p.timeout = 3e4;
p.open("POST", r, !0);
p.setRequestHeader("Content-Type", "application/json");
p.withCredentials = !0;
p.send(JSON.stringify(i));
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận"); else fzgui.UIPopupManager.instance.showPopup("Nhập lại mật khẩu mới không đúng"); else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu mới"); else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
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
r([ l(c.default) ], e.prototype, "UICaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtNewPass", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtReNewPass", void 0);
return r([ p ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIAccountChangePass: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "af430Za50VKKrBLoGZg4QQA", "GUIAccountChangePass");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/CapchaZ"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
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
var t = this, e = this.txtOldPass.string, o = this.txtNewPass.string, n = this.txtReNewPass.string, i = this.txtCaptchaChangePass.string;
if (0 != e.length) if (0 != o.length) if (o === n) if (0 != i.length) {
var r = {
sourceId: a.LobbyConst.platform,
newPass: window.md5(o),
oldPass: window.md5(e),
captchaText: i,
captchaToken: this.UICaptcha.getCapChaId()
};
s.MVUtils.post(a.LobbyConst.API.CHANGE_PASS, r, function(e, o) {
if (e >= 200 && e < 400) {
var n = o;
if (null != n) if (null != n.IsOtp && 1 == n.IsOtp) fzgui.UIPopupManager.instance.showPopupFromPrefab(fzgui.CommonAssetDefined.instance.getPrefabByName("GUI_OTP"), function(t) {
t.initData(n.OtpToken, Global.SERVICEID.OTP_SERVICE_CHANGE_PASSWORD);
}); else {
var i = [ fzgui.PopupAction.make("OK", function() {
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
}), fzgui.PopupAction.make("CLOSE", function() {}) ];
fzgui.UIPopupManager.instance.showPopup("Bạn cần đăng ký OTP để thực hiện chức năng này.\nBạn muốn đăng ký OTP không?", i);
t.clearInput();
}
} else {
t.clearInput();
t.onRefreshCaptchaClicked();
fzgui.UIPopupManager.instance.showPopup(o);
}
});
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận"); else fzgui.UIPopupManager.instance.showPopup("Nhập lại mật khẩu mới không đúng"); else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu mới"); else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu cũ");
};
e.prototype.clearInput = function() {
this.onRefreshCaptchaClicked();
this.txtOldPass.string = "";
this.txtNewPass.string = "";
this.txtReNewPass.string = "";
this.txtCaptchaChangePass.string = "";
};
r([ u(c.default) ], e.prototype, "UICaptcha", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtOldPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtNewPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtReNewPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtCaptchaChangePass", void 0);
r([ u(cc.Node) ], e.prototype, "nodeStep1", void 0);
r([ u(cc.Node) ], e.prototype, "nodeStep2", void 0);
return r([ l ], e);
}(fzgui.UIPopup);
o.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIAccountDetail: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b4aaemL11lLvoXxIBnIZrTq", "GUIAccountDetail");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
this.lblNickname.string = fzgui.UserManager.instance.mainUserInfo.NickName;
this.lbCoin.string = fgui.StringUtils.formatNumber(fzgui.UserManager.instance.mainUserInfo.Money);
fzgui.UserManager.instance.mainUserInfo.Mobile ? this.lblPhone.string = c.MVUtils.hideMiddle(fzgui.UserManager.instance.mainUserInfo.Mobile, 2, 3) : this.lblPhone.string = "";
this.lblDiemVip.string = fzgui.UserManager.instance.mainUserInfo.VipPoint + "";
this.lblLevel.string = fzgui.UserManager.instance.mainUserInfo.Level + "";
this.btnSms.active = !(this.lblPhone.string.length > 0);
};
e.prototype.openGuideOTP = function() {
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
};
e.prototype.onLogoutClicked = function() {
var t = [ fzgui.PopupAction.make("OK", function() {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGOUT);
}), fzgui.PopupAction.make("CLOSE", function() {}) ];
fzgui.UIPopupManager.instance.showPopup("Bạn có chắc chắn muốn thoát khỏi trò chơi?", t);
};
e.prototype.onbtnket = function() {
fzgui.UserManager.instance.mainUserInfo.Mobile ? fzgui.UIPopupManager.instance.showPopupFromPrefab(this.PrefabKet) : fzgui.UIPopupManager.instance.showPopup("Bạn cần đăng ký bảo mật để tiếp tục");
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
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountMail: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7f47c5fYaZANqorDhathbD5", "GUIAccountMail");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mailTemplate = null;
e.mailList = null;
e.mailDetail = null;
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
this.mailDetail.active = !1;
this.requestMail();
};
e.prototype.onDisable = function() {};
e.prototype.requestMail = function() {
var t = this, e = a.LobbyConst.API.GET_LIST_MAIL;
c.MVUtils.post(e, {
MailType: 2,
CurrentPage: 1,
PageSize: 25
}, function(e, o) {
e >= 200 && e < 400 ? t.initPanelInbox(o.List) : console.log("err", o);
});
};
e.prototype.initPanelInbox = function(t) {
console.log(t);
if (null != t && !(t.length <= 0)) {
this.mailList.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var o = cc.instantiate(this.mailTemplate);
o.getComponent("ItemMail").initData(t[e]);
o.getComponent(cc.Button).clickEvents[0].customEventData = t[e];
o.getChildByName("btnDelete").getComponent(cc.Button).clickEvents[0].customEventData = t[e].ID;
this.mailList.addChild(o);
}
}
};
e.prototype.initMailContent = function(t) {
this.mailDetail.getChildByName("lblTime").getComponent(cc.Label).string = c.MVUtils.formatDateTime(t.CreatedTime);
this.mailDetail.getChildByName("lblTitle").getComponent(cc.Label).string = t.Title;
this.mailDetail.getChildByName("lblContent").getComponent(cc.Label).string = t.Content;
this.mailDetail.getChildByName("btnUse").active = !1;
};
e.prototype.onActBack = function() {
this.mailList.active = !0;
this.mailDetail.active = !1;
};
var o;
e._instance = null;
r([ l(cc.Prefab) ], e.prototype, "mailTemplate", void 0);
r([ l(cc.Node) ], e.prototype, "mailList", void 0);
r([ l(cc.Node) ], e.prototype, "mailDetail", void 0);
return o = r([ p ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSafe: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e9512sLjkFEb7wom0HBexVs", "GUIAccountSafe");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
var t = c.MVUtils.toInt(this.edbMoneyFreeze.string);
t = Math.abs(t);
this.edbMoneyFreeze.string = c.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbMoneyFreeze.focus();
};
e.prototype.getFrozenValue = function() {
var t = this;
fzgui.UIWaitingLayout.showWaiting();
var e = a.LobbyConst.API.GET_FROZEB, o = {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
token: fzgui.UserManager.instance.mainUserInfo.GameToken
}, n = fzgui.Https.packDataForRequest(o);
fzgui.Https.getRaw(e + n, function(e, o) {
console.log("getFrozenValue ===" + o);
if (e >= 200 && e < 400) {
fzgui.UIWaitingLayout.hideWaiting();
var n = JSON.parse(o), i = n.FrozenValue;
t.frozenVal = i;
var r = n.Balance;
t.lblFreezeBalance.string = fgui.StringUtils.formatNumber(i);
t.lblBalance.string = fgui.StringUtils.formatNumber(r);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, r);
} else {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup(o);
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
var e = this.toNumber(this.edbMoneyFreeze.string), o = this.cbxFreeze.isChecked ? a.LobbyConst.SETTING_ID.FROZEN : a.LobbyConst.SETTING_ID.UNFROZEN;
if (e <= 0) {
var n = [ fzgui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
fzgui.UIPopupManager.instance.showPopup("Giá trị Coin phải lớn hơn 0", n);
} else if (e > fzgui.UserManager.instance.mainUserInfo.Money && o == a.LobbyConst.SETTING_ID.FROZEN) {
n = [ fzgui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
fzgui.UIPopupManager.instance.showPopup("Giá trị Coin phải nhỏ hơn hoặc bằng số dư của bạn", n);
} else if (e > this.frozenVal && o == a.LobbyConst.SETTING_ID.UNFROZEN) {
n = [ fzgui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
fzgui.UIPopupManager.instance.showPopup("Giá trị Coin phải nhỏ hơn hoặc bằng số dư đóng băng của bạn", n);
} else {
fzgui.UIWaitingLayout.showWaiting();
var i = a.LobbyConst.API.FROZEB, r = {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
amount: e,
isFrozen: o,
sourceId: a.LobbyConst.platform,
otp: this.edbOTPSafeStep2.string,
otpType: 1
};
this.executeGETMethod(i, r, function(n, i) {
fzgui.UIWaitingLayout.hideWaiting();
if (i >= 200 && i < 400) {
var r = JSON.parse(n), c = r.FrozenValue, s = r.Balance;
t.frozenVal = c;
fzgui.UserManager.instance.mainUserInfo.Money = s;
t.lblFreezeBalance.string = fgui.StringUtils.formatNumber(c);
t.lblBalance.string = fgui.StringUtils.formatNumber(s);
t.edbOTPSafeStep2.string = "";
t.edbMoneyFreeze.string = "";
o == a.LobbyConst.SETTING_ID.FROZEN ? fzgui.UIPopupManager.instance.showPopup("Bạn đã đóng băng thành công " + e + " Coin") : fzgui.UIPopupManager.instance.showPopup("Bạn đã mở băng thành công " + e + " Coin");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, s);
} else {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup(n);
}
t.btnAccept.interactable = !0;
});
}
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập số Coin");
};
e.prototype.getOtpFreez = function() {
var t = this;
this.btnGetOtpFreezeSafe.interactable = !1;
this.scheduleOnce(function() {
t.btnGetOtpFreezeSafe.interactable = !0;
}, 3);
var e = a.LobbyConst.API.GET_OTP_SMS;
fzgui.Https.get(e, function(t) {
if (cc.js.isNumber(t)) {
fzgui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
} else fzgui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.toNumber = function(t) {
if (t.indexOf(".") >= 0) {
for (var e = t; e.indexOf(".") >= 0; ) e = e.replace(".", "");
return parseInt(e);
}
return parseInt(t);
};
e.prototype.executeGETMethod = function(t, e, o) {
e || (e = {});
if (fzgui.UserManager.instance.mainUserInfo.GameToken) {
e.token = void 0;
e = Object.assign(e, {
token: fzgui.UserManager.instance.mainUserInfo.GameToken
});
}
var n = t + a.getStringBodyByObject(e), i = cc.loader.getXMLHttpRequest();
i.onreadystatechange = function() {
4 === i.readyState && (200 == i.status ? o(i.responseText, i.status) : i.responseText.length > 0 ? o(i.responseText, i.status) : o("error_code : " + i.status, null));
};
i.ontimeout = function() {
o("Hệ thống không phản hồi.", null);
};
i.timeout = 3e4;
i.open("GET", n, !0);
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
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSecurityNew: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "27a50sSsyhLlandscRFb+A+", "GUIAccountSecurityNew");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
if (0 == fzgui.UserManager.instance.mainUserInfo.IsMobileActived) {
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
var o = {
AccountName: fzgui.UserManager.instance.mainUserInfo.UserName,
AccountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
Type: 1,
SecureCode: e,
Mobile: 123123
};
c.MVUtils.post2(a.LobbyConst.API.REG_MOBILE, o, function(e, o) {
if (e >= 200 && e < 400) {
fzgui.UserManager.instance.mainUserInfo.IsMobileActived = !0;
fzgui.UIPopupManager.instance.showPopup(o);
t.NodeRegOtp.active = !1;
t.NodeOtpActive.active = !0;
} else fzgui.UIPopupManager.instance.showPopup(o);
});
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.deletaOTP = function() {
var t = this;
if (0 != this.edbOtp.string.length) {
var e = {
AccountName: fzgui.UserManager.instance.mainUserInfo.UserName,
AccountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
Type: 2,
SecureCode: 987654,
Mobile: 123123
};
c.MVUtils.post2(a.LobbyConst.API.REG_MOBILE, e, function(e, o) {
if (e >= 200 && e < 400) {
fzgui.UserManager.instance.mainUserInfo.IsMobileActived = !1;
fzgui.UIPopupManager.instance.showPopup(o);
t.NodeRegOtp.active = !0;
t.NodeOtpActive.active = !1;
} else fzgui.UIPopupManager.instance.showPopup(o);
});
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
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
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSecurity: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "45a32kM0iRKY6Kqe7N+mRwQ", "GUIAccountSecurity");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
this.lblAccount.string = fzgui.UserManager.instance.mainUserInfo.NickName;
this.setInfo();
};
e.prototype.setInfo = function() {
this.g_isOTP = fzgui.UserManager.instance.mainUserInfo.IsMobileActived;
this._phoneNumber = fzgui.UserManager.instance.mainUserInfo.Mobile || 0;
this.lblPhoneSMSPlus.string = this._phoneNumber;
this.g_isOTP ? this.showPanelSMSPlus(a.LobbyConst.SETTING_ID.SMSPLUS_INFO) : this._phoneNumber && this._phoneNumber.length > 0 ? this.showPanelSMSPlus(a.LobbyConst.SETTING_ID.SMSPLUS_REGISTER) : this.showPanelSMSPlus(a.LobbyConst.SETTING_ID.SMSPLUS_INFO);
};
e.prototype.showPanelSMSPlus = function(t) {
this.panelRegisterSMSPlus.active = !1;
this.edbOTPRegisterAndDel.string = "";
if (t == a.LobbyConst.SETTING_ID.SMSPLUS_DEL_PHONE) {
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
} else if (t == a.LobbyConst.SETTING_ID.SMSPLUS_REGISTER) {
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
} else if (t == a.LobbyConst.SETTING_ID.SMSPLUS_INFO) {
this.btnBack.node.active = !1;
this.btnDeleteMobile.node.active = !1;
if (this.g_isOTP) {
this.lblTitleSMSPlus.string = "THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = c.MVUtils.hideMiddle(this._phoneNumber, 2, 3);
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
if (e.length < 10) fzgui.UIPopupManager.instance.showPopup("Số điện thoại không hợp lệ!"); else {
var o = {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
mobile: e
};
c.MVUtils.post(a.LobbyConst.API.UPDATE_MOBILE, o, function(e, o) {
if (e >= 200 && e < 400) {
fzgui.UIPopupManager.instance.showPopup("Cập nhật thông tin thành công!");
fzgui.UserManager.instance.mainUserInfo.Mobile = o.Mobile;
fzgui.UserManager.instance.mainUserInfo.IsMobileActived = o.IsMobileActived;
fzgui.UserManager.instance.mainUserInfo.IsOtp = o.IsOTP;
t.setInfo();
} else fzgui.UIPopupManager.instance.showPopup(o);
}, !0);
}
};
e.prototype.registerOTP = function(t, e) {
var o = this;
console.log(e);
var n = this.edbOTPRegisterAndDel.string, i = e;
if (0 != n.length) {
var r = {
AccountName: fzgui.UserManager.instance.mainUserInfo.UserName,
AccountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
Type: parseInt(i),
SecureCode: n,
Mobile: this._phoneNumber
};
c.MVUtils.post(a.LobbyConst.API.REG_MOBILE, r, function(t, e) {
if (t >= 200 && t < 400) {
var n = e;
fzgui.UserManager.instance.mainUserInfo.Mobile = n.Mobile;
fzgui.UserManager.instance.mainUserInfo.IsMobileActived = n.IsMobileActived;
fzgui.UserManager.instance.mainUserInfo.IsOtp = n.IsOTP;
o.setInfo();
if (i == a.LobbyConst.SETTING_ID.SMSPLUS_REGISTER_TYPE) {
fzgui.UIPopupManager.instance.showPopup("Đăng ký bảo mật thành công!");
o.showPanelSMSPlus(a.LobbyConst.SETTING_ID.SMSPLUS_INFO);
} else i == a.LobbyConst.SETTING_ID.SMSPLUS_DEL_OTP_TYPE && c.MVUtils.post(a.LobbyConst.API.DELETE_MOBILE, {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
mobile: fzgui.UserManager.instance.mainUserInfo.Mobile
}, function(t, e) {
if (t >= 200 && t < 400) {
var o = [ fzgui.PopupAction.make("OK", function() {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGOUT);
}) ];
fzgui.UIPopupManager.instance.showPopup("Hủy số điện thoại thành công!", o);
} else fzgui.UIPopupManager.instance.showPopup(e);
});
} else fzgui.UIPopupManager.instance.showPopup(e);
});
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.touchGetOtpRegisterPhone = function() {};
e.prototype.onShowPanelRemovePhone = function() {
this.showPanelSMSPlus(a.LobbyConst.SETTING_ID.SMSPLUS_DEL_PHONE);
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
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIEventBigBang: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "902523ic5hBB4yIcUG7XBpS", "GUIEventBigBang");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a, c, s = t("./ItemGiftBigBang"), p = t("./ItemRankBigBang"), l = t("./MVUtils"), u = cc._decorator, f = u.ccclass, h = u.property;
(function(t) {
t[t.DAY = 0] = "DAY";
t[t.FINAL = 1] = "FINAL";
})(a || (a = {}));
(function(t) {
t[t.RANK = 0] = "RANK";
t[t.GIFT = 1] = "GIFT";
t[t.RULE = 2] = "RULE";
})(c || (c = {}));
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
var o = cc.instantiate(this.itemTempleRank).getComponent(p.default);
o.node.parent = this.listView[c.RANK].content;
o.node.active = !0;
o.setInfo(t[e], e + 1);
}
};
e.prototype.loadListGift = function(t) {
for (var e = 0; e < t.length; e++) {
var o = cc.instantiate(this.itemTempleGift).getComponent(s.default);
o.node.parent = this.listView[c.GIFT].content;
o.node.active = !0;
o.setInfo(t[e], e + 1);
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
var o = e < 10 ? "0" + e : e, n = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, i = t.getFullYear(), r = "" + i + n + o, a = cc.instantiate(this.itemTempleDate);
a.active = !0;
a.dataDate = r;
a.parent = this.dropDay.content;
a.getComponentInChildren(cc.Label).string = o + "/" + n + "/" + i;
var c = new cc.Component.EventHandler();
c.target = this.node;
c.component = "GUIEventBigBang";
c.handler = "onClickSelectDate";
a.getComponent(cc.Button).clickEvents = [ c ];
}
};
e.prototype.onClickSelectDate = function(t) {
this.listView[c.RANK].content.destroyAllChildren();
var e = t.target.dataDate, o = {
token: fzgui.UserManager.instance.mainUserInfo.GameToken,
recallCode: e
};
this.reloadListRank("https://api.dragonf1.xyz/api/Event/GetEventRaceVPDaily", o);
var n = e.slice(0, 4), i = e.slice(4, 6), r = e.slice(6, 8);
new Date().getDate() == parseInt(r) ? this.lb_date.string = "Hôm nay" : this.lb_date.string = r + "/" + i + "/" + n;
this.dropDay.node.active = !1;
};
e.prototype.onClickDropDate = function() {
this.dropDay.node.active = !this.dropDay.node.active;
};
e.prototype.onClickTabTop = function() {
if (this.ls_btn_tab_top[1].isChecked) {
this.lb_date.node.parent.active = !1;
this.listView[c.RANK].content.destroyAllChildren();
var t = {
token: fzgui.UserManager.instance.mainUserInfo.GameToken
};
this.reloadListRank("https://api.dragonf1.xyz/api/Event/GetEventRaceVPMonthly", t);
} else {
this.lb_date.node.parent.active = !0;
this.onClickSelectDate({
target: this.dropDay.content.children[0]
}, "");
}
};
e.prototype.reloadListRank = function(t, e) {
var o = this;
l.MVUtils.get(t, e, function(t, e) {
if (t >= 200 && t < 400) {
o.loadListRank(e.LstEventHonors);
null == e.TotalVP ? o.lb_me.string = "Bạn chưa có hạng!" : null == e.TopNo ? o.lb_me.string = "Bạn chưa có hạng!" : o.lb_me.string = "Điểm của bạn <color=yellow>" + e.TotalVP + "</color>   Hạng <color=yellow>" + e.TopNo + "</color>";
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
this.listView[c.GIFT].content.destroyAllChildren();
var e = {
token: fzgui.UserManager.instance.mainUserInfo.GameToken
};
l.MVUtils.get("https://api.dragonf1.xyz/api/Event/GetDailyRewardList", e, function(e, o) {
if (e >= 200 && e < 400) {
console.log("-=-=res gift   ", o);
o.List && t.loadListGift(o.List);
} else console.log(o);
});
} else this.listView[2].node.active = !0;
};
r([ h(cc.Node) ], e.prototype, "itemTempleRank", void 0);
r([ h(cc.Node) ], e.prototype, "itemTempleGift", void 0);
r([ h(cc.Node) ], e.prototype, "itemTempleDate", void 0);
r([ h([ cc.ScrollView ]) ], e.prototype, "listView", void 0);
r([ h([ cc.Toggle ]) ], e.prototype, "ls_btn_tab_top", void 0);
r([ h([ cc.Toggle ]) ], e.prototype, "ls_btn_tab_left", void 0);
r([ h(cc.RichText) ], e.prototype, "lb_me", void 0);
r([ h(cc.ScrollView) ], e.prototype, "dropDay", void 0);
r([ h(cc.Label) ], e.prototype, "lb_date", void 0);
return r([ f ], e);
}(fzgui.UIPopup);
o.default = d;
cc._RF.pop();
}, {
"./ItemGiftBigBang": "ItemGiftBigBang",
"./ItemRankBigBang": "ItemRankBigBang",
"./MVUtils": "MVUtils"
} ],
GUIEventX3Nap: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e2c7a960IZIcLR8JtQsG2yn", "GUIEventX3Nap");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./ItemNapX3"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
c.MVUtils.get("https://api.dragonf1.xyz/api/Event/GetX3Infor", {}, function(e, o) {
e >= 200 && e < 400 && t.parseData(o);
});
};
e.prototype.parseData = function(t) {
console.log("-=-=parseData ", t);
if (1 == t.ResponseCode) {
for (var e = 0; e < t.List.length; e++) {
var o = cc.instantiate(this.template).getComponent(a.default);
o.node.active = !0;
o.updateInfo(t.List[e]);
o.node.parent = this.listView.content;
}
this.listView.vertical = t.List.length > 3;
}
};
e.prototype.onClickTab = function(t) {
for (var e = 0; e < this.ls_btn_tab.length; e++) {
var o = this.ls_btn_tab[e].children[0];
if (t.target === this.ls_btn_tab[e]) {
o.active = !0;
if (0 === e) {
this.node_progress.active = !0;
this.node_rule.active = !1;
} else {
this.node_progress.active = !1;
this.node_rule.active = !0;
}
} else o.active = !1;
}
};
r([ l(cc.Node) ], e.prototype, "template", void 0);
r([ l(cc.ScrollView) ], e.prototype, "listView", void 0);
r([ l(cc.Node) ], e.prototype, "node_progress", void 0);
r([ l(cc.Node) ], e.prototype, "node_rule", void 0);
r([ l([ cc.Node ]) ], e.prototype, "ls_btn_tab", void 0);
return r([ p ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"./ItemNapX3": "ItemNapX3",
"./MVUtils": "MVUtils"
} ],
GUIGiftCode: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9be5cKI7zJMq7+CMpvb7Ae2", "GUIGiftCode");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/CapchaZ"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
this._codeType = a.LobbyConst.SETTING_ID.GIFT_CODE;
null != t && (this._codeType = t);
null != e && (this._uiid = e);
this.init();
};
e.prototype.init = function() {
var t = "";
this._codeType == a.LobbyConst.SETTING_ID.GIFT_CODE && (t = a.LobbyConst.StringDefine.INPUT_GIFT_CODE);
this.txtGiftCode.placeholder = t;
this.onRefreshCaptchaClicked();
};
e.prototype.setGiftcodeText = function(t) {
this.txtGiftCode.string = t;
};
e.prototype.touchBtnGiftcode = function() {
var t, e = this, o = this.txtGiftCode.string;
o = o.replace(" ", "");
var n = this.txtCaptcha.string;
if (o.length <= 0) this._codeType == a.LobbyConst.SETTING_ID.GIFT_CODE ? fzgui.UIPopupManager.instance.showPopup(a.LobbyConst.StringDefine.INPUT_GIFT_CODE) : this._codeType == a.LobbyConst.SETTING_ID.VIP_CODE ? fzgui.UIPopupManager.instance.showPopup(a.LobbyConst.StringDefine.INPUT_VIP_CODE) : this._codeType == a.LobbyConst.SETTING_ID.OTP && fzgui.UIPopupManager.instance.showPopup(a.LobbyConst.StringDefine.INPUT_OTP); else if (n.length <= 0) fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận!"); else {
fzgui.UIWaitingLayout.showWaiting();
var i = {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
accountName: fzgui.UserManager.instance.mainUserInfo.UserName,
nickName: fzgui.UserManager.instance.mainUserInfo.NickName,
giftcode: o,
captcha: n,
verifyCaptcha: this.UICaptcha.getCapChaId(),
uiid: this._uiid,
merchantKey: a.LobbyConst.MERCHANT_GIFTCODE.KEY,
merchantId: a.LobbyConst.MERCHANT_GIFTCODE.ID,
sourceId: a.LobbyConst.platform
}, r = a.getStringBodyByObject({
token: fzgui.UserManager.instance.mainUserInfo.GameToken
});
t = a.LobbyConst.API.GIFT_CODE + r + a.LobbyConst.GATE.URL;
var c = cc.loader.getXMLHttpRequest();
c.onreadystatechange = function() {
if (4 == c.readyState) {
fzgui.UIWaitingLayout.hideWaiting();
if (200 == c.status) e._codeType == a.LobbyConst.SETTING_ID.GIFT_CODE && e.onCheckGiftCode(c.responseText); else if (400 == c.status) {
fzgui.UIPopupManager.instance.showPopup(c.responseText);
e.onRefreshCaptchaClicked();
} else if (e._codeType == a.LobbyConst.SETTING_ID.GIFT_CODE) {
fzgui.UIPopupManager.instance.showPopup("Nhập GiftCode không thành công.\nVui lòng thử lại.");
e.onRefreshCaptchaClicked();
}
}
};
c.ontimeout = function() {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup(a.LobbyConst.StringDefine.STR_NETWORK_ERROR);
};
c.onerror = function() {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup(a.LobbyConst.StringDefine.STR_NETWORK_ERROR);
};
c.timeout = 3e4;
c.open("POST", t, !0);
c.setRequestHeader("Content-Type", "application/json");
c.withCredentials = !0;
c.send(JSON.stringify(i));
}
};
e.prototype.onCheckGiftCode = function(t) {
if (null != t) {
var e = JSON.parse(t);
if (e.Response >= 0) {
var o = "Chúc mừng bạn đã nhận được\n" + fzgui.StringUtils.formatNumber(e.Response);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e.Balance);
var n = [ fzgui.PopupAction.make("OK", function() {}) ];
fzgui.UIPopupManager.instance.showPopup(o, n);
}
}
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
r([ l(c.default) ], e.prototype, "UICaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtGiftCode", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "imgCaptcha", void 0);
return r([ p ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIOTP: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1a890yymXtHIZDKEQ8N6vs+", "GUIOTP");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
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
var e = a.LobbyConst.API.GET_OTP_SMS;
3 == this.otpType && (e = a.LobbyConst.API.GET_OTP_TRANFER);
this.scheduleOnce(function() {
t.btnGetOtpSms.interactable = !0;
}, 3);
fzgui.Https.get(e, function(t) {
if (cc.js.isNumber(t)) {
fzgui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
} else fzgui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.touchXacThuc = function() {
var t = this, e = this.txtOTP.string;
if (0 != e.length) {
var o = {
Otp: e,
OtpType: this.otpType,
OtpToken: this.otpToken,
ServiceId: this.serviceId
}, n = a.getStringBodyByObject({
token: fzgui.UserManager.instance.mainUserInfo.GameToken
}), i = a.LobbyConst.API.CHECK_OTP + n;
fzgui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.onreadystatechange = function() {
if (4 == r.readyState) {
fzgui.UIWaitingLayout.hideWaiting();
if (200 == r.status) {
fzgui.UIPopupManager.instance.showPopup(r.responseText);
t.hide();
} else r.responseText.length > 0 ? fzgui.UIPopupManager.instance.showPopup(r.responseText) : fzgui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công, Vui lòng thử lại!");
}
};
r.ontimeout = function() {
fzgui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công, kiểm tra kết nối internet của bạn!");
fzgui.UIWaitingLayout.hideWaiting();
};
r.onerror = function() {
fzgui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công. Vui lòng thử lại!");
fzgui.UIWaitingLayout.hideWaiting();
};
r.timeout = 3e4;
r.open("POST", i, !0);
r.setRequestHeader("Content-Type", "application/json");
r.withCredentials = !0;
r.send(JSON.stringify(o));
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP");
};
r([ p(cc.EditBox) ], e.prototype, "txtOTP", void 0);
r([ p(cc.Button) ], e.prototype, "btnGetOtpSms", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
o.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
GUISettingCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eb28aej8ZpC7IBPcvjreNwP", "GUISettingCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cbSound = null;
e.cbMusic = null;
return e;
}
e.prototype.onCbSound = function(t) {
fzgui.AudioManager.instance.sfxVolume = t.isChecked ? 1 : 0;
};
e.prototype.onCbMusic = function(t) {
fzgui.AudioManager.instance.musicVolume = t.isChecked ? 1 : 0;
};
e.prototype.onEnable = function() {
var t = fzgui.ClientData.getNumber("music", 1), e = fzgui.ClientData.getNumber("sfx", 1);
0 == t ? this.cbMusic.uncheck() : this.cbMusic.check();
0 == e ? this.cbSound.uncheck() : this.cbSound.check();
};
r([ s(cc.Toggle) ], e.prototype, "cbSound", void 0);
r([ s(cc.Toggle) ], e.prototype, "cbMusic", void 0);
return r([ c ], e);
}(fzgui.UIPopup);
o.default = p;
cc._RF.pop();
}, {} ],
GUITopJackpotCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e4903cXk/RKWIdtsKgPq6fc", "GUITopJackpotCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./game_icon/BundleMiniGame"), s = t("./game_icon/BundleSceneGame"), p = t("./ItemTopJackpotCtrl"), l = t("./utils/Lobby_UITableView"), u = cc._decorator, f = u.ccclass, h = u.property, d = function(t) {
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
var o = t.dequeueCell(), n = o.getComponent(p.default), i = this._data[e], r = this._dataOld.get(e);
r = r || 0;
n.lbJackpot.data = r;
n.lbJackpot.setString(fzgui.StringUtils.formatNumber(r));
this._dataOld.set(e, this._data[e].jackpot);
n.setData(i.gameID, this._data[e].jackpot);
return o;
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
fzgui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.onUpdateListJackpot, this);
fzgui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.onDownloadGameFromItem, this);
this.node.on(fzgui.ControlEvent.TabbarItemSelected, this.onTabbarSelected, this);
this.onUpdateListJackpot();
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.onUpdateListJackpot, this);
fzgui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.onDownloadGameFromItem, this);
this.node.off(fzgui.ControlEvent.TabbarItemSelected, this.onTabbarSelected, this);
};
e.prototype.onDownloadGameFromItem = function(t) {
this.listIconDownLoad.forEach(function(e) {
if (e) {
var o = e.getComponent(c.default) && e.getComponent(c.default).gameID, n = e.getComponent(s.default) && e.getComponent(s.default).gameID;
if (o && o == t || n && n == t) {
e.getComponent(c.default) && e.getComponent(c.default)._onClicked();
e.getComponent(s.default) && e.getComponent(s.default)._onClicked();
}
}
});
};
e.prototype.refreshData = function() {
var t = a.LobbyConst.slotByKeys;
this._data = [];
var e = [], o = Math.max(this.node.getComponent("UITabbarController").curSelectedIndex, 0);
t.forEach(function(t, n) {
t.length - 1 >= o && e.push({
gameID: n,
jackpot: t[o]
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
r([ h(l.default) ], e.prototype, "tbvJackpot", void 0);
r([ h(cc.Node) ], e.prototype, "listIconDownLoad", void 0);
return r([ f ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./ItemTopJackpotCtrl": "ItemTopJackpotCtrl",
"./game_icon/BundleMiniGame": "BundleMiniGame",
"./game_icon/BundleSceneGame": "BundleSceneGame",
"./utils/Lobby_UITableView": "Lobby_UITableView"
} ],
GUITopupBankManual: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f998809LCRBorWJUmvHKdwm", "GUITopupBankManual");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, o) {
var n = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
o(t[i]);
n.node.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GuiTopupBank2.Spinner") ], t);
}();
o.Spinner = u;
var f = function(t) {
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
fzgui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.LIST_BANKMANUAL + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken, function(e) {
console.log(e);
e ? t.listBank = e.Data : fzgui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
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
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = c.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = c.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = c.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
if ("" != this.edbAmount.string) if (c.MVUtils.toInt(this.edbAmount.string) < 1e4) fzgui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 10.000"); else if (c.MVUtils.toInt(this.edbAmount.string) > 3e8) fzgui.UIPopupManager.instance.showPopup("Số tiền tối đa là 300,000,000 Coin"); else if (null != this.bank) {
var t = a.LobbyConst.API.URL + a.LobbyConst.API.REQUEST_MANUALBANK + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken, e = {
os: a.LobbyConst.platform,
ManualBankId: this.bank,
Amount: this.edbAmount.string,
Code: this.edbnote.string,
SenderName: this.edbsender.string
};
fzgui.Https.post(t, e, function(t, e) {
e.ResponseCode < 0 ? fzgui.UIPopupManager.instance.showPopup(e.Description) : e && fzgui.UIPopupManager.instance.showPopup(e);
});
} else fzgui.UIPopupManager.instance.showPopup("Vui lòng chọn ngân hàng!"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng nhập số tiền!");
};
e.prototype.onClickCancel = function() {};
e.prototype.onBtnHuyBo = function() {
this.nodeInfoTransfer.active = !1;
};
e.prototype.onClickCopySTK = function() {
fzgui.PlatformInterface.copy(this.lbAccountId.string);
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
o.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupBank: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6f83aop94JNioUx6gMraHaS", "GUITopupBank");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, o) {
var n = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
o(t[i]);
n.node.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GuiTopupBank.Spinner") ], t);
}();
o.Spinner = u;
var f = function(t) {
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
fzgui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.LIST_BANK_IN + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken + a.LobbyConst.GATE.URL, function(e) {
e ? t.listBank = e : fzgui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
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
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = c.MVUtils.formatNumber(t);
this.lbBigAmount.string = c.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = c.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = c.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
var t = this;
if (null != this.bank) {
var e = a.LobbyConst.API.URL + a.LobbyConst.API.REQUEST_BANK + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken + a.LobbyConst.GATE.URL, o = {
os: a.LobbyConst.platform,
amount: 6e4,
provider: this.bank
};
fzgui.Https.post(e, o, function(e, o) {
if (o.ResponseCode < 0) fzgui.UIPopupManager.instance.showPopup(o.Description); else if (o) {
t.lbStk.string = o.Data.BankNumber;
t.lbBankName.string = o.Data.BankName;
t.lbAccName.string = o.Data.BankAccountName;
t.lbContent.string = o.Data.Content;
t.nodeInfoTransfer.active = !0;
var n = o.Data.QrCode;
n = n.replace(/\r\n/g, "");
t.loadImgBinary(n);
t.setTimeCountDown();
}
});
} else fzgui.UIPopupManager.instance.showPopup("Vui lòng chọn ngân hàng!");
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
fzgui.PlatformInterface.copy(this.lbStk.string);
};
e.prototype.onClickCopyContent = function() {
fzgui.PlatformInterface.copy(this.lbContent.string);
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, o = new Image();
o.width = 250;
o.height = 250;
var n = this;
o.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(o);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
n.QR.spriteFrame = e;
};
o.src = e;
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
o.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "32701gpeuBPPb09K5EcN62J", "GUITopupCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ c ], e);
}(fzgui.UIPopup));
o.default = s;
cc._RF.pop();
}, {} ],
GUITopupEWallet: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3ed3c3pD0dI3oRCO5rUdcbj", "GUITopupEWallet");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, o) {
var n = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
o(t[i]);
n.node.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GUITopupEWallet.Spinner") ], t);
}();
o.Spinner = u;
var f = function(t) {
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
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = c.MVUtils.formatNumber(t);
this.lbBocAmount.string = this.edbAmount.string;
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = c.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = c.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("" != this.edbAmount.string) if (c.MVUtils.toInt(this.edbAmount.string) < 1e4) {
fzgui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 10.000");
this.onClickRefreshCaptcha();
} else if (c.MVUtils.toInt(this.edbAmount.string) > 1e7) {
fzgui.UIPopupManager.instance.showPopup("Số tiền tối đa là 10.000.000");
this.onClickRefreshCaptcha();
} else {
var e = a.LobbyConst.API.URL + a.LobbyConst.API.MOMO_REQUEST + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken, o = {
os: a.LobbyConst.platform,
amount: this.amount,
type: "momo"
};
fzgui.Https.post(e, o, function(e, o) {
if (1 == o.ResponseCode) {
if (o) {
t.lbSdt.string = o.Data.Banknumber;
t.lbAccName.string = o.Data.Bankname;
t.lbContent.string = o.Data.Content;
t.nodeInfoTransfer.active = !0;
t.onClickRefreshCaptcha();
t.clearInput();
}
} else {
fzgui.UIPopupManager.instance.showPopup(o.Description);
t.onClickRefreshCaptcha();
}
});
} else {
this.onClickRefreshCaptcha();
fzgui.UIPopupManager.instance.showPopup("Vui lòng nhập số tiền!");
}
};
e.prototype.onClickCancel = function() {};
e.prototype.onBtnHuyBo = function() {
this.nodeInfoTransfer.active = !1;
};
e.prototype.onClickCopySTK = function() {
fzgui.PlatformInterface.copy(this.lbSdt.string);
};
e.prototype.onClickCopyContent = function() {
fzgui.PlatformInterface.copy(this.lbContent.string);
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
o.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupExchange: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fefcdRa9qVKjLiaLguJ46lr", "GUITopupExchange");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TabCashCard = o.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, o) {
var n = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
o(t[i]);
n.thisNode.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupExchange.Spinner") ], t);
}();
o.Spinner = u;
var f = function() {
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
o.TabCashCard = f;
var h = function(t) {
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
0 == this.listProvider.length && fzgui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.CARD_TYPE + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken, function(e) {
t.listProvider = e.Data;
});
0 == this.listCardRate.length && fzgui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.RATE_CARD + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken, function(e) {
console.log(e.Data[0]);
console.log(e.Data[0].LstCashInDisplay);
if (e) {
var o = e.Data[0].LstCashInDisplay.filter(function(t) {
return t.Amount >= 2e5;
});
t.listCardRate = o;
}
t.ExchangeRate = e.Data[0].ExchangeRate;
t.loadListTiGia();
});
};
e.prototype.loadListTiGia = function() {
for (var t = this.listCardRate, e = 0; e < t.length; e++) {
var o = this.tiGiaContainer.children[e];
o || ((o = cc.instantiate(this.itemTiGiaTemplate)).parent = this.tiGiaContainer);
o.getChildByName("lblValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(t[e].Amount);
o.getChildByName("lblBalance").getComponent(cc.Label).string = c.MVUtils.formatNumber(t[e].Amount * this.ExchangeRate);
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
t.getComponentInChildren(cc.Label).string = c.MVUtils.formatNumber(e.Amount);
}, function(e) {
console.log(e);
t.lbValue.string = c.MVUtils.formatNumber(e.Amount);
t.currentCardValue = e.Amount;
t.lbRequiredChip.string = c.MVUtils.formatNumber(e.Amount * t.ExchangeRate);
});
};
e.prototype.onClickConfirmExChange = function() {
var t = this;
if ("" != this.edbCaptcha.string) if (this.provider) if (0 != this.currentCardValue) {
var e = "";
"VT" == this.provider && (e = "VTT");
"Vina" == this.provider && (e = "VNP");
"Mobi" == this.provider && (e = "VMS");
var o = {
provider: e,
type: 0,
captchaText: this.edbCaptcha.string,
captchaToken: this.sprCaptcha.getComponent("CapchaZ").getCapChaId(),
amount: this.currentCardValue,
merchantId: 1,
sourceId: 1,
quantity: 1
};
c.MVUtils.post(a.LobbyConst.API.MUA_THE, o, function(e, o) {
if (e >= 200 && e < 400) {
t.data = o;
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblCardType").getComponent(cc.Label).string = t.provider;
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblCardValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(t.currentCardValue);
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblBigDoi").getComponent(cc.Label).string = t.lbRequiredChip.string;
t.pnlOTPVerify.active = !0;
t.tabCashCard.step1.active = !1;
} else fzgui.UIPopupManager.instance.showPopup(o);
});
} else fzgui.UIPopupManager.instance.showPopup("Xin vui lòng chọn mệnh giá!"); else fzgui.UIPopupManager.instance.showPopup("Xin vui lòng chọn nhà mạng!"); else fzgui.UIPopupManager.instance.showPopup("Xin vui lòng nhập mã kiểm tra!");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
c.MVUtils.post(a.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2001
}, function(e, o) {
if (200 == e) {
fzgui.UIPopupManager.instance.showPopup("Rút thẻ thành công\nVui lòng đợi NPH duyệt!");
fzgui.UserManager.instance.mainUserInfo.Money = fzgui.UserManager.instance.mainUserInfo.Money - t.currentCardValue;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
} else fzgui.UIPopupManager.instance.showPopup(o);
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
r([ l(f) ], e.prototype, "tabCashCard", void 0);
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
o.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryAllGame: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "62760o5vXBKybXWQZVvHxI1", "GUITopupHistoryAllGame");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID
};
fzgui.UIWaitingLayout.showWaiting();
c.MVUtils.get(a.LobbyConst.API.URL + a.LobbyConst.API.LIST_HISTORY_ALLGAME, e, function(e, o) {
fzgui.UIWaitingLayout.hideWaiting();
e >= 200 && e < 400 ? t.loadListHistory(o) : console.log("err===>", o);
});
};
e.prototype.loadListHistory = function(t) {
this.listHistory = t;
for (var e = 0; e < this.listHistory.length; e++) {
var o = this.listHistory[e], n = this.scrHistory.content.children[e];
if (!n) {
n = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(n);
}
n.active = !0;
var i = o.CreatedTime;
i = (i = i.replace("T", "\n")).substring(0, i.indexOf("."));
n.getChildByName("lblThoiGian").getComponent(cc.Label).string = i;
n.getChildByName("lblDichVu").getComponent(cc.Label).string = o.ServiceName;
n.getChildByName("lblSoTien").getComponent(cc.Label).string = c.MVUtils.formatNumber(o.Amount).toString();
o.Description.length > 29 && (o.Description = o.Description.substring(0, 29) + "...");
n.getChildByName("lblMoTa").getComponent(cc.Label).string = o.Description;
}
};
e.prototype.start = function() {};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryBankManual: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9e60OJcYNGzbGLDcRuAlka", "GUITopupHistoryBankManual");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.LIST_HISTORY_BANKMANUAL + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken;
fzgui.Https.get(e, function(e) {
t.loadListHistory(e.Data);
});
};
e.prototype.loadListHistory = function(t) {
this.scrHistory.content.removeAllChildren(!0);
if (t && 0 != t.length) for (var e = 0; e < t.length; e++) {
var o = t[e], n = this.scrHistory.content.children[e];
if (!n) {
n = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(n);
}
n.active = !0;
n.getChildByName("lblSTT").getComponent(cc.Label).string = o.Id;
var i = o.CreatedDate;
i = (i = i.replace("T", " ")).substring(0, i.indexOf("."));
n.getChildByName("lblTime").getComponent(cc.Label).string = i;
n.getChildByName("lblCardType").getComponent(cc.Label).string = o.BankName;
n.getChildByName("lblCardValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(o.Amount);
-1 == o.Status ? n.getChildByName("lblStatus").getComponent(cc.Label).string = o.Reason : 1 == o.Status ? n.getChildByName("lblStatus").getComponent(cc.Label).string = "Thành công" : "Đang chờ" == o.Status && (n.getChildByName("lblStatus").getComponent(cc.Label).string = "Đang chờ duyệt");
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryNap: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0f1edg/gHBB44ZE3KZnNhOB", "GUITopupHistoryNap");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.LIST_HISTORY + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken + "&inOut=1";
fzgui.Https.get(e, function(e) {
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
var o = t[e], n = this.scrHistory.content.children[e];
if (!n) {
n = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(n);
}
n.active = !0;
n.getChildByName("lblSTT").getComponent(cc.Label).string = o.Id;
var i = o.CreateTime;
i = (i = i.replace("T", " ")).substring(0, i.indexOf("."));
n.getChildByName("lblTime").getComponent(cc.Label).string = i;
n.getChildByName("lblCardType").getComponent(cc.Label).string = o.Type;
n.getChildByName("lblCardValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(o.Amount);
"Từ chối" == o.StatusString ? n.getChildByName("lblStatus").getComponent(cc.Label).string = "Từ chối" : "Thành công" == o.StatusString ? n.getChildByName("lblStatus").getComponent(cc.Label).string = "Thành công" : "Đang chờ" == o.StatusString ? n.getChildByName("lblStatus").getComponent(cc.Label).string = "Đang chờ" : n.getChildByName("lblStatus").getComponent(cc.Label).string = o.StatusString;
}
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryRut: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8469c0qIoFMaIBwMQGjt0eo", "GUITopupHistoryRut");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.LIST_HISTORY + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken + "&inOut=2";
fzgui.Https.get(e, function(e) {
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
var o = t[e], n = this.scrHistory.content.children[e];
if (!n) {
n = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(n);
}
n.active = !0;
n.getChildByName("lblSTT").getComponent(cc.Label).string = o.Id;
var i = o.CreateTime;
i = (i = i.replace("T", " ")).substring(0, i.indexOf("."));
n.getChildByName("lblTime").getComponent(cc.Label).string = i;
n.getChildByName("lblCardType").getComponent(cc.Label).string = o.Type;
n.getChildByName("lblCardValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(o.Amount);
"Từ chối" == o.StatusString ? n.getChildByName("lblStatus").getComponent(cc.Label).string = "Từ chối" : "Thành công" == o.StatusString ? n.getChildByName("lblStatus").getComponent(cc.Label).string = "Thành công" : "Đang chờ" == o.StatusString ? n.getChildByName("lblStatus").getComponent(cc.Label).string = "Đang chờ" : n.getChildByName("lblStatus").getComponent(cc.Label).string = o.StatusString;
}
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupRutBank: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "773aePSP/pNJZowO2fOnd+Y", "GUITopupRutBank");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, o) {
var n = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
o(t[i]);
n.node.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GUITopupRutBank.Spinner") ], t);
}();
o.Spinner = u;
var f = function(t) {
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
fzgui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.LIST_BANK_OUT + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken + a.LobbyConst.GATE.URL, function(e) {
e ? t.listBank = e : fzgui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
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
if (parseInt(this.edbAmount.string.split(".").join("")) < 2e5) fzgui.UIPopupManager.instance.showPopup("Số tiền rút tối thiểu là 200,000 Coin"); else if (parseInt(this.edbAmount.string.split(".").join("")) > 3e8) fzgui.UIPopupManager.instance.showPopup("Số tiền rút tối thiểu là 300,000,000 Coin"); else if ("" != this.edbSoTk.string) if ("" != this.edbChuTaiKhoan.string) if ("" != this.edbCaptcha.string) {
this._verifyCaptcha = this.sprCaptcha.getComponent("CapchaZ").getCapChaId();
this.data = {
nickNameTrans: fzgui.UserManager.instance.mainUserInfo.NickName,
transferValue: c.MVUtils.toInt(this.edbAmount.string),
sourceId: 1,
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
bankAccountNumber: this.edbSoTk.string,
bankAccountName: c.MVUtils.removeVietnameseTones(this.edbChuTaiKhoan.string).toUpperCase(),
bankCode: this.bank,
transferType: 0
};
var e = this;
c.MVUtils.post(a.LobbyConst.API.CAST_OUT, this.data, function(o, n) {
if (200 == o) {
e.layoutOTP.getChildByName("lblUsername").getComponent(cc.Label).string = t.data.bankAccountName;
e.layoutOTP.getChildByName("lblReceiveQuay").getComponent(cc.Label).string = c.MVUtils.formatNumber(t.data.transferValue);
e.layoutOTP.getChildByName("lblReason").getComponent(cc.Label).string = t.data.bankAccountNumber;
e.layoutOTP.getChildByName("lblbankk").getComponent(cc.Label).string = t.lbTypeBank.string;
e.layoutOTP.active = !0;
e.layoutCastOut.active = !1;
e.data.OtpToken = n.OtpToken;
} else {
fzgui.UIPopupManager.instance.showPopup(n);
t.onClickRefreshCaptcha();
}
});
} else fzgui.UIPopupManager.instance.showPopup("Nhập mã kiểm tra"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng điền Chủ Tài Khoản"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng điền Số Tài Khoản");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
c.MVUtils.post(a.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2005
}, function(e, o) {
if (200 == e) {
fzgui.UIPopupManager.instance.showPopup("Tạo lệnh rút tiền thành công");
t.layoutCastOut.active = !0;
t.layoutOTP.active = !1;
fzgui.UserManager.instance.mainUserInfo.Money = fzgui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
t.clearInput();
} else {
fzgui.UIPopupManager.instance.showPopup(o);
t.onClickRefreshCaptcha();
}
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
this.edbCaptcha.string = "";
};
e.prototype.onEdbChange = function() {
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.edbAmount.string = c.MVUtils.formatNumber(t);
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
o.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupTelco: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d4303PCXcRKZrcQyq2peaWg", "GUITopupTelco");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, o) {
var n = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
o(t[i]);
n.thisNode.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupTelco.Spinner") ], t);
}();
o.Spinner = u;
var f = function(t) {
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
fzgui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.RATE_CARD + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken, function(e) {
t.rateCard = e.Data[0];
});
fzgui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.CARD_TYPE + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken, function(e) {
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
t.getComponentInChildren(cc.Label).string = c.MVUtils.formatNumber(e.Amount);
}, function(e) {
cc.log("onClickValue");
t.lbValue.string = c.MVUtils.formatNumber(e.Amount);
t.currentMenhGia = e.Amount;
});
};
e.prototype.loadListTiGia = function() {
for (var t = this.currentRateProvider.List, e = 0; e < t.length; e++) {
var o = this.tiGiaContainer.children[e];
o || ((o = cc.instantiate(this.itemTiGiaTemplate)).parent = this.tiGiaContainer);
o.getChildByName("lblAmout").getComponent(cc.Label).string = c.MVUtils.formatNumber(t[e].Amount);
o.getChildByName("lblNo").getComponent(cc.Label).string = c.MVUtils.formatNumber(t[e].AmountReceive);
o.getChildByName("icMoney");
}
};
e.prototype.onClickConfirm = function() {
var t = this;
if (0 != this.currentMenhGia) if (null != this.provider) if ("" != this.edbCaptcha.string && "" != this.edbCardCode.string && "" != this.edbCardSeri.string) {
this._verifyCaptcha = this.sprCaptcha.node.getComponent("CapchaZ").getCapChaId();
var e = this.edbCardSeri.string, o = this.edbCardCode.string, n = this.edbCaptcha.string, i = {
cardType: this.provider,
cardSerial: e,
amount: this.currentMenhGia,
cardPin: o,
captcha: n,
CardUserAmount: this.currentMenhGia,
verify: this._verifyCaptcha,
os: a.LobbyConst.platform
};
cc.log("Body==", JSON.stringify(i));
var r = a.LobbyConst.API.URL + a.LobbyConst.API.REQUEST_CASH_IN + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken;
fzgui.Https.post(r, i, function(e, o) {
200 != e && 0 != o.ResponseCode || t.clearInput();
t.onClickResetCaptcha();
fzgui.UIPopupManager.instance.showPopup(o.Description);
});
} else fzgui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng chọn loại thẻ!"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng chọn mệnh giá thẻ!");
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
o.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupTranfers: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ad5f9XP3mtEer426/J4XmR4", "GUITopupTranfers");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.LIST_AGENCY + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken;
c.MVUtils.get(e, {}, function(e, o) {
e >= 200 && e < 400 && (t.listAgency = o);
});
};
e.prototype.start = function() {};
e.prototype.loadListAgency = function() {
for (var t = 0; t < this.listAgency.length; t++) {
var e = this.scrView.content.children[t], o = this.listAgency[t];
if (!e) {
e = cc.instantiate(this.scrView.content.children[0]);
this.scrView.content.addChild(e);
}
e.active = !0;
e.getChildByName("lbStt").getComponent(cc.Label).string = t + 1 + "";
e.getChildByName("lbName").getComponent(cc.Label).string = o.StaffName;
e.getChildByName("lbNickName").getComponent(cc.Label).string = o.NickName;
}
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("" != this.edbCaptcha.string && "" != this.edbAccountInfo.string && "" != this.edbCaptcha.string && "" != this.edbAmount.string && "" != this.edbReTVN.string && "" != this.edbTVN.string) if (this.edbTVN.string == this.edbReTVN.string) {
this._verifyCaptcha = this.sprCaptcha.getComponent("CapchaZ").getCapChaId();
var e = this.edbAccountInfo.string;
this.data = {
accountIdTrans: fzgui.UserManager.instance.mainUserInfo.AccountID,
nickNameTrans: fzgui.UserManager.instance.mainUserInfo.NickName,
transferValue: this.amount,
nickNameRecv: this.edbReTVN.string,
sourceId: a.LobbyConst.platform,
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
transferType: 0,
reason: e
};
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.REQUEST_TRANSFER, this.data, function(e, o) {
if (e >= 200 && e < 400) {
t.otpLayer.getChildByName("lblUsername").getComponent(cc.Label).string = t.data.nickNameRecv;
t.otpLayer.getChildByName("lblReceiveQuay").getComponent(cc.Label).string = c.MVUtils.formatNumber(t.data.transferValue);
t.otpLayer.getChildByName("lblReason").getComponent(cc.Label).string = t.data.reason;
t.transferLayer.active = !1;
t.otpLayer.active = !0;
t.data.OtpToken = o.OtpToken;
fzgui.ZLog.log("res ==============" + JSON.stringify(o));
} else {
fzgui.UIPopupManager.instance.showPopup(o);
t.onClickRefreshCaptcha();
}
});
} else fzgui.UIPopupManager.instance.showPopup("Vui lòng xác minh lại tên nhân vật!"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
c.MVUtils.post(a.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2002
}, function(e, o) {
if (e >= 200 && e < 400) {
fzgui.UIPopupManager.instance.showPopup("Chuyển khoản thành công");
t.transferLayer.active = !0;
t.otpLayer.active = !1;
fzgui.UserManager.instance.mainUserInfo.Money = fzgui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
t.clearInput();
} else fzgui.UIPopupManager.instance.showPopup(o);
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
this.edbCaptcha.string = "";
};
e.prototype.onClickSendOTPSMS = function() {};
e.prototype.onEdbChange = function() {
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = c.MVUtils.formatNumber(t);
this.lbFee.string = c.MVUtils.formatNumber(Math.floor(.02 * t));
this.lbBigReceive.string = c.MVUtils.formatNumber(Math.floor(1.02 * t));
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
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIUpdateDisplayName: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "034b8Kz6f1Gk4jn9VbUoqSY", "GUIUpdateDisplayName");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = t("./utils/CapchaZ"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
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
if (e.length < 6 || e.length > 15 || e.indexOf(" ") > 0 || e.indexOf("@") > 0 || e === fzgui.UserManager.instance.mainUserInfo.NickName) fzgui.UIPopupManager.instance.showPopup("Tên người chơi phải từ 6 - 14 ký tự, viết liền không dấu, không trùng tên tài khoản, không chứa ký tự đặc biệt!"); else {
var o = {
fullName: this.edbNickName.string,
captcha: this.edbCaptcha.string,
captchaToken: this.UICaptcha.getComponent(s.default).getCapChaId(),
gate: a.LobbyConst.GATE.DATA
};
c.MVUtils.get(a.LobbyConst.API.UPDATE_DISPLAYNAME, o, function(e, o) {
if (e >= 200 && e < 400) {
fzgui.UserManager.instance.mainUserInfo = o;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
t.hide();
} else {
t.onRefreshCaptchaClicked();
fzgui.UIPopupManager.instance.showPopup(o);
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
}(fzgui.UIPopup);
o.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
GateJackpotNoti: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "367a3lByDhFzIpqOJuHzIje", "GateJackpotNoti");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
var o = this;
void 0 === e && (e = 5);
this.lbNameNick.string = t.NickName;
this.lbGameName.string = t.GameName;
this.lbMoneyWin.string = fzgui.StringUtils.formatNumber(t.JackpotValue);
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
o.node.active = !1;
}).start();
this.unschedule(this.timeSche);
this.lbTime.string = e.toString();
this.schedule(this.timeSche = function() {
e--;
o.lbTime.string = e.toString();
}, 1, e + 2);
};
e.prototype.hideJackpot = function() {};
e.prototype.onClickXinLoc = function() {};
r([ s(cc.Label) ], e.prototype, "lbNameNick", void 0);
r([ s(cc.Label) ], e.prototype, "lbGameName", void 0);
r([ s(cc.Label) ], e.prototype, "lbMoneyWin", void 0);
r([ s(cc.Label) ], e.prototype, "lbTime", void 0);
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
GateSettingPopup: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ab674brdgFE/IvGLzEgsLaf", "GateSettingPopup");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
GuiTopupRutMomo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3ab46hpQlJGOqMVrJBMlUzb", "GuiTopupRutMomo");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
if (parseInt(this.edbAmount.string.split(".").join("")) < 2e5) fzgui.UIPopupManager.instance.showPopup("Số tiền rút tối thiểu là 200,000 Gold"); else if ("" != this.edbSDT.string) if ("" != this.edbChuTaiKhoan.string) if ("" != this.edbCaptcha.string) {
this._verifyCaptcha = this.sprCaptcha.getComponent("CapchaZ").getCapChaId();
this.data = {
nickNameTrans: fzgui.UserManager.instance.mainUserInfo.NickName,
transferValue: c.MVUtils.toInt(this.edbAmount.string),
sourceId: 1,
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
bankAccountNumber: this.edbSDT.string,
bankAccountName: c.MVUtils.removeVietnameseTones(this.edbChuTaiKhoan.string).toUpperCase(),
bankCode: this.bank,
transferType: 0
};
var e = this;
c.MVUtils.post(a.LobbyConst.API.CAST_OUT, this.data, function(o, n) {
if (200 == o) {
e.layoutOTP.getChildByName("lblUsername").getComponent(cc.Label).string = t.data.bankAccountName;
e.layoutOTP.getChildByName("lblReceiveQuay").getComponent(cc.Label).string = c.MVUtils.formatNumber(t.data.transferValue);
e.layoutOTP.getChildByName("lblReason").getComponent(cc.Label).string = t.data.bankAccountNumber + " - " + t.bank;
e.layoutCastOut.active = !1;
e.layoutOTP.active = !0;
e.data.OtpToken = n.OtpToken;
} else fzgui.UIPopupManager.instance.showPopup(n);
});
} else fzgui.UIPopupManager.instance.showPopup("Nhập mã kiểm tra"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng điền Chủ Tài Khoản"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng điền Số Điện Thoại");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
c.MVUtils.post(a.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2005
}, function(e, o) {
if (200 == e) {
fzgui.UIPopupManager.instance.showPopup("Tạo lệnh rút tiền thành công");
t.layoutCastOut.active = !0;
t.layoutOTP.active = !1;
fzgui.UserManager.instance.mainUserInfo.Money = fzgui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
} else fzgui.UIPopupManager.instance.showPopup(o);
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onEdbChange = function() {
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.edbAmount.string = c.MVUtils.formatNumber(t);
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
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
HeaderAccountCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "096b2vP0exLPLpcCyZGPD5R", "HeaderAccountCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
var t = this;
this.listText = [ "Do lượng người dùng lớn lên đôi khi giao dịch xử lý hơi chậm, mong quý khách thông cảm", "Phế chơi game chỉ từ 1%, giao dịch không mất phế, không đại lý", "Những tài khoản bị khoá vĩnh viễn là những tài khoản có hành vi gian lận,chơi bẩn" ];
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME, this.onUpdateInfo, this);
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_GOLD, this.onUpdateGold, this);
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateTotalGold, this);
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_VIPPOINT, this.onUpDateVipPoint, this);
fzgui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.USER_MAIL, this.requestMail, this);
this.onTextRandom();
this.scheduleOnce(function() {
t.requestMail();
}, 2);
};
e.prototype.onDestroy = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME, this.onUpdateInfo, this);
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_GOLD, this.onUpdateGold, this);
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateTotalGold, this);
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_VIPPOINT, this.onUpDateVipPoint, this);
};
e.prototype.requestMail = function() {
var t = this, e = a.LobbyConst.API.GET_UNREAD_MAIL;
fzgui.Https.get(e, function(e) {
fzgui.ZLog.log("requestUnreadMail ===" + JSON.stringify(e));
if (e) if (e.Count) {
fzgui.UITextManager.showCenterNotification("Bạn có Mail chưa đọc");
t.nMail.active = !0;
t.lbMail.string = e.Count;
} else {
t.nMail.active = !1;
t.lbMail.string = "";
}
});
};
e.prototype.onUpdateTotalGold = function(t) {
fzgui.UserManager.instance.mainUserInfo.Money = t;
this.lbGold.scheduleProgress(t);
};
e.prototype.onUpdateGold = function() {
var t = fzgui.UserManager.instance.mainUserInfo.Money;
this.lbGold.scheduleProgress(t);
};
e.prototype.onUpDateVipPoint = function() {
var t = fzgui.UserManager.instance.mainUserInfo.VipPoint;
this.lbVippoint.scheduleProgress(t);
};
e.prototype.onUpdateInfo = function() {
var t = fzgui.UserManager.instance.mainUserInfo.Money, e = fzgui.UserManager.instance.mainUserInfo.VipPoint;
this.lbNickName.string = fzgui.UserManager.instance.mainUserInfo.NickName;
this.lbGold.scheduleProgress(t);
e && this.lbVippoint.scheduleProgress(e);
};
e.prototype.onTestUpdateGold = function() {
fzgui.ZLog.log("onTestUpdateGold===>");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, 1e6);
};
e.prototype.onTextRandom = function() {
var t = this;
this.schedule(function() {
t.lbtextrandom.string = t.listText[Math.floor(Math.random() * t.listText.length)];
}, 10);
};
var o;
e._instance = null;
r([ l(cc.Label) ], e.prototype, "lbNickName", void 0);
r([ l(cc.Node) ], e.prototype, "nMail", void 0);
r([ l(cc.Label) ], e.prototype, "lbMail", void 0);
r([ l(cc.Label) ], e.prototype, "lbtextrandom", void 0);
r([ l(c.default) ], e.prototype, "lbGold", void 0);
r([ l(c.default) ], e.prototype, "lbVippoint", void 0);
return o = r([ p ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
HeaderCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1a51eW1XyhOt6qP45H4JoA1", "HeaderCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./MVUtils"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nAccount = null;
e.nLogin = null;
return e;
}
e.prototype.onEnable = function() {
fzgui.ZLog.log("HeaderCtrl ===================" + fzgui.GameCoreManager.instance.isLoginSuccess);
this.nAccount.active = fzgui.GameCoreManager.instance.isLoginSuccess;
this.nLogin.active = !fzgui.GameCoreManager.instance.isLoginSuccess;
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSucess, this);
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGOUT, this.onLogout, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSucess, this);
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGOUT, this.onLogout, this);
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
a.MVUtils.onFacebook();
};
e.prototype.onLogoutClicked = function() {
var t = [ fzgui.PopupAction.make("OK", function() {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGOUT);
}), fzgui.PopupAction.make("CLOSE", function() {}) ];
fzgui.UIPopupManager.instance.showPopup("Bạn có chắc chắn muốn thoát khỏi trò chơi?", t);
};
r([ p(cc.Node) ], e.prototype, "nAccount", void 0);
r([ p(cc.Node) ], e.prototype, "nLogin", void 0);
return r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
IconAnGameScene: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "713c7rEt+dImrqM9bJdxfnG", "IconAnGameScene");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./BundleSceneGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
this.isTest && this._countOpenGame >= this.numOfClick ? t.prototype._onClicked.call(this) : fzgui.UIPopupManager.instance.showPopup("Đang bảo trì!");
this._countOpenGame++;
};
return r([ s ], e);
}(a.default));
o.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconAnGame: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2c0fbSn7stCHqz3in00fODx", "IconAnGame");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./BundleMiniGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
this.isTest && this._countOpenGame >= this.numOfClick ? t.prototype._onClicked.call(this) : fzgui.UIPopupManager.instance.showPopup("Đang bảo trì!");
this._countOpenGame++;
};
return r([ s ], e);
}(a.default));
o.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconBanCa: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "49b12s81Z9HvaYra2eUWGet", "IconBanCa");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./BundleSceneGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(a.default));
o.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconMiniPoker: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "95b79PfFo9Fc6If94sDzKYo", "IconMiniPoker");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./BundleMiniGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(a.default));
o.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniTaiXiu: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ff069evfzhDJK5I8Yp0OMyo", "IconMiniTaiXiu");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./BundleMiniGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(a.default));
o.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniTomCuaCa: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "67e00FaupRPvIof7YcGKiTO", "IconMiniTomCuaCa");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./BundleMiniGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(a.default));
o.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconTestGameCards: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0e089P3sfFL1qVUaxzipJ2G", "IconTestGameCards");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./BundleSceneGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
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
fzgui.GameCoreManager.instance.setGameID(this.gameID);
} else fzgui.UIPopupManager.instance.showPopup("Game Sắp Ra Mắt!");
this._countOpenGame++;
};
return r([ s ], e);
}(a.default));
o.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
ItemGiftBigBang: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7ffcdMNs9pMkKnSNkPVasCw", "ItemGiftBigBang");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./MVUtils"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
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
token: fzgui.UserManager.instance.mainUserInfo.GameToken,
EventPrizeId: this.dataItem.EventPrizeID
};
a.MVUtils.post("https://api.dragonf1.xyz/api/Event/RaceDailyVPReward", e, function(e, o) {
console.log("-=ress     ", o);
if (e >= 200 && e < 400 && 1 == o.ResponseCode) {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, o.Balance);
t.btn_recive.interactable = !1;
}
fzgui.UIPopupManager.instance.showPopup(o.Message);
});
};
r([ p(cc.Label) ], e.prototype, "label_title", void 0);
r([ p(cc.Label) ], e.prototype, "label_money", void 0);
r([ p(cc.Sprite) ], e.prototype, "icon_gift", void 0);
r([ p([ cc.SpriteFrame ]) ], e.prototype, "ls_icon_gift", void 0);
r([ p(cc.Button) ], e.prototype, "btn_recive", void 0);
return r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
ItemMail: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6ee50OxiEBBh5EcEWrRQnEV", "ItemMail");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./GUIAccountMail"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
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
var e = this, o = {
Type: 2,
MailID: t
};
s.MVUtils.post(a.LobbyConst.API.READ_MAIL, o, function(t, o) {
t >= 200 && t < 400 ? 1 == o.ResponseCode ? e.lbNew.node.active = !1 : fzgui.UIPopupManager.instance.showPopup(o.Message) : fzgui.UIPopupManager.instance.showPopup(o);
});
};
e.prototype.onBtnXoaMail = function(t, e) {
s.MVUtils.post(a.LobbyConst.API.DEL_MAIL, {
Type: -1,
MailID: e
}, function(t, e) {
if (t >= 200 && t < 400) {
fzgui.UITextManager.showCenterNotification("Xóa thành công!");
c.default.instance.requestMail();
} else fzgui.UIPopupManager.instance.showPopup(e);
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
c.default.instance.mailList.active = !1;
c.default.instance.mailDetail.active = !0;
c.default.instance.initMailContent(e);
};
r([ u(cc.Label) ], e.prototype, "lbTitle", void 0);
r([ u(cc.Button) ], e.prototype, "btnXoaMail", void 0);
r([ u(cc.Label) ], e.prototype, "lbTime", void 0);
r([ u(cc.Sprite) ], e.prototype, "lbNew", void 0);
return r([ l ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./GUIAccountMail": "GUIAccountMail",
"./MVUtils": "MVUtils"
} ],
ItemNapX3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "32e11V+jIBA1bZe3TguE4Eq", "ItemNapX3");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./MVUtils"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
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
this.label_gold.string = a.MVUtils.formatNumber(this.dataItem.Amount);
this.label_reward.string = a.MVUtils.formatNumber(this.dataItem.PrizeValue);
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
var t = this, e = this.dataItem.RechargeType, o = this.dataItem.Status;
if (-1 != o) if (0 != o) if (1 != o) {
if (2 == o) a.MVUtils.post("https://api.dragonf1.xyz/api/Event/GetX3Reward", {
RechargeType: e
}, function(e, o) {
if (1 == o.ResponseCode) {
t.node_gift.color = cc.Color.GRAY;
t.btn_confirm.node.color = cc.Color.GRAY;
cc.Tween.stopAllByTarget(t.node_gift);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, o.Balance);
}
fzgui.UIPopupManager.instance.showPopup(o.Message);
}); else if (3 == o) {
fzgui.UITextManager.showCenterNotification("Bạn đã nhận thưởng rồi");
return;
}
} else fzgui.UITextManager.showCenterNotification("Hãy hoàn thành tiến trình nạp"); else fzgui.UITextManager.showCenterNotification("Hãy bắt đầu tiến trình nạp"); else fzgui.UITextManager.showCenterNotification("Phần thưởng đã hết hạn");
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
o.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
ItemRankBigBang: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "10769ZX8kFJib/g5p0RYBCs", "ItemRankBigBang");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
ItemTopJackpotCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c7e213v/PZHe6KcAMZ6T63a", "ItemTopJackpotCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
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
case a.GAME_IDS.ANKHE:
this.lbGameName.string = "Ăn Khế Trả Vàng";
this.spIcon.spriteFrame = this.iconankhe;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.TDK:
this.lbGameName.string = "Tây Du Ký";
this.spIcon.spriteFrame = this.icontayduky;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.TW:
this.lbGameName.string = "The Witcher";
this.spIcon.spriteFrame = this.icontw;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.THANTAI:
this.lbGameName.string = "Thần Tài";
this.spIcon.spriteFrame = this.iconthantai;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.STTT:
this.lbGameName.string = "Sơn Tinh Thủy Tinh";
this.spIcon.spriteFrame = this.iconsttt;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.KBTL:
this.lbGameName.string = "Kho Báu Tứ Linh";
this.spIcon.spriteFrame = this.iconkbtl;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.NGULONG:
this.lbGameName.string = "Ngũ Long";
this.spIcon.spriteFrame = this.iconngulong;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.MINIPOKER:
this.lbGameName.string = "MiniPoker";
this.spIcon.spriteFrame = this.iconMiniPoker;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.BAUCUATO:
this.lbGameName.string = "Bầu Cua";
this.spIcon.spriteFrame = this.iconbaucuato;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.BANCA:
this.lbGameName.string = "Bắn Cá";
this.spIcon.spriteFrame = this.iconbanca;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.ET:
this.lbGameName.string = "Kim Cương";
this.spIcon.spriteFrame = this.iconXeng777;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.XEDIEN:
this.lbGameName.string = "Trên Dưới";
this.spIcon.spriteFrame = this.icontrenduoi;
this.updateGoldJackpot(e);
}
};
e.prototype.onShowGameClicked = function() {
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.m_IdGame);
};
r([ l(c.default) ], e.prototype, "lbJackpot", void 0);
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
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
JackpotBySlot: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "44997m/iLpMhYzy9a4OvCNb", "JackpotBySlot");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameID = a.GAME_IDS.NONE;
e.lbJackpot1 = null;
e.lbJackpot2 = null;
e.lbJackpot3 = null;
return e;
}
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.updateJackpot = function() {
var t, e = this;
a.LobbyConst.slotByKeys.forEach(function(o, n) {
n != e.gameID || (t = o);
});
if (t) for (var o = 0; o < t.length; o++) {
4 == t.length ? this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t[3], 8) : this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t[2], 8);
1 == o ? this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t[o], 8) : 0 == o && this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t[o], 8);
}
};
r([ l({
type: cc.Enum(a.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot1", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot2", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot3", void 0);
return r([ p ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
LobbAudioDefined: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "590f2JSWmRPELkqE/Ra6jXp", "LobbAudioDefined");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.music_bgm = null;
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
e.prototype.onLoad = function() {
o._instance = this;
};
var o;
e._instance = null;
r([ s(cc.AudioClip) ], e.prototype, "music_bgm", void 0);
return o = r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
LobbyConst: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6b25cz4Ct5PVrB3sRlPhBbp", "LobbyConst");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.getStringBodyByObject = o.GAME_IDS = o.LobbyConst = o.Platform = void 0;
var n;
(function(t) {
t[t.INVALID = 0] = "INVALID";
t[t.ANDROID = 1] = "ANDROID";
t[t.WINDOWS = 2] = "WINDOWS";
t[t.IOS = 3] = "IOS";
t[t.WEB = 4] = "WEB";
t[t.MAC = 5] = "MAC";
})(n = o.Platform || (o.Platform = {}));
var i = function() {
function t() {}
Object.defineProperty(t, "platform", {
get: function() {
var t = n.INVALID;
cc.sys.isBrowser ? t = n.WEB : cc.sys.os == cc.sys.OS_ANDROID ? t = n.ANDROID : cc.sys.os == cc.sys.OS_IOS ? t = n.IOS : cc.sys.os == cc.sys.OS_WINDOWS ? t = n.WINDOWS : cc.sys.os == cc.sys.OS_OSX ? t = n.MAC : fzgui.ZLog.log("Unsupport platform");
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
t.GATE = {
DATA: "789.club",
URL: "&gate=789.club"
};
t.Gate = {
Gate: "789.club"
};
t.API = {
LOGIN: "https://api.ogrange3a.xyz/Authen/login",
REGISTRY: "https://api.ogrange3a.xyz/Authen/Register",
GET_INFO_ACCOUNT: "https://api.ogrange3a.xyz/Account/getLoyalty",
UPDATE_DISPLAYNAME: "https://api.ogrange3a.xyz/Account/UpdateUserFullName",
CHANGE_PASS: "https://api.ogrange3a.xyz/Account/ChangePass",
CHECK_OTP: "https://api.ogrange3a.xyz/Privacy/VerifyOTP",
GET_INFO_OTP: "https://api.ogrange3a.xyz/Account/GetInfo?",
REGISTER_OTP: "https://api.ogrange3a.xyz/Account/RegisterOTP",
DELETE_MOBILE: "https://api.ogrange3a.xyz/Account/deleteMobile",
UPDATE_MOBILE: "https://api.ogrange3a.xyz/Account/updateMobile",
REG_MOBILE: "https://api.ogrange3a.xyz/Account/registerOTP",
GET_OTP_SMS: "https://api.ogrange3a.xyz/Account/getOTPSMS",
GET_OTP_TRANFER: "https://api.ogrange3a.xyz/Account/getOTPSMSTranfer",
GET_FROZEB: "https://api.ogrange3a.xyz/Account/getFrozen?",
FROZEB: "https://api.ogrange3a.xyz/Account/frozen",
GIFT_CODE: "https://api.ogrange3a.xyz/Account/GiftCode",
LOGIN_VIP_CODE: "https://api.ogrange3a.xyz/Account/LoginVipcode",
VIP_POINT_TRADE: "https://api.ogrange3a.xyz/Account/VipPointTrade",
VIP_POINT_RANK: "https://api.ogrange3a.xyz/Account/getRankingVip",
CAST_OUT: "https://api.ogrange3a.xyz/MoneyChange/TransferCashout",
DELETE_PHONE: "https://api.ogrange3a.xyz/Account/deleteMobile",
URL: "https://api.ogrange3a.xyz/",
LIST_BANK: "MoneyChange/GetListBank",
LIST_BANK2: "MoneyChange/GetTransferAccount",
LIST_BANK3: "MoneyChange/MomoGetAccount",
LIST_BANK4: "MoneyChange/GetListBankMp4",
LIST_BANKHako: "MoneyChange/GetListBankHako",
LIST_BANK_Libasa: "MoneyChange/GetListBankLibasa",
LIST_BANK_TG: "MoneyChange/GetListBankTg",
LIST_BANKMANUAL: "MoneyChange/GetListManualBank",
LIST_BANK_IN: "MoneyChange/GetListBankIn",
LIST_BANK_OUT: "MoneyChange/GetListBankOut",
REQUEST_PAYMENT: "MoneyChange/BankRequestPayment",
REQUEST_MANUALBANK: "MoneyChange/RequestManualBank",
REQUEST_PAYMENTNEW: "MoneyChange/BankRequestPaymentNew",
REQUEST_PAYMENTHako: "MoneyChange/BankRequestPaymentHako",
REQUEST_PAYMENT_Libasa: "MoneyChange/BankRequestPaymentLibasa",
REQUEST_PAYMENT_Tg: "MoneyChange/BankRequestPaymentTg",
REQUEST_BANK: "MoneyChange/BankRequest",
MOMO_REQUEST: "MoneyChange/MomoRequest",
MOMO_REQUEST_PAYMENT: "MoneyChange/MomoRequestPayment",
MOMO_REQUEST_PAYMENT_Libasa: "MoneyChange/LibasaMomoRequestPayment",
MOMO_REQUEST_PAYMENT_TG: "MoneyChange/TgMomoRequestPayment",
EWALLet_REQUEST_PAYMENT: "MoneyChange/WalletRequestPayment",
EWALLet_REQUEST_PAYMENTNEW: "MoneyChange/WalletRequestPaymentNew",
RATE_CARD: "MoneyChange/GetChargeRate",
REQUEST_CASH_IN: "MoneyChange/rechargecard",
REQUEST_CARD: "MoneyChange/CardRequest",
CARD_TYPE: "MoneyChange/GetCardTypes",
LIST_AGENCY: "Agency/GetAgencies",
REQUEST_TRANSFER: "MoneyChange/Transfer",
MOMO_INFO: "MoneyChange/MomoGetAccount",
LIST_HISTORY: "MoneyChange/UserCashHistory",
LIST_HISTORY_BANKMANUAL: "MoneyChange/GetManualBankRequestHistory",
LIST_HISTORY_ALLGAME: "MoneyChange/getTransactionLogs",
GET_UNREAD_MAIL: "https://api.ogrange3a.xyz/Mail/MailUnRead",
GET_LIST_MAIL: "https://api.ogrange3a.xyz/Mail/GetUserMail",
READ_MAIL: "https://api.ogrange3a.xyz/Mail/UpdateStatus",
DEL_MAIL: "https://api.ogrange3a.xyz/Mail/UpdateStatus",
MUA_THE: "https://api.ogrange3a.xyz/MoneyChange/muaThe",
OTP_RESET_PASSWORD: "https://api.ogrange3a.xyz/Account/GetOTPResetPassword",
RESET_PASSWORD: "https://api.ogrange3a.xyz/Account/ResetPassword"
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
o.LobbyConst = i;
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
t[t.BAUCUATO = 7005] = "BAUCUATO";
t[t.KBTL = 1235] = "KBTL";
t[t.BONGDA = 7007] = "BONGDA";
t[t.MINIPOKER = 41] = "MINIPOKER";
t[t.TAIXIU = 89] = "TAIXIU";
t[t.TAIXIUMD5 = 90] = "TAIXIUMD5";
t[t.TAIXIULIVE = 1236] = "TAIXIULIVE";
t[t.ANKHE = 5002] = "ANKHE";
t[t.BANCA = 123] = "BANCA";
t[t.XOCDIA = 333] = "XOCDIA";
t[t.GAME_POKER = 107] = "GAME_POKER";
t[t.GAME_TLMN_DL = 100] = "GAME_TLMN_DL";
t[t.GAME_MAUBINH = 7] = "GAME_MAUBINH";
t[t.GAME_BA_CAY = 102] = "GAME_BA_CAY";
t[t.GAME_SAMLOC = 101] = "GAME_SAMLOC";
})(o.GAME_IDS || (o.GAME_IDS = {}));
o.getStringBodyByObject = function(t) {
if (!t) return "";
var e = [];
for (var o in t) e.push(o + "=" + encodeURIComponent(t[o]));
return "?" + e.join("&");
};
cc._RF.pop();
}, {} ],
LobbyCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a3832nwcBdNMKefpx7BqvfH", "LobbyCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./BannerPromotion"), s = t("./network/NetworkPortal"), p = t("./network/NotificationNetworkHandle"), l = cc._decorator, u = l.ccclass, f = l.property, h = function(t) {
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
var o = this.scrollview.content.children[e];
t.intersects(o.getBoundingBox()) ? o.opacity = 255 : o.opacity = 0;
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
var o = [];
switch (e[t.getDay()]) {
case "Monday":
a.LobbyConst.listEventByDay = o.concat(a.GAME_IDS.LONGVUONG);
break;

case "Tuesday":
a.LobbyConst.listEventByDay = o.concat(a.GAME_IDS.ANGRYBIRD);
break;

case "Wednesday":
a.LobbyConst.listEventByDay = o.concat(a.GAME_IDS.LIENMINH);
break;

case "Thursday":
a.LobbyConst.listEventByDay = o.concat(a.GAME_IDS.LONGVUONG);
break;

case "Friday":
a.LobbyConst.listEventByDay = o.concat(a.GAME_IDS.MINIPOKER);
break;

case "Saturday":
a.LobbyConst.listEventByDay = o.concat(a.GAME_IDS.RUNGRAM);
break;

case "Sunday":
a.LobbyConst.listEventByDay = o.concat(a.GAME_IDS.TAYDUKY);
}
} else a.LobbyConst.listEventByDay = [ a.GAME_IDS.LONGVUONG, a.GAME_IDS.TAYDUKY, a.GAME_IDS.FROZEN, a.GAME_IDS.SINBAD, a.GAME_IDS.RUNGRAM, a.GAME_IDS.MINIPOKER ];
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSuccess, this);
fzgui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION, this.loadBannerPromotion, this);
this._addGUIOTP();
this._addWidgetIcon();
this.getGameEventByDay();
this.ImgRandom.spriteFrame = this.Img[0];
this.onImgRandom();
fzgui.UserManager.instance.gateInfo = a.LobbyConst.Gate;
var t = cc.Canvas.instance.getComponent(p.default);
t ? t.mSignalr || t.connect() : cc.Canvas.instance.addComponent(p.default).connect();
var e = cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon");
e && (e.active = !0);
};
e.prototype.removeBigBangIcon = function() {
cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon") && (cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon").active = !1);
};
e.prototype.loadBannerPromotion = function() {
fzgui.UIPopupManager.instance.has(c.default);
};
e.prototype._addWidgetIcon = function() {
if (!fzgui.GameCoreManager.instance.nMiniGames.getChildByName("nWidgetIcon")) {
var t = cc.instantiate(this.nWidgetIcon);
t.name = "nWidgetIcon";
fzgui.GameCoreManager.instance.nMiniGames.addChild(t);
}
};
e.prototype._addGUIOTP = function() {
var t = {
namePrefab: "GUI_OTP",
prfDefined: this.prefabOTP
};
fzgui.CommonAssetDefined.instance.listPrefabDefined.push(t);
};
e.prototype.onDisable = function() {
fzgui.AudioManager.instance.pauseMusic();
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSuccess, this);
var t = cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon");
t && (t.active = !1);
};
e.prototype.onLoginSuccess = function() {
console.log(fzgui.UserManager.instance.mainUserInfo);
if (null == fzgui.UserManager.instance.mainUserInfo.NickName || "" == fzgui.UserManager.instance.mainUserInfo.NickName) {
fzgui.UIPopupManager.instance.showPopupFromPrefab(this.prfUpdateDisplayName);
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
r([ f(cc.Prefab) ], e.prototype, "prfUpdateDisplayName", void 0);
r([ f(cc.Prefab) ], e.prototype, "prefabOTP", void 0);
r([ f(cc.Prefab) ], e.prototype, "nWidgetIcon", void 0);
r([ f(cc.Node) ], e.prototype, "NodeActivePhone", void 0);
r([ f(cc.Prefab) ], e.prototype, "PreBigBangIcon", void 0);
r([ f(cc.ScrollView) ], e.prototype, "scrollview", void 0);
r([ f(cc.Prefab) ], e.prototype, "prefabx3", void 0);
r([ f(cc.SpriteFrame) ], e.prototype, "Img", void 0);
r([ f(cc.Sprite) ], e.prototype, "ImgRandom", void 0);
return r([ u ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./BannerPromotion": "BannerPromotion",
"./network/NetworkPortal": "NetworkPortal",
"./network/NotificationNetworkHandle": "NotificationNetworkHandle"
} ],
Lobby_MiniGameNavigator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "17186JZy8dBJp0coDZ023Kr", "Lobby_MiniGameNavigator");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../LobbyConst"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
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
fzgui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS, this.hide, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable.call(this);
fzgui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS, this.hide, this);
};
r([ p(cc.Node) ], e.prototype, "nBg", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
o.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
Lobby_UIDraggable: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9be29xRiu5CyJjMEFV1n4r1", "Lobby_UIDraggable");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
return r([ c ], e);
}(fzgui.UIDraggable);
o.default = p;
cc._RF.pop();
}, {} ],
Lobby_UINumericLabelHelper: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6aa8bFsEZpNjIqUqHxoX0hf", "Lobby_UINumericLabelHelper");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ c ], e);
}(fzgui.UINumericLabelHelper));
o.default = s;
cc._RF.pop();
}, {} ],
Lobby_UIScrollBar: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a6f97L48btM7LQAKF6khlKX", "Lobby_UIScrollBar");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.handle = null;
e.direction = fzgui.UIScrollBarDirection.VERTICAL;
e.enableAutoHide = !0;
e.autoHideTime = 1;
return e;
}
r([ s(cc.Sprite) ], e.prototype, "handle", void 0);
r([ s({
type: cc.Enum(fzgui.UIScrollBarDirection)
}) ], e.prototype, "direction", void 0);
r([ s(cc.Boolean) ], e.prototype, "enableAutoHide", void 0);
r([ s(cc.Float) ], e.prototype, "autoHideTime", void 0);
return r([ c ], e);
}(fzgui.UIScrollBar);
o.default = p;
cc._RF.pop();
}, {} ],
Lobby_UIShowPopupHelp: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d0169/XWbxHQKww7MnOyWnF", "Lobby_UIShowPopupHelp");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
r([ s ], e.prototype, "text", void 0);
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
Lobby_UIShowToolTip: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "48d7b9tUTVPYKyHs0k6iVYu", "Lobby_UIShowToolTip");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
r([ s ], e.prototype, "text", void 0);
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
Lobby_UITableView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "498cbDOIwhMmZQNxq7SA5ho", "Lobby_UITableView");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./Lobby_UIScrollBar"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
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
r([ p({
type: cc.Enum(fzgui.UIScrollDirection)
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
r([ p(a.default) ], e.prototype, "horizontalScrollBar", void 0);
r([ p(a.default) ], e.prototype, "verticalScrollBar", void 0);
r([ p ], e.prototype, "autoClearAutoScroll", void 0);
r([ p ], e.prototype, "autoClearAutoZoomScale", void 0);
r([ p({
type: cc.Enum(fzgui.UITableViewFillOrder)
}) ], e.prototype, "fillOrder", void 0);
r([ p({
type: cc.Enum(fzgui.UITableViewInteractionMode)
}) ], e.prototype, "interactionMode", void 0);
r([ p(cc.Boolean) ], e.prototype, "cellPagingEnabled", void 0);
r([ p(cc.Integer) ], e.prototype, "numberOfPagingCell", void 0);
r([ p(cc.Prefab) ], e.prototype, "tableCell", void 0);
r([ p(cc.Node) ], e.prototype, "nEmpty", void 0);
return r([ s ], e);
}(fzgui.UITableView);
o.default = l;
cc._RF.pop();
}, {
"./Lobby_UIScrollBar": "Lobby_UIScrollBar"
} ],
LoginByLanding: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ed3f8QGDo1Jh7D8nmdXAlvf", "LoginByLanding");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = (s.property, 
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
var e = window.location.href, o = e.slice("https://web.big79.club/token=".length, e.length);
if (o && !(o.length < 30)) {
var n = "https://api.dragonf1.xyz/Authen/GetAuthentication?token=" + o;
fzgui.Https.getRaw(n, function(e, n) {
if (200 == e) {
var i = JSON.parse(n);
i.GameToken = o;
fzgui.UserManager.instance.mainUserInfo = i;
fzgui.UserManager.instance.mainUserInfo.UserName = i.UserName;
fzgui.UserManager.instance.mainUserInfo.NickName = i.UserName;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS);
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
t.requestAccount(i);
}
});
}
}
};
e.prototype.requestAccount = function() {
var t = this;
c.MVUtils.get(a.LobbyConst.API.GET_INFO_ACCOUNT, {}, function(e, o) {
fzgui.UserManager.instance.mainUserInfo.TotalVipPoint = o.TotalVipPoint;
fzgui.UserManager.instance.mainUserInfo.VipPoint = o.VipPoint;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
t.requestUnreadMail();
});
};
e.prototype.requestUnreadMail = function() {
var t = a.LobbyConst.API.GET_UNREAD_MAIL;
fzgui.Https.get(t, function(t) {
fzgui.ZLog.log("requestUnreadMail ===" + JSON.stringify(t));
t && t.ResponseCode;
});
};
return r([ p ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
LoginCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "65be4uyy4xF46qG67e6b51q", "LoginCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/CapchaZ"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
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
var t = fzgui.ClientData.getBoolean("SAVE_PASS", !0);
this.toggleSaveAccount.isChecked = t;
this.edbAccount.string = fzgui.ClientData.getString("USER_NAME", "");
this.edbPass.string = fzgui.ClientData.getString("PASSWORD", "");
};
e.prototype.onClickLoginFB = function() {};
e.prototype.onClickLogin = function() {
var t = this, e = this.edbAccount.string.trim();
e = e.toLowerCase();
var o = this.edbPass.string.trim(), n = window.md5(e.toLowerCase() + "zxc" + o.toLowerCase());
if (e.length <= 0) fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập tên tài khoản"); else if (o.length <= 0) fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu"); else {
var i = {
UserName: e,
Password: window.md5(o),
passraw: o,
IpAddress: "",
DeviceName: "Chrome",
PlatformId: a.LobbyConst.platform,
deviceID: fzgui.PlatformInterface.deviceID,
platform: fzgui.PlatformInterface.platform,
OSName: fzgui.PlatformInterface.OSName,
deviceToken: fzgui.PlatformInterface.deviceToken,
phoneNumber: fzgui.PlatformInterface.phoneNumber,
OSVersion: fzgui.PlatformInterface.OSVersion,
appVersion: fzgui.PlatformInterface.appVersion,
versionCode: fzgui.PlatformInterface.versionCode,
bundleID: fzgui.PlatformInterface.bundleID,
UIID: "",
MerchantId: 1002,
CaptchaText: this.edbCaptcha.string,
CaptchaToken: 1 == this.nCapcha.active ? this.UICaptcha.getComponent(c.default).getCapChaId() : "",
gate: fzgui.ConfigManager.instance.ConfigInfo.Gate,
otp: "",
Sid: n
};
s.MVUtils.postRaw(a.LobbyConst.API.LOGIN, i, function(e, o) {
e >= 200 && e < 400 ? o && t.onLoginSuccess(o, function() {
s.MVUtils.get(a.LobbyConst.API.GET_INFO_ACCOUNT, {}, function(e, o) {
fzgui.UserManager.instance.mainUserInfo.PassWord = i.Password;
fzgui.UserManager.instance.mainUserInfo.UserName = i.UserName;
fzgui.UserManager.instance.mainUserInfo.TotalVipPoint = o.TotalVipPoint;
fzgui.UserManager.instance.mainUserInfo.VipPoint = o.VipPoint;
fzgui.UserManager.instance.mainUserInfo.Level = o.Level;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
t.requestUnreadMail();
});
}) : fzgui.UIPopupManager.instance.showPopup(o);
}, !1, !0);
}
};
e.prototype.onLoginSuccess = function(t, e) {
fzgui.UserManager.instance.mainUserInfo = t;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_VIPPOINT, fzgui.UserManager.instance.mainUserInfo.TotalVipPoint);
this.hide();
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS);
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
if (this.toggleSaveAccount.isChecked) {
fzgui.ClientData.setString("USER_NAME", this.edbAccount.string);
fzgui.ClientData.setString("PASSWORD", this.edbPass.string);
} else {
this.edbAccount.string = "";
this.edbPass.string = "";
fzgui.ClientData.setString("USER_NAME", this.edbAccount.string);
fzgui.ClientData.setString("PASSWORD", this.edbPass.string);
}
e && e();
};
e.prototype.setCookie = function() {};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.getCapChaId();
};
e.prototype.onToggleSavePass = function(t) {
var e = t.isChecked;
fzgui.ClientData.setBoolean("SAVE_PASS", e);
};
e.prototype.requestUnreadMail = function() {
var t = a.LobbyConst.API.GET_UNREAD_MAIL;
fzgui.Https.get(t, function(t) {
fzgui.ZLog.log("requestUnreadMail ===" + JSON.stringify(t));
t && t.ResponseCode;
});
};
r([ u(cc.EditBox) ], e.prototype, "edbAccount", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ u(c.default) ], e.prototype, "UICaptcha", void 0);
r([ u(cc.Node) ], e.prototype, "nCapcha", void 0);
r([ u(cc.Node) ], e.prototype, "nButton", void 0);
r([ u(cc.Toggle) ], e.prototype, "toggleSaveAccount", void 0);
return r([ l ], e);
}(fzgui.UIPopup);
o.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
MVUtils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "51eddUDQF1F05VZcf0ZIFjr", "MVUtils");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.MVUtils = void 0;
var n = function() {
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
token: fzgui.UserManager.instance.mainUserInfo.GameToken
}, void 0);
};
t.getStringBodyByObject = function(t, e) {
if (!t) return "";
if (null != e && e) return JSON.stringify(t);
var o = [];
for (var n in t) o.push(n + "=" + encodeURIComponent(t[n]));
return "?" + o.join("&");
};
t.getRaw = function(t, e, o, n, i, r) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && fzgui.UIWaitingLayout.showWaiting();
var a = cc.loader.getXMLHttpRequest();
a.timeout = r;
a.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
a.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
a.onreadystatechange = function() {
if (4 == a.readyState) if (a.status >= 200 && a.status < 400) {
n && console.log("ResponseText <=========\nstt=" + a.status + "\ndata=" + a.responseText);
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(a.status, JSON.parse(a.responseText));
} else {
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(a.status, a.responseText);
}
};
a.send();
};
t.postRaw = function(t, e, o, n, i, r) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && fzgui.UIWaitingLayout.showWaiting();
var a = cc.loader.getXMLHttpRequest();
a.timeout = r;
a.open("POST", t);
a.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
a.onreadystatechange = function() {
if (4 == a.readyState) if (a.status >= 200 && a.status < 400) {
n && console.log("ResponseText <=========\nstt=" + a.status + "\ndata=" + a.responseText);
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(a.status, JSON.parse(a.responseText));
} else {
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(a.status, a.responseText);
}
};
a.send(JSON.stringify(e));
};
t.post = function(t, e, o, n, i, r) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && fzgui.UIWaitingLayout.showWaiting();
var a = cc.loader.getXMLHttpRequest();
a.timeout = r;
a.open("POST", t + this.getToken());
a.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
a.onreadystatechange = function() {
if (4 == a.readyState) if (a.status >= 200 && a.status < 400) {
n && console.log("ResponseText <=========\nstt=" + a.status + "\ndata=" + a.responseText);
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(a.status, JSON.parse(a.responseText));
} else {
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(a.status, a.responseText);
}
};
a.send(JSON.stringify(e));
};
t.post2 = function(t, e, o, n, i, r) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && fzgui.UIWaitingLayout.showWaiting();
var a = cc.loader.getXMLHttpRequest();
a.timeout = r;
a.open("POST", t + this.getToken());
a.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
a.onreadystatechange = function() {
if (4 == a.readyState) if (a.status >= 200 && a.status < 400) {
n && console.log("ResponseText <=========\nstt=" + a.status + "\ndata=" + a.responseText);
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(a.status, a.responseText);
} else {
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(a.status, a.responseText);
}
};
a.send(JSON.stringify(e));
};
t.get = function(t, e, o, n, i, r) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
e.token = fzgui.UserManager.instance.mainUserInfo.GameToken;
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && fzgui.UIWaitingLayout.showWaiting();
var a = cc.loader.getXMLHttpRequest();
a.timeout = r;
a.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
a.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
a.onreadystatechange = function() {
if (4 == a.readyState) if (a.status >= 200 && a.status < 400) {
n && console.log("ResponseText <=========\nstt=" + a.status + "\ndata=" + a.responseText);
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(a.status, JSON.parse(a.responseText));
} else {
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(a.status, a.responseText);
}
};
a.send();
};
t.getOtpSMS = function() {
this.get("https://api.dragonf1.xyz/Account/getOTPSMS", {}, function(t, e) {
if (t >= 200 && t < 400) {
fzgui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
} else fzgui.UIPopupManager.instance.showPopup(e);
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
t.hideMiddle = function(t, e, o) {
var n = new RegExp("^(\\+?\\d{" + e + "})(\\d+)(\\d{" + o + "})$");
return t.replace(n, function(t, e, o, n) {
return e + "*".repeat(o.length) + n;
});
};
t.sdkFbWeb = null;
return t;
}();
o.MVUtils = n;
cc._RF.pop();
}, {} ],
NetworkPortal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "50da5BoJcVFnpPT2A3XGYP/", "NetworkPortal");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "portalHub_net";
e.isConnect = !1;
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
e.prototype.onLoad = function() {
o._instance = this;
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, "https://api.dragonf1.xyz/signalr/negotiate", "portalHub", "", !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGOUT, this.closeWS, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGOUT, this.closeWS, this);
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
fzgui.ZLog.log("=====================CONNECT WS NOTI===============================" + JSON.stringify(t));
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
t.R < 0 && fzgui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if (n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0];
fzgui.ZLog.log("onWebSocketCallback: ", n.M + ": " + JSON.stringify(i));
switch (n.M) {
case "playerLeave":
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGOUT);
fzgui.UIPopupManager.instance.showPopup("Tài khoản của bạn đã bị đăng nhập ở chỗ khác");
break;

case "topup":
1 == i.Status ? fzgui.GameCoreManager.instance.updateTotalGold(i.balance) : fzgui.UIPopupManager.instance.showPopup(i.msg);
}
}
}
};
e.prototype.connectSuccess = function() {
fzgui.ZLog.log("NotificationNetworkHandle Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
fzgui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var o;
e._instance = null;
return o = r([ c ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
NotiRunItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ad5ffKiZKdBjqMQvMFTKodO", "NotiRunItem");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
var e = -this.node.width - this.mSpaceX, o = Math.abs(e) / this.mSpeed, n = -this.node.width - (this.mNotifySystem.nodeContent.width - Math.abs(e)), i = Math.abs(n) / this.mSpeed;
this.node.runAction(cc.sequence(cc.moveBy(o, e, 0), cc.callFunc(function() {
t.mNotifySystem.mIsReady = !0;
t.mNotifySystem.runNotify();
}, this), cc.moveBy(i, n, 0), cc.callFunc(function() {
t.setDefault();
t.mNotifySystem.checkEmptyContent();
}, this)));
};
r([ s(cc.RichText) ], e.prototype, "content", void 0);
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
NotiRun: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "69b92KAzsFIqLLj/7ibvdgo", "NotiRun");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NOTIFY_TYPE = o.DataNotify = void 0;
var a, c = t("../network/NotificationNetworkHandle"), s = t("../../LobbyConst"), p = t("./NotiRunItem"), l = cc._decorator, u = l.ccclass, f = l.property, h = function() {
this.content = "";
this.type = 0;
};
o.DataNotify = h;
(function(t) {
t[t.ADMIN = 1] = "ADMIN";
t[t.MONEY_WIN = 2] = "MONEY_WIN";
})(a = o.NOTIFY_TYPE || (o.NOTIFY_TYPE = {}));
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
fzgui.EventDispatch.instance.add(s.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, this.onRunText, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(s.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, this.onRunText, this);
};
e.prototype.onRunText = function(t) {
null == t && c.default.instance.sendNotifyRun();
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
var e = "", o = [ "thắng", "nổ hũ" ];
if (t) {
t = t.Data;
for (var n = 0; n < t.length; n++) {
e = t[n].gameId > 7 ? "<size=20>" + (0 == n ? "Chúc mừng người chơi" : "") + " <color=#FF6600>" + (t[n].UserName, 
t[n].UserName) + "</color> " + o[t[n].NType - 1] + " <color=#FF0000>" + fzgui.StringUtils.formatNumber(t[n].Amount) + "</color> Game <color=#FF0000>" + t[n].gameID + "</color>" + (n == t.length - 1 ? "" : ",") + "</size>" : "<size=20>" + (0 == n ? "Chúc mừng người chơi" : "") + " <color=#FF6600>" + (t[n].UserName, 
t[n].UserName) + "</color> " + o[0] + " <color=#FF0000>" + fzgui.StringUtils.formatNumber(t[n].Amount) + "</color> Game <color=#FF0000>" + this.getGameNameById(t[n].GameID) + "</color>" + (n == t.length - 1 ? "" : ",") + "</size></size>";
var i = new h();
i.content = e;
i.type = a.MONEY_WIN;
this.addNotify(i);
}
}
};
e.prototype.addNotify = function(t) {
t.type == a.MONEY_WIN ? this.listNotifyMoneyWin.push(t) : t.type == a.ADMIN && this.listNotifyAdmin.push(t);
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
c.default.instance.sendNotifyRun();
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
r([ f(p.default) ], e.prototype, "listNotifyItem", void 0);
r([ f(cc.Node) ], e.prototype, "nodeContent", void 0);
return r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"../network/NotificationNetworkHandle": "NotificationNetworkHandle",
"./NotiRunItem": "NotiRunItem"
} ],
NotificationNetworkHandle: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d49d4pTbZtBr5HXvzAt99Nj", "NotificationNetworkHandle");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../LobbyConst"), c = t("../GateJackpotNoti"), s = cc._decorator, p = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "notify_event";
e.isConnect = !1;
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
e.prototype.onLoad = function() {
o._instance = this;
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.off(a.LobbyConst.EVENT_NAME.GET_LIST_MAIL, this.getUnReadMail, this);
cc.systemEvent.on(a.LobbyConst.EVENT_NAME.GET_LIST_MAIL, this.getUnReadMail, this);
cc.systemEvent.off(a.LobbyConst.EVENT_NAME.GET_DETAIL_MAIL, this.getDetailMail, this);
cc.systemEvent.on(a.LobbyConst.EVENT_NAME.GET_DETAIL_MAIL, this.getDetailMail, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, "https://noti.dragonf1.xyz/signalr/negotiate", "GateHub", "", !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
fzgui.ZLog.log("=====================CLOSE WS NOTI===============================");
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
t.R < 0 && fzgui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if (n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0];
switch (n.M) {
case "jackpots":
this.onGetListJackPot(i);
break;

case "UserMail":
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.USER_MAIL, i);
break;

case "notifyNewMail":
break;

case "mailContent":
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.EVENT_DETAIL_MAIL, i);
break;

case "NotifyJackpot":
break;

case "NotifySystem":
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, i);
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
o.instance.sendNotifyRun();
}, 1);
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
fzgui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
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
for (var e = t.length, o = 0; o < e; o++) if (89 == t[o].GameID || 90 == t[o].GameID || 1236 == t[o].GameID) {
var n = (r = {
slotID: t[o].GameID,
listJackPot: JSON.parse(t[o].JackpotFund)
}).listJackPot.length, i = r.listJackPot;
a.LobbyConst.slotByKeys.set(r.slotID, i);
} else {
n = (r = {
slotID: t[o].GameID,
listJackPot: t[o].JackpotFund.split("|")
}).listJackPot.length;
for (var r, c = [], s = 0; s < n; s++) c.push(parseInt(r.listJackPot[s]));
a.LobbyConst.slotByKeys.set(r.slotID, c);
}
fzgui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT);
}
};
e.prototype.showJackpotNotify = function(t) {
var e = fzgui.EBundle_Name.LOBBY;
fzgui.BundleManager.instance.getPrefabFromBundle("prefabs/GateJackpotNotify", e, function(e) {
var o = cc.instantiate(e);
fzgui.GameCoreManager.instance.nWidgetShowJackpot.addChild(o);
var n = o.getComponent(c.default);
n && n.showJackpot(t);
});
};
var o;
e._instance = null;
return o = r([ p ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"../GateJackpotNoti": "GateJackpotNoti"
} ],
OpenUrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fdad7/FnzVGQIEH3Ihxq/j2", "OpenUrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onBtnClick = function(t, e) {
cc.sys.openURL(e);
};
return r([ c ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
RegisterCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9766EnY81CLoCN+Ya8puza", "RegisterCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = t("./utils/CapchaZ"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
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
var t = this, e = this.edbAccount.string.trim(), o = this.edbPass.string.trim(), n = this.edbRePass.string.trim(), i = (this.edbCaptcha.string, 
window.md5(e.toLowerCase() + "zxc" + o.toLowerCase()));
if (e.length > 18 || e.length < 6 || e.indexOf(" ") > 0 || e.indexOf("@") > 0) fzgui.UIPopupManager.instance.showPopup("Tên tài khoản phải từ 6 - 18 ký tự, viết liền không dấu, không có ký tự đặc biệt!"); else if (o.length < 6 || o.length > 18) fzgui.UIPopupManager.instance.showPopup("Mật khẩu phải có độ dài từ 6 - 18 ký tự!"); else if (o === n) {
fzgui.ZLog.log('======"PlatformID": LobbyConst.platform==============' + a.LobbyConst.platform);
var r = {
username: e,
password: window.md5(o),
verify: this.UICaptcha.getComponent(s.default).getCapChaId(),
captcha: this.edbCaptcha.string,
Email: "fff",
landingHost: fzgui.PlatformInterface.bundleID,
PlatformID: a.LobbyConst.platform,
deviceID: fzgui.PlatformInterface.deviceID,
platform: fzgui.PlatformInterface.platform,
OSName: fzgui.PlatformInterface.OSName,
deviceToken: fzgui.PlatformInterface.deviceToken,
phoneNumber: fzgui.PlatformInterface.phoneNumber,
OSVersion: fzgui.PlatformInterface.OSVersion,
appVersion: fzgui.PlatformInterface.appVersion,
versionCode: fzgui.PlatformInterface.versionCode,
bundleID: fzgui.PlatformInterface.bundleID,
MerchantID: "1",
ServiceID: "1",
gate: fzgui.ConfigManager.instance.ConfigInfo.Gate,
Sid: i
};
c.MVUtils.postRaw(a.LobbyConst.API.REGISTRY, r, function(e, o) {
if (e >= 200 && e < 400) t.onLoginSuccess(o, function() {
fzgui.Https.get(a.LobbyConst.API.GET_INFO_ACCOUNT + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken, function(t) {
fzgui.UserManager.instance.mainUserInfo.VipPoint = t.VipPoint;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
fzgui.UserManager.instance.mainUserInfo.PassWord = r.password;
});
}); else {
t.onRefreshCaptchaClicked();
fzgui.UIPopupManager.instance.showPopup(o);
}
});
} else fzgui.UIPopupManager.instance.showPopup("Mật khẩu nhập lại không trùng với mật khẩu đã nhập.");
};
e.prototype.onLoginSuccess = function(t, e) {
fzgui.UserManager.instance.mainUserInfo = t;
this.hide();
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS);
e && e();
};
e.prototype.onRefreshCaptchaClicked = function() {};
r([ u(cc.EditBox) ], e.prototype, "edbAccount", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbRePass", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
return r([ l ], e);
}(fzgui.UIPopup);
o.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
TabTypeGameCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9205OA5INPFLbKqXgtwJU3", "TabTypeGameCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
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
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
WidgetIconBigbang: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3acbcfqXDBEcYeUxomMconC", "WidgetIconBigbang");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./GUIEventBigBang"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfMiniGame = null;
return e;
}
e.prototype.onClick = function() {
fzgui.UIPopupManager.instance.has(a.default) || fzgui.UIPopupManager.instance.showPopupFromPrefab(this.prfMiniGame);
};
r([ p(cc.Prefab) ], e.prototype, "prfMiniGame", void 0);
return r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./GUIEventBigBang": "GUIEventBigBang"
} ],
WidgetIconCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3c748uOw7NLXpHZ13WZ9nfN", "WidgetIconCtrl");
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
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./utils/Lobby_MiniGameNavigator"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfPopupMinigame = null;
e.buttonClicked = !0;
e.buttonMoved = cc.Vec2.ZERO;
return e;
}
e.prototype.onClick = function() {
fzgui.UIPopupManager.instance.has(a.default) || fzgui.UIPopupManager.instance.showPopupFromPrefab(this.prfPopupMinigame);
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
o.default = l;
cc._RF.pop();
}, {
"./utils/Lobby_MiniGameNavigator": "Lobby_MiniGameNavigator"
} ]
}, {}, [ "LobbyConst", "BannerPromotion", "BetTX", "EventEDB", "ForgetPassCtrl", "GUIAccountChangePass", "GUIAccountDetail", "GUIAccountMail", "GUIAccountSafe", "GUIAccountSecurity", "GUIAccountSecurityNew", "GUIEventBigBang", "GUIEventX3Nap", "GUIGiftCode", "GUIOTP", "GUISettingCtrl", "GUITopJackpotCtrl", "GUITopupBank", "GUITopupBankManual", "GUITopupCtrl", "GUITopupEWallet", "GUITopupExchange", "GUITopupHistoryAllGame", "GUITopupHistoryBankManual", "GUITopupHistoryNap", "GUITopupHistoryRut", "GUITopupRutBank", "GUITopupTelco", "GUITopupTranfers", "GUIUpdateDisplayName", "GateJackpotNoti", "GateSettingPopup", "GuiTopupRutMomo", "HeaderAccountCtrl", "HeaderCtrl", "ItemGiftBigBang", "ItemMail", "ItemNapX3", "ItemRankBigBang", "ItemTopJackpotCtrl", "JackpotBySlot", "LobbyCtrl", "LoginByLanding", "LoginCtrl", "MVUtils", "OpenUrl", "RegisterCtrl", "TabTypeGameCtrl", "WidgetIconBigbang", "WidgetIconCtrl", "LobbAudioDefined", "BundleMiniGame", "BundleSceneGame", "IconAnGame", "IconAnGameScene", "IconBanCa", "IconMiniPoker", "IconMiniTaiXiu", "IconMiniTomCuaCa", "IconTestGameCards", "NetworkPortal", "NotificationNetworkHandle", "NotiRun", "NotiRunItem", "AutoScroll", "CapchaReal", "CapchaZ", "Lobby_MiniGameNavigator", "Lobby_UIDraggable", "Lobby_UINumericLabelHelper", "Lobby_UIScrollBar", "Lobby_UIShowPopupHelp", "Lobby_UIShowToolTip", "Lobby_UITableView" ]);