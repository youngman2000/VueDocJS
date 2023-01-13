const code = {
    code1:`import {createApp}} from 'vue'

const app = createApp({
    /* 根组件选项 *
})`,
    code2:`import {createApp} from 'vue'
//从一个单文件组件中导入根组件
import App form './App.vue'    
const app = createApp(App)`,
    code3:`App(root component)
    TodoList
        TodoItem
            TodoDeleteButton
            TodoEditButton
        TodoFooter
            TodoClearButton
            TodoStatistics`,
    code4:`<div id="app></div>
app.mount("#app")`,
    code5:`<div id="app">
 <button @click="count++">{{count}}</button>
</div>`,
    code6:`import createApp from 'vue'
  
const app = createApp({
    data(){
        return {
            count: 0
        }
    }
})
 app.mount("#app") `
}
export {code}