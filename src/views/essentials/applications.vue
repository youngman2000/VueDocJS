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
