import Vue from "vue";
import Vuex from "vuex";

// ui states for conditional rendering

import ui from "./UI";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ui,
  },
});
