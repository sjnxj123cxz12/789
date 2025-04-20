window.__require = function t(e, i, n) {
function o(c, a) {
if (!i[c]) {
if (!e[c]) {
var r = c.split("/");
r = r[r.length - 1];
if (!e[r]) {
var h = "function" == typeof __require && __require;
if (!a && h) return h(r, !0);
if (s) return s(r, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = r;
}
var u = i[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return o(e[c][1][t] || t);
}, u, u.exports, t, e, i, n);
}
return i[c].exports;
}
for (var s = "function" == typeof __require && __require, c = 0; c < n.length; c++) o(n[c]);
return o;
}({
ChatController: [ function(t, e) {
"use strict";
cc._RF.push(e, "32f88YcA29KGZtDFpAOSCfN", "ChatController");
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
e.prototype.setChatView = function(t) {
return this.chatView = t;
};
e.prototype.sendRequestOnHub = function(t, e) {
return this.chatView.sendRequestOnHub(t, e);
};
return e;
}();
cc.ChatController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
ChatRoomController: [ function(t, e) {
"use strict";
cc._RF.push(e, "e32d9c7MmZLMJ2O04UVlATb", "ChatRoomController");
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
e.prototype.setChatView = function(t) {
return this.chatView = t;
};
e.prototype.setHubView = function(t) {
return this.hubView = t;
};
e.prototype.sendRequestOnHub = function(t, e, i) {
if (this.hubView) return this.hubView.sendRequestOnHub(t, e, i);
};
e.prototype.showChat = function() {
return this.chatView.showChat();
};
e.prototype.addChatContent = function(t) {
return this.chatView.addChatContent(t);
};
e.prototype.getIndexEmotion = function(t) {
return this.chatView.getIndexEmotion(t);
};
e.prototype.checkIsEmotion = function(t) {
return this.chatView.checkIsEmotion(t);
};
return e;
}();
cc.ChatRoomController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
ChatRoomItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "f9c49Ze42xKU7oiPLRfSW8d", "ChatRoomItem");
(function() {
cc.ChatRoomItem = cc.Class({
extends: cc.Component,
properties: {
lbSID: cc.Label,
lbName: cc.Label,
lbMessage: cc.Label,
spriteVIP: cc.Sprite
},
onLoad: function() {
this.gameAssets = cc.LobbyController.getInstance().getGameAssets();
},
updateItem: function(t, e) {
this.lbSID.string = "";
this.lbName.string = t[0] + "";
this.lbMessage.string = ": " + t[1];
if (6 === t.length) var i = t[5]; else i = t[3];
void 0 === this.gameAssets && (this.gameAssets = cc.LobbyController.getInstance().getGameAssets());
if (null !== this.spriteVIP && i >= cc.Config.getInstance().getMinVipShowChat()) {
this.spriteVIP.spriteFrame = this.gameAssets.chatVIPIcons[i - 1];
this.spriteVIP.node.active = !0;
} else if (null !== this.spriteVIP) {
this.spriteVIP.spriteFrame = null;
this.spriteVIP.node.active = !1;
}
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
ChatRoomListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "6664bQYYBBFaJgcZnT6jULV", "ChatRoomListView");
(function() {
cc.ChatRoomListView = cc.Class({
extends: cc.ListView,
properties: {},
initialize: function(t) {
this.messages = t;
for (var e = this.messages.length, i = 0; i < e; ++i) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.getComponent(cc.ChatRoomItem).updateItem(this.messages[i], i);
this.items.push(n);
}
},
updateList: function(t) {
for (var e = this.items, i = 0; i < e.length; ++i) e[i].getComponent(cc.ChatRoomItem).updateItem(t[i], i);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
ChatRoomView: [ function(t, e) {
"use strict";
cc._RF.push(e, "7fb382nNRxCG4NiZ7MI16/1", "ChatRoomView");
(function() {
cc.ChatRoomView = cc.Class({
extends: cc.Component,
properties: {
chatListView: cc.ChatRoomListView,
editBoxChat: cc.EditBox,
btnSendChat: cc.Button,
nodeEmotion: cc.Node,
nodeNormalChat: cc.Node
},
onLoad: function() {
cc.ChatRoomController.getInstance().setChatView(this);
cc.view.getVisibleSize().width;
this.node.x = cc.view.getVisibleSize().width / 2;
this.listChat = [];
this.animation = this.node.getComponent(cc.Animation);
this.emotionStr = [ "1-waaaht", "2-misdoubt", "3-boss", "4-beauty", "5-byebye", "6-after_boom", "7-matrix", "8-sweat", "9-choler", "10-beated", "11-angry", "12-ah", "13-beat", "14-adore", "15-beat_shot", "16-extreme", "20-burn_joss_stick", "21-baffle", "22-cool", "23-dribble", "24-tire", "25-BigSmile" ];
this.chatShortcuts = [ "Nói nhiều quá đánh đi!", "Ngại gì vết bẩn?", "Chơi thì chơi ko chơi thì té", "Ahihi!", "Max nhọ !!!", "Ngon quá hehe!" ];
},
checkIsEmotion: function(t) {
return this.emotionStr.includes(t[1]);
},
getIndexEmotion: function(t) {
return this.emotionStr.indexOf(t[1]);
},
addChatContent: function(t) {
if (this.emotionStr.includes(t[1])) this.chatListView.scrollView.scrollToBottom(); else {
this.listChat.push(t);
if (this.listChat.length > 15) {
this.listChat.splice(0, 1);
this.chatListView.updateList(this.listChat);
} else {
this.chatListView.resetList();
this.chatListView.initialize(this.listChat);
}
this.chatListView.scrollView.scrollToBottom();
}
},
editingReturn: function() {
if ("" !== this.editBoxChat.string) {
cc.ChatRoomController.getInstance().sendRequestOnHub(cc.MethodHubName.SEND_MESSAGE, this.editBoxChat.string);
this.editBoxChat.string = "";
}
},
showChat: function() {
this.animation.play("showChatRoom");
this.nodeEmotion.active = !1;
this.nodeNormalChat.active = !0;
},
sendChatClicked: function() {
if ("" !== this.editBoxChat.string) {
cc.ChatRoomController.getInstance().sendRequestOnHub(cc.MethodHubName.SEND_MESSAGE, this.editBoxChat.string);
this.editBoxChat.string = "";
this.animation.play("hideChatRoom");
}
},
chatShortcutClicked: function(t, e) {
var i = parseInt(e.toString());
cc.ChatRoomController.getInstance().sendRequestOnHub(cc.MethodHubName.SEND_MESSAGE, this.chatShortcuts[i]);
this.animation.play("hideChatRoom");
},
chatEmotionClicked: function(t, e) {
var i = parseInt(e.toString());
cc.ChatRoomController.getInstance().sendRequestOnHub(cc.MethodHubName.SEND_MESSAGE, this.emotionStr[i]);
this.animation.play("hideChatRoom");
},
showEmotionClicked: function() {
if (this.nodeEmotion.active) {
this.nodeEmotion.active = !1;
this.nodeNormalChat.active = !0;
} else {
this.nodeEmotion.active = !0;
this.nodeNormalChat.active = !1;
}
},
showChatClicked: function() {
this.showChat();
},
hideChatClicked: function() {
this.animation.play("hideChatRoom");
this.node.destroy();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
ChatView: [ function(t, e) {
"use strict";
cc._RF.push(e, "6bcc4740uZJja8yIEDp0ABM", "ChatView");
var i = t("NetConfig");
(function() {
cc.ChatView = cc.Class({
extends: cc.Component,
properties: {
chatListView: cc.ChatListView,
editBoxChat: cc.EditBox,
btnSendChat: cc.Button,
channelId: "taixiu"
},
onLoad: function() {
cc.ChatController.getInstance().setChatView(this);
this.lastTimeReconnect = new Date().getTime();
cc.sys.isNative ? this.maxChat = 20 : this.maxChat = 30;
},
onEnable: function() {
new cc.ChatNegotiateCommand().execute(this);
},
onDisable: function() {
this.chatHub && this.chatHub.disconnect();
this.unscheduleAllCallbacks();
},
reconnect: function() {
this.lastTimeReconnect = new Date().getTime();
this.chatHub.connect(this, cc.HubName.ChatHub, this.connectionToken, !0, this.channelId);
},
sendRequestOnHub: function(t, e) {
switch (t) {
case cc.MethodHubName.REGISTER_CHAT:
this.chatHub.register();
break;

case cc.MethodHubName.UNREGISTER_CHAT:
this.chatHub.unregister();
break;

case cc.MethodHubName.SEND_MESSAGE:
this.chatHub.sendMessage(e);
}
},
showChat: function() {
var t = this, e = this.listChat.length, i = Math.max(this.listChat.length - this.maxChat, 0);
e > this.maxChat && (this.listChat = this.listChat.slice(i, e));
if (null !== this.listChat && this.listChat.length > 0) {
this.chatListView.resetList();
this.chatListView.initialize(this.listChat);
}
setTimeout(function() {
null != t.chatListView && t.chatListView.scrollView.scrollToBottom();
}, 5);
},
addChatContent: function(t) {
if (!t.ad || t.s === cc.Config.getInstance().getServiceId()) {
this.chatListView.addChatItem(t, this.maxChat);
var e = this;
setTimeout(function() {
null != e.chatListView && e.chatListView.scrollView.scrollToBottom();
}, 5);
}
},
formatChatUser: function(t) {
return t.ad ? "<color=#FCE700>" + t.n + ": </color>" + t.c : "<color=#06EEFA>" + t.n + ": </color>" + t.c;
},
onChatNegotiateResponse: function(t) {
this.connectionToken = t.ConnectionToken;
this.chatHub = new cc.Hub();
this.chatHub.connect(this, cc.HubName.ChatHub, t.ConnectionToken, !1, this.channelId);
cc.PopupController.getInstance().hideBusy();
},
onHubMessage: function(t) {
if (void 0 !== t.M && t.M.length > 0) {
var e = t.M[0];
switch (e.M) {
case cc.MethodHubOnName.LIST_LAST_MESSAGES:
var i = e.A[0];
this.listChat = JSON.parse(i);
this.showChat();
break;

case cc.MethodHubOnName.RECEIVE_MESSAGE:
case cc.MethodHubOnName.SYSTEM_MESSAGE:
this.addChatContent(e.A[0]);
break;

case cc.MethodHubOnName.MESSAGE:
cc.PopupController.getInstance().showMessage(e.A[0]);
}
} else t.I && this.chatHub && this.chatHub.pingPongResponse(t.I);
},
onHubOpen: function() {
if (this.btnSendChat) {
this.btnSendChat.interactable = !0;
this.sendRequestOnHub(cc.MethodHubName.REGISTER_CHAT);
}
},
onHubClose: function() {
this.btnSendChat.interactable = !1;
new Date().getTime() - this.lastTimeReconnect >= 1e3 * i.RECONNECT_TIME ? this.reconnect() : cc.director.getScheduler().schedule(this.reconnect, this, i.RECONNECT_TIME, 0, 0, !1);
},
onHubError: function() {},
editingReturn: function() {
if ("" !== this.editBoxChat.string) {
this.sendRequestOnHub(cc.MethodHubName.SEND_MESSAGE, this.editBoxChat.string);
this.editBoxChat.string = "";
if (!cc.sys.isNative) {
var t = this;
setTimeout(function() {
t.editBoxChat.focus();
}, 5);
}
}
},
sendChatClicked: function() {
if ("" !== this.editBoxChat.string) {
this.sendRequestOnHub(cc.MethodHubName.SEND_MESSAGE, this.editBoxChat.string);
this.editBoxChat.string = "";
if (!cc.sys.isNative) {
var t = this;
setTimeout(function() {
t.editBoxChat.focus();
}, 5);
}
}
}
});
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: void 0
} ],
DragonTigerHistoryListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "d0ed41uTnJKR5yRcwUOdNnc", "DragonTigerHistoryListView");
(function() {
cc.DragonTigexxHistoryListView = cc.Class({
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
LabelIncrementXDTL: [ function(t, e) {
"use strict";
cc._RF.push(e, "0272aP0k/1OMJNvWUZkSsbG", "LabelIncrementXDTL");
(function() {
cc.LabelIncrementXX = cc.Class({
extends: cc.Component,
properties: {
label: cc.Label,
surfix: "",
duration: 1.5,
fromValue: 0,
toValue: 0,
range: 0,
sign: 0,
canRun: !1,
delta: 0
},
onLoad: function() {
this.label = this.node.getComponent(cc.Label);
this.duration >= 2.4 ? this.rootDuration = 3 : this.rootDuration = 1;
this.duration = 1;
this.durationNormal = 1.5;
this.durationAn = 2;
this.durationDam = 4;
this.durationKhung = 6;
this.durationAnHu = 8;
},
update: function(t) {
if (this.canRun) {
this.delta += t;
if (this.delta > this.duration) {
this.label.string = this.formatNumber(this.toValue) + this.surfix;
this.canRun = !1;
} else this.label.string = this.formatNumber(Math.round(this.fromValue + this.delta / this.duration * this.range * this.sign)) + this.surfix;
}
},
formatNumber: function(t) {
return cc.Tool.getInstance().formatNumber(t);
},
tweenValueto: function(t, e) {
this.duration = e || this.rootDuration;
this.tweenValue(this.toValue, t, e);
},
tweenValueWithTime: function(t, e, i) {
this.duration = i;
this.startTween(t, e);
},
tweenValue: function(t, e, i) {
this.duration = i || this.rootDuration;
this.canRun = !1;
this.startTween(t, e);
},
startTween: function(t, e) {
this.fromValue = t;
this.toValue = e;
this.range = Math.abs(this.toValue - this.fromValue);
this.toValue >= this.fromValue ? this.sign = 1 : this.sign = -1;
this.delta = 0;
this.fromValue !== this.toValue ? this.canRun = !0 : this.canRun = !1;
if (!1 === this.canRun) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
}
},
setValue: function(t) {
this.canRun = !1;
this.fromValue = t;
this.toValue = t;
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
},
setValueText: function(t) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
NoteDepth: [ function(t, e) {
"use strict";
cc._RF.push(e, "88f8aVaZchIpY0qiZKk6TeC", "NoteDepth");
(function() {
cc.NoteDepth = cc.Enum({
POPUP_TAIXIU: 99
});
}).call(void 0);
cc._RF.pop();
}, {} ],
PlayerData: [ function(t, e) {
"use strict";
cc._RF.push(e, "5de9dKYlG5KPKjEv751Dlij", "PlayerData");
var i = [ {
accID: 0,
balance: 0,
avatarId: 1,
indexBet: 0,
position: cc.v2(-242, -200),
chips: []
}, {
accID: 0,
balance: 500,
avatarId: 3,
indexBet: 0,
position: cc.v2(-554, -100),
chips: []
}, {
accID: 0,
balance: 1500,
avatarId: 2,
indexBet: 0,
position: cc.v2(-490, 67),
chips: []
}, {
accID: 0,
balance: 2e3,
avatarId: 1,
indexBet: 0,
position: cc.v2(-350, 190),
chips: []
}, {
accID: 0,
balance: 1e4,
avatarId: 6,
indexBet: 0,
position: cc.v2(350, 190),
chips: []
}, {
accID: 0,
balance: 5e3,
avatarId: 5,
indexBet: 0,
position: cc.v2(490, 67),
chips: []
}, {
accID: 0,
balance: 9e3,
avatarId: 4,
indexBet: 0,
position: cc.v2(554, -100),
chips: []
} ];
e.exports = {
players: i
};
cc._RF.pop();
}, {} ],
SlotsHistoryItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "5d90awyo89LXrbxOZgX6tJu", "SlotsHistoryItem");
(function() {
cc.SlotsHistoryItem = cc.Class({
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
"XDTL.Assets": [ function(t, e) {
"use strict";
cc._RF.push(e, "e14c7JM8GtHC5ysa4uXg9ur", "XDTL.Assets");
(function() {
cc.XDTL_Assets = cc.Class({
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
cc.XDTL_Controller.getInstance().setXXAssets(this);
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
"XDTL.ChipItem": [ function(t, e) {
"use strict";
cc._RF.push(e, "09e4fjLGOxIariUHvEmipNk", "XDTL.ChipItem");
(function() {
cc.XDTL_ChipItem = cc.Class({
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
this.spriteChip.spriteFrame = cc.XDTL_Controller.getInstance().getChips()[t];
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
cc.XDTL_Controller.getInstance().putToPool(t);
}.bind(this), 500);
} catch (t) {}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.ChipPool": [ function(t, e) {
"use strict";
cc._RF.push(e, "05389d2DrBIEJ4SXwdMot3b", "XDTL.ChipPool");
(function() {
cc.XDTL_ChipPool = cc.Class({
extends: cc.Component,
properties: {
prefab: cc.Prefab
},
onLoad: function() {
this.createNodePool();
cc.XDTL_Controller.getInstance().setXXChipPool(this);
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
"XDTL.ConnectionStatus": [ function(t, e) {
"use strict";
cc._RF.push(e, "ab9cdN9ZWtFOLrGonUMJCzs", "XDTL.ConnectionStatus");
(function() {
cc.XDTL_ConnectionStatus = cc.Enum({
DISCONNECTED: 0,
CONNECTED: 1,
REGISTER_LEAVE_GAME: 2
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.Controller": [ function(t, e) {
"use strict";
cc._RF.push(e, "8600egEfPlJt4hyFq5XQb3b", "XDTL.Controller");
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
e.prototype.setXDTL_SoiCauView = function(t) {
return this.XDTL_SoiCauView = t;
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
e.prototype.setXDTL_ResultView = function(t) {
return this.XDTL_ResultView = t;
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
return this.XDTL_ResultView.updateResult(t, e, i, n, o);
};
e.prototype.draw = function(t) {
return this.XDTL_SoiCauView.draw(t);
};
e.prototype.resetDraw = function() {
return this.XDTL_SoiCauView.resetDraw();
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
e.prototype.setRoomId = function(t) {
return this.roomId = t;
};
e.prototype.getRoomId = function() {
return this.roomId;
};
e.prototype.setMiniGame = function(t) {
return this.xxMiniGame = t;
};
e.prototype.initMiniGame = function() {
return this.xxMiniGame.initMiniGame();
};
e.prototype.setSpin = function(t) {
return this.xxMiniGame.setSpin(t);
};
e.prototype.runAnimationSpin = function(t, e) {
return this.xxMiniGame.runAnimationSpin(t, e);
};
e.prototype.clearMiniGame = function() {
return this.xxMiniGame.clearMiniGame();
};
e.prototype.updateJackpot = function(t) {
return this.xxMiniGame.updateJackpot(t);
};
e.prototype.showEffectNohu = function() {
return this.xxMiniGame.showEffectNohu();
};
return e;
}();
cc.XDTL_Controller = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.FX": [ function(t, e) {
"use strict";
cc._RF.push(e, "4a0a2nohD9An6Of355d1CTo", "XDTL.FX");
(function() {
cc.XDTL_FX = cc.Enum({
LOSE: 0,
DEALER_PAY: 1,
PAY: 3
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.Gate": [ function(t, e) {
"use strict";
cc._RF.push(e, "42194NRwGtNTYGsQzMEAli6", "XDTL.Gate");
(function() {
cc.XDTL_Gate = cc.Enum({
ODD: 1,
THREE_UP: 2,
THREE_DOWN: 3,
EVEN: 4,
FOUR_UP: 5,
FOUR_DOWN: 6,
TWO_UP_TWO_DOWN: 7
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.GetBigWinnerCommand": [ function(t, e) {
"use strict";
cc._RF.push(e, "04ad7VglzJNfIwMJeXq3RRW", "XDTL.GetBigWinnerCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.XOC_DIA_TU_LINH, "api/XocDiaTuLinh/GetBigWinner", function(e) {
var i = JSON.parse(e);
return t.onXXGetBigWinnerResponse(i);
});
};
return t;
}();
cc.XDTL_GetBigWinnerCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.GroupItem2": [ function(t, e) {
"use strict";
cc._RF.push(e, "70bbe05xA5AAKyLseqTkkDp", "XDTL.GroupItem2");
(function() {
cc.XXGroupItem = cc.Class({
extends: cc.XTDL_GroupItem,
properties: {}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.GroupItem": [ function(t, e) {
"use strict";
cc._RF.push(e, "3c6cfUN0lNFxqAyxQAkjBnp", "XDTL.GroupItem");
(function() {
cc.XTDL_GroupItem = cc.Class({
extends: cc.Component,
properties: {
avatar: cc.Avatar,
lbSId: cc.Label,
lbNickName: cc.Label,
lbBalance: cc.Label,
lbSTT: cc.Label
},
updateItem: function(t, e) {
if (t) {
var i = t.Account, n = i.Avatar;
n <= 0 && (n = 1);
this.lbSTT.string = e + 1;
this.lbSId.string = cc.Config.getInstance().getServiceNameNoFormat(i.ServiceID);
this.lbNickName.string = i.NickName;
this.lbBalance.string = cc.Tool.getInstance().formatNumber(i.Balance);
this.item = t;
this.itemID = e;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.GroupUserCommand": [ function(t, e) {
"use strict";
cc._RF.push(e, "a0cd6TgXYdLIoW9lQA/OuiU", "XDTL.GroupUserCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = "api/XocDiaTuLinh/GetPlayersNotInGame?roomId=" + cc.XDTL_Controller.getInstance().getRoomId(), i = cc.SubdomainName.XOC_DIA_TU_LINH;
return cc.ServerConnector.getInstance().sendRequest(i, e, function(e) {
var i = JSON.parse(e);
return t.onGetGroupUserResponse(i);
});
};
return t;
}();
cc.XDTL_GroupUserCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.GroupUserListView": [ function(t, e) {
"use strict";
cc._RF.push(e, "ab3d8qZ9yRJDZM48YyRpb4+", "XDTL.GroupUserListView");
(function() {
cc.XDTL_GroupUserListView = cc.Class({
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
o.getComponent(cc.XXGroupItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function() {}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.GroupUserView": [ function(t, e) {
"use strict";
cc._RF.push(e, "857d6VHUGxIPJKHPZs1Pe7k", "XDTL.GroupUserView");
(function() {
cc.XDTL_GroupUserView = cc.Class({
extends: cc.Component,
properties: {
groupUserListView: cc.XDTL_GroupUserListView
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
cc.XDTL_PopupController.getInstance().destroyGroupUserView();
}, this, 1, 0, .12, !1);
},
close: function() {
this.node.destroy();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.HelpView2": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "359dfcIMppKV7/7+LFbItiX", "XDTL.HelpView2");
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
var c = cc._decorator, a = c.ccclass, r = (c.property, function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onClose = function() {
this.node.destroy();
};
e.prototype.start = function() {};
return s([ a ], e);
}(cc.Component));
i.default = r;
cc._RF.pop();
}, {} ],
"XDTL.HelpView": [ function(t, e) {
"use strict";
cc._RF.push(e, "59f36P0Q+VPcL2BFFXeYGzZ", "XDTL.HelpView");
(function() {
cc.XDTL_HelpView = cc.Class({
extends: cc.PopupBase,
properties: {},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 9999;
},
closeFinished: function() {}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.HistoryCommand": [ function(t, e) {
"use strict";
cc._RF.push(e, "e19a3Z2xwlHoInBkRcE4nYu", "XDTL.HistoryCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.XOC_DIA_TU_LINH, "api/XocDiaTuLinh/GetHistory", function(e) {
var i = JSON.parse(e);
return t.onXXGetHistoryResponse(i);
});
};
return t;
}();
cc.XDTL_GetHistoryCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.HistoryItem": [ function(t, e) {
"use strict";
cc._RF.push(e, "140feLhJWRPd72m3T2neEgx", "XDTL.HistoryItem");
(function() {
cc.XDTL_HistoryItem = cc.Class({
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
case cc.XDTL_Gate.ODD:
i = "LẺ";
break;

case cc.XDTL_Gate.THREE_UP:
i = "LẺ (3 TRẮNG)";
break;

case cc.XDTL_Gate.THREE_DOWN:
i = "LẺ (3 ĐEN)";
break;

case cc.XDTL_Gate.EVEN:
i = "CHẴN";
break;

case cc.XDTL_Gate.FOUR_UP:
i = "CHẴN (4 TRẮNG)";
break;

case cc.XDTL_Gate.FOUR_DOWN:
i = "CHẴN (4 ĐEN)";
}
this.lbSide.string = i;
var n = "", o = t.GatesData;
if (o) {
var s = o.split(","), c = s.includes(cc.XDTL_Gate.ODD + "") ? "LẺ" : "CHẴN";
if (1 == s.length) n = "CHẮN (2 ĐEN, 2 TRẮNG)"; else {
s.map(function(t) {
var e = "";
switch (parseInt(t)) {
case cc.XDTL_Gate.THREE_UP:
e = " (3 TRẮNG, 1 ĐEN)";
break;

case cc.XDTL_Gate.THREE_DOWN:
e = " (3 ĐEN, 1 TRẮNG)";
break;

case cc.XDTL_Gate.FOUR_UP:
e = " (4 TRẮNG)";
break;

case cc.XDTL_Gate.FOUR_DOWN:
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
"XDTL.HistoryListView": [ function(t, e) {
"use strict";
cc._RF.push(e, "daf30fjYTVIQZrgBn/wP90K", "XDTL.HistoryListView");
(function() {
cc.XDTL_HistoryListView = cc.Class({
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
o.getComponent(cc.XDTL_HistoryItem).updateItem(this.messages[n], n);
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
var a = e[s].getComponent(cc.XDTL_HistoryItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XDTL_HistoryItem)).itemID + e.length;
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
"XDTL.HistoryView": [ function(t, e) {
"use strict";
cc._RF.push(e, "8aff1zJGzBAh6xJ+IF8KrC9", "XDTL.HistoryView");
(function() {
cc.XDTL_HistoryView = cc.Class({
extends: cc.PopupBase,
properties: {
XXHistoryListView: cc.XDTL_HistoryListView
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
new cc.XDTL_GetHistoryCommand().execute(this);
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
cc.XDTL_PopupController.getInstance().destroyHistoryView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.InfoView": [ function(t, e) {
"use strict";
cc._RF.push(e, "a2f5amRE39At64eMwiMbiKc", "XDTL.InfoView");
(function() {
cc.XDTL_InfoView = cc.Class({
extends: cc.Component,
properties: {
lbSID: cc.Label,
lbTimer: cc.Label,
lbInfo: cc.Label,
progressTimer: cc.ProgressBar,
lbTotalUser: cc.Label,
lbTotalUserWin: cc.Label,
xxPlayers: [ cc.XDTL_Player ],
skeWaitingTime: sp.Skeleton
},
onLoad: function() {
this.interval = null;
this.timeBet = 54;
this.reset();
cc.XDTL_Controller.getInstance().setXXInfoView(this);
this.maxPlayer = this.xxPlayers.length;
this.animInfo = this.lbInfo.node.parent.getComponent(cc.Animation);
this.nodeProgressTimer = this.lbTimer.node.parent;
this.currPlayer = this.xxPlayers[0];
},
updateInfoCurrPlayer: function(t) {
this.currPlayer.registerPlayer(t);
},
joinGame: function(t) {
this.positions = t.Positions;
this.countPlayer = 0;
this.positionsUI = [ 0, 0, 0, 0, 0, 0, 0 ];
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
cc.XDTL_Controller.getInstance().updatePositionPlayerUI(this.positionsUI);
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
var e = this, i = 0;
this.positionsUI = [ 0, 0, 0, 0, 0, 0, 0 ];
this.positionsUI[0] = lngui.UserManager.instance.mainUserInfo.AccountID;
i++;
t.map(function(t) {
if (t.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID && i <= 6) {
e.positionsUI[i] = t.AccountID;
i++;
}
}, this);
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
console.log(t);
} else this.xxPlayers[i].unRegisterPlayer();
}, this);
cc.XDTL_Controller.getInstance().updatePositionPlayerUI(this.positionsUI);
},
totalUserWin: function(t) {
this.lbTotalUserWin.string = "+" + cc.Tool.getInstance().formatNumber(t);
this.lbTotalUserWin.node.active = !0;
this.lbTotalUserWin.node.scaleY = 0;
this.lbTotalUserWin.node.getComponent(cc.Animation).play("xxWin");
},
winResultVip: function(t) {
var e = this;
this.positionsUI && t.length > 0 && t.map(function(t) {
var i = e.positionsUI.indexOf(t.AccountID);
if (t.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID && -1 != i) {
e.xxPlayers[i].playerResultUI(!0, t.Award);
e.xxPlayers[i].updateChip(t.Balance);
}
});
},
winResult: function(t) {
if (this.currPlayer) {
this.currPlayer.playerResultUI(!0, t.Award);
this.currPlayer.updateChip(t.Balance);
}
},
updateChip: function(t, e) {
-1 != this.positionsUI.indexOf(t) && this.xxPlayers[this.getIndexUIBetByAccID(t)].updateChip(e);
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
e <= 3 && this.currentState === cc.XDTL_State.BETTING && (this.lbTimer.node.color = cc.Color.RED);
}
}
},
getTime: function() {
return this.timeInt;
},
updateSessionId: function(t) {
this.lbSID.string = "Phiên: #" + t;
},
updateInfo: function(t, e) {
switch (e) {
case cc.XDTL_State.BETTING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XDTL_Controller.getInstance().setSID(t.SessionID);
this.skeWaitingTime.setAnimation(1, "appear", !1);
this.nodeProgressTimer.active = !0;
this.resetPlayersResultUI();
}
break;

case cc.XDTL_State.OPEN_PLATE:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XDTL_Controller.getInstance().setSID(t.SessionID);
this.resetPlayersResultUI();
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
}
break;

case cc.XDTL_State.SHOW_RESULT:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XDTL_Controller.getInstance().setSID(t.SessionID);
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
}
break;

case cc.XDTL_State.WAITING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XDTL_Controller.getInstance().setSID(t.SessionID);
this.resetPlayersResultUI();
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
}
break;

case cc.XDTL_State.SHAKING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XDTL_Controller.getInstance().clearAllChip();
this.resetPlayersResultUI();
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
}
}
this.currentState = e;
},
onDisableProgress: function() {
this.currentState = null;
this.maxTimeBetting = 2e4;
this.timer = 0;
this.isLockTimerProgress = !1;
null != this.timerInterval && clearInterval(this.timerInterval);
this.timerInterval = null;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.InputView": [ function(t, e) {
"use strict";
cc._RF.push(e, "6e682V0tfhBRZpMp2cAC13i", "XDTL.InputView");
var i = t("PlayerData").players;
(function() {
cc.XDTL_InputView = cc.Class({
extends: cc.Component,
properties: {
nodeParentChip: cc.Node,
btnBetVals: [ cc.Button ],
btnChips: [ cc.Button ],
btnX2: cc.Button,
btnRepeat: cc.Button,
spriteNan: cc.Sprite,
lbTotalBets: [ cc.Label ],
lbTotalUserBets: [ cc.Label ]
},
onLoad: function() {
cc.XDTL_Controller.getInstance().setXXInputView(this);
this.isNan = !1;
cc.XDTL_Controller.getInstance().setIsNan(this.isNan);
this.nodeChipPress = [];
var t = this;
this.btnChips.forEach(function(e) {
t.nodeChipPress.push(e.node.getChildByName("chip_press"));
});
this.minXs = [ 230, 95, 300, -350, -380, -130, 0 ];
this.maxXs = [ 350, 155, 380, -230, -300, -50, 0 ];
this.minYs = [ 45, -190, -190, 45, -190, -190, 0 ];
this.maxYs = [ 63, -173, -173, 63, -173, -173, 0 ];
this.rootDealerPos = cc.v2(0, 136);
this.chipIndex = 1;
this.betVals = [ 1e3, 5e3, 1e4, 1e5, 5e5 ];
this.processBetValUI();
cc.XDTL_Controller.getInstance().setLastBetData(null);
this.resetTotalBetUI();
this.timePerBet = 100;
this.currentState = -1;
this.timeouts = [];
this.posGroupUser = cc.v2(710, 60);
this.initGateChip();
cc.XDTL_Controller.getInstance().initLogBet();
},
initGateChip: function() {
this.gateChips = [];
for (var t = 1; t <= 7; t++) this.gateChips[t] = [];
},
playerBet: function(t) {
if (cc.XDTL_Controller.getInstance().getPositions()) {
var e = t[0], i = t[1], n = t[2], o = t[3];
cc.XDTL_Controller.getInstance().updateChip(e, o);
this.playFxUserBet(cc.XDTL_Controller.getInstance().getIndexUIBetByAccID(e), n, this.getChipIndexFromValue(i), !0);
this.totalBets[n - 1] += i;
this.lbTotalBets[n - 1].string = cc.Tool.getInstance().formatNumberK(this.totalBets[n - 1]);
if (e === lngui.UserManager.instance.mainUserInfo.AccountID) {
cc.XDTL_Controller.getInstance().setLogBet({
AccountID: e,
Amount: i,
Gate: n
});
this.totalUserBets[n - 1] += i;
this.lbTotalUserBets[n - 1].string = cc.Tool.getInstance().formatNumberK(this.totalUserBets[n - 1]);
this.lbTotalUserBets[n - 1].node.parent.active = !0;
}
}
},
reBet: function(t, e) {
var i = this, n = 0;
t.forEach(function(t) {
n += t.Amount;
});
e && (n *= 2);
if (n > lngui.UserManager.instance.mainUserInfo.Money) cc.PopupController.getInstance().showMessage("Số dư không đủ."); else {
var o = 0, s = 0, c = 0, a = 0, r = 0, h = 0;
t.forEach(function(t) {
switch (t.Gate) {
case cc.XDTL_Gate.ODD:
o += t.Amount;
break;

case cc.XDTL_Gate.THREE_UP:
s += t.Amount;
break;

case cc.XDTL_Gate.THREE_DOWN:
c += t.Amount;
break;

case cc.XDTL_Gate.EVEN:
a += t.Amount;
break;

case cc.XDTL_Gate.FOUR_UP:
r += t.Amount;
break;

case cc.XDTL_Gate.FOUR_DOWN:
h += t.Amount;
}
});
for (var u = 0, l = 0, p = 0, d = 0, m = 0, f = [ o, s, c, a, r, h ], g = [], T = 0; T < 6; T++) {
u = 0;
l = 0;
p = 0;
d = 0;
m = 0;
n = f[T];
e && (n *= 2);
u = Math.floor(n / 5e5);
if ((n -= 5e5 * u) > 0) {
l = Math.floor(n / 1e5);
n -= 1e5 * l;
}
if (n > 0) {
p = Math.floor(n / 1e4);
n -= 1e4 * p;
}
if (n > 0) {
d = Math.floor(n / 5e3);
n -= 5e3 * d;
}
n > 0 && (m = Math.floor(n / 1e3));
for (var I = 0; I < u; I++) g.push({
Gate: T + 1,
Amount: 5e5
});
for (I = 0; I < l; I++) g.push({
Gate: T + 1,
Amount: 1e5
});
for (I = 0; I < p; I++) g.push({
Gate: T + 1,
Amount: 1e4
});
for (I = 0; I < d; I++) g.push({
Gate: T + 1,
Amount: 5e3
});
for (I = 0; I < m; I++) g.push({
Gate: T + 1,
Amount: 1e3
});
}
this.count = 0;
this.timeouts = [];
g.forEach(function(t) {
i.timeouts.push(setTimeout(function() {
i.currentState === cc.XDTL_State.BETTING && i.sendRequestReBet(t);
}, i.timePerBet * i.count));
i.count++;
});
}
},
sendRequestReBet: function(t) {
lngui.UserManager.instance.mainUserInfo.Money < t.Amount ? cc.PopupController.getInstance().showMessage("Số dư không đủ") : cc.XDTL_Controller.getInstance().sendRequestOnHub(cc.MethodHubName.BET, t.Amount, t.Gate);
},
showLastInput: function(t) {
var e = this;
t.forEach(function(t) {
t.forEach(function(t) {
e.playFxUserBet(cc.XDTL_Controller.getInstance().getIndexUIBetByAccID(t.AccountID), t.BetSide, e.getChipIndexFromValue(t.BetValue), !1);
e.totalBets[t.BetSide - 1] += t.BetValue;
e.lbTotalBets[t.BetSide - 1].string = cc.Tool.getInstance().formatNumberK(e.totalBets[t.BetSide - 1]);
if (t.AccountID === lngui.UserManager.instance.mainUserInfo.AccountID) {
cc.XDTL_Controller.getInstance().setLogBet({
AccountID: t.AccountID,
Amount: t.BetValue,
Gate: t.BetSide
});
e.totalUserBets[t.BetSide - 1] += t.BetValue;
e.lbTotalUserBets[t.BetSide - 1].string = cc.Tool.getInstance().formatNumberK(e.totalUserBets[t.BetSide - 1]);
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
this.totalBets = [ 0, 0, 0, 0, 0, 0, 0 ];
this.totalUserBets = [ 0, 0, 0, 0, 0, 0, 0 ];
this.lbTotalBets.forEach(function(t) {
t.string = "";
});
this.lbTotalUserBets.forEach(function(t) {
t.node.parent.active = !1;
});
},
betOfAccount: function() {},
saveLastBetData: function() {
var t = [].concat(cc.XDTL_Controller.getInstance().getLogBet());
cc.XDTL_Controller.getInstance().setLastBetData(t);
},
updateInput: function(t) {
switch (t) {
case cc.XDTL_State.BETTING:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.resetInput();
this.resetTotalBetUI();
this.activeAllButtonBet(!0);
}
break;

case cc.XDTL_State.OPEN_PLATE:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.activeAllButtonBet(!1);
this.saveLastBetData();
}
break;

case cc.XDTL_State.SHOW_RESULT:
this.currentState !== t && this.activeAllButtonBet(!1);
break;

case cc.XDTL_State.WAITING:
if (this.currentState !== t) {
this.resetInput();
this.activeAllButtonBet(!1);
cc.XDTL_Controller.getInstance().initLogBet();
}
break;

case cc.XDTL_State.SHAKING:
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
var s = e - 1, c = this.minXs[s], a = this.maxXs[s], r = this.minYs[s], h = this.maxYs[s], u = c + Math.floor(Math.random() * Math.abs(a - c)), l = r + Math.floor(Math.random() * Math.abs(h - r)), p = cc.XDTL_Controller.getInstance().createChip();
p.parent = this.nodeParentChip;
var d;
d = -1 != t ? i[t].position : this.posGroupUser;
p.position = d;
var m = p.getComponent(cc.XDTL_ChipItem);
m.betIndex = s;
m.gate = e;
m.playerId = t;
m.position = d;
m.setChip(n);
o ? m.moveTo(cc.v2(u, l)) : m.setPosition(cc.v2(u, l));
this.gateChips[e].push(m);
},
playFxDealerPay: function(t) {
var e = cc.XDTL_Controller.getInstance().createChip();
e.parent = this.nodeParentChip;
e.position = this.rootDealerPos;
var n = e.getComponent(cc.XDTL_ChipItem);
n.betIndex = t.betIndex;
n.playerId = t.playerId;
n.position = t.position;
n.setChip(t.chipIndex);
this.gateChips[t.gate].push(n);
i[t.playerId].chips.push(n);
var o = t.betIndex, s = this.minXs[o], c = this.maxXs[o], a = this.minYs[o], r = this.maxYs[o], h = s + Math.floor(Math.random() * Math.abs(c - s)), u = a + Math.floor(Math.random() * Math.abs(r - a));
n.moveTo(cc.v2(h, u));
},
playFxPay: function(t) {
t.moveToEnd(t.position);
},
playFxLost: function(t) {
t.moveToEnd(this.rootDealerPos);
},
betValueClicked: function(t, e) {
cc.AudioController.getInstance().playSound(cc.AudioTypes.CHIP_SELECT);
this.chipIndex = parseInt(e.toString());
this.processBetValUI();
},
betClicked: function(t, e) {
if (cc.XDTL_Controller.getInstance().getTime() <= 3) {
cc.PopupController.getInstance().showMessage("Đã hết thời gian đặt cửa.");
cc.XDTL_Controller.getInstance().activeAllButtonBet(!1);
} else {
this.indexBet = parseInt(e.toString());
var i = this.betVals[this.chipIndex];
if (lngui.UserManager.instance.mainUserInfo.Money < i) cc.PopupController.getInstance().showMessage("Số dư không đủ"); else {
cc.XDTL_Controller.getInstance().sendRequestOnHub(cc.MethodHubName.BET, i, this.indexBet + 1);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
}
}
},
nanClicked: function() {
this.isNan = !this.isNan;
this.isNan ? this.spriteNan.spriteFrame = cc.XDTL_Controller.getInstance().getNans()[0] : this.spriteNan.spriteFrame = cc.XDTL_Controller.getInstance().getNans()[1];
cc.XDTL_Controller.getInstance().setIsNan(this.isNan);
},
x2Clicked: function() {
if (cc.XDTL_Controller.getInstance().getTime() <= 3) {
cc.PopupController.getInstance().showMessage("Đã hết thời gian đặt cửa.");
cc.XDTL_Controller.getInstance().activeAllButtonBet(!1);
} else {
var t = cc.XDTL_Controller.getInstance().getLastBetData();
if (t && t.length > 0) {
this.reBet(t, !0);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
} else cc.PopupController.getInstance().showSlotsMessage("Không có dữ liệu đặt của phiên trước.");
}
},
repeatClicked: function() {
if (cc.XDTL_Controller.getInstance().getTime() <= 3) {
cc.PopupController.getInstance().showMessage("Đã hết thời gian đặt cửa.");
cc.XDTL_Controller.getInstance().activeAllButtonBet(!1);
} else {
var t = cc.XDTL_Controller.getInstance().getLastBetData();
if (t && t.length > 0) {
this.reBet(t);
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
PlayerData: "PlayerData"
} ],
"XDTL.MiniGame": [ function(t, e) {
"use strict";
cc._RF.push(e, "dfa06uf8X1OV5zmvmL7PDtm", "XDTL.MiniGame");
var i = t("../../../../../framework/common/Tween").default;
(function() {
cc.XDTL_MiniGame = cc.Class({
extends: cc.Component,
properties: {
sprFrameItems: [ cc.SpriteFrame ],
columns: cc.Node,
itemTemplate: cc.Node,
lblJackpot: cc.Label,
nodeEffectHu: cc.Node
},
onLoad: function() {
this.createNodePool();
cc.XDTL_Controller.getInstance().setMiniGame(this);
this.timeScale = 1;
this.spinDuration = 1.3;
this.addSpinDuration = .3;
this.rollStartItemCount = 20;
this.rollAddItemCount = 10;
this.itemHeight = this.itemTemplate.height;
this.isSpin = !1;
this.maxItemColumn = 20;
this.dataMiniGame = null;
this.isJackpot = !1;
this.initMiniGame();
},
updateJackpot: function(t) {
i.numberTo(this.lblJackpot, t, 1);
},
createNodePool: function() {
this.nodePool = new cc.NodePool();
for (var t = 0; t < 10; t++) this.nodePool.put(cc.instantiate(this.itemTemplate));
},
createChip: function() {
return this.nodePool.size() > 0 ? this.nodePool.get() : cc.instantiate(this.itemTemplate);
},
putToPool: function(t) {
try {
this.nodePool && this.nodePool.put(t);
} catch (t) {}
},
clearPool: function() {
this.nodePool && this.nodePool.clear();
},
initMiniGame: function() {
for (var t = 0; t < this.columns.childrenCount; t++) try {
for (var e = this.columns.children[t], i = 0; i < this.maxItemColumn; i++) {
var n = this.createChip();
n.active = !0;
n.parent = e;
var o = Math.floor(5 * Math.random()) + 1;
n.children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[o];
}
} catch (t) {
console.error(t);
}
},
runAnimationSpin: function(t, e) {
var i = this;
this.dataMiniGame = null == e ? this.randIcon() : this.convertStringToArray(e.dataMiniGame);
if (t) for (var n = function() {
var t = i.columns.children[o], e = t.children;
e[0].children[0].getComponent(cc.Sprite).spriteFrame = i.sprFrameItems[i.dataMiniGame[o] - 1];
e[e.length - 1].children[0].getComponent(cc.Sprite).spriteFrame = i.sprFrameItems[i.dataMiniGame[o] - 1];
t.stopAllActions();
t.runAction(cc.sequence(cc.moveTo(i.spinDuration + i.addSpinDuration * o, cc.v2(t.getPosition().x, -1042)), cc.delayTime(.5 * o), cc.callFunc(function() {
t.setPosition(cc.v2(t.getPosition().x, 3));
})));
}, o = 0; o < this.columns.childrenCount; o++) n(); else for (o = 0; o < this.columns.childrenCount; o++) {
var s = this.columns.children[o], c = s.children;
c[0].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[this.dataMiniGame[o] - 1];
c[c.length - 1].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[this.dataMiniGame[o] - 1];
s.stopAllActions();
s.setPosition(cc.v2(s.getPosition().x, 3));
}
},
updateResult: function(t) {
for (var e = 0; e < this.columns.childrenCount; e++) this.columns.children[e].children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[t[e] - 1];
},
showEffectNohu: function() {
var t = this;
this.node && (this.nodeEffectHu.active = !0);
setTimeout(function() {
t.node && (t.nodeEffectHu.active = !1);
}, 3e3);
},
convertStringToArray: function(t) {
var e = [];
if (null != t) {
t = t.split(",");
for (var i = 0; i < t.length; i++) e.push(parseInt(t[i]));
} else e = this.randIcon();
return e;
},
randIcon: function() {
for (var t = [], e = 0; e <= 3; e++) {
var i = Math.floor(5 * Math.random()) + 1;
t.push(i);
}
return t;
},
setSpin: function(t) {
this.isSpin = t;
},
clearMiniGame: function() {
this.dataMiniGame = null;
this.isJackpot = !1;
this.nodeEffectHu.active = !1;
for (var t = 0; t < this.columns.childrenCount; t++) {
var e = this.columns.children[t];
e.stopAllActions();
for (var i = 0; i < this.maxItemColumn; i++) {
var n = e.children, o = Math.floor(5 * Math.random()) + 1;
n[t].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[o];
}
}
}
});
}).call(void 0);
cc._RF.pop();
}, {
"../../../../../framework/common/Tween": void 0
} ],
"XDTL.PlayerStatus": [ function(t, e) {
"use strict";
cc._RF.push(e, "a283eJYpFNGyZC+0/+82P1g", "XDTL.PlayerStatus");
(function() {
cc.XDTL_PlayerStatus = cc.Enum({
NOT_INGAME: "-1",
VIEWER: "0",
INGAME: "1",
WAITING: "2"
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.Player": [ function(t, e) {
"use strict";
cc._RF.push(e, "3cb68pMrF9P1YhV9Y9xMOKW", "XDTL.Player");
(function() {
cc.XDTL_Player = cc.Class({
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
this.borderVictoryLine = this.node.getChildByName("borderVictoryLine");
this.animLbWin = this.node.getComponentInChildren(cc.Animation);
this.nodeInfo = this.node.getChildByName("ava_money");
this.lbChip = this.nodeInfo.getChildByName("lbChip").getComponent(cc.LabelIncrement);
this.nodeInfo.active = !1;
},
resetPlayerResultUI: function() {
this.nodeWin.active = !1;
this.borderVictoryLine.active = !1;
this.nodeLose.active = !1;
this.lbWin.node.active = !1;
},
playerResultUI: function(t, e) {
this.nodeWin.active = !1;
this.borderVictoryLine.active = !1;
this.nodeLose.active = !1;
if (t) {
this.nodeWin.active = !0;
this.borderVictoryLine.active = !0;
this.lbWin.string = "+" + cc.Tool.getInstance().formatNumberKTX(e);
} else {
this.nodeLose.active = !0;
this.lbWin.string = cc.Tool.getInstance().formatNumberKTX(e);
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
(e <= 0 || e > 25) && (e = 1);
this.nickName = t.NickName;
this.avatar.setAvatar(cc.XDTL_Controller.getInstance().getAvatars()[e]);
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
this.avatar.setAvatar(cc.XDTL_Controller.getInstance().getAvatarDef());
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
"XDTL.PopupController": [ function(t, e) {
"use strict";
cc._RF.push(e, "e8517YwXoBMy4qiBraR2kEP", "XDTL.PopupController");
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
cc.XDTL_PopupController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.PopupViewBase": [ function(t, e) {
"use strict";
cc._RF.push(e, "9f023ohPKRHs5ePvLxK90DZ", "XDTL.PopupViewBase");
(function() {
cc.XDTL_PopupViewBase = cc.Class({
extends: cc.Component,
properties: {
prefabBetLines: cc.Prefab,
prefabHelp: cc.Prefab,
prefabHistory: cc.Prefab,
prefabTop: cc.Prefab,
prefabSessionDetail: cc.Prefab
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
"XDTL.PopupView": [ function(t, e) {
"use strict";
cc._RF.push(e, "430f31e3ZRBIYzqhNw1wUN1", "XDTL.PopupView");
(function() {
cc.XDTL_PopupView = cc.Class({
extends: cc.XDTL_PopupViewBase,
properties: {
prefabGroupUser: cc.Prefab
},
onLoad: function() {
cc.XDTL_PopupController.getInstance().setXXPopupView(this);
},
createGroupUserView: function() {
this.nodeGroupUser = this.createView(this.prefabGroupUser);
},
destroyGroupUserView: function() {
this.nodeGroupUser && this.nodeGroupUser.destroy();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.ResultView": [ function(t, e) {
"use strict";
cc._RF.push(e, "84386k1ocBHXaA+mhUCtWuf", "XDTL.ResultView");
(function() {
cc.XDTL_ResultView = cc.Class({
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
nodeLe3: cc.Node,
node2d2t: cc.Node
},
onLoad: function() {
cc.XDTL_Controller.getInstance().setXDTL_ResultView(this);
this.currentState = -1;
this.nodeResult = this.animResult.node;
this.nodeFxResult = this.nodeChan1.parent;
this.nodeViParent = this.spriteVis[0].node.parent;
this.batNanPos = cc.v2(0, 43);
this.resultSession = null;
},
reset: function() {},
updateResult: function(t, e, i, n, o) {
if (this.nodeBatNan) {
switch (n) {
case cc.XDTL_State.BETTING:
if (this.currentState !== n) {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.resultSession = null;
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(5, "Waiting", !1);
this.nodeResult.active = !1;
this.nodeViParent.active = !1;
this.nodeFxResult.active = !1;
}
break;

case cc.XDTL_State.OPEN_PLATE:
if (this.currentState !== n) {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.resultSession = null;
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(5, "Waiting", !1);
this.nodeResult.active = !1;
this.nodeViParent.active = !1;
this.nodeFxResult.active = !1;
this.playFxResult(e, i, o);
}
break;

case cc.XDTL_State.SHOW_RESULT:
if (this.currentState !== n) {
this.resultSession = null;
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeViParent.active = !0;
this.animationBat.node.active = !1;
this.playPayFx(t, e);
}
break;

case cc.XDTL_State.WAITING:
if (this.currentState !== n) {
cc.XDTL_Controller.getInstance().initGateChip();
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(5, "Waiting", !1);
this.nodeFxResult.active = !1;
if (null != this.resultSession) {
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
var s = this.resultSession.Dice1 + this.resultSession.Dice2 + this.resultSession.Dice3 + this.resultSession.Dice4;
0 == s ? this.animationBat.setAnimation(1, "4trang up", !1) : 1 == s ? this.animationBat.setAnimation(1, "3trang1doup", !1) : 2 == s ? this.animationBat.setAnimation(1, "2trang2doup", !1) : 3 == s ? this.animationBat.setAnimation(1, "3do1trangup", !1) : this.animationBat.setAnimation(1, "4doup", !1);
} else this.animationBat.setAnimation(1, "batup", !0);
}
break;

case cc.XDTL_State.SHAKING:
if (this.currentState !== n) {
this.nodeResult.active = !1;
this.nodeViParent.active = !1;
this.nodeFxResult.active = !1;
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(6, "XocXoc", !1);
this.resultSession = null;
}
}
this.currentState = n;
}
},
playFxResult: function(t, e, i) {
var n = this, o = this;
this.nodeFxResult.active = !0;
this.nodeResult.active = !0;
this.nodeViParent.active = !0;
this.animResult.stop();
this.nodeChan1.active = !1;
this.nodeChan2.active = !1;
this.nodeChan3.active = !1;
this.nodeLe1.active = !1;
this.nodeLe2.active = !1;
this.nodeLe3.active = !1;
this.node2d2t.active = !1;
var s = e.split(","), c = 0;
s.forEach(function(t) {
o.spriteVis[c].spriteFrame = o.sfVis[parseInt(t)];
o.spriteVis[c].node.active = !1;
c++;
});
if (cc.XDTL_Controller.getInstance().getIsNan() && !i) {
this.nodeDia.active = !1;
this.nodeBatNan.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(5, "Waiting", !1);
this.animationBat.node.active = !1;
setTimeout(function() {
o.nodeBatNan.active = !1;
}, 5e3);
} else {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(5, "Waiting", !1);
}
this.resultSession = t;
setTimeout(function() {
if (cc.XDTL_Controller.getInstance().getRoomId() > 0 && null != n.resultSession) {
n.animationBat.node.active = !0;
n.animationBat.clearTracks();
n.animationBat.setToSetupPose();
var t = n.resultSession.Dice1 + n.resultSession.Dice2 + n.resultSession.Dice3 + n.resultSession.Dice4;
0 == t ? n.animationBat.setAnimation(1, "4trangmo", !1) : 1 == t ? n.animationBat.setAnimation(1, "3trang1domo", !1) : 2 == t ? n.animationBat.setAnimation(1, "2trang2domo", !1) : 3 == t ? n.animationBat.setAnimation(1, "3do1trangmo", !1) : n.animationBat.setAnimation(1, "4domo", !1);
}
}, 1500);
console.log(o.resultSession);
setTimeout(function() {
1 == cc.XDTL_Controller.getInstance().getRoomId() && null != o.resultSession && o.currentState == cc.XDTL_State.OPEN_PLATE && cc.XDTL_Controller.getInstance().runAnimationSpin(!0, o.resultSession);
}, 2e3);
setTimeout(function() {
if (null != o.resultSession && o.resultSession.IsHu > 0 && 1 == cc.XDTL_Controller.getInstance().getRoomId() && o.currentState == cc.XDTL_State.OPEN_PLATE) {
cc.XDTL_Controller.getInstance().showEffectNohu(o.resultSession);
o.playFxHu(o.resultSession.IsHu);
}
}, 4e3);
},
playPayFx: function(t, e) {
var i = cc.XDTL_Controller.getInstance().getGateChips();
this.resultSession = e;
var n = parseInt(e.BigGate), o = parseInt(e.SmallGate);
switch (n) {
case cc.XDTL_Gate.EVEN:
this.animResult.play("chan_blink");
break;

case cc.XDTL_Gate.ODD:
this.animResult.play("le_blink");
}
switch (o) {
case cc.XDTL_Gate.THREE_UP:
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(2, "3 White 1 Red", !1);
this.nodeLe1.active = !0;
this.nodeLe2.active = !0;
break;

case cc.XDTL_Gate.THREE_DOWN:
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(1, "3 Red 1 White", !1);
this.nodeLe1.active = !0;
this.nodeLe3.active = !0;
break;

case cc.XDTL_Gate.FOUR_DOWN:
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(4, "4 White", !1);
this.nodeChan1.active = !0;
this.nodeChan3.active = !0;
break;

case cc.XDTL_Gate.FOUR_UP:
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(3, "4 Red", !1);
this.nodeChan1.active = !0;
this.nodeChan2.active = !0;
break;

case cc.XDTL_Gate.TWO_UP_TWO_DOWN:
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(3, "2 Red 2 White", !1);
this.nodeChan1.active = !0;
this.node2d2t.active = !0;
break;

default:
this.nodeChan1.active = !0;
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(0, "2 Red 2 White", !1);
}
var s = [ n, o ], c = [];
i.map(function(t, e) {
s.includes(e) || c.push(e);
}, this);
this.fxMoveChip(c, cc.XDTL_FX.LOSE);
setTimeout(function() {
this.fxMoveChip(s, cc.XDTL_FX.DEALER_PAY);
}.bind(this), 1e3);
setTimeout(function() {
this.fxMoveChip(s, cc.XDTL_FX.PAY);
}.bind(this), 2e3);
},
fxMoveChip: function(t, e) {
try {
var i = cc.XDTL_Controller.getInstance().getGateChips();
t.map(function(t) {
i[t] && i[t].length && i[t].forEach(function(t) {
switch (e) {
case cc.XDTL_FX.LOSE:
cc.XDTL_Controller.getInstance().playFxLost(t);
break;

case cc.XDTL_FX.DEALER_PAY:
cc.XDTL_Controller.getInstance().playFxDealerPay(t);
break;

case cc.XDTL_FX.PAY:
cc.XDTL_Controller.getInstance().playFxPay(t);
}
});
});
} catch (t) {}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.Result": [ function(t, e) {
"use strict";
cc._RF.push(e, "5acebJc5hxFVpZ/ZY6PmKy+", "XDTL.Result");
(function() {
cc.XDTL_Result = cc.Enum({
EVEN_FOUR_DOWN: 0,
ODD_THREE_DOWN: 1,
EVEN: 2,
ODD_THREE_UP: 3,
EVEN_FOUR_UP: 4
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.SettingRoomView": [ function(t, e) {
"use strict";
cc._RF.push(e, "e805djixRtKrKxeK1NtDbsN", "XDTL.SettingRoomView");
(function() {
cc.XDTL_SettingRoomView = cc.Class({
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
this.openPopup = !1;
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
"XDTL.SoiCauView": [ function(t, e) {
"use strict";
cc._RF.push(e, "2c6deBQ/oFK1bZtqqr/K0O1", "XDTL.SoiCauView");
(function() {
cc.XDTL_SoiCauView = cc.Class({
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
cc.XDTL_Controller.getInstance().setXDTL_SoiCauView(this);
this.rootPosX = -240;
this.rootPosY = -35;
this.spaceX = 25;
this.spaceY = 26;
this.maxItemPerCol = 4;
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
case cc.XDTL_Result.EVEN:
case cc.XDTL_Result.EVEN_FOUR_DOWN:
case cc.XDTL_Result.EVEN_FOUR_UP:
return "EVEN";

case cc.XDTL_Result.ODD_THREE_DOWN:
case cc.XDTL_Result.ODD_THREE_UP:
return "ODD";
}
},
draw: function(t) {
if (0 !== t.length) {
t = t.slice(0, 32);
this.even = 0;
this.fourUp = 0;
this.fourDown = 0;
this.odd = 0;
this.threeUp = 0;
this.threeDown = 0;
console.log(t);
for (var e = 0; e < t.length; e++) this.createNode(t[e]);
}
},
drawCol: function(t, e) {
for (var i = this.rootPosX + e * this.spaceX, n = this.rootPosY + (this.maxItemPerCol - t.length) * this.spaceY, o = 0; o < t.length; o++) {
console.log(t[o]);
this.createNode(t[o], cc.v2(i, n + this.spaceY * o));
}
},
createNode: function(t) {
switch (t) {
case cc.XDTL_Result.EVEN:
var e = cc.instantiate(this.nodeEvenTemp);
this.even++;
break;

case cc.XDTL_Result.EVEN_FOUR_DOWN:
e = cc.instantiate(this.nodeEvenTemp);
this.even++;
this.fourDown++;
break;

case cc.XDTL_Result.EVEN_FOUR_UP:
e = cc.instantiate(this.nodeEvenTemp);
this.even++;
this.fourUp++;
break;

case cc.XDTL_Result.ODD_THREE_DOWN:
e = cc.instantiate(this.nodeOddTemp);
this.odd++;
this.threeDown++;
break;

case cc.XDTL_Result.ODD_THREE_UP:
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
newDraw: function(t) {
this.even = 0;
this.fourUp = 0;
this.fourDown = 0;
this.odd = 0;
this.threeUp = 0;
this.threeDown = 0;
for (var e = 0; e < t.length; e++) {
var i = void 0;
switch (t[e]) {
case cc.XDTL_Result.EVEN:
i = cc.instantiate(this.nodeEvenTemp);
this.even++;
break;

case cc.XDTL_Result.EVEN_FOUR_DOWN:
i = cc.instantiate(this.nodeEvenTemp);
this.even++;
this.fourDown++;
break;

case cc.XDTL_Result.EVEN_FOUR_UP:
i = cc.instantiate(this.nodeEvenTemp);
this.even++;
this.fourUp++;
break;

case cc.XDTL_Result.ODD_THREE_DOWN:
i = cc.instantiate(this.nodeOddTemp);
this.odd++;
this.threeDown++;
break;

case cc.XDTL_Result.ODD_THREE_UP:
i = cc.instantiate(this.nodeOddTemp);
this.odd++;
this.threeUp++;
}
if (i) {
i.getComponent(cc.Sprite).spriteFrame = this.sfDots[t[e]];
this.nodeParent.addChild(i);
}
}
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
"XDTL.State": [ function(t, e) {
"use strict";
cc._RF.push(e, "6187bM4FOtCsp25bzt8mf3f", "XDTL.State");
(function() {
cc.XDTL_State = cc.Enum({
WAITING: 0,
SHAKING: 1,
BETTING: 2,
OPEN_PLATE: 3,
SHOW_RESULT: 4
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.TopItem": [ function(t, e) {
"use strict";
cc._RF.push(e, "5d1d3rMQKNNrKhQE7WcCoL0", "XDTL.TopItem");
(function() {
cc.XDTL_TopItem = cc.Class({
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
"XDTL.TopListView": [ function(t, e) {
"use strict";
cc._RF.push(e, "6079dA7AJhOF6Q/kfpUGRqA", "XDTL.TopListView");
(function() {
cc.XDTL_TopListView = cc.Class({
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
o.getComponent(cc.XDTL_TopItem).updateItem(this.messages[n], n);
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
var a = e[s].getComponent(cc.XDTL_TopItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XDTL_TopItem)).itemID + e.length;
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
"XDTL.TopView": [ function(t, e) {
"use strict";
cc._RF.push(e, "eac9ajqu1xI+r8vKpB0sJp5", "XDTL.TopView");
(function() {
cc.XDTL_TopView = cc.Class({
extends: cc.PopupBase,
properties: {
XXTopListView: cc.XDTL_TopListView
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
cc.XDTL_PopupController.getInstance().destroyTopView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"XDTL.View": [ function(t, e) {
"use strict";
cc._RF.push(e, "e7148HnvE1MB70KVeZZDKtw", "XDTL.View");
var i = t("NetConfig");
(function() {
cc.XDTL_View = cc.Class({
extends: cc.Component,
properties: {
spriteBack: cc.Sprite,
nodeRegisterLeave: cc.Node,
nodeParentChat: cc.Node,
prefabChat: cc.Prefab,
prefabGuide: cc.Prefab,
prefabUser: cc.Prefab,
nodeLobby: cc.Node,
nodeGame: cc.Node,
nodeHu: cc.Node,
lblJackpot: cc.LabelIncrementXX,
lblTotalPlayer: [ cc.Label ],
lblinfouser: [ cc.Label ],
spriteRoom: cc.Sprite,
spriteFrameRoom: [ cc.SpriteFrame ],
listAvtars: [ cc.SpriteFrame ],
XocXocSettingRoomView: cc.Node
},
onLoad: function() {
cc.XDTL_Controller.getInstance().setXXView(this);
cc.ChatRoomController.getInstance().setHubView(this);
cc.XDTL_Controller.getInstance().setAvatars(this.listAvtars);
lngui.UIWaitingLayout.showWaiting();
this.interval = null;
this.isActiveChat = !1;
this.lastTimeReconnect = new Date().getTime();
this.connectHub();
this.currentState = -1;
this.idPlayNow = 0;
this.isRegisterLeaveRoom = !1;
this.roomId = 0;
this.lblinfouser[1].string = this.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
this.lblinfouser[0].string = lngui.UserManager.instance.mainUserInfo.NickName;
},
start: function() {
cc.AudioController.getInstance().enableSound(this.sound);
},
onEnable: function() {
this.onLobbyPageGame(!0);
lngui.UIWaitingLayout.showWaiting();
},
onDestroy: function() {
var t = lngui.UserManager.instance.mainUserInfo.Money;
lngui.GameCoreManager.instance.updateTotalGold(t);
this.sendRequestOnHub(cc.MethodHubName.EXIT_LOBBY);
null !== this.interval && clearInterval(this.interval);
this.xxHub && this.xxHub.close();
this.unscheduleAllCallbacks();
cc.XDTL_Controller.getInstance().setXXView(null);
lngui.UIWaitingLayout.hideWaiting();
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
case cc.XDTL_State.BETTING:
case cc.XDTL_State.OPEN_PLATE:
case cc.XDTL_State.SHOW_RESULT:
case cc.XDTL_State.WAITING:
case cc.XDTL_State.SHAKING:
}
this.currentState = t.CurrentState;
this.startTimer(t.Ellapsed);
},
updateTimer: function(t) {
if (!(t < 1)) switch (this.currentState) {
case cc.XDTL_State.BETTING:
case cc.XDTL_State.OPEN_PLATE:
this.lbTimer.string = t;
this.lbTimer.font = t > 3 ? this.bmfNormal : this.bmfRed;
this.lbTimer.node.parent.active = !0;
break;

case cc.XDTL_State.SHOW_RESULT:
case cc.XDTL_State.WAITING:
case cc.XDTL_State.SHAKING:
this.lbTimer.node.parent.active = !1;
}
},
disconnectAndLogout: function() {
this.xxHub && this.xxHub.disconnect();
this.lastTimeReconnect = new Date().getTime();
},
connectHub: function() {
var t = {
url: "https://xocdiatulinh." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "xocdiatulinhHub",
ip: "http://18.138.207.162:9001/signalr/negotiate",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off("OnXocDiaWebSocKet", this.onResponeData, this);
cc.systemEvent.on("OnXocDiaWebSocKet", this.onResponeData, this);
this.xxHub = new lngui.GateSignalR();
this.xxHub.connect("OnXocDiaWebSocKet", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
},
reconnect: function() {
this.lastTimeReconnect = new Date().getTime();
this.xxHub.connect(this, cc.HubName.XocXocHub, this.connectionToken, !0);
},
onSendPlayInRoom: function(t, e) {
var i = parseInt(e);
if (i < 1 || i > 4) cc.PopupController.getInstance().showMessage("ID phòng không tồn tại!"); else {
this.roomId = i;
this.spriteRoom.spriteFrame = this.spriteFrameRoom[this.roomId];
cc.XDTL_Controller.getInstance().setRoomId(this.roomId);
this.onLobbyPageGame(!1);
lngui.UIWaitingLayout.showWaiting();
this.sendRequestOnHub(cc.MethodHubName.PLAY_NOW);
this.nodeHu.active = 1 == this.roomId;
}
},
onLobbyPageGame: function(t) {
this.nodeLobby.active = t;
this.nodeGame.active = !t;
},
sendRequestOnHub: function(t, e, i) {
switch (t) {
case cc.MethodHubName.ENTER_LOBBY:
this.sendSignalR("EnterLobby", [ 1 ]);
break;

case cc.MethodHubName.EXIT_LOBBY:
this.sendSignalR("ExitLobby", [ this.roomId ]);
break;

case cc.MethodHubName.PLAY_NOW:
this.sendSignalR("PlayNow", [ this.roomId, 1, 1 ]);
break;

case cc.MethodHubName.BET:
this.sendSignalR("Bet", [ e, i, this.roomId ]);
break;

case cc.MethodHubName.REGISTER_LEAVE_ROOM:
this.sendSignalR("RegisterLeaveRoom", []);
break;

case cc.MethodHubName.UNREGISTER_LEAVE_ROOM:
this.sendSignalR("UnregisterLeaveRoom", []);
break;

case cc.MethodHubName.SEND_MESSAGE:
this.xxHub.sendRoomMessage(e);
break;

case "PingLobby":
this.sendSignalR("PingLobby", []);
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
this.sendRequestOnHub("PingLobby");
lngui.UIWaitingLayout.hideWaiting();
},
getRoomId: function() {
return this.roomId;
},
onSlotsNegotiateResponse: function(t) {
this.connectionToken = t.ConnectionToken;
this.xxHub = new cc.Hub();
console.log(cc.HubName.XocXocHub, t.ConnectionToken);
this.xxHub.connect(this, cc.HubName.XocXocHub, t.ConnectionToken);
},
onHubMessage: function(t) {
var e = this, i = this;
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
if (void 0 !== t.M && t.M.length > 0) {
var n = t.M;
n.map(function(t) {
switch (t.M) {
case cc.MethodHubOnName.SESSION_INFO:
cc.XDTL_Controller.getInstance().updateInfo(t.A[0], t.A[0].Phrase, null);
cc.XDTL_Controller.getInstance().updateInput(t.A[0].Phrase);
break;

case cc.MethodHubOnName.GAME_HISTORY:
cc.XDTL_Controller.getInstance().resetDraw();
cc.XDTL_Controller.getInstance().draw(t.A[0]);
break;

case cc.MethodHubOnName.START_ACTION_TIMER:
var o = t.A;
cc.XDTL_Controller.getInstance().updateInfo(o[0], o[2], o[1]);
cc.XDTL_Controller.getInstance().updateResult(null, o[0].Result, o[0].Result.ChipsData, o[2]);
cc.XDTL_Controller.getInstance().updateInput(o[2]);
break;

case cc.MethodHubOnName.PLAYER_LEAVE:
0 === n.length && cc.XDTL_Controller.getInstance().playerLeave(t.A);
break;

case cc.MethodHubOnName.UPDATE_CONNECTION_STATUS:
cc.XDTL_Controller.getInstance().updateConnectionStatus(t.A);
break;

case cc.MethodHubOnName.UPDATE_PLAYER_STATUS:
cc.XDTL_Controller.getInstance().updatePlayerStatus(t.A[0]);
break;

case cc.MethodHubOnName.JOIN_GAME:
o = t.A[0], t.A[1];
cc.XDTL_Controller.getInstance().updateInfoCurrPlayer(o.Account);
lngui.UIWaitingLayout.hideWaiting();
break;

case cc.MethodHubOnName.BET_SESSION:
cc.XDTL_Controller.getInstance().showLastInput(t.A[0]);
break;

case cc.MethodHubOnName.BET_OF_ACCOUNT:
break;

case cc.MethodHubOnName.PLAYER_BET:
o = t.A;
cc.XDTL_Controller.getInstance().playerBet(o);
break;

case cc.MethodHubOnName.BET_SUCCESS:
break;

case cc.MethodHubOnName.WIN_RESULT_VIP:
if (t.A.length > 0) try {
setTimeout(function() {
cc.XDTL_Controller.getInstance().winResultVip(t.A[0]);
}, 2500);
} catch (t) {}
break;

case cc.MethodHubOnName.WIN_RESULT:
if (t.A.length > 0) try {
setTimeout(function() {
cc.XDTL_Controller.getInstance().winResult(t.A[0]);
}, 2500);
} catch (t) {}
break;

case cc.MethodHubOnName.TOTAL_WIN_MONEY:
t.A[0] > 0 && setTimeout(function() {
cc.XDTL_Controller.getInstance().totalUserWin(t.A[0]);
}, 2500);
break;

case cc.MethodHubOnName.PLAYER_MESSAGE:
case cc.MethodHubOnName.MESSAGE:
cc.PopupController.getInstance().showMessage(t.A[0]);
break;

case cc.MethodHubOnName.OPEN_PLATE_NOW:
cc.XDTL_Controller.getInstance().updateResult(null, t.A[0], t.A[1], cc.XDTL_State.OPEN_PLATE, !0);
cc.XDTL_Controller.getInstance().updateInput(cc.XDTL_State.OPEN_PLATE);
break;

case cc.MethodHubOnName.RECEIVE_MESSAGE:
cc.ChatRoomController.getInstance().addChatContent(t.A);
cc.XDTL_Controller.getInstance().playerShowBubbleChat(t.A);
break;

case cc.MethodHubOnName.SUMMARY_PLAYER:
cc.XDTL_Controller.getInstance().summaryPlayer(t.A[0]);
break;

case cc.MethodHubOnName.VIP_PLAYERS:
var s = t.A[0];
s.length > 0 && cc.XDTL_Controller.getInstance().vipPlayer(s);
break;

case "recieveMessage":
cc.ChatRoomController.getInstance().addChatContent(t.A);
cc.XDTL_Controller.getInstance().playerShowBubbleChat(t.A);
break;

case "ExitGamePlay":
lngui.UIWaitingLayout.hideWaiting();
e.onLobbyPageGame(!0);
break;

case "DashboardInfo":
if (t.A.length > 0 && 1 == i.nodeLobby.active) {
e.lblJackpot.tweenValueto(t.A[0]);
e.lblTotalPlayer[0].string = cc.Tool.getInstance().formatNumber(parseInt(t.A[1]));
e.lblTotalPlayer[1].string = cc.Tool.getInstance().formatNumber(parseInt(t.A[2]));
e.lblTotalPlayer[2].string = cc.Tool.getInstance().formatNumber(parseInt(t.A[3]));
e.lblTotalPlayer[3].string = cc.Tool.getInstance().formatNumber(parseInt(t.A[4]));
lngui.UIWaitingLayout.hideWaiting();
}
break;

case "UpdateJackpot":
1 == i.roomId && cc.XDTL_Controller.getInstance().updateJackpot(t.A[0]);
break;

case "UpdateCurrentSession":
1 == i.roomId && cc.XDTL_Controller.getInstance().runAnimationSpin(!1, t.A[0]);
break;

case cc.MethodHubOnName.UPDATE_ROOM_TIME:
cc.XDTL_Controller.getInstance().updateTimer(t.A[0]);
}
});
n && n.length > 0 && n.forEach(function(t) {
t.M === cc.MethodHubOnName.PLAYER_LEAVE && cc.XDTL_Controller.getInstance().playerLeave(t.A);
});
} else if (t.R && t.R.AccountID) {
cc.PopupController.getInstance().showBusy();
this.sendRequestOnHub(cc.MethodHubName.PLAY_NOW);
} else if (t.R && t.I === this.idPlayNow.toString()) {
this.idPlayNow = 0;
lngui.UIWaitingLayout.hideWaiting();
} else t.I;
},
onHubOpen: function() {
lngui.UIWaitingLayout.hideWaiting();
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
},
onHubClose: function() {
new Date().getTime() - this.lastTimeReconnect >= 1e3 * i.RECONNECT_TIME ? this.reconnect() : cc.director.getScheduler().schedule(this.reconnect, this, i.RECONNECT_TIME, 0, 0, !1);
},
onHubError: function() {
lngui.UIWaitingLayout.hideWaiting();
},
playerLeave: function(t) {
if (t[0] === lngui.UserManager.instance.mainUserInfo.AccountID) {
var e = t[1];
this.backLobbyClicked();
cc.PopupController.getInstance().showMessage(e);
}
},
helpClicked: function() {
var t = cc.instantiate(this.prefabGuide);
t.setPosition(0, 0);
this.nodeGame.addChild(t);
},
groupUserClicked: function() {
var t = cc.instantiate(this.prefabUser);
t.setPosition(580, 0);
this.nodeGame.addChild(t);
},
historyClicked: function() {
cc.XDTL_PopupController.getInstance().createHistoryView();
},
topClicked: function() {
cc.XDTL_PopupController.getInstance().createTopView();
},
graphClicked: function() {
cc.XDTL_PopupController.getInstance().createGraphView();
},
soundClicked: function() {
this.sound = !this.sound;
cc.Tool.getInstance().setItem("@Sound", this.sound);
cc.AudioController.getInstance().enableSound(this.sound);
},
backClicked: function() {
lngui.UIScreenManager.instance.popToRootScreen();
},
onBackToLobby: function() {
console.log("onclickback");
lngui.UIScreenManager.instance.popToRootScreen();
},
backLobbyClicked: function() {
lngui.UIWaitingLayout.showWaiting();
this.XocXocSettingRoomView.getComponent(cc.XDTL_SettingRoomView).closeSettingClicked();
this.sendRequestOnHub(cc.MethodHubName.EXIT_LOBBY);
},
chatClicked: function() {
var t = cc.instantiate(this.prefabChat);
t.setPosition(0, 0);
this.nodeGame.addChild(t);
},
formatNumber: function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
});
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: void 0
} ]
}, {}, [ "LabelIncrementXDTL", "ChatController", "ChatRoomController", "ChatRoomItem", "ChatRoomListView", "ChatRoomView", "ChatView", "XDTL.GetBigWinnerCommand", "XDTL.GroupUserCommand", "XDTL.HistoryCommand", "NoteDepth", "XDTL.ConnectionStatus", "XDTL.FX", "XDTL.Gate", "XDTL.PlayerStatus", "XDTL.Result", "XDTL.State", "DragonTigerHistoryListView", "XDTL.Assets", "XDTL.ChipItem", "XDTL.ChipPool", "XDTL.Controller", "XDTL.InfoView", "XDTL.InputView", "XDTL.MiniGame", "XDTL.ResultView", "XDTL.View", "XDTL.SoiCauView", "PlayerData", "XDTL.Player", "XDTL.PopupController", "XDTL.PopupView", "XDTL.PopupViewBase", "XDTL.SettingRoomView", "XDTL.GroupItem", "XDTL.GroupItem2", "XDTL.GroupUserListView", "XDTL.GroupUserView", "XDTL.HelpView", "XDTL.HelpView2", "XDTL.HistoryItem", "XDTL.HistoryListView", "XDTL.HistoryView", "XDTL.TopItem", "XDTL.TopListView", "XDTL.TopView", "SlotsHistoryItem" ]);