(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"58c2":function(t,e,r){},afc0:function(t,e,r){"use strict";var a=r("58c2"),s=r.n(a);s.a},b51b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-card",{staticClass:"bg-grey-9 playersBox q-pa-xs",attrs:{dark:"",bordered:""}},[r("div",[t.player?r("div",[r("q-btn",{staticClass:"q-mx-sm",attrs:{size:"xs",color:"secondary",icon:"campaign",label:"Warning Card"},on:{click:function(e){return t.shout("warning")}}}),r("q-btn",{attrs:{size:"xs",color:"light-blue-9",icon:"priority_high",label:"Last Card"},on:{click:function(e){return t.shout("lastCard")}}})],1):t._e(),r("q-separator"),r("q-scroll-area",{staticClass:"q-mt-sm bg-grey-10 rounded-borders",staticStyle:{height:"155px",width:"100%"},attrs:{visible:"","thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[t.player?r("div",t._l(t.player.cards,(function(t){return r("whotcard",{key:t.id,attrs:{type:"whotcard",card:t}})})),1):t._e()])],1)])},s=[],o=(r("e6cf"),r("ded3")),n=r.n(o),c=r("2f62"),i={data:()=>({thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2}}),props:{},computed:n()(n()(n()({},Object(c["c"])("users",["whotUser"])),Object(c["c"])("game",["whotGame","currentPlayer","whotColors"])),{},{player(){return this.whotGame.players.find(t=>t.name===this.whotUser.username)},index(){return this.whotGame.players.findIndex(t=>t.name===this.whotUser.username)}}),components:{whotcard:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"1d9b"))},methods:{shout(t){console.log("Shouting ",t)}}},l=i,d=(r("afc0"),r("2877")),u=r("f09f"),h=r("9c40"),b=r("eb85"),p=r("4983"),y=r("eebe"),m=r.n(y),w=Object(d["a"])(l,a,s,!1,null,"dc425c2a",null);e["default"]=w.exports;m()(w,"components",{QCard:u["a"],QBtn:h["a"],QSeparator:b["a"],QScrollArea:p["a"]})}}]);