(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"28d4":function(e,t,r){},"81dd":function(e,t,r){"use strict";var a=r("28d4"),o=r.n(a);o.a},b51b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",{key:e.componentKey,staticClass:"bg-grey-9 playersBox q-pa-xs q-mt-sm",class:e.checkTurn?"turnBorder":"",attrs:{dark:"",bordered:""}},[r("div",[e.player?r("div",[e._v("\n            "+e._s(e.playerShouts)+"\n            "),r("q-btn",{staticClass:"q-mx-sm",attrs:{size:"xs",color:"deep-orange",icon:"campaign",label:"Warning Card"},on:{click:function(t){return e.shout("warning")}}}),r("q-btn",{attrs:{size:"xs",color:"light-blue-9",icon:"priority_high",label:"Last Card"},on:{click:function(t){return e.shout("lastCard")}}})],1):e._e(),r("q-separator"),r("q-scroll-area",{staticClass:"q-mt-sm bg-grey-10 rounded-borders",staticStyle:{height:"155px",width:"100%"},attrs:{visible:"","thumb-style":e.thumbStyle,"bar-style":e.barStyle}},[e.player?r("div",e._l(e.player.cards,(function(e){return r("whotcard",{key:e.id,attrs:{type:"whotcard",card:e}})})),1):e._e()])],1)])},o=[],s=(r("e6cf"),r("ded3")),n=r.n(s),c=r("2f62"),i={data:()=>({thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},componentKey:0}),props:{player:{type:Object,required:!0}},computed:n()(n()(n()({},Object(c["c"])("users",["whotUser"])),Object(c["c"])("game",["whotGame","currentPlayer","whotColors","playerShouts"])),{},{index(){return this.whotGame.players.findIndex(e=>e.name===this.whotUser.username)},checkTurn(){return this.whotGame.players[this.whotGame.currentPlayer].name===this.whotUser.username}}),components:{whotcard:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"1d9b"))},methods:n()(n()({},Object(c["b"])("game",["setShout"])),{},{shout(e){this.checkTurn&&(this.setShout(e),this.$root.$emit("refreshGameBoard"))}}),mounted(){this.$root.$on("refreshGameBoard",()=>{this.componentKey++})}},d=i,l=(r("81dd"),r("2877")),h=r("f09f"),u=r("9c40"),p=r("eb85"),b=r("4983"),m=r("eebe"),y=r.n(m),w=Object(l["a"])(d,a,o,!1,null,"43f62388",null);t["default"]=w.exports;y()(w,"components",{QCard:h["a"],QBtn:u["a"],QSeparator:p["a"],QScrollArea:b["a"]})}}]);