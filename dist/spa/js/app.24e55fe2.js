(function(e){function t(t){for(var o,n,c=t[0],i=t[1],u=t[2],d=0,l=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&l.push(r[n][0]),r[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},n={7:0},r={7:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{1:"b7721902",2:"8341e177",3:"1a9969cc",4:"60d53597",5:"cab33bdd",6:"8a4dd6ec",8:"2d0e5598",9:"cc595b06",10:"cb042ef3",11:"5e837e2d",12:"27592377",13:"4b5b9d15",14:"e6ddc97b",15:"19903d05",16:"13e637fb",17:"fca1beb1",18:"e66daa91",19:"f5c9b71c",20:"73547166",21:"3e45851b",22:"9bde98e3",23:"dee0ec04",24:"34f38c5c",25:"1e6fd6e4",26:"b151ccad",27:"e4e71960",28:"169fdbfe",29:"15ef7680",30:"2406f0d2",31:"799897e4",32:"9c203f59",33:"08e72b6b",34:"674c813c",35:"69908a67",36:"dab10748",37:"60809014"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={2:1,3:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var o="css/"+({}[e]||e)+"."+{1:"31d6cfe0",2:"427663f6",3:"b9c59c5a",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",8:"2438cd08",9:"b11a3779",10:"3173faf5",11:"5239abd2",12:"f1e2d2ff",13:"a71e6fb4",14:"f39d308a",15:"1cb311a6",16:"24b7043e",17:"61fc798e",18:"0e433876",19:"31d6cfe0",20:"31d6cfe0",21:"31d6cfe0",22:"31d6cfe0",23:"31d6cfe0",24:"31d6cfe0",25:"31d6cfe0",26:"31d6cfe0",27:"31d6cfe0",28:"31d6cfe0",29:"31d6cfe0",30:"31d6cfe0",31:"31d6cfe0",32:"31d6cfe0",33:"31d6cfe0",34:"31d6cfe0",35:"31d6cfe0",36:"31d6cfe0",37:"31d6cfe0"}[e]+".css",r=i.p+o,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===r))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===o||d===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete n[e],p.parentNode.removeChild(p),a(s)},p.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){n[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,a){o=r[e]=[t,a]}));t.push(o[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,a[1](l)}r[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;s.push([0,0]),a()})({0:function(e,t,a){e.exports=a("2f39")},"2f39":function(e,t,a){"use strict";a.r(t);a("5319");var o=a("c973"),n=a.n(o),r=(a("7d6e"),a("e54f"),a("985d"),a("31cd"),a("2b0e")),s=a("1f91"),c=a("42d2"),i=a("b05d"),u=a("2a19"),d=a("436b");r["a"].use(i["a"],{config:{notify:{}},lang:s["a"],iconSet:c["a"],plugins:{Notify:u["a"],Dialog:d["a"]}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mainBody",attrs:{id:"q-app"}},[a("router-view")],1)},p=[],h={name:"App"},g=h,f=(a("7de4"),a("2877")),m=Object(f["a"])(g,l,p,!1,null,"6ce32540",null),v=m.exports,b=a("2f62");a("e6cf");const y=a("5ad5"),w=a("81a1"),S={isLoggedIn:!1,user:{},profile:{}},P={isLoggedIn:()=>S.isLoggedIn,whotUser:()=>S.user},L={registerUser({commit:e},t){return new Promise((a,o)=>{y.post("/auth/register-user",t).then(t=>{const n=t.data;if(200===n.status){const t=n.data,o=w.encryptObj(t);e("setUser",t),e("setLoggedIn",!0),w.storage.save("whotUserData",o),a(n)}else 400===n.status&&(e("setUser",{}),e("setLoggedIn",!1),o(n))}).catch(t=>{e("setUser",{}),e("setLoggedIn",!1),o(t)})})},logUserIn({commit:e},t){return new Promise((a,o)=>{y.post("/auth/login",t).then(t=>{const n=t.data;if(200===n.status){const t=n.data,o=w.encryptObj(t);e("setUser",t),e("setLoggedIn",!0),w.storage.save("whotUserData",o),a(n)}else if(400===n.status){const t={};e("setUser",t),e("setLoggedIn",!1),o(n)}}).catch(t=>{const a={};e("setUser",a),e("setLoggedIn",!1),o(t)})})},logout({commit:e}){return new Promise((t,a)=>{w.storage.remove("whotUserData");const o={};e("setUser",o),e("setLoggedIn",!1),t()})},checkUserLogin({commit:e}){return new Promise((t,a)=>{const o=w.storage.get("whotUserData");if(!o){const t={};e("setUser",t),e("setLoggedIn",!1),a("logout")}const n=w.decryptObj(o);e("setUser",n),e("setLoggedIn",!0),t()})},fetchUserDetails({commit:e}){return new Promise((t,a)=>{if(w.storage.get("whotUserData")){let o={};const n=w.storage.get("whotUserData");w.decryptObj(n).then(n=>{o.headers={Authorization:n.accessToken};const r=n.email;y.post("/auth/details",{email:r},o).then(o=>{200!==o.data.status&&a(),e("setUser",o.data.data),t(o.data.data)}).catch(e=>{a()})})}})}},C={setUser(e,t){Object.assign(e.user,t)},setLoggedIn(e,t){t&&(e.isLoggedIn=!0),t||(e.isLoggedIn=!1)}};var O={namespaced:!0,state:S,getters:P,actions:L,mutations:C};a("a434"),a("ddb0");const U={fullDeck:[{id:"0",no:1,shape:"star",value:2},{id:"1",no:1,shape:"triangle",value:1},{id:"2",no:1,shape:"circle",value:1},{id:"3",no:1,shape:"cross",value:1},{id:"4",no:1,shape:"square",value:1},{id:"5",no:2,shape:"circle",value:2},{id:"6",no:2,shape:"triangle",value:2},{id:"7",no:2,shape:"square",value:2},{id:"8",no:2,shape:"star",value:4},{id:"9",no:2,shape:"cross",value:2},{id:"10",no:3,shape:"cross",value:3},{id:"11",no:3,shape:"star",value:6},{id:"12",no:3,shape:"triangle",value:3},{id:"13",no:3,shape:"circle",value:3},{id:"14",no:3,shape:"square",value:3},{id:"15",no:4,shape:"triangle",value:4},{id:"16",no:4,shape:"circle",value:4},{id:"17",no:4,shape:"star",value:8},{id:"18",no:5,shape:"triangle",value:5},{id:"19",no:5,shape:"circle",value:5},{id:"20",no:5,shape:"cross",value:5},{id:"21",no:5,shape:"square",value:5},{id:"22",no:5,shape:"star",value:10},{id:"23",no:7,shape:"triangle",value:7},{id:"24",no:7,shape:"circle",value:7},{id:"25",no:7,shape:"cross",value:7},{id:"26",no:7,shape:"square",value:7},{id:"27",no:7,shape:"star",value:14},{id:"28",no:8,shape:"triangle",value:8},{id:"29",no:8,shape:"circle",value:8},{id:"30",no:8,shape:"star",value:16},{id:"31",no:10,shape:"triangle",value:10},{id:"32",no:10,shape:"square",value:10},{id:"33",no:10,shape:"cross",value:10},{id:"34",no:10,shape:"circle",value:10},{id:"35",no:11,shape:"square",value:11},{id:"36",no:11,shape:"cross",value:11},{id:"37",no:11,shape:"circle",value:11},{id:"38",no:11,shape:"triangle",value:11},{id:"39",no:12,shape:"triangle",value:12},{id:"40",no:12,shape:"circle",value:12},{id:"41",no:13,shape:"cross",value:13},{id:"42",no:13,shape:"circle",value:13},{id:"43",no:13,shape:"triangle",value:13},{id:"44",no:13,shape:"square",value:13},{id:"45",no:14,shape:"square",value:14},{id:"46",no:14,shape:"triangle",value:14},{id:"47",no:14,shape:"cross",value:14},{id:"48",no:14,shape:"circle",value:14},{id:"49",no:20,shape:"whot",value:20},{id:"50",no:20,shape:"whot",value:20},{id:"51",no:20,shape:"whot",value:20},{id:"52",no:20,shape:"whot",value:20},{id:"53",no:20,shape:"whot",value:20}],game:{},games:[],colors:["red","indigo","green","orange","blue-grey","blue"],selectedCards:[],settings:{sound:!0},gameShout:{}},I={cards:()=>U.fullDeck,whotGame:()=>U.game,openGames:()=>U.games,currentPlayer:()=>U.game.players[U.game.currentPlayer],whotColors:()=>U.colors,selectedCards:()=>U.selectedCards,lastPlayedCards:()=>U.game.lastPlayedCards,playerShouts:()=>U.game.shouts,whotSettings:()=>U.settings,checkTurn(){return U.game.players[U.game.currentPlayer].name},gameShouts:()=>U.gameShout},j={updateGame({commit:e},t){return new Promise((a,o)=>{e("clearSelectedCards"),e("updateGame",t),a()})},setWhotShape({commit:e},t){return new Promise((a,o)=>{e("updateWhotShape",t),a()})},updateGamesList({commit:e},t){return new Promise((a,o)=>{e("updateGamesList",t),a()})},selectACard({commit:e},t){return new Promise((a,o)=>{e("selectCard",t),a()})},removeCard({commit:e},t){return new Promise((a,o)=>{e("removeCard",t),a()})},setShout({commit:e},t){e("setShout",t)},updateSound({commit:e}){e("updateSound")},updateShout({commit:e},t){return new Promise((a,o)=>{e("updateShout",t),a()})}},k={updateGame(e,t){Object.assign(e.game,t)},updateShout(e,t){e.game.shouts=[],e.game.shouts=[...t]},updateSound(e){e.settings.sound=!e.settings.sound},updateWhotShape(e,t){const a={state:!0,shape:t};Object.assign(e.game.whot,a)},updateGamesList(e,t){e.games=[...t]},selectCard(e,t){if(0!=e.selectedCards.length){let a=e.fullDeck.filter(t=>t.id===e.selectedCards[0])[0];const o=e.fullDeck.filter(e=>e.id===t.id)[0];a.no===o.no&&e.selectedCards.push(t.id)}else e.selectedCards.push(t.id)},removeCard(e,t){const a=e.selectedCards.findIndex(e=>t.id==e);e.selectedCards.splice(a,1)},clearSelectedCards(e){e.selectedCards=[]},setShout(e){console.log("Shouting");const t=e.game.players[e.game.currentPlayer].id;if(console.log(t),0==e.game.shouts.length&&e.game.shouts.push(t),e.game.shouts.includes(t)){const a=e.game.shouts.findIndex(e=>e===t);e.game.shouts.splice(a,1)}console.log(0,e.game.shouts)}};var q={namespaced:!0,state:U,getters:I,actions:j,mutations:k};r["a"].use(b["a"]);var x=function(){const e=new b["a"].Store({modules:{users:O,game:q},strict:!1});return e},D=a("8c4f");const A=[{path:"/",component:()=>Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"713b")),meta:{requiresAuth:!0},children:[{path:"/",name:"Landing",component:()=>Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"eabb"))},{path:"/login",name:"Login",component:()=>Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"eabb"))},{path:"/lobby",name:"Lobby",component:()=>Promise.all([a.e(0),a.e(18)]).then(a.bind(null,"2f07")),meta:{requiresAuth:!0}},{path:"/onboarding",name:"Onboarding",component:()=>Promise.all([a.e(0),a.e(37)]).then(a.bind(null,"e029")),meta:{requiresAuth:!0}}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(36)]).then(a.bind(null,"e51e"))}];var E=A,_=a("81a1"),T=a.n(_);r["a"].use(D["a"]);var G=function(){const e=new D["a"]({scrollBehavior:()=>({x:0,y:0}),routes:E,mode:"history",base:"/"});return e.beforeEach((e,t,a)=>{const o=T.a.storage.get("whotUserData");"Login"===e.name||o||a({name:"Login"}),"Landing"==e.name&&o?a({name:"Lobby"}):a()}),e},N=function(){return B.apply(this,arguments)};function B(){return B=n()((function*(){const e="function"===typeof x?yield x({Vue:r["a"]}):x,t="function"===typeof G?yield G({Vue:r["a"],store:e}):G;e.$router=t;const a={router:t,store:e,render:e=>e(v),el:"#q-app"};return{app:a,store:e,router:t}})),B.apply(this,arguments)}var J=a("bc3a"),M=a.n(J);r["a"].prototype.$axios=M.a;const V="/";function W(){return $.apply(this,arguments)}function $(){return $=n()((function*(){const{app:e,store:t,router:a}=yield N();let o=!1;const n=e=>{o=!0;const t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),c=[void 0];for(let u=0;!1===o&&u<c.length;u++)if("function"===typeof c[u])try{yield c[u]({app:e,router:a,store:t,Vue:r["a"],ssrContext:null,redirect:n,urlPath:s,publicPath:V})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&new r["a"](e)})),$.apply(this,arguments)}W()},"31cd":function(e,t,a){},"5ad5":function(e,t,a){const o=a("bc3a"),n=o.create({baseURL:"https://whotserver.herokuapp.com/api/v1/"});e.exports=n},"7de4":function(e,t,a){"use strict";var o=a("bb2b"),n=a.n(o);n.a},"81a1":function(e,t,a){a("e6cf");var o=a("6aa0"),n=a("f1dd");function r(e){const t=JSON.stringify(e);var a=n.encode(t);return o.encode(a)}function s(e){return new Promise((t,a)=>{t(JSON.parse(o.decode(e)))})}function c(e,t){console.log("checking user")}const i={save:(e,t)=>{localStorage.setItem(e,t)},get:e=>!!localStorage.getItem(e)&&localStorage.getItem(e),remove:e=>{localStorage.getItem(e)&&localStorage.removeItem(e)}};e.exports={encryptObj:r,decryptObj:s,storage:i,checkUserTurn:c}},bb2b:function(e,t,a){}});