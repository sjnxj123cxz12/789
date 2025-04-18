window.__require = function t(e, i, n) {
function o(c, a) {
if (!i[c]) {
if (!e[c]) {
var r = c.split("/");
r = r[r.length - 1];
if (!e[r]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(r, !0);
if (s) return s(r, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = r;
}
var l = i[c] = {
exports: {}
};
e[c][0].call(l.exports, function(t) {
return o(e[c][1][t] || t);
}, l, l.exports, t, e, i, n);
}
return i[c].exports;
}
for (var s = "function" == typeof __require && __require, c = 0; c < n.length; c++) o(n[c]);
return o;
}({
DragonTigerHistoryListViewLive: [ function(t, e) {
"use strict";
cc._RF.push(e, "54486Wy4tlPmpiUJKDj68K7", "DragonTigerHistoryListViewLive");
(function() {
cc.DragonTigerHistoryListViewLive = cc.Class({
extends: cc.ListView,
properties: {},
initialize: function(t) {
this.messages = t;
var e = this.messages.length;
this.content.height = e * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, e), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.DragonTigerHistoryItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (n) {
if (c.y < -i && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.DragonTigerHistoryItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.DragonTigerHistoryItem)).itemID + e.length;
a.updateItem(this.messages[r], r);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
DragonTigerSettingRoomViewLive: [ function(t, e) {
"use strict";
cc._RF.push(e, "1e2ebA2O2RPpryXsrjACaOE", "DragonTigerSettingRoomViewLive");
(function() {
cc.DragonTigerSettingRoomViewLive = cc.Class({
extends: cc.Component,
properties: {
animation: cc.Animation,
nodeOffset: cc.Node,
spriteSound: cc.Sprite,
spriteMusic: cc.Sprite,
sfSounds: [ cc.SpriteFrame ],
sfMusics: [ cc.SpriteFrame ]
},
onLoad: function() {
this.openPopup = !1;
},
start: function() {
this.sound = cc.Tool.getInstance().getItem("@Sound") && "true" === cc.Tool.getInstance().getItem("@Sound").toString();
this.music = cc.Tool.getInstance().getItem("@Music") && "true" === cc.Tool.getInstance().getItem("@Music").toString();
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
this.spriteMusic.spriteFrame = this.music ? this.sfMusics[0] : this.sfMusics[1];
cc.AudioController.getInstance().enableSound(this.sound);
cc.AudioController.getInstance().enableMusic(this.music);
},
openSettingClicked: function() {
if (0 == this.openPopup) {
this.openPopup = !0;
this.animation.play("openSettingMenu");
} else {
this.openPopup = !1;
this.animation.play("closeSettingMenu");
}
},
closeSettingClicked: function() {
this.animation.play("closeSettingMenu");
},
soundClicked: function() {
this.sound = !this.sound;
cc.Tool.getInstance().setItem("@Sound", this.sound);
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
cc.AudioController.getInstance().enableSound(this.sound);
},
musicClicked: function() {
this.music = !this.music;
cc.Tool.getInstance().setItem("@Music", this.music);
this.spriteMusic.spriteFrame = this.music ? this.sfMusics[0] : this.sfMusics[1];
cc.AudioController.getInstance().enableMusic(this.music);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
SlotsHistoryItemLive: [ function(t, e) {
"use strict";
cc._RF.push(e, "0edb439qRpD86KlKnt41/0T", "SlotsHistoryItemLive");
(function() {
cc.SlotsHistoryItemLive = cc.Class({
extends: cc.Component,
properties: {
lbSessionID: cc.Label,
lbTime: cc.Label,
lbBet: cc.Label,
lbWin: cc.Label,
jackpotColor: cc.Color,
bigWinColor: cc.Color
},
updateItem: function(t, e) {
this.lbSessionID.string = "#" + t.SpinID;
this.lbTime.string = cc.Tool.getInstance().convertUTCTime(t.CreatedDate);
this.lbBet.string = cc.Tool.getInstance().formatNumber(t.TotalBetValue);
this.lbWin.string = cc.Tool.getInstance().formatNumber(t.TotalPrizeValue);
this.item = t;
this.itemID = e;
},
openDetailClicked: function() {
cc.SlotsHistoryController.getInstance().setSessionDetailData(this.item);
cc.MainController.getInstance().createSessionDetailView();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
ViewLive: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c82a6av8uxJ4IQl1prI3s+W", "ViewLive");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, r = c.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.webview = null;
return e;
}
e.prototype.start = function() {
this.webview.node.zIndex = -1;
this.webview.url = lngui.ConfigManager.instance.ConfigInfo.VideoLiveXD;
};
e.prototype.getUrl = function(t, e) {
var i = t, n = cc.loader.getXMLHttpRequest();
n.onreadystatechange = function() {
4 === n.readyState && (200 == n.status ? e(n.responseText, n.status) : n.responseText.length > 0 ? e(n.responseText, n.status) : e("error_code : " + n.status, null));
};
n.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
n.timeout = 3e4;
n.open("GET", i, !0);
n.setRequestHeader("Content-Type", "application/json");
n.withCredentials = !0;
n.send();
};
e.prototype.Close = function() {
this.webview.destroy;
lngui.GameCoreManager.instance.onBackToLobby();
};
s([ r(cc.WebView) ], e.prototype, "webview", void 0);
return s([ a ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {} ],
"XX.Chat.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "eae28nSwBNNAZ5psoaLUh+l", "XX.Chat.NetworkClient");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("./XXChat"), a = cc._decorator, r = a.ccclass, u = (a.property, function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.isConnect = !1;
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
i._instance = this;
};
e.prototype.connect = function() {
var t = {
url: "https://chat." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8092/signalr/negotiate",
hub: "chatHub",
gate: "sieuno1.club"
};
cc.systemEvent.off("OnChatXocDiaSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatXocDiaSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatXocDiaSocketEvent", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
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
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, i = 0; i < e; ++i) {
var n = t.M[i];
if (n.A && null != n.A[0] && null != n.A[0]) {
var o = n.A[0];
switch (n.M) {
case "receiveMessage":
c.default.instance.receiveMessage(o);
break;

case "listLastMessages":
c.default.instance.listLastMessages(o);
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
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off("OnChatXocDiaSocketEvent", this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var i;
e._instance = null;
return i = s([ r ], e);
}(cc.Component));
i.default = u;
cc._RF.pop();
}, {
"./XXChat": "XXChat"
} ],
XXChat: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7586eeN65ZBirigZn7z5Kb6", "XXChat");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("./XX.Chat.NetworkClient"), a = cc._decorator, r = a.ccclass, u = a.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.listChat = null;
e.scrollListChat = null;
e.txtInputChat = null;
return e;
}
i = e;
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
c.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, "xocdialive" ]);
this.txtInputChat.string = "";
}
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var i = t[e], n = i.n, o = i.c;
if ("SYSTEM" !== n && "SYSTEM" !== o) {
if (void 0 === n || void 0 === o) return;
if (n.length > 0 && o.length > 0) {
var s = o, c = cc.instantiate(this.templateMessage), a = i.n, r = n;
c.active = !0;
a = (a.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), r);
c.getComponent(cc.Label).string = a + ": " + s;
if (1 == t.IsVipTx) {
c.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
c.getChildByName("lb_nameVip").getComponent(cc.Label).string = a + ": ";
c.off(cc.Node.EventType.SIZE_CHANGED);
c.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (c.getContentSize().height - c.getChildByName("lb_nameVip").getContentSize().height) / 2;
c.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
c.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
c.getChildByName("lb_name").getComponent(cc.Label).string = a + ": ";
c.off(cc.Node.EventType.SIZE_CHANGED);
c.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (c.getContentSize().height - c.getChildByName("lb_name").getContentSize().height) / 2;
c.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(c);
}
this.scrollListChat.scrollToBottom();
}
}
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, i = t.c;
if ("SYSTEM" !== e && "SYSTEM" !== i && void 0 !== e && void 0 !== i) {
if (e.length > 0 && i.length > 0) {
var n = i, o = cc.instantiate(this.templateMessage), s = t.n, c = e;
o.active = !0;
s = (s.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), c);
o.getComponent(cc.Label).string = s + ": " + n;
if (1 == t.IsVipTx) {
o.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
o.getChildByName("lb_nameVip").getComponent(cc.Label).string = s + ": ";
o.off(cc.Node.EventType.SIZE_CHANGED);
o.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (o.getContentSize().height - o.getChildByName("lb_nameVip").getContentSize().height) / 2;
o.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
o.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
o.getChildByName("lb_name").getComponent(cc.Label).string = s + ": ";
o.off(cc.Node.EventType.SIZE_CHANGED);
o.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (o.getContentSize().height - o.getChildByName("lb_name").getContentSize().height) / 2;
o.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(o);
}
this.scrollListChat.scrollToBottom();
}
};
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
i._instance = this;
this.txtInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.onKeyDown = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var i;
e._instance = null;
s([ u(cc.Node) ], e.prototype, "templateMessage", void 0);
s([ u(cc.Node) ], e.prototype, "listChat", void 0);
s([ u(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
s([ u(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
return i = s([ r ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {
"./XX.Chat.NetworkClient": "XX.Chat.NetworkClient"
} ],
XXLiveAssets: [ function(t, e) {
"use strict";
cc._RF.push(e, "716e009qC1Kq5Z99eEPqVO4", "XXLiveAssets");
(function() {
cc.XXLiveAssets = cc.Class({
extends: cc.Component,
properties: {
sfChips: [ cc.SpriteFrame ],
sfNans: [ cc.SpriteFrame ],
sfAvatarDef: cc.SpriteFrame,
sfBacks: [ cc.SpriteFrame ],
sfDots: [ cc.SpriteFrame ],
bmfWin: cc.BitmapFont,
bmfLose: cc.BitmapFont
},
onLoad: function() {
cc.XXLiveController.getInstance().setXXAssets(this);
},
getWinFont: function() {
return this.bmfWin;
},
getLoseFont: function() {
return this.bmfLose;
},
getChips: function() {
return this.sfChips;
},
getNans: function() {
return this.sfNans;
},
getAvatarDef: function() {
return this.sfAvatarDef;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveChipItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "768a0p3DkNJSJlR3yKgcVKd", "XXLiveChipItem");
(function() {
cc.XXLiveChipItem = cc.Class({
extends: cc.Component,
properties: {
spriteChip: cc.Sprite
},
onLoad: function() {
this.duration = .3;
this.betIndex = -1;
this.playerId = 0;
this.position = null;
},
setChip: function(t) {
this.chipIndex = t;
this.spriteChip.spriteFrame = cc.XXLiveController.getInstance().getChips()[t];
},
moveTo: function(t) {
this.node.opacity = 100;
var e = cc.moveTo(this.duration, t);
e.easing(cc.easeOut(1));
var i = cc.callFunc(this.moveFinished, null, this.node);
this.node.runAction(cc.sequence(e, i));
},
setPosition: function(t) {
this.node.position = t;
},
moveToEnd: function(t) {
if (this.node) {
this.node.opacity = 100;
var e = cc.moveTo(.5, t);
e.easing(cc.easeOut(1));
var i = cc.callFunc(this.moveToEndFinished, null, this.node), n = cc.fadeOut();
this.node.runAction(cc.sequence(e, n, i));
}
},
moveFinished: function(t) {
t.opacity = 255;
},
moveToEndFinished: function(t) {
try {
setTimeout(function() {
cc.XXLiveController.getInstance().putToPool(t);
}.bind(this), 500);
} catch (t) {}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveChipPool: [ function(t, e) {
"use strict";
cc._RF.push(e, "f308cnY9A1AP4wdDQuySHkW", "XXLiveChipPool");
(function() {
cc.XXLiveChipPool = cc.Class({
extends: cc.Component,
properties: {
prefab: cc.Prefab
},
onLoad: function() {
this.createNodePool();
cc.XXLiveController.getInstance().setXXChipPool(this);
},
createNodePool: function() {
this.nodePool = new cc.NodePool();
for (var t = 0; t < 10; ++t) this.nodePool.put(cc.instantiate(this.prefab));
},
putToPool: function(t) {
try {
this.nodePool && this.nodePool.put(t);
} catch (t) {}
},
clearPool: function() {
this.nodePool && this.nodePool.clear();
},
createChip: function() {
return this.nodePool.size() > 0 ? this.nodePool.get() : cc.instantiate(this.prefab);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveConnectionStatus: [ function(t, e) {
"use strict";
cc._RF.push(e, "4f1a5rcw9VIGq/qj68bN9bX", "XXLiveConnectionStatus");
(function() {
cc.XXConnectionStatus = cc.Enum({
DISCONNECTED: 0,
CONNECTED: 1,
REGISTER_LEAVE_GAME: 2
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveController: [ function(t, e) {
"use strict";
cc._RF.push(e, "24616uoZLxHBaIIJOQ26KBp", "XXLiveController");
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
e.prototype.setAvatarDef = function(t) {
return this.avatarDef = t;
};
e.prototype.getAvatarDef = function() {
return this.avatarDef;
};
e.prototype.setAvatars = function(t) {
return this.avatars = t;
};
e.prototype.getAvatars = function() {
return this.avatars;
};
e.prototype.setXXView = function(t) {
return this.xxView = t;
};
e.prototype.setXXSoiCauView = function(t) {
return this.xxSoiCauView = t;
};
e.prototype.setXXAssets = function(t) {
return this.xxAssets = t;
};
e.prototype.setXXChipPool = function(t) {
return this.xxChipPool = t;
};
e.prototype.setXXInfoView = function(t) {
return this.xxInfoView = t;
};
e.prototype.setXXInputView = function(t) {
return this.xxInputView = t;
};
e.prototype.setXXResultView = function(t) {
return this.xxResultView = t;
};
e.prototype.setIsNan = function(t) {
return this.isNan = t;
};
e.prototype.getIsNan = function() {
return this.isNan;
};
e.prototype.setLastBetData = function(t) {
return this.lastBetData = t;
};
e.prototype.getLastBetData = function() {
return this.lastBetData;
};
e.prototype.setSID = function(t) {
return this.sID = t;
};
e.prototype.getSID = function() {
return this.sID;
};
e.prototype.getAssets = function() {
return this.xxAssets;
};
e.prototype.getWinFont = function() {
return this.xxAssets.getWinFont();
};
e.prototype.getLoseFont = function() {
return this.xxAssets.getLoseFont();
};
e.prototype.getChips = function() {
return this.xxAssets.getChips();
};
e.prototype.getNans = function() {
return this.xxAssets.getNans();
};
e.prototype.getAvatarDef = function() {
return this.xxAssets.getAvatarDef();
};
e.prototype.sendRequestOnHub = function(t, e, i) {
if (this.xxView) return this.xxView.sendRequestOnHub(t, e, i);
};
e.prototype.joinGame = function(t) {
return this.xxInfoView.joinGame(t);
};
e.prototype.playerJoin = function(t) {
return this.xxInfoView.playerJoin(t);
};
e.prototype.playerLeave = function(t) {
this.xxInfoView.playerLeave(t);
this.xxView.playerLeave(t);
};
e.prototype.updateConnectionStatus = function(t) {
return this.xxInfoView.updateConnectionStatus(t);
};
e.prototype.updatePlayerStatus = function(t) {
return this.xxInfoView.updatePlayerStatus(t);
};
e.prototype.updateInfoCurrPlayer = function(t) {
return this.xxInfoView.updateInfoCurrPlayer(t);
};
e.prototype.updateChip = function(t, e) {
t === lngui.UserManager.instance.mainUserInfo.AccountID && (lngui.UserManager.instance.mainUserInfo.Money = e);
return this.xxInfoView.updateChip(t, e);
};
e.prototype.getPositions = function() {
return this.xxInfoView.getPositions();
};
e.prototype.updateSessionId = function(t) {
return this.xxInfoView.updateSessionId(t);
};
e.prototype.updateInfo = function(t, e, i) {
return this.xxInfoView.updateInfo(t, e, i);
};
e.prototype.getIndexUIBetByAccID = function(t) {
return this.xxInfoView.getIndexUIBetByAccID(t);
};
e.prototype.getIndexUIBetByPosition = function(t) {
return this.xxInfoView.getIndexUIBetByPosition(t);
};
e.prototype.getTime = function() {
return this.xxInfoView.getTime();
};
e.prototype.playerShowBubbleChat = function(t) {
return this.xxInfoView.playerShowBubbleChat(t);
};
e.prototype.registerPlayer = function(t) {
return this.xxInfoView.registerPlayer(t);
};
e.prototype.unRegisterPlayer = function(t) {
return this.xxInfoView.unRegisterPlayer(t);
};
e.prototype.resetPlayersResultUI = function() {
return this.xxInfoView.resetPlayersResultUI();
};
e.prototype.totalUserWin = function(t) {
return this.xxInfoView.totalUserWin(t);
};
e.prototype.playerResultUI = function(t, e, i) {
return this.xxInfoView.playerResultUI(t, e, i);
};
e.prototype.summaryPlayer = function(t) {
return this.xxInfoView.summaryPlayer(t);
};
e.prototype.vipPlayer = function(t) {
return this.xxInfoView.vipPlayer(t);
};
e.prototype.winResultVip = function(t) {
return this.xxInfoView.winResultVip(t);
};
e.prototype.winResult = function(t) {
return this.xxInfoView.winResult(t);
};
e.prototype.updateTimer = function(t) {
return this.xxInfoView.updateTimer(t);
};
e.prototype.playerBet = function(t) {
return this.xxInputView.playerBet(t);
};
e.prototype.updateInput = function(t) {
return this.xxInputView.updateInput(t);
};
e.prototype.getGateChips = function() {
return this.xxInputView.getGateChips();
};
e.prototype.showLastInput = function(t) {
return this.xxInputView.showLastInput(t);
};
e.prototype.getPlayerBets = function() {
return this.xxInputView.getPlayerBets();
};
e.prototype.playFxDealerPay = function(t) {
return this.xxInputView.playFxDealerPay(t);
};
e.prototype.initGateChip = function() {
return this.xxInputView.initGateChip();
};
e.prototype.playFxPay = function(t) {
return this.xxInputView.playFxPay(t);
};
e.prototype.playFxLost = function(t) {
return this.xxInputView.playFxLost(t);
};
e.prototype.playFxUserBet = function(t, e) {
return this.xxInputView.playFxUserBet(t, e);
};
e.prototype.resetInput = function() {
return this.xxInputView.resetInput();
};
e.prototype.activeAllButtonBet = function(t) {
return this.xxInputView.activeAllButtonBet(t);
};
e.prototype.clearAllChip = function() {
return this.xxInputView.clearAllChip();
};
e.prototype.updateResult = function(t, e, i, n, o) {
return this.xxResultView.updateResult(t, e, i, n, o);
};
e.prototype.draw = function(t) {
return this.xxSoiCauView.draw(t);
};
e.prototype.resetDraw = function() {
return this.xxSoiCauView.resetDraw();
};
e.prototype.createChip = function() {
return this.xxChipPool.createChip();
};
e.prototype.putToPool = function(t) {
return this.xxChipPool.putToPool(t);
};
e.prototype.clearPool = function() {
return this.xxChipPool.clearPool();
};
e.prototype.updatePositionPlayerUI = function(t) {
return this.positionsUI = t;
};
e.prototype.getPositionsUI = function() {
return this.positionsUI;
};
e.prototype.initLogBet = function() {
return this.logBet = [];
};
e.prototype.setLogBet = function(t) {
return this.logBet.push(t);
};
e.prototype.getLogBet = function() {
return this.logBet;
};
return e;
}();
cc.XXLiveController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveFX: [ function(t, e) {
"use strict";
cc._RF.push(e, "42ef3FSildIX7IItTyU+J4o", "XXLiveFX");
(function() {
cc.XX_FX = cc.Enum({
LOSE: 0,
DEALER_PAY: 1,
PAY: 3
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveGate: [ function(t, e) {
"use strict";
cc._RF.push(e, "9cef5XOVFpKrb2JJJ3rr1M8", "XXLiveGate");
(function() {
cc.XXGate = cc.Enum({
ODD: 1,
THREE_UP: 2,
THREE_DOWN: 3,
EVEN: 4,
FOUR_UP: 5,
FOUR_DOWN: 6
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveGetBigWinnerCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "ac7edK67PxC46KXbeS+Akjf", "XXLiveGetBigWinnerCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.XOC_XOC, "api/XocDia/GetBigWinner", function(e) {
var i = JSON.parse(e);
return t.onXXGetBigWinnerResponse(i);
});
};
return t;
}();
cc.XXLiveGetBigWinnerCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveGroupItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "7d261Ziz09HrJyK1iXxU8Ls", "XXLiveGroupItem");
(function() {
cc.XXLiveGroupItem = cc.Class({
extends: cc.Component,
properties: {
avatar: cc.Avatar,
lbSId: cc.Label,
lbNickName: cc.Label,
lbBalance: cc.Label,
lbSTT: cc.Label
},
updateItem: function(t, e) {
var i = t.Account, n = i.Avatar;
n <= 0 && (n = 1);
this.lbSTT.string = e + 1;
this.lbSId.string = cc.Config.getInstance().getServiceNameNoFormat(i.ServiceID);
this.avatar.setAvatar(cc.XXController.getInstance().getAvatars()[n]);
this.lbNickName.string = i.NickName;
this.lbBalance.string = cc.Tool.getInstance().formatNumber(i.Balance);
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveGroupUserListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "bdb87cYK49C4JXvmWqJ3UhC", "XXLiveGroupUserListView");
(function() {
cc.XXLiveGroupUserListView = cc.Class({
extends: cc.ListView,
properties: {},
initialize: function(t) {
this.messages = t;
var e = this.messages.length;
this.content.height = e * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, e), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.XXLiveGroupItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (n) {
if (c.y < -i && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.XXLiveGroupItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XXLiveGroupItem)).itemID + e.length;
a.updateItem(this.messages[r], r);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveGroupUserView: [ function(t, e) {
"use strict";
cc._RF.push(e, "c924dBmvNNO3K04adCaooXl", "XXLiveGroupUserView");
(function() {
cc.XXLiveGroupUserView = cc.Class({
extends: cc.Component,
properties: {
groupUserListView: cc.XXGroupUserListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 999;
},
onEnable: function() {
var t = this;
cc.director.getScheduler().schedule(function() {
t.getGroupUser();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getGroupUser: function() {
new cc.XXGroupUserCommand().execute(this);
},
onGetGroupUserResponse: function(t) {
var e = t;
if (null !== e && e.length > 0) {
this.groupUserListView.resetList();
this.groupUserListView.initialize(e);
}
},
closeClicked: function() {
this.groupUserListView.resetList();
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.XXLivePopupController.getInstance().destroyGroupUserView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveHelpView: [ function(t, e) {
"use strict";
cc._RF.push(e, "d8eed1FOdRCF71iYYxMT8bQ", "XXLiveHelpView");
(function() {
cc.XXLiveHelpView = cc.Class({
extends: cc.PopupBase,
properties: {},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 9999;
},
closeFinished: function() {
cc.XXLivePopupController.getInstance().destroyHelpView();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveHistoryCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "e3422XLrj1Fn43HRJvCXnCE", "XXLiveHistoryCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = "api/XocDia/GetHistory";
console.log("getHistory =====================>" + e);
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.XOC_XOC, e, function(e) {
var i = JSON.parse(e);
return t.onXXGetHistoryResponse(i);
});
};
return t;
}();
cc.XXLiveGetHistoryCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveHistoryItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "8fe45HtaRNK+KVALJeS3QLa", "XXLiveHistoryItem");
(function() {
cc.XXLiveHistoryItem = cc.Class({
extends: cc.Component,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbSide: cc.Label,
lbResult: cc.Label,
lbBet: cc.Label,
lbWin: cc.Label
},
updateItem: function(t, e) {
this.lbSession.string = "#" + t.SessionID;
this.lbTime.string = cc.Tool.getInstance().convertUTCTime(t.CreateTime);
var i = "";
switch (parseInt(t.GateID)) {
case cc.XXGate.ODD:
i = "LẺ";
break;

case cc.XXGate.THREE_UP:
i = "LẺ (3 TRẮNG)";
break;

case cc.XXGate.THREE_DOWN:
i = "LẺ (3 ĐEN)";
break;

case cc.XXGate.EVEN:
i = "CHẴN";
break;

case cc.XXGate.FOUR_UP:
i = "CHẴN (4 TRẮNG)";
break;

case cc.XXGate.FOUR_DOWN:
i = "CHẴN (4 ĐEN)";
}
this.lbSide.string = i;
var n = "", o = t.GatesData;
if (o) {
var s = o.split(","), c = s.includes(cc.XXGate.ODD + "") ? "LẺ" : "CHẴN";
if (1 == s.length) n = "CHẮN (2 ĐEN, 2 TRẮNG)"; else {
s.map(function(t) {
var e = "";
switch (parseInt(t)) {
case cc.XXGate.THREE_UP:
e = " (3 TRẮNG, 1 ĐEN)";
break;

case cc.XXGate.THREE_DOWN:
e = " (3 ĐEN, 1 TRẮNG)";
break;

case cc.XXGate.FOUR_UP:
e = " (4 TRẮNG)";
break;

case cc.XXGate.FOUR_DOWN:
e = " (4 ĐEN)";
}
c += e;
});
n += c;
}
}
this.lbResult.string = n;
this.lbBet.string = cc.Tool.getInstance().formatNumber(t.Bet);
this.lbWin.string = cc.Tool.getInstance().formatNumber(t.Award);
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveHistoryListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "d514e/peyJD0panO2RETaGF", "XXLiveHistoryListView");
(function() {
cc.XXLiveHistoryListView = cc.Class({
extends: cc.ListView,
properties: {},
initialize: function(t) {
this.messages = t;
var e = this.messages.length;
this.content.height = e * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, e), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.XXLiveHistoryItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (n) {
if (c.y < -i && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.XXLiveHistoryItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XXLiveHistoryItem)).itemID + e.length;
a.updateItem(this.messages[r], r);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveHistoryView: [ function(t, e) {
"use strict";
cc._RF.push(e, "9a620TxM8BHJoRq1SJYgtvL", "XXLiveHistoryView");
(function() {
cc.XXLiveHistoryView = cc.Class({
extends: cc.PopupBase,
properties: {
XXHistoryListView: cc.XXLiveHistoryListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 9999;
},
onEnable: function() {
var t = this;
cc.director.getScheduler().schedule(function() {
t.getHistory();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getHistory: function() {
console.log("getHistory =====================>");
new cc.XXGetHistoryCommand().execute(this);
},
onXXGetHistoryResponse: function(t) {
var e = t;
if (null !== e && e.length > 0) {
this.XXHistoryListView.resetList();
this.XXHistoryListView.initialize(e);
}
},
closeClicked: function() {
this.XXHistoryListView.resetList();
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.XXLivePopupController.getInstance().destroyHistoryView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveHubName: [ function(t, e) {
"use strict";
cc._RF.push(e, "c7e6eCLwd5CNpiVTjR65fXO", "XXLiveHubName");
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
XXLiveInfoView: [ function(t, e) {
"use strict";
cc._RF.push(e, "d7ccdvUhCFN14TMBuojOIrr", "XXLiveInfoView");
(function() {
cc.XXLiveInfoView = cc.Class({
extends: cc.Component,
properties: {
lbSID: cc.Label,
lbTimer: cc.Label,
lbInfo: cc.Label,
progressTimer: cc.ProgressBar,
lbTotalUser: cc.Label,
lbTotalUserWin: cc.Label,
xxPlayers: [ cc.XXLivePlayer ],
nodetooltip: cc.Node,
lblmsg: cc.Label,
skewaiting: sp.Skeleton
},
onLoad: function() {
this.nodetooltip.active = !1;
this.interval = null;
this.timeBet = 54;
this.reset();
cc.XXLiveController.getInstance().setXXInfoView(this);
this.maxPlayer = this.xxPlayers.length;
this.animInfo = this.lbInfo.node.parent.getComponent(cc.Animation);
this.currPlayer = this.xxPlayers[0];
},
updateInfoCurrPlayer: function(t) {
this.currPlayer.registerPlayer(t);
},
joinGame: function(t) {
this.positions = t.Positions;
this.countPlayer = 0;
this.positionsUI = [ 0 ];
this.onwerIndex = 0;
this.positionsUI[this.countPlayer] = lngui.UserManager.instance.mainUserInfo.AccountID;
this.countPlayer++;
for (var e = 0; e < this.maxPlayer; e++) if ((n = this.positions[e]) > 0 && n !== lngui.UserManager.instance.mainUserInfo.AccountID) {
this.positionsUI[this.countPlayer] = n;
this.countPlayer++;
}
var i = t.Players;
for (e = 0; e < this.maxPlayer; e++) {
var n;
(n = this.positions[e]) > 0 && this.registerPlayer(this.getIndexUIBetByAccID(n), i[n].Account);
}
cc.XXLiveController.getInstance().updatePositionPlayerUI(this.positionsUI);
},
playerJoin: function(t) {
for (var e = 0; e < this.maxPlayer; e++) if (0 === this.positionsUI[e]) {
this.positionsUI[e] = t.Account.AccountID;
this.registerPlayer(e, t.Account);
break;
}
},
playerLeave: function(t) {
if (this.positionsUI) {
var e = t[0];
this.unRegisterPlayer(this.getIndexUIBetByAccID(e));
for (var i = -1, n = 0; n < this.maxPlayer; n++) if (e === this.positionsUI[n]) {
i = n;
break;
}
this.positionsUI[i] = 0;
}
},
updateConnectionStatus: function(t) {
if (this.positionsUI) {
var e = t[0], i = t[1];
this.xxPlayers[this.getIndexUIBetByAccID(e)].updateConnectionStatus(i);
i === cc.XXConnectionStatus.REGISTER_LEAVE_GAME && e === lngui.UserManager.instance.mainUserInfo.AccountID && lngui.UIScreenManager.instance.popToRootScreen();
}
},
updatePlayerStatus: function(t) {
this.positionsUI && this.xxPlayers[0].updatePlayerStatus(t);
},
summaryPlayer: function(t) {
this.lbTotalUser.string = t;
},
vipPlayer: function(t) {
this.positionsUI = [ 0 ];
this.positionsUI[0] = lngui.UserManager.instance.mainUserInfo.AccountID;
this.positionsUI.forEach(function(e, i) {
if (0 != e) try {
var n = t.filter(function(t) {
return t.AccountID == e;
});
if (n.length > 0 && 0 != i) {
this.xxPlayers[i].registerPlayer(n[0].Account);
this.xxPlayers[i].resetPlayerResultUI();
}
} catch (t) {
console.error(t);
} else this.xxPlayers[i].unRegisterPlayer();
}, this);
cc.XXLiveController.getInstance().updatePositionPlayerUI(this.positionsUI);
},
totalUserWin: function(t) {
this.lbTotalUserWin.string = "+" + cc.Tool.getInstance().formatNumber(t);
this.lbTotalUserWin.font = cc.XXLiveController.getInstance().getWinFont();
this.lbTotalUserWin.node.active = !0;
this.lbTotalUserWin.node.scaleY = 0;
this.lbTotalUserWin.node.getComponent(cc.Animation).play("xxWin");
},
winResultVip: function() {},
winResult: function(t) {
if (this.currPlayer) {
this.currPlayer.playerResultUI(!0, t.Award);
this.currPlayer.updateChip(t.Balance);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t.Balance);
}
},
updateChip: function(t, e) {
0 == this.positionsUI.indexOf(t) && this.xxPlayers[this.getIndexUIBetByAccID(t)].updateChip(e);
},
getPositions: function() {
return this.positionsUI;
},
getIndexUIBetByAccID: function(t) {
var e = -1;
try {
for (var i = 0; i < this.maxPlayer; i++) if (this.positionsUI[i] === t) {
e = i;
break;
}
} catch (t) {}
return e;
},
getIndexUIBetByPosition: function(t) {
var e = t;
e > this.onwerIndex ? (e += this.onwerIndex) >= this.maxPlayer && (e -= this.maxPlayer - 1) : e < this.onwerIndex ? (e -= this.onwerIndex) < 0 && (e = this.maxPlayer + e) : e = 0;
return e;
},
resetPlayersResultUI: function() {
this.lbTotalUserWin.node.active = !1;
for (var t = 0; t < this.maxPlayer; t++) this.xxPlayers[t].resetPlayerResultUI();
},
playerResultUI: function(t, e, i) {
this.xxPlayers[t].playerResultUI(e, i);
},
registerPlayer: function(t, e) {
this.xxPlayers[t].registerPlayer(e);
},
unRegisterPlayer: function(t) {
this.xxPlayers[t].unRegisterPlayer();
},
playerShowBubbleChat: function(t) {
cc.ChatRoomController.getInstance().checkIsEmotion(t) ? this.xxPlayers.forEach(function(e) {
e.nickName === t[0] && e.showEmotion(cc.ChatRoomController.getInstance().getIndexEmotion(t), t);
}) : this.xxPlayers.forEach(function(e) {
e.nickName === t[0] && e.showBubbleChat(t);
});
},
reset: function() {
this.isTimer = !1;
this.timer = 0;
this.currentState = 999;
null !== this.interval && clearInterval(this.interval);
},
startTimer: function(t) {
null !== this.interval && clearInterval(this.interval);
var e = this;
this.timer = t;
this.isTimer = !0;
this.updateTimer(t);
this.interval = setInterval(function() {
if (e.isTimer) {
e.timer -= 1;
e.updateTimer(e.timer);
}
}, 1e3);
},
updateTimer: function(t) {
if (this.lbTimer) {
var e = t;
this.timeInt = e;
if (e > 0) {
this.lbTimer.string = e;
e <= 3 && (this.currentState, cc.XXLiveState.BETTING);
}
}
},
getTime: function() {
return this.timeInt;
},
updateSessionId: function(t) {
this.lbSID.string = "#" + t;
},
updateInfo: function(t, e) {
var i = this;
switch (e) {
case cc.XXLiveState.BETTING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXLiveController.getInstance().setSID(t.SessionID);
this.progressTimer.node.parent.active = !0;
this.resetPlayersResultUI();
this.skewaiting.node.active = !1;
this.lbTimer.node.active = !0;
this.lbInfo.string = "Đặt cửa";
this.animInfo.play("xxInfo");
this.nodetooltip.active = !0;
this.lblmsg.string = "Đã bắt đầu, vui lòng đặt cược";
setTimeout(function() {
i.nodetooltip.active = !1;
}, 1e3);
}
break;

case cc.XXLiveState.OPEN_PLATE:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXLiveController.getInstance().setSID(t.SessionID);
this.progressTimer.node.parent.active = !1;
this.resetPlayersResultUI();
this.lbTimer.node.active = !1;
this.skewaiting.node.active = !0;
this.lbInfo.string = "Mở bát";
this.animInfo.play("xxInfo");
this.nodetooltip.active = !0;
this.lblmsg.string = "Chờ mở thưởng";
setTimeout(function() {
i.nodetooltip.active = !1;
}, 1e3);
}
break;

case cc.XXLiveState.SHOW_RESULT:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXLiveController.getInstance().setSID(t.SessionID);
this.progressTimer.node.parent.active = !0;
this.lbTimer.node.active = !1;
this.skewaiting.node.active = !0;
this.lbInfo.string = "Kết quả";
this.animInfo.play("xxInfo");
}
break;

case cc.XXLiveState.WAITING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXLiveController.getInstance().setSID(t.SessionID);
this.progressTimer.node.parent.active = !1;
this.resetPlayersResultUI();
this.lbTimer.node.active = !1;
this.skewaiting.node.active = !0;
}
break;

case cc.XXLiveState.SHAKING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXLiveController.getInstance().clearAllChip();
this.progressTimer.node.parent.active = !1;
this.resetPlayersResultUI();
this.lbTimer.node.active = !1;
this.skewaiting.node.active = !0;
}
}
this.currentState = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveInputView: [ function(t, e) {
"use strict";
cc._RF.push(e, "620fe/zM9FFW59jr1/Wxev/", "XXLiveInputView");
var i = t("XXLivePlayerData").players;
(function() {
cc.XXLiveInputView = cc.Class({
extends: cc.Component,
properties: {
nodeParentChip: cc.Node,
btnBetVals: [ cc.Button ],
btnChips: [ cc.Button ],
btnX2: cc.Button,
btnRepeat: cc.Button,
spriteNan: cc.Sprite,
lbTotalBets: [ cc.Label ],
lbTotalUserBets: [ cc.Label ],
nodetooltip: cc.Node,
lblmsg: cc.Label
},
onLoad: function() {
cc.XXLiveController.getInstance().setXXInputView(this);
this.isNan = !1;
cc.XXLiveController.getInstance().setIsNan(this.isNan);
this.nodeChipPress = [];
var t = this;
this.btnChips.forEach(function(e) {
t.nodeChipPress.push(e.node.getChildByName("chip_press"));
});
this.minXs = [ 55, -370, 35, -370, -165, 235 ];
this.maxXs = [ 375, -245, 160, -50, -40, 360 ];
this.minYs = [ -295, -385, -385, -295, -385, -385 ];
this.maxYs = [ -195, -335, -335, -195, -335, -335 ];
this.rootDealerPos = cc.v2(0, 136);
this.chipIndex = 1;
this.betVals = [ 1e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7 ];
this.processBetValUI();
cc.XXLiveController.getInstance().setLastBetData(null);
this.resetTotalBetUI();
this.timePerBet = 100;
this.currentState = -1;
this.timeouts = [];
this.posGroupUser = cc.v2(-193, 219);
this.initGateChip();
cc.XXLiveController.getInstance().initLogBet();
},
initGateChip: function() {
this.gateChips = [];
for (var t = 1; t <= 6; t++) this.gateChips[t] = [];
},
playerBet: function(t) {
if (cc.XXLiveController.getInstance().getPositions()) {
var e = t[0], i = t[1], n = t[2], o = t[3];
cc.XXLiveController.getInstance().updateChip(e, o);
this.playFxUserBet(cc.XXLiveController.getInstance().getIndexUIBetByAccID(e), n, this.getChipIndexFromValue(i), !0);
this.totalBets[n - 1] += i;
this.lbTotalBets[n - 1].string = cc.Tool.getInstance().formatNumber(this.totalBets[n - 1]);
if (e === lngui.UserManager.instance.mainUserInfo.AccountID) {
cc.XXLiveController.getInstance().setLogBet({
AccountID: e,
Amount: i,
Gate: n
});
this.totalUserBets[n - 1] += i;
this.lbTotalUserBets[n - 1].string = cc.Tool.getInstance().formatNumber(this.totalUserBets[n - 1]);
this.lbTotalUserBets[n - 1].node.parent.active = !0;
console.log("bet ----\x3e amount ===> " + i);
}
}
},
reBet: function(t, e) {
var i = this, n = this, o = 0;
t.forEach(function(t) {
o += t.Amount;
});
e && (o *= 2);
if (o > lngui.UserManager.instance.mainUserInfo.Money) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Số dư không đủ.";
setTimeout(function() {
i.nodetooltip.active = !1;
}, 1e3);
} else {
var s = 0, c = 0, a = 0, r = 0, u = 0, l = 0;
t.forEach(function(t) {
switch (t.Gate) {
case cc.XXGate.ODD:
s += t.Amount;
break;

case cc.XXGate.THREE_UP:
c += t.Amount;
break;

case cc.XXGate.THREE_DOWN:
a += t.Amount;
break;

case cc.XXGate.EVEN:
r += t.Amount;
break;

case cc.XXGate.FOUR_UP:
u += t.Amount;
break;

case cc.XXGate.FOUR_DOWN:
l += t.Amount;
}
});
for (var h = 0, p = 0, d = 0, f = 0, g = 0, v = 0, m = 0, X = 0, I = 0, b = [ s, c, a, r, u, l ], y = [], C = 0; C < 6; C++) {
h = 0;
p = 0;
f = 0;
f = 0;
g = 0;
v = 0;
m = 0;
X = 0;
I = 0;
o = b[C];
e && (o *= 2);
h = Math.floor(o / 1e7);
if ((o -= 1e7 * h) > 0) {
p = Math.floor(o / 5e6);
o -= 5e6 * p;
}
if (o > 0) {
d = Math.floor(o / 1e6);
o -= 1e6 * d;
}
if (o > 0) {
g = Math.floor(o / 5e5);
o -= 5e5 * f;
}
if (o > 0) {
g = Math.floor(o / 1e5);
o -= 1e5 * g;
}
if (o > 0) {
v = Math.floor(o / 5e4);
o -= 5e4 * v;
}
if (o > 0) {
m = Math.floor(o / 1e4);
o -= 1e4 * m;
}
if (o > 0) {
X = Math.floor(o / 5e3);
o -= 5e3 * X;
}
o > 0 && (I = Math.floor(o / 1e3));
for (var L = 0; L < h; L++) y.push({
Gate: C + 1,
Amount: 1e7
});
for (L = 0; L < p; L++) y.push({
Gate: C + 1,
Amount: 5e7
});
for (L = 0; L < d; L++) y.push({
Gate: C + 1,
Amount: 1e7
});
for (L = 0; L < f; L++) y.push({
Gate: C + 1,
Amount: 5e5
});
for (L = 0; L < g; L++) y.push({
Gate: C + 1,
Amount: 1e5
});
for (L = 0; L < v; L++) y.push({
Gate: C + 1,
Amount: 5e4
});
for (L = 0; L < m; L++) y.push({
Gate: C + 1,
Amount: 1e4
});
for (L = 0; L < X; L++) y.push({
Gate: C + 1,
Amount: 5e3
});
for (L = 0; L < I; L++) y.push({
Gate: C + 1,
Amount: 1e3
});
}
this.count = 0;
this.timeouts = [];
y.forEach(function(t) {
n.timeouts.push(setTimeout(function() {
n.currentState === cc.XXLiveState.BETTING && n.sendRequestReBet(t);
}, n.timePerBet * n.count));
n.count++;
});
}
},
sendRequestReBet: function(t) {
var e = this;
if (lngui.UserManager.instance.mainUserInfo.Money < t.Amount) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Số dư không đủ.";
setTimeout(function() {
e.nodetooltip.active = !1;
}, 1e3);
} else cc.XXLiveController.getInstance().sendRequestOnHub(cc.MethodHubName.BET, t.Amount, t.Gate);
},
showLastInput: function(t) {
var e = this;
t.forEach(function(t) {
t.forEach(function(t) {
e.playFxUserBet(cc.XXLiveController.getInstance().getIndexUIBetByAccID(t.AccountID), t.BetSide, e.getChipIndexFromValue(t.BetValue), !1);
e.totalBets[t.BetSide - 1] += t.BetValue;
e.lbTotalBets[t.BetSide - 1].string = cc.Tool.getInstance().formatNumber(e.totalBets[t.BetSide - 1]);
if (t.AccountID === lngui.UserManager.instance.mainUserInfo.AccountID) {
cc.XXLiveController.getInstance().setLogBet({
AccountID: t.AccountID,
Amount: t.BetValue,
Gate: t.BetSide
});
e.totalUserBets[t.BetSide - 1] += t.BetValue;
e.lbTotalUserBets[t.BetSide - 1].string = cc.Tool.getInstance().formatNumber(e.totalUserBets[t.BetSide - 1]);
e.lbTotalUserBets[t.BetSide - 1].node.parent.active = !0;
}
});
});
},
getPlayerBets: function() {
return i;
},
getChipIndexFromValue: function(t) {
for (var e = 0, i = this.betVals.length, n = 0; n < i; n++) if (t === this.betVals[n]) {
e = n;
break;
}
return e;
},
activeAllButtonBet: function(t) {
this.btnBetVals.forEach(function(e) {
e.interactable = t;
});
this.btnX2.interactable = t;
this.btnRepeat.interactable = t;
},
processBetValUI: function() {
for (var t = 0; t < 5; t++) {
this.btnChips[t].interactable = !0;
this.nodeChipPress[t].active = !1;
}
this.btnChips[this.chipIndex].interactable = !1;
this.nodeChipPress[this.chipIndex].active = !0;
},
resetInput: function() {
i.forEach(function(t) {
t.chips = [];
});
},
clearAllTimeOut: function() {
this.timeouts.forEach(function(t) {
clearTimeout(t);
});
this.timeouts = [];
},
resetTotalBetUI: function() {
this.totalBets = [ 0, 0, 0, 0, 0, 0 ];
this.totalUserBets = [ 0, 0, 0, 0, 0, 0 ];
this.lbTotalBets.forEach(function(t) {
t.string = "";
});
this.lbTotalUserBets.forEach(function(t) {
t.node.parent.active = !1;
});
},
betOfAccount: function() {},
saveLastBetData: function() {
var t = [].concat(cc.XXLiveController.getInstance().getLogBet());
cc.XXLiveController.getInstance().setLastBetData(t);
},
updateInput: function(t) {
switch (t) {
case cc.XXLiveState.BETTING:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.resetInput();
this.resetTotalBetUI();
this.activeAllButtonBet(!0);
}
break;

case cc.XXLiveState.OPEN_PLATE:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.activeAllButtonBet(!1);
this.saveLastBetData();
}
break;

case cc.XXLiveState.SHOW_RESULT:
this.currentState !== t && this.activeAllButtonBet(!1);
break;

case cc.XXLiveState.WAITING:
if (this.currentState !== t) {
this.resetInput();
this.activeAllButtonBet(!1);
cc.XXLiveController.getInstance().initLogBet();
}
break;

case cc.XXLiveState.SHAKING:
if (this.currentState !== t) {
this.resetTotalBetUI();
this.resetInput();
this.activeAllButtonBet(!1);
}
}
this.currentState = t;
},
getGateChips: function() {
return this.gateChips;
},
playFxUserBet: function(t, e, n, o) {
cc.AudioController.getInstance().playSound(cc.AudioTypes.CHIP_BET);
var s = e - 1, c = this.minXs[s], a = this.maxXs[s], r = this.minYs[s], u = this.maxYs[s], l = c + Math.floor(Math.random() * Math.abs(a - c)), h = r + Math.floor(Math.random() * Math.abs(u - r)), p = cc.XXLiveController.getInstance().createChip();
p.parent = this.nodeParentChip;
var d;
d = -1 != t ? i[t].position : this.posGroupUser;
p.position = d;
var f = p.getComponent(cc.XXLiveChipItem);
f.betIndex = s;
f.gate = e;
f.playerId = t;
f.position = d;
f.setChip(n);
o ? f.moveTo(cc.v2(l, h)) : f.setPosition(cc.v2(l, h));
this.gateChips[e].push(f);
},
playFxDealerPay: function(t) {
var e = cc.XXLiveController.getInstance().createChip();
e.parent = this.nodeParentChip;
e.position = this.rootDealerPos;
var i = e.getComponent(cc.XXLiveChipItem);
i.betIndex = t.betIndex;
i.playerId = t.playerId;
i.position = t.position;
i.setChip(t.chipIndex);
this.gateChips[t.gate].push(i);
var n = t.betIndex, o = this.minXs[n], s = this.maxXs[n], c = this.minYs[n], a = this.maxYs[n], r = o + Math.floor(Math.random() * Math.abs(s - o)), u = c + Math.floor(Math.random() * Math.abs(a - c));
i.moveTo(cc.v2(r, u));
},
playFxPay: function(t) {
t.moveToEnd(t.position);
},
playFxLost: function(t) {
t.moveToEnd(this.rootDealerPos);
},
betValueClicked: function(t, e) {
this.chipIndex = parseInt(e.toString());
this.processBetValUI();
},
betClicked: function(t, e) {
var i = this;
if (cc.XXLiveController.getInstance().getTime() <= 3) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Đã hết thời gian đặt cửa.";
setTimeout(function() {
i.nodetooltip.active = !1;
}, 1e3);
cc.XXLiveController.getInstance().activeAllButtonBet(!1);
} else {
this.indexBet = parseInt(e.toString());
var n = this.betVals[this.chipIndex];
if (lngui.UserManager.instance.mainUserInfo.Money < n) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Số dư không đủ.";
setTimeout(function() {
i.nodetooltip.active = !1;
}, 1e3);
} else {
cc.XXLiveController.getInstance().sendRequestOnHub(cc.MethodHubName.BET, n, this.indexBet + 1);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
}
}
},
nanClicked: function() {
this.isNan = !this.isNan;
this.isNan ? this.spriteNan.spriteFrame = cc.XXLiveController.getInstance().getNans()[0] : this.spriteNan.spriteFrame = cc.XXLiveController.getInstance().getNans()[1];
cc.XXLiveController.getInstance().setIsNan(this.isNan);
},
x2Clicked: function() {
var t = this;
if (cc.XXLiveController.getInstance().getTime() <= 3) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Đã hết thời gian đặt cửa.";
setTimeout(function() {
t.nodetooltip.active = !1;
}, 1e3);
cc.XXLiveController.getInstance().activeAllButtonBet(!1);
} else {
var e = cc.XXLiveController.getInstance().getLastBetData();
if (e && e.length > 0) {
this.reBet(e, !0);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
} else cc.PopupController.getInstance().showSlotsMessage("Không có dữ liệu đặt của phiên trước.");
}
},
repeatClicked: function() {
var t = this;
if (cc.XXLiveController.getInstance().getTime() <= 3) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Đã hết thời gian đặt cửa.";
setTimeout(function() {
t.nodetooltip.active = !1;
}, 1e3);
cc.XXLiveController.getInstance().activeAllButtonBet(!1);
} else {
var e = cc.XXLiveController.getInstance().getLastBetData();
if (e && e.length > 0) {
this.reBet(e);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
} else cc.PopupController.getInstance().showSlotsMessage("Không có dữ liệu đặt của phiên trước.");
}
},
clearAllChip: function() {
this.nodeParentChip.removeAllChildren(!0);
}
});
}).call(void 0);
cc._RF.pop();
}, {
XXLivePlayerData: "XXLivePlayerData"
} ],
XXLivePlayerData: [ function(t, e) {
"use strict";
cc._RF.push(e, "78dd9kC2FBKWKNaQCd3tfAg", "XXLivePlayerData");
var i = [ {
accID: 0,
balance: 0,
avatarId: 1,
indexBet: 0,
position: cc.v2(-473, -361),
chips: []
}, {
accID: 0,
balance: 500,
avatarId: 3,
indexBet: 0,
position: cc.v2(-578, -208),
chips: []
}, {
accID: 0,
balance: 1500,
avatarId: 2,
indexBet: 0,
position: cc.v2(-578, -30),
chips: []
}, {
accID: 0,
balance: 2e3,
avatarId: 1,
indexBet: 0,
position: cc.v2(-523, 141),
chips: []
}, {
accID: 0,
balance: 1e4,
avatarId: 6,
indexBet: 0,
position: cc.v2(509, 141),
chips: []
}, {
accID: 0,
balance: 5e3,
avatarId: 5,
indexBet: 0,
position: cc.v2(574, -30),
chips: []
}, {
accID: 0,
balance: 9e3,
avatarId: 4,
indexBet: 0,
position: cc.v2(578, -208),
chips: []
} ];
e.exports = {
players: i
};
cc._RF.pop();
}, {} ],
XXLivePlayerStatus: [ function(t, e) {
"use strict";
cc._RF.push(e, "88de4U52GROLqZk0liIeul0", "XXLivePlayerStatus");
(function() {
cc.XXPlayerStatus = cc.Enum({
NOT_INGAME: "-1",
VIEWER: "0",
INGAME: "1",
WAITING: "2"
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLivePlayer: [ function(t, e) {
"use strict";
cc._RF.push(e, "19253k+TZZGlK5aClBXrLgq", "XXLivePlayer");
(function() {
cc.XXLivePlayer = cc.Class({
extends: cc.Component,
properties: {
lbSID: cc.Label,
lbName: cc.Label,
nickName: ""
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
var t = this.node.getChildByName("chat");
this.nodeEmotion = t.getChildByName("emotion");
this.nodeBubble = t.getChildByName("bubble");
this.skeEmotion = this.nodeEmotion.getComponent(sp.Skeleton);
this.lbBubbleChat = this.nodeBubble.getComponentInChildren(cc.Label);
t.active = !1;
this.avatar = this.node.getComponentInChildren(cc.Avatar);
this.nodeWin = this.node.getChildByName("win");
this.nodeLose = this.node.getChildByName("lose");
this.lbWin = this.node.getComponentInChildren(cc.Label);
this.animLbWin = this.node.getComponentInChildren(cc.Animation);
this.nodeInfo = this.node.getChildByName("ava_money");
this.lbChip = this.nodeInfo.getChildByName("lbChip").getComponent(cc.LabelIncrement);
this.nodeInfo.active = !1;
},
resetPlayerResultUI: function() {
this.nodeWin.active = !1;
this.nodeLose.active = !1;
this.lbWin.node.active = !1;
},
playerResultUI: function(t, e) {
this.nodeWin.active = !1;
this.nodeLose.active = !1;
if (t) {
this.nodeWin.active = !0;
this.lbWin.string = "+" + cc.Tool.getInstance().formatNumber(e);
this.lbWin.font = cc.XXLiveController.getInstance().getWinFont();
} else {
this.nodeLose.active = !0;
this.lbWin.string = cc.Tool.getInstance().formatNumber(e);
this.lbWin.font = cc.XXLiveController.getInstance().getLoseFont();
}
this.lbWin.node.active = !0;
this.lbWin.node.scaleY = 0;
this.animLbWin.play("xxWin");
},
updateChip: function(t) {
this.lbChip.tweenValueto(t);
},
registerPlayer: function(t) {
var e = t.Avatar;
e <= 0 && (e = 1);
this.nickName = t.NickName;
this.avatar.setAvatar(cc.XXLiveController.getInstance().getAvatars()[e]);
if (t.ServiceID) {
this.lbSID.string = "";
this.lbName.string = cc.Config.getInstance().formatName(t.NickName, 7);
} else {
this.lbSID.string = "";
this.lbName.string = cc.Config.getInstance().formatName(t.NickName, 10);
}
this.lbChip.tweenValueto(t.Balance);
this.nodeInfo.active = !0;
},
unRegisterPlayer: function() {
this.avatar.setAvatar(cc.XXLiveController.getInstance().getAvatarDef());
this.nodeInfo.active = !1;
},
updateConnectionStatus: function(t) {
switch (t) {
case cc.ConnectionStatus.DISCONNECTED:
case cc.ConnectionStatus.CONNECTED:
}
},
updatePlayerStatus: function(t) {
this.playerStatus = t.toString();
t.toString() === cc.PlayerStatus.INGAME ? this.node.opacity = 255 : this.node.opacity = 150;
},
showEmotion: function(t, e) {
this.nodeBubble.active = !1;
this.nodeEmotion.active = !0;
this.skeEmotion.clearTracks();
this.skeEmotion.setToSetupPose();
15 === t ? this.skeEmotion.setAnimation(t, "16-extreme-sexy-girl", !0) : this.skeEmotion.setAnimation(t, e[1], !0);
this.animation.play("showBubbleChat");
},
showBubbleChat: function(t) {
this.nodeBubble.active = !0;
this.nodeEmotion.active = !1;
this.lbBubbleChat.string = t[1];
this.animation.play("showBubbleChat");
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLivePopupController: [ function(t, e) {
"use strict";
cc._RF.push(e, "c045eXFt3BLjYpr/jMzWlCP", "XXLivePopupController");
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
e.prototype.setXXPopupView = function(t) {
return this.xxPopupView = t;
};
e.prototype.createSessionDetailView = function() {
return this.xxPopupView.createSessionDetailView();
};
e.prototype.destroySessionDetailView = function() {
return this.xxPopupView.destroySessionDetailView();
};
e.prototype.createTopView = function() {
return this.xxPopupView.createTopView();
};
e.prototype.destroyTopView = function() {
return this.xxPopupView.destroyTopView();
};
e.prototype.createHelpView = function() {
return this.xxPopupView.createHelpView();
};
e.prototype.destroyHelpView = function() {
return this.xxPopupView.destroyHelpView();
};
e.prototype.createHistoryView = function() {
return this.xxPopupView.createHistoryView();
};
e.prototype.destroyHistoryView = function() {
return this.xxPopupView.destroyHistoryView();
};
e.prototype.createGroupUserView = function() {
return this.xxPopupView.createGroupUserView();
};
e.prototype.destroyGroupUserView = function() {
return this.xxPopupView.destroyGroupUserView();
};
e.prototype.setDetailIndex = function(t) {
return this.detailIndex = t;
};
e.prototype.getDetailIndex = function() {
return this.detailIndex;
};
e.prototype.setGameHistory = function(t) {
return this.gameHistory = t;
};
e.prototype.getGameHistory = function() {
return this.gameHistory;
};
return e;
}();
cc.XXLivePopupController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLivePopupView: [ function(t, e) {
"use strict";
cc._RF.push(e, "94b6dmMxCtACLG5lUV6Rf9I", "XXLivePopupView");
(function() {
cc.XXLivePopupView = cc.Class({
extends: cc.Component,
properties: {
prefabGroupUser: cc.Prefab,
prefabBetLines: cc.Prefab,
prefabHelp: cc.Prefab,
prefabHistory: cc.Prefab,
prefabTop: cc.Prefab,
prefabSessionDetail: cc.Prefab
},
onLoad: function() {
cc.XXLivePopupController.getInstance().setXXPopupView(this);
},
createGroupUserView: function() {
this.nodeGroupUser = this.createView(this.prefabGroupUser);
},
destroyGroupUserView: function() {
this.nodeGroupUser && this.nodeGroupUser.destroy();
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
XXLivePortalName: [ function(t, e) {
"use strict";
cc._RF.push(e, "726a07BV/pG74XgyMwMFRWx", "XXLivePortalName");
(function() {
cc.PortalName = cc.Enum({
BLOCK_BUSTER: "X6",
BLOCK_BUSTER_2: "X6-1",
BLOCK_BUSTER_3: "X6-2",
BLOCK_BUSTER_4: "X6-3"
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveResultView: [ function(t, e) {
"use strict";
cc._RF.push(e, "f6ccc0IQrdL54b/stMDdlYJ", "XXLiveResultView");
(function() {
cc.XXLiveResultView = cc.Class({
extends: cc.Component,
properties: {
nodeBatNan: cc.Node,
nodeDia: cc.Node,
animationBat: sp.Skeleton,
spriteVis: [ cc.Sprite ],
sfVis: [ cc.SpriteFrame ],
animResult: cc.Animation,
nodeChan: cc.Node,
nodeLe: cc.Node,
nodeChan1: cc.Node,
nodeChan2: cc.Node,
nodeChan3: cc.Node,
nodeLe1: cc.Node,
nodeLe2: cc.Node,
nodeLe3: cc.Node
},
onLoad: function() {
cc.XXLiveController.getInstance().setXXResultView(this);
this.currentState = -1;
this.nodeResult = this.animResult.node;
this.nodeFxResult = this.nodeChan1.parent;
this.nodeViParent = this.spriteVis[0].node.parent;
this.batNanPos = cc.v2(0, 43);
},
reset: function() {},
updateResult: function(t, e, i, n, o) {
if (this.nodeBatNan) {
switch (n) {
case cc.XXLiveState.BETTING:
if (this.currentState !== n) {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.animationBat.node.active = !1;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(1, "Idle_2", !0);
this.nodeResult.active = !1;
this.nodeViParent.active = !1;
this.nodeFxResult.active = !1;
}
break;

case cc.XXLiveState.OPEN_PLATE:
if (this.currentState !== n) {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.animationBat.node.active = !1;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(1, "Idle_2", !0);
this.nodeResult.active = !1;
this.nodeViParent.active = !1;
this.nodeFxResult.active = !1;
this.playFxResult(e, i, o);
}
break;

case cc.XXLiveState.SHOW_RESULT:
if (this.currentState !== n) {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeViParent.active = !0;
this.animationBat.node.active = !1;
this.playPayFx(t, i, e);
}
break;

case cc.XXLiveState.WAITING:
if (this.currentState !== n) {
cc.XXLiveController.getInstance().initGateChip();
this.nodeFxResult.active = !1;
}
break;

case cc.XXLiveState.SHAKING:
if (this.currentState !== n) {
this.nodeResult.active = !1;
this.nodeViParent.active = !1;
this.nodeFxResult.active = !1;
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.animationBat.node.active = !1;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(2, "lac", !1);
}
}
this.currentState = n;
}
},
playFxResult: function(t, e, i) {
var n = this;
this.nodeFxResult.active = !0;
this.nodeResult.active = !0;
this.nodeViParent.active = !1;
this.animResult.stop();
this.nodeChan1.active = !1;
this.nodeChan2.active = !1;
this.nodeChan3.active = !1;
this.nodeLe1.active = !1;
this.nodeLe2.active = !1;
this.nodeLe3.active = !1;
if (cc.XXLiveController.getInstance().getIsNan() && !i) {
this.nodeDia.active = !1;
this.nodeBatNan.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.animationBat.node.active = !1;
setTimeout(function() {
n.nodeBatNan.active = !1;
}, 5e3);
} else {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.animationBat.node.active = !1;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(3, "mo", !1);
}
},
playPayFx: function(t, e, i) {
var n = cc.XXLiveController.getInstance().getGateChips(), o = this, s = parseInt(i.BigGate), c = parseInt(i.SmallGate);
switch (s) {
case cc.XXGate.EVEN:
o.animResult.play("chan_blink");
break;

case cc.XXGate.ODD:
o.animResult.play("le_blink");
}
switch (c) {
case cc.XXGate.THREE_UP:
o.nodeLe1.active = !0;
o.nodeChan3.active = !0;
break;

case cc.XXGate.THREE_DOWN:
o.nodeLe1.active = !0;
o.nodeLe3.active = !0;
break;

case cc.XXGate.FOUR_DOWN:
o.nodeChan1.active = !0;
o.nodeLe2.active = !0;
break;

case cc.XXGate.FOUR_UP:
o.nodeChan1.active = !0;
o.nodeChan2.active = !0;
break;

default:
o.nodeChan1.active = !0;
}
var a = e.split(","), r = 0;
a.forEach(function(t) {
o.spriteVis[r].spriteFrame = o.sfVis[parseInt(t)];
r++;
});
var u = [ s, c ], l = [];
n.map(function(t, e) {
u.includes(e) || l.push(e);
}, this);
this.fxMoveChip(l, cc.XX_FX.LOSE);
setTimeout(function() {
this.fxMoveChip(u, cc.XX_FX.DEALER_PAY);
}.bind(this), 1e3);
setTimeout(function() {
this.fxMoveChip(u, cc.XX_FX.PAY);
}.bind(this), 2e3);
},
fxMoveChip: function(t, e) {
try {
var i = cc.XXLiveController.getInstance().getGateChips();
t.map(function(t) {
i[t] && i[t].length && i[t].forEach(function(t) {
switch (e) {
case cc.XX_FX.LOSE:
cc.XXLiveController.getInstance().playFxLost(t);
break;

case cc.XX_FX.DEALER_PAY:
cc.XXLiveController.getInstance().playFxDealerPay(t);
break;

case cc.XX_FX.PAY:
cc.XXLiveController.getInstance().playFxPay(t);
}
});
});
} catch (t) {}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveResult: [ function(t, e) {
"use strict";
cc._RF.push(e, "fe799fAiHdJRJaa28bX6Bq2", "XXLiveResult");
(function() {
cc.XXResult = cc.Enum({
EVEN_FOUR_DOWN: 0,
ODD_THREE_DOWN: 1,
EVEN: 2,
ODD_THREE_UP: 3,
EVEN_FOUR_UP: 4
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveServiceId: [ function(t, e) {
"use strict";
cc._RF.push(e, "c2072o8ildLQp6j0OiCDgey", "XXLiveServiceId");
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
XXLiveServiceName: [ function(t, e) {
"use strict";
cc._RF.push(e, "bb088L7i35DUpR6/q0W8xr8", "XXLiveServiceName");
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
XXLiveSoiCauView: [ function(t, e) {
"use strict";
cc._RF.push(e, "d6d4877VrZC6a7wIB2j55Vx", "XXLiveSoiCauView");
(function() {
cc.XXLiveSoiCauView = cc.Class({
extends: cc.Component,
properties: {
animation: cc.Animation,
nodeParent: cc.Node,
nodeEvenTemp: cc.Node,
nodeOddTemp: cc.Node,
lbEven: cc.Label,
lbFourUp: cc.Label,
lbFourDown: cc.Label,
lbOdd: cc.Label,
lbThreeUp: cc.Label,
lbThreeDown: cc.Label,
sfDots: [ cc.SpriteFrame ]
},
onLoad: function() {
cc.XXLiveController.getInstance().setXXSoiCauView(this);
this.rootPosX = -181.5;
this.rootPosY = -47;
this.spaceX = 19;
this.spaceY = 19;
this.maxItemPerCol = 6;
},
convertToMatrix: function(t) {
var e = this, i = this.getSide(t[0]), n = [], o = [];
t.forEach(function(t) {
var s = e.getSide(t);
if (o.length === e.maxItemPerCol) {
n.push(o);
(o = []).push(t);
i = s;
} else if (s === i) o.push(t); else {
n.push(o);
i = s;
(o = []).push(t);
}
});
n.push(o);
return n;
},
getSide: function(t) {
switch (t) {
case cc.XXResult.EVEN:
case cc.XXResult.EVEN_FOUR_DOWN:
case cc.XXResult.EVEN_FOUR_UP:
return "EVEN";

case cc.XXResult.ODD_THREE_DOWN:
case cc.XXResult.ODD_THREE_UP:
return "ODD";
}
},
draw: function(t) {
if (0 !== t.length) {
this.even = 0;
this.fourUp = 0;
this.fourDown = 0;
this.odd = 0;
this.threeUp = 0;
this.threeDown = 0;
for (var e = 0; e < t.length; e++) this.createNode(t[e]);
}
},
drawCol: function(t, e) {
for (var i = this.rootPosX + e * this.spaceX, n = this.rootPosY + (this.maxItemPerCol - t.length) * this.spaceY, o = 0; o < t.length; o++) this.createNode(t[o], cc.v2(i, n + this.spaceY * o));
},
createNode: function(t) {
switch (t) {
case cc.XXResult.EVEN:
var e = cc.instantiate(this.nodeEvenTemp);
this.even++;
break;

case cc.XXResult.EVEN_FOUR_DOWN:
e = cc.instantiate(this.nodeEvenTemp);
this.even++;
this.fourDown++;
break;

case cc.XXResult.EVEN_FOUR_UP:
e = cc.instantiate(this.nodeEvenTemp);
this.even++;
this.fourUp++;
break;

case cc.XXResult.ODD_THREE_DOWN:
e = cc.instantiate(this.nodeOddTemp);
this.odd++;
this.threeDown++;
break;

case cc.XXResult.ODD_THREE_UP:
e = cc.instantiate(this.nodeOddTemp);
this.odd++;
this.threeUp++;
}
e.parent = this.nodeParent;
e.getComponent(cc.Sprite).spriteFrame = this.sfDots[t];
this.lbEven.string = this.even;
this.lbFourUp.string = this.fourUp;
this.lbFourDown.string = this.fourDown;
this.lbOdd.string = this.odd;
this.lbThreeUp.string = this.threeUp;
this.lbThreeDown.string = this.threeDown;
},
resetDraw: function() {
for (var t = this.nodeParent.children, e = t.length - 1; e >= 0; e--) this.nodeParent.removeChild(t[e]);
},
hideClicked: function() {
this.animation.play("xxHideSoiCau");
},
showClicked: function() {
this.animation.play("xxShowSoiCau");
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveState: [ function(t, e) {
"use strict";
cc._RF.push(e, "791fbeYDUBJ/5bSTcv+DZbr", "XXLiveState");
(function() {
cc.XXLiveState = cc.Enum({
WAITING: 0,
SHAKING: 1,
BETTING: 2,
OPEN_PLATE: 3,
SHOW_RESULT: 4
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveSubdomainName: [ function(t, e) {
"use strict";
cc._RF.push(e, "a8bedoTwxRJlqBLDYLG2P8R", "XXLiveSubdomainName");
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
DRAGON_BALL: "songoku.",
BUM_BUM: "bumbum.",
COWBOY: "cowboys.",
THUONGHAI: "demthuonghai.",
MONKEY: "monkey.",
XOC_XOC: "xocdia.",
DRAGON_TIGER: "dragon.",
BACCARAT: "baccarat.",
BAUCUA: "baucua.",
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
GAINHAY: "gainhay."
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveTopItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "4d7dbTGIjBKWogSxGRoPH/B", "XXLiveTopItem");
(function() {
cc.XXLiveTopItem = cc.Class({
extends: cc.Component,
properties: {
lbRank: cc.Label,
lbSID: cc.Label,
lbNickName: cc.Label,
lbTotalWin: cc.Label,
spriteTop: cc.Sprite,
spTop: [ cc.SpriteFrame ]
},
updateItem: function(t, e) {
if (e < 3) {
this.lbRank.node.active = !1;
this.spriteTop.node.active = !0;
this.spriteTop.spriteFrame = this.spTop[e];
} else {
this.lbRank.node.active = !0;
this.spriteTop.node.active = !1;
this.lbRank.string = e + 1;
}
this.lbSID.string = cc.Config.getInstance().getServiceNameNoFormat(t.ServiceID);
this.lbNickName.string = t.DisplayName;
this.lbTotalWin.string = cc.Tool.getInstance().formatNumber(t.Award);
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveTopListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "69a095NV6xABZsLF5p869TZ", "XXLiveTopListView");
(function() {
cc.XXLiveTopListView = cc.Class({
extends: cc.ListView,
properties: {},
initialize: function(t) {
this.messages = t;
var e = this.messages.length;
this.content.height = e * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, e), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.XXLiveTopItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (n) {
if (c.y < -i && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.XXLiveTopItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XXLiveTopItem)).itemID + e.length;
a.updateItem(this.messages[r], r);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveTopView: [ function(t, e) {
"use strict";
cc._RF.push(e, "96716O9lr5HRL++JE0GSv8x", "XXLiveTopView");
(function() {
cc.XXLiveTopView = cc.Class({
extends: cc.PopupBase,
properties: {
XXTopListView: cc.XXLiveTopListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
},
onEnable: function() {
var t = this;
cc.director.getScheduler().schedule(function() {
t.getTopSessionWinners();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getTopSessionWinners: function() {
new cc.XXGetBigWinnerCommand().execute(this);
},
onXXGetBigWinnerResponse: function(t) {
var e = t;
if (null !== e && e.length > 0) {
this.XXTopListView.resetList();
this.XXTopListView.initialize(e);
}
},
closeClicked: function() {
this.XXTopListView.resetList();
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.XXLivePopupController.getInstance().destroyTopView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveView: [ function(t, e) {
"use strict";
cc._RF.push(e, "476bc87meNLHaNwE99KPzLQ", "XXLiveView");
var i = t("NetConfig");
(function() {
cc.XXLiveView = cc.Class({
extends: cc.Component,
properties: {
spriteSound: cc.Sprite,
sfSounds: [ cc.SpriteFrame ],
spriteBack: cc.Sprite,
nodeRegisterLeave: cc.Node,
nodeParentChat: cc.Node,
avatarDef: cc.SpriteFrame,
listAvtars: [ cc.SpriteFrame ],
nodetooltip: cc.Node,
lblmsg: cc.Label
},
onLoad: function() {
cc.XXLiveController.getInstance().setXXView(this);
cc.XXLiveController.getInstance().setAvatars(this.listAvtars);
cc.XXLiveController.getInstance().setAvatarDef(this.avatarDef);
this.interval = null;
this.isActiveChat = !1;
this.lastTimeReconnect = new Date().getTime();
this.connectHub();
this.currentState = -1;
this.idPlayNow = 0;
this.isRegisterLeaveRoom = !1;
},
start: function() {
this.sound = cc.Tool.getInstance().getItem("@Sound") && "true" === cc.Tool.getInstance().getItem("@Sound").toString();
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
cc.AudioController.getInstance().enableSound(this.sound);
},
onDestroy: function() {
var t = lngui.UserManager.instance.mainUserInfo.Money;
lngui.GameCoreManager.instance.updateTotalGold(t);
this.sendRequestOnHub(cc.MethodHubName.EXIT_LOBBY);
null !== this.interval && clearInterval(this.interval);
this.xxHub && this.xxHub.close();
this.unscheduleAllCallbacks();
cc.XXLiveController.getInstance().setXXView(null);
},
reset: function() {
this.isTimer = !1;
this.timer = 0;
this.currentState = 999;
null !== this.interval && clearInterval(this.interval);
},
stopTimer: function() {
this.isTimer = !1;
null !== this.interval && clearInterval(this.interval);
},
updateInfo: function(t) {
switch (t.CurrentState) {
case cc.XXLiveState.BETTING:
case cc.XXLiveState.OPEN_PLATE:
case cc.XXLiveState.SHOW_RESULT:
case cc.XXLiveState.WAITING:
case cc.XXLiveState.SHAKING:
}
this.currentState = t.CurrentState;
this.startTimer(t.Ellapsed);
},
updateTimer: function(t) {
if (!(t < 1)) switch (this.currentState) {
case cc.XXLiveState.BETTING:
case cc.XXLiveState.OPEN_PLATE:
this.lbTimer.string = t;
this.lbTimer.font = t > 3 ? this.bmfNormal : this.bmfRed;
this.lbTimer.node.parent.active = !0;
break;

case cc.XXLiveState.SHOW_RESULT:
case cc.XXLiveState.WAITING:
case cc.XXLiveState.SHAKING:
this.lbTimer.node.parent.active = !1;
}
},
disconnectAndLogout: function() {
this.xxHub && this.xxHub.close();
this.lastTimeReconnect = new Date().getTime();
},
connectHub: function() {
console.log("connectHub=================>" + cc.SubdomainName.XOC_XOC);
var t = {
url: "https://xocdialive-b52." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "sedielivehub",
ip: "http://18.138.207.162:9001/signalr/negotiate",
gate: "789.club"
};
cc.systemEvent.off("OnXocDiaLiveWebSocKet", this.onResponeData, this);
cc.systemEvent.on("OnXocDiaLiveWebSocKet", this.onResponeData, this);
this.xxHub = new lngui.GateSignalR();
this.xxHub.connect("OnXocDiaLiveWebSocKet", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
},
sendRequestOnHub: function(t, e, i) {
switch (t) {
case cc.MethodHubName.ENTER_LOBBY:
this.sendSignalR("EnterLobby", [ 4, 1 ]);
this.sendSignalR("PlayNow", []);
break;

case cc.MethodHubName.EXIT_LOBBY:
this.sendSignalR("ExitLobby", []);
break;

case cc.MethodHubName.PLAY_NOW:
this.sendSignalR("PlayNow", []);
break;

case cc.MethodHubName.BET:
this.sendSignalR("Bet", [ e, i ]);
break;

case cc.MethodHubName.REGISTER_LEAVE_ROOM:
this.sendSignalR("RegisterLeaveRoom", []);
break;

case cc.MethodHubName.UNREGISTER_LEAVE_ROOM:
this.sendSignalR("UnregisterLeaveRoom", []);
break;

case cc.MethodHubName.SEND_MESSAGE:
this.xxHub.sendRoomMessage(e);
}
},
sendSignalR: function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.xxHub && this.xxHub.send(t, e);
},
onResponeData: function(t) {
t.s && "error" == t.s || this.onHubMessage(t);
},
connectSuccess: function() {
console.log("connectSuccess =========>");
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
},
onHubMessage: function(t) {
var e = this;
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
if (void 0 !== t.M && t.M.length > 0) {
var i = t.M;
i.map(function(t) {
switch (t.M) {
case cc.MethodHubOnName.SESSION_INFO:
cc.XXLiveController.getInstance().updateInfo(t.A[0], t.A[0].Phrase, null);
cc.XXLiveController.getInstance().updateInput(t.A[0].Phrase);
break;

case cc.MethodHubOnName.GAME_HISTORY:
cc.XXLiveController.getInstance().resetDraw();
cc.XXLiveController.getInstance().draw(t.A[0]);
break;

case cc.MethodHubOnName.START_ACTION_TIMER:
var n = t.A;
cc.XXLiveController.getInstance().updateInfo(n[0], n[2], n[1]);
cc.XXLiveController.getInstance().updateResult(null, n[0].Result, n[0].Result.ChipsData, n[2]);
cc.XXLiveController.getInstance().updateInput(n[2]);
break;

case cc.MethodHubOnName.PLAYER_LEAVE:
0 === i.length && cc.XXLiveController.getInstance().playerLeave(t.A);
break;

case cc.MethodHubOnName.UPDATE_CONNECTION_STATUS:
cc.XXLiveController.getInstance().updateConnectionStatus(t.A);
break;

case cc.MethodHubOnName.UPDATE_PLAYER_STATUS:
cc.XXLiveController.getInstance().updatePlayerStatus(t.A[0]);
break;

case cc.MethodHubOnName.JOIN_GAME:
n = t.A[0], t.A[1];
cc.XXLiveController.getInstance().updateInfoCurrPlayer(n.Account);
cc.PopupController.getInstance().hideBusy();
break;

case cc.MethodHubOnName.BET_SESSION:
cc.XXLiveController.getInstance().showLastInput(t.A[0]);
break;

case cc.MethodHubOnName.BET_OF_ACCOUNT:
break;

case cc.MethodHubOnName.PLAYER_BET:
n = t.A;
cc.XXLiveController.getInstance().playerBet(n);
break;

case cc.MethodHubOnName.BET_SUCCESS:
break;

case cc.MethodHubOnName.WIN_RESULT_VIP:
if (t.A.length > 0) try {
setTimeout(function() {
cc.XXLiveController.getInstance().winResultVip(t.A[0]);
}, 2500);
} catch (t) {}
break;

case cc.MethodHubOnName.WIN_RESULT:
if (t.A.length > 0) try {
setTimeout(function() {
cc.XXLiveController.getInstance().winResult(t.A[0]);
}, 2500);
} catch (t) {}
break;

case cc.MethodHubOnName.TOTAL_WIN_MONEY:
t.A[0] > 0 && setTimeout(function() {
cc.XXLiveController.getInstance().totalUserWin(t.A[0]);
}, 2500);
break;

case cc.MethodHubOnName.PLAYER_MESSAGE:
case cc.MethodHubOnName.MESSAGE:
e.nodetooltip.active = !0;
e.lblmsg.string = t.A[0];
setTimeout(function() {
e.nodetooltip.active = !1;
}, 1e3);
break;

case cc.MethodHubOnName.OPEN_PLATE_NOW:
cc.XXLiveController.getInstance().updateResult(null, t.A[0], t.A[1], cc.XXLiveState.OPEN_PLATE, !0);
cc.XXLiveController.getInstance().updateInput(cc.XXLiveState.OPEN_PLATE);
break;

case cc.MethodHubOnName.RECEIVE_MESSAGE:
cc.XXLiveController.getInstance().playerShowBubbleChat(t.A);
break;

case cc.MethodHubOnName.SUMMARY_PLAYER:
cc.XXLiveController.getInstance().summaryPlayer(t.A[0]);
break;

case cc.MethodHubOnName.VIP_PLAYERS:
var o = t.A[0];
o.length > 0 && cc.XXLiveController.getInstance().vipPlayer(o);
break;

case "recieveMessage":
cc.XXLiveController.getInstance().playerShowBubbleChat(t.A);
break;

case cc.MethodHubOnName.UPDATE_ROOM_TIME:
cc.XXLiveController.getInstance().updateTimer(t.A[0]);
}
});
i && i.length > 0 && i.forEach(function(t) {
t.M === cc.MethodHubOnName.PLAYER_LEAVE && cc.XXLiveController.getInstance().playerLeave(t.A);
});
} else if (t.R && t.R.AccountID) {
cc.PopupController.getInstance().showBusy();
this.sendRequestOnHub(cc.MethodHubName.PLAY_NOW);
} else if (t.R && t.I === this.idPlayNow.toString()) {
this.idPlayNow = 0;
cc.PopupController.getInstance().hideBusy();
} else t.I;
},
onHubOpen: function() {},
onHubClose: function() {
new Date().getTime() - this.lastTimeReconnect >= 1e3 * i.RECONNECT_TIME ? this.reconnect() : cc.director.getScheduler().schedule(this.reconnect, this, i.RECONNECT_TIME, 0, 0, !1);
},
onHubError: function() {
cc.PopupController.getInstance().hideBusy();
},
playerLeave: function(t) {
var e = this;
if (t[0] === lngui.UserManager.instance.mainUserInfo.AccountID) {
var i = t[1];
lngui.UIScreenManager.instance.popToRootScreen();
this.nodetooltip.active = !0;
this.lblmsg.string = i;
setTimeout(function() {
e.nodetooltip.active = !1;
}, 1e3);
}
},
helpClicked: function() {
cc.XXLivePopupController.getInstance().createHelpView();
},
historyClicked: function() {
cc.XXLivePopupController.getInstance().createHistoryView();
},
topClicked: function() {
cc.XXLivePopupController.getInstance().createTopView();
},
graphClicked: function() {
cc.XXLivePopupController.getInstance().createGraphView();
},
soundClicked: function() {
this.sound = !this.sound;
cc.Tool.getInstance().setItem("@Sound", this.sound);
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
cc.AudioController.getInstance().enableSound(this.sound);
},
backClicked: function() {
lngui.UIScreenManager.instance.popToRootScreen();
},
chatClicked: function() {}
});
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: void 0
} ],
XXLive_GroupUserCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "5efd9epcq9MyaSdPZh8D+BL", "XXLive_GroupUserCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.XOC_XOC;
return cc.ServerConnector.getInstance().sendRequest(e, "api/XocDia/GetPlayersNotInGame", function(e) {
var i = JSON.parse(e);
return t.onGetGroupUserResponse(i);
});
};
return t;
}();
cc.XXLiveGroupUserCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ]
}, {}, [ "XX.Chat.NetworkClient", "XXChat", "XXLiveGetBigWinnerCommand", "XXLiveHistoryCommand", "XXLive_GroupUserCommand", "XXLiveHubName", "XXLiveSubdomainName", "XXLivePortalName", "XXLiveServiceId", "XXLiveServiceName", "DragonTigerSettingRoomViewLive", "DragonTigerHistoryListViewLive", "XXLiveAssets", "XXLiveChipItem", "XXLiveChipPool", "XXLiveController", "XXLiveInfoView", "XXLiveInputView", "XXLiveResultView", "XXLiveView", "XXLiveConnectionStatus", "XXLiveFX", "XXLiveGate", "XXLivePlayerStatus", "XXLiveResult", "XXLiveState", "XXLiveSoiCauView", "XXLivePlayerData", "XXLivePlayer", "XXLivePopupController", "XXLivePopupView", "XXLiveGroupItem", "XXLiveGroupUserListView", "XXLiveGroupUserView", "XXLiveHelpView", "XXLiveHistoryItem", "XXLiveHistoryListView", "XXLiveHistoryView", "XXLiveTopItem", "XXLiveTopListView", "XXLiveTopView", "SlotsHistoryItemLive", "ViewLive" ]);