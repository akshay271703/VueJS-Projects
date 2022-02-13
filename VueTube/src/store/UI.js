const state = {
  showSidebar: false,
};

const actions = {
  displaySidebar({ commit }, payload) {
    commit("DISPAY_SIDEBAR", payload);
  },
};

const mutations = {
  DISPAY_SIDEBAR(state, value) {
    state.showSidebar = value;
  },
};

const getters = {
  showSidebar(state) {
    return state.showSidebar;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
