import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message:[]
  },
  getters: {
    message(state) {
      return state.message
    },
    test(state) {
      return state.message.status.filter('完了') 
    },
    getDone: (state) => (status) => {
      return state.message.filter(todo => todo.status === status)
    }
  },
  mutations: {
    setTask(state, payload) {
      const id = state.message.length 
      store.state.message.push({id, item: payload.task, status: '作業中'})
    },
    setStatus(state, payload) {
      if(state.message[payload.id].status === '作業中'){
        state.message[payload.id].status = '完了'
      } else {
        state.message[payload.id].status = '作業中'
      }
    },
    setDelete(state, payload) {
      state.message.splice(payload.id, 1)
      state.message.forEach( function( item ) {
        if( payload.id < item.id ){
          const number = item.id -1
          state.message[number].id = number
        }
      });
    }
  },
  actions: { 
    doAdd({commit},task) {commit('setTask', { task })},
    doStatus({commit},id) {commit('setStatus', { id })},
    doDelete({commit},id) {commit('setDelete', { id })}
  }
})

export default store