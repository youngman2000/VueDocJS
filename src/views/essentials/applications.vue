<template>
  <div>
    <a-typography-title>创建一个Vue应用</a-typography-title>
    <a-divider></a-divider>
    <a-typography-title :level="3">应用实例</a-typography-title>
    <p>每个Vue应用都是通过createApp函数创建一个新的应用实例：</p>
    <highlightjs :code="code.code1"></highlightjs>
    <a-divider></a-divider>
    <a-typography-title :level="3">根组件</a-typography-title>
    <p>我们传入createApp的对象实际上是一个组件，每个应用都需要一个“根组件“，其他组件将作为其子组件。</p>
    <p>如果你使用的单文件组件，我们可以直接从另一个文件中导入根组件。</p>
    <highlightjs :code="code.code2"></highlightjs>
    <p>虽然本指南中的许多实例只需要一个组件，但大多数真实的应用都是由一棵嵌套的、可重复的组件树组成的。例如，一个待办事项（Todos）应用的组件树可能是这样</p>
    <highlightjs :code="code.code3"></highlightjs>
    <p>我们会在只能得后续章节中讨论如何定义和组合多个组件。在那之前，我们得先关注一个组件内到底会发生什么。</p>
    <a-divider></a-divider>
    <a-typography-title :level="3">挂载应用</a-typography-title>
    <p>应用实例必须在调用了 <PreCode value=".mount()"></PreCode>方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的DOM元素或者一个CSS选择器字符串： </p>
    <highlightjs :code="code.code4"></highlightjs>
    <p>应用根组件的内容将会渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。</p>
    <p> <PreCode value=".mount()"></PreCode> 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册的方法，他的返回值是根组件实例和非应用实例。 </p>
    <a-typography-title :level="3">DOM中的根组件模板</a-typography-title>
    <p>当在未采用构建流程的情况下使用Vue时，我们可以在挂载容器中直接书写根组件模板：</p>
    <highlightjs :code="code.code5"></highlightjs>
    <highlightjs :code="code.code6"></highlightjs>
    <p>当根组件没有设置template选项时，Vue将自动使用容器的innerHTML作为模板。</p>
    <a-divider></a-divider>
    <p>应用实例会暴露一个.config对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，他将捕获所有由子组件上抛出而未被处理的错误：</p>
  </div>
</template>

<script>
import {code} from "@/views/code/application.js"
import PreCode from "@/components/precode.vue";
  export default {
    components: {PreCode},
    setup() {
      return {
        code,
      };
    },
}
  </script>
