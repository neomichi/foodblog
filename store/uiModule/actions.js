
export default {
  UPDATE_BreadCrumb: ({ commit }, obj) => {
    commit('UPDATE_UI_BREADCRUMB', obj)
  },

  UPDATE_NOTIFICATION ({ commit }, obj) {
    commit('UPDATE_UI_NOTIFICATION', obj)
  },

  CLEAR_NOTIFICATION ({ commit }) {
    commit('CLEAR_UI_NOTIFICATION')
  },

  HIDE_LOADING ({ commit })  {
    commit('SHOW_HIDE_UI_LOADING', false)
  },

  SHOW_LOADING ({ commit })  {
    console.log('SHOW_HIDE_UI_LOADING');
    commit('SHOW_HIDE_UI_LOADING', true)
  }
};


