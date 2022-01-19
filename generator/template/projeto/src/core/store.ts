import Vue from 'vue';
import Vuex from 'vuex';
import { users } from '../webApi';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    boxInfoLoading: false,
    empresaAtual: null,
    empresas: null,
    menu: null, // o menu fica no core por enquanto, mas pode ir para outro modulo
    appbar: null,
    isAppLoading: false,
    toastOptions: null,
    toastOptionsList: null,
  },
  getters: {
    getMenuItems: state => state.menu,
    isBoxInfoLoading: state => state.boxInfoLoading,
    getEmpresaAtual: state => state.empresaAtual,
    getEmpresas: state => state.empresas,
    getAppbarData: state => state.appbar,
  },
  mutations: {
    setBoxInfoLoading: (state, payload) => {
      state.boxInfoLoading = payload;
    },
    setEmpresaAtual: (state, payload) => {
      state.empresaAtual = payload;
    },
    setEmpresas: (state, payload) => {
      state.empresas = payload;
    },
    setMenu: (state, payload) => {
      state.menu = payload;
    },
    setAppbar: (state, payload) => {
      state.appbar = payload;
    },
    setAppLoading: (state, payload) => {
      state.isAppLoading = payload;
    },
    setToastOptionsList: (state, payload) => {
      state.toastOptionsList = payload;
    },
    toggleToast: (state, payload) => {
      state.toastOptions = payload;
    },
  },
  actions: {
    loadMenu: async ({ commit }) => {
      const { data: menu } = await users.get('menu/get');
      commit('setMenu', menu);
    },
    loadAppbar: async ({ commit }) => {
      const { data: appbarData } = await users.get('appbar/get');
      commit('setAppbar', appbarData);
    },
    loadShellData: async ({ dispatch }) => {
      dispatch('loadMenu');
      dispatch('loadBadge');
      dispatch('loadAppbar');
    },
    showMultipleToasts: ({ commit }, payload) => {
      commit('setToastOptionsList', payload);
    },
  },
});

export default store;
