(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"0225":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"bg-primary text-white"},[a("q-bar",[a("div",{staticClass:"text-subtitle2 text-weight-bold"},[e._v("\n            "+e._s(e.whotGame.game.name)+"\n        ")]),a("q-space"),a("q-btn",{attrs:{dense:"",unelevated:"",rounded:"",color:"negative q-px-md",icon:"close",label:"Leave Game"},on:{click:e.leaveGame}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1)],1),a("q-card-section",{attrs:{horizontal:""}},[a("q-scroll-area",{staticClass:"bg-grey-10 rounded-borders",staticStyle:{height:"200px",width:"100%"},attrs:{horizontal:""}},[a("div",{staticClass:"row q-pa-sm no-wrap"},e._l(e.whotGame.players,(function(t,s){return a("div",{key:t.id,staticClass:"q-mr-sm"},[e.whotUser.username!=t.name?a("playerbox",{attrs:{player:t,index:s}}):e._e()],1)})),0)])],1),a("q-card-section",{staticClass:"q-pa-sm"},[a("div",{staticClass:"row"},[a("q-banner",{key:e.componentKey,staticClass:"q-pa-xs text-dark bg-white",staticStyle:{width:"230px"},attrs:{"inline-actions":""}},[e._v("\n                "+e._s(e.whotGame.lastMove)+"\n                "),a("br"),""!=e.whotGame.whot.shape?a("div",{staticClass:"text-weight-bold text-secondary"},[e._v(e._s(e.whotGame.whot.shape))]):e._e()])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-5 col-md-3"},[a("gametable")],1),e._l(e.whotGame.players,(function(t){return a("div",{key:t.id,staticClass:"col-12 col-sm-auto"},[e.whotUser.username==t.name?a("div",[a("playersbox",{key:e.componentKey,attrs:{player:t}})],1):e._e()])}))],2)])],1)},o=[],n=(a("e6cf"),a("ded3")),l=a.n(n),i=a("2f62"),r={data:()=>({componentKey:0}),computed:l()(l()({},Object(i["c"])("users",["whotUser"])),Object(i["c"])("game",["whotGame"])),components:{playerbox:()=>Promise.all([a.e(0),a.e(14)]).then(a.bind(null,"bff3")),playersbox:()=>Promise.all([a.e(0),a.e(15)]).then(a.bind(null,"b51b")),gametable:()=>a.e(9).then(a.bind(null,"88e6")),powerbutton:()=>a.e(13).then(a.bind(null,"2705"))},methods:{leaveGame(){this.$q.dialog({title:"Quit Game",message:"This must be a surely be a mistake! You sure?!",cancel:!0,persistent:!0}).onOk(()=>{this.$root.$emit("leaveGame"),this.$emit("closeDialog")}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})}},mounted(){this.$root.$on("refreshGameBoard",()=>{this.componentKey++})}},c=r,m=a("2877"),d=a("f09f"),h=a("d847"),p=a("2c91"),b=a("9c40"),u=a("05c0"),w=a("a370"),y=a("4983"),v=a("54e1"),x=a("eebe"),g=a.n(x),C=Object(m["a"])(c,s,o,!1,null,null,null);t["default"]=C.exports;g()(C,"components",{QCard:d["a"],QBar:h["a"],QSpace:p["a"],QBtn:b["a"],QTooltip:u["a"],QCardSection:w["a"],QScrollArea:y["a"],QBanner:v["a"]})}}]);