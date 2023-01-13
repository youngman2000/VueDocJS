import{K as _,M as r,N as l,O as u,Q as i,a as o,R as c,S as t,U as e,Y as m,Z as h}from"./index-3eb3f408.js";const f={code1:`import {createApp}} from 'vue'

const app = createApp({
    /* 根组件选项 *
})`,code2:`import {createApp} from 'vue'
//从一个单文件组件中导入根组件
import App form './App.vue'    
const app = createApp(App)`,code3:`App(root component)
    TodoList
        TodoItem
            TodoDeleteButton
            TodoEditButton
        TodoFooter
            TodoClearButton
            TodoStatistics`},v={components:{PreCode:r},setup(){return{code:f}}},A=t("p",null,"每个Vue应用都是通过createApp函数创建一个新的应用实例：",-1),T=t("p",null,"我们传入createApp的对象实际上是一个组件，每个应用都需要一个“根组件“，其他组件将作为其子组件。",-1),g=t("p",null,"如果你使用的单文件组件，我们可以直接从另一个文件中导入根组件。",-1),C=t("p",null,"虽然本指南中的许多实例只需要一个组件，但大多数真实的应用都是由一棵嵌套的、可重复的组件树组成的。例如，一个待办事项（Todos）应用的组件树可能是这样",-1),B=t("p",null,"我们会在只能得后续章节中讨论如何定义和组合多个组件。在那之前，我们得先关注一个组件内到底会发生什么。",-1);function x(V,N,S,p,P,j){const n=m,d=h,s=l("highlightjs"),a=l("PreCode");return u(),i("div",null,[o(n,null,{default:c(()=>[e("创建一个Vue应用")]),_:1}),o(d),o(n,{level:3},{default:c(()=>[e("应用实例")]),_:1}),A,o(s,{code:p.code.code1},null,8,["code"]),o(d),o(n,{level:3},{default:c(()=>[e("根组件")]),_:1}),T,g,o(s,{code:p.code.code2},null,8,["code"]),C,o(s,{code:p.code.code3},null,8,["code"]),B,o(d),o(n,{level:3},{default:c(()=>[e("挂载应用")]),_:1}),t("p",null,[e("应用实例必须在调用了 "),o(a,{value:".mount()"}),e("方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的DOM元素或者一个CSS选择器字符串： ")])])}const y=_(v,[["render",x]]);export{y as default};
