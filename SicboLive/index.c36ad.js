window.__require = function t(e, o, i) {
function n(a, s) {
if (!o[a]) {
if (!e[a]) {
var r = a.split("/");
r = r[r.length - 1];
if (!e[r]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(r, !0);
if (c) return c(r, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = r;
}
var p = o[a] = {
exports: {}
};
e[a][0].call(p.exports, function(t) {
return n(e[a][1][t] || t);
}, p, p.exports, t, e, o, i);
}
return o[a].exports;
}
for (var c = "function" == typeof __require && __require, a = 0; a < i.length; a++) n(i[a]);
return n;
}({
"Sicbo.Chat.NetworkClient": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "34656XdG5pEKqYkvgipc9m0", "Sicbo.Chat.NetworkClient");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./Sicbo.Chat"), s = cc._decorator, r = s.ccclass, l = (s.property, function(t) {
n(e, t);
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
var t = {
url: "https://chat." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8092/signalr/negotiate",
hub: "chatHub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off("OnChatSicboLiveSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatSicboLiveSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatSicboLiveSocketEvent", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
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
this.registerChat();
}
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, o = 0; o < e; ++o) {
var i = t.M[o];
if (i.A && null != i.A[0] && null != i.A[0]) {
var n = i.A[0];
switch (i.M) {
case "receiveMessage":
a.default.instance.receiveMessage(n);
break;

case "listLastMessages":
a.default.instance.listLastMessages(n);
}
}
}
};
e.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ "taixiulive-789" ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off("OnChatSicboLiveSocketEvent", this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
this.isConnect = !1;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var o;
e._instance = null;
return o = c([ r ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./Sicbo.Chat": "Sicbo.Chat"
} ],
"Sicbo.Chat": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aa80edleS5O+LhR2mtV9/Xo", "Sicbo.Chat");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./Sicbo.Chat.NetworkClient"), s = cc._decorator, r = s.ccclass, l = s.property, p = function(t) {
n(e, t);
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
a.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, "taixiulive-789" ]);
this.txtInputChat.string = "";
}
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = function(e) {
var i = t[e], n = i.n, c = i.c;
if (void 0 === n || void 0 === c) return "continue";
if (n.length > 0 && c.length > 0) {
var a = c, s = cc.instantiate(o.templateMessage), r = i.n, l = n;
s.active = !0;
r = (r.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), l);
s.getComponent(cc.Label).string = r + ": " + a;
if (1 == t.IsVipTx) {
s.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_nameVip").getComponent(cc.Label).string = r + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (s.getContentSize().height - s.getChildByName("lb_nameVip").getContentSize().height) / 2;
s.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
s.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_name").getComponent(cc.Label).string = r + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (s.getContentSize().height - s.getChildByName("lb_name").getContentSize().height) / 2;
s.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
o.listChat.addChild(s);
}
o.scrollListChat.scrollToBottom();
}, o = this, i = 0; i < t.length; i++) e(i);
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, o = t.c;
if (void 0 !== e && void 0 !== o && "SYSTEM" !== e && "SYSTEM" !== o && "TIP2_abccab1783#23" !== e && "TIP3_abccab1783#23" !== e) {
if (e.length > 0 && o.length > 0) {
var i = o, n = cc.instantiate(this.templateMessage), c = t.n, a = e;
n.active = !0;
c = (c.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), a);
n.getComponent(cc.Label).string = c + ": " + i;
if (1 == t.IsVipTx) {
n.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
n.getChildByName("lb_nameVip").getComponent(cc.Label).string = c + ": ";
n.off(cc.Node.EventType.SIZE_CHANGED);
n.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (n.getContentSize().height - n.getChildByName("lb_nameVip").getContentSize().height) / 2;
n.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
n.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
n.getChildByName("lb_name").getComponent(cc.Label).string = c + ": ";
n.off(cc.Node.EventType.SIZE_CHANGED);
n.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (n.getContentSize().height - n.getChildByName("lb_name").getContentSize().height) / 2;
n.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(n);
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
c([ l(cc.Node) ], e.prototype, "templateMessage", void 0);
c([ l(cc.Node) ], e.prototype, "listChat", void 0);
c([ l(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
c([ l(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
return o = c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./Sicbo.Chat.NetworkClient": "Sicbo.Chat.NetworkClient"
} ],
"SicboLive.Assets": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cb5f316wTpNkaSohIyCNE+E", "SicboLive.Assets");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, r = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.avatarDefault = null;
e.listAvatar = [];
e.listSprRank = [];
e.sfChips = [];
e.sfDicesV2 = [];
e.sfNans = [];
e.sfNodeDice = [];
e.sfBacks = [];
e.sfDots = [];
e.bmfWin = null;
e.bmfLose = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.getSprAvatar = function(t) {
return t < 0 || t > 14 ? this.avatarDefault : this.listAvatar.length > 0 ? this.listAvatar[t] : void 0;
};
e.prototype.getChip = function(t) {
return this.sfChips[t];
};
e.prototype.getSprNan = function(t) {
return this.sfNans[t];
};
e.prototype.getSprDicesV2 = function(t) {
return this.sfDicesV2[t - 1];
};
e.prototype.getSprNodeDice = function(t) {
var e = t.Result, o = t.ChipsData.split(",");
parseInt(o[0]), parseInt(o[1]), parseInt(o[2]);
return e < 11 ? this.sfNodeDice[0] : this.sfNodeDice[1];
};
e.prototype.getSprRankID = function(t) {
return this.listSprRank[t];
};
var o;
c([ r(cc.SpriteFrame) ], e.prototype, "avatarDefault", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "listAvatar", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "listSprRank", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfChips", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfDicesV2", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfNans", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfNodeDice", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfBacks", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfDots", void 0);
return o = c([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboLive.ChatController": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3bac27VTJNNnYVRRlNxlN3n", "SicboLive.ChatController");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../network/SicboLive.NetWorkClient"), s = t("../../SicboLive.Common"), r = t("../../SicboLive.Controller"), l = t("./SicboLive.ChatListView"), p = cc._decorator, u = p.ccclass, h = p.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.chatListView = null;
e.edBoxChat = null;
e.btnSendChat = null;
e.nodeDismiss = null;
e.nodeEmotion = null;
e.nodeNormalChat = null;
e.nodeChat = null;
e.isOpenChat = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.listChat = [];
this.emotionStr = [ "1-waaaht", "2-misdoubt", "3-boss", "4-beauty", "5-byebye", "6-after_boom", "7-matrix", "8-sweat", "9-choler", "10-beated", "11-angry", "12-ah", "13-beat", "14-adore", "15-beat_shot", "16-extreme", "20-burn_joss_stick", "21-baffle", "22-cool", "23-dribble", "24-tire", "25-BigSmile" ];
this.chatShortcuts = [ "Nói nhiều quá đánh đi!", "Ngại gì vết bẩn?", "Chơi thì chơi ko chơi thì té", "Ahihi!", "Max nhọ !!!", "Ngon quá hehe!" ];
this.isOpenChat = !1;
};
e.prototype.onEnable = function() {
this.nodeDismiss.active = this.isOpenChat;
};
e.prototype.onShowChat = function() {
if (0 == this.isOpenChat) {
this.isOpenChat = !0;
this.nodeChat.active = !0;
} else {
this.isOpenChat = !1;
this.nodeChat.active = !1;
}
};
e.prototype.onShowFinish = function() {
this.nodeDismiss.active = this.isOpenChat;
};
e.prototype.checkIsEmotion = function() {};
e.prototype.getIndexEmotion = function() {};
e.prototype.addChatContent = function(t) {
this.listChat.push(t);
this.listChat.length > 25 && this.listChat.splice(0, 1);
this.chatListView.initialize(t);
};
e.prototype.editingReturn = function() {
if ("" == this.edBoxChat.string || this.edBoxChat.string.length <= 1) r.default.instance.showMsg("Nội dung chát quá ngắn!"); else if (this.edBoxChat.string.length >= 100) r.default.instance.showMsg("Nội dung chát quá dài!"); else {
var t = new s.default.ModelsSignalr();
t.M = "SendMessage";
t.A = [ this.edBoxChat.string.trim() ];
a.default.getInstance().send(t);
this.edBoxChat.string = "";
}
};
e.prototype.chatShortcutClicked = function(t, e) {
var o = parseInt(e), i = new s.default.ModelsSignalr();
i.M = "SendMessage";
i.A = [ this.chatShortcuts[o] ];
a.default.getInstance().send(i);
};
e.prototype.chatEmotionClicked = function(t, e) {
var o = parseInt(e), i = new s.default.ModelsSignalr();
i.M = "SendMessage";
i.A = [ this.emotionStr[o] ];
a.default.getInstance().send(i);
};
e.prototype.showEmotionClicked = function() {
if (this.nodeEmotion.active) {
this.nodeEmotion.active = !1;
this.nodeNormalChat.active = !0;
} else {
this.nodeEmotion.active = !0;
this.nodeNormalChat.active = !1;
}
};
var o;
e.instance = null;
c([ h(l.default) ], e.prototype, "chatListView", void 0);
c([ h(cc.EditBox) ], e.prototype, "edBoxChat", void 0);
c([ h(cc.Button) ], e.prototype, "btnSendChat", void 0);
c([ h(cc.Node) ], e.prototype, "nodeDismiss", void 0);
c([ h(cc.Node) ], e.prototype, "nodeEmotion", void 0);
c([ h(cc.Node) ], e.prototype, "nodeNormalChat", void 0);
c([ h(cc.Node) ], e.prototype, "nodeChat", void 0);
return o = c([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../SicboLive.Common": "SicboLive.Common",
"../../SicboLive.Controller": "SicboLive.Controller",
"../../network/SicboLive.NetWorkClient": "SicboLive.NetWorkClient",
"./SicboLive.ChatListView": "SicboLive.ChatListView"
} ],
"SicboLive.ChatListView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "08763gtvwlNxr19lXPHjEs+", "SicboLive.ChatListView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../SicboLive.Assets"), s = t("../../SicboLive.InfoView"), r = cc._decorator, l = r.ccclass, p = r.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.srcContent = null;
return e;
}
e.prototype.onEnable = function() {
this.content.removeAllChildren();
this.template.active = !1;
};
e.prototype.initialize = function(t) {
var e = cc.instantiate(this.template);
parseInt(t[3]) == s.default.instance.getAccountIdIsMe() ? e.children[1].color = cc.Color.YELLOW : e.children[1].color = cc.Color.GREEN;
e.children[0].active = !1;
e.children[1].getComponent(cc.Label).string = t[0];
e.children[2].getComponent(cc.Sprite).spriteFrame = a.default.instance.getSprRankID(parseInt(t[5]) - 1);
e.children[3].getComponent(cc.Label).string = t[1];
e.active = !0;
e.parent = this.content;
this.srcContent.scrollToBottom();
};
c([ p(cc.Node) ], e.prototype, "content", void 0);
c([ p(cc.Node) ], e.prototype, "template", void 0);
c([ p(cc.ScrollView) ], e.prototype, "srcContent", void 0);
return c([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../SicboLive.Assets": "SicboLive.Assets",
"../../SicboLive.InfoView": "SicboLive.InfoView"
} ],
"SicboLive.ChipItem": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "975bbUNE1hB7qo/xKCyxNNp", "SicboLive.ChipItem");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./SicboLive.Assets"), s = t("./SicboLive.ChipPool"), r = t("./SicboLive.Controller"), l = t("./SicboLive.InputView"), p = cc._decorator, u = p.ccclass, h = p.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spriteChip = null;
e.duration = .3;
e.betIndex = -1;
e.chipIndex = 0;
e.gate = -1;
e.playerId = 0;
e.position = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.duration = .5;
this.betIndex = -1;
this.playerId = 0;
this.position = new cc.Vec2();
};
e.prototype.setChip = function(t) {
this.chipIndex = t;
this.spriteChip.spriteFrame = a.default.instance.getChip(t);
};
e.prototype.setPosition = function(t) {
this.node.position = t;
};
e.prototype.moveToEnd = function(t, e) {
if (this.node) {
var o = .2 + e / 10;
o > 1.2 && (o = 1.2);
var i = cc.moveTo(o, t);
i.easing(cc.easeQuadraticActionInOut());
var n = this.position.lerp(t, 1), c = this.node.parent.convertToWorldSpaceAR(this.node.position), a = (this.node.convertToNodeSpaceAR(c), 
e % 2 == 0 ? n.x - n.x / 2 : -(n.x - n.x / 2)), s = e % 2 == 0 ? n.y - n.y / 2 : -(n.y - n.y / 2), r = (cc.bezierTo(o, [ cc.v2(this.node.position.x, this.node.position.y / 2), cc.v2(a, s), t ]), 
cc.callFunc(this.moveToEndFinish, null, this.node)), l = cc.fadeOut(o);
this.node.runAction(cc.sequence(i, l, r));
}
};
e.prototype.moveToEndStop = function(t, e) {
if (this.node) {
var o = .2 + e / 10;
o > 1.2 && (o = 1.2);
var i = cc.moveTo(o, t);
i.easing(cc.easeQuadraticActionInOut());
var n = this.position.lerp(t, 1), c = this.node.parent.convertToWorldSpaceAR(this.node.position), a = (this.node.convertToNodeSpaceAR(c), 
e % 2 == 0 ? n.x - n.x / 2 : -(n.x - n.x / 2)), s = e % 2 == 0 ? n.y - n.y / 2 : -(n.y - n.y / 2), r = (cc.bezierTo(o, [ cc.v2(this.node.position.x, this.node.position.y), cc.v2(a, s), t ]), 
cc.callFunc(this.moveToEndFinish, null, this.node)), l = cc.fadeIn(o);
this.node.runAction(cc.sequence(i, l, r));
}
};
e.prototype.moveTo = function(t, e) {
void 0 === e && (e = -1);
this.node.opacity = 100;
this.gate = e;
var o = cc.moveTo(this.duration, t);
o.easing(cc.easeOut(.5));
o.easing(cc.easeQuadraticActionInOut());
var i = cc.callFunc(this.moveFinish.bind(this), null, this.node);
this.node.runAction(cc.sequence(o, i));
};
e.prototype.moveFinish = function(t) {
t.opacity = 255;
l.default.instance.onCallBackMoveToChipUserBet(this.gate);
};
e.prototype.moveToEndFinish = function(t) {
try {
setTimeout(function() {
r.default && r.default.instance.node && s.default.instance.putToPool(t);
}, 500);
} catch (t) {}
};
var o;
c([ h(cc.Sprite) ], e.prototype, "spriteChip", void 0);
return o = c([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./SicboLive.Assets": "SicboLive.Assets",
"./SicboLive.ChipPool": "SicboLive.ChipPool",
"./SicboLive.Controller": "SicboLive.Controller",
"./SicboLive.InputView": "SicboLive.InputView"
} ],
"SicboLive.ChipPool": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b27a0d5xJtGpbKV1ucS14+0", "SicboLive.ChipPool");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, r = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.chip = null;
e.nodePool = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.createNodePool();
};
e.prototype.createNodePool = function() {
this.nodePool = new cc.NodePool();
for (var t = 0; t < 10; t++) this.nodePool.put(cc.instantiate(this.chip));
};
e.prototype.putToPool = function(t) {
try {
this.nodePool && this.nodePool.put(t);
} catch (t) {}
};
e.prototype.clearPool = function() {
this.nodePool && this.nodePool.clear();
};
e.prototype.createChip = function() {
return this.nodePool.size() > 0 ? this.nodePool.get() : cc.instantiate(this.chip);
};
var o;
c([ r(cc.Prefab) ], e.prototype, "chip", void 0);
return o = c([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboLive.Common": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9d827k16vpCaaBO5kOSgaz+", "SicboLive.Common");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i;
(function(t) {
var e;
t.ModelsSignalr = function() {
this.M = null;
this.A = null;
this.H = null;
this.I = null;
};
(function(t) {
t[t.UNKNOW = -1] = "UNKNOW";
t[t.WAITING = 0] = "WAITING";
t[t.SHAKING = 1] = "SHAKING";
t[t.BETTING = 2] = "BETTING";
t[t.OPEN_PLATE = 3] = "OPEN_PLATE";
t[t.SHOW_RESULT = 4] = "SHOW_RESULT";
t[t.NEW_GAME = 5] = "NEW_GAME";
})(t.GAMESTATE || (t.GAMESTATE = {}));
(function(t) {
t[t.XIU = 0] = "XIU";
t[t.TAI = 1] = "TAI";
t[t.CHAN = 2] = "CHAN";
t[t.LE = 3] = "LE";
t[t.STORM = 4] = "STORM";
t[t.S11 = 5] = "S11";
t[t.S22 = 6] = "S22";
t[t.S33 = 7] = "S33";
t[t.S44 = 8] = "S44";
t[t.S55 = 9] = "S55";
t[t.S66 = 10] = "S66";
t[t.S111 = 11] = "S111";
t[t.S222 = 12] = "S222";
t[t.S333 = 13] = "S333";
t[t.S444 = 14] = "S444";
t[t.S555 = 15] = "S555";
t[t.S666 = 16] = "S666";
t[t.SR4 = 17] = "SR4";
t[t.SR5 = 18] = "SR5";
t[t.SR6 = 19] = "SR6";
t[t.SR7 = 20] = "SR7";
t[t.SR8 = 21] = "SR8";
t[t.SR9 = 22] = "SR9";
t[t.SR10 = 23] = "SR10";
t[t.SR11 = 24] = "SR11";
t[t.SR12 = 25] = "SR12";
t[t.SR13 = 26] = "SR13";
t[t.SR14 = 27] = "SR14";
t[t.SR15 = 28] = "SR15";
t[t.SR16 = 29] = "SR16";
t[t.SR17 = 30] = "SR17";
t[t.SI12 = 31] = "SI12";
t[t.SI13 = 32] = "SI13";
t[t.SI14 = 33] = "SI14";
t[t.SI15 = 34] = "SI15";
t[t.SI16 = 35] = "SI16";
t[t.SI23 = 36] = "SI23";
t[t.SI24 = 37] = "SI24";
t[t.SI25 = 38] = "SI25";
t[t.SI26 = 39] = "SI26";
t[t.SI34 = 40] = "SI34";
t[t.SI35 = 41] = "SI35";
t[t.SI36 = 42] = "SI36";
t[t.SI45 = 43] = "SI45";
t[t.SI46 = 44] = "SI46";
t[t.SI56 = 45] = "SI56";
t[t.SA1 = 46] = "SA1";
t[t.SA2 = 47] = "SA2";
t[t.SA3 = 48] = "SA3";
t[t.SA4 = 49] = "SA4";
t[t.SA5 = 50] = "SA5";
t[t.SA6 = 51] = "SA6";
})(e = t.GATE || (t.GATE = {}));
t.SicboLiveSoiCau = function() {
this.ChipsData = "";
this.GatesData = "";
this.Result = 0;
};
t.UserInfo = function() {
this.AccountID = -1;
this.Avatar = -1;
this.Balance = -1;
this.DeviceID = -1;
this.NickName = "";
this.ServiceID = -1;
this.Vip = -1;
};
var o = function() {
function t() {
this.Elapsed = 0;
this.Phrase = 0;
this.TotalBet = 0;
}
t.getInstance = function() {
null == this.instance && (this.instance = new t());
return this.instance;
};
t.prototype.setDefaultData = function(t) {
this.Elapsed = t.Elapsed;
this.Phrase = t.Phrase;
this.Result = t.Result;
this.SessionID = t.SessionID;
this.StringResult = t.StringResult;
this.TotalBetChan = t.TotalBetChan;
this.TotalBetLe = t.TotalBetLe;
this.TotalBetS11 = t.TotalBetS11;
this.TotalBetS22 = t.TotalBetS22;
this.TotalBetS33 = t.TotalBetS33;
this.TotalBetS44 = t.TotalBetS44;
this.TotalBetS55 = t.TotalBetS55;
this.TotalBetS66 = t.TotalBetS66;
this.TotalBetS111 = t.TotalBetS111;
this.TotalBetS222 = t.TotalBetS222;
this.TotalBetS333 = t.TotalBetS333;
this.TotalBetS444 = t.TotalBetS444;
this.TotalBetS555 = t.TotalBetS555;
this.TotalBetS666 = t.TotalBetS666;
this.TotalBetSA1 = t.TotalBetSA1;
this.TotalBetSA2 = t.TotalBetSA2;
this.TotalBetSA3 = t.TotalBetSA3;
this.TotalBetSA4 = t.TotalBetSA4;
this.TotalBetSA5 = t.TotalBetSA5;
this.TotalBetSA6 = t.TotalBetSA6;
this.TotalBetSI12 = t.TotalBetSI12;
this.TotalBetSI13 = t.TotalBetSI13;
this.TotalBetSI14 = t.TotalBetSI14;
this.TotalBetSI15 = t.TotalBetSI15;
this.TotalBetSI16 = t.TotalBetSI16;
this.TotalBetSI23 = t.TotalBetSI23;
this.TotalBetSI24 = t.TotalBetSI24;
this.TotalBetSI25 = t.TotalBetSI25;
this.TotalBetSI26 = t.TotalBetSI26;
this.TotalBetSI34 = t.TotalBetSI34;
this.TotalBetSI35 = t.TotalBetSI35;
this.TotalBetSI36 = t.TotalBetSI36;
this.TotalBetSI45 = t.TotalBetSI45;
this.TotalBetSI46 = t.TotalBetSI46;
this.TotalBetSI56 = t.TotalBetSI56;
this.TotalBetSR4 = t.TotalBetSR4;
this.TotalBetSR5 = t.TotalBetSR5;
this.TotalBetSR6 = t.TotalBetSR6;
this.TotalBetSR7 = t.TotalBetSR7;
this.TotalBetSR8 = t.TotalBetSR8;
this.TotalBetSR9 = t.TotalBetSR9;
this.TotalBetSR10 = t.TotalBetSR10;
this.TotalBetSR11 = t.TotalBetSR11;
this.TotalBetSR12 = t.TotalBetSR12;
this.TotalBetSR13 = t.TotalBetSR13;
this.TotalBetSR14 = t.TotalBetSR14;
this.TotalBetSR15 = t.TotalBetSR15;
this.TotalBetSR16 = t.TotalBetSR16;
this.TotalBetSR17 = t.TotalBetSR17;
this.TotalBetStorm = t.TotalBetStorm;
this.TotalBetTai = t.TotalBetTai;
this.TotalBetXiu = t.TotalBetXiu;
};
t.prototype.setInfoUser = function(t) {
this.UserInfo = t.Account;
};
return t;
}();
t.GameData = o;
var i = function() {
function t() {}
t.getInstance = function() {
null == this.instance && (this.instance = new t());
return this.instance;
};
t.prototype.getDeviceType = function() {
return cc.sys.os === cc.sys.OS_IOS ? 3 : cc.sys.os === cc.sys.OS_ANDROID ? 2 : 1;
};
t.prototype.formatName = function(t) {
return null == t ? "" : t.length > 7 ? t.substring(0, 7) + "..." : t;
};
t.prototype.convertGateIdToName = function(t) {
var o = "";
switch (t) {
case e.XIU:
o = "XỈU";
break;

case e.TAI:
o = "TÀI";
break;

case e.CHAN:
o = "CHẴN";
break;

case e.LE:
o = "LẺ";
break;

case e.STORM:
o = "BÃO BẤT KÌ";
break;

case e.S11:
o = "CẶP SỐ 1";
break;

case e.S22:
o = "CẶP SỐ 2";
break;

case e.S33:
o = "CẶP SỐ 3";
break;

case e.S44:
o = "CẶP SỐ 4";
break;

case e.S55:
o = "CẶP SỐ 5";
break;

case e.S66:
o = "CẶP SỐ 6";
break;

case e.S111:
o = "BÃO 1";
break;

case e.S222:
o = "BÃO 2";
break;

case e.S333:
o = "BÃO 3";
break;

case e.S444:
o = "BÃO 4";
break;

case e.S555:
o = "BÃO 5";
break;

case e.S666:
o = "BÃO 6";
break;

case e.SR4:
o = "TỔNG 4";
break;

case e.SR5:
o = "TỔNG 5";
break;

case e.SR6:
o = "TỔNG 6";
break;

case e.SR7:
o = "TỔNG 7";
break;

case e.SR8:
o = "TỔNG 8";
break;

case e.SR9:
o = "TỔNG 9";
break;

case e.SR10:
o = "TỔNG 10";
break;

case e.SR11:
o = "TỔNG 11";
break;

case e.SR12:
o = "TỔNG 12";
break;

case e.SR13:
o = "TỔNG 13";
break;

case e.SR14:
o = "TỔNG 14";
break;

case e.SR15:
o = "TỔNG 15";
break;

case e.SR16:
o = "TỔNG 16";
break;

case e.SR17:
o = "TỔNG 17";
break;

case e.SI12:
o = "CẶP SỐ 1,2";
break;

case e.SI13:
o = "CẶP SỐ 1,3";
break;

case e.SI14:
o = "CẶP SỐ 1,4";
break;

case e.SI15:
o = "CẶP SỐ 1,5";
break;

case e.SI16:
o = "CẶP SỐ 1,6";
break;

case e.SI23:
o = "CẶP SỐ 2,3";
break;

case e.SI24:
o = "CẶP SỐ 2,4";
break;

case e.SI25:
o = "CẶP SỐ 2,5";
break;

case e.SI26:
o = "CẶP SỐ 2,6";
break;

case e.SI34:
o = "CẶP SỐ 3,4";
break;

case e.SI35:
o = "CẶP SỐ 3,5";
break;

case e.SI36:
o = "CẶP SỐ 3,6";
break;

case e.SI45:
o = "CẶP SỐ 4,5";
break;

case e.SI46:
o = "CẶP SỐ 4,6";
break;

case e.SI56:
o = "CẶP SỐ 5,6";
break;

case e.SA1:
o = "1 MẶT SỐ 1";
break;

case e.SA2:
o = "1 MẶT SỐ 2";
break;

case e.SA3:
o = "1 MẶT SỐ 3";
break;

case e.SA4:
o = "1 MẶT SỐ 4";
break;

case e.SA5:
o = "1 MẶT SỐ 5";
break;

case e.SA6:
o = "1 MẶT SỐ 6";
break;

default:
o = t.toString();
}
return o;
};
return t;
}();
t.Utils = i;
})(i || (i = {}));
o.default = i;
cc._RF.pop();
}, {} ],
"SicboLive.Config": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c30459SSspCaYZFtpua1qLF", "SicboLive.Config");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = function() {
function t() {}
t.App = {
USE_WSS: !0,
HOST_SicboLive: {
host: "Sicbolive-789." + lngui.ConfigManager.instance.ConfigInfo.Api
},
Hub: "Sicbolivehub",
ACCESS_TOKEN: "",
GATE: lngui.ConfigManager.instance.ConfigInfo.Gate,
VIP_PLAYER: 1
};
t.CPName = "";
return t;
}();
o.default = i;
cc._RF.pop();
}, {} ],
"SicboLive.Controller": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c08e5cizZZFlaj7ufFYQs16", "SicboLive.Controller");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../framework/common/Dialog"), s = t("./network/SicboLive.NetWorkClient"), r = t("./popup/chat/SicboLive.ChatController"), l = t("./SicboLive.Common"), p = t("./SicboLive.Config"), u = t("./SicboLive.InfoView"), h = t("./SicboLive.InputView"), d = t("./SicboLive.ResultView"), f = cc._decorator, v = f.ccclass, S = f.property, y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spriteSound = null;
e.sfSounds = [];
e.spriteBack = null;
e.nodeChat = null;
e.nodeLive = null;
e.MsgSystem = null;
e.NodeTooltip = null;
e.lbMsg = null;
e.timer = null;
e.worker = null;
e.isOpenChat = !0;
e.isShowPopup = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
var t = this;
o.instance = this;
this.NodeTooltip.active = !1;
p.default.App.ACCESS_TOKEN = lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.UIWaitingLayout.showWaiting();
cc.game.setFrameRate(60);
cc.game.on(cc.game.EVENT_HIDE, function() {
t.utilWorkerStart();
});
cc.game.on(cc.game.EVENT_SHOW, function() {
t.utilWorkerEnd();
});
};
e.prototype.getAccessToken = function() {
p.default.App.ACCESS_TOKEN = lngui.UserManager.instance.mainUserInfo.GameToken;
return p.default.App.ACCESS_TOKEN;
};
e.prototype.utilWorkerStart = function() {
if (null == this.worker) try {
this.worker = new Worker(URL.createObjectURL(new Blob([ "var onmessage=function(g){var a,b,c,d=Date.now(),e=g.data[0],f=function(){clearTimeout(a);b=Date.now();c=b-d;d=b;postMessage(c);a=setTimeout(f,e)};a=setTimeout(f,e)};" ], {
type: "text/javascript"
})));
this.worker.onmessage = function() {
cc.director.mainLoop();
};
this.worker.postMessage([ 30 ]);
} catch (t) {}
};
e.prototype.utilWorkerEnd = function() {
if (null != this.worker) try {
this.worker.terminate();
this.worker = null;
} catch (t) {}
};
e.prototype.reConnect = function() {
console.log("reConnect!");
s.default.getInstance().reConnect();
};
e.prototype.onEnable = function() {
var t = this;
null != p.default.App.ACCESS_TOKEN ? s.default.getInstance().checkConnect(function(e) {
console.log("Check connection webserver: " + e);
if (e) {
s.default.getInstance().addOnClose(function() {
console.log("SicboLive addOnClose");
s.default.getInstance().isReconnect ? setTimeout(function() {
t.node && (s.default.getInstance().isReconnect = !1);
}, 2e3) : t.node.active && t.actBackGame();
}, t, null);
s.default.getInstance().addListener(function(e, o) {
switch (e) {
case "sessionInfo":
u.default.instance.updateInfo(o[0], o[0].Phrase, null);
h.default.instance.updateInput(o[0].Phrase);
break;

case "gameHistory":
u.default.instance.setListSoiCau(o[0]);
break;

case "startActionTimer":
u.default.instance.updateInfo(o[0], o[2], o[1]);
d.default.instance.updateResult(null, o[0].Result, o[0].ChipsData, o[2], null);
h.default.instance.updateInput(o[2]);
o[0].Phrase == l.default.GAMESTATE.SHOW_RESULT && d.default.instance.playFxResult(o[0].Result, "", "");
break;

case "playerLeave":
break;

case "joinGame":
u.default.instance.updateInfoCurrPlayer(o[0].Account);
break;

case "betSession":
h.default.instance.showLastInput(o[0]);
break;

case "playerBet":
h.default.instance.playerBet(o);
break;

case "betSuccess":
h.default.instance.ShowMyBets(o);
break;

case "winResultVip":
try {
setTimeout(function() {
t.node && u.default.instance.winResultVip(o[0]);
}, 2500);
} catch (t) {
console.error(t);
}
break;

case "winResult":
try {
setTimeout(function() {
t.node && u.default.instance.winResult(o[0]);
}, 2500);
} catch (t) {
console.error(t);
}
break;

case "totalWinMoney":
parseInt(o[0]) > 0 && setTimeout(function() {
t.node && u.default.instance.totalUserWin(o[0]);
}, 2500);
break;

case "playerMessage":
break;

case "openPlateNow":
d.default.instance.updateResult(null, o[0], o[1], l.default.GAMESTATE.OPEN_PLATE, !0);
h.default.instance.updateInput(l.default.GAMESTATE.OPEN_PLATE);
break;

case "receiveMessage":
r.default.instance.addChatContent(o);
u.default.instance.playerShowBubbleChat(o);
break;

case "summaryPlayer":
u.default.instance.summaryPlayer(o[0]);
break;

case "vipPlayers":
var i = o[0];
i.length > 0 && u.default.instance.vipPlayer(i);
break;

case "updateRoomTime":
t.timer = o[0];
u.default.instance.updateTimer(t.timer);
break;

case "message":
t.showMsg(o[0]);
}
}, t, function() {});
} else t.actBackGame();
}) : this.actBackGame();
};
e.prototype.showChat = function() {
if (0 == this.isOpenChat) {
this.isOpenChat = !0;
this.nodeChat.active = !0;
} else {
this.isOpenChat = !1;
this.nodeChat.active = !1;
}
};
e.prototype.playerLeave = function(t) {
var e = this;
t[0] === u.default.instance.getAccountIdIsMe() && this.popupConfirm.show5(t[1], function() {
e.actBackGame();
});
};
e.prototype.showLive = function() {
if (this.isShowPopup) {
this.nodeLive.active = !0;
this.isShowPopup = !1;
} else {
this.nodeLive.active = !1;
this.isShowPopup = !0;
}
};
e.prototype.showMsg = function(t) {
this.lbMsg.string = t;
this.MsgSystem.showMsgSystem();
};
e.prototype.actBackGame = function() {
var t = new l.default.ModelsSignalr();
t.M = "ExitLobby";
t.A = [];
s.default.getInstance().send(t);
s.default.getInstance().close();
l.default.GameData.getInstance().setDefaultData({});
lngui.UIScreenManager.instance.popToRootScreen2();
};
e.prototype.onDestroy = function() {
p.default.App.ACCESS_TOKEN = null;
};
var o;
e.instance = null;
c([ S(cc.Sprite) ], e.prototype, "spriteSound", void 0);
c([ S([ cc.SpriteFrame ]) ], e.prototype, "sfSounds", void 0);
c([ S(cc.Sprite) ], e.prototype, "spriteBack", void 0);
c([ S(cc.Node) ], e.prototype, "nodeChat", void 0);
c([ S(cc.Node) ], e.prototype, "nodeLive", void 0);
c([ S(a.default) ], e.prototype, "MsgSystem", void 0);
c([ S(cc.Node) ], e.prototype, "NodeTooltip", void 0);
c([ S(cc.Label) ], e.prototype, "lbMsg", void 0);
return o = c([ v ], e);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"../../framework/common/Dialog": void 0,
"./SicboLive.Common": "SicboLive.Common",
"./SicboLive.Config": "SicboLive.Config",
"./SicboLive.InfoView": "SicboLive.InfoView",
"./SicboLive.InputView": "SicboLive.InputView",
"./SicboLive.ResultView": "SicboLive.ResultView",
"./network/SicboLive.NetWorkClient": "SicboLive.NetWorkClient",
"./popup/chat/SicboLive.ChatController": "SicboLive.ChatController"
} ],
"SicboLive.GrahpDiceSumView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "51ad6OsnQdJQ4DMZi19c5OY", "SicboLive.GrahpDiceSumView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, r = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeGraphics = null;
e.nodeParent = null;
e.nodeTaiTemp = null;
e.nodeXiuTemp = null;
e.nodeBaoTemp = null;
e.toggleDiceSum = null;
e.lbSessionID = null;
e.lbResult = null;
e.sfTaiXiu = [];
e.rootPosX = 0;
e.rootPosY = 0;
e.spaceX = 0;
e.spaceY = 0;
e.maxItemPerCol = 0;
e.minSum = 0;
e.maxSum = 0;
e.spacePoint = 0;
e.drawing = null;
e.drawPoints = null;
e.cacheList = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.rootPosX = 0;
this.rootPosY = -88;
this.spaceX = 47;
this.spaceY = 35;
this.maxItemPerCol = 5;
this.minSum = 3;
this.maxSum = 18;
this.spacePoint = this.spaceY * this.maxItemPerCol / (this.maxSum - this.minSum);
this.drawing = this.nodeGraphics.getComponent(cc.Graphics);
this.drawing.lineWidth = 2;
this.drawing.strokeColor = cc.Color.YELLOW;
};
e.prototype.onDisable = function() {
this.resetDraw();
};
e.prototype.draw = function(t) {
var e, o = t[0], i = o.ChipsData.split(",");
e = i[0] == i[1] && i[0] == i[2] ? "BÃO" : o.Result < 11 ? "XỈU" : "TÀI";
this.lbSessionID.string = "Phiên gần nhất: #" + o.SessionID;
this.lbResult.string = e + " " + o.Result + " (" + i[0] + "-" + i[1] + "-" + i[2] + ")";
this.cacheList = t;
this.drawPoints = [];
var n = this, c = 0;
t.forEach(function(t) {
n.createNode(t, c);
c++;
});
this.strokeLine();
};
e.prototype.createNode = function(t, e) {
var o = this.rootPosX - e * this.spaceX, i = this.rootPosY + (t.Result - this.minSum) * this.spacePoint, n = t.ChipsData.split(",");
0 === e && this.drawing.moveTo(o, i);
var c = null;
n[0] == n[1] && n[0] == n[2] ? (c = cc.instantiate(this.nodeBaoTemp)).children[0].color = cc.Color.RED : t.Result < 11 ? (c = cc.instantiate(this.nodeXiuTemp)).children[0].color = cc.Color.BLACK : c = cc.instantiate(this.nodeTaiTemp);
c.parent = this.nodeParent;
c.position = cc.v2(o, i);
this.drawPoints.push(cc.v2(o, i));
c.children[0].getComponent(cc.Sprite).spriteFrame = this.sfTaiXiu[t.Result - 3];
};
e.prototype.strokeLine = function() {
var t = this;
this.drawPoints.forEach(function(e) {
t.drawing.lineTo(e.x, e.y);
t.drawing.stroke();
t.drawing.moveTo(e.x, e.y);
});
};
e.prototype.resetDraw = function() {
for (var t = this.nodeParent.children, e = t.length - 1; e >= 0; e--) this.nodeParent.removeChild(t[e]);
this.drawing.clear();
};
e.prototype.toggleDrawDiceSumClicked = function() {
this.toggleDiceSum.isChecked ? this.draw(this.cacheList) : this.resetDraw();
};
var o;
e.instance = null;
c([ r(cc.Node) ], e.prototype, "nodeGraphics", void 0);
c([ r(cc.Node) ], e.prototype, "nodeParent", void 0);
c([ r(cc.Node) ], e.prototype, "nodeTaiTemp", void 0);
c([ r(cc.Node) ], e.prototype, "nodeXiuTemp", void 0);
c([ r(cc.Node) ], e.prototype, "nodeBaoTemp", void 0);
c([ r(cc.Toggle) ], e.prototype, "toggleDiceSum", void 0);
c([ r(cc.Label) ], e.prototype, "lbSessionID", void 0);
c([ r(cc.Label) ], e.prototype, "lbResult", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfTaiXiu", void 0);
return o = c([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboLive.GraphCatCauView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0be58bU12JLppcpOdPYcCPe", "SicboLive.GraphCatCauView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../SicboLive.InfoView"), s = cc._decorator, r = s.ccclass, l = s.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeParent = null;
e.nodeTaiTemp = null;
e.nodeXiuTemp = null;
e.nodeBaoTemp = null;
e.sfTaiXiu = [];
e.rootPosX = -25;
e.rootPosY = -65;
e.spaceX = 47;
e.spaceY = 33;
e.maxItemPerCol = 5;
e.maxPerCol = 20;
e.countTai = 0;
e.countXiu = 0;
e.countBao = 0;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.rootPosX = -22;
this.rootPosY = -70;
this.spaceX = 46.5;
this.spaceY = 35;
this.maxItemPerCol = 5;
this.maxPerCol = 20;
this.countTai = 0;
this.countXiu = 0;
this.countBao = 0;
};
e.prototype.onEnable = function() {};
e.prototype.onDisable = function() {
this.resetDraw();
};
e.prototype.convertToMatrix = function() {
var t = this, e = this, o = a.default.instance.getListSoiCau()[0].ChipsData.toString().split(","), i = -1;
i = o[0] == o[1] && o[0] == o[2] ? 2 : a.default.instance.getListSoiCau()[0].Result < 11 ? 0 : 1;
var n = [], c = [];
a.default.instance.getListSoiCau().forEach(function(o) {
if (n.length <= t.maxPerCol - 1) {
var a = o.ChipsData.toString().split(","), s = -1;
if (a[0] == a[1] && a[0] == a[2]) {
s = 2;
t.countBao++;
} else 0 == (s = o.Result < 11 ? 0 : 1) ? t.countXiu++ : t.countTai++;
if (c.length == e.maxItemPerCol) {
n.push(c);
(c = []).push(o);
i = s;
} else if (s == i) c.push(o); else {
n.push(c);
i = s;
(c = []).push(o);
}
}
});
n.push(c);
return n;
};
e.prototype.draw = function() {
this.maxItemPerCol = 5;
this.maxPerCol = 20;
this.countTai = 0;
this.countXiu = 0;
this.countBao = 0;
for (var t = this.convertToMatrix(), e = 0; e < t.length; e++) this.drawCol(t[e], e);
};
e.prototype.drawCol = function(t, e) {
for (var o = this.rootPosX - e * this.spaceX, i = this.rootPosY + (this.maxItemPerCol - t.length) * this.spaceY, n = 0; n < t.length; n++) this.createNode(t[n], cc.v2(o, i + this.spaceY * n));
};
e.prototype.createNode = function(t, e) {
var o = t.ChipsData.split(","), i = null;
o[0] == o[1] && o[0] == o[2] ? (i = cc.instantiate(this.nodeBaoTemp)).children[0].color = cc.Color.RED : t.Result < 11 ? (i = cc.instantiate(this.nodeXiuTemp)).children[0].color = cc.Color.BLACK : i = cc.instantiate(this.nodeTaiTemp);
i.parent = this.nodeParent;
i.position = e;
i.children[0].getComponent(cc.Sprite).spriteFrame = this.sfTaiXiu[t.Result - 3];
i.setContentSize(cc.size(22, 22));
};
e.prototype.resetDraw = function() {
for (var t = this.nodeParent.children, e = t.length - 1; e >= 0; e--) this.nodeParent.removeChild(t[e]);
};
var o;
e.instance = null;
c([ l(cc.Node) ], e.prototype, "nodeParent", void 0);
c([ l(cc.Node) ], e.prototype, "nodeTaiTemp", void 0);
c([ l(cc.Node) ], e.prototype, "nodeXiuTemp", void 0);
c([ l(cc.Node) ], e.prototype, "nodeBaoTemp", void 0);
c([ l([ cc.SpriteFrame ]) ], e.prototype, "sfTaiXiu", void 0);
return o = c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../SicboLive.InfoView": "SicboLive.InfoView"
} ],
"SicboLive.GraphDice3View": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a9449VZGP5IG43hp2ztUjaf", "SicboLive.GraphDice3View");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, r = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeGraphics1 = null;
e.nodeGraphics2 = null;
e.nodeGraphics3 = null;
e.nodeDice1Temp = null;
e.nodeDice2Temp = null;
e.nodeDice3Temp = null;
e.toggleDice1 = null;
e.toggleDice2 = null;
e.toggleDice3 = null;
e.colorDice1 = null;
e.colorDice2 = null;
e.colorDice3 = null;
e.spriteDice = [];
e.rootPosX = 0;
e.rootPosY = 0;
e.spaceX = 0;
e.spaceY = 0;
e.maxItemPerCol = 0;
e.minSum = 0;
e.maxSum = 0;
e.circleRadian = 0;
e.spacePoint = 0;
e.drawing1 = null;
e.drawing2 = null;
e.drawing3 = null;
e.cacheList = null;
e.drawPoints = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.rootPosX = 0;
this.rootPosY = -90;
this.spaceX = 47;
this.spaceY = 37;
this.maxItemPerCol = 5;
this.minSum = 1;
this.maxSum = 6;
this.circleRadian = 8;
this.spacePoint = this.spaceY * this.maxItemPerCol / (this.maxSum - this.minSum);
this.drawing1 = this.nodeGraphics1.getComponent(cc.Graphics);
this.drawing1.lineWidth = 2;
this.drawing1.strokeColor = this.colorDice1;
this.drawing1.fillColor = this.colorDice1;
this.drawing2 = this.nodeGraphics2.getComponent(cc.Graphics);
this.drawing2.lineWidth = 2;
this.drawing2.strokeColor = this.colorDice2;
this.drawing2.fillColor = this.colorDice2;
this.drawing3 = this.nodeGraphics3.getComponent(cc.Graphics);
this.drawing3.lineWidth = 2;
this.drawing3.strokeColor = this.colorDice3;
this.drawing3.fillColor = this.colorDice3;
};
e.prototype.onDisable = function() {
this.resetDraw();
};
e.prototype.draw = function(t) {
this.cacheList = t;
this.drawDice1(t);
this.drawDice2(t);
this.drawDice3(t);
};
e.prototype.drawDice1 = function(t) {
var e = this;
e.drawPoints = [];
var o = 0;
t.forEach(function(t) {
var i = t.ChipsData.split(",");
e.createNode(e.drawing1, i[0], o);
o++;
});
this.strokeLine(e.drawing1);
};
e.prototype.drawDice2 = function(t) {
var e = this;
e.drawPoints = [];
var o = 0;
t.forEach(function(t) {
var i = t.ChipsData.split(",");
e.createNode(e.drawing2, i[1], o);
o++;
});
this.strokeLine(e.drawing2);
};
e.prototype.drawDice3 = function(t) {
var e = this;
e.drawPoints = [];
var o = 0;
t.forEach(function(t) {
var i = t.ChipsData.split(",");
e.createNode(e.drawing3, i[2], o);
o++;
});
this.strokeLine(e.drawing3);
};
e.prototype.createNode = function(t, e, o) {
var i = this.rootPosX - o * this.spaceX, n = this.rootPosY + (e - this.minSum) * this.spacePoint;
0 === o && t.moveTo(i, n);
this.drawPoints.push(cc.v2(i, n));
};
e.prototype.strokeLine = function(t) {
var e = this;
this.drawPoints.forEach(function(o) {
t.lineTo(o.x, o.y);
t.stroke();
t.moveTo(o.x, o.y);
t.circle(o.x, o.y, e.circleRadian);
t.fill();
});
};
e.prototype.resetDraw = function() {
this.drawing1.clear();
this.drawing2.clear();
this.drawing3.clear();
};
e.prototype.toggleDrawDice1Clicked = function() {
this.toggleDice1.isChecked ? this.drawDice1(this.cacheList) : this.drawing1.clear();
};
e.prototype.toggleDrawDice2Clicked = function() {
this.toggleDice2.isChecked ? this.drawDice2(this.cacheList) : this.drawing2.clear();
};
e.prototype.toggleDrawDice3Clicked = function() {
this.toggleDice3.isChecked ? this.drawDice3(this.cacheList) : this.drawing3.clear();
};
var o;
e.instance = null;
c([ r(cc.Node) ], e.prototype, "nodeGraphics1", void 0);
c([ r(cc.Node) ], e.prototype, "nodeGraphics2", void 0);
c([ r(cc.Node) ], e.prototype, "nodeGraphics3", void 0);
c([ r(cc.Node) ], e.prototype, "nodeDice1Temp", void 0);
c([ r(cc.Node) ], e.prototype, "nodeDice2Temp", void 0);
c([ r(cc.Node) ], e.prototype, "nodeDice3Temp", void 0);
c([ r(cc.Toggle) ], e.prototype, "toggleDice1", void 0);
c([ r(cc.Toggle) ], e.prototype, "toggleDice2", void 0);
c([ r(cc.Toggle) ], e.prototype, "toggleDice3", void 0);
c([ r(cc.Color) ], e.prototype, "colorDice1", void 0);
c([ r(cc.Color) ], e.prototype, "colorDice2", void 0);
c([ r(cc.Color) ], e.prototype, "colorDice3", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "spriteDice", void 0);
return o = c([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboLive.GraphView100": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c31102DW/NKWpXq4CIv4ixP", "SicboLive.GraphView100");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../SicboLive.InfoView"), s = cc._decorator, r = s.ccclass, l = s.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeParent = null;
e.listNodeTemp = [];
e.nodeTaiTemp = null;
e.nodeXiuTemp = null;
e.nodeBaoTemp = null;
e.countTai = 0;
e.countXiu = 0;
e.countBao = 0;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.onEnable = function() {};
e.prototype.onDestroy = function() {};
e.prototype.onDisable = function() {};
e.prototype.draw = function() {
var t = this;
this.countBao = 0;
this.countTai = 0;
this.countXiu = 0;
a.default.instance.getListSoiCau().forEach(function(e, o) {
var i = e.Result, n = e.ChipsData.split(",");
if (n[0] == n[1] && n[0] == n[2]) {
t.countBao++;
if (t.listNodeTemp[o]) {
t.listNodeTemp[o].active = !0;
t.listNodeTemp[o].getComponent(cc.Sprite).spriteFrame = t.nodeBaoTemp.getComponent(cc.Sprite).spriteFrame;
}
} else if (i < 11) {
t.countXiu++;
if (t.listNodeTemp[o]) {
t.listNodeTemp[o].active = !0;
t.listNodeTemp[o].getComponent(cc.Sprite).spriteFrame = t.nodeXiuTemp.getComponent(cc.Sprite).spriteFrame;
}
} else {
t.countTai++;
if (t.listNodeTemp[o]) {
t.listNodeTemp[o].active = !0;
t.listNodeTemp[o].getComponent(cc.Sprite).spriteFrame = t.nodeTaiTemp.getComponent(cc.Sprite).spriteFrame;
}
}
});
};
e.prototype.createNode = function(t) {
cc.instantiate(t).parent = this.nodeParent;
};
e.prototype.resetDraw = function() {
this.countBao = 0;
this.countTai = 0;
this.countXiu = 0;
for (var t = this.nodeParent.children, e = t.length - 1; e >= 0; e--) this.nodeParent.removeChild(t[e]);
};
var o;
e.instance = null;
c([ l(cc.Node) ], e.prototype, "nodeParent", void 0);
c([ l([ cc.Node ]) ], e.prototype, "listNodeTemp", void 0);
c([ l(cc.Node) ], e.prototype, "nodeTaiTemp", void 0);
c([ l(cc.Node) ], e.prototype, "nodeXiuTemp", void 0);
c([ l(cc.Node) ], e.prototype, "nodeBaoTemp", void 0);
return o = c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../SicboLive.InfoView": "SicboLive.InfoView"
} ],
"SicboLive.GraphView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fb426dAPQtB0ZAWknway9+/", "SicboLive.GraphView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../SicboLive.InfoView"), s = t("./graphView/SicboLive.GrahpDiceSumView"), r = t("./graphView/SicboLive.GraphCatCauView"), l = t("./graphView/SicboLive.GraphDice3View"), p = t("./graphView/SicboLive.GraphView100"), u = t("../SicboLive.Controller"), h = cc._decorator, d = h.ccclass, f = h.property, v = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.SicboLiveGraph100View = null;
e.SicboLiveGraphCatCuaView = null;
e.SicboLiveGraphDiceSumView = null;
e.SicboLiveGraphDice3View = null;
e.pageView = null;
e.btnNext = null;
e.btnBack = null;
e.lblTotalTai = null;
e.lblTotalXiu = null;
e.lblTotalBao = null;
e.lblTotalTai1 = null;
e.lblTotalXiu1 = null;
e.lblTotalBao1 = null;
e.timeSwitchPage = .3;
e.totalPages = 2;
e.currentPageIndex = 1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.timeSwitchPage = .3;
this.totalPages = 2;
this.checkStatusButton();
this.onGetSoiCau();
};
e.prototype.onGetSoiCau = function() {
this.SicboLiveGraph100View.draw();
this.SicboLiveGraphCatCuaView.draw();
this.SicboLiveGraphDiceSumView.draw(a.default.instance.getListSoiCau());
this.SicboLiveGraphDice3View.draw(a.default.instance.getListSoiCau());
this.updateCountNode();
this.pageView.scrollToPage(0, this.timeSwitchPage);
this.checkStatusButton();
};
e.prototype.updateCountNode = function() {
this.lblTotalTai.string = this.SicboLiveGraph100View.countTai.toString();
this.lblTotalXiu.string = this.SicboLiveGraph100View.countXiu.toString();
this.lblTotalBao.string = this.SicboLiveGraph100View.countBao.toString();
this.lblTotalTai1.string = this.SicboLiveGraphCatCuaView.countTai.toString();
this.lblTotalXiu1.string = this.SicboLiveGraphCatCuaView.countXiu.toString();
this.lblTotalBao1.string = this.SicboLiveGraphCatCuaView.countBao.toString();
};
e.prototype.nextPageClicked = function() {
this.currentPageIndex++;
this.pageView.scrollToPage(this.currentPageIndex, this.timeSwitchPage);
this.checkStatusButton();
};
e.prototype.backPageClicked = function() {
this.currentPageIndex--;
this.pageView.scrollToPage(this.currentPageIndex, this.timeSwitchPage);
this.checkStatusButton();
};
e.prototype.checkStatusButton = function() {
this.currentPageIndex = this.pageView.getCurrentPageIndex();
this.btnNext.interactable = this.currentPageIndex < this.totalPages - 1;
this.btnBack.interactable = this.currentPageIndex > 0;
};
e.prototype.close = function() {
u.default.instance.showLive();
this.hide();
};
var o;
e.instance = null;
c([ f(p.default) ], e.prototype, "SicboLiveGraph100View", void 0);
c([ f(r.default) ], e.prototype, "SicboLiveGraphCatCuaView", void 0);
c([ f(s.default) ], e.prototype, "SicboLiveGraphDiceSumView", void 0);
c([ f(l.default) ], e.prototype, "SicboLiveGraphDice3View", void 0);
c([ f(cc.PageView) ], e.prototype, "pageView", void 0);
c([ f(cc.Button) ], e.prototype, "btnNext", void 0);
c([ f(cc.Button) ], e.prototype, "btnBack", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalTai", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalXiu", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalBao", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalTai1", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalXiu1", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalBao1", void 0);
return o = c([ d ], e);
}(lngui.UIPopup);
o.default = v;
cc._RF.pop();
}, {
"../SicboLive.Controller": "SicboLive.Controller",
"../SicboLive.InfoView": "SicboLive.InfoView",
"./graphView/SicboLive.GrahpDiceSumView": "SicboLive.GrahpDiceSumView",
"./graphView/SicboLive.GraphCatCauView": "SicboLive.GraphCatCauView",
"./graphView/SicboLive.GraphDice3View": "SicboLive.GraphDice3View",
"./graphView/SicboLive.GraphView100": "SicboLive.GraphView100"
} ],
"SicboLive.Guide": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "14f08SZb7FHHZL6a5iuR77z", "SicboLive.Guide");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../framework/common/Utils"), s = t("../network/SicboLive.Http"), r = t("../SicboLive.Assets"), l = t("../SicboLive.Common"), p = t("../SicboLive.Config"), u = t("../SicboLive.Controller"), h = cc._decorator, d = h.ccclass, f = h.property, v = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.lblPage = null;
e.btnNext = null;
e.btnBack = null;
e.page = 1;
e.maxPage = 1;
return e;
}
e.prototype.onLoad = function() {
this.page = 1;
this.lblPage.node.active = !0;
this.btnBack.active = !0;
this.btnNext.active = !0;
this.onLoadDataHistory();
};
e.prototype.actNextPage = function() {
this.page++;
this.page >= this.maxPage && (this.page = this.maxPage);
this.onLoadDataHistory();
};
e.prototype.actBackPage = function() {
this.page--;
this.page <= 1 && (this.page = 1);
this.onLoadDataHistory();
};
e.prototype.onChangeButtonPage = function() {
this.btnBack.color = cc.Color.WHITE;
this.btnNext.color = cc.Color.WHITE;
this.btnBack.getComponent(cc.Button).interactable = !0;
this.btnNext.getComponent(cc.Button).interactable = !0;
if (this.page <= 1) {
this.btnBack.color = cc.Color.GRAY;
this.btnBack.getComponent(cc.Button).interactable = !1;
}
if (this.page >= this.maxPage) {
this.btnNext.color = cc.Color.GRAY;
this.btnNext.getComponent(cc.Button).interactable = !1;
}
this.lblPage.string = this.page + "/" + this.maxPage;
};
e.prototype.onLoadDataHistory = function() {
var t = this;
lngui.UIWaitingLayout.showWaiting();
var e = this;
this.content.removeAllChildren();
this.template.active = !1;
s.default.sendRequest("GET", p.default.App.HOST_SicboLive.host, "api/Sicbo/GetHistory?page=" + this.page, null, function(o, i) {
lngui.UIWaitingLayout.hideWaiting();
if (o) {
e.onClose();
u.default.instance.showMsg("Hệ thống đang bận, vui lòng tải lại sau!");
} else {
t.maxPage = i.TotalRecord;
t.maxPage = Math.round(t.maxPage / 10);
var n = i.ListData;
if (n.length <= 0) {
u.default.instance.showMsg("Không có lịch sử cược!");
t.lblPage.node.active = !1;
t.btnBack.active = !1;
t.btnNext.active = !1;
} else {
for (var c = 0; c < n.length; c++) {
var s = cc.instantiate(t.template), p = n[c].ChipsData.split(","), h = n[c].GateID;
c % 2 == 0 && (s.children[0].active = !1);
s.children[1].getComponent(cc.Label).string = "#" + n[c].SessionID;
s.children[2].getComponent(cc.Label).string = n[c].CreateTimeFm;
s.children[3].getComponent(cc.Label).string = l.default.Utils.getInstance().convertGateIdToName(h);
s.children[4].getComponent(cc.Label).string = a.default.formatNumber(n[c].Bet);
s.children[5].getComponent(cc.Label).string = a.default.formatNumber(n[c].Award);
s.children[6].children[0].getComponent(cc.Sprite).spriteFrame = r.default.instance.getSprDicesV2(parseInt(p[0]));
s.children[6].children[1].getComponent(cc.Sprite).spriteFrame = r.default.instance.getSprDicesV2(parseInt(p[1]));
s.children[6].children[2].getComponent(cc.Sprite).spriteFrame = r.default.instance.getSprDicesV2(parseInt(p[2]));
s.active = !0;
s.parent = e.content;
}
t.onChangeButtonPage();
}
}
});
};
e.prototype.onClose = function() {
u.default.instance.showLive();
this.hide();
};
c([ f(cc.Node) ], e.prototype, "content", void 0);
c([ f(cc.Node) ], e.prototype, "template", void 0);
c([ f(cc.Label) ], e.prototype, "lblPage", void 0);
c([ f(cc.Node) ], e.prototype, "btnNext", void 0);
c([ f(cc.Node) ], e.prototype, "btnBack", void 0);
return c([ d ], e);
}(lngui.UIPopup);
o.default = v;
cc._RF.pop();
}, {
"../../../framework/common/Utils": void 0,
"../SicboLive.Assets": "SicboLive.Assets",
"../SicboLive.Common": "SicboLive.Common",
"../SicboLive.Config": "SicboLive.Config",
"../SicboLive.Controller": "SicboLive.Controller",
"../network/SicboLive.Http": "SicboLive.Http"
} ],
"SicboLive.History": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "968f6O2KGJG5JunO+7smDLi", "SicboLive.History");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../framework/common/Utils"), s = t("../network/SicboLive.Http"), r = t("../SicboLive.Assets"), l = t("../SicboLive.Common"), p = t("../SicboLive.Config"), u = t("../SicboLive.Controller"), h = cc._decorator, d = h.ccclass, f = h.property, v = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.lblPage = null;
e.btnNext = null;
e.btnBack = null;
e.page = 1;
e.maxPage = 1;
return e;
}
e.prototype.onLoad = function() {
this.page = 1;
this.lblPage.node.active = !0;
this.btnBack.active = !0;
this.btnNext.active = !0;
this.onLoadDataHistory();
};
e.prototype.actNextPage = function() {
this.page++;
this.page >= this.maxPage && (this.page = this.maxPage);
this.onLoadDataHistory();
};
e.prototype.actBackPage = function() {
this.page--;
this.page <= 1 && (this.page = 1);
this.onLoadDataHistory();
};
e.prototype.onChangeButtonPage = function() {
this.btnBack.color = cc.Color.WHITE;
this.btnNext.color = cc.Color.WHITE;
this.btnBack.getComponent(cc.Button).interactable = !0;
this.btnNext.getComponent(cc.Button).interactable = !0;
if (this.page <= 1) {
this.btnBack.color = cc.Color.GRAY;
this.btnBack.getComponent(cc.Button).interactable = !1;
}
if (this.page >= this.maxPage) {
this.btnNext.color = cc.Color.GRAY;
this.btnNext.getComponent(cc.Button).interactable = !1;
}
this.lblPage.string = this.page + "/" + this.maxPage;
};
e.prototype.onLoadDataHistory = function() {
var t = this;
lngui.UIWaitingLayout.showWaiting();
var e = this;
this.content.removeAllChildren();
this.template.active = !1;
s.default.sendRequest("GET", p.default.App.HOST_SicboLive.host, "api/Sicbo/GetHistory?page=" + this.page, null, function(o, i) {
lngui.UIWaitingLayout.hideWaiting();
if (o) {
e.onClose();
u.default.instance.showMsg("Hệ thống đang bận, vui lòng tải lại sau!");
} else {
t.maxPage = i.TotalRecord;
t.maxPage = Math.round(t.maxPage / 10);
var n = i.ListData;
if (n.length <= 0) {
u.default.instance.showMsg("Không có lịch sử cược!");
t.lblPage.node.active = !1;
t.btnBack.active = !1;
t.btnNext.active = !1;
} else {
for (var c = 0; c < n.length; c++) {
var s = cc.instantiate(t.template), p = n[c].ChipsData.split(","), h = n[c].GateID;
c % 2 == 0 && (s.children[0].active = !1);
s.children[1].getComponent(cc.Label).string = "#" + n[c].SessionID;
s.children[2].getComponent(cc.Label).string = n[c].CreateTimeFm;
s.children[3].getComponent(cc.Label).string = l.default.Utils.getInstance().convertGateIdToName(h);
s.children[4].getComponent(cc.Label).string = a.default.formatNumber(n[c].Bet);
s.children[5].getComponent(cc.Label).string = a.default.formatNumber(n[c].Award);
s.children[6].children[0].getComponent(cc.Sprite).spriteFrame = r.default.instance.getSprDicesV2(parseInt(p[0]));
s.children[6].children[1].getComponent(cc.Sprite).spriteFrame = r.default.instance.getSprDicesV2(parseInt(p[1]));
s.children[6].children[2].getComponent(cc.Sprite).spriteFrame = r.default.instance.getSprDicesV2(parseInt(p[2]));
s.active = !0;
s.parent = e.content;
}
t.onChangeButtonPage();
}
}
});
};
e.prototype.onClose = function() {
u.default.instance.showLive();
this.hide();
};
c([ f(cc.Node) ], e.prototype, "content", void 0);
c([ f(cc.Node) ], e.prototype, "template", void 0);
c([ f(cc.Label) ], e.prototype, "lblPage", void 0);
c([ f(cc.Node) ], e.prototype, "btnNext", void 0);
c([ f(cc.Node) ], e.prototype, "btnBack", void 0);
return c([ d ], e);
}(lngui.UIPopup);
o.default = v;
cc._RF.pop();
}, {
"../../../framework/common/Utils": void 0,
"../SicboLive.Assets": "SicboLive.Assets",
"../SicboLive.Common": "SicboLive.Common",
"../SicboLive.Config": "SicboLive.Config",
"../SicboLive.Controller": "SicboLive.Controller",
"../network/SicboLive.Http": "SicboLive.Http"
} ],
"SicboLive.Http": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a9277YKiCdMU41VFKDd+dua", "SicboLive.Http");
var i = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../SicboLive.Config"), c = cc._decorator, a = c.ccclass, s = (c.property, 
function() {
function t() {}
t.sendRequest = function(t, e, o, i, c) {
var a = n.default.App.USE_WSS ? "https://" : "http://", s = cc.loader.getXMLHttpRequest();
a = a + e + "/" + o;
n.default.App.ACCESS_TOKEN && (a.includes("?") ? a += "&token=" + encodeURIComponent(n.default.App.ACCESS_TOKEN) + "&gate=" + n.default.App.ACCESS_TOKEN : a += "?access_token=" + encodeURIComponent(n.default.App.ACCESS_TOKEN) + "&gate=" + n.default.App.ACCESS_TOKEN);
s.timeout = 6e4;
s.open(t, a);
s.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
cc.sys.isNative || (s.withCredentials = !0);
s.onreadystatechange = function() {
if (4 === s.readyState && 200 === s.status) {
var t = null, e = null;
try {
t = JSON.parse(s.responseText);
} catch (t) {
e = t;
}
c(e, t);
} else 200 !== s.status && c(s.status, null);
};
var r = null;
if (i) {
r = JSON.stringify(i);
s.send(r);
} else s.send();
};
return i([ a ], t);
}());
o.default = s;
cc._RF.pop();
}, {
"../SicboLive.Config": "SicboLive.Config"
} ],
"SicboLive.InfoView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0d162XccgJHsbSZ//pE2kJx", "SicboLive.InfoView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../framework/common/Utils"), s = t("./SicboLive.Assets"), r = t("./SicboLive.Common"), l = t("./SicboLive.InputView"), p = t("./SicboLive.Player"), u = cc._decorator, h = u.ccclass, d = u.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbSID = null;
e.lbTimer = null;
e.progressTimer = null;
e.lbResult = null;
e.lbTotalUser = null;
e.lbTotalBetWin = null;
e.nodeChatGroupUser = null;
e.players = [];
e.lbResultDiceHistory = null;
e.listDiceHisoty = [];
e.ClOrTx = [];
e.sprChanLe = [];
e.sprTaiXiu = [];
e.nodeDiceSoiCauView = null;
e.listNodeSoiCau = [];
e.Effect = null;
e.maxPlayer = 0;
e.me = null;
e.timerBet = 0;
e.timeInt = 0;
e.gameState = -1;
e.positions = new Array();
e.positionUI = new Array();
e.countPlayer = 0;
e.onwerIndex = 0;
e.sessionId = 0;
e.resultKey = "";
e.resultBetting = "";
e.listSoiCau = null;
e.currentIndex = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.maxPlayer = this.players.length;
this.me = this.players[0];
this.resultKey = "";
this.resultBetting = "";
this.lbResult.string = "";
this.listSoiCau = new Array();
this.nodeDiceSoiCauView.active = !1;
this.lbResultDiceHistory.node.active = !1;
this.Effect.node.active = !1;
};
e.prototype.updateInfoCurrPlayer = function(t) {
this.me.registerPlayer(t);
};
e.prototype.registerPlayer = function(t, e) {
this.players[t].registerPlayer(e);
};
e.prototype.unRegisterPlayer = function(t) {
this.players[t].unRegisterPlayer();
};
e.prototype.resetPlayersResultUI = function() {
this.lbTotalBetWin.node.active = !1;
for (var t = 0; t < this.maxPlayer; t++) this.players[t].resetPlayerResultUI();
};
e.prototype.playerResultUI = function(t, e, o) {
this.players[t].playerResultUI(e, o);
};
e.prototype.getAccountIdIsMe = function() {
return this.me && this.me.userInfo ? this.me.userInfo.AccountID : null;
};
e.prototype.getIndexUIBetByAccID = function(t) {
var e = -1;
try {
for (var o = 0; o < this.maxPlayer; o++) if (this.positionUI[o] == t) {
e = o;
break;
}
} catch (t) {}
return e;
};
e.prototype.joinGame = function(t) {
this.positions = t.Positions;
cc.log("joinGame Step 1");
this.countPlayer = 0;
this.positionUI = [ 0 ];
this.onwerIndex = 0;
this.positionUI[this.onwerIndex] = this.me.userInfo.AccountID;
this.countPlayer++;
cc.log("joinGame Step 2");
for (var e = 0; e < this.maxPlayer; e++) if ((i = this.positions[e]) > 0 && i !== this.getAccountIdIsMe()) {
this.positionUI[this.countPlayer] = i;
this.countPlayer++;
}
cc.log("joinGame Step 3");
var o = t.Players;
for (e = 0; e < this.maxPlayer; e++) {
var i;
(i = this.positions[e]) > 0 && this.registerPlayer(this.getIndexUIBetByAccID(i), o[i].Account);
}
};
e.prototype.playerJoin = function(t) {
for (var e = t.Account, o = 0; o < this.maxPlayer; o++) if (0 === this.positionUI[o]) {
this.positionUI[o] = e.AccountID;
this.registerPlayer(o, e);
break;
}
};
e.prototype.playerLeave = function(t) {
if (this.positionUI) {
var e = t[0];
this.unRegisterPlayer(this.getIndexUIBetByAccID(e));
for (var o = -1, i = 0; i < this.maxPlayer; i++) if (e === this.positionUI[i]) {
o = i;
break;
}
this.positionUI[o] = 0;
}
};
e.prototype.summaryPlayer = function(t) {
this.lbTotalUser.string = t;
};
e.prototype.vipPlayer = function(t) {
var e = this;
this.positionUI = [ 0 ];
this.positionUI[0] = this.getAccountIdIsMe();
this.positionUI.forEach(function(o, i) {
if (0 != o) try {
var n = t.filter(function(t) {
return t.AccountID == o;
});
if (n.length > 0 && 0 != i) {
e.players[i].registerPlayer(n[0].Account);
e.players[i].resetPlayerResultUI();
}
} catch (t) {
console.error(t);
} else e.players[i].unRegisterPlayer();
}, this);
};
e.prototype.totalUserWin = function(t) {
this.lbTotalBetWin.string = "+" + a.default.formatNumber(t);
this.lbTotalBetWin.node.active = !0;
this.lbTotalBetWin.node.scaleY = 0;
this.lbTotalBetWin.node.getComponent(cc.Animation).play("xxWin");
};
e.prototype.winResultVip = function(t) {
var e = this;
this.positionUI && t.length > 0 && t.map(function(t) {
var o = e.positionUI.indexOf(t.AccountID);
if (-1 != o && t.AccountID != e.getAccountIdIsMe()) {
e.players[o].playerResultUI(!0, t.Award);
e.players[o].updateChip(t.Balance);
}
});
};
e.prototype.winResult = function(t) {
if (this.me || this.me.node.active) {
this.me.playerResultUI(!0, t.Award);
this.me.updateChip(t.Balance);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t.Balance);
}
};
e.prototype.updateChip = function(t, e) {
-1 != this.positionUI.indexOf(t) && this.players[this.getIndexUIBetByAccID(t)].updateChip(e);
};
e.prototype.getPositions = function() {
return this.positionUI;
};
e.prototype.getIndexUIBetByPosition = function(t) {
var e = t;
e > this.onwerIndex ? (e += this.onwerIndex) >= this.maxPlayer && (e -= this.maxPlayer - 1) : e < this.onwerIndex ? (e -= this.onwerIndex) < 0 && (e = this.maxPlayer + e) : e = 0;
return e;
};
e.prototype.getListSoiCau = function() {
return this.listSoiCau;
};
e.prototype.setListSoiCau = function(t) {
this.listSoiCau = t;
this.currentIndex = 0;
this.updateLastedCau(this.listSoiCau[this.currentIndex]);
this.updateListNodeSoiCau();
};
e.prototype.setPreviousOrNextCau = function(t, e) {
if ("n" == e) {
if (0 == this.currentIndex) {
lngui.UITextManager.showCenterNotification("Đây là phiên mới nhất!");
return;
}
this.currentIndex++;
} else "p" == e && this.currentIndex--;
this.updateLastedCau(this.listSoiCau[this.currentIndex]);
};
e.prototype.updateLastedCau = function(t) {
console.log(t);
var e = t.Result, o = t.ChipsData.split(","), i = o[0], n = o[1], c = o[2];
this.listDiceHisoty[0].spriteFrame = s.default.instance.getSprDicesV2(parseInt(i));
this.listDiceHisoty[1].spriteFrame = s.default.instance.getSprDicesV2(parseInt(n));
this.listDiceHisoty[2].spriteFrame = s.default.instance.getSprDicesV2(parseInt(c));
this.lbResultDiceHistory.string = e.toString();
this.ClOrTx[0].spriteFrame = e % 2 ? this.sprChanLe[0] : this.sprChanLe[1];
this.ClOrTx[1].spriteFrame = e > 11 ? this.sprTaiXiu[0] : this.sprTaiXiu[1];
this.nodeDiceSoiCauView.active = !0;
this.lbResultDiceHistory.node.active = !0;
};
e.prototype.updateListNodeSoiCau = function() {
var t = this, e = this.listSoiCau.slice(0, 15);
(e = e.reverse()).forEach(function(e, o) {
t.listNodeSoiCau[o].spriteFrame = s.default.instance.getSprNodeDice(e);
});
};
e.prototype.playerShowBubbleChat = function(t) {
for (var e = this, o = 0; o < this.players.length; o++) {
if (this.players[o] && this.players[o].userInfo.NickName == t[0]) {
this.players[o].showBubbleChat(t);
break;
}
if (o == this.players.length - 1) {
this.nodeChatGroupUser.active = !0;
this.nodeChatGroupUser.children[0].getComponent(cc.Label).string = t[1];
setTimeout(function() {
e.node && (e.nodeChatGroupUser.active = !1);
}, 2500);
}
}
};
e.prototype.updateSessionId = function(t) {
this.lbSID.string = "#" + t;
};
e.prototype.disPlayStringResult = function(t) {
this.lbResult.string = t;
};
e.prototype.setStringResultKey = function(t) {
this.resultKey = t;
};
e.prototype.setStringResultBetting = function(t) {
this.resultBetting = t;
};
e.prototype.getSessionId = function() {
return this.sessionId;
};
e.prototype.getTime = function() {
return this.timeInt;
};
e.prototype.updateInfo = function(t, e) {
switch (e) {
case r.default.GAMESTATE.BETTING:
if (this.gameState !== e) {
this.updateSessionId(t.SessionID);
this.setStringResultBetting(t.StringResult);
this.sessionId = t.SessionID;
this.lbTimer.node.active = !0;
this.disPlayStringResult(this.resultBetting);
this.progressTimer.node.parent.active = !0;
this.resetPlayersResultUI();
this.Effect.node.active = !0;
this.Effect.setAnimation(0, "datcuoc", !1);
}
break;

case r.default.GAMESTATE.OPEN_PLATE:
if (this.gameState !== e) {
this.updateSessionId(t.SessionID);
this.sessionId = t.SessionID;
this.setStringResultKey(t.StringResult);
this.lbTimer.node.active = !1;
this.progressTimer.node.parent.active = !1;
this.lbTimer.node.color = cc.Color.WHITE;
this.Effect.node.active = !0;
this.Effect.setAnimation(0, "mobat", !1);
}
break;

case r.default.GAMESTATE.SHOW_RESULT:
if (this.gameState !== e) {
this.updateSessionId(t.SessionID);
this.setStringResultKey(t.StringResult);
this.sessionId = t.SessionID;
this.lbTimer.node.active = !1;
this.disPlayStringResult(this.resultKey);
this.progressTimer.node.parent.active = !0;
this.lbTimer.node.color = cc.Color.WHITE;
this.Effect.node.active = !0;
this.Effect.setAnimation(0, "ketqua", !1);
}
break;

case r.default.GAMESTATE.WAITING:
if (this.gameState !== e) {
this.updateSessionId(t.SessionID);
this.setStringResultKey(t.StringResult);
this.sessionId = t.SessionID;
this.lbTimer.node.active = !1;
this.disPlayStringResult(this.resultKey);
this.resetPlayersResultUI();
this.progressTimer.node.parent.active = !1;
this.lbTimer.node.color = cc.Color.WHITE;
}
break;

case r.default.GAMESTATE.SHAKING:
if (this.gameState !== e) {
this.updateSessionId(t.SessionID);
this.setStringResultBetting(t.StringResult);
this.lbTimer.node.active = !1;
l.default.instance.clearAllChip();
this.resetPlayersResultUI();
this.progressTimer.node.parent.active = !1;
this.lbTimer.node.color = cc.Color.WHITE;
this.lbResult.string = "";
}
}
this.gameState = e;
};
e.prototype.updateTimer = function(t) {
if (this.lbTimer) {
var e = parseInt(t);
this.timeInt = e;
if (e > 0) {
this.lbTimer.string = e.toString();
e <= 3 && this.gameState == r.default.GAMESTATE.BETTING && (this.lbTimer.node.color = cc.Color.RED);
}
}
};
var o;
c([ d(cc.Label) ], e.prototype, "lbSID", void 0);
c([ d(cc.Label) ], e.prototype, "lbTimer", void 0);
c([ d(cc.ProgressBar) ], e.prototype, "progressTimer", void 0);
c([ d(cc.Label) ], e.prototype, "lbResult", void 0);
c([ d(cc.Label) ], e.prototype, "lbTotalUser", void 0);
c([ d(cc.Label) ], e.prototype, "lbTotalBetWin", void 0);
c([ d(cc.Node) ], e.prototype, "nodeChatGroupUser", void 0);
c([ d([ p.default ]) ], e.prototype, "players", void 0);
c([ d(cc.Label) ], e.prototype, "lbResultDiceHistory", void 0);
c([ d([ cc.Sprite ]) ], e.prototype, "listDiceHisoty", void 0);
c([ d([ cc.Sprite ]) ], e.prototype, "ClOrTx", void 0);
c([ d([ cc.SpriteFrame ]) ], e.prototype, "sprChanLe", void 0);
c([ d([ cc.SpriteFrame ]) ], e.prototype, "sprTaiXiu", void 0);
c([ d(cc.Node) ], e.prototype, "nodeDiceSoiCauView", void 0);
c([ d([ cc.Sprite ]) ], e.prototype, "listNodeSoiCau", void 0);
c([ d(sp.Skeleton) ], e.prototype, "Effect", void 0);
return o = c([ h ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../framework/common/Utils": void 0,
"./SicboLive.Assets": "SicboLive.Assets",
"./SicboLive.Common": "SicboLive.Common",
"./SicboLive.InputView": "SicboLive.InputView",
"./SicboLive.Player": "SicboLive.Player"
} ],
"SicboLive.InputView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4bf55KN3BlHdaHpw25pxInd", "SicboLive.InputView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../framework/common/Utils"), s = t("./network/SicboLive.NetWorkClient"), r = t("./settings/SicboLive.Settings"), l = t("./SicboLive.Assets"), p = t("./SicboLive.ChipItem"), u = t("./SicboLive.ChipPool"), h = t("./SicboLive.Common"), d = t("./SicboLive.Controller"), f = t("./SicboLive.InfoView"), v = t("./SicboLive.PlayerData"), S = t("./SicboLive.ResultView"), y = cc._decorator, b = y.ccclass, g = y.property, m = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeParentChip = null;
e.btnChips = [];
e.nodeGroup = null;
e.btnListChip = [];
e.listChipSelect = null;
e.btnRepeat = null;
e.btnRepeatX2 = null;
e.sprNan = null;
e.lbTotalBets = [];
e.NodeMyBet = [];
e.lbTotalUserBets = null;
e.isNan = !1;
e.nodeChipPress = null;
e.totalBets = null;
e.totalUserBets = 0;
e.rootDealerPos = null;
e.chipIndex = 1;
e.logSessionId = 0;
e.timePerBet = 0;
e.currentState = -1;
e.arrTimeoutBet = null;
e.posGroupUser = null;
e.percentListChips = .2;
e.percentVecXListChip = 0;
e.isRebet = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.isNan = !1;
this.nodeChipPress = new Array();
var t = this;
this.btnChips.forEach(function(e) {
t.nodeChipPress.push(e.node.getChildByName("chip_press"));
});
this.rootDealerPos = cc.v2(0, 160);
this.chipIndex = 1;
this.betValues = [ 1e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7 ];
this.processBetValUI();
this.resetTotalBetUI();
this.timePerBet = 200;
this.currentState = -1;
this.arrTimeoutBet = [];
var e = this.nodeGroup.parent.convertToWorldSpaceAR(this.nodeGroup.position), i = this.node.convertToNodeSpaceAR(e);
this.posGroupUser = cc.v2(i.x, i.y - 70);
this.initGateChip();
this.logBets = [];
this.logSessionId = 0;
this.isRebet = !1;
this.percentListChips = 0;
for (var n = 0; n < this.NodeMyBet.length; n++) this.NodeMyBet[n].active = !1;
};
e.prototype.onDisable = function() {
this.listChipSelect.node.off("scroll-ended", this.emitEventScrollEnded, this);
};
e.prototype.getIsNan = function() {
return this.isNan;
};
e.prototype.getLogBets = function() {
return this.logBets;
};
e.prototype.initGateChip = function() {
this.gateChips = [];
for (var t = 0; t <= 51; t++) this.gateChips[t] = [];
};
e.prototype.emitEventScrollEnded = function(t) {
this.percentListChips = t.getScrollOffset().x;
this.percentListChips >= -10 && (this.percentListChips = 0);
this.percentListChips <= -460 && (this.percentListChips = -470);
this.updatePercentScrollViewChips();
};
e.prototype.btnScrollBack = function() {
this.updatePercentScrollViewChips();
this.listChipSelect.scrollToOffset(cc.v2(0, 0), .5);
};
e.prototype.btnScrollNext = function() {
this.updatePercentScrollViewChips();
this.listChipSelect.scrollToOffset(this.listChipSelect.getMaxScrollOffset(), .5);
};
e.prototype.updatePercentScrollViewChips = function() {
this.btnListChip[0].getComponent(cc.Button).interactable = !0;
this.btnListChip[0].color = cc.Color.WHITE;
this.btnListChip[1].getComponent(cc.Button).interactable = !0;
this.btnListChip[1].color = cc.Color.WHITE;
if (0 == this.percentListChips) {
this.btnListChip[0].getComponent(cc.Button).interactable = !1;
this.btnListChip[0].color = cc.Color.GRAY;
} else if (this.percentListChips <= -460) {
this.btnListChip[1].getComponent(cc.Button).interactable = !1;
this.btnListChip[1].color = cc.Color.GRAY;
}
};
e.prototype.processBetValUI = function() {
for (var t = 0; t < this.betValues.length; t++) if (t != this.chipIndex) {
this.btnChips[t].node.getChildByName("Background").color = cc.color(150, 150, 150);
this.btnChips[t].interactable = !0;
this.nodeChipPress[t].active = !1;
}
this.btnChips[this.chipIndex].node.stopAllActions();
this.btnChips[this.chipIndex].node.getChildByName("Background").color = cc.color(255, 255, 255);
this.btnChips[this.chipIndex].interactable = !1;
this.nodeChipPress[this.chipIndex].active = !0;
};
e.prototype.resetTotalBetUI = function() {
this.totalBets = new Array(52).fill(0);
this.totalUserBets = 0;
this.lbTotalBets.forEach(function(t) {
t.string = "";
});
this.lbTotalUserBets.string = "0";
};
e.prototype.playFxUserBet = function(t, e, o, i) {
if (!(e > 4 && e < 46 && (e < 17 || e > 30))) {
var n = e;
r.default.instance.playAudioClip(1);
var c = u.default.instance.createChip();
c.parent = this.nodeParentChip;
var a;
a = -1 != t ? v.default[t].position : this.posGroupUser;
c.position = a;
var s = c.getComponent(p.default);
s.betIndex = n;
s.gate = e;
s.playerId = t;
s.position = a;
s.setChip(o);
this.gateChips[e].push(s);
var l = S.default.instance.getPositionFromGate(n);
if (i) s.moveTo(cc.v2(l.x, l.y), e); else {
s.setPosition(cc.v2(l.x, l.y));
this.onCallBackMoveToChipUserBet(e);
}
}
};
e.prototype.onCallBackMoveToChipUserBet = function(t) {
if (-1 != t) {
var e = a.default.randomRangeInt(4, 8);
if (this.gateChips[t].length > 13) for (var o = 0; o < e; o++) {
this.gateChips[t][0] && this.nodeParentChip.removeChild(this.gateChips[t][0].node);
this.gateChips[t].shift();
for (var i = 0; i < this.gateChips[t].length; i++) this.gateChips[t][i] && this.gateChips[t][i].node.runAction(cc.moveTo(.2, this.gateChips[t][i].node.x, this.gateChips[t][i].node.y - 1));
}
}
};
e.prototype.playFXDealerPay = function(t) {
var e = u.default.instance.createChip();
e.parent = this.nodeParentChip;
e.position = this.rootDealerPos;
var o = e.getComponent(p.default);
o.betIndex = t.betIndex;
o.playerId = t.playerId;
o.position = t.position;
o.setChip(t.chipIndex);
this.gateChips[t.gate].push(o);
var i = S.default.instance.getPositionFromGate(t.gate), n = i.x - 5, c = i.x + 5, a = i.y - 7, s = i.y + 7, r = n + Math.floor(Math.random() * Math.abs(c - n)), l = a + Math.floor(Math.random() * Math.abs(s - a));
o.moveTo(cc.v2(r, l));
};
e.prototype.playFxPay = function(t, e) {
t.moveToEnd(t.position, e);
};
e.prototype.playFxLost = function(t, e) {
var o = this.rootDealerPos.x - 20, i = this.rootDealerPos.x + 20, n = this.rootDealerPos.y + 5, c = this.rootDealerPos.y + 15, a = o + Math.floor(Math.random() * Math.abs(i - o)), s = n + Math.floor(Math.random() * Math.abs(c - n));
t.moveToEndStop(cc.v2(a, s), e);
};
e.prototype.betValueClicked = function(t, e) {
r.default.instance.playAudioClip(0);
this.chipIndex = parseInt(e);
this.processBetValUI();
};
e.prototype.betClicked = function(t, e) {
if (d.default.instance.timer <= 3) d.default.instance.showMsg("Hết thời gian đặt cược..."); else {
var o = parseInt(e), i = this.betValues[this.chipIndex];
if (f.default.instance.me.userInfo.Balance < i) cc.find("Canvas/popupView-noHide").getComponent("PopupView").showPopupShopRequire(); else {
S.default.instance.nodeFxGateClick(o);
this.isRebet = !1;
var n = new h.default.ModelsSignalr();
n.M = "Bet";
n.A = [ i, o ];
s.default.getInstance().send(n);
}
}
};
e.prototype.nanClicked = function() {
this.isNan = !this.isNan;
this.isNan ? this.sprNan.spriteFrame = l.default.instance.getSprNan(0) : this.sprNan.spriteFrame = l.default.instance.getSprNan(1);
};
e.prototype.actCoppy = function() {
this.currentState == h.default.GAMESTATE.BETTING ? a.default.copyToClipboard(f.default.instance.resultBetting) : a.default.copyToClipboard(f.default.instance.resultKey);
d.default.instance.showMsg("Sao chép chuỗi thành công!");
};
e.prototype.repeatClicked = function() {
if (d.default.instance.timer <= 3) d.default.instance.showMsg("Hết thời gian đặt cược..."); else {
var t = this.logBets;
if (t && null != t && t.length > 0 && 0 != this.logSessionId) {
this.reBet();
this.btnRepeat.interactable = !1;
this.btnRepeat.node.color = cc.Color.GRAY;
var e = this;
setTimeout(function() {
e.btnRepeat.interactable = !0;
e.btnRepeat.node.color = cc.Color.WHITE;
}, 1500);
} else d.default.instance.showMsg("Không có dữ liệu phiên trước...");
}
};
e.prototype.repeatX2Clicked = function() {
if (d.default.instance.timer <= 3) d.default.instance.showMsg("Hết thời gian đặt cược..."); else {
var t = this.logBets;
if (t && null != t && t.length > 0 && 0 != this.logSessionId) {
this.reBetX2();
this.btnRepeatX2.interactable = !1;
this.btnRepeatX2.node.color = cc.Color.GRAY;
var e = this;
setTimeout(function() {
e.btnRepeatX2.interactable = !0;
e.btnRepeatX2.node.color = cc.Color.WHITE;
}, 1500);
} else d.default.instance.showMsg("Không có dữ liệu phiên trước...");
}
};
e.prototype.clearAllChip = function() {
this.nodeParentChip.removeAllChildren(!0);
};
e.prototype.getChipIndexFromValue = function(t) {
for (var e = 0, o = this.betValues.length, i = 0; i < o; i++) if (t === this.betValues[i]) {
e = i;
break;
}
return e;
};
e.prototype.activeAllButtonBet = function(t) {
this.btnRepeat.node.color = t ? cc.Color.WHITE : cc.Color.GRAY;
this.btnRepeat.interactable = t;
this.btnRepeatX2.node.color = t ? cc.Color.WHITE : cc.Color.GRAY;
this.btnRepeatX2.interactable = t;
S.default.instance.nodeGateDisabeClick(t);
};
e.prototype.clearAllTimeOut = function() {
this.arrTimeoutBet.forEach(function(t) {
clearTimeout(t);
});
this.arrTimeoutBet = [];
};
e.prototype.getGateChips = function() {
return this.gateChips;
};
e.prototype.playerBet = function(t) {
if (f.default.instance.getPositions()) {
var e = t[0], o = t[1], i = t[2], n = t[3];
f.default.instance.updateChip(e, n);
this.playFxUserBet(f.default.instance.getIndexUIBetByAccID(e), i, this.getChipIndexFromValue(o), !0);
if (i > 45) {
this.totalBets[i] += o;
this.lbTotalBets[i - 27].string = a.default.nFormatter(this.totalBets[i]);
} else if (i < 5) {
this.totalBets[i] += o;
this.lbTotalBets[i].string = a.default.nFormatter(this.totalBets[i]);
} else if (i > 16 && i < 31) {
this.totalBets[i] += o;
this.lbTotalBets[i - 12].string = a.default.nFormatter(this.totalBets[i]);
}
if (e == f.default.instance.getAccountIdIsMe()) {
this.logSessionId < f.default.instance.getSessionId() && (this.logBets = []);
this.logBets.push({
AccountID: e,
Amount: o,
Gate: i
});
this.totalUserBets += o;
this.lbTotalUserBets.string = a.default.formatNumber(this.totalUserBets);
this.logSessionId = f.default.instance.getSessionId();
}
}
};
e.prototype.reBet = function() {
var t = this;
if (0 != t.logSessionId) {
var e = 0;
this.logBets.forEach(function(t) {
e += t.Amount;
});
if (e > f.default.instance.me.userInfo.Balance) lngui.UITextManager.showCenterNotification("Số dư không đủ"); else {
var o = 0, i = this.logBets;
this.isRebet = !0;
i.forEach(function(e) {
t.arrTimeoutBet.push(setTimeout(function() {
if (t.node && t.node.active && t.currentState == h.default.GAMESTATE.BETTING && t.node && t.node.active) {
e.Amount = e.Amount;
t.sendRequestReBet(e);
}
}, t.timePerBet * o));
o++;
});
}
}
};
e.prototype.reBetX2 = function() {
var t = this;
if (0 != t.logSessionId) {
var e = 0;
this.logBets.forEach(function(t) {
e += 2 * t.Amount;
});
if (e > f.default.instance.me.userInfo.Balance) lngui.UITextManager.showCenterNotification("Số dư không đủ"); else {
var o = 0, i = this.logBets;
this.isRebet = !0;
i.forEach(function(e) {
t.arrTimeoutBet.push(setTimeout(function() {
if (t.node && t.node.active && t.currentState == h.default.GAMESTATE.BETTING && t.node && t.node.active) {
e.Amount = 2 * e.Amount;
t.sendRequestReBet(e);
}
}, t.timePerBet * o));
o++;
});
}
}
};
e.prototype.sendRequestReBet = function(t) {
if (f.default.instance.me.userInfo.Balance < t.Amount) cc.find("Canvas/popupView-noHide").getComponent("PopupView").showPopupShopRequire(); else {
var e = new h.default.ModelsSignalr();
e.M = "Bet";
e.A = [ t.Amount, t.Gate ];
s.default.getInstance().send(e);
}
};
e.prototype.showLastInput = function(t) {
var e = this;
t.forEach(function(t) {
t.forEach(function(t) {
e.playFxUserBet(f.default.instance.getIndexUIBetByAccID(t.AccountID), t.BetSide, e.getChipIndexFromValue(t.BetValue), !1);
if (t.BetSide < 5) {
e.totalBets[t.BetSide] += t.BetValue;
e.lbTotalBets[t.BetSide].string = a.default.nFormatter(e.totalBets[t.BetSide]);
} else if (t.BetSide > 45) {
e.totalBets[t.BetSide] += t.BetValue;
e.lbTotalBets[t.BetSide - 27].string = a.default.nFormatter(e.totalBets[t.BetSide]);
} else if (t.BetSide > 16 && t.BetSide < 31) {
e.totalBets[t.BetSide] += t.BetValue;
e.lbTotalBets[t.BetSide - 12].string = a.default.nFormatter(e.totalBets[t.BetSide]);
}
if (t.AccountID == f.default.instance.getAccountIdIsMe()) {
(0 != e.logSessionId && e.logSessionId < f.default.instance.getSessionId() || e.isRebet) && (e.logBets = []);
e.logBets.push({
AccountID: t.AccountID,
Amount: t.BetValue,
Gate: t.BetSide
});
e.totalUserBets += parseInt(t.BetValue);
e.lbTotalUserBets.string = a.default.formatNumber(e.totalUserBets);
e.logSessionId = f.default.instance.getSessionId();
}
});
});
};
e.prototype.updateInput = function(t) {
switch (t) {
case h.default.GAMESTATE.BETTING:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.resetTotalBetUI();
this.activeAllButtonBet(!0);
d.default.instance.showMsg("Xin mời đặt cược...");
}
this.currentState == t && 3 == d.default.instance.timer && d.default.instance.showMsg("Dừng cược nha...");
break;

case h.default.GAMESTATE.OPEN_PLATE:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.activeAllButtonBet(!1);
}
break;

