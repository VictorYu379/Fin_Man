(function(e){function n(n){for(var r,u,i=n[0],s=n[1],p=n[2],c=0,f=[];c<i.length;c++)u=i[c],o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,p||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var s=t[i];0!==o[s]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var p=0;p<i.length;p++)n(i[p]);var l=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},"3f4f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u={name:"App"},i=u,s=(t("034f"),t("2877")),p=Object(s["a"])(i,o,a,!1,null,null,null);p.options.__file="App.vue";var l=p.exports,c=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"login"}},[t("h1",[e._v("Login")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:e.input.username},on:{input:function(n){n.target.composing||e.$set(e.input,"username",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.input.password},on:{input:function(n){n.target.composing||e.$set(e.input,"password",n.target.value)}}}),t("button",{attrs:{type:"button"},on:{click:function(n){e.login()}}},[e._v("Login")])])},d=[],v={name:"Login",data(){return{input:{username:"",password:""}}},methods:{login(){this.axios.post("/login",{username:this.input.username,password:this.input.password}).then(function(e){e.success&&(window.location.href="/dashboard")}).catch(e=>{alert("Username or password incorrect")})}}},m=v,h=(t("b511"),Object(s["a"])(m,f,d,!1,null,"7a04d982",null));h.options.__file="login.vue";var g=h.exports;r["a"].use(c["a"]);var w=new c["a"]({routes:[{path:"/",redirect:{name:"login"}},{path:"/login",name:"login",component:g}]}),b=t("2f62");r["a"].use(b["a"]);var y=new b["a"].Store({state:{},mutations:{},actions:{}}),_=t("bc3a"),x=t.n(_),O=t("a7fe"),j=t.n(O);r["a"].config.productionTip=!1,r["a"].use(j.a,x.a),new r["a"]({router:w,store:y,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,n,t){},b511:function(e,n,t){"use strict";var r=t("3f4f"),o=t.n(r);o.a}});
//# sourceMappingURL=app.4d3f3277.js.map