window.__require = function t(e, o, n) {
function i(s, c) {
if (!o[s]) {
if (!e[s]) {
var a = s.split("/");
a = a[a.length - 1];
if (!e[a]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(a, !0);
if (r) return r(a, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = a;
}
var u = o[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return i(e[s][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
return i;
}({
"LoDe.Chat.NetworkClient": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ca93aOHAFFBTa6JZ2FXloxT", "LoDe.Chat.NetworkClient");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDe.Chat"), c = cc._decorator, a = c.ccclass, l = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
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
cc.systemEvent.off("OnChatLodeSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatLoDeSocketEvent", this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect("OnChatLoDeSocketEvent", "https://chat.dragonf1.xyz/signalr/negotiate", "chatHub", fzgui.UserManager.instance.mainUserInfo.cookie, !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
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
this.registerChat();
}
t.R < 0 && fzgui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if (n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0];
switch (n.M) {
case "receiveMessage":
s.default.instance.receiveMessage(i);
break;

case "listLastMessages":
s.default.instance.listLastMessages(i);
}
}
}
};
e.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ "xocdialive" ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
fzgui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off("OnChatLoDeSocketEvent", this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
fzgui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var o;
e._instance = null;
return o = r([ a ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./LoDe.Chat": "LoDe.Chat"
} ],
"LoDe.Chat": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9c3ffGLsxHjrWoaJNZhuWG", "LoDe.Chat");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDe.Chat.NetworkClient"), c = cc._decorator, a = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.listChat = null;
e.scrollListChat = null;
e.txtInputChat = null;
return e;
}
o = e;
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
s.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, "xocdialive" ]);
this.txtInputChat.string = "";
}
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var o = t[e], n = o.n, i = o.c;
if (void 0 === n || void 0 === i) return;
if (n.length > 0 && i.length > 0) {
var r = i, s = cc.instantiate(this.templateMessage), c = o.n, a = n;
s.active = !0;
c = (c.localeCompare(fzgui.UserManager.instance.mainUserInfo.NickName), a);
s.getComponent(cc.Label).string = c + ": " + r;
if (1 == t.IsVipTx) {
s.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_nameVip").getComponent(cc.Label).string = c + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (s.getContentSize().height - s.getChildByName("lb_nameVip").getContentSize().height) / 2;
s.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
s.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_name").getComponent(cc.Label).string = c + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (s.getContentSize().height - s.getChildByName("lb_name").getContentSize().height) / 2;
s.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(s);
}
this.scrollListChat.scrollToBottom();
}
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, o = t.c;
if (void 0 !== e && void 0 !== o) {
if (e.length > 0 && o.length > 0) {
var n = o, i = cc.instantiate(this.templateMessage), r = t.n, s = e;
i.active = !0;
r = (r.localeCompare(fzgui.UserManager.instance.mainUserInfo.NickName), s);
i.getComponent(cc.Label).string = r + ": " + n;
if (1 == t.IsVipTx) {
i.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_nameVip").getComponent(cc.Label).string = r + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (i.getContentSize().height - i.getChildByName("lb_nameVip").getContentSize().height) / 2;
i.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
i.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_name").getComponent(cc.Label).string = r + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (i.getContentSize().height - i.getChildByName("lb_name").getContentSize().height) / 2;
i.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(i);
}
this.scrollListChat.scrollToBottom();
}
};
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
this.txtInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.onKeyDown = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var o;
e._instance = null;
r([ l(cc.Node) ], e.prototype, "templateMessage", void 0);
r([ l(cc.Node) ], e.prototype, "listChat", void 0);
r([ l(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
return o = r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./LoDe.Chat.NetworkClient": "LoDe.Chat.NetworkClient"
} ],
LoDeBetItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "488d3w6/DlHZYVZzfN9bsiO", "LoDeBetItem");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/FormatUtil"), c = cc._decorator, a = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.mIdx = -1;
return e;
}
e.prototype.setDataMyBet = function(t, e) {
this.mIdx = e;
this.label.string = "Bạn đặt <color=yellow><b>" + s.default.formatNumber(t.TotalBetValue) + " Gold</b></c>\n<color=green>" + t.GateName + "</c> (" + t.BetData + ")\n<color=white><i>" + s.default.formatDateTime(t.CreatedDate, !0, !0) + "</i></c>\n";
};
e.prototype.setDataCurBet = function(t, e) {
this.mIdx = e;
this.label.string = "<color=#FFC85E>" + t.DisplayName + "</c> đã đặt cược\n<color=yellow><b>" + s.default.formatNumber(t.TotalBetValue) + " Gold </c></b>\n<color=green>" + t.GateName + "</c> (" + t.BetData + ")\n<color=white><i>" + s.default.formatDateTime(t.CreatedDate, !0, !0) + "</i></c>\n";
};
r([ l(cc.RichText) ], e.prototype, "label", void 0);
return r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
LoDeBetNumber: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e9eeamyXYpNXbWqh2nWdqMC", "LoDeBetNumber");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, a = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNumber = null;
e.tgNumber = null;
e.numBet = 0;
return e;
}
r([ a(cc.Label) ], e.prototype, "lbNumber", void 0);
r([ a(cc.Toggle) ], e.prototype, "tgNumber", void 0);
return r([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LoDeCurBets: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bffd4ksvddIwrrHlfkmLrL8", "LoDeCurBets");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeHistoryBet"), c = cc._decorator, a = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.setData = function(t, e) {
this.mListDataCell = e;
this.scrollview.content.removeAllChildren();
this.mListCell = [];
var o = e.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
for (var n = this.spawnCount <= o ? this.spawnCount : o, i = 0; i < n; i++) {
var r = cc.instantiate(this.cellHistory), s = r.getComponent("LoDeBetItem");
s.setDataCurBet(this.mListDataCell[i], i);
var c = -s.node.height * (.5 + i) - this.spacing * (i + 1);
s.node.setPosition(0, c);
this.scrollview.content.addChild(r);
this.mListCell.push(s);
}
};
return r([ a ], e);
}(s.default));
o.default = l;
cc._RF.pop();
}, {
"./LoDeHistoryBet": "LoDeHistoryBet"
} ],
LoDeHistoryBet: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4ff13xzv6JFy6+OQEC5qI/8", "LoDeHistoryBet");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, a = s.property, l = function(t) {
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
e.type = 0;
return e;
}
e.prototype.update = function(t) {
if (this.node.active) {
this.updateTimer += t;
if (this.updateTimer < this.updateInterval) return;
this.updateTimer = 0;
for (var e = this.bufferZone, o = this.scrollview.content.y < this.lastContentPosY, n = (this.heightItem + this.spacing) * this.mListCell.length, i = 0; i < this.mListCell.length; ++i) {
var r = this.mListCell[i].node, s = this.getPositionInView(r);
if (o) {
if (s.y < -e && r.y + n < 0) {
r.y = r.y + n;
var c = this.mListCell[i], a = c.mIdx - this.mListCell.length;
1 == this.type ? c.setDataMyBet(this.mListDataCell[a], a) : 2 == this.type ? c.setDataCurBet(this.mListDataCell[a], a) : 3 == this.type && c.setData(this.mListDataCell[a], a);
}
} else if (s.y > e && r.y - n > -this.scrollview.content.height) {
r.y = r.y - n;
var l = this.mListCell[i];
a = l.mIdx + this.mListCell.length;
1 == this.type ? l.setDataMyBet(this.mListDataCell[a], a) : 2 == this.type ? l.setDataCurBet(this.mListDataCell[a], a) : 3 == this.type && l.setData(this.mListDataCell[a], a);
}
}
this.lastContentPosY = this.scrollview.content.y;
}
};
e.prototype.getPositionInView = function(t) {
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollview.node.convertToNodeSpaceAR(e);
};
r([ a(cc.ScrollView) ], e.prototype, "scrollview", void 0);
r([ a(cc.Prefab) ], e.prototype, "cellHistory", void 0);
r([ a(cc.Integer) ], e.prototype, "heightItem", void 0);
r([ a(cc.Integer) ], e.prototype, "spacing", void 0);
r([ a(cc.Integer) ], e.prototype, "spawnCount", void 0);
r([ a(cc.Integer) ], e.prototype, "bufferZone", void 0);
r([ a(cc.Integer) ], e.prototype, "type", void 0);
return r([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LoDeHistoryCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9664N/H9RBL4ImCjhzPwy3", "LoDeHistoryCell");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/FormatUtil"), c = cc._decorator, a = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.lbPhien = null;
e.lbTime = null;
e.lbType = null;
e.lbNumSelect = null;
e.lbBet = null;
e.lbResult = null;
e.mIdx = -1;
return e;
}
e.prototype.setData = function(t, e) {
this.mIdx = e;
this.bg.active = !(e % 2);
this.lbPhien.string = t.SessionID;
this.lbTime.string = s.default.formatDateTime(t.CreatedDate, !0, !0);
this.lbType.string = t.GateName;
this.lbNumSelect.string = t.BetData;
this.lbBet.string = s.default.formatNumber(t.TotalBetValue);
this.lbResult.string = s.default.formatNumber(t.TotalAwardValue);
};
r([ l(cc.Node) ], e.prototype, "bg", void 0);
r([ l(cc.Label) ], e.prototype, "lbPhien", void 0);
r([ l(cc.Label) ], e.prototype, "lbTime", void 0);
r([ l(cc.Label) ], e.prototype, "lbType", void 0);
r([ l(cc.Label) ], e.prototype, "lbNumSelect", void 0);
r([ l(cc.Label) ], e.prototype, "lbBet", void 0);
r([ l(cc.Label) ], e.prototype, "lbResult", void 0);
return r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
LoDeHistoryDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b5adalbF/JLkpwlUBr5sbCE", "LoDeHistoryDialog");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeHistory"), c = t("./LoDeVar"), a = cc._decorator, l = a.ccclass, u = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
c.default.get(c.default.api.GetBetAccountHistory, {
top: 50
}, function(t, e) {
s.default.instance.setData(-1, e);
});
};
return r([ l ], e);
}(fzgui.UIPopup));
o.default = u;
cc._RF.pop();
}, {
"./LoDeHistory": "LoDeHistory",
"./LoDeVar": "LoDeVar"
} ],
LoDeHistory: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b1628xPg6xAuo5gh9kuFdiz", "LoDeHistory");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeHistoryBet"), c = cc._decorator, a = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
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
e.prototype.setData = function(t, e) {
this.mListDataCell = e;
this.scrollview.content.removeAllChildren();
this.mListCell = [];
var o = e.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
for (var n = this.spawnCount <= o ? this.spawnCount : o, i = 0; i < n; i++) {
var r = cc.instantiate(this.cellHistory), s = r.getComponent("LoDeHistoryCell");
s.setData(this.mListDataCell[i], i);
var c = -s.node.height * (.5 + i) - this.spacing * (i + 1);
s.node.setPosition(0, c);
this.scrollview.content.addChild(r);
this.mListCell.push(s);
}
};
var o;
e._instance = null;
return o = r([ a ], e);
}(s.default));
o.default = l;
cc._RF.pop();
}, {
"./LoDeHistoryBet": "LoDeHistoryBet"
} ],
LoDeMyBets: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e555fnAK29PaKQtIVBOSaKl", "LoDeMyBets");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeHistoryBet"), c = cc._decorator, a = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.setData = function(t, e) {
this.mListDataCell = e;
this.scrollview.content.removeAllChildren();
this.mListCell = [];
var o = e.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
for (var n = this.spawnCount <= o ? this.spawnCount : o, i = 0; i < n; i++) {
var r = cc.instantiate(this.cellHistory), s = r.getComponent("LoDeBetItem");
s.setDataMyBet(this.mListDataCell[i], i);
var c = -s.node.height * (.5 + i) - this.spacing * (i + 1);
s.node.setPosition(0, c);
this.scrollview.content.addChild(r);
this.mListCell.push(s);
}
};
return r([ a ], e);
}(s.default));
o.default = l;
cc._RF.pop();
}, {
"./LoDeHistoryBet": "LoDeHistoryBet"
} ],
LoDeNetwork: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e71dc2/X0pD+ZqMESPrxkyL", "LoDeNetwork");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/Util"), c = t("./LoDe"), a = t("./LoDeCurBets"), l = t("./LoDeMyBets"), u = t("./LoDeUI"), p = t("./LoDeVar"), h = cc._decorator, f = h.ccclass, d = h.property, y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UI = null;
e.LoDeCurBets = null;
e.LoDeMyBets = null;
e.mainGame = null;
e.arrayDataMyBet = [];
e._gameStatus = -1;
e._timer = 0;
e.mListenerKey = "LoDe";
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
e.prototype.onDisable = function() {
console.log("fzgui.UserManager.instance.mainUserInfo.Money===>" + fzgui.UserManager.instance.mainUserInfo.Money);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, p.default.api.negotiate, p.default.api.hub, p.default.api.gate, fzgui.UserManager.instance.mainUserInfo.cookie, !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s) this.mSignalr.send("EnterLobby", []); else {
if (!t.M || !Array.isArray(t.M) || 0 == t.M.length) return;
for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if ("object" == typeof n && "string" == typeof n.M && n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0], r = n.A[1];
switch (n.M) {
case "currSessionInfo":
this.parseGetCurrentData(i);
break;

case "message":
this.mainGame.showTooltip(i);
break;

case "betSuccess":
this.parseSetBetData(r);
}
}
}
}
};
e.prototype.init = function(t) {
this.connect();
this.mainGame = t;
this.getGameSessionBetAccount();
this.getBetAccountHistory();
this._timer = 0;
this.arrayDataMyBet = [];
};
e.prototype.timeCounter = function() {
this._timer > 0 && this._timer--;
if (this._timer <= 0) {
this.getGameSessionBetAccount();
this.unschedule(this.timeCounter);
}
this._gameStatus === p.default.GAME_STATUS.BETTING ? this.UI.lbStatus.string = s.default.parseTime(this._timer, !0) : this._gameStatus === p.default.GAME_STATUS.WAITING && (this.UI.lbStatus.string = "Chờ phiên sau: " + s.default.parseTime(this._timer, !0));
};
e.prototype.requestGetCurrentData = function() {};
e.prototype.parseGetCurrentData = function(t) {
console.log("-=-=parseGetCurrentData ", t);
this.mainGame.currentGameSessionID = t.SessionID;
c.default.instance.LstGateInfo = t.LstGateInfo;
this.node.runAction(cc.sequence(cc.callFunc(function() {
this.getGameSessionBetAccount();
}.bind(this)), cc.delayTime(60)).repeatForever());
this.mainGame.dateList = [];
this._gameStatus = t.Phrase;
if (this._gameStatus === p.default.GAME_STATUS.BETTING) {
this._timer = t.Elapsed + 1;
this.UI.lbStatus.node.color = cc.color(255, 200, 94);
this.schedule(this.timeCounter, 1);
this.timeCounter();
} else if (this._gameStatus === p.default.GAME_STATUS.WAITING) {
this._timer = t.Elapsed + 1;
this.UI.lbStatus.node.color = cc.Color.RED;
this.schedule(this.timeCounter, 1);
this.timeCounter();
}
var e = t.OpenDate, o = e.substring(0, 4), n = e.substring(5, 7), i = e.substring(8, 10);
this.UI.lbTitle.string = i + "-" + n;
for (var r = new Date(o, parseInt(n) - 1, i), s = 0; s < 11; s++) {
var a = r.getFullYear() + (r.getMonth() + 1 < 10 ? "0" : "") + (r.getMonth() + 1) + (r.getDate() < 10 ? "0" : "") + r.getDate();
this.mainGame.dateList.push(a);
r.setDate(r.getDate() - 1);
}
this.getKQ(void 0, t.Result);
};
e.prototype.getHisKQ = function(t) {
var e = this, o = t.substring(6, 8), n = t.substring(4, 6), i = t.substring(0, 4);
console.log(t);
p.default.get(p.default.api.GetHistoryKetQua, {
openDate: n + "-" + o + "-" + i
}, function(o, n) {
e.getKQ(t, n);
});
};
e.prototype.getKQ = function(t, e) {
void 0 === t && (t = null);
console.log(e);
for (var o = 0; o < this.UI.txtKQ.length; o++) this.UI.txtKQ[o].string = "";
var n = (t = t || this.mainGame.dateList[1]).toString(), i = n.substring(6, 8), r = n.substring(4, 6);
n.substring(0, 4);
this.UI.lbTitle.string = i + "-" + r;
this.parseDataKQ(e);
};
e.prototype.parseDataKQ = function(t) {
if (t && t[0] && t[0].DateInt) {
var e = t[0].DateInt.toString();
this.UI.lbTitle.string = "XSMB " + e.substring(6, 8) + "-" + e.substring(4, 6) + "-" + e.substring(0, 4);
}
for (var o = 0, n = [ "SpecialPrizeData", "FirstPrizeData", "SecondPrizeData", "ThirdPrizeData", "FourthPrizeData", "FifthPrizeData", "SixthPrizeData", "SeventhPrizeData", "EighthPrizeData" ], i = 0; i < 8; i++) if (t && t[n[i]]) {
var r = t[n[i]].split(",");
for (var s in r) {
this.UI.txtKQ[o].string = r[s];
o += 1;
}
}
};
e.prototype.getGameSessionBetAccount = function() {
var t = this;
p.default.get(p.default.api.GetGameSessionBetAccount, {
bettingType: 1
}, function(e, o) {
t.arrayDataMyBet = [];
if (o.length > 0) {
for (var n = 0; n < o.length; n++) t.arrayDataMyBet.push(o[n]);
t.updateListViewMyBet();
}
});
};
e.prototype.getBetAccountHistory = function() {
var t = this;
p.default.get(p.default.api.GetGameSessionBetAccount, {
bettingType: 2
}, function(e, o) {
t.LoDeMyBets.setData(0, o);
});
};
e.prototype.updateListViewMyBet = function() {
this.arrayDataMyBet.length > 0 && this.LoDeCurBets.setData(0, this.arrayDataMyBet);
};
e.prototype.parseSetBetData = function(t) {
this.UI.nodepopupbet.active = !1;
fzgui.UserManager.instance.mainUserInfo.Money = t;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
this.mainGame.showTooltip("Đặt cược thành công");
c.default.instance.updateMoney();
this.getGameSessionBetAccount();
this.getBetAccountHistory();
};
e.prototype.setBet = function(t, e, o, n, i) {
this.mSignalr.send("Bet", [ t, e, o, n, i ]);
};
var o;
e._instance = null;
r([ d(u.default) ], e.prototype, "UI", void 0);
r([ d(a.default) ], e.prototype, "LoDeCurBets", void 0);
r([ d(l.default) ], e.prototype, "LoDeMyBets", void 0);
return o = r([ f ], e);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"../../base_slot/util/Util": void 0,
"./LoDe": "LoDe",
"./LoDeCurBets": "LoDeCurBets",
"./LoDeMyBets": "LoDeMyBets",
"./LoDeUI": "LoDeUI",
"./LoDeVar": "LoDeVar"
} ],
LoDeRankCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "28956x3gmhArLLYPBkQunxw", "LoDeRankCell");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/FormatUtil"), c = cc._decorator, a = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.rank = null;
e.nameUser = null;
e.moneyWin = null;
return e;
}
e.prototype.setData = function(t) {
this.nameUser.string = t.DisplayName;
this.moneyWin.string = s.default.formatNumber(t.Profit);
};
r([ l(cc.Label) ], e.prototype, "rank", void 0);
r([ l(cc.Label) ], e.prototype, "nameUser", void 0);
r([ l(cc.Label) ], e.prototype, "moneyWin", void 0);
return r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
LoDeRank: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "327de9b3o1GOouRjSraJhtO", "LoDeRank");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDe"), c = t("./LoDeRankCell"), a = t("./LoDeVar"), l = t("./Utils/LoDeSelectBoxUtil"), u = t("./Utils/LoDeSelectItemData"), p = cc._decorator, h = p.ccclass, f = p.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listCells = [];
e.sbuDate = null;
e._currentDateId = 0;
e._dateList = null;
return e;
}
e.prototype.onLoad = function() {
this._dateList = s.default.instance.dateList;
this.setContentDate(s.default.instance.dateList);
this.sbuDate.setCallbackSelect(this.onSelectDate, this);
};
e.prototype.setContentDate = function(t) {
for (var e = [], o = 0; o < 10; o++) {
var n = new u.default();
n.id = o;
var i = t[o].toString();
n.value = i.substring(6, 8) + "-" + i.substring(4, 6) + "-" + i.substring(0, 4);
e.push(n);
}
if (e.length > 0) {
this.sbuDate.setContentSelectBox(e);
this.sbuDate.setDescription(e[1].value);
}
this.onSelectDate(1);
};
e.prototype.onSelectDate = function(t) {
this._currentDateId = t;
this.getRank(t);
};
e.prototype.getRank = function(t) {
var e = this, o = this._dateList[t].toString();
a.default.get(a.default.api.GetTopWins, {
openDate: o.substring(4, 6) + "-" + o.substring(6, 8) + "-" + o.substring(0, 4)
}, function(t, o) {
e.parseData(o);
});
};
e.prototype.parseData = function(t) {
for (var e = 0; e < this.listCells.length; e++) if (t[e]) {
this.listCells[e].node.active = !0;
this.listCells[e].setData(t[e]);
} else this.listCells[e].node.active = !1;
};
r([ f(c.default) ], e.prototype, "listCells", void 0);
r([ f(l.default) ], e.prototype, "sbuDate", void 0);
return r([ h ], e);
}(fzgui.UIPopup);
o.default = d;
cc._RF.pop();
}, {
"./LoDe": "LoDe",
"./LoDeRankCell": "LoDeRankCell",
"./LoDeVar": "LoDeVar",
"./Utils/LoDeSelectBoxUtil": "LoDeSelectBoxUtil",
"./Utils/LoDeSelectItemData": "LoDeSelectItemData"
} ],
LoDeSelectBoxItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "11a68Xep0FE8rj9lAtxGRRr", "LoDeSelectBoxItem");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, a = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBg = null;
e.lbValue = null;
e.id = "undefined";
e.idx = 0;
e._valueItem = null;
e._delegate = null;
return e;
}
e.prototype.init = function(t) {
this._delegate = t;
};
e.prototype.onLoad = function() {
this.nodeBg.active = !1;
};
e.prototype.setValue = function(t, e, o) {
void 0 === o && (o = 0);
this.id = t;
this.lbValue.string = e;
this._valueItem = e;
this.idx = o;
};
e.prototype.getId = function() {
return this.id;
};
e.prototype.getValue = function() {
return this._valueItem;
};
e.prototype.setSelected = function(t) {
this.nodeBg.active = t;
};
e.prototype.onTouchSelectItem = function() {
this._delegate.onTouchSelectItem(this.id, this._valueItem, this.idx);
};
r([ a(cc.Node) ], e.prototype, "nodeBg", void 0);
r([ a(cc.Label) ], e.prototype, "lbValue", void 0);
return r([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LoDeSelectBoxUtil: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2e65fNGrQZKi5X8/zuaf0Ly", "LoDeSelectBoxUtil");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeSelectBoxItem"), c = t("./LoDeSelectItemData"), a = cc._decorator, l = a.ccclass, u = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbDescription = null;
e.buttonSelect = null;
e.scrollViewSelect = null;
e.selectBoxItemPrefab = null;
e.nodeContent = null;
e.fontSizeCell = 0;
e.colorLblCell = cc.Color.BLACK;
e.itemDatas = [];
e.arrDropDownItem = [];
e._currentItemData = null;
e._description = null;
e._callbackSelect = null;
e._targetCbSelect = null;
return e;
}
e.prototype.onLoad = function() {
this.nodeContent.active = !1;
};
e.prototype.setCallbackSelect = function(t, e) {
this._callbackSelect = t;
this._targetCbSelect = e;
};
e.prototype.setContentSelectBox = function(t) {
for (var e = 0; e < this.arrDropDownItem.length; e++) {
this.arrDropDownItem[e].node.active = !1;
this.arrDropDownItem[e].setSelected(!1);
}
this.itemDatas = t;
for (e = 0; e < t.length; e++) {
if (!this.arrDropDownItem[e]) {
var o = cc.instantiate(this.selectBoxItemPrefab);
this.scrollViewSelect.content.addChild(o);
this.arrDropDownItem[e] = o.getComponent(s.default);
this.arrDropDownItem[e].lbValue.fontSize = this.fontSizeCell > 0 ? this.fontSizeCell : this.lbDescription.fontSize;
this.arrDropDownItem[e].node.color = this.colorLblCell;
}
this.arrDropDownItem[e].node.active = !0;
this.arrDropDownItem[e].setSelected(!1);
this.arrDropDownItem[e].init(this);
this.arrDropDownItem[e].setValue(t[e].id, t[e].value, e);
}
this.arrDropDownItem.length > 0 && this.arrDropDownItem[0].setSelected(!0);
};
e.prototype.setDescription = function(t) {
this._description = t;
this.lbDescription.string = t;
};
e.prototype.setCurrentValue = function(t, e) {
this._currentItemData = new c.default();
this._currentItemData.id = t;
this._currentItemData.value = e;
this.lbDescription.string = e;
};
e.prototype.onTouchSelectItem = function(t, e, o) {
for (var n = 0; n < this.arrDropDownItem.length; n++) o == n ? this.arrDropDownItem[n].setSelected(!0) : this.arrDropDownItem[n].setSelected(!1);
this.setCurrentValue(t, e, o);
this.nodeContent.active = !1;
this._callbackSelect && (this._targetCbSelect ? this._callbackSelect.call(this._targetCbSelect, t) : this._callbackSelect(t));
};
e.prototype.onTouchSelectDropDown = function() {
this.nodeContent.active = !this.nodeContent.active;
};
r([ u(cc.Label) ], e.prototype, "lbDescription", void 0);
r([ u(cc.Button) ], e.prototype, "buttonSelect", void 0);
r([ u(cc.ScrollView) ], e.prototype, "scrollViewSelect", void 0);
r([ u(cc.Prefab) ], e.prototype, "selectBoxItemPrefab", void 0);
r([ u(cc.Node) ], e.prototype, "nodeContent", void 0);
r([ u ], e.prototype, "fontSizeCell", void 0);
r([ u(cc.Color) ], e.prototype, "colorLblCell", void 0);
return r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./LoDeSelectBoxItem": "LoDeSelectBoxItem",
"./LoDeSelectItemData": "LoDeSelectItemData"
} ],
LoDeSelectItemData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ac314XzClpI8JY2P+WMsphQ", "LoDeSelectItemData");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, s = (i.property, function() {
function t() {}
return n([ r ], t);
}());
o.default = s;
cc._RF.pop();
}, {} ],
LoDeSelectNumber: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "55753RGD0JLbpVe6x8jE8d6", "LoDeSelectNumber");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/FormatUtil"), c = t("../../base_slot/util/Util"), a = t("./LoDeNetwork"), l = t("./Utils/LoDeUIDialog2Button"), u = cc._decorator, p = u.ccclass, h = u.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listNumber1 = null;
e.listNumber2 = null;
e.lbNotice = null;
e.ipMoney = null;
e.pickLimit = -1;
e.locationID = -1;
e.numberSelect = [];
e.mainGame = null;
return e;
}
e.prototype.init = function(t, e, o) {
this.mainGame = t;
this.numberSelect = [];
this.lbNotice.string = e + "";
this.pickLimit = e;
this.locationID = o;
this.ipMoney.string = "";
if (2 === o || 3 === o) {
this.listNumber2.active = !0;
this.listNumber1.active = !1;
for (var n = 0; n < this.listNumber2.children.length; n++) {
(i = this.listNumber2.children[n].getComponent("LoDeBetNumber")).lbNumber.string = n;
i.numBet = n;
i.tgNumber.isChecked = !1;
}
} else {
this.listNumber1.active = !0;
this.listNumber2.active = !1;
for (n = 0; n < this.listNumber1.children.length; n++) {
var i;
(i = this.listNumber1.children[n].getComponent("LoDeBetNumber")).lbNumber.string = n < 10 ? "0" + n : n;
i.numBet = n;
i.tgNumber.isChecked = !1;
}
}
};
e.prototype.onSelectNumber = function(t) {
var e = t.getComponent("LoDeBetNumber");
if (e.tgNumber.isChecked) {
if (this.numberSelect.length == this.pickLimit) {
var o = this.numberSelect.shift();
o && (o.tgNumber.isChecked = !1);
}
this.numberSelect.push(e);
} else {
var n = this.numberSelect.indexOf(e);
-1 != n && this.numberSelect.splice(n, 1);
}
};
e.prototype.onBtnBet = function() {
if (this.ipMoney.string && parseInt(c.default.removeDot(this.ipMoney.string)) > 0) if (this.numberSelect.length < this.pickLimit) this.mainGame.showTooltip("Bạn chưa chọn đủ số cần chọn"); else {
for (var t = "", e = 0; e < this.numberSelect.length; e++) 2 === this.locationID || 3 === this.locationID ? t += this.numberSelect[e].numBet : t += (this.numberSelect[e].numBet < 10 ? "0" : "") + this.numberSelect[e].numBet + (e == this.numberSelect.length - 1 ? "" : ",");
fzgui.UIPopupManager.instance.showPopupFromPrefab(this.mainGame.UI.mDialogConfirm);
l.default.instance.nodePopup.getChildByName("Number").getComponent(cc.Label).string = t;
l.default.instance.nodePopup.getChildByName("Money").getComponent(cc.Label).string = this.ipMoney.string + " Gold";
l.default.instance.showDialog("Bạn có chắc chắn muốn đặt số", "ĐỒNG Ý", function() {
a.default.instance.setBet(this.locationID, parseInt(c.default.removeDot(this.ipMoney.string)), t, 4, 1);
this.mainGame.onBtnAll(null, "closeSelectNumber");
}.bind(this));
} else this.mainGame.showTooltip("Bạn hãy điền tiền cược");
};
e.prototype.inputNumber = function() {
this.ipMoney.string = s.default.formatNumber(c.default.removeDot(this.ipMoney.string));
};
r([ h(cc.Node) ], e.prototype, "listNumber1", void 0);
r([ h(cc.Node) ], e.prototype, "listNumber2", void 0);
r([ h(cc.Label) ], e.prototype, "lbNotice", void 0);
r([ h(cc.EditBox) ], e.prototype, "ipMoney", void 0);
return r([ p ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0,
"../../base_slot/util/Util": void 0,
"./LoDeNetwork": "LoDeNetwork",
"./Utils/LoDeUIDialog2Button": "LoDeUIDialog2Button"
} ],
LoDeTutorial: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "42ef5EeIjJAFaCCPry6F5/e", "LoDeTutorial");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, a = (s.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ c ], e);
}(fzgui.UIPopup));
o.default = a;
cc._RF.pop();
}, {} ],
LoDeUIDialog2Button: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "16e240RKFtK+ICFyUS2JkJT", "LoDeUIDialog2Button");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, a = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblContent = null;
e.lblTitleBtnOk = null;
e.nodePopup = null;
e.mCallbackOk = null;
e.mTargetOk = null;
e.mCallbackCancel = null;
e.mTargetCancel = null;
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
e.prototype.showDialog = function(t, e, o, n, i, r) {
void 0 === e && (e = "ĐỒNG Ý");
void 0 === o && (o = null);
void 0 === n && (n = null);
void 0 === i && (i = null);
void 0 === r && (r = null);
this.mCallbackOk = o;
this.mTargetOk = n;
this.mCallbackCancel = i;
this.mTargetCancel = r;
"" != t && (this.lblContent.string = t);
this.lblTitleBtnOk.string = e;
};
e.prototype.onTouchOk = function() {
if (this.mCallbackOk) {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
this.mCallbackOk.call(this.mTargetOk);
}
t.prototype.hide.call(this);
};
e.prototype.onTouchCancel = function() {
this.mCallbackCancel && this.mCallbackCancel.call(this.mTargetCancel);
t.prototype.hide.call(this);
};
var o;
e._instance = null;
r([ a(cc.Label) ], e.prototype, "lblContent", void 0);
r([ a(cc.Label) ], e.prototype, "lblTitleBtnOk", void 0);
r([ a(cc.Node) ], e.prototype, "nodePopup", void 0);
return o = r([ c ], e);
}(fzgui.UIPopup);
o.default = l;
cc._RF.pop();
}, {} ],
LoDeUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eee3aYuayZFs6/CAhxp/lHU", "LoDeUI");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeSelectNumber"), c = cc._decorator, a = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tabDangDat = null;
e.tabDaDat = null;
e.txtKQ = [];
e.lbStatus = null;
e.lbTitle = null;
e.realdate = null;
e.lblmmoney = null;
e.lblTotalWinMoney = null;
e.lblsolo = null;
e.lbltienan = null;
e.lbltongcuoc = null;
e.txtthongbaocuoc = [];
e.edbTienCuoc = null;
e.edbTongCuoc = null;
e.edbSoCuoc = null;
e.btnDat = [];
e.nodeinfocuocmb = [];
e.nodechatkqvc = [];
e.nodemenu = null;
e.nodepopupbet = null;
e.nodeSelectBet = null;
e.mPreTooltip = null;
e.mTutorial = null;
e.mTop = null;
e.mHistory = null;
e.toastNode = null;
e.dialogNode = null;
e.mDialogConfirm = null;
return e;
}
r([ l(cc.ScrollView) ], e.prototype, "tabDangDat", void 0);
r([ l(cc.ScrollView) ], e.prototype, "tabDaDat", void 0);
r([ l(cc.Label) ], e.prototype, "txtKQ", void 0);
r([ l(cc.Label) ], e.prototype, "lbStatus", void 0);
r([ l(cc.Label) ], e.prototype, "lbTitle", void 0);
r([ l(cc.Label) ], e.prototype, "realdate", void 0);
r([ l(cc.Label) ], e.prototype, "lblmmoney", void 0);
r([ l(cc.Label) ], e.prototype, "lblTotalWinMoney", void 0);
r([ l(cc.Label) ], e.prototype, "lblsolo", void 0);
r([ l(cc.Label) ], e.prototype, "lbltienan", void 0);
r([ l(cc.Label) ], e.prototype, "lbltongcuoc", void 0);
r([ l(cc.Label) ], e.prototype, "txtthongbaocuoc", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbTienCuoc", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbTongCuoc", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbSoCuoc", void 0);
r([ l(cc.Node) ], e.prototype, "btnDat", void 0);
r([ l(cc.Node) ], e.prototype, "nodeinfocuocmb", void 0);
r([ l(cc.Node) ], e.prototype, "nodechatkqvc", void 0);
r([ l(cc.Node) ], e.prototype, "nodemenu", void 0);
r([ l(cc.Node) ], e.prototype, "nodepopupbet", void 0);
r([ l(s.default) ], e.prototype, "nodeSelectBet", void 0);
r([ l(cc.Prefab) ], e.prototype, "mPreTooltip", void 0);
r([ l(cc.Prefab) ], e.prototype, "mTutorial", void 0);
r([ l(cc.Prefab) ], e.prototype, "mTop", void 0);
r([ l(cc.Prefab) ], e.prototype, "mHistory", void 0);
r([ l(cc.Node) ], e.prototype, "toastNode", void 0);
r([ l(cc.Node) ], e.prototype, "dialogNode", void 0);
r([ l(cc.Prefab) ], e.prototype, "mDialogConfirm", void 0);
return r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./LoDeSelectNumber": "LoDeSelectNumber"
} ],
LoDeVar: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cb03bMT33VA97L1YcYrxmYT", "LoDeVar");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.getRaw = function(t, e, o, n, i) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && fzgui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.timeout = 3e4;
r.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
r.onreadystatechange = function() {
if (4 == r.readyState) if (r.status >= 200 && r.status < 400) {
n && console.log("ResponseText <=========\nstt=" + r.status + "\ndata=" + r.responseText);
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(r.status, JSON.parse(r.responseText));
} else {
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(r.status, r.responseText);
}
};
r.send();
};
t.postRaw = function(t, e, o, n, i) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && fzgui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.timeout = 3e4;
r.open("POST", t);
r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
r.onreadystatechange = function() {
if (4 == r.readyState) if (r.status >= 200 && r.status < 400) {
n && console.log("ResponseText <=========\nstt=" + r.status + "\ndata=" + r.responseText);
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(r.status, JSON.parse(r.responseText));
} else {
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(r.status, r.responseText);
}
};
r.send(JSON.stringify(e));
};
t.post = function(t, e, o, n, i) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && fzgui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.timeout = 3e4;
r.open("POST", t + this.getToken());
r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
r.onreadystatechange = function() {
if (4 == r.readyState) if (r.status >= 200 && r.status < 400) {
n && console.log("ResponseText <=========\nstt=" + r.status + "\ndata=" + r.responseText);
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(r.status, JSON.parse(r.responseText));
} else {
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(r.status, r.responseText);
}
};
r.send(JSON.stringify(e));
};
t.get = function(t, e, o, n, i) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
e.token = fzgui.UserManager.instance.mainUserInfo.GameToken;
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && fzgui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.timeout = 3e4;
r.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
r.onreadystatechange = function() {
if (4 == r.readyState) if (r.status >= 200 && r.status < 400) {
n && console.log("ResponseText <=========\nstt=" + r.status + "\ndata=" + r.responseText);
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(r.status, JSON.parse(r.responseText));
} else {
i && fzgui.UIWaitingLayout.hideWaiting();
o && o(r.status, r.responseText);
}
};
r.send();
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
t.api = {
GetLotteryResults: "https://xoso.dragonf1.xyz/api/Xoso/GetBettingOnDay",
GetGameSessionBetAccount: "https://xoso.dragonf1.xyz/api/Xoso/GetBettingOnDay",
GetBetAccountHistory: "https://xoso.dragonf1.xyz/api/Xoso/GetHistory",
GetHistoryKetQua: "https://xoso.dragonf1.xyz/api/Xoso/GetSessionResult",
GetBetAccountGameSession: "",
GetCurrentData: "",
GetLocations: "",
SetBet: "",
SetBet_FreeSpin: "",
GetTopWins: "https://xoso.dragonf1.xyz/api/Xoso/GetBigWinner",
negotiate: "https://xoso.dragonf1.xyz/signalr/negotiate",
hub: "xosoHub",
gate: "Web-hitclub.com"
};
t.GAME_TYPE = [ "DanhLo", "DanhDe", "LoXien", "DauDuoi", "LoTruot" ];
t.GAME_STATUS = {
WAITING: 0,
BETTING: 1,
END: 2
};
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
LoDe: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3c2f0LMvrpFG4b1AXx6A7bH", "LoDe");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/ToolTip"), c = t("./LoDeNetwork"), a = t("./LoDeUI"), l = t("./Utils/Lode.Const"), u = cc._decorator, p = u.ccclass, h = u.property, f = new Date(), d = f.getDate(), y = f.getMonth() + 1, g = f.getFullYear(), b = d + "-" + y, m = d + "-" + y + "-" + g, _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.curGameId = 104;
e.currentGameSessionID = -1;
e.currrentIndexDateList = 1;
e.dateList = [];
e.LstGateInfo = [];
e.gateID = 4;
e.picklimit = 1;
e.numberbet = null;
e.countnumber = 1;
e.isopenmenu = !1;
e.mincuoc = 27;
e.UI = null;
e.Network = null;
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
this.UI.lblmmoney.string = l.LodeConst.formatNumber(fzgui.UserManager.instance.mainUserInfo.Money);
o._instance = this;
this.Network.init(this);
this.currrentIndexDateList = 1;
this.UI.realdate.string = b;
this.UI.nodepopupbet.active = !1;
this.UI.edbTienCuoc.string = "1";
this.UI.edbTongCuoc.string = "27";
this.UI.lbltongcuoc.string = "27";
this.onchangetype();
};
e.prototype.onBtnSellectTypeBet = function(t, e) {
this.gateID = parseInt(e);
this.onchangetype();
5 == parseInt(e) ? this.picklimit = 2 : 6 == parseInt(e) ? this.picklimit = 3 : 7 == parseInt(e) ? this.picklimit = 4 : this.picklimit = 1;
};
e.prototype.onBtnAll = function(t, e) {
switch (e) {
case "dangDat":
this.UI.tabDangDat.node.active = !0;
this.UI.tabDaDat.node.active = !1;
break;

case "daDat":
this.UI.tabDaDat.node.active = !0;
this.UI.tabDangDat.node.active = !1;
break;

case "backLobby":
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
fzgui.GameCoreManager.instance.onBackToLobby();
break;

case "preResult":
this.currrentIndexDateList++;
if (!this.dateList[this.currrentIndexDateList]) {
this.currrentIndexDateList--;
return;
}
c.default.instance.getHisKQ(this.dateList[this.currrentIndexDateList]);
break;

case "nextResult":
this.currrentIndexDateList--;
if (!this.dateList[this.currrentIndexDateList]) {
this.currrentIndexDateList++;
return;
}
c.default.instance.getHisKQ(this.dateList[this.currrentIndexDateList]);
break;

case "bet":
this.onBtnBet(this.picklimit, this.gateID);
break;

case "closeSelectNumber":
this.UI.nodeSelectBet.node.active = !1;
this.node.active = !0;
}
};
e.prototype.onbtnselecttypemb = function(t, e) {
for (var o = [ {
index: 0,
gateID: 4
}, {
index: 1,
gateID: 2
}, {
index: 2,
gateID: 10
}, {
index: 3,
gateID: 5
}, {
index: 4,
gateID: 8
} ], n = 0; n < this.UI.nodeinfocuocmb.length; n++) {
var i = n === parseInt(e, 10);
this.UI.nodeinfocuocmb[n].active = i;
if (i) {
this.gateID = o[n].gateID;
this.onchangetype();
}
}
};
e.prototype.ontouchchatkqcuoc = function(t, e) {
var o = parseInt(e, 10);
!isNaN(o) && o >= 0 && o < this.UI.nodechatkqvc.length && this.UI.nodechatkqvc.forEach(function(t, e) {
t.active = e === o;
});
};
e.prototype.onBtnBet = function(t, e) {
this.UI.nodeSelectBet.init(this, t, e);
this.UI.nodeSelectBet.node.active = !0;
};
e.prototype.onEdbcuocChange = function() {
this.onchangetype();
};
e.prototype.onEdbTongCuocChange = function() {
var t = this, e = this.LstGateInfo.find(function(e) {
return e.GateID === t.gateID;
});
if (e) {
this.UI.lblsolo.string = e.GateValue + "";
this.UI.lbltienan.string = e.Multiplier + "";
var o = parseInt(this.UI.edbTongCuoc.string) / e.GateValue;
if (5 === this.gateID || 6 === this.gateID || 7 === this.gateID) if (o < 1) {
this.showTooltip("Tiền cược 1 con tối thiểu là 1k");
this.UI.edbTongCuoc.string = e.GateValue;
this.UI.edbTienCuoc.string = "1";
} else this.UI.edbTienCuoc.string = o.toFixed(2); else if ((o /= this.countnumber) < 1) {
this.showTooltip("Tiền cược 1 con tối thiểu là 1k");
this.UI.edbTongCuoc.string = e.GateValue;
this.UI.edbTienCuoc.string = o.toFixed(2);
} else this.UI.edbTienCuoc.string = o.toFixed(2);
var n = e.Multiplier * parseFloat(this.UI.edbTienCuoc.string);
this.UI.lblTotalWinMoney.string = n.toFixed(2) + " K";
this.UI.txtthongbaocuoc[0].string = m;
this.UI.txtthongbaocuoc[1].string = e.GateName;
this.UI.txtthongbaocuoc[2].string = this.UI.edbSoCuoc.string;
this.UI.txtthongbaocuoc[3].string = l.LodeConst.formatNumber(1e3 * parseFloat(this.UI.edbTienCuoc.string));
this.UI.txtthongbaocuoc[4].string = l.LodeConst.formatNumber(1e3 * parseInt(this.UI.edbTongCuoc.string));
this.UI.txtthongbaocuoc[5].string = l.LodeConst.formatNumber(1e3 * n);
}
};
e.prototype.onEdbSoCuocChange = function() {
if (2 === this.gateID || 3 === this.gateID) {
var t = Array.from(new Set(this.UI.edbSoCuoc.string.split(""))), e = t.join("-");
this.countnumber = t.length;
this.numberbet = t.join(",");
this.UI.edbSoCuoc.string = e;
} else if (0 === this.gateID || 1 === this.gateID || 4 === this.gateID || 5 === this.gateID || 6 === this.gateID || 7 === this.gateID || 10 === this.gateID) {
var o = this.UI.edbSoCuoc.string.match(/(\d{2})/g);
e = (n = Array.from(new Set(o))).join("-");
this.numberbet = n.join(",");
this.countnumber = n.length;
this.UI.edbSoCuoc.string = e;
} else if (8 === this.gateID || 9 === this.gateID) {
var n;
o = this.UI.edbSoCuoc.string.match(/(\d{3})/g), e = (n = Array.from(new Set(o))).join("-");
this.countnumber = n.length;
this.numberbet = n.join(",");
this.UI.edbSoCuoc.string = e;
}
this.onchangetype();
};
e.prototype.onBtnBetMainGame = function() {
if (null != this.UI.edbSoCuoc.string) if (5 != this.gateID || 2 == this.countnumber) if (6 != this.gateID || 3 == this.countnumber) if (7 != this.gateID || 4 == this.countnumber) if (5 == this.gateID || 6 == this.gateID || 7 == this.gateID) c.default.instance.setBet(this.gateID, 1e3 * parseInt(this.UI.edbTienCuoc.string), this.numberbet, 4, 1); else for (var t = 0, e = this.numberbet.split(","); t < e.length; t++) {
var o = e[t];
c.default.instance.setBet(this.gateID, 1e3 * parseInt(this.UI.edbTienCuoc.string), o, 4, 1);
} else this.showTooltip("Bạn chưa chọn đủ số hoặc sai số quy định"); else this.showTooltip("Bạn chưa chọn đủ số hoặc sai số quy định"); else this.showTooltip("Bạn chưa chọn đủ số hoặc sai số quy định"); else this.showTooltip("Bạn chưa chọn đủ số hoặc sai số quy định");
};
e.prototype.btnshowpucuoc = function() {
if ("" != this.UI.edbSoCuoc.string) {
console.log(this.UI.edbSoCuoc.string);
this.UI.nodepopupbet.active = !0;
} else this.showTooltip("Bạn chưa chọn số cược");
};
e.prototype.btnhidepucuoc = function() {
this.UI.nodepopupbet.active = !1;
};
e.prototype.showTooltip = function(t, e) {
void 0 === e && (e = 2);
if (this.UI.mPreTooltip) {
var o = cc.instantiate(this.UI.mPreTooltip);
o.zIndex = 100;
o.getComponent(s.default).show(t);
this.UI.toastNode.destroyAllChildren();
this.UI.toastNode.addChild(o);
}
};
e.prototype.onchangetype = function() {
var t = this, e = this.LstGateInfo.find(function(e) {
return e.GateID == t.gateID;
});
if (e) {
this.UI.lblsolo.string = e.GateValue + "";
this.UI.lbltienan.string = e.Multiplier + "";
if (5 == this.gateID || 6 == this.gateID || 7 == this.gateID) {
var o = e.GateValue * parseInt(this.UI.edbTienCuoc.string) + "";
this.UI.edbTongCuoc.string = o;
} else {
o = e.GateValue * parseInt(this.UI.edbTienCuoc.string) * this.countnumber + "";
this.UI.edbTongCuoc.string = o;
}
var n = e.Multiplier * parseInt(this.UI.edbTienCuoc.string);
this.UI.lblTotalWinMoney.string = n + " K";
this.UI.txtthongbaocuoc[0].string = m;
this.UI.txtthongbaocuoc[1].string = e.GateName;
this.UI.txtthongbaocuoc[2].string = this.UI.edbSoCuoc.string;
this.UI.txtthongbaocuoc[3].string = l.LodeConst.formatNumber(1e3 * parseInt(this.UI.edbTienCuoc.string));
this.UI.txtthongbaocuoc[4].string = l.LodeConst.formatNumber(1e3 * parseInt(this.UI.edbTongCuoc.string));
this.UI.txtthongbaocuoc[5].string = l.LodeConst.formatNumber(1e3 * n);
}
};
e.prototype.clickshowmenu = function() {
if (0 == this.isopenmenu) {
this.isopenmenu = !0;
this.UI.nodemenu.runAction(cc.moveTo(.2, cc.v2(735, -30)));
this.UI.nodemenu.getChildByName("iconmenu").opacity = 255;
this.UI.nodemenu.getChildByName("iconmenu").scaleX = -1;
} else {
this.isopenmenu = !1;
this.UI.nodemenu.runAction(cc.moveTo(.2, cc.v2(810, -30)));
this.UI.nodemenu.getChildByName("iconmenu").opacity = 125;
this.UI.nodemenu.getChildByName("iconmenu").scaleX = 1;
}
};
e.prototype.updateMoney = function() {
this.UI.lblmmoney.string = l.LodeConst.formatNumber(fzgui.UserManager.instance.mainUserInfo.Money);
};
var o;
e._instance = null;
r([ h(a.default) ], e.prototype, "UI", void 0);
r([ h(c.default) ], e.prototype, "Network", void 0);
return o = r([ p ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../base_slot/util/ToolTip": void 0,
"./LoDeNetwork": "LoDeNetwork",
"./LoDeUI": "LoDeUI",
"./Utils/Lode.Const": "Lode.Const"
} ],
"Lode.Const": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1f7c2yrYNhPXa6YpgNFntSC", "Lode.Const");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LodeConst = void 0;
var n = function() {
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
t.toInt = function(t) {
if ("" == t) return 0;
var e = t.split(",").join("");
return parseInt(e);
};
return t;
}();
o.LodeConst = n;
cc._RF.pop();
}, {} ]
}, {}, [ "LoDe.Chat.NetworkClient", "LoDe.Chat", "LoDe", "LoDeBetItem", "LoDeBetNumber", "LoDeCurBets", "LoDeHistory", "LoDeHistoryBet", "LoDeHistoryCell", "LoDeHistoryDialog", "LoDeMyBets", "LoDeNetwork", "LoDeRank", "LoDeRankCell", "LoDeSelectNumber", "LoDeTutorial", "LoDeUI", "LoDeVar", "LoDeSelectBoxItem", "LoDeSelectBoxUtil", "LoDeSelectItemData", "LoDeUIDialog2Button", "Lode.Const" ]);