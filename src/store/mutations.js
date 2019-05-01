const addOneItem = (state, todoItem) => {
  const obj = {
    completed: false,
    item: todoItem
  };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
}

const removeOneItem = function (state, payload) {
  state.todoItems.splice(payload.index, 1);
  localStorage.removeItem(payload.todoItem.item);
}

const toggleOneItem = function (state, payload) {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  localStorage.setItem(state.todoItems[payload.index].item, JSON.stringify(state.todoItem));
}

const clearAllItems = function (state) {
  state.todoItems = [];
  localStorage.clear();
}

export {
  addOneItem,
  removeOneItem,
  toggleOneItem,
  clearAllItems
}