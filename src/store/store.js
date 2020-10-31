import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Curso from '@/modules/curso';

export default new Vuex.Store({
  modules: {
    curso: Curso
  }
})