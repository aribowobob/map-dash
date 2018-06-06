import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/components/Welcome';
import GeneralPage from '@/components/GeneralPage';
import CompletePage from '@/components/CompletePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/',
      name: 'Logout',
      component: Welcome
    }, {
      path: '/general',
      name: 'General',
      component: GeneralPage
    }, {
       path: '/complete',
       name: 'Complete',
       component: CompletePage
    }
  ]
});
