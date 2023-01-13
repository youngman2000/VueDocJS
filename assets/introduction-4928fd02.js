import{w as fe,t as ve,d as R,u as X,r as k,g as W,c as pe,_ as c,a as t,C as he,i as me,b as ge,e as _e,f as ye,v as Ce,h as V,T as ue,P as M,j as be,I as xe,k as Ie,E as Se,l as we,m as Pe,n as Te,o as Ae,L as ne,p as Ve,q as ke,s as U,x as Be,y as Me,z as Le,A as Ee,B as Ne,D as re,W as Oe,F as je,G as Fe,H as He,J as ze,K as De,M as Je,N as K,O as We,Q as $e,R as $,S as r,U as I,V as Ge,X as de,Y as Ue,Z as Re}from"./index-3eb3f408.js";var qe={success:be,info:xe,error:Ie,warning:Se},Ke={success:we,info:Pe,error:Te,warning:Ae},Qe=ve("success","info","warning","error"),Xe=function(){return{type:M.oneOf(Qe),closable:{type:Boolean,default:void 0},closeText:M.any,message:M.any,description:M.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:M.any,closeIcon:M.any,onClose:Function}},Ye=R({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:Xe(),setup:function(e,s){var l=s.slots,p=s.emit,y=s.attrs,h=s.expose,d=X("alert",e),f=d.prefixCls,w=d.direction,m=k(!1),S=k(!1),C=k(),O=function(u){u.preventDefault();var x=C.value;x.style.height="".concat(x.offsetHeight,"px"),x.style.height="".concat(x.offsetHeight,"px"),m.value=!0,p("close",u)},b=function(){var u;m.value=!1,S.value=!0,(u=e.afterClose)===null||u===void 0||u.call(e)};h({animationEnd:b});var B=k({});return function(){var P,u,x=e.banner,j=e.closeIcon,D=j===void 0?(P=l.closeIcon)===null||P===void 0?void 0:P.call(l):j,F=e.closable,a=e.type,i=e.showIcon,g=W(l,e,"closeText"),v=W(l,e,"description"),_=W(l,e,"message"),T=W(l,e,"icon");i=x&&i===void 0?!0:i,a=x&&a===void 0?"warning":a||"info";var H=(v?Ke:qe)[a]||null;g&&(F=!0);var n=f.value,L=pe(n,(u={},c(u,"".concat(n,"-").concat(a),!0),c(u,"".concat(n,"-closing"),m.value),c(u,"".concat(n,"-with-description"),!!v),c(u,"".concat(n,"-no-icon"),!i),c(u,"".concat(n,"-banner"),!!x),c(u,"".concat(n,"-closable"),F),c(u,"".concat(n,"-rtl"),w.value==="rtl"),u)),E=F?t("button",{type:"button",onClick:O,class:"".concat(n,"-close-icon"),tabindex:0},[g?t("span",{class:"".concat(n,"-close-text")},[g]):D===void 0?t(he,null,null):D]):null,N=T&&(me(T)?ge(T,{class:"".concat(n,"-icon")}):t("span",{class:"".concat(n,"-icon")},[T]))||t(H,{class:"".concat(n,"-icon")},null),q=_e("".concat(n,"-motion"),{appear:!1,css:!0,onAfterLeave:b,onBeforeLeave:function(A){A.style.maxHeight="".concat(A.offsetHeight,"px")},onLeave:function(A){A.style.maxHeight="0px"}});return S.value?null:t(ue,q,{default:function(){return[ye(t("div",V(V({role:"alert"},y),{},{style:[y.style,B.value],class:[y.class,L],"data-show":!m.value,ref:C}),[i?N:null,t("div",{class:"".concat(n,"-content")},[_?t("div",{class:"".concat(n,"-message")},[_]):null,v?t("div",{class:"".concat(n,"-description")},[v]):null]),E]),[[Ce,!m.value]])]}})}}});const Ze=fe(Ye);var et=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:M.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const tt=et;var oe=function(e){e&&(e.style.width="0px",e.style.opacity="0",e.style.transform="scale(0)")},ae=function(e){Ve(function(){e&&(e.style.width="".concat(e.scrollWidth,"px"),e.style.opacity="1",e.style.transform="scale(1)")})},le=function(e){e&&e.style&&(e.style.width=null,e.style.opacity=null,e.style.transform=null)};const nt=R({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(e){return function(){var s=e.existIcon,l=e.prefixCls,p=e.loading;if(s)return t("span",{class:"".concat(l,"-loading-icon")},[t(ne,null,null)]);var y=!!p;return t(ue,{name:"".concat(l,"-loading-icon-motion"),onBeforeEnter:oe,onEnter:ae,onAfterEnter:le,onBeforeLeave:ae,onLeave:function(d){setTimeout(function(){oe(d)})},onAfterLeave:le},{default:function(){return[y?t("span",{class:"".concat(l,"-loading-icon")},[t(ne,null,null)]):null]}})}}});var ie=/^[\u4e00-\u9fa5]{2}$/,ce=ie.test.bind(ie);function G(o){return o==="text"||o==="link"}const z=R({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:ke(tt(),{type:"default"}),slots:["icon"],setup:function(e,s){var l=s.slots,p=s.attrs,y=s.emit,h=X("btn",e),d=h.prefixCls,f=h.autoInsertSpaceInButton,w=h.direction,m=h.size,S=k(null),C=k(void 0),O=!1,b=k(!1),B=k(!1),P=U(function(){return f.value!==!1}),u=U(function(){return Fe(e.loading)==="object"&&e.loading.delay?e.loading.delay||!0:!!e.loading});Be(u,function(a){clearTimeout(C.value),typeof u.value=="number"?C.value=setTimeout(function(){b.value=a},u.value):b.value=a},{immediate:!0});var x=U(function(){var a,i=e.type,g=e.shape,v=g===void 0?"default":g,_=e.ghost,T=e.block,H=e.danger,n=d.value,L={large:"lg",small:"sm",middle:void 0},E=m.value,N=E&&L[E]||"";return a={},c(a,"".concat(n),!0),c(a,"".concat(n,"-").concat(i),i),c(a,"".concat(n,"-").concat(v),v!=="default"&&v),c(a,"".concat(n,"-").concat(N),N),c(a,"".concat(n,"-loading"),b.value),c(a,"".concat(n,"-background-ghost"),_&&!G(i)),c(a,"".concat(n,"-two-chinese-chars"),B.value&&P.value),c(a,"".concat(n,"-block"),T),c(a,"".concat(n,"-dangerous"),!!H),c(a,"".concat(n,"-rtl"),w.value==="rtl"),a}),j=function(){var i=S.value;if(!(!i||f.value===!1)){var g=i.textContent;O&&ce(g)?B.value||(B.value=!0):B.value&&(B.value=!1)}},D=function(i){if(b.value||e.disabled){i.preventDefault();return}y("click",i)},F=function(i,g){var v=g?" ":"";if(i.type===je){var _=i.children.trim();return ce(_)&&(_=_.split("").join(v)),t("span",null,[_])}return i};return Me(function(){He(!(e.ghost&&G(e.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),Le(j),Ee(j),Ne(function(){C.value&&clearTimeout(C.value)}),function(){var a,i,g=e.icon,v=g===void 0?(a=l.icon)===null||a===void 0?void 0:a.call(l):g,_=re((i=l.default)===null||i===void 0?void 0:i.call(l));O=_.length===1&&!v&&!G(e.type);var T=e.type,H=e.htmlType,n=e.disabled,L=e.href,E=e.title,N=e.target,q=e.onMousedown,J=b.value?"loading":v,A=V(V({},p),{},{title:E,disabled:n,class:[x.value,p.class,c({},"".concat(d.value,"-icon-only"),_.length===0&&!!J)],onClick:D,onMousedown:q});n||delete A.disabled;var Y=v&&!b.value?v:t(nt,{existIcon:!!v,prefixCls:d.value,loading:!!b.value},null),Z=_.map(function(te){return F(te,O&&P.value)});if(L!==void 0)return t("a",V(V({},A),{},{href:L,target:N,ref:S}),[Y,Z]);var ee=t("button",V(V({},A),{},{ref:S,type:H}),[Y,Z]);return G(T)?ee:t(Oe,{ref:"wave",disabled:!!b.value},{default:function(){return[ee]}})}}});function se(o,e){for(var s=0;s<e.length;s++){var l=e[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(o,ze(l.key),l)}}function ot(o,e,s){return e&&se(o.prototype,e),s&&se(o,s),Object.defineProperty(o,"prototype",{writable:!1}),o}function at(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}var lt=ot(function o(e){at(this,o),this.error=new Error("unreachable case: ".concat(JSON.stringify(e)))}),it=function(){return{prefixCls:String,size:{type:String}}};const Q=R({compatConfig:{MODE:3},name:"AButtonGroup",props:it(),setup:function(e,s){var l=s.slots,p=X("btn-group",e),y=p.prefixCls,h=p.direction,d=U(function(){var f,w=e.size,m="";switch(w){case"large":m="lg";break;case"small":m="sm";break;case"middle":case void 0:break;default:console.warn(new lt(w).error)}return f={},c(f,"".concat(y.value),!0),c(f,"".concat(y.value,"-").concat(m),m),c(f,"".concat(y.value,"-rtl"),h.value==="rtl"),f});return function(){var f;return t("div",{class:d.value},[re((f=l.default)===null||f===void 0?void 0:f.call(l))])}}});z.Group=Q;z.install=function(o){return o.component(z.name,z),o.component(Q.name,Q),o};const ct={code1:`import {createApp} from vue

createApp(){
  data(){
    return {
      count:0
    }
  }
}
  `,code2:`<div>
  <button @click="count++">
    Count is :{{count}}
  </button>
</div>`,code3:`<script>
export default {
  data(){
    return {
      count:0
    }
  }
}
<\/script>
<template>
  <button @click="count++"> Count is:{{count}}</button>
</template>
<style scoped>
  button{
    font-weight:bold;
  }
</style>
`,code4:`<script>
  export default{
    //data()返回的属性将会成为响应式转态
    //并且暴露在‘this’上
    data(){
      return{
        count:0
      }
    }
    //methods 是一些用来改变状态与触发更新的函数
    //它们可以在模板中作为事件监听器绑定
    methods:{
      increment(){
        this.count++
      }
    }
    //生命周期钩子会在组件生命周期的各个不同阶段被调用
    //例如这个函数就会在组件挂在完成后被调用
    mounted(){
      console.log('The initial count is $ {this.count}.')
    }
  }
<\/script>
<template>
  <button @click="increment">Count is: {{count}}</button>
</template>
`,code5:`<script setup>
import { ref, onMounted } from 'vue'

//响应式状态
const count = ref(0)  

//用来修改转态，触发更新的函数
function increment(){
  count.value++
}
onMounted(()=>{
  console.log('The initial count is $ {count.value}')
})
<\/script>
<template>
  <button @click="increment" >Count is : {{count}}</button>
</template>
`},st={components:{PreCode:Je},data(){return{code:ct}}},ut=r("div",null," Vue(发音为/vju:/,类似view)是一款构建用户界面的的JavaScript框架。它基于HTML,CSS,JavaScript的标准构建，并提供了一套声明式的、组件化的编程思想，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue都可以胜任。 ",-1),rt=r("p",null,"下面是一个基本的示例：",-1),dt=r("p",null,"结果展示：",-1),ft=r("p",null,"上面的示例展示了Vue的两个核心功能：",-1),vt=r("ul",null,[r("li",null,[r("strong",null,"声明式渲染："),I(" Vue核心基于标准HTML拓展了一套模板语法，可以使我们声明式的描述最终输出的HTML和JavaScript状态之间的关系。 ")]),r("li",null,[r("strong",null,"响应式："),I(" Vue会自动跟踪JavaScript状态变化并在改变发生时响应式地更新DOM。 ")])],-1),pt=r("p",null," 你可能已经有了些疑问--先别急，后面的文档中我们会详细地介绍每一个细节。现在，请你看下，以确保你对Vue作为一个框架到底提供了什么有一个宏观的了解。 ",-1),ht=de("<p> Vue是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但web世界也是十分多样化的，不同的开发者在web上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue在设计上非常的注重灵活性和“可以被逐渐集成”这个特点。根据你的需求场景，你可以用不用的方式使用Vue：</p><ul><li>无需构建步骤，渐进式增强静态HTML</li><li>在任何页面中作为Web Components嵌入</li><li>单页应用（SPA）</li><li>全栈/服务端渲染（SSR）</li><li>JamStack/静态站点生成（SSG）</li><li>开发桌面端、移动端、WebGL，甚至是命令行终端中的界面</li></ul><p> 如果你是初学者，可能会觉得这些概念有些复杂。别担心，理解教程和指南只需要你具备基础的HTML和JavaScript知识。你即使不是这方面的专家也可以跟上。</p><p> 如果你是有经验的开发者，希望了解以最合适的方式在项目中引入Vue，或者对上述概念比较好奇，我们在使用Vue的多种方式中讨论了他们更多的细节。</p><p> 无论再怎么灵活，Vue的核心知识在所有这些用例中都是通用的。即使你现在只是一个初学者，随着你的不断成长，到未来有能力实现更复杂的项目时，这一路上的获得的知识依然适用。如果你已经是一个老手，你可以根据实际场景来选择Vue的最佳方式，在各种场景下都可以保持同样的开发效率。这就是我们为什么将Vue成为“渐进式框架“：它是一个可以与你共同成长、适应你不同需求的框架。</p>",5),mt=r("h3",null,"单文件组件",-1),gt=r("p",null,"在大多数启动了构建工具的Vue项目中，我们可以使用一种类似HTML格式的文件来书写Vue组件，它被称为单文件组件（也被称为*.vue文件，英文Single-file components,缩写为SFC）。顾名思义，Vue的单文件组件会将一个组件的逻辑（JavaScript），模板（HTML）和样式（CSS）封装在同一个文件里。下面我们将用单文件组件的格式重写上面的计数器示例：",-1),_t=r("p",null," 单文件组件是Vue的标志性功能。如果你的用例需要进行构建，我们推荐用它来编写Vue组件。你可以在后续相关章节里了解跟多关于单文件组件的用法和用途。但你暂时只需要知道Vue会帮你处理所有这些构建工具的配置就好。",-1),yt=r("h3",null,"API风格",-1),Ct=r("p",null,"Vue的组件可以按两种不同的风格书写：选项式API和组合式API。",-1),bt=r("h4",null,"选项式API（Options API）",-1),xt=r("p",null," 使用选项式API，我们可以用包含多个选项的对象来描述组件的逻辑，例如data、methods和mounted。选项所定义的属性都会暴露在函数内部的this上，它会指向当前的组件实例。",-1),It=r("h4",null,"组合式API（Composition API）",-1),St=de('<h4>该选哪一个？</h4><p> 两种风格都能够覆盖大部分的应用场景。他们只是同一个底层系统所提供的两套不同的接口。实际上，选项式API实在组合式API的基础上实现的！关于Vue的基础概率和知识在他们之间都是通用的。</p><p> 选项式API以“组件实例&quot;的核心概念为中心，（即上述例子的this），对于有面向对象语言背景的用户来说，这通常与基于类的心智模型更为一致。同时，它将响应式相关的细节抽象出来，并强制按照选项来组织代码，从而对初学者而言更为友好。</p><p> 组合式API的核心思想是直接在函数作用域内定义响应式状态变量，并将从多个函数中得到的状态组合起来处理复杂问题。这种形式更加自由，也需要你对Vue的响应式系统有更深入的理解才能够高效使用。相应的，它的灵活性也使得组织和重新逻辑的模式更加强大。</p><p>在组合式API FAQ章节中，你可以了解更多关于这两种API风格的对比以及组合式API所带来的潜在收益。</p><p>如果你是Vue新手，这里我们大致的建议：</p><ul><li> 在学习的过程中，推荐采用自己更易于理解的风格。在强调一下，大部分的核心概念在这两种风格之间都是通用的。熟悉一种风格后，你也能很快理解另一种风格。 </li><li>在生产项目中：</li><li style="margin-left:20px;"> 当你不需要使用构建工具，或者打算主要在低复杂度的场景中使用Vue，例如渐进增强的应用场景中，推荐使用选项式API。 </li><li style="margin-left:20px;">当你打算用Vue构建完整的单页应用，推荐采用组合式API+单文件组件。</li></ul><p> 在学习阶段，你不必只固收一种风格。在接下来的文档中我们会为你提供一系列两种风格代码的参考，你可以随时通过左上角的API风格来做切换。</p>',8);function wt(o,e,s,l,p,y){const h=Ue,d=K("highlightjs"),f=z,w=Ze,m=Re,S=K("el-divider"),C=K("PreCode");return We(),$e(Ge,null,[t(h,{level:3},{default:$(()=>[I("简介")]),_:1}),t(h,{level:4},{default:$(()=>[I("什么是Vue?")]),_:1}),ut,rt,t(d,{code:p.code.code1},null,8,["code"]),t(d,{code:p.code.code2},null,8,["code"]),dt,t(f,null,{default:$(()=>[I("Count is: 4")]),_:1}),ft,vt,pt,t(w,{message:"预备知识",type:"warning","show-icon":"",description:`文档接下来的部分假设你对HTML、CSS和JavaScript已经基本熟悉。如果你对前端开发完全陌生，最好不要直接在一开始
  针对一个框架学习--最好掌握了基础知识再回到这里。如果之前有其他框架的经验会很有帮助，但不是必须得。`}),t(m),t(h,{level:3},{default:$(()=>[I("渐进式框架")]),_:1}),ht,t(S),mt,gt,t(d,{code:p.code.code3},null,8,["code"]),_t,t(S),yt,Ct,bt,xt,t(d,{code:p.code.code4},null,8,["code"]),It,r("p",null,[I("通过组合式API，我们可以使用导入的API函数来描述组件的逻辑。在单文件组件中，组合式API通常会与 "),t(C,{value:"<script setup>"}),I(" 搭配使用。这个 "),t(C,{value:"setup"}),I(" attribute是一个标识，告诉Vue需要在编译时进行一些处理，让我们可以更简洁地使用组合式API。比如， "),t(C,{value:"<script setup>"}),I(" 中导入和顶层变量/函数都能够在模板中可以直接使用。 ")]),t(d,{code:p.code.code5},null,8,["code"]),St],64)}const Tt=De(st,[["render",wt]]);export{Tt as default};
