const state = {
  firstName: 'Bowo',
  lastName: 'Ana'
};

const getters = {
  getRealName: state => {
    return [state.firstName, state.lastName].join(' ');
  }
};

const actions = {

};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations
}
