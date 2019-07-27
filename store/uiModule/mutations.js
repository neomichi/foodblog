export default {
    UPDATE_UI_BREADCRUMB:(state, obj)=> {
        state.breadCrumb = obj
      },
      UPDATE_UI_NOTIFICATION:(state, obj)=> {
        state.notification = obj
      },
      SHOW_HIDE_UI_LOADING:(state, obj)=> {
        state.loading = obj
      }
};