(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{de8d:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-card",{staticClass:"bg-primary text-white"},[t("q-bar",[t("q-icon",{attrs:{name:"games"}}),t("div",{staticClass:"text-subtitle2"},[e._v("Host Game")]),t("q-space"),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[t("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1)],1),t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v("Create a game")])]),t("q-card-section",{staticClass:"q-pa-xs q-ma-xs"},[t("q-input",{ref:"name",staticClass:"q-ma-xs text-white",attrs:{"bg-color":"white",filled:"",placeholder:"name",dense:"",rules:[function(e){return!!e||"required"}],"lazy-rules":""},on:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.submitHostGame(a)}},model:{value:e.game.name,callback:function(a){e.$set(e.game,"name",a)},expression:"game.name"}})],1),t("q-card-section",{staticClass:"q-pa-xs q-ma-xs"},[t("div",{staticClass:"text-subtitle2"},[e._v("No of Players")]),t("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{"no-caps":"",rounded:"",unelevated:"","toggle-color":"secondary",color:"white","text-color":"primary",options:[{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6}]},model:{value:e.game.totalPlayers,callback:function(a){e.$set(e.game,"totalPlayers",a)},expression:"game.totalPlayers"}})],1),t("q-card-section",{staticClass:"q-pa-xs q-ma-xs"},[t("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{"no-caps":"",rounded:"",unelevated:"","toggle-color":"secondary",color:"white","text-color":"primary",options:[{label:"Mistakes On",value:!0},{label:"Mistakes Off",value:!1}]},model:{value:e.game.mistakes,callback:function(a){e.$set(e.game,"mistakes",a)},expression:"game.mistakes"}})],1),t("q-card-section",{staticClass:"q-pa-xs q-ma-xs"},[t("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{"no-caps":"",rounded:"",unelevated:"","toggle-color":"secondary",color:"white","text-color":"primary",options:[{label:"Normal",value:"normal"},{label:"Tournament",value:"tournament"}]},model:{value:e.game.mode,callback:function(a){e.$set(e.game,"mode",a)},expression:"game.mode"}})],1),t("q-card-section",{staticClass:"q-pa-xs q-ma-xs"},[t("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{"no-caps":"",rounded:"",unelevated:"","toggle-color":"secondary",color:"white","text-color":"primary",options:[{label:"Open",value:!1},{label:"Closed",value:!0}]},model:{value:e.game.private,callback:function(a){e.$set(e.game,"private",a)},expression:"game.private"}})],1),t("q-card-actions",{attrs:{align:"right"}},[t("q-btn",{attrs:{unelevated:"",rounded:"",color:"secondary",label:"Create"},on:{click:e.submitHostGame}})],1)],1)},o=[],l={data:()=>({game:{name:"",mistakes:!0,mode:"normal",private:!1,totalPlayers:2}}),methods:{submitHostGame(){this.$refs.name.validate(),this.$refs.name.hasError||this.hostNewGame()},hostNewGame(){this.$root.$emit("hostNewGame",this.game)}},mounted(){this.$refs.name.focus()}},n=l,r=t("2877"),c=t("f09f"),i=t("d847"),m=t("0016"),u=t("2c91"),d=t("9c40"),p=t("05c0"),g=t("a370"),v=t("27f9"),b=t("6a67"),q=t("4b7e"),x=t("7f67"),f=t("eebe"),y=t.n(f),h=Object(r["a"])(n,s,o,!1,null,null,null);a["default"]=h.exports;y()(h,"components",{QCard:c["a"],QBar:i["a"],QIcon:m["a"],QSpace:u["a"],QBtn:d["a"],QTooltip:p["a"],QCardSection:g["a"],QInput:v["a"],QBtnToggle:b["a"],QCardActions:q["a"]}),y()(h,"directives",{ClosePopup:x["a"]})}}]);