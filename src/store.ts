import Vue from 'vue';
import Vuex from 'vuex';

interface Message {
  id: number;
  sender: string;
  text: string;
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [] as Message[]
  },
  mutations: {
    addMessage(state, message: Message) {
      state.messages.push(message);
    }
  },
  actions: {},
  modules: {}
});
