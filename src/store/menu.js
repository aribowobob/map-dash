const state = {
  appName: 'App Name',
  mini: false,
  drawer: true,
  activeMenuItem: 'Attractions',
  showLoginForm: false
};

const getters = {
  getActiveMenuItem: state => {
    return state.activeMenuItem;
  },

  getAppName: state => {
    return state.appName;
  }
};

const actions = {
  clickMenu ({ commit }, menuItem) {
    commit('setActiveMenuItem', menuItem.title);
  }
};

const mutations = {
  setActiveMenuItem (state, menuTitle) {
    state.activeMenuItem = menuTitle;
  },

  toggleMini () {
    state.mini = !state.mini;
  },

  toggleDrawer () {
    state.drawer = !state.drawer;
  },

  toggleShowLoginForm () {
    state.showLoginForm = !state.showLoginForm;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
