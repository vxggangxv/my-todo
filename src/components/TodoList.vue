<template>
    <section class="sec list">
        <!-- <transition-group name="list" tag="ul"> -->
        <ul>
            <li class="shadow">
                <i class="checkBtn fas fa-checkBtn"></i>
                <span class="textCompleted"></span>
                <span class="removeBtn">
                    <i class="removeBtn fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
        <!-- </transition-group> -->
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sec.list {
  margin: 0 50px;
}

ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
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
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
