(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],d=0,p=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b10":function(e,t,n){},"295a":function(e,t,n){"use strict";n("2aad")},"2aad":function(e,t,n){},"4aab":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"home mt-5 mb-5"},c={key:0,class:"quote-list mt-3"},o={class:"container"},u={class:"row justify-content-center"};function i(e,t,n,i,s,l){var d=Object(r["l"])("Judul"),p=Object(r["l"])("QuoteCard"),b=Object(r["l"])("Loading");return Object(r["g"])(),Object(r["c"])("div",a,[Object(r["e"])(d,{onPostQuote:l.postNewQuote},null,8,["onPostQuote"]),e.listQuote.length?(Object(r["g"])(),Object(r["c"])("section",c,[Object(r["e"])("div",o,[Object(r["e"])("div",u,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(e.listQuote,(function(e){return Object(r["g"])(),Object(r["c"])(p,{key:e._id,title:e.quote},null,8,["title"])})),128))])])])):(Object(r["g"])(),Object(r["c"])(b,{key:1}))])}var s=n("2909"),l=n("1da1"),d=(n("96cf"),n("323e")),p=n.n(d),b=(n("a5d8"),n("d4ec")),f=n("bee2"),j=(n("99af"),n("bc3a")),v=n.n(j),O="/api/quote",h=function(){function e(){Object(b["a"])(this,e)}return Object(f["a"])(e,null,[{key:"getQuote",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(O);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"newQuote",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/post/quote",t,{headers:{Authorization:"Bearer $2b$08$tMqw1.a5a/9oQ8TGh1759.KIS1nN9E/2u83fDdUHAKEIfoFrM.iaq"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteQuote",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("".concat(O,"?id=").concat(t,"&admin=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),m=h,g=Object(r["r"])("data-v-ec02026a");Object(r["i"])("data-v-ec02026a");var y={class:"judul"},w={class:"container"},k=Object(r["d"])("Quotes App"),x={class:"row justify-content-center"},Q={class:"col-12 col-md-12 col-lg-8"},P={key:0,class:"input-group mt-3"},C={class:"input-group-append"};Object(r["h"])();var E=g((function(e,t,n,a,c,o){var u=Object(r["l"])("DisabledInput");return Object(r["g"])(),Object(r["c"])("section",y,[Object(r["e"])("div",w,[t[1]||(Object(r["m"])(-1),t[1]=Object(r["e"])("h3",{class:"text-center"},[k]),Object(r["m"])(1),t[1]),Object(r["e"])("div",x,[Object(r["e"])("div",Q,[e.timerEnabled?(Object(r["g"])(),Object(r["c"])(u,{key:1,timer:o.passingTimer},null,8,["timer"])):(Object(r["g"])(),Object(r["c"])("div",P,[Object(r["q"])(Object(r["e"])("input",{type:"text",class:"form-control shadow-none",placeholder:"Quote Title (Min 15 Char)",spellcheck:"false","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.inputValue=t}),onKeyup:t[3]||(t[3]=function(){return o.trigger&&o.trigger.apply(o,arguments)})},null,544),[[r["o"],e.inputValue]]),Object(r["e"])("div",C,[Object(r["e"])("button",{class:"btn btn-dark btn-dark-not-disabled shadow-none",onClick:t[4]||(t[4]=function(){return o.valuePassed&&o.valuePassed.apply(o,arguments)}),disabled:o.inputNotEmpty}," Add Quote ",8,["disabled"])])]))])])])])})),T=n("1940"),R=n.n(T),S={class:"input-group mt-3"},_=Object(r["e"])("input",{type:"text",class:"form-control shadow-none",placeholder:"Quote Title (Min 15 Char)",disabled:""},null,-1),V={class:"input-group-append"},q={class:"btn btn-dark shadow-none",disabled:""};function M(e,t,n,a,c,o){return Object(r["g"])(),Object(r["c"])("div",S,[_,Object(r["e"])("div",V,[Object(r["e"])("button",q,Object(r["n"])(n.timer),1)])])}var A={props:{timer:String}};A.render=M;var I=A,N={data:function(){return{inputValue:"",timerCount:15,timerEnabled:!1}},computed:{inputNotEmpty:function(){return!this.inputValue||this.inputValue.length<=15},passingTimer:function(){return"Wait for ".concat(this.timerCount,"s")}},watch:{timerEnabled:function(e){var t=this;e&&setTimeout((function(){t.timerCount--}),1e3)},timerCount:{handler:function(e){var t=this;e>0&&this.timerEnabled?setTimeout((function(){t.timerCount--}),1e3):e<=0&&(this.timerCount=10,this.timerEnabled=!1)},immediate:!0}},methods:{valuePassed:function(){if(this.inputValue.length>100)return R()("Sorry","The Quote must be under 100 character","error");this.$emit("postQuote",this.inputValue),this.inputValue="",this.timerEnabled=!0},trigger:function(e){if(this.inputValue.length<15&&13==e.keyCode)return this.inputValue="",R()("Sorry","The Quote must be at least 15 character","error");13==e.keyCode&&this.valuePassed()}},components:{DisabledInput:I}};n("295a"),n("eaf3");N.render=E,N.__scopeId="data-v-ec02026a";var D=N,J=Object(r["r"])("data-v-50e92d8e");Object(r["i"])("data-v-50e92d8e");var $={class:"col-6 col-md-4 col-lg-3 mt-3"},K={class:"quote-card h-100"},L={class:"text-center"};Object(r["h"])();var U=J((function(e,t,n,a,c,o){return Object(r["g"])(),Object(r["c"])("div",$,[Object(r["e"])("div",K,[Object(r["e"])("p",L,Object(r["n"])(n.title),1)])])})),z={props:{title:String}};n("5803");z.render=U,z.__scopeId="data-v-50e92d8e";var B=z,F={name:"App",data:function(){return{ms:"0",listQuote:[]}},components:{Judul:D,QuoteCard:B},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return p.a.start(),t.prev=1,t.next=4,m.getQuote();case 4:n=t.sent,e.listQuote=Object(s["a"])(n),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),R()("Error",t.t0,"error");case 11:p.a.done(),console.clear();case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},methods:{postNewQuote:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return p.a.start(),n.prev=1,n.next=4,m.newQuote({quote:e});case 4:r=n.sent,t.listQuote=Object(s["a"])(r),n.next=12;break;case 8:n.prev=8,n.t0=n["catch"](1),a=n.t0.response,R()("Sorry",a.data,"error");case 12:p.a.done(),console.clear();case 14:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}};n("fc62");F.render=i;var G=F,H=(n("ac1f"),n("1276"),n("5502")),W=Object(H["a"])({state:{},mutations:{DATE_PARSER:function(e,t){return t.split("T")[0]}},actions:{},modules:{}}),X=(n("c1c3"),n("f9e3"),n("4989"),{class:"empty-list text-center mt-5"}),Y=Object(r["e"])("div",{class:"container"},[Object(r["e"])("div",{class:"row justify-content-center"},[Object(r["e"])("div",{class:"col-12 col-md-12 col-lg-12"},[Object(r["e"])("div",{class:"spinner-border text-light",role:"status"},[Object(r["e"])("span",{class:"sr-only"},"Loading...")])])])],-1);function Z(e,t,n,a,c,o){return Object(r["g"])(),Object(r["c"])("section",X,[Y])}var ee={};ee.render=Z;var te=ee;Object(r["b"])(G).use(W).component("Loading",te).mount("#app")},5803:function(e,t,n){"use strict";n("8a2a")},"8a2a":function(e,t,n){},c1c3:function(e,t,n){},eaf3:function(e,t,n){"use strict";n("1b10")},fc62:function(e,t,n){"use strict";n("4aab")}});
//# sourceMappingURL=app.edab9983.js.map