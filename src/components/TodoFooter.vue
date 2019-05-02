<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      var cfm = confirm("정말로 삭제하시겠습니까?");
        if (cfm) {
          this.$store.commit('clearAllItems');
        }
      // localStorage.clear();
      console.log(this.$store.state.todoItems.length);
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  margin: 30px auto;
  width: 10rem;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  cursor: pointer;
}
.clearAllBtn {
  background: rgb(40,37,214);
  display: block;
  border-radius: 25px;
  text-align: center;
  color: #fff;
}
</style>
