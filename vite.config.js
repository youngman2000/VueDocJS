/*
 * @Author: youngsuper 1406422800@qq.com
 * @Date: 2023-01-13 16:00:18
 * @LastEditors: youngsuper 1406422800@qq.com
 * @LastEditTime: 2023-01-13 16:04:51
 * @FilePath: /VueDocJS/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import prodConfig from "./vite.prod.config.js";
import baseConfig from "./vite.base.config.js";

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return { ...baseConfig }
  } else if (command === 'build') {
    return Object.assign({}, baseConfig, prodConfig)
  }
})