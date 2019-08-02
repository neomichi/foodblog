import axios from 'axios'
export default {  
  async UPDATE_USER ({commit}, obj ) { 
    commit('uiModule/SHOW_HIDE_UI_LOADING', true, { root: true })
    try {      
      
      const token = obj.form? await  axios.post('/api/auth', obj.data)
                        : await  axios.put('/api/auth', obj.data);
                        
      commit('UPDATE_TOKEN',token.data);
      
      const user=await axios.post('/api/user','',{
        headers: {
          Authorization: 'Bearer ' + token.data
        }
      });
      commit('ADD_USER',user);
    } catch (error) {

     commit('uiModule/UPDATE_UI_NOTIFICATION', {title:"ошибка",text:error.response.data,type:"error"}, { root: true })      
    }
    commit('uiModule/SHOW_HIDE_UI_LOADING', false, { root: true })
  },
  
}
