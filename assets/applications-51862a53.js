import{K as u,M as _,N as s,O as r,Q as i,a as o,R as d,S as e,U as t,Y as m,Z as h}from"./index-8aec7996.js";const v={code1:`import {createApp}} from 'vue'

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
            TodoStatistics`,code4:`<div id="app></div>
app.mount("#app")`,code5:`<div id="app">
 <button @click="count++">{{count}}</button>
</div>`,code6:`import createApp from 'vue'
  
const app = createApp({
    data(){
        return {
            count: 0
        }
    }
})
 app.mount("#app") `},f={components:{PreCode:_},setup(){return{code:v}}},A=e("p",null,"每个Vue应用都是通过createApp函数创建一个新的应用实例：",-1),T=e("p",null,"我们传入createApp的对象实际上是一个组件，每个应用都需要一个“根组件“，其他组件将作为其子组件。",-1),g=e("p",null,"如果你使用的单文件组件，我们可以直接从另一个文件中导入根组件。",-1),C=e("p",null,"虽然本指南中的许多实例只需要一个组件，但大多数真实的应用都是由一棵嵌套的、可重复的组件树组成的。例如，一个待办事项（Todos）应用的组件树可能是这样",-1),V=e("p",null,"我们会在只能得后续章节中讨论如何定义和组合多个组件。在那之前，我们得先关注一个组件内到底会发生什么。",-1),B=e("p",null,"应用根组件的内容将会渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。",-1),x=e("p",null,"当在未采用构建流程的情况下使用Vue时，我们可以在挂载容器中直接书写根组件模板：",-1),M=e("p",null,"当根组件没有设置template选项时，Vue将自动使用容器的innerHTML作为模板。",-1),N=e("p",null,"应用实例会暴露一个.config对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，他将捕获所有由子组件上抛出而未被处理的错误：",-1);function S(k,D,O,c,P,b){const p=m,l=h,n=s("highlightjs"),a=s("PreCode");return r(),i("div",null,[o(p,null,{default:d(()=>[t("创建一个Vue应用")]),_:1}),o(l),o(p,{level:3},{default:d(()=>[t("应用实例")]),_:1}),A,o(n,{code:c.code.code1},null,8,["code"]),o(l),o(p,{level:3},{default:d(()=>[t("根组件")]),_:1}),T,g,o(n,{code:c.code.code2},null,8,["code"]),C,o(n,{code:c.code.code3},null,8,["code"]),V,o(l),o(p,{level:3},{default:d(()=>[t("挂载应用")]),_:1}),e("p",null,[t("应用实例必须在调用了 "),o(a,{value:".mount()"}),t("方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的DOM元素或者一个CSS选择器字符串： ")]),o(n,{code:c.code.code4},null,8,["code"]),B,e("p",null,[o(a,{value:".mount()"}),t(" 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册的方法，他的返回值是根组件实例和非应用实例。 ")]),o(p,{level:3},{default:d(()=>[t("DOM中的根组件模板")]),_:1}),x,o(n,{code:c.code.code5},null,8,["code"]),o(n,{code:c.code.code6},null,8,["code"]),M,o(l),N])}const y=u(f,[["render",S]]);export{y as default};
