(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{7139:function(t,e,c){"use strict";c.r(e);var a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("q-card",{staticStyle:{width:"150px"}},[c("q-card-section",[c("div",{staticClass:"text-h6"},[t._v("Select shape")])]),c("q-card-section",{staticClass:"q-pt-none text-center"},[c("q-btn",{staticStyle:{width:"120px"},attrs:{color:"white","text-color":"black",label:"Square"},on:{click:function(e){return t.selectShape("square")}}})],1),c("q-card-section",{staticClass:"q-pt-none text-center"},[c("q-btn",{staticStyle:{width:"120px"},attrs:{color:"white","text-color":"black",label:"Circle"},on:{click:function(e){return t.selectShape("circle")}}})],1),c("q-card-section",{staticClass:"q-pt-none text-center"},[c("q-btn",{staticStyle:{width:"120px"},attrs:{color:"white","text-color":"black",label:"Cross"},on:{click:function(e){return t.selectShape("cross")}}})],1),c("q-card-section",{staticClass:"q-pt-none text-center"},[c("q-btn",{staticStyle:{width:"120px"},attrs:{color:"white","text-color":"black",label:"Star"},on:{click:function(e){return t.selectShape("star")}}})],1),c("q-card-section",{staticClass:"q-pt-none text-center"},[c("q-btn",{staticStyle:{width:"120px"},attrs:{color:"white","text-color":"black",label:"triangle"},on:{click:function(e){return t.selectShape("triangle")}}})],1)],1)},n=[],l={methods:{selectShape(t){this.$root.$emit("shapeSelected",t),this.$emit("closeDialog")}}},s=l,o=c("2877"),r=c("f09f"),i=c("a370"),p=c("9c40"),h=c("eebe"),d=c.n(h),u=Object(o["a"])(s,a,n,!1,null,null,null);e["default"]=u.exports;d()(u,"components",{QCard:r["a"],QCardSection:i["a"],QBtn:p["a"]})}}]);