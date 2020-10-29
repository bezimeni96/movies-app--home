import Vuex from 'vuex';
import Vue from 'vue';

import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    movies: [],
    searchText: '',
    currentPage: 1,
    PAGE_SIZE: 5,

    token: '',
    user: {},
  },

  getters,
  mutations,
  actions
})