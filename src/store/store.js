import Vue from 'vue';
import Vuex from 'vuex';
import { TODO_PREFIX } from './utils';
// import * as getters from './getters.js'
// import * as mutations from './mutations.js'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (
          localStorage.key(i) !== 'loglevel:webpack-dev-server' &&
          localStorage.key(i).includes(TODO_PREFIX)
        ) {
          // console.log('localStorage.key(i)', localStorage.key(i));
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

// TODO: edit시 해당 순서 유지하도록, localStorage 배열로 변경
export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    },
  },
  // getters,
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {
        completed: false,
        item: todoItem,
      };
      localStorage.setItem(TODO_PREFIX + todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    updateOneItem(state, payload) {
      localStorage.removeItem(TODO_PREFIX + payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
      const obj = {
        completed: false,
        item: payload.item,
      };
      localStorage.setItem(TODO_PREFIX + payload.item, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(TODO_PREFIX + payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index]
        .completed;
      localStorage.setItem(
        TODO_PREFIX + payload.todoItem.item,
        JSON.stringify(state.todoItems[payload.index])
      );
      // localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      state.todoItems.forEach((todoItem) => {
        localStorage.removeItem(TODO_PREFIX + todoItem.item);
      });
      state.todoItems = [];
    },
  },
  // mutations,
});
