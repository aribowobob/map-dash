import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
import L from 'leaflet';
import store from './store';
import router from './router';
import App from './App.vue';

import 'leaflet/dist/leaflet.css';
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

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
