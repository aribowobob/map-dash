import Vue from 'vue';
import Vuex from 'vuex';
import menu from './menu';
import user from './user';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    menu,
    user
  },
  strict: debug,
  plugins: [createLogger()]
});
