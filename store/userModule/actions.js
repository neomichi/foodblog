import axios from 'axios'
export default {  
  async LOGIN_USER ({commit}, obj ) { 
    commit('uiModule/SHOW_HIDE_UI_LOADING', true, { root: true })
    try {
     
      const token = await axios.post('/api/auth', obj)
      console.log(token.data);
      
    } catch (error) {   

      
     commit('uiModule/UPDATE_UI_NOTIFICATION', {title:"ошибка",text:error.response.data,type:"error"}, { root: true })      
    }
    commit('uiModule/SHOW_HIDE_UI_LOADING', false, { root: true })
  },
  async REG_USER ({commit}, obj ) { 
    commit('uiModule/SHOW_HIDE_UI_LOADING', true, { root: true })
    try {
     
      const token = await axios.put('/api/auth', obj)
      console.log(token.data);
      
    } catch (error) {   

      
     commit('uiModule/UPDATE_UI_NOTIFICATION', {title:"ошибка",text:error.response.data,type:"error"}, { root: true })      
    }
    commit('uiModule/SHOW_HIDE_UI_LOADING', false, { root: true })
  },
}
