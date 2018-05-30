const state = {
  mini: false,
  drawer: true,
  userMenus: [
    {
      icon: "bubble_chart",
      title: "Logout",
      link: "/logout"
    },
    {
      icon: "bubble_chart",
      title: "Change Password",
      link: "/changepassword"
    }
  ],
  activeMenuItem: 'Attractions'
};

const getters = {
  getUserMenus: state => {
    return state.userMenus;
  },

  getActiveMenuItem: state => {
    return state.activeMenuItem;
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
