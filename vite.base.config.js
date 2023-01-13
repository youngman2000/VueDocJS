/*
 * @Author: youngsuper 1406422800@qq.com
 * @Date: 2023-01-13 16:04:59
 * @LastEditors: youngsuper 1406422800@qq.com
 * @LastEditTime: 2023-01-13 16:05:24
 * @FilePath: /VueDocJS/vite.base.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

import vue from '@vitejs/plugin-vue';

import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

export default  defineConfig({
    plugins:[
        vue(),
        Components({
            dts:true,
            resolvers:[AntDesignVueResolver()]
        }),
    ],
    resolve:{
        alias:{
            "@":fileURLToPath(new URL("./src",import.meta.url))
        }
    }
})