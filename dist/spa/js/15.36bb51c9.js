(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"4a58":function(e,t,r){"use strict";var a=r("be49"),s=r.n(a);s.a},b51b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",{key:e.componentKey,staticClass:"bg-grey-9 playersBox q-pa-xs q-mt-sm",class:e.checkTurn?"turnBorder":"",attrs:{dark:"",bordered:""}},[r("div",[e.player?r("div",[r("q-chip",{attrs:{size:"sm",square:""}},[r("q-avatar",{attrs:{color:"primary","text-color":"white"}},[e._v("\n                    "+e._s(e.player.cards.length)+"\n                ")]),e._v("\n                C A R D S\n            ")],1),r("q-btn",{attrs:{size:"xs",color:"light-blue-9",icon:"priority_high",label:"Last Card"},on:{click:function(t){return e.shout("lastCard")}}})],1):e._e(),r("q-separator"),r("q-scroll-area",{staticClass:"q-mt-sm bg-grey-10 rounded-borders",staticStyle:{height:"155px",width:"100%"},attrs:{visible:"","thumb-style":e.thumbStyle,"bar-style":e.barStyle}},[e.player?r("div",e._l(e.player.cards,(function(e){return r("whotcard",{key:e.id,attrs:{type:"whotcard",card:e}})})),1):e._e()])],1)])},s=[],o=(r("e6cf"),r("ded3")),n=r.n(o),c=r("2f62"),i={data:()=>({thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},componentKey:0}),props:{player:{type:Object,required:!0}},computed:n()(n()(n()({},Object(c["c"])("users",["whotUser"])),Object(c["c"])("game",["whotGame","currentPlayer","whotColors","playerShouts"])),{},{index(){return this.whotGame.players.findIndex(e=>e.name===this.whotUser.username)},checkTurn(){return this.whotGame.players[this.whotGame.currentPlayer].name===this.whotUser.username}}),components:{whotcard:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"1d9b"))},methods:n()(n()({},Object(c["b"])("game",["setShout"])),{},{shout(e){this.checkTurn&&this.setShout(e)}}),mounted(){this.$root.$on("refreshGameBoard",()=>{this.componentKey++})}},l=i,h=(r("4a58"),r("2877")),d=r("f09f"),u=r("b047"),p=r("cb32"),b=r("9c40"),y=r("eb85"),m=r("4983"),w=r("eebe"),f=r.n(w),g=Object(h["a"])(l,a,s,!1,null,"39733d6b",null);t["default"]=g.exports;f()(g,"components",{QCard:d["a"],QChip:u["a"],QAvatar:p["a"],QBtn:b["a"],QSeparator:y["a"],QScrollArea:m["a"]})},be49:function(e,t,r){}}]);