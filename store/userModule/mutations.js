export default {
  UPDATE_TOKEN(state,  obj ) {
    state.token = obj;
  },
  ADD_USER(state, user) {
    if (state.users.findIndex(x => x.id === user.data.id)==-1) 
    state.users.push(user.data);
  }
}
