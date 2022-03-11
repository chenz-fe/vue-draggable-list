// // 导入私有模块 以及公共方法
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const modulesFiles = require.context('./component/', true, /\Store.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
// modules.strict = true
const store = new Vuex.Store({
  modules
})
console.log(store);
export default store
