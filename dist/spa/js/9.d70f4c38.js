(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"64ae":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-card",{key:t.componentKey,staticStyle:{width:"250px"}},[e("q-card-section",{staticClass:"bg-primary text-white q-mb-none"},[e("div",{staticClass:"text-h6"},[t._v(t._s(t.game.game.name))]),t.game.game.private?e("div",[e("div",{staticClass:"text-body1"},[t._v(" "+t._s(t.game.game.id)+" ")]),e("div",{staticClass:"text-caption text-weight-bold text-secondary"},[t._v(" (Share gameID) ")])]):e("div",{staticClass:"text-caption"},[t._v("(waiting)")])]),e("q-linear-progress",{staticClass:"q-mt-none",attrs:{size:"10px",indeterminate:"",color:"warning"}}),t._l(t.game.totalPlayers,(function(a,s){return e("q-card-section",{key:a.id,staticClass:"q-pa-md"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("q-icon",{staticStyle:{"font-size":"3em"},attrs:{name:"how_to_reg",color:t.game.players[s]?"primary":"grey"}}),t.game.players[s]?e("div",{staticClass:"text-h6 text-primary"},[t._v("\n          "+t._s(t.game.players[s]?t.game.players[s].name:"Player "+s)+"\n        ")]):e("div",{staticClass:"text-subtitle2 text-black"},[t._v("\n          Player "+t._s(s)+"\n        ")])],1),t.game.players[s]?e("div",{staticClass:"col-6"},[e("q-chip",{attrs:{size:"sm",square:""}},[e("q-avatar",{attrs:{color:"red","text-color":"white"}},[t._v("\n            "+t._s(t.game.players[s].played)+"\n          ")]),t._v("\n          Played\n        ")],1),e("q-chip",{attrs:{size:"sm",square:""}},[e("q-avatar",{attrs:{color:"red","text-color":"white"}},[t._v("\n            "+t._s(t.game.players[s].won)+"\n          ")]),t._v("\n          Won\n        ")],1),e("q-chip",{attrs:{size:"sm",square:""}},[e("q-avatar",{attrs:{color:"red","text-color":"white"}},[t._v("\n            "+t._s(t.game.players[s].lost)+"\n          ")]),t._v("\n          Lost\n        ")],1)],1):t._e()]),e("q-separator")],1)})),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{attrs:{size:"sm",color:"negative","icon-right":"exit_to_app",label:"Leave"},on:{click:t.leaveGame}})],1)],2)},r=[],i={data:()=>({componentKey:0}),props:{game:{type:Object,required:!0}},methods:{leaveGame(){this.$root.$emit("leaveGame")}},mounted(){this.$root.$on("refreshWaitingGame",()=>{this.componentKey++})}},n=i,o=e("2877"),c=e("f09f"),l=e("a370"),m=e("6b1d"),p=e("0016"),d=e("b047"),v=e("cb32"),g=e("eb85"),y=e("4b7e"),_=e("9c40"),h=e("eebe"),q=e.n(h),b=Object(o["a"])(n,s,r,!1,null,null,null);a["default"]=b.exports;q()(b,"components",{QCard:c["a"],QCardSection:l["a"],QLinearProgress:m["a"],QIcon:p["a"],QChip:d["a"],QAvatar:v["a"],QSeparator:g["a"],QCardActions:y["a"],QBtn:_["a"]})}}]);