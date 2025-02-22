window.__require = function t(e, n, o) {
function i(a, u) {
if (!n[a]) {
if (!e[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!e[s]) {
var c = "function" == typeof __require && __require;
if (!u && c) return c(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var f = n[a] = {
exports: {}
};
e[a][0].call(f.exports, function(t) {
return i(e[a][1][t] || t);
}, f, f.exports, t, e, n, o);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
LiveCasino: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "90f85PYFVdIYYAmbSXBP+vE", "LiveCasino");
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
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var u = t.length - 1; u >= 0; u--) (i = t[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, u = a.ccclass, s = a.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Soduvi = null;
e.ThucNhan = null;
e.ThucChuyen = null;
e.Quy1 = null;
e.Quy2 = null;
e.edbAmount = null;
e.nodeInfoTransfer = null;
e.nodeView = null;
e.Rate = null;
e.amount = 0;
e.amountnhan = null;
return e;
}
n = e;
e.prototype.onLoad = function() {
var t = this;
fzgui.UIWaitingLayout.showWaiting();
var e = "https://api.dragonf1.xyz/Account3rd/Get3rdAccountInfo?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken + "&ProviderId=8";
this.getUrl(e, function(e, n) {
if (n >= 200 && n < 400) {
e && fzgui.UIWaitingLayout.hideWaiting();
var o = JSON.parse(e);
t.Soduvi.string = o.Balance3rd;
t.Rate = o.Rate;
} else {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup(e);
}
});
this.nodeInfoTransfer.active = !0;
this.nodeView.active = !1;
this.Quy1.string = "You88";
this.Quy2.string = "Evolution";
};
e.prototype.start = function() {};
e.prototype.OnClickChangeWallet = function() {
this.onEdbChange();
if ("You88" == this.Quy1.string) {
this.Quy1.string = "Evolution";
this.Quy2.string = "You88";
} else if ("Evolution" == this.Quy1.string) {
this.Quy1.string = "You88";
this.Quy2.string = "Evolution";
}
};
e.prototype.OnClickClose = function() {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
fzgui.GameCoreManager.instance.onBackToLobby();
};
e.prototype.OnClickPlayNow = function() {
this.nodeInfoTransfer.active = !1;
this.nodeView.active = !0;
};
e.prototype.getUrl = function(t, e) {
var n = t, o = cc.loader.getXMLHttpRequest();
o.onreadystatechange = function() {
4 === o.readyState && (200 == o.status ? e(o.responseText, o.status) : o.responseText.length > 0 ? e(o.responseText, o.status) : e("error_code : " + o.status, null));
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
e.prototype.onEdbChange = function() {
var t = this.Rate, e = n.toInt(this.edbAmount.string);
e = Math.abs(e);
if ("You88" == this.Quy1.string) var o = Math.floor(e * t); else "Evolution" == this.Quy1.string && (o = Math.floor(e / t));
this.amount = e;
this.amountnhan = o;
this.ThucChuyen.string = n.formatNumber(this.edbAmount.string);
this.ThucNhan.string = n.formatNumber(o);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.formatNumber = function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
e.toInt = function(t) {
if ("" == t) return 0;
cc.log("before==" + t);
var e = t.split(".").join("");
cc.log("after==" + e);
return parseInt(e);
};
e.prototype.OnClickTranfer = function() {
var t = this, e = "https://api.dragonf1.xyz/Account3rd/MakeTransfer";
fzgui.UIWaitingLayout.showWaiting();
if ("You88" == this.Quy1.string) {
var n = e + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken + "&ProviderId=8&amount=" + this.amountnhan + "&type=";
this.getUrl(n + 0, function(e, n) {
if (n >= 200 && n < 400) {
if (e) {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UITextManager.showCenterNotification("Đổi thành công!");
}
var o = JSON.parse(e);
t.Soduvi.string = o.Balance3rd;
fzgui.UserManager.instance.mainUserInfo.Money = o.Balance;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
} else {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup(e);
}
});
} else if ("Evolution" == this.Quy1.string) {
n = e + "?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken + "&ProviderId=8&amount=" + this.edbAmount.string + "&type=";
this.getUrl(n + 1, function(e, n) {
if (n >= 200 && n < 400) {
if (e) {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UITextManager.showCenterNotification("Đổi thành công!");
}
var o = JSON.parse(e);
t.Soduvi.string = o.Balance3rd;
fzgui.UserManager.instance.mainUserInfo.Money = o.Balance;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
} else {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup(e);
}
});
}
};
var n;
r([ s(cc.Label) ], e.prototype, "Soduvi", void 0);
r([ s(cc.Label) ], e.prototype, "ThucNhan", void 0);
r([ s(cc.Label) ], e.prototype, "ThucChuyen", void 0);
r([ s(cc.Label) ], e.prototype, "Quy1", void 0);
r([ s(cc.Label) ], e.prototype, "Quy2", void 0);
r([ s(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ s(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ s(cc.Node) ], e.prototype, "nodeView", void 0);
return n = r([ u ], e);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {} ],
WebView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a20cehLm1DnZIE3gJZ0su1", "WebView");
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
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var u = t.length - 1; u >= 0; u--) (i = t[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, u = a.ccclass, s = a.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.webview = null;
return e;
}
e.prototype.start = function() {
this.webview.url = "https://fish.dragonf1.xyz/h5live.html";
};
e.prototype.getUrl = function(t, e) {
var n = t, o = cc.loader.getXMLHttpRequest();
o.onreadystatechange = function() {
4 === o.readyState && (200 == o.status ? e(o.responseText, o.status) : o.responseText.length > 0 ? e(o.responseText, o.status) : e("error_code : " + o.status, null));
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
e.prototype.Close = function() {
this.webview.destroy;
fzgui.GameCoreManager.instance.onBackToLobby();
};
r([ s(cc.WebView) ], e.prototype, "webview", void 0);
return r([ u ], e);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {} ]
}, {}, [ "LiveCasino", "WebView" ]);