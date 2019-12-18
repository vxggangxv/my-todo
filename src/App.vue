<template>
  <div id="app">
    <div class="bg-body"></div>
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  created() {
    alert("모바일크기에 최적화되어 있습니다.");
  }
};
</script>

<style lang="scss">
body {
  font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
  color: $primary-color;
}
a,
a:hover,
a:active,
a:focus {
  text-decoration: none;
  color: inherit;
}
input {
  border-style: groove;
  // width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.07);
}
.primary-color {
  color: #38424e;
}
.fg-blue {
  color: #2133ed !important;
}
.fg-pink {
  color: #ff436b !important;
}
.fg-green {
  color: #41b883 !important;
}
#app {
  position: relative;
  max-width: 375px;
  margin: 0 auto;
}
.bg-body {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #fefefe, #dadaff);
}
</style>
