<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        알림
        <i class="closeModalBtn fa fa-times" aria-hidden="true" @click="showModal = false">
        </i>
      </h3>
      <p slot="body">모두 삭제하시겠습니까?</p>
      <div slot="footer">
        <button ref="modalOk" class="modal-default-button" @click="showModal = false">OK</button>
        <button class="modal-default-button" @click="showModal = false">CANCEL</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

  export default {
    data() {
      return {
        showModal: false,
      }
    },
    methods: {
      clearTodo() {
        // console.log(localStorage.length)
        if ( localStorage.length > 0 ) {
          this.showModal = true;
          let thisStore = this.$store;
          this.$nextTick(function () {
            this.$refs.modalOk.addEventListener('click', function () {
              // console.log(thisStore);
              thisStore.commit('clearAllItems');
            });
          });
        } else {
          alert('삭제 할 내용이 없습니다')
        }
        
        // var cfm = confirm("정말로 삭제하시겠습니까?");
        // if (cfm) {
        //   this.$store.commit('clearAllItems');
        // }
        // localStorage.clear();
        // console.log(this.$store.state.todoItems.length);
      }
    },
    components: {
      Modal
    },
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
    background: rgb(40, 37, 214);
    display: block;
    border-radius: 25px;
    text-align: center;
    color: #fff;
  }
</style>