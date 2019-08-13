
export default {
  UPDATE_BreadCrumb: ({ commit }, obj) => {
    commit('UPDATE_UI_BREADCRUMB', obj)
  },

  UPDATE_NOTIFICATION ({ commit }, obj) {
    commit('UPDATE_UI_NOTIFICATION', obj)
  },

  UPDATE_NOTIFICATION_ERROR ({ commit },obj) {
    ///{title:"",text:""}
    let mess={title:obj.title,text:obj.text,type:"error"};

    commit('UPDATE_UI_NOTIFICATION', mess)
  },
  UPDATE_NOTIFICATION_SUCCESS ({ commit },obj) {
    ///{title:"",text:""}
    let mess={title:obj.title,text:obj.text,type:"success"};

    commit('UPDATE_UI_NOTIFICATION', mess)
  },
  
  CLEAR_NOTIFICATION ({ commit }) {
    commit('CLEAR_UI_NOTIFICATION')
  },

  HIDE_LOADING ({ commit })  {
    commit('SHOW_HIDE_UI_LOADING', false)
  },

  SHOW_LOADING ({ commit })  {    
    commit('SHOW_HIDE_UI_LOADING', true)
  }
};


