(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"25a5":function(t,a,e){"use strict";var s=e("ac92"),c=e.n(s);c.a},ac92:function(t,a,e){},cccc:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-pa-xs",staticStyle:{display:"inline-block"}},[e("div",{staticClass:"bg-white cardBox q-ma-xs q-pa-xs",on:{click:t.selectCard}},[e("div",{staticClass:"card",staticStyle:{cursor:"pointer",width:"100%"}},[e("div",[e("div",{staticClass:"no"},[t._v(t._s(t.card.no))]),e("q-badge",{staticClass:"value",attrs:{"text-color":"white",label:t.card.value}}),e("div",{staticClass:"shape text-center",class:t.card.shape}),e("div",{staticClass:"text-right bottom"},[e("q-badge",{staticClass:"value value-bottom",attrs:{"text-color":"white",label:t.card.value}}),e("div",{staticClass:"num text-right"},[t._v(t._s(t.card.no))])],1)],1)])])])},c=[],i=e("ded3"),d=e.n(i),r=e("2f62"),l={data:()=>({selected:[]}),props:{card:{type:Object,required:!0}},computed:{},methods:d()(d()({},Object(r["b"])("games",["selectACard","removeCard"])),{},{selectCard(){const t=this.selectedCards.findIndex(t=>t==this.card.id);t>=0?this.removeCard(this.card):this.selectACard(this.card)}}),mounted(){}},n=l,o=(e("25a5"),e("2877")),u=e("58a81"),v=e("eebe"),h=e.n(v),p=Object(o["a"])(n,s,c,!1,null,"79722d18",null);a["default"]=p.exports;h()(p,"components",{QBadge:u["a"]})}}]);