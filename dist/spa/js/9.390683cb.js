(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0225":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-card",{staticClass:"bg-primary text-white"},[t("q-bar",[t("div",{staticClass:"text-subtitle2 text-weight-bold"},[e._v("\n            "+e._s(e.whotGame.game.name)+"\n        ")]),t("q-space"),t("q-dialog",{model:{value:e.gameScoresDialog,callback:function(a){e.gameScoresDialog=a},expression:"gameScoresDialog"}},[t("gamescores",{attrs:{scoreCard:e.whotGame.scoreCard}})],1),t("q-btn",{attrs:{dense:"",round:"",color:"secondary",icon:"emoji_events"},on:{click:function(a){e.gameScoresDialog=!0}}}),t("q-btn",{attrs:{dense:"",round:"",color:e.whotSettings.sound?"positive":"dark",icon:e.whotSettings.sound?"volume_up":"volume_off"},on:{click:e.changeSound}}),t("q-btn",{attrs:{dense:"",unelevated:"",rounded:"",color:"negative q-px-md",icon:"close",label:"Leave Game"},on:{click:e.leaveGame}},[t("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1)],1),t("q-card-section",{attrs:{horizontal:""}},[t("q-scroll-area",{staticClass:"bg-grey-10 rounded-borders",staticStyle:{height:"200px",width:"100%"},attrs:{horizontal:""}},[t("div",{staticClass:"row q-pa-sm no-wrap"},e._l(e.whotGame.players,(function(a,o){return t("div",{key:a.id,staticClass:"q-mr-sm"},[e.whotUser.username!=a.name?t("playerbox",{attrs:{player:a,index:o}}):e._e()],1)})),0)])],1),t("q-card-section",{staticClass:"q-pa-sm"},[t("div",{staticClass:"row"},[t("q-banner",{key:e.componentKey,staticClass:"q-pa-xs text-dark bg-white lastMove",staticStyle:{width:"230px"},attrs:{"inline-actions":""}},[e._v("\n                "+e._s(e.whotGame.lastMove)+"\n                "),t("br"),""!=e.whotGame.whot.shape?t("div",{staticClass:"text-weight-bold text-secondary"},[e._v(e._s(e.whotGame.whot.shape))]):e._e()])],1),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-5 col-md-3"},[t("gametable")],1),e._l(e.whotGame.players,(function(a){return t("div",{key:a.id,staticClass:"col-12 col-sm-auto"},[e.whotUser.username==a.name?t("div",[t("playersbox",{key:e.componentKey,attrs:{player:a}})],1):e._e()])}))],2)]),t("q-dialog",{attrs:{persistent:""},model:{value:e.gameOverDialog,callback:function(a){e.gameOverDialog=a},expression:"gameOverDialog"}},[t("gameoverdialog",{attrs:{gameScores:e.whotGame.scoreCard},on:{closeDialog:e.closeGameOverDialog}})],1)],1)},s=[],n=(t("e6cf"),t("ded3")),i=t.n(n),l=t("2f62"),r={data:()=>({componentKey:0,gameScoresDialog:!1,gameOverDialog:!1}),computed:i()(i()({},Object(l["c"])("users",["whotUser"])),Object(l["c"])("game",["whotGame","whotSettings","gameShout"])),components:{playerbox:()=>Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"bff3")),playersbox:()=>Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"b51b")),gametable:()=>t.e(12).then(t.bind(null,"88e6")),gamescores:()=>Promise.all([t.e(0),t.e(25)]).then(t.bind(null,"090d")),gameoverdialog:()=>Promise.all([t.e(0),t.e(24)]).then(t.bind(null,"75db"))},methods:i()(i()({},Object(l["b"])("game",["updateSound"])),{},{changeSound(){console.log(this.whotSettings.sound),this.updateSound()},leaveGame(){this.$q.dialog({title:"Quit Game",message:"This must be a surely be a mistake! You sure?!",cancel:!0,persistent:!0}).onOk(()=>{this.$root.$emit("leaveGame"),this.$emit("closeDialog")}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},closeGameOverDialog(){this.gameOverDialog=!1}}),mounted(){this.$root.$on("refreshGameBoard",()=>{this.componentKey++}),this.$root.$on("refreshShouts",()=>{this.componentKey++}),this.$root.$on("gameOver",()=>{this.gameOverDialog=!0}),this.$root.$on("closeGameOverDialog",()=>{this.gameOverDialog=!1})}},c=r,m=(t("b4d1"),t("2877")),d=t("f09f"),g=t("d847"),h=t("2c91"),u=t("24e8"),b=t("9c40"),p=t("05c0"),v=t("a370"),w=t("4983"),y=t("54e1"),f=t("eebe"),S=t.n(f),q=Object(m["a"])(c,o,s,!1,null,"a3602a84",null);a["default"]=q.exports;S()(q,"components",{QCard:d["a"],QBar:g["a"],QSpace:h["a"],QDialog:u["a"],QBtn:b["a"],QTooltip:p["a"],QCardSection:v["a"],QScrollArea:w["a"],QBanner:y["a"]})},"240b":function(e,a,t){},b4d1:function(e,a,t){"use strict";var o=t("240b"),s=t.n(o);s.a}}]);