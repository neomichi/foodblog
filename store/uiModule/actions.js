export default {
  UPDATE_BreadCrumb: ({ commit }, obj) => {
    commit('UPDATE_UI_BREADCRUMB', obj)
  },
  UPDATE_NOTIFICATION: ({ commit }, obj) => {
    commit('UPDATE_UI_NOTIFICATION', obj)
  },
  HIDE_LOADING: ({ commit }) => {
    commit('SHOW_HIDE_UI_LOADING', false)
  },
  SHOW_LOADING: ({ commit }) => {
    commit('SHOW_HIDE_UI_LOADING', true)
  }
}
