<template>
  <div class="inputBox shadow">
    <input class="inp todo" type="text" v-model="newTodoItem" @keyup.enter="addTodo"
      placeholder="Type what you have to do">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <i class="closeModalBtn fa fa-times" aria-hidden="true" @click="showModal = false">
        </i>
      </h3>
      <p slot="body">할 일을 입력하세요.</p>
    </Modal>

    <Modal v-if="dupliModal" @close="dupliModal = false">
      <h3 slot="header">
        경고
        <i class="closeModalBtn fa fa-times" aria-hidden="true" @click="dupliModal = false">
        </i>
      </h3>
      <p slot="body">중복된 메모가 있습니다.</p>
    </Modal>
  </div>
</template>

<script>
  import AlertModal from './common/AlertModal.vue';

  export default {
    components: {
      Modal: AlertModal
    },
    data() {
      return {
        newTodoItem: '',
        showModal: false,
        dupliModal: false,
      }
    },
    methods: {
      addTodo() {
        console.log(this.newTodoItem);
        console.log(this.$store.state.todoItems.length);
        if (this.newTodoItem !== "") {
          const item = this.newTodoItem.trim();
          // 중복 체크
          if (localStorage.getItem(item)) {
            // console.log('중복');
            this.dupliModal = true;
          } else {
            // console.log('정상');
            this.$store.commit('addOneItem', item);
          }

          // this.$store.commit('addOneItem', item);
          // const obj = {completed: false, item: item};
          // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
          this.clearInput();
        } else {
          this.showModal = true;
        }
      },
      clearInput() {
        this.newTodoItem = "";
      }
    }
  }
</script>

<style lang="scss" scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    position: relative;
    margin: 0 50px;
    padding-right: 55px;
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox .inp.todo {
    position: relative;
    top: 5px;
    display: block;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding-left: 10px;
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    position: absolute;
    top: 0;
    right: 0;
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 50px;
    border-radius: 0 5px 5px 0;
    text-align: center;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }

  // 모달용
  .closeModalBtn {
    color: #42b983;
  }
</style>