(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{de8d:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"bg-primary text-white"},[a("q-bar",[a("q-icon",{attrs:{name:"games"}}),a("div",{staticClass:"text-subtitle2"},[e._v("Host Game")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1)],1),e.loading?a("q-card-section",{staticClass:"text-center"},[a("loading")],1):e._e(),e.loading?e._e():a("q-card-section",{staticClass:"q-pa-xs q-ma-xs"},[a("div",{staticClass:"text-subtitle2 q-mb-xs"},[e._v("Create a game")]),a("div",{staticClass:"text-caption q-ml-sm text-secondary"},[e._v("Name of game")]),a("q-input",{ref:"name",attrs:{"bg-color":"white",filled:"",placeholder:"name",dense:"",rules:[function(e){return!!e||"required"}],"lazy-rules":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitHostGame(t)}},model:{value:e.game.name,callback:function(t){e.$set(e.game,"name",t)},expression:"game.name"}})],1),e.loading?e._e():a("q-card-section",{staticClass:"q-pa-xs q-ma-xs"},[a("div",{staticClass:"text-caption q-ml-sm text-secondary"},[e._v("No of players")]),a("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{spread:"","no-caps":"",rounded:"",unelevated:"","toggle-color":"secondary",color:"white","text-color":"primary",options:[{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}]},model:{value:e.game.totalPlayers,callback:function(t){e.$set(e.game,"totalPlayers",t)},expression:"game.totalPlayers"}})],1),e.loading?e._e():a("q-card-section",{staticClass:"q-pa-xs q-ma-xs"},[a("div",{staticClass:"text-caption q-ml-sm text-secondary"},[e._v("How many cards each")]),a("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{"no-caps":"",rounded:"",unelevated:"","toggle-color":"secondary",color:"white","text-color":"primary",options:[{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"7",value:7}]},model:{value:e.game.noOfCards,callback:function(t){e.$set(e.game,"noOfCards",t)},expression:"game.noOfCards"}})],1),e.loading?e._e():a("q-card-section",{staticClass:"q-pa-xs q-ma-xs"},[a("div",{staticClass:"text-caption q-ml-sm text-secondary"},[e._v("Pick two for mistakes?")]),a("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{spread:"","no-caps":"",rounded:"",unelevated:"","toggle-color":"secondary",color:"white","text-color":"primary",options:[{label:"Mistakes On",value:!0},{label:"Mistakes Off",value:!1}]},model:{value:e.game.mistakes,callback:function(t){e.$set(e.game,"mistakes",t)},expression:"game.mistakes"}})],1),e.loading?e._e():a("q-card-section",{staticClass:"q-pa-xs q-ma-xs"},[a("div",{staticClass:"text-caption q-ml-sm text-secondary"},[e._v("Game open for anyone to join")]),a("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{spread:"","no-caps":"",rounded:"",unelevated:"","toggle-color":"secondary",color:"white","text-color":"primary",options:[{label:"Open",value:!1},{label:"Closed",value:!0}]},model:{value:e.game.private,callback:function(t){e.$set(e.game,"private",t)},expression:"game.private"}})],1),e.loading?e._e():a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{unelevated:"",rounded:"",color:"secondary",label:"Create"},on:{click:e.submitHostGame}})],1)],1)},o=[],l=(a("e6cf"),a("ded3")),n=a.n(l),i=a("2f62"),c={data:()=>({loading:!1,whotUserDetails:{},game:{name:"",mistakes:!0,mode:"hno",private:!1,totalPlayers:2,noOfCards:4}}),computed:n()({},Object(i["c"])("users",["whotUser"])),components:{loading:()=>a.e(1).then(a.bind(null,"c202"))},methods:n()(n()({},Object(i["b"])("users",["fetchUserDetails","logout"])),{},{submitHostGame(){this.$refs.name.validate(),this.$refs.name.hasError||this.hostNewGame()},hostNewGame(){this.$root.$emit("hostNewGame",this.game)},fetchProfile(){this.loading=!0,this.fetchUserDetails().then(e=>{this.whotUserDetails=e,this.loading=!1}).catch(()=>{this.loading=!1,this.logout().then(()=>{this.$router.push("/")})})}}),mounted(){this.$refs.name.focus(),this.fetchProfile()}},r=c,d=a("2877"),m=a("f09f"),u=a("d847"),g=a("0016"),p=a("2c91"),v=a("9c40"),h=a("05c0"),b=a("a370"),f=a("27f9"),x=a("6a67"),q=a("4b7e"),y=a("7f67"),C=a("eebe"),w=a.n(C),k=Object(d["a"])(r,s,o,!1,null,null,null);t["default"]=k.exports;w()(k,"components",{QCard:m["a"],QBar:u["a"],QIcon:g["a"],QSpace:p["a"],QBtn:v["a"],QTooltip:h["a"],QCardSection:b["a"],QInput:f["a"],QBtnToggle:x["a"],QCardActions:q["a"]}),w()(k,"directives",{ClosePopup:y["a"]})}}]);