case h.default.GAMESTATE.SHOW_RESULT:
this.currentState !== t && this.activeAllButtonBet(!1);
break;

case h.default.GAMESTATE.WAITING:
if (this.currentState !== t) {
this.activeAllButtonBet(!1);
for (var e = 0; e < this.NodeMyBet.length; e++) this.NodeMyBet[e].active = !1;
}
break;

case h.default.GAMESTATE.SHAKING:
if (this.currentState !== t) {
this.resetTotalBetUI();
this.activeAllButtonBet(!1);
}
}
this.currentState = t;
};
e.prototype.ShowMyBets = function(t) {
var e = t[0].BetSide;
t[0].BetSide > 45 ? e = t[0].BetSide - 27 : t[0].BetSide > 16 && t[0].BetSide < 31 && (e = t[0].BetSide - 12);
if (h.default.GAMESTATE.BETTING) {
this.NodeMyBet[e].active = !0;
this.NodeMyBet[e].getChildByName("txtMyBets").getComponent(cc.Label).string = a.default.nFormatter(t[0].SumaryBet);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t[1]);
}
};
var o;
e.instance = null;
c([ g(cc.Node) ], e.prototype, "nodeParentChip", void 0);
c([ g([ cc.Button ]) ], e.prototype, "btnChips", void 0);
c([ g(cc.Node) ], e.prototype, "nodeGroup", void 0);
c([ g([ cc.Node ]) ], e.prototype, "btnListChip", void 0);
c([ g(cc.ScrollView) ], e.prototype, "listChipSelect", void 0);
c([ g(cc.Button) ], e.prototype, "btnRepeat", void 0);
c([ g(cc.Button) ], e.prototype, "btnRepeatX2", void 0);
c([ g(cc.Sprite) ], e.prototype, "sprNan", void 0);
c([ g([ cc.Label ]) ], e.prototype, "lbTotalBets", void 0);
c([ g([ cc.Node ]) ], e.prototype, "NodeMyBet", void 0);
c([ g(cc.Label) ], e.prototype, "lbTotalUserBets", void 0);
return o = c([ b ], e);
}(cc.Component);
o.default = m;
cc._RF.pop();
}, {
"../../framework/common/Utils": void 0,
"./SicboLive.Assets": "SicboLive.Assets",
"./SicboLive.ChipItem": "SicboLive.ChipItem",
"./SicboLive.ChipPool": "SicboLive.ChipPool",
"./SicboLive.Common": "SicboLive.Common",
"./SicboLive.Controller": "SicboLive.Controller",
"./SicboLive.InfoView": "SicboLive.InfoView",
"./SicboLive.PlayerData": "SicboLive.PlayerData",
"./SicboLive.ResultView": "SicboLive.ResultView",
"./network/SicboLive.NetWorkClient": "SicboLive.NetWorkClient",
"./settings/SicboLive.Settings": "SicboLive.Settings"
} ],
"SicboLive.MaxBet": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "32dfbGXbNJLbaxcs8BLNM8E", "SicboLive.MaxBet");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, r = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeDis = null;
e.isOpenMaxBet = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.onEnable = function() {
this.isOpenMaxBet = !1;
this.nodeDis.active = this.isOpenMaxBet;
};
e.prototype.onShow = function() {
if (0 == this.isOpenMaxBet) {
this.isOpenMaxBet = !0;
this.node.stopAllActions();
(e = cc.moveTo(.5, cc.v2(-600, 0))).easing(cc.easeQuadraticActionInOut());
var t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
} else {
this.isOpenMaxBet = !1;
this.node.stopAllActions();
var e;
(e = cc.moveTo(.5, cc.v2(-1100, 0))).easing(cc.easeQuadraticActionInOut());
t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
}
};
e.prototype.onShowFinish = function() {
this.nodeDis.active = this.isOpenMaxBet;
};
var o;
e.instance = null;
c([ r(cc.Node) ], e.prototype, "nodeDis", void 0);
return o = c([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboLive.NetWorkClient": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eedd46zK1BFIadTjNPWa64z", "SicboLive.NetWorkClient");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../SicboLive.Common"), a = t("../SicboLive.Config"), s = t("./SicboLive.Http"), r = t("./SicboLive.Network.Clients"), l = t("./SicboLive.Network.Service"), p = function() {
this.M = null;
this.A = null;
this.H = null;
this.I = null;
}, u = function(t) {
n(e, t);
function e() {
var e = t.call(this) || this;
e.services = new Array();
e.isLogin = !1;
e.onLogined = null;
e.intervalPing = -1;
e.lastID = 0;
e.ID = 0;
e.isUseWSS = a.default.App.USE_WSS;
e.lastID = 0;
e.ID = 0;
return e;
}
e.getInstance = function() {
null == this.instance && (this.instance = new e());
return this.instance;
};
e.prototype.checkConnect = function(t) {
var e = this;
void 0 === t && (t = null);
this.onLogined = t;
if (this.isConnected()) this.isLogin && null != this.onLogined && this.onLogined(!0); else {
var o = this;
s.default.sendRequest("GET", a.default.App.HOST_SicboLive.host, "signalr/negotiate", null, function(t, i) {
if (null == t) {
o.connectToken = i.ConnectionToken;
o.tid = i.ConnectionId;
o.data = a.default.App.Hub;
o.connect();
null != e.onLogined && e.onLogined(!0);
} else e.onLogined(!1);
});
}
};
e.prototype.onError = function(t) {
console.log("Connect server SicboLive error: ");
console.log(t);
};
e.prototype.connect = function() {
t.prototype.connect.call(this, a.default.App.HOST_SicboLive.host, null);
};
e.prototype.reConnect = function() {
this.isReconnect = !0;
t.prototype.connect.call(this, a.default.App.HOST_SicboLive.host, null);
};
e.prototype.onOpen = function(e) {
var o = this;
t.prototype.onOpen.call(this, e);
this.sendLogin();
this.intervalPing = setInterval(function() {
return o.sendPingPoong();
}, 5e3);
};
e.prototype.sendLogin = function() {
var t = new p();
t.M = "EnterLobby";
t.A = [ c.default.Utils.getInstance().getDeviceType(), a.default.App.VIP_PLAYER ];
this.send(t);
};
e.prototype.sendPlayNow = function() {
var t = new p();
t.M = "PlayNow";
t.A = "";
this.send(t);
};
e.prototype.sendPingPoong = function() {
var t = new p();
t.M = "PingPong";
this.send(t);
};
e.prototype.send = function(t) {
if (this.ws && this.isConnected()) {
this.lastID = this.ID;
t.H = a.default.App.Hub;
t.I = this.ID;
this.ID++;
this.ws.send(JSON.stringify(t));
}
};
e.prototype.ping = function() {
null != this.ws && (this.ws.readyState, WebSocket.OPEN);
};
e.prototype.removeServices = function(t) {
for (var e = 0; e < this.services.length; e++) this.services[e].target === t && this.services.splice(e, 1);
};
e.prototype.onMessage = function(t) {
var e = JSON.parse(t.data);
if (void 0 !== e.M && e.M.length > 0) for (var o = e.M[0], i = o.A, n = 0; n < this.services.length; n++) {
var c = this.services[n];
if (c.target && c.target instanceof Object && c.target.node) {
c.callback(o.M, i);
e.M && e.M.length > 1 && e.M.forEach(function(t) {
"" != t.M && c.callback(t.M, t.A);
});
if (!this.isLogin && null != c.cbLogin) {
this.isLogin = !0;
c.cbLogin();
}
} else {
this.services.splice(n, 1);
n--;
}
} else if (e.R && e.R.AccountID) {
lngui.UIWaitingLayout.showWaiting();
this.sendPlayNow();
setTimeout(function() {
lngui.UIWaitingLayout.hideWaiting();
}, 2e3);
} else if (e.R && e.I === this.lastID.toString()) {
this.lastID = 0;
lngui.UIWaitingLayout.hideWaiting();
} else e.I && (this.lastID.toString(), e.I);
};
e.prototype.onClose = function() {
console.log("SicboLive on Close......!");
for (var t = 0; t < this._onCloses.length; t++) {
var e = this._onCloses[t];
if (e.target && e.target instanceof Object && e.target.node) e.callback(null, null); else {
this._onCloses.splice(t, 1);
t--;
}
}
this.isLogin = !1;
this.ws.onopen = null;
this.ws.onmessage = null;
this.ws.onerror = null;
this.ws.onclose = null;
this.ws = null;
};
e.prototype.addListener = function(t, e, o) {
this.services.filter(function(t) {
return t.target === e;
}).length > 0 || this.services.push(new l.default(e, t, o));
};
return e;
}(r.default);
o.default = u;
cc._RF.pop();
}, {
"../SicboLive.Common": "SicboLive.Common",
"../SicboLive.Config": "SicboLive.Config",
"./SicboLive.Http": "SicboLive.Http",
"./SicboLive.Network.Clients": "SicboLive.Network.Clients",
"./SicboLive.Network.Service": "SicboLive.Network.Service"
} ],
"SicboLive.Network.Clients": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5bc93oeC19HR6Qqcnl06FFf", "SicboLive.Network.Clients");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../SicboLive.Config"), n = t("./SicboLive.Network.Service"), c = function() {
function t() {
this.ws = null;
this.host = null;
this.port = null;
this.connectToken = null;
this.tid = null;
this.data = null;
this.url = null;
this.isForceClose = !1;
this.isAutoReconnect = !0;
this.isUseWSS = !1;
this.isReconnect = !1;
this._onOpenes = new Array();
this._onCloses = new Array();
}
t.prototype.connect = function(t, e) {
this.isForceClose = !1;
this.host = t;
this.port = e;
var o = JSON.stringify([ {
name: this.data
} ]);
null != this.port ? this.url = this.host + ":" + this.port + "/signalr/connect?transport=webSockets&connectionToken=" + encodeURIComponent(this.connectToken) + "&connectionData=" + encodeURIComponent(o) + "&tid=" + encodeURIComponent(this.tid) + "&token=" + encodeURIComponent(i.default.App.ACCESS_TOKEN) : this.url = this.host + "/signalr/connect?transport=webSockets&connectionToken=" + encodeURIComponent(this.connectToken) + "&connectionData=" + encodeURIComponent(o) + "&tid=" + encodeURIComponent(this.tid) + "&token=" + encodeURIComponent(i.default.App.ACCESS_TOKEN);
this.isReconnect && (this.url = this.url.replace("/signalr/connect?", "/signalr/reconnect?"));
if (null == this.ws) {
this.isUseWSS ? cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID ? this.ws = new WebSocket("wss://" + this.url, [], cc.url.raw("resources/cacert.pem")) : this.ws = new WebSocket("wss://" + this.url, []) : cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID ? this.ws = new WebSocket("ws://" + this.url, []) : this.ws = new WebSocket("ws://" + this.url);
this.ws.binaryType = "arraybuffer";
this.ws.onopen = this.onOpen.bind(this);
this.ws.onmessage = this.onMessage.bind(this);
this.ws.onerror = this.onError.bind(this);
this.ws.onclose = this.onClose.bind(this);
} else if (this.ws.readyState !== WebSocket.OPEN) {
this.ws.close();
this.ws = null;
this.connect(t, e);
}
};
t.prototype.onOpen = function() {};
t.prototype.onMessage = function() {};
t.prototype.onError = function(t) {
console.log(t);
};
t.prototype.onClose = function() {};
t.prototype.addOpen = function(t, e, o) {
this._onOpenes.filter(function(t) {
return t.target === e;
}).length > 0 || this._onOpenes.push(new n.default(e, t, o));
};
t.prototype.addOnClose = function(t, e, o) {
this._onCloses.filter(function(t) {
return t.target === e;
}).length > 0 || this._onCloses.push(new n.default(e, t, o));
};
t.prototype.close = function() {
this.isForceClose = !0;
this.ws && this.ws.close();
};
t.prototype.isConnected = function() {
return !!this.ws && this.ws.readyState === WebSocket.OPEN;
};
return t;
}();
o.default = c;
cc._RF.pop();
}, {
"../SicboLive.Config": "SicboLive.Config",
"./SicboLive.Network.Service": "SicboLive.Network.Service"
} ],
"SicboLive.Network.Service": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "db953HMaTdI4od0O67Q+9rX", "SicboLive.Network.Service");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.default = function(t, e, o) {
this.target = t;
this.callback = e;
this.cbLogin = o;
};
cc._RF.pop();
}, {} ],
"SicboLive.PlayerData": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "212898wZ+hOn7HcB+thHGjj", "SicboLive.PlayerData");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = [ {
accID: 0,
balance: 0,
avatarId: 1,
indexBet: 0,
position: cc.v2(-562, -361),
chips: []
}, {
accID: 0,
balance: 500,
avatarId: 3,
indexBet: 0,
position: cc.v2(-610, -208),
chips: []
}, {
accID: 0,
balance: 1500,
avatarId: 2,
indexBet: 0,
position: cc.v2(-611, -30),
chips: []
}, {
accID: 0,
balance: 2e3,
avatarId: 1,
indexBet: 0,
position: cc.v2(-611, 141),
chips: []
}, {
accID: 0,
balance: 1e4,
avatarId: 6,
indexBet: 0,
position: cc.v2(608, 141),
chips: []
}, {
accID: 0,
balance: 5e3,
avatarId: 5,
indexBet: 0,
position: cc.v2(608, -30),
chips: []
}, {
accID: 0,
balance: 9e3,
avatarId: 4,
indexBet: 0,
position: cc.v2(608, -208),
chips: []
} ];
o.default = i;
cc._RF.pop();
}, {} ],
"SicboLive.PlayersNotInGame": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4b0d2OB2RlBkJjZHIjLlC9x", "SicboLive.PlayersNotInGame");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../framework/common/Utils"), s = t("../network/SicboLive.Http"), r = t("../SicboLive.Assets"), l = t("../SicboLive.Common"), p = t("../SicboLive.Config"), u = t("../SicboLive.Controller"), h = cc._decorator, d = h.ccclass, f = h.property, v = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.lblPage = null;
e.btnNext = null;
e.btnBack = null;
e.pageIndex = 1;
e.maxPage = 1;
e.maxTotalRecord = 15;
return e;
}
e.prototype.onLoad = function() {
this.content.removeAllChildren();
this.template.active = !1;
this.listUserInRooms = [];
this.pageIndex = 1;
this.maxTotalRecord = 15;
this.onLoadData();
};
e.prototype.onClose = function() {
u.default.instance.showLive();
this.hide();
};
e.prototype.actBackPage = function() {
lngui.UIWaitingLayout.showWaiting();
this.pageIndex--;
this.pageIndex <= 1 && (this.pageIndex = 1);
this.loadDataOnList();
};
e.prototype.actNextPage = function() {
lngui.UIWaitingLayout.showWaiting();
this.pageIndex++;
this.pageIndex >= this.maxPage && (this.pageIndex = this.maxPage);
this.loadDataOnList();
};
e.prototype.loadDataOnList = function() {
var t = this.listUserInRooms;
this.maxPage = Math.round(this.listUserInRooms.length / this.maxTotalRecord) + 1;
var e = (this.pageIndex - 1) * this.maxTotalRecord, o = t.slice(e, e + this.maxTotalRecord);
this.content.removeAllChildren();
this.template.active = !1;
for (var i = 0; i < o.length; i++) if (null != o[i]) {
var n = cc.instantiate(this.template), c = n.children[0];
c.children[0].getComponent(cc.Sprite).spriteFrame = r.default.instance.getSprAvatar(o[i].Account.Avatar);
c.children[1].getComponent(cc.Label).string = l.default.Utils.getInstance().formatName(o[i].Account.NickName);
c.children[2].getComponent(cc.Label).string = a.default.formatNumber(o[i].Account.Balance);
n.active = !0;
n.parent = this.content;
}
this.onChangeButtonPage();
};
e.prototype.onChangeButtonPage = function() {
this.btnBack.color = cc.Color.WHITE;
this.btnNext.color = cc.Color.WHITE;
this.btnBack.getComponent(cc.Button).interactable = !0;
this.btnNext.getComponent(cc.Button).interactable = !0;
if (this.pageIndex <= 1) {
this.btnBack.color = cc.Color.GRAY;
this.btnBack.getComponent(cc.Button).interactable = !1;
} else if (this.pageIndex >= this.maxPage) {
this.btnNext.color = cc.Color.GRAY;
this.btnNext.getComponent(cc.Button).interactable = !1;
}
this.lblPage.string = this.pageIndex + "/" + this.maxPage;
lngui.UIWaitingLayout.hideWaiting();
};
e.prototype.onLoadData = function() {
lngui.UIWaitingLayout.showWaiting();
var t = this;
this.content.removeAllChildren();
this.template.active = !1;
s.default.sendRequest("GET", p.default.App.HOST_SicboLive.host, "api/Sicbo/GetPlayersNotInGame", null, function(e, o) {
if (e) {
t.onClose();
u.default.instance.showMsg("Hệ thống đang bận, vui lòng tải lại sau!");
} else {
t.listUserInRooms = o;
t.loadDataOnList();
}
});
};
c([ f(cc.Node) ], e.prototype, "content", void 0);
c([ f(cc.Node) ], e.prototype, "template", void 0);
c([ f(cc.Label) ], e.prototype, "lblPage", void 0);
c([ f(cc.Node) ], e.prototype, "btnNext", void 0);
c([ f(cc.Node) ], e.prototype, "btnBack", void 0);
return c([ d ], e);
}(lngui.UIPopup);
o.default = v;
cc._RF.pop();
}, {
"../../../framework/common/Utils": void 0,
"../SicboLive.Assets": "SicboLive.Assets",
"../SicboLive.Common": "SicboLive.Common",
"../SicboLive.Config": "SicboLive.Config",
"../SicboLive.Controller": "SicboLive.Controller",
"../network/SicboLive.Http": "SicboLive.Http"
} ],
"SicboLive.Player": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a8996anjtFE57i2CEcwAuuo", "SicboLive.Player");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../framework/common/Utils"), s = t("./SicboLive.Assets"), r = t("./SicboLive.Common"), l = t("./SicboLive.InfoView"), p = cc._decorator, u = p.ccclass, h = p.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbSID = null;
e.lbName = null;
e.lbNickname = null;
e.lbChips = null;
e.Avatar = null;
e.animation = null;
e.nodeChat = null;
e.avatar = null;
e.bubble = null;
e.nodeEmotion = null;
e.skeEmotion = null;
e.lbBubbleChat = null;
e.nodeWin = null;
e.lbWin = null;
e.animLbWin = null;
e.nodeInfo = null;
e.position = null;
return e;
}
e.prototype.onLoad = function() {
this.animation = this.node.getComponent(cc.Animation);
this.nodeChat = this.node.getChildByName("chat");
this.nodeEmotion = this.nodeChat.getChildByName("emotion");
this.bubble = this.nodeChat.getChildByName("bubble");
this.skeEmotion = this.bubble.getComponent(sp.Skeleton);
this.lbBubbleChat = this.bubble.getComponentInChildren(cc.Label);
this.nodeWin = this.node.getChildByName("win");
this.nodeInfo = this.node.getChildByName("ava_money");
this.lbWin = this.node.getChildByName("lbWin").getComponent(cc.Label);
this.animLbWin = this.node.getComponentInChildren(cc.Animation);
this.nodeChat.active = !1;
this.nodeInfo.active = !1;
};
e.prototype.setPosition = function(t) {
this.position = t;
};
e.prototype.resetPlayerResultUI = function() {
this.nodeWin.active = !1;
this.lbWin.node.active = !1;
};
e.prototype.playerResultUI = function(t, e) {
this.nodeWin.active = !1;
if (t) {
this.nodeWin.active = !0;
this.lbWin.node.active = !0;
this.lbWin.string = "+" + a.default.formatNumber(e);
}
};
e.prototype.updateChip = function(t) {
this.userInfo.Balance = t;
this.lbChips.string = (this.userInfo.AccountID, l.default.instance.getAccountIdIsMe(), 
a.default.formatNumber(this.userInfo.Balance));
};
e.prototype.registerPlayer = function(t) {
t.Avatar > 14 && (t.Avatar = 1);
this.userInfo = t;
this.Avatar.getComponent(cc.Sprite).spriteFrame = s.default.instance.getSprAvatar(this.userInfo.Avatar);
this.lbNickname.string = r.default.Utils.getInstance().formatName(this.userInfo.NickName);
this.lbChips.string = this.userInfo.AccountID == l.default.instance.getAccountIdIsMe() ? a.default.formatNumber(this.userInfo.Balance) : a.default.formatNumber(this.userInfo.Balance < 0 ? -1 * this.userInfo.Balance : this.userInfo.Balance);
this.nodeInfo.active = !0;
};
e.prototype.unRegisterPlayer = function() {
this.Avatar.getComponent(cc.Sprite).spriteFrame = s.default.instance.getSprAvatar(0);
this.nodeInfo.active = !1;
};
e.prototype.updateConnectionStatus = function() {};
e.prototype.updatePlayerStatus = function(t) {
this.node.opacity = t ? 255 : 150;
};
e.prototype.showEmotion = function() {};
e.prototype.showBubbleChat = function(t) {
var e = this;
this.nodeChat.active = !0;
this.bubble.active = !0;
this.nodeEmotion.active = !1;
this.lbBubbleChat.string = t[1];
setTimeout(function() {
if (e.node) {
e.nodeChat.active = !1;
e.bubble.active = !1;
}
}, 2500);
};
c([ h(cc.Label) ], e.prototype, "lbSID", void 0);
c([ h(cc.Label) ], e.prototype, "lbName", void 0);
c([ h(cc.Label) ], e.prototype, "lbNickname", void 0);
c([ h(cc.Label) ], e.prototype, "lbChips", void 0);
c([ h(cc.Node) ], e.prototype, "Avatar", void 0);
return c([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../framework/common/Utils": void 0,
"./SicboLive.Assets": "SicboLive.Assets",
"./SicboLive.Common": "SicboLive.Common",
"./SicboLive.InfoView": "SicboLive.InfoView"
} ],
"SicboLive.ResultView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "baf7eCoH+xEPZytl17WY66P", "SicboLive.ResultView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./SicboLive.Common"), s = t("./SicboLive.Controller"), r = t("./SicboLive.InfoView"), l = t("./SicboLive.InputView"), p = t("./SicboLive.TouchMove"), u = cc._decorator, h = u.ccclass, d = u.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeDia = null;
e.animationBat = null;
e.spriteVis = [];
e.sfVis = [];
e.animResult = null;
e.allNodeGate = [];
e.currentState = -1;
e.nodeResult = null;
e.nodeViParent = null;
e.batNanPos = null;
e.positionDefaultPlayAnimationDia = null;
e.positionDefaultDia = null;
e.animationXocXoc = null;
e.animationMoBat = null;
e.animationDia = null;
e.animationDiaNan = null;
e.resultNormal = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.currentState = -1;
this.nodeResult = this.animResult.node;
this.nodeViParent = this.spriteVis[0].node.parent;
this.positionDefaultPlayAnimationDia = this.animationBat.position;
this.positionDefaultDia = this.nodeDia.position;
this.animationXocXoc = this.animationBat.children[0].getComponent(sp.Skeleton);
this.animationMoBat = this.animationBat.children[1].getComponent(sp.Skeleton);
this.animationDia = this.nodeDia.getComponent(sp.Skeleton);
this.animationDiaNan = this.animationBat.children[2];
this.animationXocXoc.node.active = !1;
this.animationMoBat.node.active = !1;
};
e.prototype.reset = function() {};
e.prototype.nodeFxDisableAll = function() {
this.allNodeGate.forEach(function(t) {
t.stopAllActions();
t.children[0].active = !1;
t.children[1].active = !1;
});
};
e.prototype.nodeGateDisabeClick = function(t) {
this.allNodeGate.forEach(function(e) {
e.getComponent(cc.Button).interactable = t;
});
};
e.prototype.nodeFxGateClick = function(t) {
t > 45 ? t -= 27 : t > 16 && t < 31 && (t -= 12);
var e = this.allNodeGate[t].children[1];
e.stopAllActions();
e.active = !0;
e.opacity = 0;
var o = cc.sequence(cc.fadeIn(.2), cc.fadeOut(.2), cc.callFunc(function() {
e.active = !1;
}));
e.runAction(o);
};
e.prototype.getPositionFromGate = function(t) {
t > 45 && (t -= 42);
var e = this.allNodeGate[t];
e.parent.convertToWorldSpaceAR(e.position);
return e.position;
};
e.prototype.playFXMoveDia = function(t) {
switch (t) {
case a.default.GAMESTATE.BETTING:
var e = cc.moveTo(.5, this.getPositionRootDia()), o = cc.scaleTo(.5, .5);
this.animationBat.stopAllActions();
this.animationBat.runAction(cc.spawn(e, o));
break;

case a.default.GAMESTATE.OPEN_PLATE:
e = cc.moveTo(.5, this.getPositionDiaShaking()), o = cc.scaleTo(.5, 1);
this.animationBat.stopAllActions();
this.animationBat.runAction(cc.spawn(e, o));
break;

case a.default.GAMESTATE.SHAKING:
var i = this.getPositionRootDia();
e = cc.moveTo(.5, i), o = cc.scaleTo(.5, .5);
this.animationBat.stopAllActions();
this.animationBat.runAction(cc.spawn(e, o));
}
};
e.prototype.getPositionRootDia = function() {
var t = this.positionDefaultPlayAnimationDia.x, e = this.positionDefaultPlayAnimationDia.y + 15;
return cc.v2(t, e);
};
e.prototype.getPositionDiaShaking = function() {
return this.positionDefaultDia;
};
e.prototype.updateResult = function(t, e, o, i) {
var n = this;
switch (parseInt(i)) {
case a.default.GAMESTATE.BETTING:
if (this.currentState != i) {
this.nodeDia.active = !1;
this.animationBat.position = this.getPositionRootDia();
this.animationMoBat.node.active = !0;
this.animationMoBat.clearTracks();
this.animationMoBat.setAnimation(1, "idle", !0);
this.nodeResult.active = !1;
this.nodeViParent.active = !1;
this.nodeFxDisableAll();
}
break;

case a.default.GAMESTATE.OPEN_PLATE:
if (this.currentState != i) {
this.animationMoBat.node.active = !0;
this.playFXMoveDia(i);
this.nodeResult.active = !1;
this.nodeFxDisableAll();
this.updateDice(e);
l.default.instance.isNan ? setTimeout(function() {
if (n.node && n.node.active) {
if (s.default && !s.default.instance.node) return;
n.nodeDia.active = !0;
n.nodeViParent.active = !0;
n.animationMoBat.node.active = !1;
n.animationDiaNan.active = !0;
n.resultNormal = e;
setTimeout(function() {
if (n.node && n.node.active) {
if (s.default && !s.default.instance.node) return;
n.animationDiaNan.active && p.default.instance.callbackNanSuccess();
}
}, 4500);
}
}, 1500) : setTimeout(function() {
if (n.node && n.node.active) {
if (s.default && !s.default.instance.node) return;
n.nodeDia.active = !0;
n.nodeViParent.active = !0;
n.animationMoBat.getComponent(sp.Skeleton);
n.animationMoBat.clearTracks();
n.animationMoBat.setAnimation(1, "anim mo bat", !1);
setTimeout(function() {
if (n.node && n.node.active) {
var t = e.Dice1 + "-" + e.Dice2 + "-" + e.Dice3;
parseInt(e.Dice1 + e.Dice2 + e.Dice3) < 11 ? s.default.instance.showMsg(t + " XỈU") : s.default.instance.showMsg(t + " TÀI");
}
}, 1e3);
setTimeout(function() {
n.node && n.node.active && n.nodeDia.runAction(cc.spawn(cc.scaleTo(.5, .5), cc.moveTo(.5, n.getPositionRootDia()), cc.callFunc(function() {
n.animationMoBat.setAnimation(1, "idle", !0);
n.animationBat.position = n.getPositionRootDia();
n.animationBat.scale = .5;
n.animationMoBat.node.active = !1;
r.default.instance.disPlayStringResult(r.default.instance.resultKey);
})));
}, 2e3);
}
}, 1500);
}
break;

case a.default.GAMESTATE.SHOW_RESULT:
if (this.currentState != i) {
this.updateDice(e);
this.nodeDia.active = !0;
this.nodeViParent.active = !0;
this.playPayFx(t, e);
}
break;

case a.default.GAMESTATE.WAITING:
if (this.currentState != i) {
l.default.instance.initGateChip();
this.nodeFxDisableAll();
this.nodeDia.position = this.positionDefaultDia;
this.nodeDia.scale = 1;
this.nodeDia.active = !1;
this.nodeViParent.active = !1;
this.animationMoBat.node.active = !0;
this.animationMoBat.getComponent(sp.Skeleton);
this.animationMoBat.clearTracks();
this.animationMoBat.setAnimation(1, "idle", !0);
this.updateDice(e);
setTimeout(function() {
s.default && !s.default.instance.node || n.playFXMoveDia(a.default.GAMESTATE.OPEN_PLATE);
}, 2e3);
}
break;

case a.default.GAMESTATE.SHAKING:
if (this.currentState != i) {
this.nodeResult.active = !1;
this.nodeViParent.active = !1;
this.nodeFxDisableAll();
this.nodeDia.active = !1;
this.animationMoBat.node.active = !1;
var c = this.getPositionDiaShaking().x, u = this.getPositionDiaShaking().y;
this.animationXocXoc.node.position = cc.v2(c, u - 80);
this.animationXocXoc.node.active = !0;
this.animationXocXoc.clearTracks();
this.animationXocXoc.setAnimation(1, "anim_hoplac", !1);
setTimeout(function() {
if (!s.default || s.default.instance.node) {
n.animationMoBat.node.active = !0;
n.animationXocXoc.node.active = !1;
n.playFXMoveDia(i);
}
}, 2500);
}
}
this.currentState = i;
};
e.prototype.callbackNanSuccess = function() {
var t = this, e = this.resultNormal.Dice1 + "-" + this.resultNormal.Dice2 + "-" + this.resultNormal.Dice3;
parseInt(this.resultNormal.Dice1 + this.resultNormal.Dice2 + this.resultNormal.Dice3) < 11 ? s.default.instance.showMsg(e + " XỈU") : s.default.instance.showMsg(e + " TÀI");
setTimeout(function() {
s.default && !s.default.instance.node || t.nodeDia.runAction(cc.spawn(cc.scaleTo(.5, .5), cc.moveTo(.5, t.getPositionRootDia()), cc.callFunc(function() {
t.animationMoBat.setAnimation(1, "idle", !0);
t.animationBat.position = t.getPositionRootDia();
t.animationBat.scale = .5;
t.animationMoBat.node.active = !1;
r.default.instance.disPlayStringResult(r.default.instance.resultKey);
})));
}, 1e3);
};
e.prototype.updateDice = function(t) {
if (t) {
var e = t.Dice1, o = t.Dice2, i = t.Dice3;
this.spriteVis[0].getComponent(cc.Sprite).spriteFrame = this.sfVis[parseInt(e) - 1];
this.spriteVis[1].getComponent(cc.Sprite).spriteFrame = this.sfVis[parseInt(o) - 1];
this.spriteVis[2].getComponent(cc.Sprite).spriteFrame = this.sfVis[parseInt(i) - 1];
}
};
e.prototype.playFxResult = function(t) {
if (t) {
var e = t.GatesData;
this.FxGateWinLose(!0, e);
}
};
e.prototype.FxGateWinLose = function(t, e) {
var o = this;
if (null != e && "" != e) if (t) {
var i = e.split(",");
i && i.length > 0 && i.forEach(function(t) {
var e = parseInt(t);
if (!(e > 4 && e < 46 && (e < 17 || e > 30))) {
e >= 46 ? e -= 27 : e >= 17 && e <= 30 && (e -= 12);
o.allNodeGate[e].children[1].active = !0;
o.allNodeGate[e].children[1].opacity = 0;
o.allNodeGate[e].children[1].runAction(cc.sequence(cc.fadeIn(.3), cc.fadeOut(.3)).repeatForever());
}
});
} else {
var n = e.split(",");
n && n.length > 0 && n.forEach(function(t) {
o.allNodeGate[t].children[0].active = !0;
o.allNodeGate[t].children[0].opacity = 100;
});
}
};
e.prototype.playPayFx = function(t, e) {
var o = this, i = e.GatesData, n = e.GatesLose, c = i.split(","), a = n.split(",");
this.fxMoveChip(a, 0);
setTimeout(function() {
s.default && !s.default.instance.node || o.fxMoveChip(c, 1);
}, 1500);
setTimeout(function() {
s.default && !s.default.instance.node || o.fxMoveChip(c, 2);
}, 2500);
};
e.prototype.fxMoveChip = function(t, e) {
var o = l.default.instance.getGateChips();
try {
t.map(function(t) {
o[t] && o[t].length > 0 && o[t].forEach(function(t, o) {
switch (e) {
case 0:
l.default.instance.playFxLost(t, o);
break;

case 1:
l.default.instance.playFXDealerPay(t);
break;

case 2:
l.default.instance.playFxPay(t, o);
}
});
});
} catch (t) {
console.error(t);
}
};
var o;
c([ d(cc.Node) ], e.prototype, "nodeDia", void 0);
c([ d(cc.Node) ], e.prototype, "animationBat", void 0);
c([ d([ cc.Sprite ]) ], e.prototype, "spriteVis", void 0);
c([ d([ cc.SpriteFrame ]) ], e.prototype, "sfVis", void 0);
c([ d(cc.Animation) ], e.prototype, "animResult", void 0);
c([ d([ cc.Node ]) ], e.prototype, "allNodeGate", void 0);
return o = c([ h ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"./SicboLive.Common": "SicboLive.Common",
"./SicboLive.Controller": "SicboLive.Controller",
"./SicboLive.InfoView": "SicboLive.InfoView",
"./SicboLive.InputView": "SicboLive.InputView",
"./SicboLive.TouchMove": "SicboLive.TouchMove"
} ],
"SicboLive.SessionInfo": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "94685nNzGJJ27t8DLjQJ091", "SicboLive.SessionInfo");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../framework/common/Dialog"), s = cc._decorator, r = s.ccclass, l = (s.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onShow = function() {
t.prototype.show.call(this);
};
e.prototype.onClose = function() {
t.prototype.dismiss.call(this);
};
return c([ r ], e);
}(a.default));
o.default = l;
cc._RF.pop();
}, {
"../../../framework/common/Dialog": void 0
} ],
"SicboLive.Settings": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "be9e0y6/ZdM3Y8DzhMgk4j4", "SicboLive.Settings");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../SicboLive.Controller"), s = cc._decorator, r = s.ccclass, l = s.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprMusic = [];
e.sprSound = [];
e.nodeSound = null;
e.nodeMusic = null;
e.nodeDismiss = null;
e.musicBackground = null;
e.chipSelect = null;
e.chipBet = null;
e.popupSoiCau = null;
e.popupConfirm = null;
e.popupRules = null;
e.popupHistory = null;
e.popupTopRank = null;
e.popoupPlayersNotInGame = null;
e.isMusicBackground = !0;
e.isAudio = !0;
e.isOpenMenu = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.onEnable = function() {
this.isMusicBackground = !0;
this.isAudio = !0;
this.isOpenMenu = !1;
this.enableMusicBackground();
};
e.prototype.selectSoiCau = function() {
a.default.instance.showLive();
lngui.UIPopupManager.instance.showPopupFromPrefab(this.popupSoiCau);
};
e.prototype.selectBackGame = function() {
a.default.instance.actBackGame();
};
e.prototype.selectRuleGame = function() {
a.default.instance.showLive();
lngui.UIPopupManager.instance.showPopupFromPrefab(this.popupRules);
};
e.prototype.selectHistoryGame = function() {
a.default.instance.showLive();
lngui.UIPopupManager.instance.showPopupFromPrefab(this.popupHistory);
};
e.prototype.selectTopRankGame = function() {
a.default.instance.showLive();
lngui.UIPopupManager.instance.showPopupFromPrefab(this.popupTopRank);
};
e.prototype.selectSessionInfo = function() {
a.default.instance.showLive();
lngui.UIPopupManager.instance.showPopupFromPrefab(this.popoupPlayersNotInGame);
};
e.prototype.setEnableAudioGame = function(t) {
this.isAudio = t;
};
e.prototype.playAudioClip = function(t) {
if (this.isAudio) switch (t) {
case 0:
this.chipSelect && this.chipSelect.play();
break;

case 1:
this.chipBet && this.chipBet.play();
}
};
e.prototype.enableMusicBackground = function() {
if (this.musicBackground && this.isMusicBackground) {
if (!this.musicBackground.isPlaying) {
this.musicBackground.volume = .3;
this.musicBackground.play();
}
} else this.musicBackground && this.musicBackground.stop();
};
var o;
e.instance = null;
c([ l([ cc.SpriteFrame ]) ], e.prototype, "sprMusic", void 0);
c([ l([ cc.SpriteFrame ]) ], e.prototype, "sprSound", void 0);
c([ l(cc.Node) ], e.prototype, "nodeSound", void 0);
c([ l(cc.Node) ], e.prototype, "nodeMusic", void 0);
c([ l(cc.Node) ], e.prototype, "nodeDismiss", void 0);
c([ l(cc.AudioSource) ], e.prototype, "musicBackground", void 0);
c([ l(cc.AudioSource) ], e.prototype, "chipSelect", void 0);
c([ l(cc.AudioSource) ], e.prototype, "chipBet", void 0);
c([ l(cc.Prefab) ], e.prototype, "popupSoiCau", void 0);
c([ l(cc.Prefab) ], e.prototype, "popupConfirm", void 0);
c([ l(cc.Prefab) ], e.prototype, "popupRules", void 0);
c([ l(cc.Prefab) ], e.prototype, "popupHistory", void 0);
c([ l(cc.Prefab) ], e.prototype, "popupTopRank", void 0);
c([ l(cc.Prefab) ], e.prototype, "popoupPlayersNotInGame", void 0);
return o = c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../SicboLive.Controller": "SicboLive.Controller"
} ],
"SicboLive.TopRank": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c06a14ejFFN5YnXEuKhU0ex", "SicboLive.TopRank");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../framework/common/Utils"), s = t("../network/SicboLive.Http"), r = t("../SicboLive.Config"), l = t("../SicboLive.Controller"), p = cc._decorator, u = p.ccclass, h = p.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.spriteTop = [];
return e;
}
e.prototype.onLoad = function() {
this.content.removeAllChildren();
this.template.active = !1;
this.onLoadData();
};
e.prototype.onClose = function() {
l.default.instance.showLive();
this.hide();
};
e.prototype.onLoadData = function() {
var t = this;
lngui.UIWaitingLayout.showWaiting();
var e = this;
this.content.removeAllChildren();
this.template.active = !1;
s.default.sendRequest("GET", r.default.App.HOST_SicboLive.host, "api/Sicbo/GetBigWinner", null, function(o, i) {
lngui.UIWaitingLayout.hideWaiting();
if (o) {
e.onClose();
l.default.instance.showMsg("Hệ thống đang bận, vui lòng tải lại sau!");
} else for (var n = i, c = 0; c < n.length; c++) {
var s = cc.instantiate(t.template), r = c + 1;
c % 2 == 0 && (s.children[0].active = !1);
r < 5 && (s.children[4].getComponent(cc.Sprite).spriteFrame = t.spriteTop[r - 1]);
s.children[1].getComponent(cc.Label).string = r.toString();
s.children[2].getComponent(cc.Label).string = n[c].DisplayName;
s.children[3].getComponent(cc.Label).string = a.default.formatNumber(n[c].Award);
s.active = !0;
s.parent = e.content;
}
});
};
c([ h(cc.Node) ], e.prototype, "content", void 0);
c([ h(cc.Node) ], e.prototype, "template", void 0);
c([ h(cc.SpriteFrame) ], e.prototype, "spriteTop", void 0);
return c([ u ], e);
}(lngui.UIPopup);
o.default = d;
cc._RF.pop();
}, {
"../../../framework/common/Utils": void 0,
"../SicboLive.Config": "SicboLive.Config",
"../SicboLive.Controller": "SicboLive.Controller",
"../network/SicboLive.Http": "SicboLive.Http"
} ],
"SicboLive.TouchMove": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b4120tKST5CeY135WSArxp0", "SicboLive.TouchMove");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./SicboLive.ResultView"), s = cc._decorator, r = s.ccclass, l = (s.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lastY = 0;
e.lastX = 0;
e.x = 0;
e.y = 0;
e.action = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
var t = this;
this.lastX = this.node.x;
this.lastY = this.node.y;
this.x = this.lastX;
this.y = this.lastY;
this.node.on("touchstart", function() {
t.stopActions();
}, this.node);
this.node.on("touchmove", function(e) {
var o = e.touch.getDelta();
this.x += o.x;
this.y += o.y;
(this.x >= this.lastX + 5 || this.y >= this.lastY + 5 || this.x <= this.lastX - 5 || this.y <= this.lastY - 5) && t.callbackNanSuccess();
}, this.node);
this.node.on("touchend", function() {
this.lastX = this.x;
this.lastY = this.y;
}, this.node);
};
e.prototype.onEnable = function() {
var t = this.lastX, e = this.lastY + 80, o = e - 30, i = cc.moveTo(1, cc.v2(t, e)).easing(cc.easeBackIn()), n = cc.moveTo(1, cc.v2(t, o)).easing(cc.easeBackIn());
this.action = cc.sequence(i, n).repeatForever();
this.node.stopAllActions();
this.node.runAction(this.action);
};
e.prototype.stopActions = function() {
this.node.stopAllActions();
};
e.prototype.setActiveNode = function() {
this.node.position = cc.v2(this.lastX, this.lastY);
};
e.prototype.callbackNanSuccess = function() {
this.x = this.lastX;
this.y = this.lastY;
this.node.active = !1;
this.node.position = cc.v2(this.lastX, this.lastY);
a.default.instance.callbackNanSuccess();
};
var o;
return o = c([ r ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./SicboLive.ResultView": "SicboLive.ResultView"
} ],
ViewLiveSicbo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e9b687QojZDpaUljumWOiGh", "ViewLiveSicbo");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, r = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.webview = null;
return e;
}
e.prototype.start = function() {
this.webview.node.zIndex = -1;
this.webview.url = lngui.ConfigManager.instance.ConfigInfo.VideoLiveTX;
};
e.prototype.getUrl = function(t, e) {
var o = t, i = cc.loader.getXMLHttpRequest();
i.onreadystatechange = function() {
4 === i.readyState && (200 == i.status ? e(i.responseText, i.status) : i.responseText.length > 0 ? e(i.responseText, i.status) : e("error_code : " + i.status, null));
};
i.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
i.timeout = 3e4;
i.open("GET", o, !0);
i.setRequestHeader("Content-Type", "application/json");
i.withCredentials = !0;
i.send();
};
e.prototype.Close = function() {
this.webview.destroy;
lngui.GameCoreManager.instance.onBackToLobby();
};
c([ r(cc.WebView) ], e.prototype, "webview", void 0);
return c([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ]
}, {}, [ "SicboLive.Assets", "SicboLive.ChipItem", "SicboLive.ChipPool", "SicboLive.Common", "SicboLive.Config", "SicboLive.Controller", "SicboLive.InfoView", "SicboLive.InputView", "SicboLive.Player", "SicboLive.PlayerData", "SicboLive.ResultView", "SicboLive.TouchMove", "ViewLiveSicbo", "Sicbo.Chat.NetworkClient", "Sicbo.Chat", "SicboLive.Http", "SicboLive.NetWorkClient", "SicboLive.Network.Clients", "SicboLive.Network.Service", "SicboLive.GraphView", "SicboLive.Guide", "SicboLive.History", "SicboLive.MaxBet", "SicboLive.PlayersNotInGame", "SicboLive.SessionInfo", "SicboLive.TopRank", "SicboLive.ChatController", "SicboLive.ChatListView", "SicboLive.GrahpDiceSumView", "SicboLive.GraphCatCauView", "SicboLive.GraphDice3View", "SicboLive.GraphView100", "SicboLive.Settings" ]);