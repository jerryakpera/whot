(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"0225":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-card",{staticClass:"bg-primary text-white"},[t("q-bar",[t("q-space"),t("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:e.leaveGame}},[t("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1)],1),t("q-card-section",{attrs:{horizontal:""}},[t("q-scroll-area",{staticClass:"bg-grey-10 rounded-borders",staticStyle:{height:"240px",width:"100%"},attrs:{horizontal:""}},[t("div",{staticClass:"row q-pa-sm no-wrap"},e._l(e.whotGame.players,(function(a,s){return t("div",{key:a.id,staticClass:"q-mr-sm"},[e.whotUser.username!=a.name?t("playerbox",{attrs:{player:a,index:s}}):e._e()],1)})),0)])],1),t("q-card-section",{staticClass:"q-pa-sm"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-5 col-md-3"},[t("gametable")],1),t("div",{staticClass:"col-12 col-sm-auto"},[t("playersbox")],1)])])],1)},l=[],o=(t("e6cf"),t("ded3")),r=t.n(o),c=t("2f62"),n={computed:r()(r()({},Object(c["c"])("users",["whotUser"])),Object(c["c"])("game",["whotGame"])),components:{playerbox:()=>Promise.all([t.e(0),t.e(27)]).then(t.bind(null,"bff3")),playersbox:()=>t.e(12).then(t.bind(null,"b51b")),gametable:()=>t.e(9).then(t.bind(null,"88e6"))},methods:{leaveGame(){console.log("Are you sure!?")}}},i=n,d=t("2877"),p=t("f09f"),b=t("d847"),m=t("2c91"),u=t("9c40"),h=t("05c0"),w=t("a370"),f=t("4983"),y=t("eebe"),q=t.n(y),C=Object(d["a"])(i,s,l,!1,null,null,null);a["default"]=C.exports;q()(C,"components",{QCard:p["a"],QBar:b["a"],QSpace:m["a"],QBtn:u["a"],QTooltip:h["a"],QCardSection:w["a"],QScrollArea:f["a"]})}}]);