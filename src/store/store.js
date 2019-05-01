import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'
// import * as mutations from './mutations.js'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems : storage.fetch(),
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  // getters,
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {
        completed: false,
        item: todoItem
      };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.index);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.setItem(state.todoItems[payload.index].item, JSON.stringify(state.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  }
  // mutations,
})
