import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './views/index.js' 
import store from './store'
import './plugins/element.js'
import '@/styles/reset.css'
import '@/styles/mian.css'
import '@/styles/vant.scss'
import ElementUI from "element-ui";

const components = [];
const contexts = require.context("./component", true, /\.vue$/);
contexts.keys().forEach(component => {
    let componentEntity = contexts(component).default;
    components.push(componentEntity);
});

const dashboardPlugin = {
    install(Vue) {
        components.forEach(com => {
            Vue.component(com.name, com);
        });
    }
};

Vue.use(dashboardPlugin);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
