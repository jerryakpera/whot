(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"0f8a":function(s,e,r){"use strict";r.r(e);var t=function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",[s.loading?r("q-card-section",{staticClass:"text-center"},[r("loading")],1):s._e(),s.loading?s._e():r("q-card-section",[r("form",{on:{submit:function(e){return e.preventDefault(),s.submitRegisterForm(e)}}},[r("q-input",{ref:"username",staticClass:"q-ma-xs text-white",attrs:{"bg-color":"white",filled:"",placeholder:"username",dense:"",rules:[function(s){return!!s||"required"}],"lazy-rules":""},scopedSlots:s._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{size:"xs",name:"person"}})]},proxy:!0}],null,!1,3125251617),model:{value:s.user.username,callback:function(e){s.$set(s.user,"username",e)},expression:"user.username"}}),r("q-input",{ref:"email",staticClass:"q-ma-xs",attrs:{"bg-color":"white",filled:"",dense:"",placeholder:"email",rules:[function(s){return!!s||"Valid email required"},s.isValidEmail()],"lazy-rules":""},scopedSlots:s._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{size:"xs",name:"alternate_email"}})]},proxy:!0}],null,!1,3818588119),model:{value:s.user.email,callback:function(e){s.$set(s.user,"email",e)},expression:"user.email"}}),r("q-input",{ref:"password",staticClass:"q-ma-xs",attrs:{"bg-color":"white",filled:"",type:s.isPassword?"text":"password",placeholder:"password",rules:[function(s){return s.length>=6||"Must be at least 6 characters"}],dense:"","lazy-rules":""},scopedSlots:s._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{size:"xs",name:"vpn_key"}})]},proxy:!0},{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer text-blue-10",attrs:{size:"xs",name:s.isPassword?"visibility_off":"visibility"},on:{click:function(e){s.isPassword=!s.isPassword}}})]},proxy:!0}],null,!1,3974539525),model:{value:s.user.password,callback:function(e){s.$set(s.user,"password",e)},expression:"user.password"}}),r("q-input",{ref:"confirmpassword",staticClass:"q-ma-xs",attrs:{"bg-color":"white",type:s.isConfirmPassword?"text":"password",filled:"",dense:"",placeholder:"confirm password",rules:s.passwordsMatch,"lazy-rules":""},on:{keyup:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.submitRegisterForm(e)}},scopedSlots:s._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{size:"xs",name:"vpn_key"}})]},proxy:!0},{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer text-blue-10",attrs:{size:"xs",name:s.isConfirmPassword?"visibility_off":"visibility"},on:{click:function(e){s.isConfirmPassword=!s.isConfirmPassword}}})]},proxy:!0}],null,!1,549831991),model:{value:s.user.confirmpassword,callback:function(e){s.$set(s.user,"confirmpassword",e)},expression:"user.confirmpassword"}})],1)]),r("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[r("q-btn",{staticClass:"q-mr-md",attrs:{unelevated:"",color:"blue-6",label:"Join"},on:{click:s.submitRegisterForm}})],1)],1)},i=[],a=(r("e6cf"),r("ded3")),n=r.n(a),o=r("2f62"),l={data:()=>({loading:!1,user:{username:"",email:"",password:"",confirmpassword:""},isPassword:!1,isConfirmPassword:!1}),computed:{passwordsMatch(){return[s=>!!s||"cannot be empty",s=>s==this.$refs.password.value||"passwords must match"]}},components:{loading:()=>r.e(1).then(r.bind(null,"c202"))},methods:n()(n()({},Object(o["b"])("users",["registerUser"])),{},{showNotif(s,e="primary"){this.$q.notify({message:s,color:e})},isValidEmail(){const s=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return s.test(this.user.email)||"Invalid email"},submitRegisterForm(){this.loading=!0,this.$refs.username.validate(),this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.confirmpassword.validate(),this.$refs.username.hasError||this.$refs.email.hasErrors||this.$refs.password.hasError||this.$refs.confirmpassword.hasError||this.registerNewUser()},registerNewUser(){this.registerUser(this.user).then(s=>{this.loading=!1,this.showNotif("Your profile has been created"),this.$emit("closeDialog"),this.$router.push("/onboarding")}).catch(s=>{this.loading=!1,this.showNotif(s.message,"negative")})}}),mounted(){this.$refs.username.focus()}},u=l,c=r("2877"),d=r("a370"),p=r("27f9"),f=r("0016"),m=r("4b7e"),h=r("9c40"),w=r("eebe"),b=r.n(w),y=Object(c["a"])(u,t,i,!1,null,null,null);e["default"]=y.exports;b()(y,"components",{QCardSection:d["a"],QInput:p["a"],QIcon:f["a"],QCardActions:m["a"],QBtn:h["a"]})}}]);