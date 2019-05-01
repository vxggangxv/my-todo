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
        <li class="post" v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item">
          <div class="post-title">
            <i class="checkBtn fas fa-check" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem, index)"></i>
            <!-- <i class="checkBtn fas fa-caret-right" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem, index)"></i> -->
            <span class="txt" :class="{txtCompleted: todoItem.completed}">
              {{ todoItem.item }}
            </span>
          </div>
          <span class="removeBtn" @click="removeTodo(todoItem, index)">
            <i class="removeBtn fas fa-trash-alt"></i>
          </span>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
  export default {
    // data() {
    //   return {
    //     todoItems: [],
    //   }
    // },
    methods: {
      removeTodo(todoItem, index) {
        // console.log(index);
        this.$store.commit('removeOneItem', {todoItem, index});
        // localStorage.removeItem(todoItem);
        // this.todoItems.splice(index, 1);
        // console.log(todoItem, index);
      },
      toggleComplete(todoItem, index) {
        this.$store.commit('toggleOneItem', {todoItem, index});
        // todoItem.completed = !todoItem.completed;
        // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      }
    },
    computed: {
      storedTodoItems() {
        return this.$store.getters.getTodoItems;
      }
    }
    // created() {
    //   if (localStorage.length > 0) {
    //     for (var i = 0; i < localStorage.length; i++) {
    //       if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
    //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //       }
    //     }
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
  .sec.listContainer {
    margin: 0 50px;

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
      .far, .fas {
        position: relative;
      }
      .todo-txt {
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        text-align: center;

        .far.fa-clipboard {
          top: -1px;
          // color: #d2def5;
          color: $fg-green;
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
            top: -1px;
            font-size: 14px;
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

          .post-title {
            .checkBtn {
              // line-height: 45px;
              // color: #62acde;
              color: $fg-pink;
              margin-right: 5px;
              &.checkBtnCompleted {
                color: #b3adad;
              }
            }
            .txt {
              &.txtCompleted {
                text-decoration: line-through;
                color: #b3adad;
              }
            }
            .date {
              font-family: "Roboto", sans-serif;
              margin-top: 10px;
              color: #ccc;
              font-size: 12px;
            }

          }
          .removeBtn {
            margin-left: auto;
            color: #de4343;
            .fa-trash-alt {
              top: 1px;
            }
          }

        }

      }

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