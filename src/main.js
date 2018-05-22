import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
import router from './router';
import App from './App.vue';

import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import VueProgressBar from 'vue-progressbar';
const options = {
  color: '#2196f3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.1s',
    opacity: '0.5s',
    termination: 400
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
Vue.use(VueProgressBar, options);

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
