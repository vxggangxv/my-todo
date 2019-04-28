<template>
  <section class="sec listContainer">
    <div class="row-arr">
      <i class="fas fa-caret-down"></i>
    </div>

    <div class="listDay shadow">
      <div class="todo-txt">
        <i class="far fa-clipboard"></i>
        <!-- <i class="far fa-sticky-note"></i> -->
        Todo
      </div>
      <transition-group name="list" tag="ul" class="listPost">
        <!-- <ul class="listPost"> -->
        <li v-for="(todoItem, index) in this.getTodoItems" class="post" v-bind:key="todoItem.item">
          <i class="fas fa-caret-right"></i>
          <!-- <i class="checkBtn fas fa-checkBtn"></i> -->
          <!-- <span class="textCompleted"></span> -->
          <div class="post-title">
            <p class="txt">
              Morning Jogging
            </p>
          </div>
          <span class="removeBtn">
            <i class="removeBtn fas fa-trash-alt"></i>
          </span>
        </li>
        <!-- <li class="post">
          <i class="fas fa-caret-right"></i>
          <div class="post-title">
            <p class="txt">
              Study Group
            </p>
          </div>
          <span class="removeBtn">
            <i class="removeBtn fas fa-trash-alt"></i>
          </span>
        </li>
        <li class="post">
          <i class="fas fa-caret-right"></i>
          <div class="post-title">
            <p class="txt">
              Afternoon Meeting
            </p>
          </div>
          <span class="removeBtn">
            <i class="removeBtn fas fa-trash-alt"></i>
          </span>
        </li> -->
        <!-- </ul> -->
      </transition-group>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';


  export default {
    computed: {
      ...mapGetters({
        getTodoItems: 'getTodoItems'
      })
    },
    methods: {
      ...mapMutations({
        removeOneItem: 'removeOneItem',
        toggleOneItem: 'toggleOneItem'
      })
    },
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

      .todo-txt {
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        text-align: center;

        .far {
          color: rgb(226, 232, 244);
          margin-right: 5px;
        }
      }
    }

    ul.listPost {
      margin-top: 40px;
      list-style-type: none;
    }

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
      .fas {
        position: relative;
      }

      .fa-caret-right {
        font-size: 20px;
        color: rgb(255, 67, 117);
        top: -1px;
        padding-right: 10px;
      }

      .ic-caret-right {
        position: relative;
        font-size: 12px;
        color: rgb(255, 67, 117);
        top: 2px;
        padding-right: 10px;
      }

      .post-title {
        .txt {}

        .date {
          font-family: "Roboto", sans-serif;
          margin-top: 10px;
          color: #ccc;
          font-size: 12px;
        }
      }

      .fa-trash-alt {
        top: 1px;
      }
    }
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .checkBtnCompleted {
    color: #b3adad;
  }

  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
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