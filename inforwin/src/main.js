import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaiduMap from "vue-baidu-map";


Vue.config.productionTip = false;
Vue.use(BaiduMap, {
  ak: "PBgB8bfT58pKkhW9BpLY2BtU0II35nsA"
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
