import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import Attractions from '@/components/Attractions';

Vue.use(Router);

export default new Router({
  routes: [
    {
      // Homepage
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/attractions',
      name: 'Attractions',
      component: Attractions
    }
  ]
});
