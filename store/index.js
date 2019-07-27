import Vuex from 'vuex';
import uiModule from './uiModule';


const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      ui: uiModule,
     
    }
  });
};

export default createStore