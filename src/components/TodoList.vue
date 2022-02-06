<template>
  <section class="sec listContainer">
    <div class="row-arr">
      <i class="fas fa-caret-down"></i>
      <!-- <i class="fas fa-chevron-down"></i> -->
    </div>

    <div class="listDay shadow">
      <div class="todo-txt">
        <i class="far fa-clipboard"></i>
        <!-- <i class="far fa-sticky-note"></i> -->
        Todo
      </div>
      <transition-group name="list" tag="ul" class="listPost">
        <!-- <ul class="listPost"> -->
        <li
          class="post"
          v-for="(todoItem, index) in this.storedTodoItems"
          v-bind:key="todoItem.item"
        >
          <i
            class="checkBtn fas fa-check"
            :class="{ checkBtnCompleted: todoItem.completed }"
            @click="toggleComplete(todoItem, index)"
          ></i>
          <span class="post-txt" :class="{ txtCompleted: todoItem.completed }">
            {{ todoItem.item }}
            <br />
            <!-- <span class="time">14 : 00 am</span> -->
          </span>

          <span class="editBtn">
            <span class="updateBtn" @click="updateTodo(todoItem, index)">
              <i class="fas fa-pencil-alt"></i>
            </span>
            <span class="removeBtn" @click="removeTodo(todoItem, index)">
              <i class="fas fa-trash-alt"></i>
            </span>
          </span>
        </li>
      </transition-group>
    </div>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        알림
        <i
          class="closeModalBtn fa fa-times"
          aria-hidden="true"
          @click="showModal = false"
        >
        </i>
      </h3>
      <p slot="body">정말 삭제하시겠습니까?</p>
      <div slot="footer">
        <button
          ref="removeOk"
          class="modal-default-button"
          @click="showModal = false"
        >
          OK
        </button>
        <button class="modal-default-button" @click="showModal = false">
          CANCEL
        </button>
      </div>
    </Modal>

    <Modal v-if="updateModal" @close="updateModal = false">
      <h3 slot="header">
        수정
        <i
          class="closeModalBtn fa fa-times"
          aria-hidden="true"
          @click="updateModal = false"
        >
        </i>
      </h3>
      <p slot="body">
        <input
          type="text"
          class="updateTodoInput"
          ref="updateTodoInput"
          v-model="updateTodoItem"
        />
      </p>
      <div slot="footer">
        <button
          ref="updateOk"
          class="modal-default-button"
          @click="updateModal = false"
        >
          OK
        </button>
        <button class="modal-default-button" @click="updateModal = false">
          CANCEL
        </button>
      </div>
    </Modal>
  </section>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data() {
    return {
      showModal: false,
      updateModal: false,
      updateTodoItem: '',
      // todoItems: [],
    };
  },
  computed: {
    storedTodoItems() {
      return this.$store.getters.getTodoItems;
    },
  },
  methods: {
    removeTodo(todoItem, index) {
      this.$store.commit('removeOneItem', {
        todoItem,
        index,
      });
      // this.showModal = true;
      // let $_this = this;
      // this.$nextTick(function () {
      //   this.$refs.removeOk.addEventListener('click', function () {
      //     $_this.$store.commit('removeOneItem', {
      //       todoItem,
      //       index
      //     });
      //   });
      // });

      // var cfm = confirm("정말로 삭제하시겠습니까?");
      // if (cfm) {
      //   this.$store.commit('removeOneItem', {todoItem, index});
      // }
      // this.$store.commit('removeOneItem', {todoItem, index});
      // localStorage.removeItem(todoItem);
      // this.todoItems.splice(index, 1);
      // console.log(todoItem, index);
    },
    updateTodo(todoItem, index) {
      this.updateModal = true;
      let $_this = this;
      this.$nextTick(function() {
        $_this.$refs.updateTodoInput.focus();
        this.$refs.updateOk.addEventListener('click', function() {
          const item = $_this.updateTodoItem.trim();
          if (item !== '') {
            if (localStorage.getItem(item)) {
              // console.log('중복');
              alert('중복된 메모입니다');
            } else {
              $_this.$store.commit('updateOneItem', {
                todoItem,
                index,
                item,
              });
            }
            $_this.updateTodoItem = '';
          } else {
            alert('할 일을 입력하세요');
          }
        });
      });
    },
    toggleComplete(todoItem, index) {
      this.$store.commit('toggleOneItem', {
        todoItem,
        index,
      });
      // todoItem.completed = !todoItem.completed;
      // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      // console.log(document.getElementsByClassName('listContainer'));
    },
  },
  components: {
    Modal,
  },
  // created() {
  //   if (localStorage.length > 0) {
  //     for (var i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //       }
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.sec.listContainer {
  margin: 0 40px;

  .row-arr {
    margin: 10px auto;
    text-align: center;
    color: rgb(40, 53, 228);

    .fa-caret-down {
      font-size: 28px;
    }
  }

  .listDay {
    padding: 30px 20px;
    margin-top: 0;
    background: white;
    border-radius: 5px;
    text-align: left;

    .far,
    .fas {
      position: relative;
    }

    .todo-txt {
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      text-align: center;

      .far.fa-clipboard {
        font-size: 15px;
        top: -1px;
        color: #ccdbf7;
        // color: $fg-green;
        margin-right: 2px;
      }
    }

    ul.listPost {
      margin-top: 40px;
      list-style-type: none;

      li.post {
        display: flex;
        align-items: center;
        align-items: flex-start;
        margin: 1.5rem 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #f0f0f0;
        // padding: 10px 0;
        // border-radius: 10px;
        // border: 1px solid #f0f0f0;
        // box-shadow: 0px 10px 10px rgba(0,0,0, 0.03);

        // min-height: 50px;
        // height: 50px;
        // line-height: 50px;
        // padding: 0 0.9rem;
        // background: yellow;
        .fa-check {
          top: 2px;
          font-size: 14px;
          cursor: pointer;
        }

        .fa-caret-right {
          font-size: 20px;
          top: 1px;
        }

        .ic-caret-right {
          position: relative;
          font-size: 12px;
          top: 2px;
          padding-right: 10px;
        }

        .checkBtn {
          // line-height: 45px;
          // color: #62acde;
          color: $fg-pink;
          margin-right: 5px;

          &.checkBtnCompleted {
            color: #b3adad;
          }
        }

        .post-txt {
          &.txtCompleted {
            text-decoration: line-through;
            color: #b3adad;
          }
          .time {
            font-size: 12px;
          }
        }

        .date {
          font-family: 'Roboto', sans-serif;
          margin-top: 10px;
          color: #ccc;
          font-size: 12px;
        }

        .editBtn {
          margin-left: auto;
          color: $fg-red;

          .fas {
            top: 1px;
            margin-left: 8px;
            cursor: pointer;
          }
          span:first-child .fas {
            margin-left: 0;
          }
          .updateBtn .fas {
            color: $fg-lightblue;
          }
        }
      }
    }
  }
  .updateTodoInput {
    appearance: none;
    width: 100%;
    padding: 5px 0;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #333333;
    text-align: center;
  }
}

/* transition css */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
  .list-leave-to

  /* .list-leave-active below version 2.1.8 */
 {
  opacity: 0;
  transform: translateY(30px);
}
</style>
