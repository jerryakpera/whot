(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"857c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.games.length>0?a("q-list",{attrs:{bordered:""}},[a("q-scroll-area",{staticStyle:{height:"200px","max-width":"300px"},attrs:{"thumb-style":e.thumbStyle,"bar-style":e.barStyle}},e._l(e.games,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:""},on:{click:function(a){return e.joinGame(t.id)}}},[a("q-item-section",[a("q-item-label",[e._v(e._s(t.name))]),a("q-item-label",[a("q-rating",{attrs:{max:t.totalPlayers,value:t.activePlayers,size:"1.5em",color:"primary",icon:"face"}})],1)],1),a("q-item-section",{attrs:{avatar:""}},[t.mistakes?a("q-icon",{attrs:{color:"white",name:"priority_high"}}):e._e()],1)],1)})),1)],1):e._e()},r=[],o={data:()=>({thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#307351",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#307351",width:"9px",opacity:.2}}),props:{games:{type:Array,required:!0}},methods:{joinGame(e){this.$root.$emit("joinGame",e)}},mounted(){}},l=o,n=a("2877"),s=a("1c1c"),c=a("4983"),m=a("66e5"),p=a("4074"),d=a("0170"),u=a("daf4"),b=a("0016"),h=a("714f"),y=a("eebe"),g=a.n(y),w=Object(n["a"])(l,i,r,!1,null,null,null);t["default"]=w.exports;g()(w,"components",{QList:s["a"],QScrollArea:c["a"],QItem:m["a"],QItemSection:p["a"],QItemLabel:d["a"],QRating:u["a"],QIcon:b["a"]}),g()(w,"directives",{Ripple:h["a"]})}}]);